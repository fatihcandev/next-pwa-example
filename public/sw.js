if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return i;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts("fallback-Ekv_g7_JKTI1_B0rgYnwd.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Ekv_g7_JKTI1_B0rgYnwd/_buildManifest.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/Ekv_g7_JKTI1_B0rgYnwd/_middlewareManifest.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/Ekv_g7_JKTI1_B0rgYnwd/_ssgManifest.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/main-a8edae0d785a1705.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/pages/_app-cfbdf1e9c647cd00.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/pages/_offline-35f19edfc2423ac3.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/pages/index-6cef2517c181bdba.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/chunks/webpack-514908bffb652963.js",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/css/27d177a30947857b.css",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_next/static/css/e36e9ca00e00d53e.css",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/_offline",revision:"Ekv_g7_JKTI1_B0rgYnwd"},{url:"/android-144x144.png",revision:"8857b715207c4e8a55a3138de2f55b56"},{url:"/android-192x192.png",revision:"e3898b65dc898e387b63cbe6a37824a2"},{url:"/android-36x36.png",revision:"946020ab3254e78dd95a77cf12d8f3d9"},{url:"/android-48x48.png",revision:"3d5b24042da75fdcdca5d1f04c778056"},{url:"/android-72x72.png",revision:"bc778ebd25c755c97ef31882dbf1837f"},{url:"/android-96x96.png",revision:"db8b1515b410a115ca370b00faf9a828"},{url:"/android-chrome-192x192.png",revision:"d5a69e7ad235663a83dffb05c8ecf066"},{url:"/android-chrome-512x512.png",revision:"46dd9026c65b6348916a65e8862f39fa"},{url:"/android-chrome-maskable-192x192.png",revision:"ca361aa617dc5fdfeb06388dd6e4f061"},{url:"/android-chrome-maskable-512x512.png",revision:"46dd9026c65b6348916a65e8862f39fa"},{url:"/apple-touch-icon.png",revision:"2100ab0f09d11222b232944dc810b2f9"},{url:"/favicon.ico",revision:"4a05a06f26f93c378c9584924317445f"},{url:"/manifest.json",revision:"9932b1b0c23ba86e7a00edab825a8ff3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
