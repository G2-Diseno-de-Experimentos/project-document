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
|            |                      |            |             |
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

