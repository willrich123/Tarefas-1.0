// Service worker for tarefas PWA
// handles notification clicks and installation/activation

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({type:'window', includeUncontrolled:true}).then(windowClients => {
      if(windowClients.length > 0){
        return windowClients[0].focus();
      }
      return clients.openWindow('/');
    })
  );
});
