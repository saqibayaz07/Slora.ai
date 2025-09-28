// vantaBirds.js
export function initVanta(el) {
  if (!window.VANTA || !window.VANTA.BIRDS) {
    console.error("⚠️ Vanta.js (BIRDS) not loaded. Check your CDN scripts in index.html");
    return null;
  }

  return window.VANTA.BIRDS({
    el: el,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x0,
    color1: 0xd0707,
    backgroundAlpha: 0.85,
  });
}
