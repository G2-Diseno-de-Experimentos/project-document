# ElectroLink: evidencias de verificación del Avance 2

Las evidencias del 10 de noviembre de 2026 corresponden a las revisiones `5391df7e91861cf5797ed8b65cc1770bdf402add` del [backend](https://github.com/G2-Diseno-de-Experimentos/ElectroLink-Backend/commit/5391df7e91861cf5797ed8b65cc1770bdf402add) y `e44a087335c9baf3dcc5b65f1158cd60c1d99f6f` del [frontend web](https://github.com/G2-Diseno-de-Experimentos/Electrolink-Frontend/commit/e44a087335c9baf3dcc5b65f1158cd60c1d99f6f), ambas de `develop`. Se ejecutaron en copias locales, no contra producción.

| Archivo | Evidencia |
|---|---|
| [surefire-baseline.json](surefire-baseline.json) | Casos por clase y método de la corrida base. Incluye el estado de los runners omitidos y de los métodos de validación sintáctica. |
| [karate-http.json](karate-http.json) | Resumen de las cuatro suites HTTP reales. Excluye el contenido de las peticiones, los cuerpos de respuesta y los tokens. |
| [system-tests.json](system-tests.json) | Revisiones, huella del paquete web, versión de navegador y resultados de la suite de sistema. |
| [static-analysis.json](static-analysis.json) | Resultados de Checkstyle y SpotBugs/Find Security Bugs, con reglas, categorías y ubicaciones de los avisos. |
| [spotbugs-plugin.xml](spotbugs-plugin.xml) | Configuración aplicada únicamente a la copia de análisis. |

## Reproducción

### Regresión y análisis estático

1. Usar una copia de la revisión del backend indicada arriba. Compilar con Maven 3.9.16 y un JDK compatible con `release 21`; en esta sesión se usó JDK 26.0.2.1.
2. Para reproducir la corrida base en el mismo JDK, cargar Mockito como agente y dejar fuera el backend HTTP. El puerto de control `1` debe estar libre. Ejecutar en PowerShell desde la copia del backend:

   ```powershell
   $mockitoAgent = Join-Path $env:USERPROFILE '.m2/repository/org/mockito/mockito-core/5.19.0/mockito-core-5.19.0.jar'
   mvn -B '-Dtest=!*IT,!ElectrolinkPlatformApplicationTests' '-Dmonitoring.baseUrl=http://127.0.0.1:1' '-Djacoco.skip=true' "-DargLine=-javaagent:$mockitoAgent" test
   ```

3. Insertar el fragmento [spotbugs-plugin.xml](spotbugs-plugin.xml) en `build/plugins` del POM de la copia y ejecutar:

   ```powershell
   mvn -B compile checkstyle:check com.github.spotbugs:spotbugs-maven-plugin:4.10.5.0:spotbugs
   ```

4. Conservar los reportes base antes de ejecutar los runners HTTP, para que no se sobrescriban. Desde el repositorio del informe, [collect-av2-static-evidence.ps1](../../../../scripts/collect-av2-static-evidence.ps1) exporta los conteos de Surefire y de los analizadores sin copiar las propiedades del sistema de los XML.

### Integración HTTP y pruebas de sistema

1. Empaquetar el backend con `mvn -B -DskipTests package`. En una **copia desechable**, usar `scripts/start-assets-local.ps1 -SkipBuild` del backend para iniciar PostgreSQL 17.11 y Spring Boot en los puertos locales 55432 y 8091, respectivamente. Confirmar que Swagger responde antes de ejecutar el runner de inventario.
2. En el backend de prueba, seleccionar `AssetsKarateIT,ComponentInventoryKarateTest,SdpKarateIT,MonitoringKarateTest#monitoringEndpoints` mediante `-Dtest`. Configurar `assets.baseUrl`, `sdp.baseUrl` y `monitoring.baseUrl` en `http://127.0.0.1:8091` y dejar el JWT de Monitoring vacío para comprobar solo el acceso anónimo. Si se omite inventario al iniciar, comprobar Swagger y repetir únicamente `ComponentInventoryKarateTest`. El [colector de Karate](../../../../scripts/collect-av2-karate-evidence.cjs) genera el resumen sin publicar los logs crudos.
3. En la copia del frontend, cambiar solo `serverBasePath` en los archivos de entorno a `http://localhost:8091/api/v1`. Instalar las dependencias del lockfile y compilar con `npm run build -- --configuration development`.
4. Instalar `playwright@1.58.2` en un directorio de trabajo y tener Edge disponible. Configurar `NODE_PATH` si Playwright no está en la ruta de resolución del script. Desde el repositorio del informe:

   ```powershell
   $env:AV2_BACKEND_SHA = '5391df7e91861cf5797ed8b65cc1770bdf402add'
   $env:AV2_WEB_SHA = 'e44a087335c9baf3dcc5b65f1158cd60c1d99f6f'
   $env:AV2_ISOLATED_DB = '1'
   node scripts/run-av2-system-tests.cjs 'ruta/al/frontend/dist/electrolink-frontend/browser'
   ```

   El script sirve Angular temporalmente en `127.0.0.1:4200`, crea datos sintéticos y devuelve código 1 si hay casos fallidos. Guarda capturas sin cursor y un resumen sin credenciales. Las cuentas de prueba se mantienen únicamente en la base desechable; detener ese entorno al terminar.

Los resultados web no acreditan la aplicación móvil ni sustituyen una auditoría externa.
