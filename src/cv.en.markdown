---
title: Resume
author: Matías Mirabelli
job: Software Engineer
lang: en
messages:
  languages: Languages
  otherFormats: Other formats
...

---

## About me

I am a software engineer with more than fifteen years of experience in the software
industry. I am a senior developer specialized in web applications. I developed
web sites, classic request/response applications, rich applications with heavy
UX and components, backend services, infrastructure services like queues and
caches, business intelligence and data processing applications, among others.
I worked with different architectures such as web services (SOAP), microservices
(REST), web sockets, classic request/response (MVC, streaming), among others.
I have experience with third party APIs and data sources integration.

Regarding backend development, I worked with several stacks and frameworks in
PHP, Java, Scala, Kotlin and NodeJS. Some problems I have solved are user
and API authentication (SAML, OIDC), session management, transactions, data
access, free text search, asynchronous services interoperability, static
resources management and compression (JavaScript, CSS, images, videos, etc.),
language support, geolocalization, processing and data clustering, content
storage, application and data security, third party services integration, among
others.

Regarding frontend development, I think software design and architecture is more
important than mastering specific frameworks. Some problems I have solved are the
design of reusable components, optimization of resources focused on user experience,
cross-domain operations management, customization, user-based features, state
management and persistence, language support, among others. I have worked with
frameworks and utilities such as Vue 2/3, charts.js, jQuery, underscore.js, backbone,
jqueryUI, and lessCSS.

I think team work and a quality-oriented development process is the key to build good
products. I usually build solutions based on well-known software architecture principles,
good practices and conventions. I think that good communication and peer review
of code and architecture are some keys for building common knowledge and a good
product.

I support the free software philosophy. I am involved in the free software
community and I try to contribute whenever possible. In my free time I build
social-oriented software like open government, social organization, and decision
making software.


<div class="printable">

---

## Links

* Github: https://github.com/seykron and https://github.com/f-nyx

* Gitlab: https://git.rlab.be/seykron

* Resume: http://seykron.github.io/cv

* Twitter: https://twitter.com/matias_mi

</div>

---

## Languages

* Spanish (mother tongue)

* English (upper-intermediate)

* Esperanto (progresanta)

---

## Experience in Software Development

### Government of the Province of Buenos Aires (2020 - 2023)

Since 2020 I worked as a part time consultant for the Ministry of Justice. I was
hired to build a biometrics system to identify subjects in the Buenos Aires Penitentiary
Service. I built an [AFIS system](https://en.wikipedia.org/wiki/Automated_fingerprint_identification)
to enroll and identify people in penitenciaries. The system consisted on a web application that allows
users to enroll and to search for subjects; a public API to interoperate with another systems; and a
standalone, multi-platform service to manage fingerprint readers devices. There are several challenges
building an AFIS, but I can mention the multi-platform support; the use of standard protocols and formats
to interoperate between different biometrics systems; the information architecture to securely store
biometric information; the abstraction layer to support multiple hardware using a common interface;
asynchronous and distributed fingerprint search.

The web application backend was built using Kotlin, Spring Boot, Postgres, open source biometrics
libraries like [SourceAFIS](https://sourceafis.machinezoo.com/), RabbitMQ, MinIO, among others.
The frontend was built using Vue3 and TypeScript, Jest for testing, and Storybook to document the
components library. I also worked with propietary hardware drivers, and I did the research to define which
devices were feasible for this project.

*Technologies: Kotlin, TypeScript, Vue3; libraries like Spring Boot, Exposed; data sources like Postgres
and Redis; other services like RabbitMQ and systemd (linux).*


### SCV - WireWheel (2019 - 2023)

WireWheel is a USA east-cost based company that sells privacy-related products for
other companies. For instance, software to manage users data access requests,
and cookie-based consent management. The first two years I worked as developer
in one of their main products, and since Feb 2022 I'm leading the development
of a new product for consent management.

As tech lead I have two kind of responsibilities: operational and technical.
Some of the operational responsibilities include giving technical support to the
development team; ensuring some predictability in the team velocity; ensuring the
delivery quality; working with the product team to plan ahead for short and mid
term; organizing the release process; taking interviews for new hirings; and
monitoring production.

As part of technical responsibilities I can mention designing solutions with the
team; doing all configuration management related tasks like dockerizing and
automating CI to make the dev experience easier; defining and implementing quality
policies for the development process like code coverage thresholds and static
code analysis; defining the tech stack with the VP of technology; implementing
complex integrations like the contention system to provide high availability in
public APIs; and implementing the tools to support the QA team with automation.

As we work with PII (Personal Identifiable Information), I'm also responsible for
the application-level security. I work with the devops team to design the security
schema for services. I'm also in charge of analyzing the penetration tests
results to resolve the security issues reported by the auditing team.

*Technologies: NodeJS with TypeScript; frameworks like Fastify for the web server
and Awilix for dependency injection; data bases like Cassandra,
Postgres and Snowflake; AWS services like S3, SQS, SSM, SNS, y ECS.*

### Despegar.com (2015 - 2019)

Despegar.com is an online travel agency. I work in backend programming
developing microservices.

The first two years I worked in the flight selling team. I had to rewrite the
flight booking engine in Scala. Some challenges were learning the Scala
programming language, the interoperability within the complex booking flow, and
the optimization of the application in order to support the selling throughput.

I currently work in flights post-sales. I'm involved in the development of
several applications to detect and process involuntary flight changes. Some
challenges are processing asynchronous flow of involuntary changes (flight
providers notifies involuntary changes asynchronously), the errors management
and recovery, and the analysis of providers data (since data consistency from
providers is eventual and it depends on airlines).

I worked in the flights post-sales team building the automated systems to detect
involuntary flight changes. My main job was the integration with flight providers
like Sabre, Amadeus, Worldspan, American Airlines, etc. Some challanges were the
async processing of involuntary changes (flight providers notify involuntary changes
asynchronously); error handling across multiple microservices to provide feedback
to the final user; data analysis to detect inconsistencies in the providers;
generating abstractions to support multiple flight providers; build the services to
support the high throughput from both users and flight providers while honoring the
high availability policy; design testing tools since some flight providers do not have
testing environments; and rewrite/refactor several applications to migrate them to the
microservices architecture.

We were a team of six persons, and we worked together with the product team.

*Technologies: GIT, Maven, Spring MVC, Java Spark Web, Play Framework, Scalatra, Finagle,
Cassandra, RabbitMQ, SBT, Java, Scala, Kotlin.*

### 55Social (2013-2015)

55social was a digital marketing company with operations in Brasil. The product
consisted of a content manager to create and publish marketing campaigns on
Facebook, a community management module to manage multiple social networks
accounts, and a metrics engine integrated with Facebook and Google Analytics to
analyze the outcome of marketing campaigns.

I worked as developer frontend and backend in the content manager and the
metrics engine, respectively. In the frontend the challenge was the generation
of a customizable design environment to allow marketing agents building a
Facebook campaign only by configuring a set of widgets. Regarding the backend,
the challenge was the creation of a metrics engine able to extract and process
data to display different kind of graphs in order to allow customers analyze the
outcome of marketing campaigns.

While working on 55social and Globant I was an interviewer and I prepared
technical workshops and trainings about web development.

*Technologies: GIT, Maven, Java EE, Hibernate, Spring MVC,
[Katari](https://github.com/katari/Katari), Elastic Search, Freemarker, Social
APIs (Facebook, Twitter, Google Plus), jQuery UI,
[Histone](https://github.com/MegafonWebLab/histone-javascript),
[OOCSS](https://en.wikipedia.org/wiki/OOCSS), AWS*

### Globant (2009 - 2013)

My next job was for Globant, another HR consulting company. I worked as web
developer for JWT, a media agency specializing in marketing and communication.
The project consisted of a complete re-engineering of a content management
system. The product was a content manager to organize digital content like
documents, images and videos. It was designed to allow the agency to customize
the application for different customers. The agency was able to re-brand the
application and define storage and processing quota for its customers.

In this project I learned to work with a service-oriented programming model,
since most of the application's responsibility was managed by the frontend. The
backend was build using Spring MVC and Jawr for services, JackRabbit for content
management, Hibernate to manage the domain model, and FFMpeg/ImageMagick to
process videos and images. The view rendering used the freemarker template
engine. In the frontend, I used jQuery for DOM, YahooUI for rich components, and
underscore.js for utilities.

I had my first experience bootstraping an application and managing a development
team in another project for JWT. The customer wanted to integrate agencies from
all over the world in order to share their work and get to know them. We built a
social network of marketing projects so agencies were able to present creative
ideas from anywhere for a project created by another agency. The goal was to
promote the interaction between agencies in order to build common knowledge and
reduce redundancy and costs of content. My role in the project kick off was to
estimate the effort, set up the infrastructure, and agree with the customer how
to manage the project's follow-up and delivery.

After two years working for JWT, I started working for 55social, another
Globant's customer. The challenge was the creation of a social media platform to
allow companies manage content and marketing campaigns in social networks.
Thanks to a small high-performance team the first beta was ready in four months.
After two years of development, I left Globant and I continued working for
55social.

*Technologies: SVN, GIT, Maven, Java EE, MySQL, JackRabbit, Hibernate, Spring
MVC, jawr, Freemarker, YahooUI, AWS, ImageMagick, FFMPeg*

### CDA (2007 - 2009)

After leaving W3 I worked as a Java programmer for CDA, an HR consulting
company. I was involved in the development of internal HR systems such as
admissions, retirements, vacations, etc. I learned a lot about HR processes.
Some challenges were the integration of several databases, the validation of
consistency among different data sources, and learning Adoble Flex since it was
a requirement to develop the frontend by using this technology. I developed the
backend with Java 1.6, Struts MVC and web services in the application layer,
and Ibatis in the data access layer.

I also had the chance to bootstrap a new project for a local bank. It was an
administrative audit software that implemented SOX controls in order to ensure
internal processes accountability. Some challenges were working with Java 1.4, a
database without data integrity check support (a legacy version of Sybase), and
a programming model required by the bank based on stored procedures. I developed
the frontend using JSP. I learned about technical management, and I solved
infrastructure problems such as data access, storage and packaging and
distribution of Java applications.

*Technologies: SVN, Ant, Java EE (v1.4/1.6 + Web Services), Sybase DB, Ibatis,
Struts, JSP, HTML, CSS, JavaScript, Flex (ActionScript 3, Cairngorm), Websphere*

### W3americas (2006 - 2007)

My next job was for W3, a system consulting company focused on web development
and sites maintenance for third party customers. I worked on the progressive
maintenance of Citibank Brasil website. I was involved in the site's full
redesign, mainly developing components that required integration with third-
party services like stock exchange tables and currency values, among others. I
worked with Perl programming language to automate deployments within a
proprietary deployment management software. It was a challenge to build
cross-browser features since there were very few tools (jQuery was at its early
phase).

It was my first direct experience with customers, since I often had to
coordinate tasks with them. In my free time I learned Java web applications
development.

*Technologies: SourceSafe, Perl, HTML, CSS, JavaScript*

### Netic infoservicios (2006)

After finishing middle-school I worked as a Visual Basic programmer for a small
company writing software for search engine optimization (SEO). I had to solve
several architecture and distribution problems. The product was a static site
generator. It consisted of several applications, each one in charge of
generating part of the static site. This suite was distributed as a
self-contained installation package.

*Technologies: Visual Basic, MS Access,
[NSIS](https://en.wikipedia.org/wiki/Nullsoft_Scriptable_Install_System)*

### Freelance (2004 - 2006)

My first jobs were as freelance programmer. Some projects to mention are the
corporative website for Labyes Laboratory and a Visual Basic-based travel
management system for a local rent-a-car shop. I developed several sites by
using Wordpress and Drupal.

*Technologies: PHP, HTML, CSS, JavaScript, Visual Basic, MS Access, Symfony 1.0*

### Free software

I have developed, maintained and collaborated in different free software
projects for many years. The logic behind a free software organization is quite
different from the business logic, so the experience managing both kind of
projects helped me to develop a critical view of leadership, mainly oriented to
problem solving through collaboration. Many of the projects I started no longer
exist, but there are a couple of them that still are published on Github and I
would like to comment on the ones I consider more relevant.

#### Tehanu

[Tehanu](https://gitlab.com/rlyehlab/tehanu), a library to build bots over
different messaging services.

#### Domino

[Domino](https://gitlab.com/rlyehlab/domino), a crowd-managed financial system we
use in several Free Software organizations.


#### Kotlin-Search

[kotlin-search](https://github.com/f-nyx/kotlin-search), a library to create local
search indexes using Lucene. It supports multi-language indexes.


#### afip-sdk-kotlin

[afip-sdk-kotlin](https://github.com/f-nyx/afip-sdk-kotlin), a library to emit bills
using the AFIP web services. It also supports certificate management.

#### Argentine congress data importer

[ogov-importer](https://github.com/seykron/ogov-importer) retrieves all bills
and their votes from the Argentine National Congress since 2001 until nowadays,
the list of current legislatives and the committees' meetings and agendas, among
other things. The importer is generic and it is designed to make a fast and
efficient crawling of any site.

* [Github Repository](https://github.com/seykron/ogov-importer)

*Technologies: Grunt, JavaScript (NodeJS),
[Cheerio](https://github.com/cheeriojs/cheerio)*

#### IRC client API

[irc-client-api](https://github.com/seykron/irc-client-api) allows to connect to
IRC servers from the web browser through a low-level API. It supports different
transports, so it might be adapted to different devices and environments.

* [Github Repository](https://github.com/seykron/irc-client-api)

*Technologies: Grunt, JavaScript (NodeJS), WebSockets*

---

## Formal Education

* National University of San Martín (ongoing) - *Social and Cultural
Anthropology*

* E.N.E.T N°17 D.E. 20 (2001 - 2006) - *Electronic Technician*

* Alfonsina Storni (Primary School)

---

## Contact

You can contact me by email to
[matias.mi+resume@riseup.net](mailto:matias.mi+resume@riseup.net). Personal
references on request.
