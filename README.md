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


