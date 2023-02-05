---
title: Curriculum Vitae
author: Matías Mirabelli
job: Desarrollador de software
lang: es
messages:
  languages: Idiomas
  otherFormats: Otros formatos
...

---

## Sobre mi

Soy desarrollador de software y tengo más de quince años de experiencia en la
industria. Me especialicé en el desarrollo de aplicaciones web. Desarrollé
sitios web, aplicaciones clásicas request/response, aplicaciones ricas con gran
cantidad de componentes e interacción de los usuarios, servicios de backend,
servicios de infraestructura como colas y caches, y herramientas inteligencia de
negocio y análisis de datos, entre otras cosas. Trabajé con arquitecturas de web
services (SOAP), microservicios (REST), web sockets, y request/response clásicos
(MVC, streaming), entre otras. Tengo experiencia en la integración con APIs de
proveedores y diferentes orígenes de datos.

En desarrollo de backend, trabajé con varios stacks de frameworks en ~~PHP~~,
Java, Scala, Kotlin y NodeJS. Entre los problemas comunes de backend que
resolví, puedo mencionar autenticación (SAML, OIDC), sesiones, transaccionalidad,
acceso a datos, búsqueda de texto libre, manejo de operaciones asincrónicas, gestión
y compresión de recursos estáticos (JavaScript, CSS, imágenes, videos, etc.),
soporte de idiomas, geolocalización, clusterización de procesamiento y de datos,
storage de contenido, seguridad de datos, integración con servicios de terceros,
entre otras cosas.

En desarrollo frontend, considero más importante el diseño de arquitectura que
el conocimiento específico de frameworks. Entre los problemas de arquitectura
comunes que resolví puedo destacar el diseño de componentes reutilizables, la
optimización de recursos en favor de la experiencia del usuario, el manejo de
operaciones cross-domain, la personalización, el desarrollo progresivo y
activación de features por usuario, el manejo y la persitencia de estado,
soporte de idiomas, entre otras cosas. Algunos de los frameworks y utilidades
que usé son Vue 2/3, charts.js, jQuery, underscore.js, backbone, jqueryUI, y
lessCSS.

Pienso que el trabajo en equipo y un proceso de desarrollo enfocado en la calidad
son la clave para un producto exitoso. Entre las buenas prácticas para garantizar
la calidad del delivery mencionaría resolver problemas utilizando los principios
de desarrollo de software que están muy probados en la industria, fomentar buenas
prácticas y convenciones, hacer reviews de código, construir conocimiento común a
través del diálogo y el diseño de soluciones y adoptar metodologías de organización
cuando es necesario. Pienso que poner a las personas sobre los procesos es la clave
del éxito de cualquier proyecto.

Apoyo la filosofía del software libre. Participo en la comunidad y trato de usar
y contribuir al software libre cuando es posible. En mi tiempo libre desarrollo
herramientas sociales para fomentar la transparencia gubernamental, la
organización social y la toma de decisiones colectivas. Estudié Antropología
Social y Cultural en la Universidad de San Martín y desarrollé varias
herramientas como parte de mis investigaciones sobre política y movimientos
sociales.


<div class="printable">

---

## Links

* Github: https://github.com/seykron y https://github.com/f-nyx

* Gitlab: https://git.rlab.be/seykron

* Resume: http://seykron.github.io/cv

* Twitter: https://twitter.com/matias_mi

</div>

---

## Idiomas

* Español (idioma materno)

* English (upper-intermediate)

* Esperanto (progresanta)

---

## Experiencia en desarrollo de software

### SCV - WireWheel (2019-ahora)

Desde el 2019 hasta ahora trabajo para WireWheel, un cliente de Estados
Unidos de la consultora SCV. WireWheel es una empresa que vende productos de
privacidad para otras empresas, como la gestión de pedidos de datos, o la
gestión de consentimiento de cookies. Los primeros dos años trabajé como
desarrollador en el equipo de uno de los productos, y en febrero del 2022 me
pidieron que lidere el desarrollo de un nuevo producto para la gestión de
consentimiento.

Como lider técnico tengo dos tipos de responsabilidades: operativas y técnicas.
Entre las responsabilidades operativas están darle soporte técnico al equipo
de desarrollo; garantizar cierta predictibilidad en la velocidad del equipo;
garantizar la calidad del delivery; trabajar con el equipo de producto en la
planificación a corto y mediano plazo; organizar el proceso de release; tomar
entrevistas para el ingreso de nuevas personas; y monitorear los servicios en
producción.

Entre las responsabilidades técnicas están diseñar las soluciones en conjunto
con la gente que lo va a implementar; realizar las tareas necesarias de
configuration management para que el equipo pueda trabajar fácilmente como la
dockerización del entorno local y la automatización del build en CI; definir e
implementar las políticas de calidad como las métricas de cobertura de test
y el análisis estático de código; definir en conjunto con el director de
desarrollo las tecnologías que vamos a utilizar; implementar las integraciones
más complejas como el sistema de contención para tener alta disponibilidad en
los servicios públicos; e implementar las herramientas de soporte que necesita
el equipo de QA para su trabajo de automatización.

Como trabajamos con datos sensibles, también soy responsable de la seguridad a
nivel aplicación, y trabajo con el equipo de devops para diseñar el equema de
seguridad entre los servicios y la infraestructura. Tambien soy responsable de
analizar el resultado de los pentests para resolver los problemas de seguridad
que surjan.

*Tecnologías: NodeJS con TypeScript; frameworks como Fastify para el servidor
web y Awilix para inyección de dependencias; bases de datos como Cassandra,
Postgres y Snowflake; servicios de AWS como S3, SQS, SSM, SNS, y ECS.*

### Despegar.com (2015 - 2019)

Despegar.com es una agencia online de viajes. Trabajé exclusivamente en backend
desarrollando microservicios.

Los primeros dos años trabajé en el sector de ventas de vuelos. Tuve la
oportunidad de reescribir el motor de booking de vuelos en Scala. Los desafíos
fueron aprender el lenguaje, orquestar el flujo de booking que es
considerablemente complejo, y soportar el throughput de ventas.

Trabajé en el sector de postventa de vuelos desarrollando el sistema de detección y
procesamiento de cambios involuntarios o reprogramaciones de vuelos. Mi trabajo
principal fue la integración con proveedores de vuelos como Sabre, Amadeus, Worldspan,
American Airlines, etc. Algunos desafíos técnicos fueron el manejo del flujo asincrónico
(los proveedores notifican las reprogramaciones asincrónicamente); el manejo de fallos
frente al usuario; el análisis de datos de los proveedores (la consistencia es eventual
ya que depende de las operaciones de las aerolineas); generar las abstracciones para
soportar multiples proveedores de vuelos; manejar el volumen de tráfico en servicios que
requieren alta disponibilidad; diseñar herramientas de soporte para testing ya que varios
proveedores no contaban con ambientes de pruebas, y reescribir varias aplicaciones para
migrarlas a una arquitectura de microservicios.

En el equipo de desarrollo eramos seis personas, y trabajábamos directamente con el
equipo de producto.


*Tecnologías: GIT, Maven, Spring MVC, Java Spark Web, Play Framework, Scalatra, Finagle,
Cassandra, RabbitMQ, SBT, Java, Scala, Kotlin.*

### 55Social (2013 - 2015)

55social fue una empresa de marketing digital cuyo mercado principal eran las
agencias digitales de Brasil. La aplicación consistía en un gestor de contenido
para crear y publicar campañas en Facebook, un gestor de múltiples cuentas para
community management, y un sistema de métricas que se integraba con Facebook y
Google Analytics para analizar el impacto de las campañas.

Trabajé como desarrollador frontend y backend en el gestor de campañas y el
motor de métricas respectivamente. En frontend el desafío fue generar un entorno
de diseño muy personalizable para que agentes de marketing pudieran construir
campañas en Facebook solamente configurando una serie de widgets. En cuanto al
backend, el desafío fue generar un motor de métricas que pudiera extraer datos y
procesarlos para mostrar diferentes tipos de gráficos que permitían analizar el
impacto de las campañas.

Durante casi toda mi experiencia en Globant y 55social también fui entrevistador
y dicté varios talleres y capacitaciones sobre desarrollo web.

Dejé 55social porque la empresa nunca llegó al break event y tuvo que cerrar.

*Tecnologías: GIT, Maven, Java EE, Hibernate, Spring MVC,
[Katari](https://github.com/katari/Katari), Elastic Search, Freemarker, Social
APIs (Facebook, Twitter, Google Plus), jQuery UI,
[Histone](https://github.com/MegafonWebLab/histone-javascript),
[OOCSS](https://en.wikipedia.org/wiki/OOCSS), AWS*

### Globant (2009 - 2013)

Mi siguiente trabajo fue en Globant, otra consultora de recursos humanos.
Trabajé como desarrollador web en un proyecto de JWT, un cliente de la
consultora dedicado a la comunicación y el marketing. El proyecto consistía en
una reingeniería completa de un sistema de manejo de contenido. El sistema
organizaba contenido digital como documentos, imágenes, y videos. Uno de los
requisitos era que pudiera reutilizarse para diferentes clientes de la agencia,
de manera que JWT pudiera revender el almacenamiento y la gestión de contenido a
sus clientes. En este proyecto conocí un modelo de programación orientado a
servicios, donde gran parte de la responsabilidad de la aplicación estaba
delegada en el frontend.

En Globant también tuve mi primera experiencia coordinando un equipo de
desarrollo para JWT. Comenzamos un nuevo proyecto que buscaba resolver el
problema de la fragmentación entre las agencias de JWT. A través de una red
social de proyectos de marketing,  las agencias en distintas partes del mundo
podían presentar ideas creativas para estos proyectos, interactuar entre ellas,
compartir contenido y conocer el trabajo de las demás. Para fomentar la
participación, las ideas eran votadas por los mismos usuarios de la comunidad de
JWT, y la más votada era la idea que se realizaría. Mi rol antes de comenzar el
proyecto consistió en estimar el esfuerzo total del proyecto, configurar la
infraestructura base para que el equipo pudiera trabajar sobre el código y
acordar con el cliente la modalidad de entrega y seguimiento del proyecto.

Luego de más de dos años de trabajar con JWT, comencé a trabajar con un nuevo
cliente de la consultora: 55social. El desafío era construir una plataforma de
social media para facilitar la gestión de contenido y campañas de marketing en
redes sociales. Gracias a un pequeño y excelente equipo de desarrollo la primera
versión del producto estuvo online en cuatro meses. Luego de dos años de
desarrollo, la empresa se desvinculó de Globant y yo seguí trabajando para
ellos.

*Tecnologías: SVN, GIT, Maven, Java EE, MySQL, JackRabbit, Hibernate, Spring
MVC, jawr, Freemarker, YahooUI, AWS, ImageMagick, FFMPeg*

### CDA (2007 - 2009)

Luego de dejar W3 trabajé como programador Java en CDA, una consultora de
recursos humanos. Participé en el desarrollo de sistemas administrativos
internos relacionados con personas (altas, bajas, vacaciones, etc), por lo que
aprendí bastante sobre los procesos de RRHH. El desafío fue integrar diferentes
bases de datos legacy, garantizar la consistencia entre distintos orígenes de
datos, y aprender Adobe Flex, ya que el frontend de estas aplicaciones tenía que
desarrollarse en esta tecnología. El backend lo desarrollé utilizando Java 1.6,
Struts MVC y web services en la capa de aplicación, e Ibatis en la capa de
acceso a datos.

Tuve la oportunidad de desarrollar desde el comienzo un sistema de homologación
para el Banco Francés, un cliente de la consultora. Este sistema de homologación
era parte de los controles SOX que debía cumplir el banco para garantizar la
trazabilidad de todos sus procesos. El desafío fue trabajar con Java 1.4, una
base de datos sin soporte de integridad de datos (una versión antigua de
Sybase), y un modelo de programación requerido por el banco basado en stored
procedures. El frontend lo desarrollé en JSP. Aprendí sobre la gestión técnica
de un proyecto de desarrollo, y resolví problemas de infraestructura relativos a
acceso a datos, almacenamiento, y empaquetado y distribución de aplicaciones
Java, entre otros.

*Tecnologías: SVN, Ant, Java EE (v1.4/1.6 + Web Services), Sybase DB, Ibatis,
Struts, JSP, HTML, CSS, JavaScript, Flex (ActionScript 3, Cairngorm), Websphere*

### W3americas (2006 - 2007)

Mi siguiente trabajo fue en W3, una consultora de sistemas dedicada al
desarrollo y mantenimiento web para terceros. Trabajé en el mantenimiento
progresivo del sitio de Citibank Brasil. Participé en el rediseño completo del
sitio, principalmente en el desarrollo de componentes que requerían integración
con servicios de terceros como tablas de cotizaciones del mercado bursátil y
cotizaciones de moneda, entre otras cosas.

Fue mi primer contacto directo con clientes, ya que a menudo tenía que coordinar
las tareas con las personas responsables en Brasil. Durante mi tiempo libre
aprendía sobre diseño de sistemas y desarrollo de aplicaciones web en Java, lo
que más tarde usaría en mi próximo trabajo. Dejé de trabajar en W3 porque se
volvió monótono y prácticamente no había desarrollo, sino mantenimiento.

*Tecnologías: SourceSafe, Perl, HTML, CSS, JavaScript*

### Netic infoservicios (2006)

Luego de finalizar la escuela secundaria, comencé a trabajar como programador
Visual Basic en una pequeña empresa que vendía un producto de SEO
(posicionamiento en motores de búsqueda). En esta empresa yo era el único
programador y con muy pocas herramientas tuve que resolver problemas de
arquitectura y distribución. El producto era una suite de aplicaciones que
interactuaban entre ellas para generar micrositios con diferentes contenidos, y
se distribuía como un paquete instalable. Dejé este trabajo porque el dueño de
la empresa me pidió reiteradamente que facture menos de lo que estaba cobrando.

*Tecnologías: Visual Basic, MS Access,
[NSIS](https://en.wikipedia.org/wiki/Nullsoft_Scriptable_Install_System)*


### Freelance (2004 - 2006)

Mis primeros trabajos fueron como freelance. Entre los proyectos destacables
estuvieron el sitio corporativo del laboratorio Labyes y un sistema de gestión
de viajes para una remisería en Visual Basic. En esta misma época también
desarrollé varios sitios utilizando Wordpress y Drupal.

*Tecnologías: PHP, HTML, CSS, JavaScript, Visual Basic, MS Access, Symfony 1.0*


### Software libre

Durante años desarrollé, mantuve y colaboré en distintos proyectos de software
libre. La lógica de organización de una comunidad de software libre es diferente
a la de las empresas, y la experiencia de gestionar estos proyectos me ayudó a
desarrollar una visión del liderazgo más crítica y orientada a la resolución de
problemas a través de la colaboración. Muchos de los proyectos que empecé ya no
existen, pero hay otros tantos que están publicados en github y me gustaría
hacer algunos comentarios sobre los más relevantes.

#### Tehanu

[Tehanu](https://git.rlab.be/seykron/tehanu), una librería para desarrollar bots
sobre distintos servicios de mensajería.

#### Domino

[Domino](https://git.rlab.be/seykron/domino), un sistema de gestión colaborativa
de finanzas que usamos varios años en orgas de Software Libre.


#### Kotlin-Search

[kotlin-search](https://github.com/f-nyx/kotlin-search), una librería para manejar
índices de búsqueda locales usando Lucene.
Soporta indices en multiples idiomas.


#### afip-sdk-kotlin

[afip-sdk-kotlin](https://github.com/f-nyx/afip-sdk-kotlin), una librería para
facturar en la AFIP usando los web services. Tambien
tiene soporte para manejo de certificados.


#### Importador de datos legislativos

[ogov-importer](https://github.com/seykron/ogov-importer) obtiene todos los
proyectos legislativos y los respectivos votos del Congreso Nacional Argentino
desde el 2001 hasta la fecha, la lista de legisladores y las reuniones de
comisión, entre otras cosas. El importador es genérico y está diseñado para
hacer scrapping de sitios de forma rápida y eficiente.

* [Repositorio de Github](https://github.com/seykron/ogov-importer)

*Tecnologías: Grunt, JavaScript (NodeJS),
[Cheerio](https://github.com/cheeriojs/cheerio)*


#### API para cliente de IRC

[irc-client-api](https://github.com/seykron/irc-client-api) permite conectarse
a un servidor IRC desde el browser a través de una API de bajo nivel. Soporta
diferentes transportes, por lo que se puede adaptar a distintos dispositivos o
ambientes.

* [Repositorio de Github](https://github.com/seykron/irc-client-api)

*Tecnologías: Grunt, JavaScript (NodeJS), WebSockets*

---

## Educación formal

* Universidad Nacional de San Martín (abandonado) - *Lic. en Antropología Social y
Cultural*

* E.N.E.T N°17 D.E. 20 (2001 - 2006) - *Técnico Electrónico*

* Alfonsina Storni (Escuela Primaria)

---

## Contacto

Pueden contactarme por email a
[matias.mi+resume@riseup.net](mailto:matias.mi+resume@riseup.net). Referencias
personales a pedido.
