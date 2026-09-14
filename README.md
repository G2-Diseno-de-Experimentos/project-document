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

