// Service worker mínimo: permite instalar o app. Sempre busca a versão mais nova na internet.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', e => {});
