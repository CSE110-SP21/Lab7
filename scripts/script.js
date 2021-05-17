// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

// Make sure you register your service worker here too
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("sw.js")
    .then(function(registration) {
      //Registered successfully
      console.log("ServiceWorker registered");
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
      entries.forEach(entry => {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entry;
        document.querySelector('main').appendChild(newPost);
      });

      let ent = document.querySelectorAll("journal-entry");
      for (let i = 0; i < ent.length; i++) {

        ent[i].addEventListener("click", function() {

          setState("entry", i);
        });
      }
    });
});

document.querySelector("header > img").addEventListener("click", function() {

  setState("settings");
});

document.querySelector("header > h1").addEventListener("click", function() {
  
  setState("home");

  //history.back();
});

window.addEventListener("popstate", function() {

  let loc = location.hash;

  if (loc == "") {
    loc = "#home";
  }

  loc = loc.substring(1);

  setState(loc);
});