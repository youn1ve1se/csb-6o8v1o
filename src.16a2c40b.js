parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"D9Nj":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";function e(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,o=e.getHours(),a=e.getMinutes(),r=e.getSeconds();document.getElementById("clock").innerHTML="".concat(t,"년 ").concat(n,"월 ").concat(o,":").concat(String(a).padStart(2,"0"),":").concat(String(r).padStart(2,"0"))}require("./styles.css"),e(),setInterval(e,1e3);var t=document.getElementById("login-input");function n(e){if(13==e.keyCode){var n=t.value,o=(new Date).getHours(),a="";console.log("현재시간:".concat(o)),o>=6&&o<12&&(a="Good Morning"),function(e){return e<18}&&(a="Good Afternoon"),function(e){return e<24}&&(a="Good Evening"),function(e){return 0}&&(a="Have a nice Dream"),document.getElementById("login-form").innerHTML="".concat(a,", ").concat(n)}}t.addEventListener("keydown",n);var o=document.getElementById("login-form");function a(e){e.preventDefault()}o.addEventListener("submit",a);var r=document.getElementById("todo-input");function c(e){if(13==e.keyCode){var t=r.value;r.value="";var n={text:t,id:Date.now()};u.push(n),i(n),s()}}function i(e){var t=document.createElement("li");t.id=e.id;var n=document.createElement("span");n.innerText=e.text;var o=document.createElement("button");o.innerText="✔",o.style.border="none",o.style.margin="5px",o.addEventListener("click",g),t.appendChild(n),t.appendChild(o),d.appendChild(t)}r.addEventListener("keydown",c);var d=document.getElementById("todo-list"),u=[],l=localStorage.getItem("todos");function s(){localStorage.setItem("todos",JSON.stringify(u))}if(l){var m=JSON.parse(l);u=m,m.forEach(i)}function g(e){var t=e.target.parentElement;t.remove(),u=u.filter(function(e){return e.id!==parseInt(t.id)}),s()}function f(e){var t=e.coords.latitude,n=e.coords.longitude,o="https://api.openweathermap.org/data/2.5/weather?lat=".concat(t,"&lon=").concat(n,"&appid=").concat("4b70fc63e8f3a09a8c86bdcae8a06beb");fetch(o).then(function(e){return e.json()}).then(function(e){var t=document.querySelector("#weather span:first-child"),n=document.querySelector("#weather span:last-child");t.innerText="".concat(e.name,", ").concat(e.sys.country),n.innerText="".concat(e.weather[0].main," (").concat(e.weather[0].description,")")})}function v(){}navigator.geolocation.getCurrentPosition(f,v);
},{"./styles.css":"D9Nj"}]},{},["H99C"], null)
//# sourceMappingURL=/csb-6o8v1o/src.16a2c40b.js.map