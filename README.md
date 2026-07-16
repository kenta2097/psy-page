# Psicologia Montaner

![Sitio estatico](https://img.shields.io/badge/sitio-estatico-3f675d)
![Hosting](https://img.shields.io/badge/hosting-GitHub%20Pages-c17b62)
![Responsive](https://img.shields.io/badge/diseno-responsive-243230)

Pagina web estatica para una consulta de psicologia.

## Vista general

```mermaid
flowchart LR
  A[Paciente] --> B[Web]
  B --> C[Solicitud de cita]
  C --> D[Revision manual]
  D --> E[Confirmacion]
  E --> F[Sesion presencial u online]
```

## Estructura

```text
.
|-- index.html
|-- styles.css
|-- app.js
|-- markdown/
`-- README.md
```

## Ejecutar en local

```bash
python3 -m http.server 5500 --bind 0.0.0.0
```

Abrir:

```text
http://localhost:5500/
```

Desde otros equipos de la misma red, usar la IP del ordenador:

```text
http://IP_DEL_EQUIPO:5500/
```
