# Requisitos de la Página Web para Consulta de Psicología

## Objetivo

Crear una página web profesional, moderna y sencilla para una consulta de psicología, alojada en GitHub Pages, que permita a los pacientes conocer al profesional, reservar citas online y realizar terapia online mediante herramientas externas especializadas.

---

# Diseño y Experiencia de Usuario

## Tipo de sitio

- One-page (single page).
- Diseño limpio y profesional.
- Optimizado para móvil y escritorio.
- Carga rápida.
- Enfoque centrado en la conversión a reserva.

## Estilo visual

- Minimalista.
- Colores suaves (azules, verdes suaves, beige).
- Mucho espacio en blanco.
- Fotografías reales del psicólogo.
- Tipografía moderna y legible.
- Imagen de marca basada en:
  - confianza
  - cercanía
  - serenidad
  - profesionalidad

---

# Estructura de la Web

## 1. Hero Principal

- Foto profesional.
- Mensaje de valor.
- Especialidades principales.
- Botón destacado:

```text
Reservar cita
```

---

## 2. Sobre Mí

- Presentación profesional.
- Formación.
- Experiencia.
- Nº de colegiado.
- Enfoque terapéutico.

---

## 3. Especialidades

Ejemplos:

- Ansiedad
- Estrés
- Depresión
- Autoestima
- Gestión emocional
- Terapia online
- Terapia de pareja

---

## 4. Cómo Funciona

Proceso explicado de forma sencilla:

```text
1. Solicita una cita
2. El psicólogo revisa la solicitud
3. Recibes la confirmación
4. Realizas la sesión online o presencial
```

---

## 5. Tarifas

Mostrar precios de forma transparente.

Ejemplos:

- Primera sesión
- Seguimiento
- Terapia online
- Terapia de pareja

---

## 6. Preguntas Frecuentes (FAQ)

- Duración de las sesiones.
- Política de cancelación.
- Terapia online.
- Frecuencia recomendada.
- Formas de pago.

---

## 7. Reserva de Citas

Integración con plataforma externa.

---

## 8. Contacto

- Email profesional.
- Teléfono.
- WhatsApp (opcional).
- Redes sociales (opcional).

---

## 9. Footer Legal

- Aviso legal.
- Política de privacidad.
- Política de cookies.
- Datos de colegiación.

---

# Requisitos de Reserva de Citas

## Funciones obligatorias

### Solicitud de cita

El paciente debe poder:

- Seleccionar fecha.
- Seleccionar hora.
- Elegir tipo de sesión.
- Introducir datos de contacto.

---

### Aprobación manual

Las citas no deben confirmarse automáticamente.

Flujo:

```text
Paciente solicita cita
↓
Estado: Pendiente
↓
Psicólogo aprueba o rechaza
↓
Notificación al paciente
```

---

### Rechazo manual

El psicólogo debe poder:

- Rechazar una solicitud.
- Añadir comentario opcional.
- Solicitar una nueva fecha.

---

### Gestión de disponibilidad

El psicólogo debe poder:

- Bloquear horas concretas.
- Bloquear días completos.
- Configurar vacaciones.
- Crear excepciones en el calendario.

Ejemplo:

```text
Martes 10:00-12:00 bloqueado
Vacaciones del 1 al 15 de agosto
```

---

# Terapia Online

## Videollamada

Integración con:

- Google Meet (preferiblemente).

Proceso:

```text
Cita aprobada
↓
Generación automática de Meet
↓
Envío del enlace al paciente
```

---

## Recordatorios

Enviar:

- Confirmación de reserva.
- Recordatorio 24 horas antes.
- Recordatorio 1 hora antes.

---

# Pagos Online

## Métodos de pago

Preferentemente:

- Tarjeta bancaria.
- Apple Pay.
- Google Pay.
- Bizum (si está disponible).

---

## Flujo de pago deseado

```text
Solicitud de cita
↓
Aprobación por el psicólogo
↓
Pago
↓
Confirmación definitiva
```

---

# Infraestructura Técnica

## Frontend

- Astro
- Tailwind CSS

---

## Hosting

- GitHub Pages

---

## Dominio

Ejemplos:

```text
psicologiaxxxx.es
nombreapellido.com
```

---

# Integraciones Externas Deseadas

## Opción recomendada

```text
GitHub Pages
+
Astro
+
Tailwind
+
Google Workspace
+
Sistema de reservas
+
Stripe
```

---

## Funcionalidades necesarias del sistema de reservas

- Reservas online.
- Aprobación manual.
- Rechazo manual.
- Gestión de agenda.
- Bloqueo de horarios.
- Pagos online.
- Integración con Google Calendar.
- Integración con Google Meet.
- Recordatorios automáticos.

---

# Correo Profesional

Dirección tipo:

```text
contacto@tudominio.es
```

Gestionado mediante:

- Google Workspace.

---

# Objetivo Final

Disponer de una consulta psicológica digital completa que permita:

✅ Captación de pacientes  
✅ Reserva online de citas  
✅ Aprobación manual por parte del psicólogo  
✅ Gestión de disponibilidad y vacaciones  
✅ Pago online seguro  
✅ Sesiones de terapia online por videollamada  
✅ Recordatorios automáticos  
✅ Hosting sencillo y de bajo mantenimiento  
✅ Cumplimiento legal (RGPD, privacidad y cookies)
