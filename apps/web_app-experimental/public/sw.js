if(!self.define){let e,n={};const s=(s,a)=>(s=new URL(s+".js",a).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(n[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};n[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-b777c91b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"e790fd884ab917ef1315ff4d9ba2cded"},{url:"/_next/static/2QCFIQnnz0Pe8mtpMbhED/_buildManifest.js",revision:"d52772daafc74543e38d922c8613766b"},{url:"/_next/static/2QCFIQnnz0Pe8mtpMbhED/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/20-2881d419b7ab3a3d.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/290-37c7cf790cbbebfc.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/386.9253601bab9f3585.js",revision:"9253601bab9f3585"},{url:"/_next/static/chunks/420-20d6812f32e3c565.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/578.e7ee4746a66d893c.js",revision:"e7ee4746a66d893c"},{url:"/_next/static/chunks/64-a1ed556b77af81d5.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/648-7973ba25dddca2ff.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/819.3e315d3f50671f00.js",revision:"3e315d3f50671f00"},{url:"/_next/static/chunks/828-29090949eba77e91.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/963-f8262210331cd7a6.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/forgot/head-15d010993402f89b.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/forgot/page-9885256239ae24c7.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/layout-20d07a479e6f240e.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/login/head-bd92658dc875e13b.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/login/page-1852a20df2e2ab25.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/register/head-656189e7771bb5ab.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(auth)/register/page-1f91885ff66b01d7.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/head-b40eed5726b0cce3.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/layout-8d08fbe38dcbbe14.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/page-122e9a15734c68f0.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/profile/head-9e7679a7eca1bae6.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/profile/page-89ccdeb712e52888.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/settings/head-fc5f08234fe9a720.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/settings/page-1e762c57c0498a63.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/team/%5Bid%5D/page-9c060560f397e63c.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/team/head-92add5b48a34a143.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/(frontend)/team/page-74d3bec8b3c5f2e0.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/app/layout-3865759f29a94900.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/main-35d80f131de24b98.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/main-app-f629394f332d9a30.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/pages/_app-a9779e9609f4196c.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/pages/_error-07538a000b804d01.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-6d694b70abf9623f.js",revision:"2QCFIQnnz0Pe8mtpMbhED"},{url:"/_next/static/css/0b9ebaa53f2581dc.css",revision:"0b9ebaa53f2581dc"},{url:"/_next/static/css/7830ed24c944375a.css",revision:"7830ed24c944375a"},{url:"/_next/static/css/b8ede4373d7d10b5.css",revision:"b8ede4373d7d10b5"},{url:"/_next/static/media/2aaf0723e720e8b9.p.woff2",revision:"e1b9f0ecaaebb12c93064cd3c406f82b"},{url:"/_next/static/media/9c4f34569c9b36ca.woff2",revision:"2c1fc211bf5cca7ae7e7396dc9e4c824"},{url:"/_next/static/media/ae9ae6716d4f8bf8.woff2",revision:"b0c49a041e15bdbca22833f1ed5cfb19"},{url:"/_next/static/media/b1db3e28af9ef94a.woff2",revision:"70afeea69c7f52ffccde29e1ea470838"},{url:"/_next/static/media/b967158bc7d7a9fb.woff2",revision:"08ccb2a3cfc83cf18d4a3ec64dd7c11b"},{url:"/_next/static/media/c0f5ec5bbf5913b7.woff2",revision:"8ca5bc1cd1579933b73e51ec9354eec9"},{url:"/_next/static/media/d1d9458b69004127.woff2",revision:"9885d5da3e4dfffab0b4b1f4a259ca27"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icons/android-chrome-192x192.png",revision:"9cd023b0441500c28abee6dc07a7a145"},{url:"/icons/android-chrome-512x512.png",revision:"29a8d00f906797767914905449f95a5d"},{url:"/icons/apple-icon-120x120.png",revision:"78d19f7f3e72484dc49d9ab1e961b265"},{url:"/icons/apple-icon-152x152.png",revision:"101e3c9d95470d5780083a0101217e59"},{url:"/icons/apple-icon-167x167.png",revision:"3a039f105caae5e168ea4ec3723028b4"},{url:"/icons/apple-icon-180x180.png",revision:"b2a100ebdd27bd0084bd0c18af423f1a"},{url:"/icons/apple-launch-1125x2436.png",revision:"f7d1b835e0827d9ee91ab460189c2c4b"},{url:"/icons/apple-launch-1242x2208.png",revision:"4e66a73934e825c333b249ed450114d5"},{url:"/icons/apple-launch-1242x2688.png",revision:"5825e5ddca211955b0e235700a715ef2"},{url:"/icons/apple-launch-1536x2048.png",revision:"c1854e4acd04e6aca81ef45c62486409"},{url:"/icons/apple-launch-1668x2224.png",revision:"61c9b2f53621d9f92f8705136e3b6732"},{url:"/icons/apple-launch-1668x2388.png",revision:"7275705cbf3a25382f23fead0d2b347b"},{url:"/icons/apple-launch-2048x2732.png",revision:"97ebef0e681c35f6a19b7fab32978e08"},{url:"/icons/apple-launch-640x1136.png",revision:"04d66ffd64c9075713231cf2821d06b6"},{url:"/icons/apple-launch-750x1334.png",revision:"e00bcc8e12489906e6372d7b742bc270"},{url:"/icons/apple-launch-828x1792.png",revision:"be52c4a7bc30488aae052f306fedbadd"},{url:"/icons/apple-touch-icon.png",revision:"0a8ee23dbfb1a8737b682419e2b4b23a"},{url:"/icons/favicon-128x128.png",revision:"425756bffad22cdbaf57f4b9cf4efb23"},{url:"/icons/favicon-16x16.png",revision:"318e40cbc8d69f6ce29c41c03e422e0a"},{url:"/icons/favicon-32x32.png",revision:"d3502f9e7f5b5e1b2e0bd7a51cd257bd"},{url:"/icons/favicon-96x96.png",revision:"87a8031d911baed190b13770ea4db0b1"},{url:"/icons/favicon.ico",revision:"aa5c7d7590150213b7daefcd5dfae58a"},{url:"/icons/icon-128x128.png",revision:"425756bffad22cdbaf57f4b9cf4efb23"},{url:"/icons/icon-192x192.png",revision:"55e543473b09af5570255ce9443840f4"},{url:"/icons/icon-256x256.png",revision:"c98193249afb690556812b91107a21f2"},{url:"/icons/icon-384x384.png",revision:"19f11fa5912d879772f4112c586dbb98"},{url:"/icons/icon-512x512.png",revision:"3bc7289df1a74ad1fe8ffd82f552de73"},{url:"/icons/ms-icon-144x144.png",revision:"72f4e6022c7d74fdc2bd874365316771"},{url:"/icons/mstile-150x150.png",revision:"d53058ce9397619d3feeec7bee65a760"},{url:"/icons/safari-pinned-tab.svg",revision:"c76707cd18f90e9f117227a4178fdeb7"},{url:"/images/avatar.png",revision:"87e3f20d7ab1b6c039c179d96f6a9956"},{url:"/images/avatar2.png",revision:"61d90d84534b510fcd3778198abef4a5"},{url:"/js/onesignal/OneSignalSDKWorker.js",revision:"ebb63ca15bba16b550232b0b0f66c726"},{url:"/manifest.json",revision:"83b32926edf3f923edc5377d425a06fb"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:a})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
