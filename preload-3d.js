const preloadUrls = [
  "assets/vendor/three/three.module.js",
  "assets/vendor/three/OrbitControls.js",
  "assets/vendor/three/OBJLoader.js",
  "assets/vendor/three/GLTFLoader.js",
  "assets/vendor/meshoptimizer/meshopt_decoder.mjs",
  "assets/vendor/utils/BufferGeometryUtils.js",
  "assets/models/kadazan-dusun/Shaded/base-fast.obj",
  "assets/models/kadazan-dusun/Shaded/shaded-fast.webp",
  "assets/models/murut-attire/murut-attire-fast.glb"
];

const warmModelCache = () => {
  if (window.location.protocol === "file:") return;
  preloadUrls.forEach((url) => {
    fetch(url, { cache: "force-cache" }).catch(() => {});
  });
};

if ("requestIdleCallback" in window) {
  requestIdleCallback(warmModelCache, { timeout: 1200 });
} else {
  window.setTimeout(warmModelCache, 400);
}
