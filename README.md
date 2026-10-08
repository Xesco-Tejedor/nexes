# Nexes

Buscador guiado de contactos profesionales en fuentes públicas, para archivos, bibliotecas, museos, editoriales y preservación digital. Interfaz en español, diseño ámbar, HTML/CSS/JavaScript sin dependencias.

## Cómo se usa

1. Define nombre, especialidad, institución y lugar. Puedes acotar un dominio institucional o excluir palabras.
2. Prepara consultas separadas para LinkedIn, webs institucionales, ORCID, Dialnet, Zenodo y GitHub.
3. Abre una ruta en Google o Bing, consulta la página original y contrasta la identidad con otra fuente.
4. Guarda manualmente una pista con URL, institución, evidencia y estado de revisión.

## Qué aporta

Evita reconstruir la misma búsqueda en cada fuente, muestra la consulta antes de abrirla y ayuda a contrastar y organizar pistas. No promete más cobertura ni resultados mejores que un buscador; no tiene índice propio ni IA. Bing documenta un límite de los primeros 10 términos de búsqueda: conviene mantener las consultas cortas.

## Privacidad y límites

- No hay servidor de datos, claves, analítica, scraping ni automatización de sesiones.
- No se envían consultas mientras escribes. Al abrir un enlace de búsqueda, la consulta se transmite al buscador elegido.
- La lista se guarda en `localStorage` de este navegador. No está cifrada ni sincronizada. No uses dispositivos compartidos para guardar datos que no quieras que otros lean.
- Exportación JSON/CSV e importación JSON con validación y deduplicación por URL. Los archivos exportados pueden contener datos personales: no los subas a este repositorio.
- No guardar domicilios, teléfonos privados, datos sensibles ni perfiles de personas privadas. Solo información profesional pública necesaria para el propósito.
- Coincidencia de nombre no significa identidad confirmada. El estado «Identidad contrastada» lo elige el usuario, no lo certifica la app.
- El acceso a redes y fuentes puede requerir cuenta o estar limitado. No se sortean controles. Dialnet tiene funciones Plus; se consultan solo páginas indexadas. LinkedIn se consulta desde el índice del buscador, sin extraer ni reproducir perfiles.
- Ninguna operación de esta app envía mensajes a los contactos.

## Fuentes de diseño de consultas

Revisadas el 8 de octubre de 2026:

- https://support.google.com/websearch/answer/2466433
- https://support.microsoft.com/en-us/bing/advanced-search-options
- https://support.microsoft.com/en-us/bing/advanced-search-keywords
- https://www.linkedin.com/help/linkedin/answer/a1341387
- https://info.orcid.org/documentation/features/public-api/searching-the-registry/
- https://dialnet.unirioja.es/
- https://zenodo.org/

No es asesoramiento legal ni garantía de disponibilidad. Se respetan las condiciones de cada fuente. No se han incluido datos reales de terceros en el código ni en el repositorio.

## Ejecución y publicación

Abre `index.html` con un servidor estático o activa GitHub Pages desde la rama `main`, carpeta raíz. No necesita instalación, servicios de pago ni tarjeta. Para descargar/copiar, el navegador puede pedir permiso para el portapapeles; si no lo permite, la consulta se selecciona para copiar manualmente.
