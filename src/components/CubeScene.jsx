import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ACCENT = '#b692ff'; // site purple
const GRAY = '#232323';   // dark cubes

export default function CubeScene() {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch (err) {
      return undefined; // no WebGL: the rest of the section still works
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);

    // Studio reflections: bright soft panels baked into an environment map
    const pm = new THREE.PMREMGenerator(renderer);
    const env = new THREE.Scene();
    env.background = new THREE.Color(0x030304);
    [
      [7, 1.6, 0xffffff, 2.6, [3, 6, 4]],
      [2, 8, 0xffffff, 2.2, [-6, 2, 3]],
      [8, 2.5, ACCENT, 4.0, [0, -6, 2]],
      [2, 8, 0xffffff, 1.8, [6, 1, -3]],
    ].forEach(([w, h, col, power, pos]) => {
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(w, h),
        new THREE.MeshBasicMaterial({ color: new THREE.Color(col).multiplyScalar(power), side: THREE.DoubleSide })
      );
      m.position.set(...pos);
      m.lookAt(0, 0, 0);
      env.add(m);
    });
    const envTarget = pm.fromScene(env, 0.04);
    scene.environment = envTarget.texture;

    const key = new THREE.DirectionalLight(0xffffff, 0.55);
    key.position.set(3, 5, 4);
    const rim = new THREE.DirectionalLight(ACCENT, 1.6); // rich purple glow from below
    rim.position.set(0, -4, 2);
    scene.add(key, rim);

    // Rounded cube: subdivided box pushed onto a rounded shape, with analytic normals
    function roundedBox(size, radius, seg) {
      const g = new THREE.BoxGeometry(size, size, size, seg, seg, seg);
      const p = g.attributes.position;
      const n = g.attributes.normal;
      const h = size / 2 - radius;
      const v = new THREE.Vector3();
      const c = new THREE.Vector3();
      const d = new THREE.Vector3();
      const clamp = (x) => Math.max(-h, Math.min(h, x));
      for (let i = 0; i < p.count; i++) {
        v.fromBufferAttribute(p, i);
        c.set(clamp(v.x), clamp(v.y), clamp(v.z));
        d.copy(v).sub(c).normalize();
        v.copy(c).addScaledVector(d, radius);
        p.setXYZ(i, v.x, v.y, v.z);
        n.setXYZ(i, d.x, d.y, d.z);
      }
      return g;
    }
    const geo = roundedBox(1, 0.13, 24);

    const dark = new THREE.MeshPhysicalMaterial({ color: GRAY, roughness: 0.4, metalness: 0, clearcoat: 0.8, clearcoatRoughness: 0.08 });
    const accent = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(ACCENT),
      roughness: 0.22,
      metalness: 0.08,
      clearcoat: 0.5,
      clearcoatRoughness: 0.12,
      emissive: new THREE.Color(ACCENT),
      emissiveIntensity: 0.35,
    });
    const silver = new THREE.MeshPhysicalMaterial({ color: 0xd9d9e0, roughness: 0.28, metalness: 0.7, clearcoat: 0.6 });
    [dark, accent, silver].forEach((m) => {
      m.color.convertSRGBToLinear();
      if (m.emissive) m.emissive.convertSRGBToLinear();
    });

    // 2x2x2 = 8 big cubes: nearest corner is purple, one silver cube at the back
    const group = new THREE.Group();
    scene.add(group);
    const S = 2.1;
    const cubes = [];
    const rnd = () => Math.random() - 0.5;
    [-1, 1].forEach((x) => [-1, 1].forEach((y) => [-1, 1].forEach((z) => {
      const hero = x === 1 && y === 1 && z === 1;
      const sil = x === 1 && y === 1 && z === -1;
      const mesh = new THREE.Mesh(geo, hero ? accent : sil ? silver : dark);
      mesh.scale.setScalar(S);
      cubes.push({
        mesh,
        base: new THREE.Vector3(x, y, z).multiplyScalar(S * 0.52),
        k: hero ? 0.55 : 1, // the purple cube moves less, so it stays the focus
        drift: new THREE.Vector3(rnd(), rnd(), rnd()).multiplyScalar(1.3),
        spin: new THREE.Vector3(rnd(), rnd(), rnd()).multiplyScalar(1.5),
      });
      group.add(mesh);
    })));

    const ease = (t) => { const x = Math.max(0, Math.min(1, t)); return x * x * (3 - 2 * x); };
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let mx = 0; let my = 0; let tx = 0; let ty = 0; let open = 0;
    let isHovered = false;
    let scrollWant = 0;

    // Hover (mouse) opens the cube, leaving closes it; tap toggles on touch screens
    const onMove = (e) => { tx = (e.clientX / window.innerWidth - 0.5) * 2; ty = (e.clientY / window.innerHeight - 0.5) * 2; };
    const onEnter = (e) => { if (e.pointerType === 'mouse') isHovered = true; };
    const onLeave = (e) => { if (e.pointerType === 'mouse') isHovered = false; };
    const onDown = (e) => { if (e.pointerType !== 'mouse') isHovered = !isHovered; };
    window.addEventListener('pointermove', onMove);
    stage.addEventListener('pointerenter', onEnter);
    stage.addEventListener('pointerleave', onLeave);
    stage.addEventListener('pointerdown', onDown);

    // Scroll tracking: opens as user scrolls down towards/into section, closes as they scroll back up
    const updateScroll = () => {
      if (!stage) return;
      const rect = stage.getBoundingClientRect();
      const vh = window.innerHeight;

      if (rect.top >= vh || rect.bottom <= 0) {
        scrollWant = 0;
        return;
      }
      // Linear entry progression: starts at 95% vh, fully open by 35% vh
      const startY = vh * 0.95;
      const endY = vh * 0.35;
      const p = (startY - rect.top) / (startY - endY);
      scrollWant = Math.max(0, Math.min(1, p));
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    function frame(t) {
      updateScroll();
      const want = isHovered ? 1 : scrollWant;
      open += (want - open) * 0.08;
      const e = ease(open);
      mx += (tx - mx) * 0.05;
      my += (ty - my) * 0.05;
      cubes.forEach((c) => {
        const k = e * c.k;
        c.mesh.position.copy(c.base).multiplyScalar(1 + k * 0.8).addScaledVector(c.drift, k * 1.4);
        c.mesh.rotation.set(c.spin.x * k, c.spin.y * k, c.spin.z * k);
      });
      group.rotation.x = 0.42 + (still ? 0 : my * 0.12);
      group.rotation.y = -0.62 + (still ? 0 : Math.sin(t * 0.35) * 0.18 + mx * 0.3);
      renderer.render(scene, camera);
    }

    function fit() {
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.position.set(0, 0, w / h < 1 ? 16 / Math.max(w / h, 0.6) : 16);
      camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(fit);
    ro.observe(stage);
    fit();

    let raf = 0;
    const t0 = performance.now();
    const loop = (now) => { frame((now - t0) / 1000); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('pointermove', onMove);
      stage.removeEventListener('pointerenter', onEnter);
      stage.removeEventListener('pointerleave', onLeave);
      stage.removeEventListener('pointerdown', onDown);
      geo.dispose();
      [dark, accent, silver].forEach((m) => m.dispose());
      envTarget.dispose();
      pm.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={stageRef} style={{ position: 'relative', width: '100%', height: '100%', minHeight: 380 }}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  );
}
