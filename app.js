/* ═══════════════════════════════════════════════
   NIJI BUSINESS HUB — app.js
   ═══════════════════════════════════════════════ */

// ── DATE ──────────────────────────────────────
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const _d = new Date();
document.getElementById('top-date').textContent =
  `${_d.getDate()} ${MONTHS[_d.getMonth()]} ${_d.getFullYear()}`;

// ── CATEGORY DATA ─────────────────────────────
const CATEGORIES = [
  { icon:'🎨', name:'Design Hub', docs:[
    { icon:'📘', name:'Brand Document',   url:'' },
    { icon:'🎨', name:'Brand Guidelines', url:'' },
    { icon:'📸', name:'Photo Shot List',  url:'' },
    { icon:'🏷️', name:'Story Card',       url:'' },
    { icon:'📐', name:'Packaging Specs',  url:'' },
    { icon:'✍️', name:'Product Story',    url:'' },
  ]},
  { icon:'🛠️', name:'Production & Ops', docs:[
    { icon:'🔬', name:'Prototype Journal',url:'https://nijistore.github.io/prototype-journal/' },
    { icon:'📋', name:'Project Plan',     url:'' },
    { icon:'📅', name:'Release Planner',  url:'' },
    { icon:'📦', name:'Packaging Specs',  url:'' },
    { icon:'⏱️', name:'Time Tracker',     url:'' },
    { icon:'🧵', name:'Making Guide',     url:'' },
  ]},
  { icon:'📦', name:'Inventory & Products', docs:[
    { icon:'🧲', name:'Material Log',     url:'' },
    { icon:'📊', name:'Inventory Tracker',url:'' },
    { icon:'🔬', name:'Prototype Journal',url:'' },
    { icon:'📝', name:'Product Story',    url:'' },
    { icon:'🏷️', name:'Hang Tag Spec',    url:'' },
    { icon:'📋', name:'Collection Names', url:'' },
  ]},
  { icon:'🛒', name:'Sales & E-commerce', docs:[
    { icon:'📝', name:'Product Story',      url:'' },
    { icon:'💰', name:'Pricing Worksheet',  url:'' },
    { icon:'🤝', name:'Wholesale One-Pager',url:'' },
    { icon:'📊', name:'Inventory Tracker',  url:'' },
    { icon:'🎯', name:'Market Debrief',     url:'' },
    { icon:'📣', name:'Social Captions',    url:'' },
  ]},
  { icon:'🚚', name:'Delivery & Fulfillment', docs:[
    { icon:'📦', name:'Packaging Specs',  url:'' },
    { icon:'🏷️', name:'Brand Story Card', url:'' },
    { icon:'📋', name:'Packing Checklist',url:'' },
    { icon:'🤝', name:'Wholesale Terms',  url:'' },
    { icon:'📮', name:'Shipping Guide',   url:'' },
    { icon:'🔁', name:'Returns Policy',   url:'' },
  ]},
  { icon:'📣', name:'Content & Presence', docs:[
    { icon:'📅', name:'Content Calendar',url:'' },
    { icon:'📸', name:'Photo Shot List', url:'' },
    { icon:'📝', name:'Product Story',   url:'' },
    { icon:'🏷️', name:'Brand Story Card',url:'' },
    { icon:'🌐', name:'Link-in-Bio Page',url:'' },
    { icon:'✉️', name:'Email Sequence',  url:'' },
  ]},
  { icon:'💎', name:'Brand Identity', docs:[
    { icon:'📘', name:'Brand Document',  url:'' },
    { icon:'🎨', name:'Brand Guidelines',url:'' },
    { icon:'📖', name:'Brand Story Card',url:'' },
    { icon:'🏷️', name:'Hang Tag',        url:'' },
    { icon:'📐', name:'Logo Usage',      url:'' },
    { icon:'🗺️', name:'Ecosystem Map',   url:'' },
  ]},
  { icon:'🤝', name:'Customer & Community', docs:[
    { icon:'💌', name:'String Agreement',    url:'' },
    { icon:'📝', name:'Commission Brief',    url:'' },
    { icon:'🤝', name:'Wholesale Pager',     url:'' },
    { icon:'💌', name:'Thank You Card',      url:'' },
    { icon:'🎸', name:'Musician Onboarding', url:'' },
    { icon:'💬', name:'Community Guide',     url:'' },
  ]},
  { icon:'📊', name:'Finance & Pricing', docs:[
    { icon:'💰', name:'Pricing Worksheet',  url:'' },
    { icon:'📊', name:'Financial Dashboard',url:'' },
    { icon:'🧾', name:'Expense Log',        url:'' },
    { icon:'🏷️', name:'Pricing Formula',    url:'' },
    { icon:'📈', name:'Revenue Tracker',    url:'' },
    { icon:'💳', name:'Payment Guide',      url:'' },
  ]},
  { icon:'🧠', name:'Strategy & Growth', docs:[
    { icon:'📋', name:'Project Plan',     url:'' },
    { icon:'📅', name:'Release Planner',  url:'' },
    { icon:'🎯', name:'Market Debrief',   url:'' },
    { icon:'📈', name:'Growth Targets',   url:'' },
    { icon:'🗺️', name:'Audience Map',     url:'' },
    { icon:'🧭', name:'Vision Document',  url:'' },
  ]},
  { icon:'🧩', name:'Systems & Org', docs:[
    { icon:'🧲', name:'Material Log',     url:'' },
    { icon:'📊', name:'Inventory Tracker',url:'' },
    { icon:'📸', name:'Photo Shot List',  url:'' },
    { icon:'📅', name:'Release Planner',  url:'' },
    { icon:'📝', name:'Commission Brief', url:'' },
    { icon:'🗂️', name:'Hub Index',        url:'' },
  ]},
  { icon:'🌿', name:'Energy & Flow', docs:[
    { icon:'🧘', name:'Maker Rhythm',       url:'' },
    { icon:'📓', name:'Reflection Journal', url:'' },
    { icon:'🌿', name:'Rest Protocol',      url:'' },
    { icon:'⚡', name:'Energy Map',         url:'' },
    { icon:'🎵', name:'LawraMúsica',        url:'' },
    { icon:'🐱', name:'CoolCatzz',          url:'' },
	{ icon:'🤦‍♂️', name:'test',          url:'' },
  ]},
];

// ── HEX DEFINITION ────────────────────────────
// ring: 'center' | 'inner' | 'outer'
// catIndex links to CATEGORIES array; -1 = no popup
const HEXES = [
  // center
  { id:'center', ring:'center', catIndex:-1 },

  // inner ring — 6 hexes (indices 0–5 from inner categories)
  { id:'i0', ring:'inner', catIndex:6  }, // Brand Identity
  { id:'i1', ring:'inner', catIndex:7  }, // Customer & Community
  { id:'i2', ring:'inner', catIndex:8  }, // Finance & Pricing
  { id:'i3', ring:'inner', catIndex:9  }, // Strategy & Growth
  { id:'i4', ring:'inner', catIndex:10 }, // Systems & Org
  { id:'i5', ring:'inner', catIndex:11 }, // Energy & Flow

  // outer ring — 6 hexes (indices 0–5 from outer categories)
  { id:'o0', ring:'outer', catIndex:0 }, // Design Hub
  { id:'o1', ring:'outer', catIndex:1 }, // Production & Ops
  { id:'o2', ring:'outer', catIndex:2 }, // Inventory & Products
  { id:'o3', ring:'outer', catIndex:3 }, // Sales & E-commerce
  { id:'o4', ring:'outer', catIndex:4 }, // Delivery & Fulfillment
  { id:'o5', ring:'outer', catIndex:5 }, // Content & Presence
];

// ── LAYOUT CONFIG ─────────────────────────────
const isMobile = () => window.innerWidth <= 640;

function getLayout() {
  const m = isMobile();
  return {
    clusterSize: m ? 380 : 560,
    outerR:  m ? 128 : 188,
    innerR:  m ?  68 : 102,
    outerW:  m ?  58 :  88,
    innerW:  m ?  50 :  76,
    centerW: m ?  72 : 110,
    popupClusterSize: m ? 340 : 420,
    popupCenterW:     m ?  88 : 110,
    popupSubW:        m ?  64 :  80,
    popupSubR:        m ?  88 : 110,
  };
}

// ── SVG HEX POLYGON ───────────────────────────
function hexPolygon(w, opts = {}) {
  const h = w * 1.1547;
  const pts = [
    [w*.5, 2], [w-2, h*.25], [w-2, h*.75],
    [w*.5, h-2], [2, h*.75], [2, h*.25]
  ].map(p => p.join(',')).join(' ');
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.setAttribute('fill', 'none');
  const poly = document.createElementNS('http://www.w3.org/2000/svg','polygon');
  poly.setAttribute('points', pts);
  poly.setAttribute('fill',   opts.fill   || 'rgba(139,111,71,.18)');
  poly.setAttribute('stroke', opts.stroke || 'rgba(201,185,154,.3)');
  poly.setAttribute('stroke-width', opts.sw || '1');
  if (opts.inner) {
    const poly2 = poly.cloneNode();
    const pts2 = [
      [w*.5, 8], [w-8, h*.27], [w-8, h*.73],
      [w*.5, h-8], [8, h*.73], [8, h*.27]
    ].map(p => p.join(',')).join(' ');
    poly2.setAttribute('points', pts2);
    poly2.setAttribute('fill',   opts.innerFill   || 'rgba(184,150,12,.06)');
    poly2.setAttribute('stroke', opts.innerStroke || 'rgba(184,150,12,.3)');
    poly2.setAttribute('stroke-width', '.5');
    svg.appendChild(poly);
    svg.appendChild(poly2);
  } else {
    svg.appendChild(poly);
  }
  return { svg, poly };
}

// ── SPRING ────────────────────────────────────
function makeSpring(stiffness = 0.12, damping = 0.75) {
  return { x:0, y:0, vx:0, vy:0, tx:0, ty:0, stiffness, damping,
    tick() {
      this.vx += (this.tx - this.x) * this.stiffness;
      this.vy += (this.ty - this.y) * this.stiffness;
      this.vx *= this.damping;
      this.vy *= this.damping;
      this.x  += this.vx;
      this.y  += this.vy;
    }
  };
}

function makeScaleSpring(stiffness = 0.18, damping = 0.72) {
  return { s:1, v:0, t:1, stiffness, damping,
    tick() {
      this.v += (this.t - this.s) * this.stiffness;
      this.v *= this.damping;
      this.s += this.v;
    }
  };
}

// ── STATE ─────────────────────────────────────
const mouse = { x: window.innerWidth/2, y: window.innerHeight/2, vx:0, vy:0 };
const clusterFloat = { ox:0, oy:0, t:0 };
const hexNodes = []; // { el, bx, by, spring, scaleSpr, baseScale, ring }
const popupHexNodes = []; // { el, spring, scaleSpr }
let popupOpen = false;
let animFrameId;

// ── CLUSTER BUILD ─────────────────────────────
function buildCluster() {
  const cluster = document.getElementById('cluster');
  cluster.innerHTML = '';
  hexNodes.length = 0;

  const L = getLayout();
  const cx = L.clusterSize / 2;
  const cy = L.clusterSize / 2;

  cluster.style.width  = L.clusterSize + 'px';
  cluster.style.height = L.clusterSize + 'px';

  // connection lines SVG
  const lineSvg = document.createElementNS('http://www.w3.org/2000/svg','svg');
  lineSvg.setAttribute('class','connections');
  lineSvg.setAttribute('viewBox', `0 0 ${L.clusterSize} ${L.clusterSize}`);
  lineSvg.setAttribute('fill','none');

  // rings
  [[L.outerR,'rgba(255,255,255,.03)','2 6'],[L.innerR,'rgba(184,150,12,.05)','3 4']].forEach(([r,stroke,dash]) => {
    const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',cx); c.setAttribute('cy',cy); c.setAttribute('r',r);
    c.setAttribute('stroke',stroke); c.setAttribute('stroke-width','1');
    c.setAttribute('stroke-dasharray',dash); c.setAttribute('fill','none');
    lineSvg.appendChild(c);
  });

  // spokes: outer ring to center
  const outerHexes = HEXES.filter(h => h.ring === 'outer');
  outerHexes.forEach((_,i) => {
    const a = (i / outerHexes.length) * Math.PI * 2 - Math.PI/2;
    const x1 = cx + Math.cos(a) * L.innerR;
    const y1 = cy + Math.sin(a) * L.innerR;
    const x2 = cx + Math.cos(a) * L.outerR;
    const y2 = cy + Math.sin(a) * L.outerR;
    const line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1); line.setAttribute('y1',y1);
    line.setAttribute('x2',x2); line.setAttribute('y2',y2);
    line.setAttribute('stroke','rgba(184,150,12,.08)'); line.setAttribute('stroke-width','1');
    lineSvg.appendChild(line);
  });

  // pulse rings
  [0, .8].forEach(delay => {
    const c = document.createElementNS('http://www.w3.org/2000/svg','circle');
    c.setAttribute('cx',cx); c.setAttribute('cy',cy); c.setAttribute('r','58');
    c.setAttribute('stroke','rgba(184,150,12,.3)'); c.setAttribute('stroke-width','.5');
    c.setAttribute('fill','none');
    c.setAttribute('class', delay === 0 ? 'pulse-ring' : 'pulse-ring-2');
    lineSvg.appendChild(c);
  });

  cluster.appendChild(lineSvg);

  // build each hex
  HEXES.forEach((def, idx) => {
    const isCenter = def.ring === 'center';
    const isInner  = def.ring === 'inner';
    const isOuter  = def.ring === 'outer';

    const w = isCenter ? L.centerW : isInner ? L.innerW : L.outerW;
    const h = w * 1.1547;

    // position
    let bx, by;
    if (isCenter) {
      bx = cx; by = cy;
    } else {
      const ring    = HEXES.filter(h2 => h2.ring === def.ring);
      const ringIdx = ring.indexOf(def);
      const total   = ring.length;
      const r       = isInner ? L.innerR : L.outerR;
      const a       = (ringIdx / total) * Math.PI * 2 - Math.PI/2;
      bx = cx + Math.cos(a) * r;
      by = cy + Math.sin(a) * r;
    }

    const el = document.createElement('div');
    el.className = 'hex' + (isCenter ? ' hex-center' : '');
    el.style.cssText = `width:${w}px;height:${h}px;left:${bx}px;top:${by}px;transform:translate(-50%,-50%)`;

    // SVG shape
    let svgEl;
    if (isCenter) {
      const outer = hexPolygon(w, {
        fill:'rgba(184,150,12,.12)', stroke:'#b8960c', sw:'1.2', inner:true,
        innerFill:'rgba(184,150,12,.06)', innerStroke:'rgba(184,150,12,.3)'
      });
      svgEl = outer.svg;
    } else {
      const fill   = isInner ? 'rgba(184,150,12,.14)' : 'rgba(139,111,71,.18)';
      const stroke = isInner ? 'rgba(184,150,12,.4)'  : 'rgba(201,185,154,.3)';
      const { svg } = hexPolygon(w, { fill, stroke });
      svgEl = svg;
    }
    el.appendChild(svgEl);

    // content
    const content = document.createElement('div');
    content.className = 'hex-content';

    if (isCenter) {
      const brand = document.createElement('div');
      brand.className = 'center-brand'; brand.textContent = 'Niji';
      const kanji = document.createElement('div');
      kanji.className = 'center-kanji'; kanji.textContent = '虹 · Hub';
      content.appendChild(brand);
      content.appendChild(kanji);
    } else {
      const cat = CATEGORIES[def.catIndex];
      const icon = document.createElement('div');
      icon.className = 'hex-icon';
      icon.style.fontSize = isInner ? '18px' : '22px';
      icon.textContent = cat.icon;
      content.appendChild(icon);

      const label = document.createElement('div');
      label.className = 'hex-label';
      label.textContent = cat.name;
      el.appendChild(label);
    }
    el.appendChild(content);

    // click
    if (!isCenter && def.catIndex >= 0) {
      el.onclick = () => openPopup(def.catIndex);
    }

    cluster.appendChild(el);

    // physics state
    const spring    = makeSpring(isCenter ? 0 : 0.1, 0.78);
    const scaleSpr  = makeScaleSpring();
    const baseScale = 1;

    // hover scale spring
    if (!isCenter) {
      el.addEventListener('mouseenter', () => { scaleSpr.t = 1.12; });
      el.addEventListener('mouseleave', () => { scaleSpr.t = 1; });
      el.addEventListener('mousedown',  () => { scaleSpr.t = 0.96; });
      el.addEventListener('mouseup',    () => { scaleSpr.t = 1.12; });
    }

    hexNodes.push({ el, bx, by, spring, scaleSpr, baseScale, ring: def.ring, w, h });
  });
}

// ── POPUP BUILD ───────────────────────────────
function buildPopup(catIndex) {
  const container = document.getElementById('popup-cluster');
  container.innerHTML = '';
  popupHexNodes.length = 0;

  const L = getLayout();
  const cat = CATEGORIES[catIndex];
  const cx = L.popupClusterSize / 2;
  const cy = L.popupClusterSize / 2;

  container.style.width  = L.popupClusterSize + 'px';
  container.style.height = L.popupClusterSize + 'px';

  // center
  const w0 = L.popupCenterW, h0 = w0 * 1.1547;
  const centerEl = document.createElement('div');
  centerEl.className = 'popup-center';
  centerEl.style.cssText = `width:${w0}px;height:${h0}px;left:${cx}px;top:${cy}px;transform:translate(-50%,-50%)`;
  const { svg: cSvg } = hexPolygon(w0, { fill:'rgba(184,150,12,.15)', stroke:'#b8960c', sw:'1.2' });
  centerEl.appendChild(cSvg);
  const pIcon = document.createElement('div'); pIcon.className='popup-icon'; pIcon.textContent = cat.icon;
  const pName = document.createElement('div'); pName.className='popup-cat-name'; pName.textContent = cat.name;
  centerEl.appendChild(pIcon); centerEl.appendChild(pName);
  container.appendChild(centerEl);

  // 6 sub hexes
  cat.docs.forEach((doc, i) => {
    const a  = (i / 6) * Math.PI * 2 - Math.PI/2;
    const bx = cx + Math.cos(a) * L.popupSubR;
    const by = cy + Math.sin(a) * L.popupSubR;
    const sw = L.popupSubW, sh = sw * 1.1547;

    const el = document.createElement('div');
    el.className = 'popup-hex';
    el.style.cssText = `width:${sw}px;height:${sh}px;left:${bx}px;top:${by}px;transform:translate(-50%,-50%)`;

    const fill   = doc.url ? 'rgba(184,150,12,.2)'  : 'rgba(139,111,71,.2)';
    const stroke = doc.url ? 'rgba(184,150,12,.5)'  : 'rgba(201,185,154,.35)';
    const { svg: subSvg, poly } = hexPolygon(sw, { fill, stroke });
    el.appendChild(subSvg);

    const hc = document.createElement('div'); hc.className='popup-hex-content';
    const pi = document.createElement('div'); pi.className='ph-icon'; pi.textContent = doc.icon;
    const pn = document.createElement('div'); pn.className='ph-name'; pn.textContent = doc.name;
    hc.appendChild(pi); hc.appendChild(pn);
    el.appendChild(hc);

    el.onclick = () => openDoc(catIndex, i, poly);

    container.appendChild(el);

    const spring   = makeSpring(0.14, 0.74);
    const scaleSpr = makeScaleSpring(0.2, 0.72);
    scaleSpr.s = scaleSpr.t = 0; // start collapsed

    el.addEventListener('mouseenter', () => { scaleSpr.t = 1.1; });
    el.addEventListener('mouseleave', () => { scaleSpr.t = 1; });
    el.addEventListener('mousedown',  () => { scaleSpr.t = 0.95; });
    el.addEventListener('mouseup',    () => { scaleSpr.t = 1.1; });

    popupHexNodes.push({ el, bx, by, spring, scaleSpr });
  });
}

// ── POPUP OPEN / CLOSE ────────────────────────
const popupOverlay = document.getElementById('popup-overlay');
const popupClose   = document.getElementById('popup-close');

function openPopup(catIndex) {
  buildPopup(catIndex);
  popupOverlay.classList.add('open');
  popupOpen = true;
  // spring-in each sub hex
  popupHexNodes.forEach((n, i) => {
    setTimeout(() => { n.scaleSpr.t = 1; }, i * 35);
  });
}

function closePopup() {
  popupOverlay.classList.remove('open');
  popupOpen = false;
}

popupClose.onclick = closePopup;
popupOverlay.addEventListener('click', e => { if (e.target === popupOverlay) closePopup(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });

function openDoc(catIndex, docIndex, poly) {
  const doc = CATEGORIES[catIndex].docs[docIndex];
  if (doc.url) {
	console.log("Clicked doc ${doc.name} (with URL: ${doc.url})");
    window.open(doc.url, '_blank');
  } else {
    const orig = poly.getAttribute('fill');
    poly.setAttribute('fill','rgba(184,150,12,.45)');
    setTimeout(() => poly.setAttribute('fill', orig), 300);
	console.log("Clicked doc ${doc.name} (with no URL: ${doc.url})");
  }
}

// ── MOUSE TRACKING ────────────────────────────
let prevMx = mouse.x, prevMy = mouse.y;
window.addEventListener('mousemove', e => {
  mouse.vx = e.clientX - prevMx;
  mouse.vy = e.clientY - prevMy;
  prevMx = mouse.x; prevMy = mouse.y;
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// ── CLUSTER RECT (for relative coords) ────────
function clusterRect() {
  return document.getElementById('cluster').getBoundingClientRect();
}

// ── MAIN ANIMATION LOOP ───────────────────────
let t = 0;
function animate() {
  animFrameId = requestAnimationFrame(animate);
  t += 0.012;

  // floating cluster
  clusterFloat.ox = Math.sin(t * 0.7) * 4 + Math.sin(t * 1.1) * 2;
  clusterFloat.oy = Math.cos(t * 0.5) * 3 + Math.cos(t * 0.9) * 2;
  const cluster = document.getElementById('cluster');
  cluster.style.transform = `translate(${clusterFloat.ox}px,${clusterFloat.oy}px)`;

  const rect = clusterRect();

  // update main hexes
  hexNodes.forEach((n, i) => {
    if (n.ring === 'center') {
      n.spring.tick(); n.scaleSpr.tick();
      n.el.style.transform = `translate(-50%,-50%) translate(${n.spring.x}px,${n.spring.y}px) scale(${n.scaleSpr.s})`;
      return;
    }

    // absolute position of this hex on screen
    const absX = rect.left + n.bx;
    const absY = rect.top  + n.by;
    const dx = mouse.x - absX;
    const dy = mouse.y - absY;
    const dist = Math.sqrt(dx*dx + dy*dy) || 1;

    // magnetic pull
    const magRange = 160, magMax = 8;
    let mx = 0, my = 0;
    if (dist < magRange) {
      const force = (1 - dist / magRange) * magMax;
      mx = (dx / dist) * force;
      my = (dy / dist) * force;
    }

    // chain: nearby hexes pushed away
    let chainX = 0, chainY = 0;
    hexNodes.forEach((other, j) => {
      if (j === i || other.ring === 'center') return;
      const ox = rect.left + other.bx, oy = rect.top + other.by;
      const odx = mouse.x - ox, ody = mouse.y - oy;
      const od = Math.sqrt(odx*odx + ody*ody) || 1;
      if (od < 120) {
        const influence = (1 - od/120) * 5;
        const fromOther = { x: n.bx - other.bx, y: n.by - other.by };
        const fo = Math.sqrt(fromOther.x**2 + fromOther.y**2) || 1;
        chainX += (fromOther.x / fo) * influence;
        chainY += (fromOther.y / fo) * influence;
      }
    });

    // inertia from mouse velocity
    const inertia = 0.06;
    const ix = mouse.vx * inertia * (1 - Math.min(dist/300,1));
    const iy = mouse.vy * inertia * (1 - Math.min(dist/300,1));

    n.spring.tx = mx + chainX + ix;
    n.spring.ty = my + chainY + iy;
    n.spring.tick();
    n.scaleSpr.tick();

    n.el.style.transform =
      `translate(-50%,-50%) translate(${n.spring.x}px,${n.spring.y}px) scale(${n.scaleSpr.s})`;
  });

  // update popup hexes
  if (popupOpen) {
    const pCluster = document.getElementById('popup-cluster');
    const pr = pCluster.getBoundingClientRect();

    popupHexNodes.forEach(n => {
      const absX = pr.left + n.bx;
      const absY = pr.top  + n.by;
      const dx = mouse.x - absX;
      const dy = mouse.y - absY;
      const dist = Math.sqrt(dx*dx + dy*dy) || 1;
      const magRange = 100, magMax = 6;
      let mx = 0, my = 0;
      if (dist < magRange) {
        const f = (1 - dist/magRange) * magMax;
        mx = (dx/dist)*f; my = (dy/dist)*f;
      }
      n.spring.tx = mx; n.spring.ty = my;
      n.spring.tick(); n.scaleSpr.tick();
      n.el.style.transform =
        `translate(-50%,-50%) translate(${n.spring.x}px,${n.spring.y}px) scale(${n.scaleSpr.s})`;
    });
  }
}

// ── INIT ──────────────────────────────────────
buildCluster();
animate();

// rebuild on resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(buildCluster, 150);
});