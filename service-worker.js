"use strict";var precacheConfig=[["/decider/index.html","6f20c0ac76c1975cc6d285f5405e516e"],["/decider/static/css/main.6cd2ca1b.css","9b521100b1c99ee544b1061477456c7b"],["/decider/static/js/main.174361e6.js","a86e56e02f404186c63eab5511fb1cc1"],["/decider/static/media/cross.650add32.png","650add3218bf84d67d012c7b3be898b1"],["/decider/static/media/decide.d8d9a48b.png","d8d9a48b54716a48ed5d391cb63464bc"],["/decider/static/media/dice.a43366e1.png","a43366e174cf90dfb928dc8840b343cb"],["/decider/static/media/dishonest.6d71a3d5.png","6d71a3d5e3c36e7e07beec950c57aa1a"],["/decider/static/media/home.6b4f93c5.png","6b4f93c51c2a7df9d9beb4ffcb7e06b8"],["/decider/static/media/info.bf7e9200.png","bf7e92002662c3860f7eff921e2061df"],["/decider/static/media/menu.7f4c7940.png","7f4c79408bcde362ddff45a47278ccaa"],["/decider/static/media/night.e69a4436.png","e69a4436f5c3c881fc9e962dc85d278f"],["/decider/static/media/options.3271a595.png","3271a595f965840401d945c64ba0f1fb"],["/decider/static/media/popup.9026ed61.png","9026ed617123d4906fd944dc1046688c"],["/decider/static/media/stands.c5c51d00.png","c5c51d002c14cc6ec572f2cbc953e5f7"],["/decider/static/media/trash.404a3606.png","404a3606f849636a4d023d3865453a50"],["/decider/static/media/weighted.52e60a92.png","52e60a92968c499428a203ae8f61f7af"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/decider/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});