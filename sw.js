// sw.js - Service Worker

// You will need 3 event listeners:
//   - One for installation
//   - One for activation ( check out MDN's clients.claim() for this step )
//   - One for fetch requests

//Clients.claim();

self.addEventListener("install", function(event) {

    event.waitUntil(caches.open("my-cache").then(function(cache) {
                cache.add(new Request("https://cse110lab6.herokuapp.com/entries"));
                return;
            })
    );
    
    
});

self.addEventListener('activate', event => {
    event.waitUntil(clients.claim());
    
});

self.addEventListener("fetch", function(event) {
    
    console.log("fetch");
    
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          
          //Cache hit - return response
          if (response) {
            console.log("response");
            return response;
          }

          return fetch(event.request);
        }
      )
    );
  });