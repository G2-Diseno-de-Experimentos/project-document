param(
    [Parameter(Mandatory)][string]$BackendPath,
    [Parameter(Mandatory)][ValidatePattern('^[0-9a-f]{40}$')][string]$BackendCommit
)
$ErrorActionPreference = 'Stop'
$backend = (Resolve-Path -LiteralPath $BackendPath).Path
$evidence = Join-Path (Split-Path -Parent $PSScriptRoot) 'assets/evidence/cap6/av2'
$target = Join-Path $backend 'target'
New-Item -ItemType Directory -Path $evidence -Force | Out-Null

function Read-Report([string]$report) {
    [xml](Get-Content -LiteralPath $report -Raw)
}

function Counts($items, [string]$attribute) {
    @($items | Group-Object $attribute | Sort-Object Count -Descending |
        ForEach-Object { [ordered]@{ name = $_.Name; count = $_.Count } })
}

$checkstylePath = Join-Path $target 'checkstyle-result.xml'
$spotbugsPath = Join-Path $target 'spotbugsXml.xml'
$style = Read-Report $checkstylePath
$spotbugs = Read-Report $spotbugsPath
$issues = @($style.SelectNodes('/checkstyle/file/error'))
$bugs = @($spotbugs.SelectNodes('/BugCollection/BugInstance'))
$summary = $spotbugs.SelectSingleNode('/BugCollection/FindBugsSummary')
$errors = $spotbugs.SelectSingleNode('/BugCollection/Errors')
if (!$summary -or !$errors -or $bugs.Count -ne [int]$summary.total_bugs) {
    throw 'El resumen de SpotBugs no coincide con los hallazgos del XML.'
}
$static = [ordered]@{
    backendCommit = $BackendCommit
    checkstyle = [ordered]@{
        mavenPlugin = '3.6.0'
        engine = $style.checkstyle.version
        config = 'google_checks.xml'
        reportTimeUtc = (Get-Item -LiteralPath $checkstylePath).LastWriteTimeUtc.ToString('o')
        files = $style.SelectNodes('/checkstyle/file').Count
        severities = @(Counts $issues 'severity')
        rules = @(Counts $issues 'source')
    }
    spotbugs = [ordered]@{
        mavenPlugin = '4.10.5.0'
        engine = $spotbugs.BugCollection.version
        findSecBugs = '1.14.0'
        effort = 'Max'
        threshold = 'Low'
        reportTimeUtc = (Get-Item -LiteralPath $spotbugsPath).LastWriteTimeUtc.ToString('o')
        classes = [int]$summary.total_classes
        findings = $bugs.Count
        analysisErrors = [int]$errors.errors
        missingClasses = [int]$errors.missingClasses
        categories = @(Counts $bugs 'category')
        priorities = @(Counts $bugs 'priority')
        rules = @(Counts $bugs 'type')
        locations = @($bugs | ForEach-Object {
            $location = $_.SelectSingleNode('SourceLine')
            [ordered]@{
                rule = $_.type
                category = $_.category
                priority = [int]$_.priority
                source = $location.sourcepath
                line = [int]$location.start
            }
        })
    }
}
$static | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath (Join-Path $evidence 'static-analysis.json') -Encoding utf8NoBOM

$unitFiles = @(Get-ChildItem -LiteralPath (Join-Path $target 'surefire-reports') -Filter 'TEST-*.xml')
if ($unitFiles.Name -match 'KarateIT\.xml$') {
    throw 'La carpeta Surefire mezcla resultados base y HTTP. Usa los reportes de la corrida base.'
}
$suites = @($unitFiles | ForEach-Object {
    $suite = (Read-Report $_.FullName).testsuite
    [ordered]@{
        suite = $suite.name
        cases = [int]$suite.tests
        failures = [int]$suite.failures
        errors = [int]$suite.errors
        skipped = [int]$suite.skipped
        casesByStatus = @($suite.SelectNodes('testcase') | ForEach-Object {
            $status = if ($_.SelectSingleNode('skipped')) { 'omitido' }
                elseif ($_.SelectSingleNode('failure|error')) { 'falló' }
                else { 'aprobado' }
            [ordered]@{ name = $_.name; status = $status }
        })
    }
})
if (!$suites.Count) { throw 'No se encontraron reportes Surefire de la corrida base.' }
$unit = [ordered]@{
    backendCommit = $BackendCommit
    reportTimeUtc = ($unitFiles | Sort-Object LastWriteTimeUtc -Descending | Select-Object -First 1).LastWriteTimeUtc.ToString('o')
    filter = '!*IT,!ElectrolinkPlatformApplicationTests'
    environment = 'Maven 3.9.16, JDK 26.0.2.1, release 21; Mockito 5.19.0 como agente, JaCoCo desactivado.'
    cases = [int]($suites.cases | Measure-Object -Sum).Sum
    failures = [int]($suites.failures | Measure-Object -Sum).Sum
    errors = [int]($suites.errors | Measure-Object -Sum).Sum
    skipped = [int]($suites.skipped | Measure-Object -Sum).Sum
    suites = $suites
}
$unit | ConvertTo-Json -Depth 10 | Set-Content -LiteralPath (Join-Path $evidence 'surefire-baseline.json') -Encoding utf8NoBOM
Write-Output "Resultados: Surefire $($unit.cases) casos / $($unit.skipped) omitidos; SpotBugs $($bugs.Count) avisos."
