// script.js

import { router } from './router.js'; // Router imported so you can use it to manipulate your SPA app here
const setState = router.setState;

var theHeader = document.querySelector('h1');
var theSetting = document.querySelector("img[alt=settings]");

// Make sure you register your service worker here too

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://cse110lab6.herokuapp.com/entries')
    .then(response => response.json())
    .then(entries => {
        for (let i = 0; i < entries.length ; i++)
      {
        let newPost = document.createElement('journal-entry');
        newPost.entry = entries[i];
       /* newPost.addEventListener('click', function(){
          var newObject = {info: entries[i], number: i + 1};
          setState(newObject);
        });*/
        document.querySelector('main').appendChild(newPost);
      }
      });
     
});

/*theHeader.addEventListener('click', function(){
  if (document.location.hash != '#Main')
  {
    setState('MainPage');
  }

});

theSetting.addEventListener('click', function(){

  setState('SettingPage');

});

window.addEventListener('popstate', function(){
history.back();/
})
*/


