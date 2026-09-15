<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/UPC_logo_transparente.png" alt="upc-logo" width="120px" height="120px"/>
</p>

<h1 align="center">
    Universidad Peruana de Ciencias Aplicadas
</h1>

<h3 align="center">
    Carrera: Ingeniería de Software
    <br> <br>
    Curso: 1ASI0732 - Diseño de Experimentos de Ingeniería de Software
    <br> <br>
    Sección: 9090
    <br> <br>
    Profesor: Juan Antonio Flores Moroco
    <br> <br>
    Ciclo: 2026-20 
    <br> <br>
    Informe de TF
    <br> <br>
    Startup: HampCoders
    <br> <br>
    Producto: ElectroLink  
</h3>

<div align="center">
  
|             <div style="width:300px">Alumno</div>             | <div style="width:125px">Código</div> |
|:-------------------------------------------------------------:|:-------------------------------------------:|
|   Ivo Marcelo Machado Bracamonte                                                            |   U20231C368                               |
|   Leonardo Fabrizzio Junior Prieto Mantari                                                            |    U202319949                               |
|                                                               |                                   |
|                                                               |                                   |             
|                                                               |                                   |

</div>

<div align="center"> Diciembre 2026 </div>

---

## Tabla de Contenidos

- Student Outcome
- Capítulo I: Introducción
  - 1.1. Startup Profile
    - 1.1.1. Descripción de la Startup
    - 1.1.2. Perfiles de integrantes del equipo
  - 1.2. Solution Profile
    - 1.2.1. Antecedentes y problemática
    - 1.2.2. Lean UX Process
      - 1.2.2.1. Lean UX Problem Statements
      - 1.2.2.2. Lean UX Assumptions
      - 1.2.2.3. Lean UX Hypothesis Statements
      - 1.2.2.4. Lean UX Canvas
  - 1.3. Segmentos objetivo
- Capítulo II: Requirements Elicitation & Analysis
  - 2.1. Competidores
    - 2.1.1. Análisis competitivo
    - 2.1.2. Estrategias y tácticas frente a competidores
  - 2.2. Entrevistas
    - 2.2.1. Diseño de entrevistas
    - 2.2.2. Registro de entrevistas
    - 2.2.3. Análisis de entrevistas
  - 2.3. Needfinding
    - 2.3.1. User Personas
    - 2.3.2. User Task Matrix
    - 2.3.3. User Journey Mapping
    - 2.3.4. Empathy Mapping
    - 2.3.5. As-is Scenario Mapping
  - 2.4. Ubiquitous Language
- Capítulo III: Requirements Specification
  - 3.1. To-Be Scenario Mapping
  - 3.2. User Stories
  - 3.3. Product Backlog
  - 3.4. Impact Mapping
- Avance de Conclusiones, Bibliografía y Anexos
- Capítulo IV: Product Design
  - 4.1. Style Guidelines
    - 4.1.1. General Style Guidelines
    - 4.1.2. Web Style Guidelines
    - 4.1.3. Mobile Style Guidelines
      - 4.1.3.1. iOS Mobile Style Guidelines
      - 4.1.3.2. Android Mobile Style Guidelines
  - 4.2. Information Architecture
    - 4.2.1. Organization Systems
    - 4.2.2. Labeling Systems
    - 4.2.3. SEO Tags and Meta Tags
    - 4.2.4. Searching Systems
    - 4.2.5. Navigation Systems
  - 4.3. Landing Page UI Design
    - 4.3.1. Landing Page Wireframe
    - 4.3.2. Landing Page Mock-up
  - 4.4. Mobile Applications UX/UI Design
    - 4.4.1. Mobile Applications Wireframes
    - 4.4.2. Mobile Applications Wireflow Diagrams
    - 4.4.3. Mobile Applications Mock-ups
    - 4.4.4. Mobile Applications User Flow Diagrams
  - 4.5. Mobile Applications Prototyping
    - 4.5.1. Android Mobile Applications Prototyping
    - 4.5.2. iOS Mobile Applications Prototyping
  - 4.6. Web Applications UX/UI Design
    - 4.6.1. Web Applications Wireframes
    - 4.6.2. Web Applications Wireflow Diagrams
    - 4.6.3. Web Applications Mock-ups
    - 4.6.4. Web Applications User Flow Diagrams
  - 4.7. Web Applications Prototyping
  - 4.8. Domain-Driven Software Architecture
    - 4.8.1. Software Architecture Context Diagram
    - 4.8.2. Software Architecture Container Diagrams
    - 4.8.3. Software Architecture Components Diagrams
  - 4.9. Software Object-Oriented Design
    - 4.9.1. Class Diagrams
    - 4.9.2. Class Dictionary
  - 4.10. Database Design
    - 4.10.1. Relational/Non-Relational Database Diagram
- Capítulo V: Product Implementation
  - 5.1. Software Configuration Management
    - 5.1.1. Software Development Environment Configuration
    - 5.1.2. Source Code Management
    - 5.1.3. Source Code Style Guide & Conventions
    - 5.1.4. Software Deployment Configuration
  - 5.2. Product Implementation & Deployment
    - 5.2.1. Sprint Backlogs
    - 5.2.2. Implemented Landing Page Evidence
    - 5.2.3. Implemented Frontend-Web Application Evidence
    - 5.2.4. Implemented Native-Mobile Application Evidence
    - 5.2.5. Implemented RESTful API and/or Serverless Backend Evidence
    - 5.2.6. RESTful API documentation
    - 5.2.7. Team Collaboration Insights
  - 5.3. Video About-the-Product

---

<div style="page-break-after: always;"></div>

# Capítulo I: Introducción

Este capítulo introduce el proyecto y explica el problema que busca resolver, los objetivos definidos, la motivación del equipo y el alcance de la propuesta. Asimismo, presenta el contexto que dio origen a ElectroLink y la importancia de la solución para sus públicos objetivo.

<br>

## 1.1. Startup Profile
### 1.1.1. Descripción de la Startup

HampCoders es una startup orientada a crear soluciones digitales basadas en arquitecturas de servicios y tecnologías de código abierto. A través de ElectroLink, busca facilitar el contacto entre proveedores del sector eléctrico y personas o empresas que requieren sus productos y servicios.

**Misión:** Desarrollar una solución tecnológica que conecte a los usuarios con proveedores especializados del sector eléctrico, ayudándolos a prevenir o atender problemas en sus instalaciones de forma eficiente, segura y conforme a la normativa.

**Visión:** Consolidarnos como una organización referente en la creación de plataformas eficientes y escalables que acerquen a usuarios y empresas con especialistas confiables, contribuyendo a mejorar la calidad y seguridad de las instalaciones eléctricas.


### 1.1.2. Perfiles de integrantes del equipo

| Integrante | Código de estudiante | Fotografía | Descripción |
|------------|----------------------|------------|-------------|
| Leonardo Fabrizzio Junior Prieto Mantari | U202319949 | <img src="assets/img/team/leonardo-prieto.png" alt="Leonardo Fabrizzio Junior Prieto Mantari" width="140"> | Me considero una persona trabajadora, comprometida y colaborativa, siempre dispuesta a apoyar a mi equipo y contribuir al cumplimiento de los objetivos. Cuento con conocimientos en desarrollo frontend y backend para aplicaciones web y móviles, utilizando tecnologías como HTML, CSS, JavaScript, Python, C++, Java, Spring Boot, Vue.js, Angular, Kotlin y Flutter, además de nociones de C#. Busco aplicar estas habilidades para aportar valor al proyecto y contribuir activamente a lograr un resultado final sólido y exitoso. |
| Ivo Marcelo Machado Bracamonte           | U20231C368 | <img src="assets/img/team/ivo-machado.png" alt="Ivo Marcelo Machado Bracamonte" width="140">            | Mi nombre es Ivo Machado, tengo 19 años y soy estudiante del sexto ciclo de Ingeniería de Software en la UPC. Me caracterizo por mi mentalidad resiliente, ya que no me rindo con facilidad y no le tengo miedo al error. Tengo empatía con los demás, disfruto resolver problemas y busco mejorar constantemente en lo que hago. Poseo conocimientos en lenguajes de programación como C++, Java y Python, así como en HTML, CSS y JavaScript. Además, domino el inglés y tengo conocimientos de portugués.                               |
|            |                      |            |             |
|            |                      |            |             |

<br> 

## 1.2. Solution Profile 

ElectroLink es una plataforma que conecta a proveedores de componentes y servicios eléctricos con clientes que necesitan orientación, reparaciones o mantenimiento preventivo en viviendas y oficinas. La propuesta brinda visibilidad a profesionales del rubro y reduce la distancia existente entre la oferta especializada y la demanda, promoviendo servicios eficientes, seguros y ajustados al marco legal para hogares y PYMES.

### 1.2.1. Antecedentes y problemática

Para comprender con mayor precisión las necesidades de los usuarios, se analizaron el contexto del problema y los retos que enfrentan mediante la técnica de las 5W y 2H. Esta herramienta permite organizar información relevante y orientar el diseño de una solución alineada con situaciones reales.

**What (Qué)**  
- ¿Cuál es el problema?
Los usuarios tienen dificultades para localizar técnicos eléctricos certificados que respondan de forma segura y eficiente a cada necesidad. La escasez de canales especializados y la informalidad del sector incrementan el riesgo de contratar servicios sin garantías de calidad ni cumplimiento normativo.

- ¿Cuál es la relación con la persona en cuestión?
El proyecto funciona como un punto de encuentro entre los usuarios objetivo y los proveedores. De esta manera, facilita la búsqueda, reduce el tiempo de respuesta y favorece una atención eficaz sin descuidar la calidad del trabajo.


**When (Cuando)**  
- ¿Cuándo sucede el problema?
La necesidad aparece ante cortes de energía, consumos elevados, tomacorrientes defectuosos o instalaciones inseguras y fuera de norma. También puede surgir antes de una remodelación, cuando es necesario evaluar la capacidad eléctrica y prevenir sobrecargas.

- ¿Cuándo utiliza el cliente el producto?
El cliente puede utilizar el producto después de una falla que requiere atención inmediata o de manera preventiva, antes de realizar una instalación o adquirir componentes eléctricos.


**Where (Dónde)**  
- ¿Dónde está el cliente cuando usa el producto?
La plataforma puede consultarse desde distintos lugares y en cualquier momento, tanto por usuarios particulares como por empresas ubicadas en espacios con demanda eléctrica elevada.

- ¿A dónde se dirige?
La propuesta se dirige a quienes desean evitar incidentes mediante instalaciones correctas y conformes a la normativa, así como a quienes necesitan resolver una falla eléctrica existente.

- ¿Dónde surge el problema?
El problema puede presentarse en viviendas, instituciones educativas, oficinas, comercios y otros entornos con consumo eléctrico considerable, donde una sobrecarga o avería puede ocasionar consecuencias importantes.

**Who (Quién)**
- ¿Quiénes están involucrados?
  Equipo: Aquellos encargados del desarrollo y soporte técnico de la solución, responsables de mantener y mejorar el sistema, asegurando un funcionamiento óptimo y la calidad del servicio.
  Usuarios: Aquellos que buscan soluciones ante problemas eléctricos o realizar instalaciones de manera segura.
  Proveedores: Aquellos que ofrecen servicios eléctricos, como componentes y/o instalaciones.

- ¿A quiénes le sucede el problema?
  Propietarios de viviendas: Aquellos que enfrentan fallos inesperados por problemas eléctricos o necesitan instalaciones de forma segura y eficiente en sus hogares.
  Propietarios de negocios y empresas: Los encargados de gestionar y renovar lugares con alta demanda eléctrica, que requieren soluciones fiables para sus instalaciones y/o operaciones diarias.
  Centros educativos: Instituciones que requieren mantener sus instalaciones eléctricas en óptimas condiciones, para garantizar la seguridad del alumnado y personal.

- ¿Quién lo utilizará?
  El producto atiende principalmente a dos grupos: clientes que buscan una respuesta confiable y oportuna para sus necesidades eléctricas, y proveedores que desean mejorar su visibilidad y acceder a nuevas oportunidades comerciales.


**Why (Por qué)**
- ¿Cuál es la causa del problema?
  La causa principal es la ausencia de plataformas especializadas que conecten eficazmente la oferta y la demanda, junto con el alto nivel de informalidad del sector. Al no contar con mecanismos claros de verificación, los usuarios pueden contratar personal no calificado y exponer sus instalaciones a riesgos de seguridad.


**How (Cómo)**
- ¿En qué condiciones los clientes usan nuestro producto?
  Se emplea cuando una persona o empresa requiere atención confiable para una emergencia, una revisión preventiva o una nueva instalación, ya sea en un entorno doméstico o laboral.

- ¿Cómo nos conocieron los compradores?
  Los usuarios pueden descubrir ElectroLink mediante campañas digitales, recomendaciones personales, búsquedas en Internet y publicidad difundida en redes sociales.

- ¿Cómo prefieren los lectores acceder a nuestro contenido?
  Se espera que los usuarios accedan desde una web o aplicación móvil intuitiva, con navegación sencilla y disponibilidad suficiente para contactar proveedores desde cualquier lugar.

- ¿Qué llevó a la persona a llegar a esta situación?
  Una avería inesperada o la necesidad de implementar una instalación lleva al usuario a buscar atención rápida, certificada y confiable que reduzca riesgos y asegure un funcionamiento adecuado.

**How much (Cuánto)**
- En 2021, el 45,3% de los hogares con acceso a la red pública de energía eléctrica experimentaron cortes o interrupciones.
- En 2021, el 45,3% de los hogares con acceso a la red pública de energía eléctrica experimentaron cortes o interrupciones.
- Estudios indican que departamentos como Áncash, Arequipa, Cusco, Huánuco, Madre de Dios, Pasco y Puno presentan altos porcentajes de hogares con experiencias negativas en la calidad del servicio eléctrico.
- En 2022, la frecuencia promedio de interrupciones fue de 9,8 veces, con mayor incidencia en el segmento de distribución eléctrica.

### 1.2.2. Lean UX Process

De acuerdo con Pragma (2021), Lean UX integra principios ágiles y prácticas de usabilidad para situar la experiencia del usuario en el centro del desarrollo. Bajo este enfoque, el proceso de ElectroLink se organiza en cuatro elementos: problem statements, assumptions, hypothesis statements y Lean UX Canvas.

#### 1.2.2.1. Lean UX Problem Statements

**Problem Statement#1** 
<br>
ElectroLink busca vincular a propietarios de viviendas urbanas con técnicos eléctricos certificados, de modo que puedan acceder a servicios eficientes, seguros y compatibles con las exigencias legales.

Se identificó que los propietarios tienen dificultades para encontrar especialistas confiables. Esto retrasa la atención de fallas críticas, compromete la seguridad de los espacios y puede generar gastos adicionales por trabajos deficientes o interrupciones prolongadas.

A partir de este desafío se plantea la siguiente pregunta: ¿cómo facilitar el acceso rápido a proveedores eléctricos certificados, reduciendo riesgos y mejorando la atención de los problemas?

**Problem Statement #2** 
<br>
La plataforma también pretende acercar a los proveedores de componentes eléctricos con su mercado potencial, disminuyendo la dependencia de recomendaciones ocasionales y canales informales que limitan su crecimiento.

Los proveedores encuentran obstáculos para captar clientes de manera continua y competir contra ofertas informales o productos de baja calidad. Muchos dependen del boca a boca y de las redes sociales, sin herramientas profesionales para organizar y ampliar su actividad comercial.

Por ello surge una segunda pregunta: ¿cómo construir un canal digital que ayude a los proveedores a ampliar su alcance, generar ventas recurrentes y competir en mejores condiciones frente a la informalidad?

#### 1.2.2.2. Lean UX Assumptions

**Business Outcomes:**  
1. Mis clientes necesitan una solución efectiva y accesible para conectar con proveedores de calidad que les den los productos tecnológicos y eléctricos que requieren en la instalación eléctrica que quieren colocar o corregir.

2. Estas necesidades se pueden resolver con una solución tecnológica que aproveche los avances de software en avances de análisis de datos, plataformas digitales como una web distribuida bajo una arquitectura orientada a servicios realizada con tecnologías open-source, para facilitar la conexión entre clientes y proveedores.

3. Mis clientes iniciales serán propietarios de viviendas, propietarios de negocios y empresas y centros educativos que requieren soluciones rápidas y seguras para sus problemas eléctricos.

4. El valor número 1 que un cliente quiere de mi servicio es la garantía de contar con proveedores eléctricos certificados y seguros, que puedan brindar confianza, cumplimiento normativo y atención oportuna, a través de una plataforma confiable y de alta calidad técnica.

5. El cliente también puede obtener estos beneficios adicionales: reducción de riesgos eléctricos, ahorro de tiempo al evitar búsquedas extensas, seguridad de contratar personal con respaldo, posibilidad de programar servicios preventivos y seguimiento del servicio en tiempo real.

6. Vamos a adquirir la mayoría de los clientes a través de estrategias de marketing digital, incluyendo redes sociales, publicidad segmentada, campañas de correo electrónico, e invitaciones a posibles usuarios a conferencias, charlas informativas y eventos de lanzamiento.
7. Haré dinero a través de suscripciones mensuales pagadas por los proveedores, quienes tendrán acceso exclusivo a nuestra red de usuarios, lo que les permitirá ofrecer sus servicios de manera directa y personalizada dentro de la plataforma, maximizando su visibilidad y generando oportunidades de negocio.

8. Mi competencia principal en el mercado serán empresas establecidas como Thumbtack, Handy y TaskRabbit, los cuales ofrecen un medio que conecta a clientes con profesionales en diversas áreas, incluyendo la eléctrica.

9. Los venceremos debido a nuestro enfoque único en la verificación rigurosa de técnicos certificados, asegurando la seguridad y confiabilidad de cada servicio. Además, ofrecemos una experiencia personalizada que se adapta a las necesidades específicas de cada usuario, brindando soporte en tiempo real para resolver dudas y ofrecer soluciones inmediatas en momentos críticos. Todo esto, complementado con una plataforma fácil de usar.

10. Mi mayor riesgo es que los usuarios desconfíen del servicio o que los proveedores no cumplan con los estándares prometidos, afectando la reputación de la plataforma.

11. Resolveremos esto a través de un riguroso proceso de validación de proveedores, con revisión de certificaciones, calificaciones públicas, sistema de penalización a técnicos mal evaluados y atención al cliente activa, teniendo en cuenta las restricciones legales en instalaciones eléctricas.

12. ¿Qué otras suposiciones tenemos?<br>
Otras suposiciones que debemos considerar incluyen la disponibilidad de proveedores dispuestos a suscribirse a nuestra plataforma, la capacidad de escalar el servicio a nivel regional o nacional, y la aceptación de los usuarios de la plataforma como una alternativa confiable y preferida frente a métodos tradicionales de búsqueda de proveedores eléctricos. <br> <br>
¿Eso, si se prueba que es falso, causará que nuestro negocio / proyecto no funcione? <br>
Si estas suposiciones resultan ser falsas, podríamos enfrentar obstáculos importantes. Si no logramos atraer suficientes proveedores, la plataforma no sería atractiva ni útil para los usuarios, lo que pondría en riesgo nuestra capacidad de ofrecer un servicio integral. Si la aceptación de la plataforma no es lo suficientemente alta, perderíamos relevancia frente a métodos tradicionales, lo que podría limitar nuestro crecimiento.

**Users:**  
La solución considera tres grupos principales de usuarios:
- Propietarios de hogares urbanos
- Dueños PYMES u oficinas
- Proveedores de componentes o servicios eléctricos certificados

**User Outcomes:**  
**¿Quién es el usuario?**
-   Nuestros usuarios principales son propietarios de hogares urbanos, dueños PYMES u oficinas y proveedores de componentes o servicios eléctricos certificados.

**¿Qué problemas tiene nuestro producto y cómo se pueden resolver?**
-   Se reconocen dos necesidades centrales. Por un lado, los propietarios y responsables de PYMES tienen dificultades para encontrar especialistas que ofrezcan garantías. Por otro, los proveedores eléctricos no cuentan con un flujo constante de clientes. ElectroLink aborda ambos problemas al recomendar profesionales certificados según cada necesidad y, al mismo tiempo, darles exposición ante potenciales clientes.


**¿Qué características son importantes?**

-   **Para propietarios y dueños de PYMES u oficinas:** 
    - Búsqueda y filtrado de técnicos certificados. 
    - Sistema de reseñas y calificaciones transparente.
    - Opción de programación de servicios preventivos.
    - Seguimiento en tiempo real del servicio.
    - Información sobre consumo eficiente.

-   **Para proveedores:**
    - Perfil verificable con certificaciones.
    - Acceso a una red de clientes potenciales.
    - Herramientas de gestión (agenda, historial de servicios, pagos integrados).
    - Notificaciones de oportunidades de trabajo.
    - Protección contra la competencia desleal.
    

**¿Dónde encaja nuestro producto en su trabajo o vida?**

**Nuestro producto es utilizado:**

- Para los propietarios, la plataforma se integra en situaciones de urgencia, mantenimiento preventivo o búsqueda de asesoría para mejorar el consumo energético. Al concentrar proveedores previamente validados, reduce la incertidumbre asociada con una búsqueda informal.

- Para los proveedores, ElectroLink funciona como un canal comercial complementario a las recomendaciones y redes sociales. Les permite organizar su actividad con mayor profesionalismo, aumentar su alcance y acceder a oportunidades recurrentes.


**¿Cuándo y cómo es usado nuestro producto?**

**Propietarios y dueños de PYMES u oficinas:**  
- **Cuándo:** En emergencias eléctricas, mantenimiento preventivo o al necesitar asesoría técnica.  
- **Cómo:** Acceden a la plataforma, buscan técnicos cercanos, comparan perfiles, contratan y califican el servicio.  

**Proveedores:**  
- **Cuándo:** Cuando buscan nuevos clientes o gestionan sus servicios.  
- **Cómo:** Crean su perfil verificable, reciben solicitudes, gestionan citas y pagan suscripciones por acceso premium.  

**¿Cómo debe verse nuestro producto y cómo comportarse?**
- La solución debe ofrecer una experiencia clara, confiable y adaptable a web y dispositivos móviles. Podrá utilizarse tanto ante fallas, cortes o sobrecargas como para planificar remodelaciones, instalaciones, revisiones periódicas y servicios preventivos.

#### 1.2.2.3. Lean UX Hypothesis Statements

**Creemos que** al ofrecer una plataforma digital que verifique rigurosamente a técnicos eléctricos, los propietarios de hogares urbanos y dueños de PYMES u oficinas confiarán en nuestro servicio para resolver sus problemas eléctricos de manera rápida y segura.

**Sabremos que** hemos tenido éxito cuando el 70% de los usuarios que contratan un servicio a través de la plataforma lo califican con 4 o 5 estrellas, demostrando satisfacción con la calidad y confiabilidad de los proveedores.

**Creemos que** los proveedores de servicios eléctricos se suscribirán a nuestra plataforma si les garantizamos acceso a clientes recurrentes y herramientas profesionales de gestión (agenda, pagos, historial).

**Sabremos que** hemos tenido éxito cuando el 60% de los proveedores en prueba gratuita se conviertan en suscriptores pagos y mantengan una tasa de renovación superior al 80% después de 3 meses.


**Creemos que** al conectar usuarios con técnicos certificados, disminuirán los problemas eléctricos recurrentes en sus hogares o negocios.

**Sabremos que** hemos tenido éxito cuando los usuarios reportan una "mejoría notable" en sus instalaciones y prevenciones eléctricas después de usar servicios de la plataforma.Los casos de "reparaciones mal hechas" mencionados por usuarios disminuyen significativamente en los comentarios.


**Creemos que** los usuarios encontrarán más conveniente usar nuestra plataforma que buscar recomendaciones personales o técnicos por redes sociales.

**Sabremos que** hemos tenido éxito cuando los usuarios expresan que la plataforma les "ahorra tiempo" en comparación con buscar técnicos por su cuenta.Más de la mitad de los usuarios activos prefieren la plataforma para futuras necesidades eléctricas.

**Creemos que** la plataforma puede expandirse a regiones con altos índices de informalidad en servicios eléctricos, replicando el éxito del mercado inicial.

**Sabremos que** hemos tenido éxito cuando nuevas ciudades alcancen el 60% del volumen de transacciones de la región pionera en un plazo de 6 meses, con un crecimiento orgánico del 20% mensual.

#### 1.2.2.4. Lean UX Canvas
<img src="https://i.imgur.com/OD3PmHm.png"/>

<hr>

## 1.3. Segmentos Objetivos

Esta sección caracteriza los segmentos identificados durante el análisis. Los usuarios principales son propietarios de hogares urbanos, responsables de PYMES u oficinas y proveedores certificados de componentes o servicios eléctricos.

**Segmento objetivo #1: Propietarios de hogares urbanos**

Aspectos demográficos:

- Sexo: Masculino y femenino
- Edades: Entre 25 y 60 años
- Nivel socioeconómico: Medio a Medio-alto
  
Aspectos geográficos:

- Zona geográfica en la que viven: Urbana, en ciudades de tamaño medio a grande
- Residen principalmente en: Zonas residenciales o condominios dentro de áreas urbanizadas
  
Aspectos psicográficos:

- Valoran el confort, la eficiencia y la seguridad en el hogar.
- Buscan soluciones tecnológicas que optimicen el uso de recursos eléctricos.
- Tienen interés en el mantenimiento preventivo y la mejora continua de sus viviendas.

**Segmento objetivo #2: Dueños PYMES u oficinas**

Aspectos demográficos:

- Sexo: Masculino y femenino
- Edades: Entre 28 y 55 años
- Nivel socioeconómico: Medio-alto
  
Aspectos geográficos:

- Zona geográfica en la que viven: Urbana
- Residen principalmente en: Zonas residenciales o condominios dentro de áreas urbanizadas
  
Aspectos psicográficos:

- Buscan optimizar los costos operativos y mejorar la eficiencia de sus instalaciones.
- Valoran soluciones tecnológicas que automaticen procesos de búsqueda y compra de componentes eléctricos para reducir y optimizar el consumo de recursos.
- Tienen mentalidad emprendedora y están abiertos a innovaciones que les den ventaja competitiva.

**Segmento objetivo #3: Proveedores de componentes o servicios eléctricos certificados**

Aspectos demográficos:

- Sexo: Masculino y femenino
- Edades: Entre 25 y 55 años
- Nivel socioeconómico: Medio a medio-alto
  
Aspectos geográficos:

- Zona geográfica en la que trabajan: Urbana, semi urbana e industrial
- Residen principalmente en: Regiones con alta demanda de servicios eléctricos (ciudades en expansión, polos industriales, etc.)
  
Aspectos psicográficos:

- Buscan aumentar su visibilidad y captar más clientes de forma digital.
- Están interesados en plataformas que les faciliten la gestión de pedidos o contactos comerciales.
- Valoran pertenecer a una red confiable de profesionales del rubro eléctrico.
- Están enfocados en el crecimiento profesional y la fidelización de clientes.

<div style="page-break-after: always;"></div>

# Capítulo II: Requirements Elicitation & Analysis

En este capítulo se desarrolla la obtención y evaluación de los requerimientos funcionales y no funcionales de ElectroLink. Se presentan las técnicas de investigación utilizadas, los perfiles identificados y las prioridades del negocio, procurando que las necesidades de los stakeholders puedan validarse y conservar su trazabilidad.

<br>

## 2.1. Competidores

El mercado digital de contratación de servicios reúne distintas plataformas dedicadas a reparaciones, mantenimiento y labores domésticas. Para establecer referentes y oportunidades de diferenciación para ElectroLink se analizaron Thumbtack, Handy y TaskRabbit.

* **Thumbtack:**

Es un marketplace digital que pone en contacto a personas que necesitan servicios locales con profesionales de diferentes especialidades, como plomería o electricidad.

Así es como funciona:

1. El cliente publica un proyecto explicando qué necesita

2. Los profesionales que están registrados en esa categoría y área geográfica reciben una notificación.

3. Los profesionales interesados envían cotizaciones o propuestas al cliente.

4. El cliente elige al profesional que mejor se adapte a su presupuesto y necesidades.

Tiene una presencia importante en Estados Unidos y resulta especialmente útil para trabajadores independientes y pequeños negocios.

* **Handy:**

A diferencia de Thumbtack, Handy asigna al profesional en función de la ubicación y disponibilidad, en lugar de presentar varias alternativas para que el cliente elija.

Especialidad: Servicios para el hogar (limpieza, montaje de muebles, plomería, electricidad, mudanzas, etc.).

Cómo funciona: Los clientes reservan directamente desde la app o el sitio web, eligen fecha/hora y el servicio que necesitan, y Handy asigna automáticamente a un profesional disponible.

Ubicación: Opera principalmente en EE. UU., Canadá y Reino Unido.

* **TaskRabbit:**

Es una plataforma de contratación de “taskers”, personas disponibles para resolver tareas puntuales según la demanda local. Entre los servicios que ofrece se encuentran:

\+Montaje de muebles (especialmente de IKEA, ya que tienen una alianza).

\+Mudanzas y cargado de cosas pesadas.

\+Limpieza.

\+Reparaciones menores en el hogar.

\+Hacer compras o entregas.

\+Colgar cuadros, instalar estanterías, etc.

Cómo funciona TaskRabbit: 

1. Buscas el tipo de tarea que necesitas hacer.

2. Elige a un tasker basado en su perfil, tarifas por hora, y reseñas.

3. Agendas el servicio directamente con esa persona, eligiendo la fecha y la hora.

4. Pagas a través de la plataforma cuando el trabajo está completo.

### 2.1.1. Análisis competitivo

La siguiente matriz compara el posicionamiento de ElectroLink con los principales referentes identificados.

| Competitive Analysis Landscape |  |  |  |  |  |
| ----- | :---- | :---- | :---- | :---- | :---- |
| ¿Por qué llevar a cabo este análisis |  | Porque  necesitamos identificar fortalezas, debilidades y diferenciadores clave frente a plataformas similares para definir la estrategia competitiva de ElectroLink. |  |  |  |
|  |  |  Necesitamos Adaptarnos a las tendencias del mercado |  |  |  |
|   |   | ElectroLink | Thumbtack | Handy | TaskRabbit |
| Perfil | Overview |  Plataforma especializada en instalaciones y mantenimiento eléctrico legal y seguro. Conecta a clientes con proveedores certificados, ofreciendo asesoría técnica, prevención de riesgos y seguimiento en tiempo real.  |  Marketplace general de servicios donde los usuarios pueden encontrar profesionales para tareas como reparaciones |  Plataforma centrada en tareas del hogar como limpieza, montaje de muebles y algunas reparaciones menores |  Conecta personas con taskers para tareas del hogar como mudanzas, reparaciones menores, compras y más. |
|  | Ventaja competitiva ¿Qué valor ofrece a los clientes? | Instalaciones y mantenimiento eléctrico general con proveedores certificados. Servicio legal, seguro y con asesoría técnica. | Ofrece una amplia variedad de servicios, pero sin enfoque especializado. | Servicios de hogar bajo demanda. Asignación automática. | Contratación rápida para tareas específicas, con perfiles seleccionables. |
| Perfil de Marketing | Mercado objetivo | Hogares, oficinas, escuelas y PYMES urbanas que requieren instalaciones o mantenimiento eléctrico confiable. |  Clientes generales que necesitan servicios variados (hogar, eventos, clases, etc.). |  Personas que requieren limpieza, montaje o reparaciones domésticas. |  Hogares que requieren tareas prácticas como mudanza, limpieza, montaje, etc. |
|  | Estrategias de marketing |  Alianzas con proveedores certificados, educación sobre mantenimiento eléctrico. |  Publicidad digital, visibilidad en buscadores, reviews de usuarios. |  Integración con IKEA, marketing por conveniencia y rapidez. |  Visibilidad en buscadores con una app amigable y con integración con IKEA |
| Perfil de productos | Productos & Servicios | Instalación de componentes, mantenimiento general, diagnósticos técnicos y asesoría normativa. |  Servicios generales (fotografía, plomería, eventos, clases, etc.). |  Limpieza, fontanería, montaje, electricidad básica, mudanza. |  Montaje de muebles, limpieza, ayuda con tareas, mudanza. |
|  | Precios y Costos |  Costos por servicio y suscripción mensual para monitoreo/prevención. | Los profesionales establecen precios. Thumbtack cobra parte de la comisión |  Precio fijo por servicio. Handy toma parte de la comisión. |  Costo por hora según la tarea deseada. Taskrabbit cobra una comisión al profesional. |
|  | Canales de distribución (Web y/o Móvil) |  Plataforma web \+ app móvil (foco en experiencia técnica y educativa) |  Web \+ app móvil. |  Web \+ app móvil. |  Web \+ app móvil. |
| Análisis SWOT | Fortalezas | Especialización en electricidad, asesoría legal, prevención de riesgos y red de técnicos certificados. |  Variedad de servicios, alta visibilidad, gran base de usuarios. |  Rapidez de reserva por sus procesos automatizados. |  Facilidad para elegir trabajadores, buena reputación por las tareas simples. |
|  | Debilidades | Somos nuevos en el mercado y tenemos una dependencia de proveedores certificados: |  No tiene enfoque especializado, experiencia muy generalista. Puede ser complicado encontrar personal especializado. | Tiene poca personalización al ser todo generalmente automático |  Algunos trabajadores no están certificados. Esto puede variar la calidad de los servicios. |
|  | Oportunidades |  Alianzas con aseguradoras, certificaciones oficiales, posible expansión a smart energy, estos servicios están poco atendidos. |  Ampliar a servicios técnicos más especializados. |  Mejorar procesos de selección de profesionales a través de una expansión hacia servicios técnicos especializados. |  TaskRabbit podría asociarse con marcas de smart home (como Google Nest, Philips Hue, etc.) para ofrecer instalación y soporte técnico |
|  | Amenazas |  Falta de confianza inicial. Si no se mantiene un buen control o evaluación a los proveedores eléctricos puede afectar la experiencia del cliente. |  Tiene una gran saturación del mercado y competencia entre profesionales. |  Problemas con calidad inconsistente del servicio dado que los usuarios no eligen al profesional |  Cada vez más personas contratan técnicos y ayudantes directamente por redes como Facebook Marketplace. Lo que hace más difícil estar en el mercado. |

### 2.1.2. Estrategias y tácticas frente a competidores

Para competir con Thumbtack, Handy y TaskRabbit, ElectroLink concentrará su estrategia en tres atributos: especialización técnica, confianza en los proveedores y calidad del servicio eléctrico y de mantenimiento.

#### **1\. Estrategia de diferenciación especializandonos en sistemas eléctricos**

Mientras Thumbtack y TaskRabbit cubren categorías muy diversas, ElectroLink se especializará en el mantenimiento preventivo y la reparación de sistemas eléctricos para viviendas y empresas. Este enfoque permitirá construir una propuesta más precisa y confiable para el sector.

#### **2\. Garantía de seguridad y legalidad en todos los servicios**

La plataforma incorporará un proceso de validación para comprobar que los proveedores cuenten con las certificaciones y licencias correspondientes. Asimismo, promoverá que los trabajos ofrecidos se ejecuten de acuerdo con las normas aplicables al sector eléctrico.

#### **3\. Precios transparentes y competitivos**

Frente al cobro por leads utilizado por Thumbtack, ElectroLink planteará costos visibles tanto para clientes como para proveedores. También se evaluarán suscripciones o tarifas planas para servicios preventivos, buscando brindar mayor previsibilidad al usuario.

## 2.2. Entrevistas

Easwaramoorthy y Zarinpoush (2006) presentan la entrevista como una técnica de investigación basada en una conversación orientada a recopilar información. Este recurso permite profundizar en las experiencias, opiniones y preocupaciones de los participantes. Para HampCoders, los testimonios obtenidos ayudan a determinar de qué manera ElectroLink puede aportar a la instalación y al mantenimiento eléctrico preventivo. Las entrevistas se organizaron por segmento y se realizaron tanto de manera remota —mediante Google Meet, Zoom o Discord— como presencial, en ambientes tranquilos y con un tono informal.

### 2.2.1. Diseño de entrevistas

**Segmento #1: Propietarios de hogares urbanos:**

**Preguntas principales:**
-   ¿Cómo te sientes normalmente cuando surge un problema eléctrico en tu casa, como un corte de luz o un tomacorriente que no funciona?
-   ¿Qué haces normalmente cuando necesitas encontrar a alguien que repare o revise una instalación eléctrica en tu hogar?
-   ¿Qué tan fácil o difícil te resulta encontrar técnicos eléctricos en quienes puedas confiar?
-   ¿Cuando has contratado un servicio eléctrico antes, ¿qué fue lo que más te preocupó?
-   ¿Qué cosas valoras más cuando contratas a alguien para que trabaje en tu casa (puntualidad, certificación, costo, rapidez)?
-   ¿Con qué frecuencia tomas medidas preventivas para evitar problemas eléctricos en tu hogar?
-   ¿Te ha pasado que una instalación mal hecha haya causado problemas luego? ¿Cómo lo resolviste?
-   ¿Qué importancia le das a que un servicio eléctrico esté dentro de los parámetros legales o normativos?
-   ¿Te interesaría usar una plataforma que conecte con proveedores verificados para servicios eléctricos en tu zona? ¿Por qué?
-   ¿Qué funcionalidades crees que harían esa plataforma útil para ti en el día a día?

**Preguntas complementarias:**
-   ¿Qué sueles buscar en internet cuando tienes dudas sobre una falla eléctrica?
-   ¿Cuánto confías en las recomendaciones de redes sociales o conocidos para encontrar técnicos?
-   ¿En qué momentos específicos crees que te sería más útil tener acceso rápido a un proveedor certificado?
-   ¿Te sentirías cómodo usando una plataforma para agendar mantenimientos eléctricos preventivos?

**Segmento #2: Dueños de PYMES u oficinas:**

**Preguntas principales:**
-   ¿Qué tipo de instalaciones eléctricas utilizas actualmente en tu negocio u oficina?
-   ¿Qué tan seguido te has enfrentado a fallas eléctricas en tus operaciones diarias?
-   ¿Cómo manejas actualmente el mantenimiento eléctrico de tu empresa? ¿Lo haces tú o lo delegas?
-   ¿Qué impacto tiene una falla eléctrica en tu productividad o en la atención al cliente?
-   ¿Qué criterios tomas en cuenta al contratar a un proveedor eléctrico para tu negocio?
-   ¿Has tenido malas experiencias con servicios técnicos eléctricos? ¿Qué aprendiste de esas situaciones?
-   ¿Qué tan importante es para ti que los proveedores cumplan con normativas legales y ofrezcan garantía?
-   ¿Te sentirías cómodo usando una plataforma que te conecte directamente con proveedores certificados?
-   ¿Qué funcionalidades esperarías de esa plataforma para que realmente te ayude a ahorrar tiempo y dinero?
-   ¿Crees que una herramienta así te daría una ventaja competitiva frente a otros negocios?

**Preguntas complementarias:**
-   ¿Qué sueles hacer cuando necesitas encontrar un componente eléctrico específico para tu empresa?
-   ¿Qué herramientas digitales usas actualmente para gestionar el mantenimiento o las instalaciones eléctricas de tu negocio?
-   ¿Dónde buscarías una solución que reduzca riesgos y mejore la eficiencia energética en tu negocio?
-   ¿Te sentirías más confiado si pudieras ver opiniones, calificaciones y certificaciones de los proveedores antes de contratarlos?

**Segmento #3: Proveedores de componentes o servicios eléctricos certificados:**

**Preguntas principales:**
-   ¿Cómo te sientes actualmente con la forma en que consigues clientes para tus servicios eléctricos?
-   ¿Qué estrategias usas para dar a conocer tu trabajo y atraer nuevos clientes?
-   ¿Qué dificultades enfrentas al competir con proveedores no certificados o informales?
-   ¿Qué tan fácil es para ti comunicar la calidad y legalidad de tu trabajo a los potenciales clientes?
-   ¿Cómo manejas la gestión de pedidos o solicitudes de trabajo actualmente?
-   ¿Qué importancia tiene para ti pertenecer a una red de profesionales avalados o certificados?
-   ¿Qué tanto te ayudaría una plataforma que te permita mostrar tu experiencia, certificaciones y opiniones de clientes?
-   ¿Estarías dispuesto a pagar una suscripción mensual si eso te garantiza mayor visibilidad y más clientes? ¿Por qué?
-   ¿Qué funcionalidades crees que te facilitarán la gestión comercial desde una app o plataforma?
-   ¿Cómo crees que cambiaría tu negocio si pudieras digitalizar la forma en que conectas con clientes?

**Preguntas complementarias:**
-   ¿Dónde públicas actualmente tus servicios (Facebook, grupos, WhatsApp, boca a boca)?
-   ¿Has probado plataformas para ofrecer tus servicios? ¿Cómo fue la experiencia?
-   ¿Qué herramientas digitales usas (si usas alguna) para organizar tus trabajos y pedidos?
-   ¿Qué tan dispuesto estarías a formar parte de una comunidad de proveedores certificados con estándares comunes?

<hr>

### 2.2.2 Segmentación de Entrevistas

### Segmento #1: Propietarios de hogares urbanos

**Entrevista: Mari Vallejos**  
- **Sexo:** Femenino  
- **Edad:** 30  
- **Link:** https://www.youtube.com/watch?v=nTeFYzyawYk
- **Inicia en:** 0:06  
- **Duración:** 6:35
  
<img src="https://i.postimg.cc/k4ZTG2y1/Screenshot-2025-07-08-at-5-52-09-PM.png"/>

**Resumen:**  
Mari se dedica al hogar y suele encargarse de atender los asuntos domésticos. Una interrupción eléctrica o un tomacorriente averiado le genera preocupación porque no siempre sabe cómo actuar. Para conseguir ayuda recurre principalmente a Instagram, grupos vecinales y recomendaciones publicadas por otras personas.

Al elegir un servicio prioriza la calidad, la puntualidad, la rapidez y el compromiso del técnico. No acostumbra realizar revisiones preventivas debido a la falta de información y, aunque reconoce el valor de la normativa, se concentra principalmente en que la solución sea efectiva.

Estaría dispuesta a utilizar **ElectroLink** si la plataforma muestra proveedores verificados y opiniones auténticas. También considera útiles los filtros por experiencia, disponibilidad, precio y calificación.

---

### Segmento #2: Dueños de PYMES u oficinas

**Entrevista : Piero Tenorio**  
- **Sexo:** Masculino  
- **Edad:** 26  
- **Link:** https://www.youtube.com/watch?v=_z8UNTi_cmA
- **Inicia en:** 0:01  
- **Duración:** 9:54
<img src="https://i.postimg.cc/jSKZD0zb/Screenshot-2025-07-08-at-5-53-11-PM.png"/>

**Resumen:**  
Piero administra una pequeña empresa de autopartes con más de una sede. Sus operaciones dependen de computadoras, escáneres, cámaras de seguridad e iluminación. Aunque las averías eléctricas no son habituales, pueden detener el sistema de inventario, reducir la productividad y provocar la pérdida de clientes.

Después de intentar encargarse personalmente del mantenimiento, decidió delegarlo, pero todavía no dispone de un plan establecido. Reconoce que la ausencia de prevención representa un riesgo y, debido a experiencias cercanas con técnicos poco confiables, valora la garantía y el cumplimiento de las normas.

Consideraría usar **ElectroLink** si encuentra especialistas certificados, reseñas y calificaciones, además de funciones para registrar el consumo, recibir alertas y consultar recomendaciones de mejora.


**Entrevista : Brian Cerna**  
- **Sexo:** Masculino  
- **Edad:** 25  
- **Link:** https://www.youtube.com/watch?v=m8Q_n7i_xEk
- **Inicia en:** 0:01  
- **Duración:** 6:16
<img src="https://i.postimg.cc/yNpPpD21/Screenshot-2025-07-08-at-5-53-57-PM.png"/>

En esta entrevista se conversó con Brian Cerna, representante del sector de dueños de pymes u oficinas, con el objetivo de conocer su experiencia y necesidades respecto a las instalaciones eléctricas en su negocio. Brian indicó que en su oficina utilizan instalaciones eléctricas trifásicas, ya que requieren soportar la carga de equipos industriales como calderas, aire acondicionado, un sistema de lavandería, además del sistema de iluminación, el cual funciona con luces LED. También cuentan con un grupo electrógeno como respaldo para asegurar el funcionamiento continuo.

Respecto a las fallas eléctricas, señaló que no son frecuentes, pero sí preocupantes, ya que pueden afectar gravemente la operación diaria. Las más comunes incluyen cortes imprevistos, fallos en el tablero de distribución y problemas con los sistemas de climatización. En cuanto al mantenimiento eléctrico, comentó que suelen delegarlo a técnicos externos de confianza. Sin embargo, a veces enfrentan demoras o falta de disponibilidad inmediata, lo que genera complicaciones operativas.

Sobre el impacto de estas fallas en la productividad, Brian fue claro al decir que puede ser muy alto, ya que una interrupción puede dejar habitaciones sin energía y afectar la atención al cliente. A la hora de contratar un proveedor eléctrico, considera esencial revisar la experiencia comprobada, las certificaciones, la capacidad de respuesta las 24 horas, el cumplimiento de normas y un historial confiable con otros clientes. Aunque también buscan precios competitivos, nunca sacrifican la calidad del servicio.

Relató una mala experiencia pasada con un técnico no certificado que ofrecía rapidez, pero cuyo trabajo resultó poco duradero. Esta situación le enseñó que es mejor invertir en profesionales calificados, incluso si son más costosos, para evitar riesgos innecesarios. También destacó que para él es fundamental que los proveedores cumplan con normativas legales y ofrezcan garantía, ya que esto no solo asegura un trabajo bien hecho, sino que también protege legalmente al negocio y cumple con estándares de seguridad ante el público.

Brian expresó su interés en una plataforma que conecte directamente con proveedores certificados, ya que esto le ahorraría tiempo y facilitaría encontrar opciones confiables sin recurrir a métodos tradicionales. En cuanto a las funcionalidades deseadas en dicha plataforma, mencionó la posibilidad de filtrar por tipo de servicio, nivel de urgencia y ubicación del negocio.

Considera que una herramienta de este tipo podría ofrecerle una ventaja competitiva, ya que permitiría resolver problemas eléctricos con rapidez, mejorar la experiencia del cliente y reducir costos operativos. Cuando necesita encontrar componentes eléctricos específicos, suele comunicarse con proveedores conocidos, buscar en Google o WhatsApp, e incluso acudir a ferreterías especializadas, aunque este proceso suele tomar mucho tiempo.

---

### Segmento #3: Proveedores de componentes o servicios eléctricos certificados

**Entrevista: Juan Lucas**  
- **Sexo:** Masculino  
- **Edad:** 25  
- **Link:** https://youtu.be/I_ISRdC6mHI
- **Inicia en:** 0:01  
- **Duración:** 4:52  
<img src="https://i.postimg.cc/JnyQf1Wb/Screenshot-2025-07-08-at-5-54-27-PM.png">
**Resumen:**  
Juan tiene conocimientos en electricidad y electrónica, y suele encargarse de resolver cualquier problema eléctrico en casa. Si no puede solucionarlo, contacta a amigos electricistas de confianza. Toma medidas preventivas básicas como apagar luces o usar llaves térmicas para evitar sobrecargas.

Nunca ha contratado servicios eléctricos, pero comprende la importancia de cumplir con normas legales debido al riesgo que conlleva el mal manejo eléctrico. Muestra interés en una aplicación como **ElectroLink**, ya que le permitiría acceder fácilmente a proveedores confiables para consultas o necesidades que escapen a sus conocimientos.

### 2.2.3. Análisis de entrevistas

### Segmento #1: Propietarios de hogares urbanos

Los propietarios entrevistados, entre ellos **Mari Vallejos**, suelen apoyarse en **redes sociales** y **referencias informales** cuando necesitan resolver una falla eléctrica. La falta de conocimientos técnicos produce inseguridad, por lo que seleccionan a un proveedor según su puntualidad, rapidez, compromiso y precio. El mantenimiento preventivo todavía es poco frecuente, pero existe interés en utilizar soluciones digitales con **técnicos certificados**, opiniones verificadas y filtros por experiencia, costo y disponibilidad.

> **Insight clave:** Para este segmento, la confianza, la facilidad de acceso y la seguridad son determinantes. **ElectroLink** puede responder a estas expectativas mediante servicios previamente verificados.

---

### Segmento #2: Dueños de PYMES u oficinas

Las respuestas de **Piero Tenorio** y **Brian Cerna** muestran que una falla eléctrica, aun cuando sea ocasional, puede causar pérdidas inmediatas y afectar la atención al cliente. El mantenimiento suele atenderse de manera reactiva y sin un proceso organizado. Por ello, este segmento valora especialistas certificados, respaldo legal y tiempos de respuesta breves, y manifiesta interés por herramientas de control del consumo, prevención y gestión de varias sedes.

> **Insight clave:** La gestión eléctrica de las empresas necesita mayor digitalización. Un historial de mantenimientos, el seguimiento del consumo y la contratación de técnicos certificados bajo SLA pueden aportar valor inmediato.

---

### Segmento #3: Proveedores de componentes o servicios eléctricos certificados

Proveedores como **Juan Lucas** buscan reconocimiento profesional, pero encuentran dificultades para diferenciarse de los técnicos informales. Carecen de espacios adecuados para exhibir su experiencia, certificaciones y reseñas. Una plataforma que mejore su visibilidad, fortalezca su credibilidad y simplifique la gestión de solicitudes resulta atractiva, incluso bajo un modelo de suscripción si genera alcance y clientes recurrentes.

> **Insight clave:** **ElectroLink** puede ayudar a los proveedores formales a profesionalizar su presencia digital y construir relaciones sostenibles con clientes que priorizan la calidad y el cumplimiento normativo.


## Análisis de Hallazgos

<img src="https://i.postimg.cc/NFmk0pFF/Screenshot-2025-07-08-at-5-55-09-PM.png"/>

Uno de los principales obstáculos identificados es la dificultad para distinguir proveedores eléctricos confiables. La presencia de técnicos informales sin acreditaciones visibles aumenta la desconfianza, por lo que ElectroLink debe mostrar claramente las certificaciones como un elemento diferenciador.

<img src="https://i.postimg.cc/SNLGFTHt/Screenshot-2025-07-08-at-5-55-47-PM.png"/>

Los participantes consideran útil disponer de un historial digital de mantenimientos y reparaciones, especialmente quienes hoy registran esta información manualmente. El hallazgo respalda la incorporación de funciones documentales que permitan consultar y rastrear los trabajos realizados.

<img src="https://i.postimg.cc/4xBbnKf6/Screenshot-2025-07-08-at-5-56-16-PM.png"/>
 
Las respuestas sobre recordatorios revelan una oportunidad para promover el mantenimiento preventivo, pues la mayoría no sigue una rutina organizada. Las alertas y notificaciones podrían anticipar averías y contribuir a prolongar la vida útil de las instalaciones.

<img src="https://i.postimg.cc/wBrXcSs3/Screenshot-2025-07-08-at-5-56-48-PM.png "/>

La transparencia es relevante tanto para hogares como para empresas. Consultar experiencias reales influye directamente en la elección del proveedor; en consecuencia, la aplicación debe incorporar **comentarios y calificaciones** que apoyen decisiones informadas.

<img src="https://i.postimg.cc/d32GF3NT/Screenshot-2025-07-08-at-5-57-26-PM.png"/>

La disposición a pagar por soporte prioritario o asesoría especializada permite considerar modelos de **suscripción** o **comisión por servicio**. Algunos participantes aceptarían el pago siempre que los beneficios fueran claros, lo que ofrece una posible vía sostenible de monetización.

<br> 

## 2.3. Needfinding

El needfinding es un enfoque de diseño que busca descubrir necesidades reales mediante observación, entrevistas e investigación cualitativa. Su aplicación permite formular soluciones a partir de evidencia y no únicamente de supuestos. A continuación se presentan los artefactos elaborados durante este proceso.

### 2.3.1. User Personas

Los user personas representan los tres segmentos objetivo definidos para ElectroLink.

**Segmento #1**
<img src="https://i.postimg.cc/wjYCqGfK/Olivia-P-rez-4.png"/>

**Segmento #2**
<img src="https://i.postimg.cc/L5ZWRtj6/Eduardo-Gonzales.png"/>

**Segmento #3**
<img src="https://i.postimg.cc/85Tk7CZS/Alejandro-L-pez-9.png"/>

### 2.3.2. User Task Matrix

La matriz organiza las actividades de los User Personas de **ElectroLink** según su frecuencia e importancia. Estas tareas se relacionan con el mantenimiento eléctrico preventivo en viviendas y oficinas, así como con la prestación profesional de servicios.

---

### Olivia Pérez – Propietaria de hogar urbano

| Actividades                                          | Frecuencia     | Importancia |
|------------------------------------------------------|----------------|-------------|
| Buscar electricistas certificados                    | Frecuentemente | Alta        |
| Agendar mantenimientos preventivos para el hogar     | Ocasionalmente | Alta        |
| Comparar calificaciones de proveedores               | Frecuentemente | Media       |
| Buscar soluciones que ahorren energía en el hogar    | Ocasionalmente | Media       |
| Pedir recomendaciones a vecinos o conocidos          | Rara vez       | Media       |

---

### Eduardo Gonzales – Dueño de PYME / Oficina

| Actividades                                          | Frecuencia     | Importancia |
|------------------------------------------------------|----------------|-------------|
| Buscar formas de reducir costos energéticos          | Frecuentemente | Alta        |
| Contratar servicios de mantenimiento eléctrico        | Ocasionalmente | Alta        |
| Llevar registro del historial de mantenimiento        | Ocasionalmente | Media       |
| Buscar proveedores o técnicos de confianza            | Ocasionalmente | Alta        |
| Usar herramientas digitales para gestionar instalaciones | A veces     | Media       |

---

### Alejandro López – Proveedor de servicios eléctricos certificados

| Actividades                                          | Frecuencia     | Importancia |
|------------------------------------------------------|----------------|-------------|
| Buscar nuevos clientes o trabajos                    | Frecuentemente | Alta        |
| Actualizar su disponibilidad de servicios en plataformas | Ocasionalmente | Media    |
| Gestionar pedidos y comunicación con clientes        | Frecuentemente | Alta        |
| Pedir reseñas o testimonios a sus clientes           | Rara vez       | Media       |
| Mantenerse al día con normativas eléctricas          | Ocasionalmente | Alta        |

<hr>

### 2.3.3. User Journey Mapping

El Journey Map representa visualmente las acciones, ideas y emociones que atraviesa una persona al relacionarse con un producto o servicio para cumplir un objetivo. El siguiente artefacto resume ese recorrido dentro del contexto de ElectroLink.

<img src="https://i.postimg.cc/SxDbgGrw/xcvcvc.png"/>

<hr>


#### 2.3.4. Empathy Mapping

El mapa de empatía ayuda a comprender lo que cada usuario piensa, siente, observa y hace frente a una situación determinada. En esta sección se presentan los mapas desarrollados para cada User Persona.

<hr>

<img src="https://i.postimg.cc/xdzgXfct/ffsd.png"/>

**Olivia Rodriguez**

<hr>

<img src="https://i.postimg.cc/pL9JSWYR/fsdfsdfsd.png"/>

**Eduardo Gonzales**

<hr>


<img src="https://i.postimg.cc/59n5NYsf/Captura.png"/>

**Alejandro Lopez**

<hr>


### 2.3.5. As-is Scenario Mapping

Un As-Is Scenario Map documenta la experiencia actual del usuario antes de introducir la solución, considerando sus acciones, pensamientos y emociones en cada etapa. Los mapas siguientes corresponden a los User Personas del proyecto.

**Alejandro Lopez**
<img src="https://i.postimg.cc/cLN7xCsY/imagen-2025-07-08-205115361.png"/>

**Áreas Negativas** 

Promoción de productos:
- Frustración por la baja efectividad de la publicidad.
- Sentimiento de que no alcanza a los clientes correctos.
- Alto gasto en publicidad sin retorno claro.
  
Atención de consultas:
- Agobio y ansiedad por la sobrecarga.
- Dudas sobre su profesionalismo.
- Falta de tiempo para responder con calidad.
  
Cotizaciones:
- Estrés por cálculos manuales.
- Ineficiencia y desorganización.
- Percepción de poca escalabilidad y falta de optimización.
  
Entrega de productos:
- Preocupación por los errores.
- Falta de digitalización.
- Sensación de sistema poco confiable y propenso a reclamos.

**Áreas Positivas**

Promoción de productos:
- Esperanza cuando recibe contacto de un nuevo cliente.
  
Atención de consultas:
- No se identifican ups, lo que revela una necesidad urgente de mejora.

Cotizaciones:
- Alivio al concretar una venta sin errores, aunque depende de factores externos.
  
Entrega de productos:
- Satisfacción al cerrar una venta sin errores.
- Tranquilidad una vez que el cliente confirma.
  
**Conclusión**

El recorrido de Alejandro presenta dificultades en la promoción, la atención de consultas, la preparación manual de cotizaciones y el control de entregas. Estos procesos le generan frustración y muestran la necesidad de una herramienta digital que automatice tareas, mejore la organización y profesionalice su servicio.

**Eduardo Gonzales**

<img src="https://i.postimg.cc/LXZJML0j/imagen-2025-07-08-205223250.png"/>

**Áreas negativas**

Identificar una necesidad operativa o de mantenimiento:
- Eduardo parte con incertidumbre al preguntarse si debe resolver el problema de inmediato o si puede esperar, lo que genera estrés.
- Se siente preocupado y frustrado porque los problemas son frecuentes y no siempre encuentra soluciones rápidas, lo que podría acarrear riesgos operativos o pérdidas importantes para la empresa.

Buscar proveedores adecuados:
- Esta etapa está llena de desconfianza. Eduardo duda si los proveedores entienden realmente lo que necesita o si solo quieren cerrar una venta rápida.
- Se siente inseguro e impaciente ante las respuestas lentas y poco claras, lo que afecta su percepción de profesionalismo y genera tensión en un momento clave para la toma de decisiones.
  
Solicitar cotización y evaluar propuestas:
- Eduardo se enfrenta a la ansiedad de cometer errores al seleccionar proveedores, y sufre por tener que repetir procesos que no mejoran con el tiempo.
- La sobrecarga de evaluar múltiples propuestas, sin estar seguro de si le responderán bien tras la compra, lo hace sentirse cansado, inseguro y con miedo a consecuencias graves.
  
Supervisar ejecución y validar resultados:
- Aunque ya en una etapa avanzada, Eduardo aún siente incertidumbre y dudas sobre si tomó la mejor decisión o si dejó pasar una opción superior.
- Esto lo hace sentirse dudoso, y aunque confía en algunos proveedores, no siempre puede validar si son la mejor opción a largo plazo.

**Áreas positivas**

Identificar una necesidad operativa o de mantenimiento:

- Eduardo demuestra proactividad al realizar inspecciones periódicas y tomar nota del estado de los equipos, lo que le da visibilidad y control sobre su entorno operativo.
- Se siente comprometido con su equipo y con la empresa, lo que impulsa su deseo de mejorar continuamente.
  
Buscar proveedores adecuados:
- Aunque tiene dudas, Eduardo explora múltiples canales (web, catálogos, redes, recomendaciones) para encontrar proveedores, lo que muestra una búsqueda activa y estratégica.
- Tiene un enfoque exigente y selectivo, no se conforma con la primera opción, lo que garantiza estándares de calidad más altos.

Solicitar cotización y evaluar propuestas:
- Filtra activamente a proveedores que no cumplen con aspectos técnicos o de confianza, lo que indica una evaluación rigurosa.
- Esta etapa, aunque estresante, muestra que Eduardo sabe qué quiere y no acepta cualquier solución, buscando equilibrio entre precio, calidad y conocimiento técnico.

Supervisar ejecución y validar resultados:
- Finalmente, cuando logra decidir con seguridad, se siente aliviado por haber elegido correctamente pensando en el largo plazo.
- Esta satisfacción final indica que, a pesar del proceso complejo, Eduardo valora las decisiones bien fundamentadas y aspira a establecer relaciones sostenibles con los proveedores.

**Conclusión**

Eduardo posee un perfil exigente y orientado a la prevención; prioriza la calidad y la confiabilidad durante la contratación y el mantenimiento. Aunque evalúa activamente las alternativas, la comunicación con proveedores le genera dudas y tensión. Una plataforma con información clara, respuestas oportunas y herramientas de comparación y validación podría simplificar sus decisiones y aumentar su seguridad.

**Olivia Rodriguez**

<img src="https://i.postimg.cc/gJR27dnD/imagen-2025-07-08-205305571.png"/>

**Áreas negativas**

Buscar proveedores confiables:
- Olivia se enfrenta a una búsqueda larga, tediosa y desconfiada, lo que le genera cansancio y frustración.
- No puede confiar en cualquier empresa, y siente que el proceso es muy desgastante, además de que nada le garantiza la calidad de los materiales.
  
Contactar y validar a los proveedores:
- Se siente insegura sobre permitir el ingreso a su casa y teme contactar a proveedores sin garantías, lo que le genera nerviosismo y desconfianza.
- Olivia percibe que hacer un proceso de descarte por su cuenta es ineficiente, lo que la hace sentir molesta cuando los proveedores son informales o poco claros.

Solicitar cotizaciones y comparar:
- Se ve obligada a comparar manualmente propuestas en hojas de cálculo, recibiendo cotizaciones en formatos poco intuitivos, lo que la abruma.
- Siente que los precios no siempre son justos y se cansa de descartar opciones sin apoyo externo.

Tomar la decisión y agendar el servicio:
- Aun en la fase final, Olivia no siempre confía en la calidad de lo que va a recibir, ni en la relación entre el costo y el producto final.
- Se siente inquieta, nerviosa y exhausta, especialmente si no tiene claridad sobre las garantías o si invirtió mucho tiempo en el proceso sin estar completamente segura.

**Áreas positivas**

Buscar proveedores confiables:
- Olivia es proactiva, utiliza Google, páginas web y preguntas a familiares o amigos de confianza.
- Guarda enlaces y captura información útil, y valora la idea de una plataforma donde todo ya esté validado, lo que indica apertura a soluciones digitales confiables.

Contactar y validar a los proveedores:
- Pide certificados, RUC o documentos de formalidad, mostrando una actitud responsable y detallista en su proceso de selección.
- Aunque frustrada, busca garantías y seguridad, lo que refuerza su interés por soluciones formales y transparentes.

Solicitar cotizaciones y comparar:
- A pesar del cansancio, Olivia desea prevenir problemas a futuro, lo que muestra un enfoque de largo plazo.
- Expresa que le gustaría tener una plataforma que la ayude a comparar todo más fácilmente, lo que es una oportunidad clara para digitalizar y simplificar su experiencia.

Tomar la decisión y agendar el servicio:
- Olivia valida documentos y garantías antes de cerrar un acuerdo, lo que muestra que se preocupa por protegerse.
- Quiere asegurarse de que su elección evite problemas futuros, lo que revela una clara orientación hacia la prevención.

**Conclusión**

Olivia actúa con cautela y presta especial atención a la seguridad y la calidad, pero el proceso actual resulta desordenado, informal e incierto. Contar con proveedores verificados, cotizaciones uniformes y comparaciones automáticas reduciría el esfuerzo de búsqueda, optimizaría su tiempo y le permitiría contratar con mayor confianza.

## 2.4. Ubiquitous Language

El Lenguaje Ubicuo reúne los términos que el equipo técnico y los especialistas del negocio emplean de forma consistente en conversaciones, documentación y código. Su propósito es reducir ambigüedades y mantener una comprensión compartida del dominio.

**Glosario del Dominio del Negocio - ElectroLink**

El glosario recopila conceptos esenciales del dominio de ElectroLink. Cada término se presenta en inglés junto con su equivalente en español y una definición breve, facilitando la comunicación entre el equipo y los stakeholders.

**1.  Stakeholders & Roles**

* **Homeowner** (Propietario de vivienda)
    * Persona que reside en un hogar y busca soluciones eléctricas confiables y certificadas para prevenir o resolver fallos.

* **Business Owner** (Dueño de empresa)
    * Responsable de una oficina o PYME que necesita mantener el sistema eléctrico eficiente, operativo y dentro del marco legal.

* **Service Provider** (Proveedor de servicios)
    * Técnico profesional con certificación que ofrece servicios de instalación, reparación o mantenimiento eléctrico.

* **Component Supplier** (Proveedor de componentes)
    * Empresa o persona encargada de la venta de dispositivos, piezas o insumos eléctricos certificados.

* **Platform Administrator** (Administrador de plataforma)
    * Miembro del equipo responsable de validar, gestionar y supervisar las actividades y registros dentro de ElectroLink.


**2. Servicios y Mantenimiento**

* **Preventive Maintenance** (Mantenimiento preventivo)
    * Servicio programado que permite identificar y corregir posibles fallas eléctricas antes de que ocurran.

* **Emergency Service** (Servicio de emergencia)
    * Atención inmediata para resolver fallos eléctricos inesperados que comprometen la seguridad o funcionalidad.

* **Electric Assessment** (Evaluación eléctrica)
    * Diagnóstico que realiza un proveedor para determinar el estado de una instalación eléctrica.

* **Installation Service** (Servicio de instalación)
    * Proceso de conexión o implementación de componentes eléctricos en viviendas o negocios, cumpliendo estándares técnicos.

* **Electrical Upgrade** (Actualización eléctrica)
    * Mejora o sustitución de partes de una instalación para adaptarla a nuevas necesidades o normas de seguridad.


**3. Funcionalidades de la Plataforma**

* **Service Request** (Solicitud de servicio)
    * Acción del usuario para iniciar una contratación de servicios desde la plataforma.

* **Matchmaking** (Emparejamiento)
    * Proceso automatizado para conectar a un usuario con el proveedor más adecuado según filtros como ubicación, calificación y disponibilidad.

* **Real-Time Tracking** (Seguimiento en tiempo real)
    * Visualización del estado y avance de un servicio solicitado a través de la plataforma.

* **Verified Profile** (Perfil verificado)
    * Estado de un proveedor que ha sido validado por la plataforma mediante documentación y procesos de control.

* **Rating and Review** (Calificación y reseña)
    * Sistema de puntuación y comentarios que permite evaluar la experiencia del usuario con un proveedor.

* **Subscription Plan** (Plan de suscripción)
    * Modalidad de pago por parte del proveedor para acceder a beneficios dentro de la plataforma (visibilidad, herramientas, clientes).

* **Booking History** (Historial de contrataciones)
    * Registro de todos los servicios contratados, realizados y evaluados por un usuario o proveedor.


**4. Seguridad y Cumplimiento**

* **Certified Technician** (Técnico certificado)
    * Profesional acreditado por una entidad oficial para realizar trabajos eléctricos conforme a la ley.

* **Legal Compliance** (Cumplimiento legal)
    * Condición de operar dentro de los estándares establecidos por entidades regulatorias del sector eléctrico.

* **Risk Prevention** (Prevención de riesgos)
    * Estrategia para evitar accidentes, daños o fallos eléctricos mediante prácticas seguras y mantenimiento adecuado.

* **Safety Assurance** (Garantía de seguridad)
    * Compromiso de que los servicios ofrecidos cumplen con medidas de protección para personas, instalaciones y equipos.


**5. Otros conceptos del dominio**

* **Electric Incident** (Incidente eléctrico)
    * Evento disruptivo como sobrecarga, cortocircuito o fallo en la instalación que requiere intervención técnica.

* **Energy Optimization** (Optimización energética)
    * Prácticas que buscan mejorar el uso de energía eléctrica, reduciendo costos y desperdicios.

* **Informal Market** (Mercado informal)
    * Entorno de prestación de servicios sin regulación, licencias ni garantías de seguridad.

* **Digital Presence** (Presencia digital)
    * Visibilidad que tiene un proveedor dentro de la plataforma, influyendo en su reputación y oportunidades de negocio.

<div style="page-break-after: always;"></div>

# Capítulo III: Requirements Specification

Este capítulo convierte las necesidades identificadas en requerimientos estructurados y verificables. Incluye escenarios futuros, historias de usuario y condiciones de aceptación que orientarán el desarrollo y permitirán validar el comportamiento esperado junto con los interesados.

## 3.1. To-Be Scenario Mapping

Los To-Be Scenario Maps muestran la experiencia esperada de los User Personas una vez incorporada la solución propuesta para cada segmento.

Semgmento 1
<img src="https://i.postimg.cc/QxR9064h/imagen-2025-07-08-205917558.png"/>

Segmento 2
<img src="https://i.postimg.cc/wjZt4ww9/imagen-2025-07-08-205645366.png"/>

Segmento 3
<img src="https://i.postimg.cc/J00MLLhv/imagen-2025-07-08-205729249.png"/>

## 3.2. User Stories
En esta sección se organizan las épicas y las historias de usuario, cada una acompañada por sus criterios de aceptación.

<hr>

# Epics

<table border="1">
<tr>
    <th>EpicId</th>
    <th>Título</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>EP-01</td>
    <td>Gestión de Acceso de Usuarios</td>
    <td>Como usuario, quiero un sistema completo de acceso para registrarme, autenticarme y gestionar mis credenciales de manera segura según mi perfil específico.</td>
  </tr>
  <tr>
    <td>EP-02</td>
    <td>Experiencia de Usuario en Procesos de Autenticación</td>
    <td>Como usuario, quiero tener una experiencia clara y asistida durante los procesos de registro y autenticación para completarlos con éxito y sin frustraciones.</td>
  </tr>
  <tr>
    <td>EP-03</td>
    <td>Personalización y Seguridad de la Cuenta</td>
    <td>Como usuario, quiero tener control sobre la seguridad y la configuración de mi cuenta para proteger mi información y adaptarla a mis necesidades específicas.</td>
  </tr>
  <tr>
    <td>EP-04</td>
    <td>Contratación y Seguimiento de Servicios Eléctricos</td>
    <td>Como propietario o PYME, quiero contratar servicios paso a paso y darles seguimiento, para resolver mis problemas eléctricos de manera estructurada y segura.</td>
  </tr>
  <tr>
    <td>EP-05</td>
    <td>Programación y Gestión de Servicios Preventivos</td>
    <td>Como propietario o PYME, quiero programar mantenimientos preventivos y revisar mi historial de servicios, para garantizar un sistema eléctrico seguro y funcional.</td>
  </tr>
  <tr>
    <td>EP-06</td>
    <td>Gestión Operativa de los Proveedores</td>
    <td>Como proveedor, quiero administrar mi agenda, servicios y pagos, para tener control sobre mis operaciones y oportunidades de negocio.</td>
  </tr>
  <tr>
    <td>EP-07</td>
    <td>Funcionalidades de Confianza y Transparencia en el Ecosistema</td>
    <td>Como usuario, quiero interactuar con un entorno confiable, transparente y claro, para sentirme seguro al contratar servicios, comparar opciones y tomar decisiones informadas.</td>
  </tr>
  <tr>
    <td>EP-08</td>
    <td>Navegación en la Landing Page</td>
    <td>Como visitante, quiero navegar en una Landing page que me brinde información necesaria para tomar una decisión informada.</td>
  </tr>
  <tr>
    <td>EP-09</td>
    <td>Gestión de Suscripciones y Pagos (Proveedores)</td>
    <td>Como proveedor, quiero gestionar mis planes de suscripción, procesar pagos de forma segura y acceder a mi historial de facturación, para mantener mi cuenta activa y funcional.</td>
  </tr>
  <tr>
    <td>EP-10</td>
    <td>Gestión de Activos y Recursos</td>
    <td>Como usuario (propietario o proveedor), quiero registrar y gestionar mis activos relevantes (propiedades, inventario de componentes) para facilitar la operativa del sistema.</td>
  </tr>
  <tr>
    <td>EP-11</td>
    <td>Gestión de Servicios Ofrecidos</td>
    <td>Como técnico, quiero gestionar mi catálogo de servicios ofrecidos, para mantenerlo actualizado y mostrar claramente a los clientes mi oferta y especialidades.</td>
  </tr>
  <tr>
    <td>EP-12</td>
    <td>Gestión de Propiedades</td>
    <td>Como desarrollador, quiero implementar endpoints para registrar, consultar y administrar propiedades de los propietarios, para permitir la selección de ubicación durante la solicitud.</td>
  </tr>
  <tr>
    <td>EP-13</td>
    <td>Gestión de Componentes Técnicos</td>
    <td>Como desarrollador, quiero crear endpoints CRUD para administrar el inventario de componentes eléctricos de los técnicos, para garantizar el stock durante la asignación de servicios.</td>
  </tr>
  <tr>
    <td>EP-14</td>
    <td>Asistente de Solicitud de Servicio</td>
    <td>Como desarrollador, quiero implementar la lógica escalonada del flujo de solicitud del propietario, para validar planes, verificar límites y facilitar la selección guiada.</td>
  </tr>
  <tr>
    <td>EP-15</td>
    <td>Evaluación de Servicios Completados</td>
    <td>Como desarrollador, quiero permitir que los usuarios dejen evaluaciones tras completar un servicio, para alimentar las métricas del sistema y mejorar la calidad del servicio.</td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-01</td>
    <td>visitante de la landing page</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización de Características y Beneficios</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante de la landing page</b>, quiero <b>ver claramente las características y beneficios de la plataforma</b>, para así <b>entender cómo puede ayudarme y decidir si registrarme</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visualización de beneficios para usuarios</b><br>
          Dado que un visitante se encuentra explorando la plataforma informativa<br>
          Cuando revisa la sección de propuestas de valor<br>
          Entonces debe identificar claramente los beneficios específicos para Propietarios y Técnicos<br>
          Y cada beneficio debe tener una descripción breve y clara.
        </li>
        <li><b>Escenario #2: Visualización de características principales</b><br>
          Dado que un visitante se encuentra en la plataforma informativa<br>
          Cuando explora la sección de características<br>
          Entonces debe ver las funcionalidades destacadas de la plataforma<br>
          Y cada característica debe tener un título descriptivo y una explicación concisa de su funcionamiento.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-02</td>
    <td>visitante indeciso sobre la plataforma</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización de Testimonios</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante indeciso sobre la plataforma</b>, quiero <b>ver testimonios de usuarios reales</b>, para así <b>aumentar mi confianza en el servicio antes de registrarse</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visualización de testimonios diversos</b><br>
          Dado que el visitante explora la plataforma informativa<br>
          Cuando accede a la sección de testimonios<br>
          Entonces debe ver al menos 3 testimonios diferentes<br>
          Y cada testimonio debe mostrar: Nombre de usuario, tipo de usuario (Propietario/Técnico), calificación y comentario<br>
          Y las calificaciones deben ser visualmente claras.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-03</td>
    <td>visitante que accede desde diferentes dispositivos</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Adaptabilidad a Diferentes Dispositivos</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante que accede desde diferentes dispositivos</b>, quiero <b>que la landing page se adapte correctamente a mi pantalla</b>, para así <b>tener una experiencia óptima independientemente del dispositivo que use</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Experiencia en dispositivo móvil</b><br>
          Dado que un visitante accede a la plataforma informativa desde un dispositivo móvil<br>
          Cuando la información es presentada<br>
          Entonces todos los elementos se reorganizan para adaptarse a una pantalla vertical<br>
          Y no requiere desplazamiento horizontal<br>
          Y todos los textos son legibles sin necesidad de ampliar la vista.
        </li>
        <li><b>Escenario #2: Experiencia en tableta o escritorio</b><br>
          Dado que un visitante accede a la plataforma informativa desde una tableta o un ordenador<br>
          Cuando la información es presentada<br>
          Entonces el diseño aprovecha el espacio horizontal adicional<br>
          Y mantiene una experiencia de navegación fluida y atractiva.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-04</td>
    <td>visitante de la página</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización de una Sección Principal</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante de la página</b>, quiero <b>ver una sección principal atractiva que me presente un breve resumen de la idea del producto</b>, para así <b>entender rápidamente de qué se trata el servicio</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Presentación del propósito de la plataforma</b><br>
          Dado que un visitante accede a la plataforma informativa<br>
          Cuando la carga inicial se completa<br>
          Entonces se muestra una sección principal con un título que explica el propósito del sistema<br>
          Y se incluye un subtítulo que resume el valor principal del servicio<br>
          Y se presenta una llamada a la acción principal para invitar al registro.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-05</td>
    <td>visitante</td>
    <td>Alta</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Navegación sin errores</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante</b>, quiero <b>navegar por la página web sin encontrar errores</b>, para así <b>tener una experiencia fluida que me anime a registrarme</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Carga completa de la plataforma</b><br>
          Dado que un visitante accede a la plataforma informativa<br>
          Cuando la carga de la página se completa<br>
          Entonces todos los elementos visuales e informativos se muestran correctamente<br>
          Y no existen enlaces que dirijan a destinos incorrectos o inexistentes.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-06</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Navegación mediante Encabezado</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero un <b>menú de navegación claro en el encabezado</b>, para así <b>acceder fácilmente a las diferentes secciones de la página</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Acceso a secciones desde el encabezado</b><br>
          Dado que que un visitante explora la plataforma informativa<br>
          Cuando utiliza las opciones de navegación en el encabezado<br>
          Entonces puede desplazarse a las diferentes secciones informativas<br>
          Y el encabezado permanece accesible durante el desplazamiento.
        </li>
        <li><b>Escenario #2: Navegación en dispositivos de pantalla pequeña</b><br>
          Dado que que un visitante accede desde un dispositivo móvil<br>
          Cuando interactúa con la opción de menú principal<br>
          Entonces se despliegan las opciones de navegación a las distintas secciones.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-07</td>
    <td>visitante</td>
    <td>Baja</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización del Pie de página</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante</b>, quiero <b>ver un pie de página organizado con accesos directos e información de contacto</b>, para así <b>encontrar información adicional rápidamente</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Contenido completo del pie de página</b><br>
          Dado que que un visitante se desplaza hasta el final de la plataforma informativa<br>
          Cuando llega al pie de página<br>
          Entonces debe ver una sección con enlaces a Términos y Condiciones y Política de Privacidad<br>
          Y debe encontrar información de contacto<br>
          Y enlaces a las redes sociales de la empresa.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-08</td>
    <td>potencial cliente</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Ver Información del Startup</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>potencial cliente</b>, quiero <b>conocer información sobre la empresa desarrolladora</b>, para así <b>evaluar su credibilidad y confiabilidad</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Acceso a información corporativa</b><br>
          Dado que que un visitante navega por la plataforma informativa<br>
          Cuando se desplaza a la sección sobre la empresa<br>
          Entonces debe encontrar información clara sobre la startup y el equipo fundador<br>
          Y la información debe transmitir profesionalidad y confianza.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-09</td>
    <td>visitante interesado</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Conocer la Misión de la Startup</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante interesado</b>, quiero <b>conocer la misión de la empresa</b>, para así <b>entender sus valores y propósito</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visibilidad de la declaración de misión</b><br>
          Dado que que un visitante navega por la sección sobre la empresa<br>
          Cuando busca información sobre los propósitos de la empresa<br>
          Entonces debe encontrar claramente destacada la declaración de misión<br>
          Y esta debe estar redactada de forma concisa y comprensible.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-10</td>
    <td>visitante interesado</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Conocer la Visión de la Startup</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante interesado</b>, quiero <b>conocer la visión de la empresa</b>, para así <b>entender sus objetivos a largo plazo y su proyección de futuro</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visibilidad de la declaración de visión</b><br>
          Dado que que un visitante navega por la sección sobre la empresa<br>
          Cuando busca información sobre las metas futuras de la empresa<br>
          Entonces debe encontrar claramente destacada la declaración de visión<br>
          Y esta debe estar redactada de forma inspiradora y orientada al futuro.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-11</td>
    <td>visitante interesado</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Conocer más a fondo los servicios que ofrecen</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante interesado</b>, quiero <b>conocer de manera más específica los servicios que ofrecen por medio de capturas de pantallas</b>, para así <b>comprender su solución y decidir si optar por ella</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visualización de la solución en acción</b><br>
          Dado que que un visitante se encuentra en la sección de características o servicios<br>
          Cuando explora cómo funciona la plataforma<br>
          Entonces visualiza representaciones gráficas o capturas de pantalla de la aplicación<br>
          Y estas imágenes ilustran las funcionalidades clave del sistema.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-12</td>
    <td>visitante interesado</td>
    <td>Media</td>
    <td>EP-08</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Ver planes de suscripción disponibles</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>visitante interesado</b>, quiero <b>ver una sección clara que me presente los planes de suscripción disponibles, separados por "Planes para Técnicos" y "Planes para Propietarios"</b>, para así <b>comparar fácilmente sus características y precios</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Comparación de planes para Propietarios</b><br>
          Dado que que un visitante está interesado en los planes para Propietarios<br>
          Cuando accede a la sección de planes<br>
          Entonces visualiza una comparativa entre el plan Básico y el plan Premium<br>
          Y puede identificar claramente los límites y beneficios de cada uno.
        </li>
        <li><b>Escenario #2: Visualización de planes para Técnicos</b><br>
          Dado que que un visitante está interesado en los planes para Técnicos<br>
          Cuando accede a la sección de planes<br>
          Entonces visualiza la oferta de planes de suscripción para su rol<br>
          Y comprende los beneficios asociados a cada nivel.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-13</td>
    <td>dueño de hogar</td>
    <td>Media</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registro de cuentas como Dueño de Hogar</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>dueño de hogar</b>, quiero <b>registrarme para tener una cuenta en la aplicación</b>, para así <b>gestionar los componentes eléctricos de mi vivienda</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Selección de rol de usuario</b><br>
          Dado que que una persona no registrada accede a la funcionalidad de registro<br>
          Cuando selecciona el rol "Dueño de Hogar"<br>
          Entonces el sistema le presenta los campos requeridos para ese rol.
        </li>
        <li><b>Escenario #2: Registro exitoso con datos válidos</b><br>
          Dado que que un futuro dueño de hogar ha completado todos los campos obligatorios con información válida<br>
          Cuando solicita el registro de su cuenta<br>
          Entonces el sistema crea una cuenta de usuario con el rol "Propietario"<br>
          Y le informa que se ha enviado una comunicación para verificar su cuenta.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-14</td>
    <td>dueño o representante de empresa</td>
    <td>Media</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registro de cuentas como Dueño de Empresa</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>dueño o representante de empresa</b>, quiero <b>registrarme para tener una cuenta en la aplicación</b>, para así <b>gestionar los componentes eléctricos de mis instalaciones comerciales</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Selección de rol de usuario</b><br>
          Dado que que una persona no registrada accede a la funcionalidad de registro<br>
          Cuando selecciona el rol "Dueño de Empresa"<br>
          Entonces el sistema le presenta los campos requeridos para ese rol, incluyendo el nombre de la empresa.
        </li>
        <li><b>Escenario #2: Registro exitoso con datos válidos</b><br>
          Dado que que un futuro dueño de empresa ha completado todos los campos obligatorios con información válida<br>
          Cuando solicita el registro de su cuenta<br>
          Entonces el sistema crea una cuenta de usuario con el rol "Propietario" de tipo PYME<br>
          Y le informa que se ha enviado una comunicación para verificar su cuenta.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-15</td>
    <td>Técnico de componentes eléctricos y/o servicios</td>
    <td>Media</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registro de cuentas para Técnicos</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico de componentes eléctricos y/o servicios</b>, quiero <b>registrarme para tener una cuenta en la aplicación</b>, para así <b>ofrecer mis productos y servicios a los usuarios</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Selección de rol de usuario</b><br>
          Dado que que una persona no registrada accede a la funcionalidad de registro<br>
          Cuando selecciona el rol "Técnico"<br>
          Entonces el sistema le presenta los campos requeridos para el perfil profesional.
        </li>
        <li><b>Escenario #2: Registro exitoso con datos válidos</b><br>
          Dado que que un futuro técnico ha completado todos los campos obligatorios con información válida<br>
          Cuando solicita el registro de su cuenta<br>
          Entonces el sistema crea una cuenta de usuario con el rol "Técnico"<br>
          Y le informa que se ha enviado una comunicación para verificar su cuenta.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-16</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Verificación de cuenta por correo electrónico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero <b>verificar mi cuenta a través de un enlace enviado por correo electrónico</b>, para así <b>confirmar mi identidad</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Envío de comunicación de verificación</b><br>
          Dado que que un usuario se ha registrado exitosamente<br>
          Cuando el proceso de registro finaliza<br>
          Entonces el sistema envía una comunicación electrónica a la dirección proporcionada<br>
          Y la comunicación contiene una instrucción y un medio único para verificar la cuenta.
        </li>
        <li><b>Escenario #2: Verificación exitosa de cuenta</b><br>
          Dado que que un usuario ha recibido la comunicación de verificación<br>
          Cuando utiliza el medio de verificación proporcionado<br>
          Entonces su cuenta es marcada como verificada en el sistema<br>
          Y se le notifica que la verificación fue exitosa.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-17</td>
    <td>usuario registrado</td>
    <td>Baja</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Inicio de sesión de usuarios</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario registrado</b>, quiero <b>iniciar sesión en la aplicación con mis credenciales</b>, para así <b>acceder a mi cuenta y utilizar las funcionalidades de la plataforma</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Inicio de sesión exitoso con credenciales válidas</b><br>
          Dado que que un usuario registrado y verificado se encuentra en la funcionalidad de acceso<br>
          Cuando ingresa sus credenciales correctas y solicita el acceso<br>
          Entonces el sistema valida las credenciales<br>
          Y le concede acceso a su panel personalizado según su rol.
        </li>
        <li><b>Escenario #2: Intento de inicio de sesión con credenciales inválidas</b><br>
          Dado que que un usuario se encuentra en la funcionalidad de acceso<br>
          Cuando ingresa un correo electrónico y/o contraseña incorrectos<br>
          Entonces el sistema le niega el acceso<br>
          Y le informa que las credenciales son inválidas.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-18</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-02</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Validación de datos de registro</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero <b>recibir retroalimentación inmediata sobre la validez de los datos que ingresó durante el registro</b>, para así <b>corregir errores rápidamente</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Validación de formato de correo electrónico</b><br>
          Dado que que un usuario está completando el formulario de registro<br>
          Cuando ingresa un texto en el campo de correo electrónico que no tiene un formato válido<br>
          Entonces el sistema le informa que el formato del correo no es válido.
        </li>
        <li><b>Escenario #2: Validación de correo electrónico ya registrado</b><br>
          Dado que que un usuario está en el formulario de registro<br>
          Cuando ingresa un correo electrónico que ya está registrado en el sistema<br>
          Entonces el sistema le informa que la dirección de correo ya está en uso.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-19</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-02</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Mensajes de éxito retroalimentación de registro</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero <b>recibir mensajes claros y accesibles al completar el registro sobre éxito</b>, para así <b>entender fácilmente el resultado de mis acciones</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Mensaje de éxito al completar el registro</b><br>
          Dado que que el usuario ha completado correctamente el proceso de registro<br>
          Cuando el sistema procesa la solicitud con éxito<br>
          Entonces el sistema muestra un mensaje de confirmación<br>
          Y informa sobre el siguiente paso (verificación de correo).
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-20</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-02</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Mensajes de error retroalimentación de registro</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero <b>recibir mensajes claros y accesibles al completar el registro sobre cualquier error a la hora de completar el formulario</b>, para así <b>entender fácilmente el resultado de mis acciones y saber cómo proceder</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Mensaje de error por problemas del sistema</b><br>
          Dado que que el usuario ha solicitado completar su registro<br>
          Cuando ocurre un error del sistema durante el procesamiento<br>
          Entonces el sistema muestra un mensaje de error genérico<br>
          Y informa que puede intentarlo de nuevo<br>
          Y los datos ingresados se conservan para facilitar un nuevo intento.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-21</td>
    <td>usuario registrado</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Recuperación de Contraseña</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario registrado</b>, quiero <b>recuperar mi contraseña en caso de olvidarla</b>, para así <b>volver a acceder a mi cuenta de manera segura</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Solicitud de recuperación con correo válido</b><br>
          Dado que que un usuario se encuentra en la página de recuperación de contraseña<br>
          Cuando ingresa el correo electrónico asociado a su cuenta<br>
          Entonces el sistema envía un correo con instrucciones y un enlace único de restablecimiento<br>
          Y muestra un mensaje de confirmación indicando que revise su correo.
        </li>
        <li><b>Escenario #2: Finalización exitosa del restablecimiento</b><br>
          Dado que que un usuario ha seguido el enlace de restablecimiento<br>
          Cuando ingresa y confirma una nueva contraseña que cumple los requisitos de seguridad<br>
          Entonces la contraseña es actualizada en el sistema<br>
          Y recibe un mensaje de confirmación del cambio exitoso.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-22</td>
    <td>usuario autenticado</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Cierre de Sesión</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario autenticado</b>, quiero <b>cerrar mi sesión de forma segura</b>, para así <b>proteger mi cuenta cuando termine de usar la aplicación</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Cierre de sesión voluntario</b><br>
          Dado que que un usuario está autenticado en la aplicación<br>
          Cuando selecciona la opción de cierre de sesión<br>
          Entonces su sesión es terminada de forma segura<br>
          Y es redirigido a una pantalla pública (inicio de sesión o landing page).
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-23</td>
    <td>propietario registrado</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización de Perfil de Propietario</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario registrado</b>, quiero <b>visualizar mi perfil</b>, para así <b>revisar mi información personal y preferencias almacenadas en el sistema</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Acceso al perfil personal</b><br>
          Dado que que un Propietario está autenticado en el sistema<br>
          Cuando solicita visualizar su perfil<br>
          Entonces se le presenta su información personal registrada, como nombre, correo y teléfono<br>
          Y visualiza sus preferencias de notificación configuradas.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-24</td>
    <td>propietario registrado</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Edición de Perfil de Propietario</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario registrado</b>, quiero <b>editar mi información personal y preferencias</b>, para así <b>mantener mi perfil actualizado y tener más control sobre este</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Edición exitosa de información personal</b><br>
          Dado que que un Propietario está en la funcionalidad de edición de perfil<br>
          Cuando modifica su información personal (ej. teléfono) y guarda los cambios<br>
          Entonces sus cambios se almacenan en el sistema<br>
          Y observa un mensaje de confirmación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-25</td>
    <td>Técnico registrado</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización de Perfil de Técnico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico registrado</b>, quiero <b>visualizar mi perfil profesional</b>, para así <b>revisar cómo se presenta mi información y servicios a los clientes potenciales</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Acceso al perfil profesional</b><br>
          Dado que que un Técnico está autenticado en el sistema<br>
          Cuando solicita visualizar su perfil<br>
          Entonces se le presenta su información profesional tal como la verían los clientes<br>
          Y puede revisar su descripción, certificaciones, portafolio y zonas de cobertura.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-26</td>
    <td>Técnico registrado</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Edición de Perfil de Técnico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico registrado</b>, quiero <b>editar mi información profesional, certificaciones y servicios ofrecidos</b>, para así <b>mantener mi perfil actualizado y atractivo para los clientes</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Edición de información profesional</b><br>
          Dado que que un Técnico está en la funcionalidad de edición de perfil<br>
          Cuando modifica su descripción, información de contacto o especialidades y guarda los cambios<br>
          Entonces sus cambios se almacenan y se reflejan en su perfil público.
        </li>
        <li><b>Escenario #2: Gestión de certificaciones</b><br>
          Dado que que un Técnico está editando su perfil<br>
          Cuando añade una nueva certificación con su respectivo documento<br>
          Entonces la certificación se añade a su perfil y queda pendiente de validación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-27</td>
    <td>usuario de la plataforma</td>
    <td>Media</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Entrar a un dashboard Personalizado</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario de la plataforma</b>, quiero <b>acceder a un dashboard personalizado al iniciar sesión</b>, para así <b>visualizar de forma inmediata la información relevante según mi rol y actividad reciente</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visualización del dashboard para Propietario</b><br>
          Dado que que un Propietario inicia sesión<br>
          Cuando accede a su panel principal<br>
          Entonces visualiza un resumen de sus servicios activos, sus próximas citas y notificaciones recientes.
        </li>
        <li><b>Escenario #2: Visualización del dashboard para Técnico</b><br>
          Dado que que un Técnico inicia sesión<br>
          Cuando accede a su panel principal<br>
          Entonces visualiza su agenda de servicios del día, solicitudes pendientes y un resumen de sus estadísticas recientes.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-28</td>
    <td>Técnico de servicios eléctricos</td>
    <td>Baja</td>
    <td>EP-07</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Crear Portafolio Digital con Evidencias de Trabajo</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico de servicios eléctricos</b>, quiero <b>crear un portafolio digital dentro de mi perfil que incluya fotos, descripciones y referencias de trabajos anteriores</b>, para así <b>mostrar mi experiencia y generar mayor confianza en potenciales clientes</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Añadir un nuevo trabajo al portafolio</b><br>
          Dado que que un Técnico está gestionando su perfil<br>
          Cuando accede a la sección de Portafolio y añade un nuevo trabajo con imágenes y descripción<br>
          Entonces el trabajo se guarda y se muestra en su perfil público.
        </li>
        <li><b>Escenario #2: Organización del portafolio</b><br>
          Dado que que un Técnico tiene varios trabajos en su portafolio<br>
          Cuando organiza sus trabajos por categorías<br>
          Entonces los cambios se reflejan en la vista pública, permitiendo a los clientes filtrar por dichas categorías.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-29</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Configuración de Zona de Cobertura Geográfica</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>configurar mi zona de cobertura geográfica especificando radio de acción y ubicaciones donde ofrezco servicios</b>, para así <b>recibir solicitudes solo de clientes dentro de mi área de trabajo</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Definición de una zona de cobertura</b><br>
          Dado que que un Técnico está configurando su perfil operativo<br>
          Cuando define una o más áreas geográficas donde presta servicios<br>
          Entonces el sistema almacena estas zonas<br>
          Y las utilizará para filtrar las solicitudes de servicio que puede recibir.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-30</td>
    <td>usuario de la plataforma</td>
    <td>Media</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Configuración de Notificaciones Personalizadas</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario de la plataforma</b>, quiero <b>configurar mis preferencias de notificaciones (email, SMS, push) y frecuencia</b>, para así <b>recibir información relevante sin ser saturado de mensajes</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Ajuste de preferencias de notificación</b><br>
          Dado que que un usuario (Propietario o Técnico) está en la configuración de su cuenta<br>
          Cuando ajusta qué tipo de notificaciones desea recibir y por qué canal (ej. email)<br>
          Entonces el sistema guarda sus preferencias<br>
          Y las futuras notificaciones se enviarán de acuerdo a esta configuración.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-31</td>
    <td>técnico</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Crear Componente Eléctrico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico</b>, quiero <b>registrar nuevos componentes eléctricos en mi inventario</b>, para así <b>mantener un inventario completo de mi infraestructura eléctrica</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Registro de un nuevo componente</b><br>
          Dado que que un Técnico está gestionando su inventario<br>
          Cuando proporciona la información de un nuevo componente (nombre, marca, etc.)<br>
          Entonces el sistema registra el nuevo componente en el inventario del técnico.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-32</td>
    <td>técnico</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Editar Componente Eléctrico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico</b>, quiero <b>modificar la información de los componentes eléctricos registrados</b>, para así <b>mantener actualizada la información técnica y de consumo</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Actualización de datos técnicos</b><br>
          Dado que que un Técnico visualiza su inventario<br>
          Cuando selecciona un componente y modifica sus características<br>
          Entonces los cambios se guardan correctamente.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-33</td>
    <td>técnico</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Eliminar Componente Eléctrico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico</b>, quiero <b>eliminar componentes eléctricos de mi inventario</b>, para así <b>mantener actualizada mi configuración cuando retire o reemplace equipos</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Eliminación de componente</b><br>
          Dado que que un Técnico visualiza su inventario<br>
          Cuando selecciona un componente y solicita su eliminación<br>
          Entonces el sistema solicita confirmación<br>
          Y elimina el componente del inventario activo tras la confirmación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-34</td>
    <td>propietario</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registro de Propiedad (Propietario)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario</b>, quiero <b>registrar una nueva propiedad en el sistema, incluyendo su dirección y geolocalización</b>, para así <b>solicitar servicios para ella</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Añadir una nueva propiedad</b><br>
          Dado que que un Propietario está gestionando sus activos<br>
          Cuando proporciona la información de una nueva propiedad, incluyendo su dirección<br>
          Entonces el sistema registra la propiedad y la asocia a su cuenta<br>
          Y la propiedad queda disponible para solicitar servicios.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-35</td>
    <td>propietario</td>
    <td>Media</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Edición de Información de Propiedad (Propietario)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario</b>, quiero <b>editar la información de mis propiedades registradas (ej. dirección, características)</b>, para así <b>mantenerla actualizada</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Actualización de datos de una propiedad</b><br>
          Dado que que un Propietario visualiza sus propiedades registradas<br>
          Cuando selecciona una propiedad y modifica su información<br>
          Entonces los cambios se guardan correctamente.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-36</td>
    <td>propietario</td>
    <td>Media</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Eliminación de Propiedad (Propietario)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario</b>, quiero <b>eliminar una propiedad de mi cuenta</b>, para así <b>registrar otra propiedad</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Eliminación de una propiedad</b><br>
          Dado que que un Propietario visualiza sus propiedades registradas<br>
          Cuando selecciona una propiedad y solicita su eliminación<br>
          Entonces el sistema solicita confirmación<br>
          Y elimina la propiedad de su cuenta tras la confirmación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-37</td>
    <td>Técnico</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registro de Inventario de Componentes (Técnico)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico</b>, quiero <b>registrar los componentes eléctricos que tengo en mi inventario, incluyendo cantidad y costo</b>, para así <b>controlar mi stock</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Añadir un componente al inventario con stock</b><br>
          Dado que que un Técnico está gestionando su inventario<br>
          Cuando registra un nuevo tipo de componente y especifica la cantidad inicial y el costo<br>
          Entonces el componente se añade a su inventario con el stock correspondiente.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-38</td>
    <td>Técnico</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Actualización de Stock de Componentes (Técnico)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico</b>, quiero <b>actualizar las cantidades de mis componentes en inventario después de una compra o uso en un servicio</b>, para así <b>mantener la precisión del stock</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Ajuste manual de stock</b><br>
          Dado que que un Técnico está gestionando su inventario<br>
          Cuando selecciona un componente y ajusta la cantidad de stock manualmente (ej. por una nueva compra)<br>
          Entonces la cantidad de stock del componente se actualiza.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-39</td>
    <td>Técnico</td>
    <td>Alta</td>
    <td>EP-10</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Configuración de Alertas de Stock Mínimo (Técnico)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico</b>, quiero <b>definir umbrales de stock mínimo para mis componentes y recibir alertas cuando el stock alcance ese nivel</b>, para así <b>planificar reposiciones</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Establecer un umbral de stock mínimo</b><br>
          Dado que que un Técnico está gestionando un componente en su inventario<br>
          Cuando establece un umbral numérico de stock mínimo para ese componente<br>
          Entonces el sistema guarda esta configuración.
        </li>
        <li><b>Escenario #2: Recepción de alerta</b><br>
          Dado que que un componente tiene un umbral de stock mínimo configurado<br>
          Cuando el stock de ese componente baja hasta o por debajo del umbral<br>
          Entonces el sistema envía una notificación al Técnico informando de la situación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-40</td>
    <td>propietario de PyME</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Contratación de Servicios Eléctricos mediante Wizard</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario de PyME</b>, quiero <b>contar con un proceso guiado paso a paso para contratar servicios eléctricos</b>, para así <b>solucionar mis problemas de forma rápida y sin complicaciones</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Completar proceso guiado</b><br>
          Dado que que un Propietario inicia el proceso de contratación<br>
          Cuando completa todos los pasos requeridos en el asistente (selección de propiedad, servicio, etc.)<br>
          Entonces el sistema genera una solicitud de servicio<br>
          Y le confirma que la solicitud ha sido creada y está pendiente de asignación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-41</td>
    <td>propietario con múltiples propiedades</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Selección de Propiedad</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario con múltiples propiedades</b>, quiero <b>seleccionar la propiedad específica donde necesito el servicio</b>, para así <b>que el sistema asigne al técnico más cercano a esa ubicación</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Selección de propiedad en la solicitud</b><br>
          Dado que que un Propietario con más de una propiedad inicia una solicitud de servicio<br>
          Cuando el sistema le solicita indicar para qué propiedad es el servicio<br>
          Entonces puede seleccionar una de sus propiedades registradas<br>
          Y la ubicación de esa propiedad será utilizada para la asignación del técnico.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-42</td>
    <td>propietario solicitando un servicio</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Carga Manual de Datos de Recibos Eléctricos (3-6 recibos)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario solicitando un servicio</b>, quiero <b>ingresar manualmente los datos clave de mi último recibo eléctrico durante el proceso de solicitud</b>, para así <b>registrar mi historial de consumo y permitir análisis a largo plazo en mi panel de Analytics</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Ingreso de datos del recibo</b><br>
          Dado que que un Propietario está en el proceso de solicitar un servicio<br>
          Cuando ingresa los datos de consumo (kWh, monto, período) de su recibo eléctrico<br>
          Entonces el sistema valida y asocia esta información a la solicitud<br>
          Y los datos quedan almacenados para su futuro análisis de consumo.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-43</td>
    <td>propietario que ya ha seleccionado un servicio</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Descripción Detallada del Problema Eléctrico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario que ya ha seleccionado un servicio</b>, quiero <b>añadir una descripción detallada de mi problema</b>, para así <b>que el técnico asignado conozca el contexto específico antes de su llegada</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Añadir detalles a la solicitud</b><br>
          Dado que que un Propietario está creando una solicitud de servicio<br>
          Cuando proporciona texto adicional describiendo el problema<br>
          Entonces esta descripción se adjunta a la solicitud y será visible para el técnico que sea asignado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-44</td>
    <td>propietario</td>
    <td>Alta</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Selección de Servicio Específico del Catálogo</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario</b>, después de seleccionar mi propiedad, quiero <b>ver una lista de servicios específicos disponibles en mi zona (ej: 'Instalación de tomacorriente', 'Diagnóstico General') y seleccionar el que necesito</b>, para así <b>que el sistema sepa exactamente qué trabajo solicitar y pueda automatizar la asignación</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Selección de un servicio del catálogo</b><br>
          Dado que que un Propietario ha seleccionado la propiedad para el servicio<br>
          Cuando el sistema le presenta el catálogo de servicios disponibles en su zona<br>
          Entonces puede seleccionar un servicio específico de la lista<br>
          Y la solicitud queda vinculada a ese servicio del catálogo.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-45</td>
    <td>cliente</td>
    <td>Alta</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Cancelación de servicios programados</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>cliente</b>, quiero <b>cancelar un servicio programado con anticipación</b>, para así <b>evitar cargos innecesarios</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Cancelación dentro del plazo permitido</b><br>
          Dado que que un Propietario tiene un servicio programado<br>
          Cuando solicita cancelarlo dentro del plazo permitido por las políticas<br>
          Entonces el sistema procesa la cancelación sin penalización<br>
          Y notifica tanto al Propietario como al Técnico asignado.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-46</td>
    <td>propietario</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Notificación de Asignación Automática de Técnico (Propietario)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario</b>, después de que mi solicitud de servicio es asignada automáticamente, quiero <b>recibir una notificación con la información del técnico asignado</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Recepción de notificación de asignación</b><br>
          Dado que que un Propietario ha creado una solicitud de servicio<br>
          Cuando el sistema asigna automáticamente un Técnico al servicio<br>
          Entonces el Propietario recibe una notificación<br>
          Y la notificación contiene la información del perfil del Técnico asignado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-47</td>
    <td>cliente</td>
    <td>Alta</td>
    <td>EP-05</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Historial de servicios contratados</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>cliente</b>, quiero <b>ver un historial de los servicios que he contratado anteriormente</b>, para así <b>referencia futura</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visualización de historial de servicios</b><br>
          Dado que que un Propietario accede a su historial de servicios<br>
          Cuando no aplica ningún filtro<br>
          Entonces visualiza todos los servicios contratados ordenados cronológicamente<br>
          Y para cada servicio puede ver detalles como fecha, técnico y estado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-48</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Configurar Horarios de Trabajo Semanales</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>configurar mis horarios de trabajo por día de la semana (ej: Lunes 8AM-6PM, Martes 10AM-4PM) y definir la duración promedio que me toma cada tipo de servicio</b>, para así <b>que el sistema pueda asignarme automáticamente trabajos solo en mis horarios laborales disponibles</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Establecer disponibilidad semanal</b><br>
          Dado que que un Técnico está configurando su agenda<br>
          Cuando define sus horas de trabajo para cada día de la semana<br>
          Entonces el sistema guarda esta disponibilidad como su horario laboral estándar<br>
          Y lo usará como criterio para la asignación automática de servicios.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-49</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Modificar Horarios de Trabajo Existentes</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>modificar mis horarios de trabajo ya configurados (cambiar horas de inicio/fin, días laborales)</b>, para así <b>ajustar mi disponibilidad según cambios en mi situación personal o comercial</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Ajustar disponibilidad semanal</b><br>
          Dado que que un Técnico tiene un horario de trabajo configurado<br>
          Cuando modifica las horas de inicio o fin de un día laboral y guarda los cambios<br>
          Entonces el sistema actualiza su horario laboral estándar.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-50</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Bloquear Fechas y Horarios Específicos</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>bloquear fechas específicas (vacaciones, emergencias) o horarios puntuales (citas médicas, otros compromisos) en mi calendario</b>, para así <b>evitar que el sistema me asigne trabajos durante esos períodos</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Bloquear un período de tiempo</b><br>
          Dado que que un Técnico está gestionando su agenda<br>
          Cuando selecciona una fecha o un rango de horas y lo marca como no disponible<br>
          Entonces el sistema registra este bloqueo<br>
          Y no le asignará servicios durante ese período.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-51</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualizar Agenda de Trabajos Asignados Automáticamente</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>visualizar en un calendario todos los trabajos que el sistema me ha asignado automáticamente dentro de mis horarios disponibles</b>, para así <b>planificar mi día y ver mi carga de trabajo semanal</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Vista de agenda con trabajos asignados</b><br>
          Dado que que un Técnico accede a su agenda<br>
          Cuando tiene trabajos que le han sido asignados<br>
          Entonces visualiza estos trabajos en una vista de calendario<br>
          Y puede ver los detalles de cada servicio programado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-52</td>
    <td>técnico registrado</td>
    <td>Media</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Configurar Tiempo de Traslado Entre Servicios</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>configurar el tiempo promedio que necesito para trasladarme entre ubicaciones en mi zona de cobertura</b>, para así <b>que el sistema considere estos intervalos al asignarme trabajos consecutivos</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Configurar buffer de traslado</b><br>
          Dado que que un Técnico está configurando su agenda<br>
          Cuando define un tiempo promedio de traslado (ej. 30 minutos)<br>
          Entonces el sistema considerará este intervalo de tiempo entre servicios consecutivos al momento de la asignación automática.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-53</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-11</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Crear Servicios en Catálogo con Recetas de Componentes</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>crear nuevos servicios en mi catálogo especificando qué componentes eléctricos exactos necesito y en qué cantidades (receta)</b>, para así <b>que el sistema verifique automáticamente si tengo stock suficiente antes de asignarme ese tipo de trabajo</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Crear un servicio con receta</b><br>
          Dado que que un Técnico está gestionando su catálogo<br>
          Cuando crea un nuevo servicio y le asocia una "receta" (lista de componentes y cantidades de su inventario)<br>
          Entonces el servicio se guarda con su receta de componentes asociada<br>
          Y el sistema usará esta receta para validar el stock antes de la asignación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-54</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-11</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Modificar Servicios y sus Recetas de Componentes</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>modificar los servicios existentes en mi catálogo (precio, descripción, componentes necesarios)</b>, para así <b>mantener actualizada mi oferta y las recetas de materiales</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Actualizar una receta de servicio</b><br>
          Dado que que un Técnico está editando un servicio existente con receta<br>
          Cuando modifica la lista de componentes o sus cantidades<br>
          Entonces la receta del servicio se actualiza.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-55</td>
    <td>técnico registrado</td>
    <td>Alta</td>
    <td>EP-11</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Eliminar Servicios del Catálogo</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>eliminar servicios que ya no ofrezco de mi catálogo</b>, para así <b>evitar que el sistema me asigne trabajos que no puedo realizar</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Eliminación de un servicio</b><br>
          Dado que que un Técnico visualiza su catálogo de servicios<br>
          Cuando selecciona un servicio y solicita su eliminación<br>
          Entonces el servicio se elimina y ya no será ofrecido a los clientes.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-56</td>
    <td>técnico registrado</td>
    <td>Media</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Establecimiento Precios por Tipo de Servicio y Zona</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico registrado</b>, quiero <b>establecer precios diferenciados por tipo de servicio y opcionalmente por zona dentro de mi área de cobertura</b>, para así <b>tener una estructura tarifaria clara y rentable</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Definir precio de un servicio</b><br>
          Dado que que un Técnico está creando o editando un servicio<br>
          Cuando establece un precio base para dicho servicio<br>
          Entonces ese precio se mostrará a los clientes como referencia.
        </li>
        <li><b>Escenario #2: Definir precio diferenciado por zona (opcional)</b><br>
          Dado que que un Técnico ha definido múltiples zonas de cobertura<br>
          Cuando edita un servicio<br>
          Entonces puede opcionalmente establecer un precio diferente para una zona específica.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-57</td>
    <td>propietario con suscripción Premium</td>
    <td>Baja</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Beneficio de Solicitud Prioritaria</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario con suscripción Premium</b>, al crear una solicitud de servicio, quiero <b>tener disponible y activar la opción de "marcar como prioritaria"</b>, para así <b>que mi solicitud tenga preferencia en el sistema de asignación y así resolver mi problema más rápidamente</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Marcar solicitud como prioritaria</b><br>
          Dado que que un Propietario con plan Premium está creando una solicitud<br>
          Cuando activa la opción de solicitud prioritaria<br>
          Entonces la solicitud es creada y marcada con alta prioridad para el proceso de asignación.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-58</td>
    <td>propietario del plan Básico</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Notificación de Límite de Solicitudes Alcanzado</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario del plan Básico</b>, al intentar crear una solicitud que excede mi límite mensual (2), quiero <b>ser notificado claramente por el sistema y ver una opción directa para mejorar mi plan a Premium</b>, para así <b>entender las reglas del plan gratuito y continuar usando el servicio si lo necesito</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Bloqueo por límite de solicitudes</b><br>
          Dado que que un Propietario con plan Básico ya ha alcanzado su límite de solicitudes mensuales<br>
          Cuando intenta crear una nueva solicitud de servicio<br>
          Entonces el sistema le impide continuar<br>
          Y le informa que ha alcanzado su límite<br>
          Y le presenta la opción de actualizar a un plan superior.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-59</td>
    <td>propietario y técnico</td>
    <td>Media</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Seguimiento de Estados de Servicio en Tiempo Real</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>propietario y técnico</b>, quiero <b>ver el estado actual del servicio (programado, confirmado, en progreso, completado) actualizado en tiempo real</b>, para así <b>estar informado sobre el progreso del trabajo</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Visualización del estado del servicio</b><br>
          Dado que que un servicio ha sido asignado<br>
          Cuando el Propietario o el Técnico consultan los detalles del servicio<br>
          Entonces visualizan el estado actual del mismo (ej. "Programado").
        </li>
        <li><b>Escenario #2: Actualización del estado</b><br>
          Dado que que un Técnico está ejecutando un servicio<br>
          Cuando actualiza el estado del servicio a "En Progreso"<br>
          Entonces el nuevo estado es visible tanto para él como para el Propietario.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-60</td>
    <td>técnico ejecutando un servicio</td>
    <td>Media</td>
    <td>EP-07</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registro Fotográfico de Trabajos (Antes/Después)</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico ejecutando un servicio</b>, quiero <b>tomar y subir fotografías del área de trabajo antes y después de la intervención</b>, para así <b>documentar el trabajo realizado y protegerme ante reclamos</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Adjuntar evidencia fotográfica</b><br>
          Dado que que un Técnico está gestionando un servicio activo<br>
          Cuando sube fotografías correspondientes al "antes" y "después" del trabajo<br>
          Entonces las imágenes quedan asociadas al registro del servicio como evidencia.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-61</td>
    <td>técnico completando un servicio</td>
    <td>Media</td>
    <td>EP-07</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Generación de Reportes Técnicos Estructurados</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico completando un servicio</b>, quiero <b>generar un reporte técnico estructurado que incluya los componentes utilizados de la 'receta' original, los procedimientos realizados y recomendaciones</b>, para así <b>profesionalizar mi servicio y dejar constancia del trabajo</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Generar un reporte de servicio</b><br>
          Dado que que un Técnico ha completado un servicio<br>
          Cuando finaliza el trabajo y accede a la funcionalidad de reporte<br>
          Entonces puede documentar los componentes utilizados, el trabajo realizado y las recomendaciones para el cliente<br>
          Y este reporte queda asociado al historial del servicio.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-62</td>
    <td>técnico que completa un servicio</td>
    <td>Alta</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Actualización Automática de Inventario Post-Servicio</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>técnico que completa un servicio</b>, quiero <b>que el sistema descuente automáticamente del mi inventario los componentes que marqué como utilizados en el reporte técnico</b>, para así <b>mantener mi stock actualizado sin trabajo manual</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Descuento automático de stock</b><br>
          Dado que que un Técnico ha completado un servicio que tenía una "receta" de componentes<br>
          Cuando marca el servicio como "Completado" y confirma los componentes utilizados en el reporte<br>
          Entonces el sistema descuenta automáticamente las cantidades de esos componentes de su inventario.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-63</td>
    <td>Técnico</td>
    <td>Media</td>
    <td>EP-06</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Historial de Clientes Atendidos</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico</b>, quiero <b>acceder a un historial detallado de los clientes que he atendido</b>, para así <b>dar seguimiento a relaciones profesionales y mejorar mi servicio basado en experiencias previas</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Consulta de historial de clientes</b><br>
          Dado que que un Técnico ha completado servicios<br>
          Cuando accede a su historial de clientes<br>
          Entonces puede visualizar un listado de todos los clientes atendidos<br>
          Y para cada cliente, puede ver los servicios prestados.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-64</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-07</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Sistema de Calificación Post-Servicio</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero <b>calificar y dejar reseñas sobre los servicios que he utilizado</b>, para así <b>compartir mi experiencia con otros usuarios y proporcionar retroalimentación a los Técnicos</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Calificación del servicio</b><br>
          Dado que que un Propietario ha recibido un servicio que ya fue marcado como "Completado"<br>
          Cuando completa el formulario de calificación (puntuación y comentarios)<br>
          Entonces el sistema registra su calificación y la asocia al servicio y al perfil del Técnico.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-65</td>
    <td>usuario</td>
    <td>Baja</td>
    <td>EP-07</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Visualización de Calificaciones y Reseñas</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>usuario</b>, quiero <b>ver las calificaciones y reseñas dejadas por otros usuarios</b>, para así <b>tomar decisiones informadas sobre qué servicios utilizar</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Consulta de la reputación de un técnico</b><br>
          Dado que que un Propietario está explorando el perfil de un Técnico<br>
          Cuando accede a la sección de reseñas<br>
          Entonces visualiza la calificación promedio y los comentarios dejados por otros usuarios.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>User</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>US-66</td>
    <td>Técnico</td>
    <td>Baja</td>
    <td>EP-07</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Retroalimentación directa de servicios</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>Técnico</b>, quiero <b>recibir retroalimentación directa sobre mis servicios</b>, para así <b>mejorar mi oferta</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario #1: Revisión de valoraciones recibidas</b><br>
          Dado que que un Técnico ha recibido valoraciones por sus servicios<br>
          Cuando accede a su sección de retroalimentación<br>
          Entonces puede ver todas las valoraciones recibidas de sus clientes<br>
          Y puede identificar los aspectos mejor y peor valorados.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-01</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-12</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Registrar Propiedad</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint POST para registrar una propiedad asociada a un propietario</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Registro exitoso</b><br>
          Dado que el usuario está autenticado<br>
          Cuando envía un request POST con todos los datos válidos de su propiedad<br>
          Entonces el sistema responde con un estado 201 Created<br>
          Y el cuerpo de la respuesta incluye la propiedad recién creada.
        </li>
        <li><b>Escenario 2: Faltan datos obligatorios</b><br>
          Dado que el usuario omite el campo "dirección"<br>
          Cuando intenta registrar la propiedad<br>
          Entonces el sistema responde con un error 400 Bad Request y un mensaje de validación.
        </li>
        <li><b>Escenario 3: Usuario no autenticado</b><br>
          Dado que un usuario no autenticado intenta acceder al endpoint<br>
          Cuando envía un request POST<br>
          Entonces el sistema responde con un error 401 Unauthorized.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-02</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-12</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Obtener Propiedades por Propietario</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint GET para listar todas las propiedades registradas por un propietario</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Propietario con propiedades</b><br>
          Dado que el propietario está autenticado y tiene propiedades registradas<br>
          Cuando consulta el endpoint<br>
          Entonces se devuelve un estado 200 OK y una lista con sus propiedades.
        </li>
        <li><b>Escenario 2: Propietario sin propiedades</b><br>
          Dado que el propietario está autenticado pero no tiene propiedades registradas<br>
          Cuando consulta el endpoint<br>
          Entonces se devuelve un estado 200 OK y una lista vacía [].
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-03</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-13</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Crear Componente</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint POST para que el técnico registre un nuevo componente en su inventario</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Creación exitosa</b><br>
          Dado que un técnico autenticado envía la información completa del componente<br>
          Cuando se recibe el request POST<br>
          Entonces el sistema responde con 201 Created y el nuevo componente.
        </li>
        <li><b>Escenario 2: Componente duplicado</b><br>
          Dado que el técnico intenta crear un componente con un nombre que ya existe en su inventario<br>
          Cuando envía el request<br>
          Entonces el sistema responde con 409 Conflict y un mensaje de error.
        </li>
        <li><b>Escenario 3: Acceso no autorizado por rol</b><br>
          Dado que un usuario con rol "Propietario" intenta crear un componente<br>
          Cuando envía el request<br>
          Entonces el sistema responde con un error 403 Forbidden.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-04</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-13</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Actualizar Stock de Componente</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint PATCH para actualizar el stock de un componente del inventario del técnico</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Actualización exitosa</b><br>
          Dado que un técnico quiere modificar la cantidad de un componente existente<br>
          Cuando envía un nuevo valor de stock<br>
          Entonces se responde con 200 OK y se actualiza el stock en la base de datos.
        </li>
        <li><b>Escenario 2: Componente inexistente</b><br>
          Dado que el técnico intenta actualizar un componente con un ID que no existe<br>
          Cuando envía el request<br>
          Entonces el sistema responde con un error 404 Not Found.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-05</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-13</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Crear Servicio de Técnico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint POST para que el técnico defina un nuevo servicio en su catálogo, incluyendo su "receta" de componentes</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Creación exitosa</b><br>
          Dado que un técnico autenticado envía datos válidos para un nuevo servicio y su receta<br>
          Cuando se recibe la solicitud POST<br>
          Entonces el sistema responde con 201 Created y el nuevo servicio.
        </li>
        <li><b>Escenario 2: Faltan datos obligatorios</b><br>
          Dado que el técnico envía los datos del servicio pero sin la "receta"<br>
          Cuando se recibe la solicitud POST<br>
          Entonces el sistema responde con 400 Bad Request y un error de validación.
        </li>
        <li><b>Escenario 3: Componente de la receta no existe</b><br>
          Dado que el técnico incluye en la receta un ID de componente que no es válido<br>
          Cuando se recibe la solicitud POST<br>
          Entonces el sistema responde con 400 Bad Request y un error específico.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-06</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-14</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Obtener Servicios por Zona</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint GET que devuelva los servicios disponibles en una zona geográfica específica</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Servicios encontrados</b><br>
          Dado que un propietario consulta una zona con cobertura de técnicos<br>
          Cuando el frontend consulta con la ubicación de la propiedad<br>
          Entonces el sistema devuelve 200 OK y una lista de servicios únicos.
        </li>
        <li><b>Escenario 2: Zona sin cobertura</b><br>
          Dado que la ubicación de la propiedad no está en la zona de cobertura de ningún técnico<br>
          Cuando se realiza la consulta<br>
          Entonces el sistema responde con 200 OK y una lista vacía [].
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-07</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-14</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Iniciar Flujo de Solicitud</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint que valide el plan del propietario al iniciar una solicitud</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Usuario gratuito dentro del límite</b><br>
          Dado que un propietario con plan gratuito ha hecho 1 solicitud este mes<br>
          Cuando inicia una nueva solicitud<br>
          Entonces el sistema responde 200 OK y le permite continuar.
        </li>
        <li><b>Escenario 2: Usuario gratuito alcanza el límite</b><br>
          Dado que el propietario con plan gratuito ya ha hecho 2 solicitudes este mes<br>
          Cuando inicia una nueva solicitud<br>
          Entonces el sistema responde 403 Forbidden y sugiere actualizar a Premium.
        </li>
        <li><b>Escenario 3: Usuario Premium sin límites</b><br>
          Dado que un propietario con plan Premium ha hecho 5 solicitudes este mes<br>
          Cuando inicia una nueva solicitud<br>
          Entonces el sistema responde 200 OK y le permite continuar.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-08</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-14</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Enviar Solicitud de Servicio</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint POST que registre los detalles de una solicitud de servicio</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Envío exitoso</b><br>
          Dado que el propietario ha completado el asistente<br>
          Cuando envía los datos finales de la solicitud<br>
          Entonces el sistema responde 201 Created y guarda la solicitud.
        </li>
        <li><b>Escenario 2: Faltan datos de recibo</b><br>
          Dado que se omiten datos obligatorios del recibo<br>
          Cuando se envía la solicitud<br>
          Entonces el sistema responde 400 Bad Request con un error de validación.
        </li>
        <li><b>Escenario 3: Usuario gratuito intenta usar prioridad</b><br>
          Dado que un propietario con plan gratuito marca la solicitud como prioritaria<br>
          Cuando envía la solicitud<br>
          Entonces el sistema responde 403 Forbidden y un mensaje de error.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-09</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-14</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Asignar Técnico Automáticamente</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>implementar la lógica para asignar automáticamente un técnico a una solicitud</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Asignación exitosa</b><br>
          Dado que hay una solicitud pendiente y un técnico compatible<br>
          Cuando se activa el proceso de asignación<br>
          Entonces se asigna el técnico a la solicitud y se actualiza su estado a "asignado".
        </li>
        <li><b>Escenario 2: Ningún técnico compatible</b><br>
          Dado que ningún técnico cumple con los criterios de stock o agenda<br>
          Cuando se intenta asignar<br>
          Entonces la solicitud permanece en estado "pendiente" y se registra el fallo.
        </li>
        <li><b>Escenario 3: Asignación con prioridad</b><br>
          Dado que hay una solicitud normal y una prioritaria, y un solo técnico disponible<br>
          Cuando se activa la asignación<br>
          Entonces el sistema asigna el técnico a la solicitud prioritaria primero.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-10</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-13</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Actualización Automática de Stock</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un listener que reaccione al evento "Servicio Completado" para descontar el stock</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Descuento exitoso</b><br>
          Dado que un servicio es "Completado" y se publica el evento con los componentes usados<br>
          Cuando el listener recibe el evento<br>
          Entonces el sistema actualiza el inventario del técnico correctamente.
        </li>
        <li><b>Escenario 2: El evento no contiene componentes</b><br>
          Dado que se recibe un evento "Servicio Completado" sin componentes listados<br>
          Cuando el listener lo procesa<br>
          Entonces el proceso termina exitosamente sin realizar cambios en el inventario.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-11</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-15</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Enviar Evaluación de Servicio</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint POST para registrar una evaluación</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Evaluación exitosa</b><br>
          Dado que un servicio está "Completado"<br>
          Cuando el usuario envía una evaluación válida<br>
          Entonces se responde 201 Created y se guarda la evaluación.
        </li>
        <li><b>Escenario 2: Servicio no completado</b><br>
          Dado que un usuario intenta evaluar un servicio "En progreso"<br>
          Cuando se envía el request<br>
          Entonces el sistema responde 403 Forbidden y un mensaje adecuado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-12</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-15</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Obtener Evaluaciones por Técnico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint GET para obtener las evaluaciones de un técnico</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Técnico con evaluaciones</b><br>
          Dado que un técnico tiene evaluaciones registradas<br>
          Cuando se hace la consulta<br>
          Entonces el sistema responde 200 OK con la lista de evaluaciones.
        </li>
        <li><b>Escenario 2: Técnico sin evaluaciones</b><br>
          Dado que el técnico aún no ha recibido evaluaciones<br>
          Cuando se hace la consulta<br>
          Entonces el sistema responde 200 OK con una lista vacía.
        </li>
      </ul>
    </td>
  </tr>
<tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-13</td>
    <td>desarrollador</td>
    <td>Alta</td>
    <td>EP-00</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Conectar a Base de Datos</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>configurar la conexión a la base de datos PostgreSQL</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Conexión exitosa</b><br>
          Dado que las credenciales de la base de datos son correctas<br>
          Cuando se levanta el servidor<br>
          Entonces la conexión se establece sin errores.
        </li>
        <li><b>Escenario 2: Credenciales incorrectas</b><br>
          Dado que la contraseña de la base de datos es incorrecta<br>
          Cuando el servidor intenta conectarse<br>
          Entonces el sistema lanza un error de autenticación y detiene el arranque.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-14</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-09</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Listener de Webhook de Stripe</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint para recibir y procesar webhooks de Stripe</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Suscripción exitosa</b><br>
          Dado que un usuario completa un pago en Stripe<br>
          Cuando Stripe envía el evento "checkout.session.completed"<br>
          Entonces el sistema valida la firma y actualiza el estado del usuario a "Premium".
        </li>
        <li><b>Escenario 2: Firma de Webhook inválida</b><br>
          Dado que se recibe un request con una firma de Stripe incorrecta<br>
          Cuando el sistema intenta validar el evento<br>
          Entonces rechaza el request con un error 400 Bad Request.
        </li>
        <li><b>Escenario 3: Evento de cancelación de suscripción</b><br>
          Dado que un usuario cancela su plan desde el portal de Stripe<br>
          Cuando Stripe envía el evento "customer.subscription.deleted"<br>
          Entonces el sistema actualiza el estado del usuario a "Básico".
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-15</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-09</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Reinicio Mensual de Contador</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear una tarea programada (cron job) que se ejecute mensualmente</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Reseteo exitoso</b><br>
          Dado que es el primer día del mes<br>
          Cuando se ejecuta la tarea<br>
          Entonces el sistema reinicia el contador de solicitudes de todos los usuarios del plan gratuito.
        </li>
        <li><b>Escenario 2: Tarea se ejecuta en día incorrecto</b><br>
          Dado que no es el primer día del mes<br>
          Cuando la tarea se ejecuta (por un error o test)<br>
          Entonces el proceso termina sin realizar ninguna acción.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-16</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-09</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Sesión de Portal de Stripe</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint que genere una sesión para el Portal de Cliente de Stripe</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Generación exitosa</b><br>
          Dado que un usuario Premium autenticado solicita gestionar su plan<br>
          Cuando se consulta el endpoint<br>
          Entonces se genera y devuelve una URL única para el portal de Stripe.
        </li>
        <li><b>Escenario 2: Usuario no suscrito</b><br>
          Dado que un usuario del plan gratuito intenta acceder al portal<br>
          Cuando se consulta el endpoint<br>
          Entonces el sistema responde 403 Forbidden.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-17</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Endpoint de Autenticación JWT</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un endpoint de login que genere tokens JWT para permitir la autenticación segura de usuarios</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Login exitoso</b><br>
          Dado que se envía POST /api/auth/login con email y password válidos<br>
          Cuando se procesa la petición<br>
          Entonces el sistema retorna un token JWT<br>
          Y el token incluye el rol del usuario<br>
          Y retorna código 200.
        </li>
        <li><b>Escenario 2: Credenciales inválidas</b><br>
          Dado que se envía POST /api/auth/login con credenciales incorrectas<br>
          Cuando se procesa la petición<br>
          Entonces el sistema retorna error 401<br>
          Y retorna mensaje de error apropiado.
        </li>
        <li><b>Escenario 3: Validación de token</b><br>
          Dado que se envía una petición con token JWT en header Authorization<br>
          Cuando se valida el token<br>
          Entonces el sistema verifica la firma del token<br>
          Y retorna la información del usuario si es válido.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-18</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-01</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Endpoint de Registro de Usuarios</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear endpoints de registro diferenciados para permitir el registro de propietarios y técnicos</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Registro exitoso de propietario</b><br>
          Dado que se envía POST /api/auth/register/owner con datos válidos<br>
          Cuando se procesa la petición<br>
          Entonces el sistema crea el usuario con rol "owner"<br>
          Y encripta la contraseña<br>
          Y retorna código 201<br>
          Y retorna el usuario creado (sin contraseña).
        </li>
        <li><b>Escenario 2: Registro exitoso de técnico</b><br>
          Dado que se envía POST /api/auth/register/technician con datos válidos<br>
          Cuando se procesa la petición<br>
          Entonces el sistema crea el usuario con rol "technician"<br>
          Y almacena las certificaciones básicas<br>
          Y retorna código 201.
        </li>
        <li><b>Escenario 3: Email duplicado</b><br>
          Dado que se intenta registrar con email ya existente<br>
          Cuando se procesa la petición<br>
          Entonces el sistema retorna error 409<br>
          Y retorna mensaje indicando email duplicado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-19</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-02</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Verificación de Email</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear endpoints para verificar emails de usuarios para completar el proceso de registro</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Generar token de verificación</b><br>
          Dado que se registra un nuevo usuario<br>
          Cuando se completa el registro<br>
          Entonces el sistema genera un token de verificación<br>
          Y almacena el token en base de datos<br>
          Y marca el usuario como "no verificado".
        </li>
        <li><b>Escenario 2: Verificar email</b><br>
          Dado que se envía GET /api/auth/verify/{token}<br>
          Cuando se procesa la petición con token válido<br>
          Entonces el sistema marca el usuario como verificado<br>
          Y retorna código 200<br>
          Y retorna mensaje de confirmación.
        </li>
        <li><b>Escenario 3: Token inválido</b><br>
          Dado que se envía un token de verificación inválido<br>
          Cuando se procesa la petición<br>
          Entonces el sistema retorna error 400<br>
          Y retorna mensaje de token inválido.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-20</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Middleware de Autorización</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear middleware de autorización para controlar acceso a endpoints según roles de usuario</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Acceso autorizado</b><br>
          Dado que un usuario con rol correcto accede a un endpoint protegido<br>
          Cuando el middleware verifica los permisos<br>
          Entonces el sistema permite continuar con la petición<br>
          Y pasa al siguiente middleware o controlador.
        </li>
        <li><b>Escenario 2: Acceso denegado por rol</b><br>
          Dado que un usuario sin permisos accede a endpoint restringido<br>
          Cuando el middleware verifica los permisos<br>
          Entonces el sistema retorna error 403<br>
          Y retorna mensaje de acceso denegado.
        </li>
        <li><b>Escenario 3: Token faltante</b><br>
          Dado que se accede a endpoint protegido sin token<br>
          Cuando el middleware verifica autenticación<br>
          Entonces el sistema retorna error 401<br>
          Y retorna mensaje de token requerido.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-21</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Recuperación de Contraseña</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear endpoints para recuperación de contraseña para permitir a usuarios restablecer sus credenciales</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Solicitar recuperación</b><br>
          Dado que se envía POST /api/auth/forgot-password con email válido<br>
          Cuando se procesa la petición<br>
          Entonces el sistema genera un token de recuperación<br>
          Y almacena el token con expiración<br>
          Y retorna código 200.
        </li>
        <li><b>Escenario 2: Restablecer contraseña</b><br>
          Dado que se envía POST /api/auth/reset-password con token y nueva contraseña<br>
          Cuando se procesa la petición con token válido<br>
          Entonces el sistema actualiza la contraseña encriptada<br>
          Y elimina el token de recuperación<br>
          Y retorna código 200.
        </li>
        <li><b>Escenario 3: Token expirado</b><br>
          Dado que se intenta usar un token de recuperación expirado<br>
          Cuando se procesa la petición<br>
          Entonces el sistema retorna error 400<br>
          Y retorna mensaje de token expirado.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-22</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-03</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Endpoints de Gestión de Perfiles</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear endpoints CRUD para gestión de perfiles para permitir a usuarios actualizar su información personal</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Obtener perfil</b><br>
          Dado que se envía GET /api/users/profile con token válido<br>
          Cuando se procesa la petición<br>
          Entonces el sistema retorna la información del usuario<br>
          Y omite campos sensibles como contraseña<br>
          Y retorna código 200.
        </li>
        <li><b>Escenario 2: Actualizar perfil</b><br>
          Dado que se envía PUT /api/users/profile con datos válidos<br>
          Cuando se procesa la petición<br>
          Entonces el sistema actualiza los campos permitidos<br>
          Y retorna el perfil actualizado<br>
          Y retorna código 200.
        </li>
        <li><b>Escenario 3: Datos inválidos</b><br>
          Dado que se envían datos inválidos en actualización<br>
          Cuando se validan los datos<br>
          Entonces el sistema retorna error 400<br>
          Y retorna lista de errores de validación por campo.
        </li>
      </ul>
    </td>
  </tr>
  <tr>
    <th>Story ID</th>
    <th>Role</th>
    <th>Priority</th>
    <th>Epic</th>
  </tr>
  <tr>
    <td>TS-23</td>
    <td>desarrollador</td>
    <td>Baja</td>
    <td>EP-04</td>
  </tr>
  <tr>
    <th>Title</th>
    <td colspan="3">Sistema de Notificaciones Básico</td>
  </tr>
  <tr>
    <th colspan="4">Description</th>
  </tr>
  <tr>
    <td colspan="4">
      Como un <b>desarrollador</b>, quiero <b>crear un servicio básico de notificaciones para enviar emails simples a los usuarios</b>.
    </td>
  </tr>
  <tr>
    <th colspan="4">Acceptance Criteria</th>
  </tr>
  <tr>
    <td colspan="4">
      <ul>
        <li><b>Escenario 1: Enviar email simple</b><br>
          Dado que se requiere enviar un email<br>
          Cuando se llama al servicio de notificaciones<br>
          Entonces el sistema envía el email usando configuración SMTP<br>
          Y registra el envío en logs<br>
          Y retorna confirmación de envío.
        </li>
        <li><b>Escenario 2: Configurar preferencias</b><br>
          Dado que se envía PUT /api/users/notifications con preferencias<br>
          Cuando se procesa la petición<br>
          Entonces el sistema actualiza las preferencias del usuario<br>
          Y retorna código 200.
        </li>
        <li><b>Escenario 3: Error en envío</b><br>
          Dado que falla el envío de email<br>
          Cuando se detecta el error<br>
          Entonces el sistema registra el error en logs<br>
          Y retorna error apropiado al llamador.
        </li>
      </ul>
    </td>
  </tr>
</table>


## 3.3. Product Backlog

El Product Backlog reúne y prioriza las historias de usuario identificadas para ElectroLink. Los elementos de prioridad alta se atienden primero porque sostienen los procesos principales de registro de activos, contratación, agenda y gestión de servicios. Las estimaciones iniciales utilizan puntos de historia y pueden ajustarse durante el refinamiento del equipo.

| Orden | Story ID | Título | Epic | Prioridad | Story Points |
|---:|---|---|---|---|---:|
| 1 | US-05 | Navegación sin errores | EP-08 | Alta | 5 |
| 2 | US-29 | Configuración de zona de cobertura geográfica | EP-06 | Alta | 8 |
| 3 | US-31 | Crear componente eléctrico | EP-10 | Alta | 5 |
| 4 | US-32 | Editar componente eléctrico | EP-10 | Alta | 5 |
| 5 | US-33 | Eliminar componente eléctrico | EP-10 | Alta | 3 |
| 6 | US-34 | Registro de propiedad | EP-10 | Alta | 5 |
| 7 | US-37 | Registro de inventario de componentes | EP-10 | Alta | 8 |
| 8 | US-38 | Actualización de stock de componentes | EP-10 | Alta | 5 |
| 9 | US-39 | Alertas de stock mínimo | EP-10 | Alta | 5 |
| 10 | US-44 | Selección de servicio del catálogo | EP-04 | Alta | 5 |
| 11 | US-45 | Cancelación de servicios programados | EP-04 | Alta | 5 |
| 12 | US-47 | Historial de servicios contratados | EP-05 | Alta | 5 |
| 13 | US-48 | Configurar horarios semanales | EP-06 | Alta | 5 |
| 14 | US-49 | Modificar horarios de trabajo | EP-06 | Alta | 3 |
| 15 | US-50 | Bloquear fechas y horarios | EP-06 | Alta | 5 |
| 16 | US-51 | Visualizar agenda de trabajos asignados | EP-06 | Alta | 8 |
| 17 | US-53 | Crear servicios con recetas de componentes | EP-11 | Alta | 8 |
| 18 | US-54 | Modificar servicios y recetas | EP-11 | Alta | 5 |
| 19 | US-55 | Eliminar servicios del catálogo | EP-11 | Alta | 3 |
| 20 | US-62 | Actualización de inventario posterior al servicio | EP-06 | Alta | 8 |
| 21 | US-01 | Visualización de características y beneficios | EP-08 | Media | 3 |
| 22 | US-02 | Visualización de testimonios | EP-08 | Media | 3 |
| 23 | US-03 | Adaptabilidad a diferentes dispositivos | EP-08 | Media | 5 |
| 24 | US-04 | Visualización de una sección principal | EP-08 | Media | 3 |
| 25 | US-08 | Información de la startup | EP-08 | Media | 2 |
| 26 | US-09 | Misión de la startup | EP-08 | Media | 2 |
| 27 | US-10 | Visión de la startup | EP-08 | Media | 2 |
| 28 | US-11 | Información detallada de los servicios | EP-08 | Media | 3 |
| 29 | US-12 | Planes de suscripción disponibles | EP-08 | Media | 3 |
| 30 | US-13 | Registro de cuenta como dueño de hogar | EP-01 | Media | 5 |
| 31 | US-14 | Registro de cuenta como dueño de empresa | EP-01 | Media | 5 |
| 32 | US-15 | Registro de cuenta para técnicos | EP-01 | Media | 5 |
| 33 | US-27 | Dashboard personalizado | EP-03 | Media | 8 |
| 34 | US-30 | Notificaciones personalizadas | EP-03 | Media | 5 |
| 35 | US-35 | Edición de propiedad | EP-10 | Media | 3 |
| 36 | US-36 | Eliminación de propiedad | EP-10 | Media | 3 |
| 37 | US-40 | Contratación mediante asistente guiado | EP-04 | Media | 8 |
| 38 | US-41 | Selección de propiedad | EP-04 | Media | 3 |
| 39 | US-42 | Carga manual de recibos eléctricos | EP-04 | Media | 5 |
| 40 | US-43 | Descripción detallada del problema | EP-04 | Media | 3 |
| 41 | US-46 | Notificación de asignación de técnico | EP-04 | Media | 5 |
| 42 | US-52 | Configurar tiempo de traslado | EP-06 | Media | 3 |
| 43 | US-56 | Precios por tipo de servicio y zona | EP-06 | Media | 5 |
| 44 | US-58 | Notificación de límite de solicitudes | EP-04 | Media | 3 |
| 45 | US-59 | Seguimiento de estados del servicio | EP-04 | Media | 8 |
| 46 | US-60 | Registro fotográfico antes y después | EP-07 | Media | 5 |
| 47 | US-61 | Reportes técnicos estructurados | EP-07 | Media | 8 |
| 48 | US-63 | Historial de clientes atendidos | EP-06 | Media | 5 |
| 49 | US-06 | Navegación mediante encabezado | EP-08 | Baja | 2 |
| 50 | US-07 | Visualización del pie de página | EP-08 | Baja | 2 |
| 51 | US-16 | Verificación de cuenta por correo | EP-01 | Baja | 5 |
| 52 | US-17 | Inicio de sesión | EP-01 | Baja | 5 |
| 53 | US-18 | Validación de datos de registro | EP-02 | Baja | 3 |
| 54 | US-19 | Mensajes de éxito del registro | EP-02 | Baja | 2 |
| 55 | US-20 | Mensajes de error del registro | EP-02 | Baja | 2 |
| 56 | US-21 | Recuperación de contraseña | EP-03 | Baja | 5 |
| 57 | US-22 | Cierre de sesión | EP-03 | Baja | 2 |
| 58 | US-23 | Visualización del perfil de propietario | EP-03 | Baja | 3 |
| 59 | US-24 | Edición del perfil de propietario | EP-03 | Baja | 3 |
| 60 | US-25 | Visualización del perfil de técnico | EP-03 | Baja | 3 |
| 61 | US-26 | Edición del perfil de técnico | EP-03 | Baja | 3 |
| 62 | US-28 | Portafolio digital con evidencias | EP-07 | Baja | 5 |
| 63 | US-57 | Beneficio de solicitud prioritaria | EP-04 | Baja | 3 |
| 64 | US-64 | Calificación posterior al servicio | EP-07 | Baja | 3 |
| 65 | US-65 | Visualización de calificaciones y reseñas | EP-07 | Baja | 3 |
| 66 | US-66 | Retroalimentación directa del servicio | EP-07 | Baja | 3 |

El [tablero de Product Backlog de ElectroLink en Trello](https://trello.com/b/vEA621A6/electrolink-product-backlog) refleja este mismo conjunto de historias y utiliza las columnas **Product Backlog**, **Sprint Backlog**, **En progreso**, **En revisión** y **Terminado**.

## 3.4. Impact Mapping

Un mapa de impacto es una técnica colaborativa y visual de planificación estratégica que alinea los objetivos de un proyecto con las acciones necesarias para alcanzarlos. En este sección , el equipo presenta los mapas de impacto realizados.

<hr>

<img src="https://i.postimg.cc/jjHPVLW0/asdasd.png"/>
<hr>



<img src="https://i.postimg.cc/Dz0060qP/rwerwetre.png"/>
<hr>



<img src="https://i.postimg.cc/8P7Z2mN2/asdasda.png"/>
<hr>

<div style="page-break-after: always;"></div>

# Capítulo IV: Product Design

Este capítulo define la experiencia visual, la arquitectura de información y el diseño técnico de ElectroLink. El contenido fue reorganizado y adaptado a las necesidades actuales del proyecto, priorizando las aplicaciones web y móvil para conectar clientes con técnicos especializados.

## 4.1. Style Guidelines

Las pautas de estilo aseguran que todos los puntos de contacto de ElectroLink transmitan una identidad uniforme. Su aplicación abarca la landing page, la plataforma web y la aplicación móvil.

### 4.1.1. General Style Guidelines

La identidad visual busca comunicar confianza, claridad y cercanía. Se utiliza una composición limpia, con espacios amplios, jerarquías legibles y elementos gráficos asociados a la conexión entre clientes y especialistas.

#### Logotipo

El logotipo combina el nombre ElectroLink con un símbolo reconocible. La versión principal se utiliza sobre fondos claros; la versión invertida se reserva para superficies oscuras y el isotipo sirve como identificador compacto.

![Logotipo principal de ElectroLink](assets/img/cap4/branding/logo-original.png)

![Isotipo de ElectroLink](assets/img/cap4/branding/logo-icon.png)

![Logotipo invertido de ElectroLink](assets/img/cap4/branding/logo-inverted.png)

#### Paleta cromática

| Color | Código | Aplicación principal |
|---|---|---|
| Azul institucional | `#0B5CAD` | Botones primarios, encabezados y navegación |
| Celeste | `#3DADFF` | Acentos, enlaces y estados informativos |
| Azul muy claro | `#E8EEF7` | Fondos secundarios y tarjetas |
| Amarillo suave | `#FFE492` | Destacados y llamados de atención |
| Azul grisáceo | `#2E3A59` | Texto principal e iconografía |
| Blanco | `#FFFFFF` | Superficies y contraste |

#### Tipografía e iconografía

La tipografía Abel se conserva en títulos y piezas de marca por su apariencia moderna. Para textos extensos se emplea una fuente sans serif del sistema, que mejora la lectura en distintos dispositivos. Los íconos mantienen trazos simples y siempre se acompañan de etiquetas cuando su significado podría ser ambiguo.

### 4.1.2. Web Style Guidelines

La interfaz web sigue un patrón de lectura en forma de F: la información más importante aparece en la parte superior y las acciones se alinean con el recorrido visual del usuario. La cuadrícula se adapta al ancho disponible, limita la extensión de los textos y conserva separaciones constantes entre bloques.

![Patrón de lectura aplicado a la interfaz web](assets/img/cap4/branding/f-pattern.png)

Los botones primarios utilizan el azul institucional, mientras que los secundarios se presentan con fondo claro y borde visible. Los formularios incluyen etiquetas persistentes, mensajes de error cercanos al campo y estados de foco perceptibles mediante teclado.

### 4.1.3. Mobile Style Guidelines

La propuesta móvil prioriza tareas breves: encontrar un servicio, comparar técnicos, programar una atención y revisar su estado. La navegación principal permanece al alcance del pulgar y el contenido se distribuye en una sola columna. Las áreas táctiles son amplias, los formularios solicitan únicamente datos indispensables y cada acción importante ofrece confirmación visual.

#### 4.1.3.1. iOS Mobile Style Guidelines

En iOS se respetan las áreas seguras, la navegación jerárquica y los patrones habituales de retorno. Los controles adoptan la tipografía del sistema para el contenido funcional, mantienen áreas táctiles de al menos 44 puntos y permiten el uso de gestos sin ocultar alternativas visibles. Las hojas modales se reservan para decisiones acotadas, como escoger fecha o confirmar una solicitud.

#### 4.1.3.2. Android Mobile Style Guidelines

En Android se aplican convenciones de Material Design, tipografía Roboto para la interfaz funcional y áreas táctiles de al menos 48 dp. La barra superior contextualiza cada pantalla, la navegación inferior agrupa los destinos frecuentes y el botón Atrás conserva el historial esperado. Los estados, elevaciones y transiciones ayudan a distinguir acciones disponibles sin recargar la pantalla.

## 4.2. Information Architecture

La arquitectura de información organiza las funciones de ElectroLink para que clientes y técnicos encuentren rápidamente lo que necesitan. La estructura diferencia contenidos públicos, actividades de contratación y herramientas de gestión según el perfil autenticado.

### 4.2.1. Organization Systems

Se utiliza una organización jerárquica complementada por categorías. Desde el nivel público se accede a información general y al inicio de sesión; después de autenticarse, cada rol visualiza módulos propios. Los servicios se agrupan por especialidad, mientras que las solicitudes se ordenan por estado y fecha.

![Sistema de organización de ElectroLink](assets/img/cap4/information-architecture/organization-system.png)

### 4.2.2. Labeling Systems

Las etiquetas se redactan con vocabulario cotidiano y orientado a la acción. Se evitan términos técnicos internos y se mantiene el mismo nombre para una función en todas las plataformas.

| Etiqueta | Significado |
|---|---|
| Inicio | Resumen de actividad y accesos frecuentes |
| Servicios | Categorías y prestaciones disponibles |
| Técnicos | Profesionales que pueden atender una solicitud |
| Solicitudes | Servicios pedidos y su estado actual |
| Agenda | Fechas disponibles y atenciones programadas |
| Historial | Trabajos concluidos o cancelados |
| Suscripción | Plan y beneficios del técnico |
| Perfil | Datos personales, preferencias y seguridad |
| Ayuda | Preguntas frecuentes y canales de soporte |
| Cerrar sesión | Finalización segura de la sesión activa |

### 4.2.3. SEO Tags and Meta Tags

La landing page emplea metadatos descriptivos para mejorar su presentación en buscadores y al compartir enlaces.

| Elemento | Propuesta |
|---|---|
| `title` | ElectroLink | Encuentra técnicos de confianza |
| `description` | Plataforma para solicitar y gestionar servicios técnicos de forma sencilla y segura. |
| `keywords` | servicios técnicos, electricistas, mantenimiento, técnicos de confianza |
| `robots` | index, follow |
| Open Graph | Título, descripción, imagen de marca y URL canónica |
| Twitter Card | Tarjeta de resumen con imagen destacada |

Cada página pública debe contar con un título único, descripción pertinente, jerarquía correcta de encabezados y texto alternativo en imágenes relevantes.

### 4.2.4. Searching Systems

La búsqueda combina texto libre con filtros por especialidad, ubicación, disponibilidad, rango de precio y valoración. Los resultados muestran primero la coincidencia con la necesidad ingresada y luego criterios de confianza. Si no existen coincidencias, el sistema propone ajustar filtros o explorar categorías relacionadas.

### 4.2.5. Navigation Systems

La landing page utiliza navegación superior y enlaces de pie de página. En la plataforma web se incorpora un menú lateral o superior según el ancho de pantalla. En móvil, los destinos principales se ubican en una barra inferior y las funciones secundarias se agrupan en Perfil.

![Sistema de navegación de ElectroLink](assets/img/cap4/information-architecture/navigation-system.png)

## 4.3. Landing Page UI Design

La landing page comunica el valor de ElectroLink, explica su funcionamiento y dirige a clientes y técnicos hacia el registro. Su contenido progresa desde la propuesta principal hasta beneficios, categorías, testimonios y preguntas frecuentes.

### 4.3.1. Landing Page Wireframe

Los wireframes establecen la jerarquía y distribución antes de aplicar la identidad visual. La cabecera presenta el mensaje central y el llamado a la acción; las secciones siguientes explican el proceso y refuerzan la confianza.

![Wireframe de la landing page, vista 1](assets/img/cap4/landing/wireframe-01.png)

![Wireframe de la landing page, vista 2](assets/img/cap4/landing/wireframe-02.png)

![Wireframe de la landing page, vista 3](assets/img/cap4/landing/wireframe-03.png)

### 4.3.2. Landing Page Mock-up

Los mock-ups incorporan colores, tipografías, imágenes y componentes finales. El azul concentra las acciones principales, mientras que los fondos claros separan contenidos sin interrumpir el recorrido.

![Mock-up de la landing page, vista 1](assets/img/cap4/landing/mockup-01.png)

![Mock-up de la landing page, vista 2](assets/img/cap4/landing/mockup-02.png)

## 4.4. Mobile Applications UX/UI Design

La aplicación móvil adapta las funciones esenciales a un contexto de uso rápido. El flujo principal permite iniciar sesión, buscar una especialidad, revisar un perfil, programar el servicio y recibir confirmación.

### 4.4.1. Mobile Applications Wireframes

Los wireframes móviles representan las pantallas básicas y su jerarquía funcional sin depender todavía del acabado gráfico.

![Wireframes de la aplicación móvil](assets/img/cap4/mobile/wireframes.svg)

### 4.4.2. Mobile Applications Wireflow Diagrams

El wireflow conecta las pantallas del proceso de contratación y muestra el regreso al listado cuando el usuario desea cambiar su selección.

![Wireflow de la aplicación móvil](assets/img/cap4/mobile/wireflow.svg)

### 4.4.3. Mobile Applications Mock-ups

Los mock-ups aplican la identidad de ElectroLink a las vistas de acceso, inicio, resultados, perfil del técnico y confirmación.

![Mock-ups de la aplicación móvil](assets/img/cap4/mobile/mockups.svg)

### 4.4.4. Mobile Applications User Flow Diagrams

El flujo contempla decisiones y rutas alternativas. Cuando no hay resultados se ajustan los filtros; si el usuario no confirma al técnico, vuelve al listado sin perder el criterio de búsqueda.

![User flow de la aplicación móvil](assets/img/cap4/mobile/user-flow.svg)

## 4.5. Mobile Applications Prototyping

El prototipo móvil reúne las pantallas de alta fidelidad y valida la secuencia de contratación. Para esta etapa se documentan las transiciones principales, los estados de selección y las confirmaciones necesarias antes de iniciar el desarrollo nativo.

### 4.5.1. Android Mobile Applications Prototyping

La variante Android conserva la estructura visual general e incorpora navegación inferior, comportamiento estándar del botón Atrás y selectores de fecha propios de la plataforma. Los cambios de estado se comunican mediante indicadores visibles y mensajes breves.

![Secuencia de prototipo para Android](assets/img/cap4/mobile/mockups.svg)

### 4.5.2. iOS Mobile Applications Prototyping

La variante iOS mantiene las áreas seguras, barras de navegación jerárquicas y controles familiares para selección y confirmación. Ambas variantes comparten lógica y contenido, pero respetan los patrones de interacción de cada sistema operativo.

![Secuencia de prototipo para iOS](assets/img/cap4/mobile/wireflow.svg)

## 4.6. Web Applications UX/UI Design

La aplicación web ofrece mayor espacio para comparar información y administrar solicitudes. Su diseño responde a las necesidades de clientes, técnicos y administradores, manteniendo componentes consistentes con la landing page.

### 4.6.1. Web Applications Wireframes

Las vistas de baja fidelidad cubren acceso, panel principal, exploración de servicios, perfil profesional, solicitud, seguimiento y gestión de cuenta.

![Wireframe web 1](assets/img/cap4/web/wireframe-01.png)

![Wireframe web 2](assets/img/cap4/web/wireframe-02.png)

![Wireframe web 3](assets/img/cap4/web/wireframe-03.png)

![Wireframe web 4](assets/img/cap4/web/wireframe-04.png)

![Wireframe web 5](assets/img/cap4/web/wireframe-05.png)

![Wireframe web 6](assets/img/cap4/web/wireframe-06.png)

![Wireframe web 7](assets/img/cap4/web/wireframe-07.png)

### 4.6.2. Web Applications Wireflow Diagrams

Los wireflows describen la conexión entre pantallas para las tareas de registro, contratación, seguimiento y administración del perfil.

![Wireflow web 1](assets/img/cap4/web/wireflow-01.png)

![Wireflow web 2](assets/img/cap4/web/wireflow-02.png)

![Wireflow web 3](assets/img/cap4/web/wireflow-03.png)

![Wireflow web 4](assets/img/cap4/web/wireflow-04.png)

### 4.6.3. Web Applications Mock-ups

Los mock-ups trasladan los wireframes a una interfaz de alta fidelidad. Se emplean tarjetas para resumir servicios, estados visibles para las solicitudes y acciones primarias claramente diferenciadas.

![Mock-up web 1](assets/img/cap4/web/mockup-01.png)

![Mock-up web 2](assets/img/cap4/web/mockup-02.png)

![Mock-up web 3](assets/img/cap4/web/mockup-03.png)

![Mock-up web 5](assets/img/cap4/web/mockup-05.png)

![Mock-up web 6](assets/img/cap4/web/mockup-06.png)

![Mock-up web 7](assets/img/cap4/web/mockup-07.png)

### 4.6.4. Web Applications User Flow Diagrams

El diagrama resume las decisiones del usuario desde el acceso hasta la confirmación y el seguimiento del servicio.

![User flow de la aplicación web](assets/img/cap4/web/user-flow.png)

## 4.7. Web Applications Prototyping

El prototipo web permite recorrer las vistas principales y comprobar la claridad de la navegación antes de programar la solución. Incluye acceso, exploración, selección de técnico, solicitud y consulta de estado.

![Vista general del prototipo web](assets/img/cap4/web/prototype.png)

Prototipo de referencia: [ElectroLink en Figma](https://www.figma.com/design/sU4hpNItE2lZ88WrlTUKwy/Untitled?node-id=31-624&t=9AhvJafsRNaQO2cX-1).

## 4.8. Domain-Driven Software Architecture

La arquitectura se organiza por capacidades del negocio: identidad y acceso, perfiles, catálogo, solicitudes, ejecución, suscripciones y notificaciones. Esta separación reduce el acoplamiento y permite que las reglas de negocio evolucionen sin depender de la interfaz.

Los diagramas siguientes utilizan la notación C4: primero muestran el entorno del sistema, luego sus contenedores ejecutables y finalmente los componentes internos del backend.

### 4.8.1. Software Architecture Context Diagram

El diagrama de contexto presenta a ElectroLink como un único sistema y señala a sus actores y servicios externos. Los clientes solicitan atenciones, los técnicos administran y ejecutan trabajos, y los administradores supervisan la operación.

![Diagrama C4 de contexto de ElectroLink](assets/img/cap4/c4/Context-diagram.png)

### 4.8.2. Software Architecture Container Diagrams

El nivel de contenedores distingue la landing page, la aplicación web, la aplicación móvil, la API REST y la base de datos PostgreSQL. La API concentra las reglas de negocio y se integra con pagos, mapas y notificaciones.

![Diagrama C4 de contenedores de ElectroLink](assets/img/cap4/c4/Diagrama-contenedores.png)

### 4.8.3. Software Architecture Components Diagrams

El nivel de componentes detalla la API. Los controladores reciben solicitudes, los servicios de aplicación coordinan casos de uso, el dominio protege las reglas y los repositorios aíslan la persistencia y las integraciones externas.

![Diagrama C4 de componentes de ElectroLink](assets/img/cap4/c4/Components-diagram.png)

## 4.9. Software Object-Oriented Design

El diseño orientado a objetos representa las entidades y servicios necesarios para gestionar usuarios, propiedades, catálogo, solicitudes, asignaciones, ejecución, pagos y comunicaciones.

### 4.9.1. Class Diagrams

El modelo mantiene a `ServiceRequest` como eje del proceso de contratación. Una solicitud relaciona al cliente, la propiedad y el servicio; posteriormente puede originar una asignación, ejecución, pago y reseña.

![Diagrama de clases de ElectroLink](assets/img/cap4/object-design/Diagrama-de-clases.png)

### 4.9.2. Class Dictionary

| Clase | Atributos principales | Responsabilidad y relaciones |
|---|---|---|
| `User` | id, name, email, role, status | Mantiene la identidad y credenciales; origina los perfiles de cliente o técnico. |
| `ClientProfile` | phone, address, preferences | Completa los datos del cliente y agrupa sus propiedades y solicitudes. |
| `ProviderProfile` | bio, rating, availability, verified | Describe al técnico, su reputación y disponibilidad. |
| `Property` | address, type, description | Identifica el lugar donde se prestará el servicio; pertenece a un cliente. |
| `ServiceCatalog` | name, category, basePrice | Define los servicios que pueden buscarse y contratarse. |
| `ServiceRequest` | description, status, scheduledAt, address | Registra la necesidad del cliente y controla su ciclo de vida. |
| `ServiceAssignment` | acceptedAt, assignmentStatus | Vincula una solicitud aceptada con el técnico responsable. |
| `ServiceExecution` | startedAt, finishedAt, notes, evidence | Documenta el desarrollo y cierre del trabajo. |
| `Review` | score, comment, createdAt | Conserva la valoración del cliente después de una atención. |
| `Subscription` | plan, status, startedAt, expiresAt | Administra el plan y beneficios asociados al técnico. |
| `PaymentRecord` | amount, currency, status, externalId | Registra el resultado de una operación de pago. |
| `Notification` | channel, message, status, sentAt | Comunica eventos relevantes a clientes y técnicos. |

## 4.10. Database Design

La persistencia principal sigue un modelo relacional sobre PostgreSQL. Las claves foráneas conservan la trazabilidad entre usuarios, solicitudes y resultados del servicio; los campos de estado permiten controlar la evolución del proceso sin eliminar su historial.

### 4.10.1. Relational/Non-Relational Database Diagram

Para el alcance actual se selecciona una base relacional, ya que las operaciones requieren consistencia entre contratación, asignación, ejecución y pago. El modelo puede complementarse en el futuro con almacenamiento especializado para archivos, sin alterar las relaciones centrales.

![Diagrama de base de datos relacional de ElectroLink](assets/img/cap4/database-design/Database-design.png)

# Capítulo V: Product Implementation

Se describe la evolución del sistema a lo largo de distintos sprints, detallando las principales decisiones tecnológicas adoptadas durante su desarrollo. Asimismo, se presentan las prácticas utilizadas para la gestión de versiones, los estándares aplicados al código y los mecanismos empleados para comprobar el funcionamiento de la solución con usuarios reales. Finalmente, se explican las actividades de despliegue, la ejecución de pruebas funcionales y las mejoras incorporadas a partir de los comentarios obtenidos durante las sesiones de validación.

## 5.1. Software Configuration Management.

Una administración deficiente de la configuración del software puede provocar problemas de organización, discrepancias entre versiones y dificultades para coordinar el trabajo del equipo. Por ello, mantener un control adecuado sobre el código fuente, la documentación de diseño y los distintos recursos digitales permite que todos los integrantes trabajen con información actualizada y bajo una misma estructura. De esta manera, se facilita la colaboración entre desarrolladores y se reduce la posibilidad de cometer errores por utilizar archivos o versiones obsoletas.

<hr>

## 5.1.1. Software Development Environment Configuration.

**Project Management**

| Plataforma    | Descripción                                                                                                                                                                                                                                                                                           | Enlace                       |
|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------|
| Notion        | Esta plataforma de gestión de proyectos ofrece funcionalidades para el seguimiento detallado del progreso de cada tarea a lo largo de su ciclo de vida, además de permitir la designación clara de responsables para cada actividad dentro del equipo de trabajo.                                      | https://app.notion.com/p/Dise-o-ff0933e887b082f3baea01896284d980?source=copy_link           |
| Uxpressia     | Herramienta en línea que ayuda en el proceso de
mapeo.                                                                                                                                                                                                                                             | https://uxpressia.com/      |
| Canva         | Es una aplicación web de diseño y comunicación visual donde los usuarios pueden diseñar lo que deseen y publicarlo. Cuenta con diversos formatos y estilos de creación para todo tipo de trabajo.                                                                                                    | https://www.canva.com      |
| C4 Model      | Sistema de notación visual para arquitectos de software y equipos de desarrollo que ayuda a describir la arquitectura de un sistema de software en diferentes niveles de abstracción.                                                                                                                    | https://c4model.com            |

**Product UX/UI Desing**

| Plataforma | Descripción                                                                                                                                                                                                                            | Link                                                    |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| Figma      | Herramienta para el diseño de productos digitales que fomenta la colaboración, agiliza el flujo de trabajo y permite crear experiencias de usuario efectivas y visualmente atractivas.                                                 | https://www.figma.com |

**Software Development**

| Plataforma           | Descripción                                                                                                                                                                                                                            | Link                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| HTML                | Sirve para definir la estructura y el contenido de una página web.                                                                                                                                                                      | https://www.w3schools.com/html/default.asp                                      |
| CSS                 | Se encarga de la presentación visual y el estilo de la página web.                                                                                                                                                                       | https://www.w3schools.com/css/default.asp                                       |
| JS                  | Añade interactividad y dinamismo a la página web.                                                                                                                                                                                        | https://www.w3schools.com/js/default.asp                               |
| Visual Studio Code  | Entorno de desarrollo que facilita la escritura, edición, depuración y gestión de código para una amplia gama de lenguajes y proyectos.                                                                                                    | https://code.visualstudio.com          |

**Software Documentation**

| Plataforma | Descripción                                             | Link                                                              |
|------------|---------------------------------------------------------|-------------------------------------------------------------------|
| GitHub     | Gestión de la documentación en función a repositorios y organizaciones | https://github.com          |
| Markdown   | Formato base para la presentación y documentación del proyecto | https://markdown.es/                     |
<br>

### 5.1.2. Source Code Management.

Link Landing Page: []

Link WebServices: []

Link FrontEnd: []

Establecer reglas claras para nombrar las ramas en Git permite mantener un flujo de trabajo más ordenado y comprensible para todos los integrantes del equipo. El uso de enfoques como Git Flow o trunk-based development contribuye a definir una estructura uniforme para el desarrollo, reduciendo confusiones y facilitando la coordinación entre los desarrolladores.

Contar con una nomenclatura estandarizada también aporta ventajas adicionales, como facilitar la integración de procesos automatizados dentro de los pipelines de CI/CD y permitir reconocer rápidamente la finalidad de cada rama únicamente a partir de su nombre.

Para el proyecto se adopta GitFlow como estrategia de administración de ramas. Este modelo permite separar el código estable de las funcionalidades que todavía se encuentran en desarrollo, así como gestionar de manera independiente las versiones y correcciones urgentes.

Las principales ramas utilizadas son las siguientes:

* **Rama `main`:** corresponde a la versión estable del proyecto y concentra los componentes que se encuentran preparados para su publicación o despliegue. En ella se mantienen los archivos que forman parte de la solución final, como hojas de estilo, recursos gráficos, scripts de JavaScript y los archivos HTML principales. Los cambios incorporados a esta rama deben haber sido previamente revisados y validados.

De manera complementaria, el equipo dispone de un repositorio destinado a la organización de requerimientos y funcionalidades. Dentro de este espacio, las tareas se agrupan mediante epics y archivos con extensión `.feature`, en los cuales se especifican los escenarios y criterios de aceptación correspondientes. Esta organización permite relacionar de forma más clara los requerimientos definidos con las funcionalidades desarrolladas.

GitHub fue seleccionado como plataforma principal para el control de versiones y la colaboración del equipo, ya que facilita el seguimiento de modificaciones, la revisión del historial de cambios y la coordinación del trabajo realizado por distintos desarrolladores. Asimismo, la integración con GitHub Pages permite publicar las actualizaciones del proyecto y brindar a los interesados una referencia visual del avance alcanzado.

### Convenciones para las ramas

Para mantener uniformidad dentro del repositorio, se establecieron las siguientes reglas de nomenclatura:

**Ramas de funcionalidades (`feature`)**

Se utilizan para desarrollar nuevas características o mejoras de manera independiente antes de integrarlas al código principal.

Prefijo: `feature/`

Formato:

`feature/nombre-corto-descriptivo`

Ejemplos:

`feature/login-ui`

`feature/pdf-export`

`feature/api-integration-usuarios`

**Ramas de versiones (`release`)**

Se crean cuando un conjunto de funcionalidades se encuentra próximo a ser publicado y requiere una etapa final de estabilización, validación o preparación para el despliegue.

Prefijo: `release/`

Formato:

`release/x.y.z`

Los valores `x`, `y` y `z` representan respectivamente la versión mayor, menor y de parche.

Ejemplos:

`release/1.0.0`

`release/2.1.0`

**Ramas de correcciones urgentes (`hotfix`)**

Estas ramas se destinan a solucionar errores críticos detectados en una versión estable o publicada, permitiendo realizar la corrección sin interferir con otras funcionalidades que se encuentren en desarrollo.

Prefijo: `hotfix/`

Formato:

`hotfix/x.y.z-nombre-corto`

Ejemplos:

`hotfix/1.0.1-fix-login-error`

`hotfix/2.3.2-bug-carrito`

El repositorio principal del proyecto se encuentra alojado en GitHub bajo la organización de ElectroLink, desde donde se administra el código fuente y se coordinan las diferentes actividades relacionadas con el desarrollo.

### 5.1.3. Source Code Style Guide & Conventions.
### 5.1.4. Software Deployment Configuration.
## 5.2. Product Implementation & Deployment.
### 5.2.1. Sprint Backlogs.
### 5.2.2. Implemented Landing Page Evidence

Ingresamos a github

<a href="https://ibb.co/C5ZrL2Gh"><img src="https://i.ibb.co/MD4Xd60M/Github1.png" alt="Github1" border="0"></a>

Nos dirijimos a la sección de pages en configuración, configuramos la rama a desplegar y guardamos en save.
Luego de unos minutos de seleccionar "Save", se generará un enlace donde se podrá visualizar el landing page desplegado

<a href="https://ibb.co/8RswyZm"><img src="https://i.ibb.co/Vh9GF4L/github3.png" alt="github3" border="0"></a>

<a href="https://ibb.co/4ZFNj4Yb"><img src="https://i.ibb.co/3yTh0SMx/lp1.png" alt="lp1" border="0"></a>

URL:https://electrolink-diseno-de-experimentos.github.io/Landing-Page/

### 5.2.3. Implemented Frontend-Web Application Evidence

En esta sección, explicamos el despliegue de la aplicación Front-end en firebase

Ulr: https://electrolink-195e0.web.app

Ingresamos al portal de Firebase
<br>

<img src="https://i.ibb.co/tPvdG42H/image.png">
<br>
<br>

Dentro del portal, reutilizamos la aplicación front end previamente desplegada "electrolink-frontend-v2".
<br>

<img src="https://i.ibb.co/xtKnQtdr/image.png">
<br>
<br>

Ahora, desde la consola del IDE, realizamos los siguientes comandos
<br>

<img src="https://i.ibb.co/rfNWtpcp/image.png">
<br>
<br>


Tras haber compilado subido el directorio dist, desplegamos con el siguiente comando y obtendremós el enlace de la aplicación front-end
<br>

<img src="https://i.ibb.co/fdzrZCP6/image.png">
<br>
<br>

Y ya podemos interactuar con nuestro frontend desplegado.

<a href="https://ibb.co/TBSQ6pJ1"><img src="https://i.ibb.co/VWZFRrbx/frontend.png" alt="frontend" border="0"></a>

### 5.2.4. Acuerdo de Servicio - SaaS
### 5.2.5. Implemented Native-Mobile Application Evidence



### 5.2.6. Implemented RESTful API and/or Serverless Backend Evidence

Url: https://electrolinkv2.onrender.com/swagger-ui/index.html#

Vista general de Swagger con los grupos Autenticación, Propiedades y Perfiles, cada uno con sus operaciones CRUD protegidas.

#### Deploy de una aplicación en Render
##### 1. Preparar el proyecto en GitHub
1. Asegúrate de tener tu aplicación en un repositorio de **GitHub** (público o privado).
2. Verifica que el proyecto tenga los archivos necesarios:
   - **Dockerfile** (esto debido a que render no acepta java como lenguaje de programación).

##### 2. Crear una cuenta en Render
1. Ve a [https://render.com](https://render.com).
2. Regístrate o inicia sesión (puedes usar tu cuenta de GitHub para mayor comodidad).
3. Autoriza a Render a acceder a tus repositorios de GitHub.

###### 3. Crear un nuevo servicio en Render
1. En el panel de Render, haz clic en **"New +" → "Web Service"**.
[![image.png](https://i.postimg.cc/y8ZSps76/image.png)](https://postimg.cc/hXKjfFJN)
2. Selecciona tu repositorio de GitHub.
[![image.png](https://i.postimg.cc/Xvn7KbJz/image.png)](https://postimg.cc/v4SsMC5r)
3. Configura:
   - **Name**: Nombre de tu aplicación.
   - **Region**: Generalmente elige la más cercana (ej: Oregon).
   - **Branch**: `main` o la rama que quieras desplegar.
   - **Runtime**: Render detecta el lenguaje automáticamente, aunque usaremos Docker debido a la falta de Java (Node, Python, Java, etc.).
   - **Build Command**: El comando para compilar/instalar dependencias. Ejemplos:
     - Node.js: `npm install`
     - Python: `pip install -r requirements.txt`
     - Java (Maven): `./mvnw clean install`
   - **Start Command**: El comando para arrancar tu app.
     - Node.js: `npm start`
     - Python: `gunicorn app:app`
     - Java: `java -jar target/app.jar`

###### 4. Seleccionamos el plan gratuito:
[![image.png](https://i.postimg.cc/Z52XZFkF/image.png)](https://postimg.cc/mP3my9gt)
###### 5. Configurar variables de entorno
1. En Render, abre la sección **"Environment"**.
2. Agrega las variables necesarias (ejemplo: `DATABASE_URL`, `PORT`, `API_KEY`).
3. Si tienes un archivo `.env.example`, úsalo de guía.

##### 6. Deploy automático
1. Render hará el primer build y deploy automáticamente.
2. Si el build es exitoso, Render te dará una **URL pública** con tu app en producción.
3. Cada vez que hagas **push** a la rama configurada, Render redeployará automáticamente tu aplicación.
[![image.png](https://i.postimg.cc/L5W3fD3x/image.png)](https://postimg.cc/fSxdQxFd)

<img  src="https://i.postimg.cc/KzwsXDD0/7c8bebf7-f9bd-4728-a6dc-1c1131947026-1.jpg"/>

Endpoints de Tipos de Componente, Componentes, Roles y Usuarios, listados para gestión y consulta.

<img  src="https://i.postimg.cc/9ffxrnxx/bbde6494-e315-4433-9026-1e3435f0500e-1.jpg"/>

Controladores de Inventario de Técnicos, Servicios, Schedules y Requests, mostrando endpoints CRUD y consultas especializadas.

<img  src="https://i.postimg.cc/HkYzhNCp/d67b08ef-0883-4368-9caa-125775c7863b-1.jpg"/>


### 5.2.7. RESTful API documentation
### 5.2.8. Team Collaboration Insights

Durante este Sprint, el equipo ha colaborado en el soporte de la Landing Page, Frontend y Backend. Las actividades fueron gestionadas a través de GitHub, permitiendo una trazabilidad clara de los aportes de cada miembro del equipo. Se realizaron tareas de codificación, revisión, organización del repositorio y mejoras visuales y funcionales del producto. Cada miembro del equipo tuvo participación activa, realizando commits, revisando código, y apoyando en la estructura y documentación del proyecto.

- Insights de Landing Page:

<a href="https://ibb.co/20vmC3mP"><img src="https://i.ibb.co/fVkBydBt/i1.png" alt="i1" border="0"></a>

- Insights de Frontend:
- 
<a href="https://ibb.co/pjFPWtQN"><img src="https://i.ibb.co/VY4NH7xb/i2.png" alt="i2" border="0"></a>

- Insights de Backend:
- 
<a href="https://ibb.co/nN8dCNNy"><img src="https://i.ibb.co/YFTnZFFS/i3.png" alt="i3" border="0"></a>

## 5.3. Video About-the-Product.

**Video publicado en Microsoft Stream:**  
[Ver video del producto](https://upcedupe-my.sharepoint.com/:v:/g/personal/u202318323_upc_edu_pe/EaX2Zgimos9BtP8A_A6NVnAB6Q4or5MhvSJrmp8EnSKkEg?e=poBWky&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D)

**Video en YouTube (incrustado en el Landing Page):**  
[https://www.youtube.com/watch?v=vajqovVXk3o](https://www.youtube.com/watch?v=vajqovVXk3o)

**Duración del video:** 2 minutos y 35 segundos
