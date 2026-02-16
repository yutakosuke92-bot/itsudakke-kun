self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: '家事の時間ですよ', body: 'メンテナンスの時期が来ました☺️' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/599/599370.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/599/599370.png'
    })
  );
});

// Periodic background check simulation (simplified)
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'check-tasks') {
    event.waitUntil(checkTasksAndNotify());
  }
});

async function checkTasksAndNotify() {
  // In a real PWA on a server, we'd fetch data here.
  // For a local file PWA, we can only notify when the app is active 
  // or via shared storage if set up.
}
