'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "baff517c27cde08db865c7266e051c11",
"/main.dart.js": "ba15f82daaf8557e7d363a20b5c0837a",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "23c838bcf02768bd46524ca1e1e60f24",
"/assets/LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets/images/7devsLogo.png": "44efe521001499c2eccc9586c86c6c7a",
"/assets/images/background.png": "d99459cf7fa8d6980a350e92b3429e6b",
"/assets/images/rightLogo.png": "f0f96c89a9425f6ed5dfff826b08111d",
"/assets/web/assets/images/7devsLogo.png": "44efe521001499c2eccc9586c86c6c7a",
"/assets/web/assets/fonts/Nunito-Regular.ttf": "d2e691bc4a2b696929172cb3d22ce8ba",
"/assets/web/assets/fonts/Nunito-Bold.ttf": "1cd294a771f26752bbb8d8d5210f6412",
"/assets/AssetManifest.json": "4e628f9f40e05033a10dedef15aa3c55",
"/assets/FontManifest.json": "4af7004808d252e0085333dd7089da2b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/Nunito-Regular.ttf": "d2e691bc4a2b696929172cb3d22ce8ba",
"/assets/fonts/Nunito-Bold.ttf": "1cd294a771f26752bbb8d8d5210f6412",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
