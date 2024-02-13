'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "75d2c5be53514bf37ce91e48364fb0c1",
"index.html": "82da79ced7128214567e41ea9516a772",
"/": "82da79ced7128214567e41ea9516a772",
"main.dart.js": "f22e9e70a071dc36aaa34ff99c0a5d46",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9c9ef6705040352653b66b5ea9136153",
"assets/AssetManifest.json": "753710439cf0dde56b359fe7e553d2ee",
"assets/NOTICES": "f52db96d88da03283f7406549f7cf061",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "ca0c31f5857115ef928806b217b8d5e7",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "45c1fb7758a92e829d1162febc53c59c",
"assets/fonts/MaterialIcons-Regular.otf": "07515d551d0aa9bbed039fbe5cd545b3",
"assets/assets/products/88.png": "b48ee0de5fc7e9cf83e8bb36ade540a9",
"assets/assets/products/77.png": "4bcd0fb76979ab9c1c207be54612db2d",
"assets/assets/products/63.png": "81bc00b2c4b256abdf93e7b6f877a47c",
"assets/assets/products/62.png": "8a294538b83a3b6892e313e6b281cd58",
"assets/assets/products/76.png": "225b75ee7da3963970475e5f3e5e5845",
"assets/assets/products/89.png": "ec2efd76492aff89d32a76d0dfcf94b1",
"assets/assets/products/60.png": "d2747f0a229cc1c6b56982b41b30ecfb",
"assets/assets/products/74.png": "c9b99ed1a4a279c4ae0d96e9258074eb",
"assets/assets/products/48.png": "b6b3fba654b7e65df39a2066bdb10346",
"assets/assets/products/detached.png": "b779a21e2cdc34a88bba3057e5d1c15f",
"assets/assets/products/49.png": "0ff453951d8143abe157ba25e0b37496",
"assets/assets/products/75.png": "0dbd6d3a12f115c2c5b21b96abed0db2",
"assets/assets/products/61.png": "11f723ffb50c8df8ed5e9ac564e8826d",
"assets/assets/products/59.png": "15d6934074e8f5aa6d08928470fe3af1",
"assets/assets/products/65.png": "47559069b9e2639076cd035128ea9631",
"assets/assets/products/71.png": "48288e527034500ab2aff5dcfd0e05fe",
"assets/assets/products/flat.png": "0232e3bc06de5da0c25ee5850b86d007",
"assets/assets/products/70.png": "b85ceb443377d7e3e0951be89e8ddf55",
"assets/assets/products/64.png": "cfb23e8ad42fc817e848740343512db1",
"assets/assets/products/58.png": "56dcd89c9c6dd3c78c29bf180d9001a1",
"assets/assets/products/8.png": "ba2fdbdb135961591178d94219454c03",
"assets/assets/products/72.png": "ba94360607e3ee20b9cc7440cade894c",
"assets/assets/products/66.png": "bb55c22797e7a9bc73f7d39e45bcef32",
"assets/assets/products/67.png": "b2bb5d9474180961121e948a346a73e5",
"assets/assets/products/73.png": "0490b0924ce58f656265fa91452f1def",
"assets/assets/products/9.png": "953351b81ca7731745414f3619e994e4",
"assets/assets/products/14.png": "7706c2a728267d470eda2ada988a6566",
"assets/assets/products/28.png": "191d6928cb5f40e353b9ead35f86df41",
"assets/assets/products/29.png": "1188a6f2197d84b842ce0bf21b23fa6c",
"assets/assets/products/15.png": "441fe05ac8f71500ed5f752da3e3ccfb",
"assets/assets/products/17.png": "f53c52ee2f41a623b1c22e7ff01cb1cc",
"assets/assets/products/16.png": "15edc04759bdefec0a043510d2ee90f0",
"assets/assets/products/12.png": "610eda488996924abca3963f0a5354fc",
"assets/assets/products/13.png": "cd9fbe9c8043e5ef067a7ed06839eaa1",
"assets/assets/products/39.png": "2d0745d5349f2531f8359d8f71780b46",
"assets/assets/products/11.png": "d1e8645a5055802c98986d89fc5039c4",
"assets/assets/products/10.png": "564b1643dac9b78edc83dc6f65f454cc",
"assets/assets/products/38.png": "e2378111b0ad18ed554ece8658552e62",
"assets/assets/products/35.png": "9250be0af925eb395d78f4c03ffb8d8a",
"assets/assets/products/21.png": "4ec22aa8a64adf11e974e9b9aa65cd1d",
"assets/assets/products/20.png": "3dc7b482368b08e522e36eb0d09100f9",
"assets/assets/products/34.png": "49378f13664c84d8b0caec5947dcc111",
"assets/assets/products/22.png": "9b9cc63b8a54a728edeb8670f967d1c4",
"assets/assets/products/36.png": "a481239effdae698607faa4d0fcbf19a",
"assets/assets/products/37.png": "fc8388bb8f5a747a7d9dc85ab5b51c3d",
"assets/assets/products/23.png": "31395ff0a5206b3953138776b6277dc7",
"assets/assets/products/27.png": "9e3f202af6d737b2b46c17e95b9e890d",
"assets/assets/products/33.png": "fd2e73d1254c10e821690c05c2e6464f",
"assets/assets/products/32.png": "6468f884db8264170975a85ea6635e51",
"assets/assets/products/26.png": "4df0f331c4d05b339d3ece822bc66d61",
"assets/assets/products/18.png": "a69c2697eca880196245124537decd72",
"assets/assets/products/30.png": "3e215473863131508920f17659972100",
"assets/assets/products/24.png": "24b6f2ad370c8ede98e895d7b072b64e",
"assets/assets/products/25.png": "5cd18add49460db8a12eb455dd2ddd2b",
"assets/assets/products/31.png": "4b40e9b15ec55c40841206ad22a81bdb",
"assets/assets/products/19.png": "d59fc92c4ba3f81e4977fec91829493c",
"assets/assets/products/95.png": "28c819e0ad8c24398afc29a041c638b1",
"assets/assets/products/81.png": "88dc2713fd402a747a0262630d594582",
"assets/assets/products/4.png": "aeffc4957d414d4bbba3c37146e8cd17",
"assets/assets/products/56.png": "59783a31d1902e12002af464f998b5d7",
"assets/assets/products/42.png": "627b3b513e049de816c1ab548e8aeb1f",
"assets/assets/products/5.png": "ef082d5b5645721c135d0bf6559b117b",
"assets/assets/products/57.png": "b723691d6fb37d80beda2cbc025f20c2",
"assets/assets/products/80.png": "13488233a5198deeea9a1c9bb59a0a21",
"assets/assets/products/94.png": "aca7b84b3435c409739fb7b54b798b61",
"assets/assets/products/82.png": "df696fbfdc61ef1dbedb90e543a4c05c",
"assets/assets/products/41.png": "356dc264d2a9d556d6eb1886e40ef792",
"assets/assets/products/55.png": "97a0273529b99fc831545aa2c2a467b7",
"assets/assets/products/7.png": "186ce154aeddaa14b3faeb0ac7a54435",
"assets/assets/products/69.png": "f3d4d7020f3055c792d77d08f4212828",
"assets/assets/products/68.png": "c4de3f6e3498f5b1016a915446167933",
"assets/assets/products/54.png": "6fb2ff6f2cc2ff66545fc11105546720",
"assets/assets/products/6.png": "eaf79644d770064a339d3a637a685bd9",
"assets/assets/products/40.png": "ac71bb87551022b8885e4ebc43b02b85",
"assets/assets/products/83.png": "436438be7fbb2a96651ee73d81d5b885",
"assets/assets/products/87.png": "5449a450284cb65d8e4fe7eef9801a28",
"assets/assets/products/93.png": "4344226dbcdf26203e23a623e8c9b016",
"assets/assets/products/78.png": "420a003ea2adc9235f0928e26113ac35",
"assets/assets/products/44.png": "66481d249e6c9f147cf87061ff5be720",
"assets/assets/products/2.png": "60dc053e691431860c1b3f863b520ef0",
"assets/assets/products/50.png": "87e5f281b1a4a9057b27d876cf150c44",
"assets/assets/products/3.png": "9ba68efe4b786cd307424bc3bd63dbd6",
"assets/assets/products/51.png": "7f94746205c02a68cbfb4072e79f6fb0",
"assets/assets/products/45.png": "1f02c6a5a89c869aa591796ae4b7f869",
"assets/assets/products/79.png": "713c546bc267fe50390873cbe947260f",
"assets/assets/products/92.png": "02e27aa0bcc38bd02b44cc9c568825f7",
"assets/assets/products/86.png": "afc25f4b764af88e0f3ef32becae859e",
"assets/assets/products/90.png": "60ecb820d690594962504079768e55c1",
"assets/assets/products/84.png": "ca93863f241b06ce245ae368a2d387b0",
"assets/assets/products/53.png": "df9a7931ca18e29f05bfab663d755a97",
"assets/assets/products/1.png": "e45324da39ccf9ab46392e4a8017961d",
"assets/assets/products/47.png": "d1ce8803cf8f860a0a3befe75e9270aa",
"assets/assets/products/46.png": "3d061f01f73e53abeb6bcee957fa1726",
"assets/assets/products/52.png": "b68a1d7c18066682bc8028cc6c372782",
"assets/assets/products/85.png": "24afd9df6b53d06825e2fea204a36177",
"assets/assets/products/91.png": "aff29799ffb96557c3da5106da335cc5",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/logo.png": "667e2c2a3c1df8acf9b0ec28f99f04f8",
"assets/assets/data/units.json": "16316313a40463e959f1978aba020a69",
"assets/assets/data/pricing.json": "568abd51d3c632f5cccba8e02d616ba6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
