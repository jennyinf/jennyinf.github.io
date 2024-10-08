'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "c45738a34feedd20d935e0d3882d1a85",
"version.json": "da5a9c72b03564509417d750442b56ac",
"index.html": "bcf3aaf78d25ce1746117dce705f2adc",
"/": "bcf3aaf78d25ce1746117dce705f2adc",
"main.dart.js": "4ca8d3c3d1355831fd07601cccc98e0f",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "42c71854d712d10f84d77216beb15e1e",
"icons/Icon-192.png": "b163e759c99aba710963c97f20ba3db7",
"icons/Icon-maskable-192.png": "b163e759c99aba710963c97f20ba3db7",
"icons/Icon-maskable-512.png": "470ad08d991a1e307cc26467c617e6b8",
"icons/Icon-512.png": "470ad08d991a1e307cc26467c617e6b8",
"manifest.json": "d4486c202a839efd9cff14061c9befad",
"assets/AssetManifest.json": "1704abfe86916969f6777cb8d8fd7387",
"assets/NOTICES": "e8fadabc3913558aece48651be77b734",
"assets/FontManifest.json": "c68c63f3a48428967a0b05f1491457cd",
"assets/AssetManifest.bin.json": "87e45f8713e9472c72f953ea46753d4d",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/aad_oauth/assets/msalv2.js": "400193025923dd4e5cefda35be2382e7",
"assets/packages/fluttermoji/attributeicons/haircolor.svg": "5756eb4c957d15ea7fcc37c1835488ac",
"assets/packages/fluttermoji/attributeicons/eyebrow.svg": "cf66096dacdfb6af807cd745fc724e9a",
"assets/packages/fluttermoji/attributeicons/mouth.svg": "af3193d2a407e09fa1156f0f3c30ea86",
"assets/packages/fluttermoji/attributeicons/hair.svg": "0044380b1c40c321c8a65da5b8e77a0c",
"assets/packages/fluttermoji/attributeicons/beard.svg": "908ac523ce1c704be65e254aa4a04e31",
"assets/packages/fluttermoji/attributeicons/eyes.svg": "cfbbbeb9cc3b40c6a561166ad07fc56c",
"assets/packages/fluttermoji/attributeicons/accessories.svg": "0b8839e003a89232edec0e09cb12fa2b",
"assets/packages/fluttermoji/attributeicons/skin.svg": "5f58e197768b8da582fbe8219daf164d",
"assets/packages/fluttermoji/attributeicons/beardcolor.svg": "8fa1ec767cfa14371ca15a47126049ba",
"assets/packages/fluttermoji/attributeicons/outfit.svg": "f36789fda25e7b3746835daf0ec7c0dc",
"assets/packages/fluttermoji/attributeicons/outfitcolor.svg": "e8f931206db9c6ab01a6b4c22c23bf4d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3b79629a1e7f3db858ba825892542461",
"assets/fonts/MaterialIcons-Regular.otf": "1369a6bdca3287dd385bed29c2382c15",
"assets/assets/images/dark_mode_image.png": "085e019108adcf9cb27ff45446be8fdb",
"assets/assets/images/diet_article.jpg": "c761e0950bcb999b9283936e35902e96",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/cake.png": "a19a0337df85c346b5ab4a393e0e8918",
"assets/assets/images/icon.png": "be536e8576e947b8db13a6dad97d5b53",
"assets/assets/images/milestone.png": "12641b7145d44bdc71e01fbea9765fb6",
"assets/assets/images/logo_light_title_alt.png": "7c1bd421560d81837823806bef179d80",
"assets/assets/images/background1.png": "f2495264655215ba73c1ee6ad33b9b36",
"assets/assets/images/clipboard.png": "348355e769f61f3851fb724a7d62b7f1",
"assets/assets/images/wellbeing.png": "5b2413af768ad160c9e2dc817a8e6006",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/affirmation_hero.jpg": "7ebd357d0bad1ab0b4e4e9a03e7e3289",
"assets/assets/images/Asset%25201.png": "c10989f973e4d463a57fd90a2759a037",
"assets/assets/images/pizzaHutVoucher.png": "e9dbfe223e36007eefef2fe8db9cf17a",
"assets/assets/images/amazonVoucher.png": "750306de910dc44ade1939b9269cf278",
"assets/assets/images/logo_light_title.png": "1c8a18dfbc73575c3f89f34f9a813f43",
"assets/assets/images/costaVoucher.png": "f679c5c33f137c8e9028a566e1ba4796",
"assets/assets/images/logo_dark_title_monochrome.png": "ad94a73c86956a64c4b87ab6a7969beb",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/onboard/welcome1.png": "a298b334d98dadff9bbeed4c125dff12",
"assets/assets/images/onboard/admin_welcome.png": "6372d9cc528a32502770a72e5dcccd68",
"assets/assets/images/onboard/welcome.png": "4ecaa9406179d9736433eaa8a6a8dba5",
"assets/assets/images/background.png": "2168a2b947022d01d7293ba5d4c2b74b",
"assets/assets/images/affirmation_head_galaxy.png": "c4c52eb7e8ccd6fda7979483c1168924",
"assets/assets/images/sun_switch.png": "c27747b5554841359e3e5445ad22c754",
"assets/assets/images/birthday.png": "1a8cb7d823ede5b6b1c3063719222c19",
"assets/assets/images/favicon.png": "46d6d2db16619393fc3767877877b4ed",
"assets/assets/images/logo_dark_title.png": "01abfd407067e2912ce7b4ba0e3dfea9",
"assets/assets/images/logo_dark.png": "f8f7f137950fccc3af56571a7a3adf63",
"assets/assets/images/logo.png": "6444bcab75fe08d2f5f6f34677c8c0fa",
"assets/assets/images/coinFront.png": "88f4fc3783e885e2bbf3f072986f3094",
"assets/assets/images/birthday_banner_3.jpg": "b67e042f3f6a6cb83c1bfe6980c871d7",
"assets/assets/images/light_mode_image.png": "58d0670c3a0e0cd25b28be021e05102d",
"assets/assets/images/moon_switch.png": "5734ab941f7047ae84d9050505002452",
"assets/assets/images/nhs_attribution.png": "ebbed8235d6c0b988c378513fa3b04b0",
"assets/assets/images/logo_light_title_monochrome.png": "c737c555886175afbd77b580db31f12e",
"assets/assets/images/valuBanner.png": "a782c6d7eb381c6f3dcbfb965bb68d81",
"assets/assets/images/logo_light.png": "872b5b6f7ced60f59dd228b177aa47af",
"assets/assets/images/mental_health_article.jpg": "c6c67550dcba335bbcb9de160bad48b0",
"assets/assets/images/coinFront2.png": "584d6ae71a5190d36e7a0461cc457a6e",
"assets/assets/images/logo_dark_title_alt.png": "22744c60141ba0c718fff3cc612f838a",
"assets/assets/images/ocean.png": "9093e759ca720179c36025385c4f787c",
"assets/assets/images/health_article.jpg": "238dffb8f8bf928ac547644e6f85cdc0",
"assets/assets/images/cycling.png": "05effc4fc1a3181d662aaf0da2916759",
"assets/assets/images/service_banner_2.png": "64f016c9095d8acd48c9c19fbaa774b3",
"assets/assets/images/greenBackground.png": "a92a1ac8bba64a79de54a1a9b83806fa",
"assets/assets/images/service_banner_3.png": "8f19c65fbd42c79bc6e9ec0a9e02c2f8",
"assets/assets/fonts/RecognitionIcons.ttf": "3b450786d856efc0620afc87bfa6cf62",
"assets/assets/data/wellness/sit_less.json": "6f752b76b2f1a7006a1ed6416e3c4ed9",
"assets/assets/data/wellness/fatigue.json": "fac37732b016885a84ec5ba2fc602215",
"assets/assets/data/wellness/why5.json": "8c5bfb9fa63558671e33c59c52a911a5",
"assets/assets/data/wellness/five_steps.json": "09a79a469a50cb14cc1f9c4bb37a0128",
"assets/assets/data/wellness/balanced_diet.json": "1448082868c552b968f706b509f4f1d8",
"assets/assets/data/wellness/index.json": "b5a73a877f2688640e039e6687b90797",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
