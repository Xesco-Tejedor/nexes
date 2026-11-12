# Nexes

[Abrir Nexes](https://xesco-tejedor.github.io/nexes/)

Consultas guiadas de contactos profesionales en fuentes públicas. No rastrea redes, no verifica identidades automáticamente, no contacta con nadie y no encuentra información privada. Se mantienen LinkedIn indexado, webs institucionales, ORCID, Dialnet, Zenodo y GitHub como rutas al buscador elegido.

## Continuidad entre equipos

Búsqueda, filtro, borrador sin guardar y pistas se conservan localmente. La conexión opcional con Google Drive guarda y recupera el espacio de trabajo en una carpeta privada Nexes. Usa la misma cuenta en cada navegador y espera a **Copia en Drive confirmada** antes de cambiar de equipo.

El código web es público; los datos de trabajo no se suben a GitHub ni se comparten. `drive.file` limita el permiso a archivos creados o autorizados para esta app. Tokens solo en memoria, sin contraseña ni intermediario. Se necesita reconectar al abrir la app o caducar la autorización. No hay guardado con la app cerrada. Sin conexión se mantiene el trabajo local, pendiente de sincronizar al reconectar.

Cambios simultáneos se conservan mediante registros causales con múltiples versiones. Revisa y recupera alternativas en **Versiones para revisar**. Si sigues editando, las alternativas concurrentes se conservan en el historial local y en copias inmutables de Drive. Las eliminaciones se sincronizan, pero permanecen en copias anteriores. Desconectar no elimina datos. Copias completas exportables e importación que combina sin borrar cambios concurrentes. El JSON/CSV tradicional exporta solo las pistas visibles; el JSON antiguo sigue importándose sin sustituir la lista.

Las pistas anteriores se migran sin borrar el original `nexes.contacts.v1`; se guarda también una copia previa. Si hay almacenamiento ilegible o lleno, se detiene la escritura y se ofrece copia de rescate en vez de sobreescribir datos.

## Privacidad y límites

[Política de privacidad](https://xesco-tejedor.github.io/nexes/privacy.html). Copia local sin cifrado: no usar equipos compartidos para información privada. Solo información profesional pública necesaria; no domicilios, teléfonos privados, datos sensibles ni perfiles de personas privadas. Abrir una consulta la transmite al buscador. Drive opcional transmite a Google la búsqueda, el borrador y las pistas. No hay analítica ni usos secundarios.

No se activa facturación ni se incluyen servicios de pago. Las copias ocupan espacio del Drive del usuario. Las cuotas y condiciones de Google pueden cambiar. Errores de red, cuota o autorización dejan los datos locales y muestran el problema, no simulan un guardado.

## Desarrollo

HTML/CSS/JS separados; `model.js` contiene la combinación causal pura. `app.js` conserva rutas y pistas; `sync.js` gestiona persistencia y Drive. Se publica como sitio estático en GitHub Pages desde `main`.

Pruebas: `node test-model.cjs` comprueba adiciones, conflictos, borrado/edición, convergencia e idempotencia. `test-ui.cjs` usa Playwright con Drive simulado para migración, recarga, borrador, sincronización entre contextos, conflictos y móvil. Las pruebas simuladas no sustituyen la comprobación real de autorización/Drive.

## Fuentes de consulta

- https://support.google.com/websearch/answer/2466433
- https://support.microsoft.com/en-us/bing/advanced-search-options
- https://www.linkedin.com/help/linkedin/answer/a1341387
- https://info.orcid.org/documentation/features/public-api/searching-the-registry/
- https://dialnet.unirioja.es/
- https://zenodo.org/

No asesoramiento legal ni garantía de cobertura. Se respetan controles y condiciones de las fuentes.
