# Recorta únicamente el panel Run de capturas auténticas; no recrea resultados.
# Las capturas originales y sus coordenadas se conservan en el manifiesto.
param([string]$ReportRoot = (Split-Path $PSScriptRoot -Parent))
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$manifestPath = Join-Path $ReportRoot 'assets/evidence/cap6/intellij-unit-tests/results.json'
$manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
foreach ($capture in $manifest.captures) {
    $sourcePath = Join-Path $ReportRoot $capture.fullScreenshot
    $destinationPath = Join-Path $ReportRoot $capture.reportScreenshot
    $original = [System.Drawing.Bitmap]::new($sourcePath)
    $rectangle = [System.Drawing.Rectangle]::new($capture.crop.left, $capture.crop.top, $capture.crop.width, $capture.crop.height)
    try {
        $cropped = $original.Clone($rectangle, $original.PixelFormat)
        try { $cropped.Save($destinationPath, [System.Drawing.Imaging.ImageFormat]::Png) }
        finally { $cropped.Dispose() }
    }
    finally { $original.Dispose() }
    Write-Output "Captura recortada: $($capture.class)"
}
