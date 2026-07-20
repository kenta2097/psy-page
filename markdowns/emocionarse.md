# Proyecto Web para Consulta de Psicología
## Documento de Requisitos Funcionales, Técnicos y Benchmark

Versión: 1.0  
Fecha: Julio 2026

---

# Objetivo

Desarrollar una web profesional para una consulta de psicología que permita:

- Captar nuevos pacientes.
- Mostrar información sobre el profesional y los servicios.
- Ofrecer terapia presencial y online.
- Gestionar reservas online.
- Cobrar depósitos o sesiones online.
- Gestionar la disponibilidad del psicólogo.
- Automatizar comunicaciones y recordatorios.
- Mantener un coste bajo de operación.
- Evitar desarrollar backend propio.

---

# Benchmark Analizado

## Centro Emocionarse

https://www.centroemocionarse.es/

Elementos identificados:

- Equipo de psicólogos.
- Terapia presencial.
- Terapia online.
- Blog.
- Podcast.
- Preguntas frecuentes.
- SEO local.
- Sistema de reservas online.
- Pago de depósitos.
- Selección de profesional.
- Selección de servicio.
- Tarifas públicas.
- Información legal completa. 【1-2f470f】【2-18485c】

---

# Diseño de la Web

## Tipo de sitio

One-page moderna y profesional.

Objetivo:

```text
Generar confianza
↓
Mostrar experiencia
↓
Explicar servicios
↓
Convertir en reserva
```

---

## Diseño visual

### Estilo

- Limpio.
- Minimalista.
- Profesional.
- Cercano.
- Responsive.

### Colores

```text
Azul oscuro
Verde salvia
Blanco
Beige suave
```

### Inspiración

```text
Consulta privada
Clínica moderna
Calma
Confianza
Profesionalidad
```

---

# Estructura de la Página

## Hero

Contenido:

- Fotografía profesional.
- Propuesta de valor.
- Beneficios principales.

Ejemplo:

```text
Psicología para ayudarte a recuperar
tu bienestar emocional.

Presencial y online.
```

Botones:

```text
Reservar cita

Conocer más
```

---

## Sobre mí

Información:

- Biografía profesional.
- Formación.
- Especialidades.
- Nº colegiado.
- Experiencia.

---

## Especialidades

Ejemplos:

- Ansiedad
- Estrés
- Autoestima
- Depresión
- Terapia de pareja
- Dependencia emocional
- Adolescencia
- Terapia online

---

## Cómo Trabajo

Proceso:

```text
1. Solicita una cita
2. Revisamos tu solicitud
3. Confirmamos la sesión
4. Realizamos la terapia
```

---

## Tarifas

Tabla visible.

Ejemplo:

```text
Terapia Individual
60€

Terapia de Pareja
70€

Evaluación
60€
```

---

## Preguntas Frecuentes

FAQ sobre:

- Duración de sesiones.
- Modalidad online.
- Cancelaciones.
- Frecuencia.
- Formas de pago.

---

## Terapia Online

Explicar:

- Cómo funciona.
- Plataforma utilizada.
- Confidencialidad.
- Ventajas.

---

## Blog

Objetivos:

- SEO.
- Autoridad profesional.
- Captación orgánica.

---

## Podcast (Opcional)

Contenido educativo sobre:

- Ansiedad.
- Relaciones.
- Autoestima.
- Psicología cotidiana.

---

## Contacto

Datos:

- Correo.
- Teléfono.
- WhatsApp.
- Dirección física.

---

## Footer

Incluir:

- Aviso legal.
- Política de privacidad.
- Política de cookies.
- Datos del profesional.

---

# Sistema de Reservas

## Inspiración

Centro Emocionarse utiliza Lapsula para gestionar las citas. 【2-18485c】【3-4d6c46】

---

## Funcionalidades Requeridas

### Selección de servicio

Ejemplos:

```text
Terapia Adultos
Terapia Infantil
Terapia Adolescente
Terapia de Pareja
Evaluación
```

Información visible:

- Duración.
- Precio.

Como hace Centro Emocionarse. 【2-18485c】

---

### Selección de profesional

Permitir:

```text
Elegir psicólogo
```

Capacidad multi-profesional.

---

### Selección de fecha y hora

Pasos:

```text
Fecha
↓
Hora
↓
Confirmación
```

Como se observa en el flujo de Lapsula. 【2-18485c】

---

### Captura de información

Campos mínimos:

```text
Nombre y Apellidos
Email
Teléfono
```

Campos adicionales:

```text
¿Cómo nos has conocido?

Google
Redes Sociales
Recomendación
Otros
```【2-18485c】

---

# Gestión Manual de Citas

## Requisito Importante

A diferencia del caso analizado, se desea:

```text
Solicitud
↓
Pendiente
↓
Aprobación Manual
↓
Pago
↓
Confirmación
```

---

## Funciones del Psicólogo

### Aprobar cita

```text
Aceptar solicitud
```

---

### Rechazar cita

```text
Rechazar solicitud
```

Opcionalmente:

```text
Añadir comentario
```

---

### Reprogramar cita

Permitir:

```text
Proponer otra fecha
```

---

# Gestión de Disponibilidad

## Bloqueo de horarios

Necesario poder:

```text
Bloquear horas
Bloquear mañanas
Bloquear tardes
```

---

## Vacaciones

Permitir:

```text
Bloquear días
Bloquear semanas
```

Ejemplo:

```text
01/08/2026
hasta
15/08/2026
```

---

## Eventos personales

Ejemplos:

```text
Formaciones
Congresos
Asuntos personales
```

---

# Terapia Online

## Plataforma

Preferiblemente:

```text
Google Meet
```

---

## Flujo

```text
Cita aprobada
↓
Pago recibido
↓
Meet generado automáticamente
↓
Email al paciente
```

---

## Recordatorios

Automáticos:

```text
24 horas antes

1 hora antes
```

---

# Pagos Online

## Caso Analizado

Centro Emocionarse utiliza:

```text
Lapsula
+
Redsys
```

El sistema solicita:

```text
Depósito de 30€
```

para una sesión de:

```text
60€
```

y el resto se paga posteriormente. 【2-18485c】【1-2f470f】

---

## Modelo Recomendado

### Depósito

Ejemplo:

```text
Precio sesión: 60€

Depósito: 30€
```

---

### Pago completo

Opcional.

---

### Política de cancelación

```text
Reembolso
si cancela con más de 24 horas.
```

Modelo observado en Centro Emocionarse. 【2-18485c】

---

## Métodos de Pago

Deseados:

```text
Tarjeta
Google Pay
Apple Pay
Bizum
```

---

## Pasarela

Recomendada:

```text
Stripe
```

Motivos:

- API moderna.
- Integración sencilla.
- Mejor experiencia móvil.
- Compatible con Apple Pay.
- Compatible con Google Pay.
- Compatible con Bizum.

---

# Seguimiento Comercial

Guardar métricas:

```text
Origen del paciente
```

Opciones:

```text
Google
Instagram
Facebook
TikTok
LinkedIn
Recomendación
Otros
```

---

## Analítica

Herramientas:

```text
Google Analytics
Google Search Console
```

Opcional:

```text
Plausible
```

---

# Tecnologías Recomendadas

## Frontend

```text
Astro
```

Motivos:

- Excelente SEO.
- Rápido.
- Compatible con GitHub Pages.

---

## Diseño

```text
TailwindCSS
```

---

## Hosting

```text
GitHub Pages
```

Incluye:

- HTTPS.
- Hosting gratuito.
- Dominio personalizado.

---

## Correo Profesional

```text
Google Workspace
```

Ejemplo:

```text
contacto@psicologiaxxx.es
```

Plan recomendado:

```text
Business Standard
```

Incluye:

- Email corporativo.
- Google Calendar.
- Google Meet.
- Reserva de citas.
- 2 TB almacenamiento. 【4-cf202b】

---

# Arquitectura Propuesta

```text
GitHub Pages
        │
        ▼
Astro + Tailwind
        │
        ▼
Sistema Reservas
        │
        ├─ Aprobación Manual
        ├─ Rechazo Manual
        ├─ Gestión Agenda
        ├─ Bloqueo Horarios
        ├─ Vacaciones
        └─ Pagos
                │
                ▼
              Stripe
                │
                ▼
           Google Meet
                │
                ▼
        Google Workspace
```

---

# Costes Estimados

## Dominio

```text
10€ - 20€/año
```

---

## GitHub Pages

```text
Gratis
```

---

## Astro

```text
Gratis
```

---

## Tailwind

```text
Gratis
```

---

## Google Workspace Standard

```text
≈ 14 USD/mes
```【4-cf202b】

---

## Sistema de Reservas

Según plataforma:

```text
10€ - 30€/mes
```

---

## Stripe

```text
Sin cuota fija
Comisión por transacción
```

---

# Objetivo Final

Construir una plataforma profesional para psicología que ofrezca:

✅ Web corporativa moderna  
✅ Terapia presencial y online  
✅ SEO local y posicionamiento  
✅ Blog y recursos educativos  
✅ Reserva online  
✅ Selección de profesional  
✅ Selección de servicio  
✅ Gestión de disponibilidad  
✅ Bloqueo de horarios y vacaciones  
✅ Aprobación manual de citas  
✅ Rechazo manual de solicitudes  
✅ Pago de depósitos y sesiones  
✅ Google Meet automático  
✅ Recordatorios automáticos  
✅ Correo corporativo  
✅ Analítica y seguimiento comercial  
✅ Coste reducido y mantenimiento mínimo
