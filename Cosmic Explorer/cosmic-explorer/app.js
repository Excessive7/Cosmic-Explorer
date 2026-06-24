// ============================================
// COSMIC EXPLORER - Main Application
// ============================================
import { PLANETS, EXPLORE_CATEGORIES, SPACE_NEWS, METEOR_SHOWERS, APOD_DATA, AI_RESPONSES } from './data.js';

// ============ LOADING SCREEN ============
class LoadingScreen {
  constructor() {
    this.el = document.getElementById('loading-screen');
    this.fill = this.el.querySelector('.loading-fill');
    this.percent = this.el.querySelector('.loading-percent');
    this.progress = 0;
  }
  async animate() {
    const steps = [10,25,40,55,70,82,91,97,100];
    for (const s of steps) {
      await this.to(s);
      await sleep(120 + Math.random() * 200);
    }
    await sleep(300);
    this.el.classList.add('fade-out');
    document.getElementById('app').classList.remove('hidden');
    await sleep(800);
    this.el.remove();
  }
  to(val) {
    return new Promise(r => {
      this.progress = val;
      this.fill.style.width = val + '%';
      this.percent.textContent = val + '%';
      setTimeout(r, 80);
    });
  }
}

// ============ STAR FIELD ============
class StarField {
  constructor() {
    this.canvas = document.getElementById('star-canvas');
    this.ctx = this.canvas.getContext('2d');
    this.stars = [];
    this.shootingStars = [];
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.initStars();
    this.animate();
  }
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  initStars() {
    this.stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      size: Math.random() * 2,
      speed: 0.02 + Math.random() * 0.08,
      opacity: Math.random(),
      twinkleSpeed: 0.005 + Math.random() * 0.02,
      twinkleDir: 1
    }));
  }
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Stars
    for (const s of this.stars) {
      s.opacity += s.twinkleSpeed * s.twinkleDir;
      if (s.opacity >= 1) { s.opacity = 1; s.twinkleDir = -1; }
      if (s.opacity <= 0.1) { s.opacity = 0.1; s.twinkleDir = 1; }
      this.ctx.beginPath();
      this.ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(200,210,255,${s.opacity})`;
      this.ctx.fill();
      s.y += s.speed;
      if (s.y > this.canvas.height) { s.y = 0; s.x = Math.random() * this.canvas.width; }
    }
    // Shooting stars
    if (Math.random() < 0.003) {
      this.shootingStars.push({
        x: Math.random() * this.canvas.width, y: 0,
        len: 60 + Math.random() * 80, speed: 8 + Math.random() * 6,
        angle: Math.PI / 4 + Math.random() * 0.3, opacity: 1
      });
    }
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const ss = this.shootingStars[i];
      const dx = Math.cos(ss.angle) * ss.speed;
      const dy = Math.sin(ss.angle) * ss.speed;
      ss.x += dx; ss.y += dy; ss.opacity -= 0.015;
      if (ss.opacity <= 0) { this.shootingStars.splice(i, 1); continue; }
      const grad = this.ctx.createLinearGradient(ss.x, ss.y, ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len);
      grad.addColorStop(0, `rgba(200,220,255,${ss.opacity})`);
      grad.addColorStop(1, 'transparent');
      this.ctx.beginPath();
      this.ctx.moveTo(ss.x, ss.y);
      this.ctx.lineTo(ss.x - Math.cos(ss.angle) * ss.len, ss.y - Math.sin(ss.angle) * ss.len);
      this.ctx.strokeStyle = grad; this.ctx.lineWidth = 1.5; this.ctx.stroke();
    }
    requestAnimationFrame(() => this.animate());
  }
}

// ============ SOLAR SYSTEM CANVAS ============
class SolarSystemCanvas {
  constructor() {
    this.canvas = document.getElementById('solar-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.time = 0;
    this.scale = 1;
    this.offsetX = 0; this.offsetY = 0;
    this.resize();
    this.setupTouch();
    window.addEventListener('resize', () => this.resize());
    this.animate();
  }
  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = 350;
    this.cx = this.canvas.width / 2;
    this.cy = this.canvas.height / 2;
  }
  setupTouch() {
    let lastDist = 0;
    this.canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.scale = Math.max(0.3, Math.min(3, this.scale - e.deltaY * 0.001));
    }, { passive: false });
    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        lastDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      }
    });
    this.canvas.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2) {
        const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        this.scale = Math.max(0.3, Math.min(3, this.scale * (dist / lastDist)));
        lastDist = dist;
        e.preventDefault();
      }
    }, { passive: false });
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      for (const p of PLANETS) {
        const angle = this.time * p.orbitSpeed;
        const px = this.cx + Math.cos(angle) * p.orbitRadius * this.scale;
        const py = this.cy + Math.sin(angle) * p.orbitRadius * 0.4 * this.scale;
        const s = Math.max(6, p.size * 10 * this.scale);
        if (Math.hypot(mx - px, my - py) < s + 8) {
          showPlanetDetail(p);
          break;
        }
      }
    });
  }
  animate() {
    this.time += 0.3;
    const { ctx, cx, cy, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Sun
    const sunR = 18 * this.scale;
    const sunGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, sunR * 3);
    sunGrad.addColorStop(0, '#fff7a0');
    sunGrad.addColorStop(0.3, '#ffd000');
    sunGrad.addColorStop(0.7, 'rgba(255,150,0,0.3)');
    sunGrad.addColorStop(1, 'transparent');
    ctx.beginPath(); ctx.arc(cx, cy, sunR * 3, 0, Math.PI * 2);
    ctx.fillStyle = sunGrad; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, sunR, 0, Math.PI * 2);
    ctx.fillStyle = '#ffe066'; ctx.fill();
    // Orbits & Planets
    for (const p of PLANETS) {
      const orbitRx = p.orbitRadius * this.scale;
      const orbitRy = p.orbitRadius * 0.4 * this.scale;
      // Orbit path
      ctx.beginPath(); ctx.ellipse(cx, cy, orbitRx, orbitRy, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(100,100,200,0.12)'; ctx.lineWidth = 1; ctx.stroke();
      // Planet position
      const angle = this.time * p.orbitSpeed;
      const px = cx + Math.cos(angle) * orbitRx;
      const py = cy + Math.sin(angle) * orbitRy;
      const pr = Math.max(4, p.size * 8 * this.scale);
      // Glow
      const glow = ctx.createRadialGradient(px, py, 0, px, py, pr * 2.5);
      glow.addColorStop(0, p.glowColor + '60');
      glow.addColorStop(1, 'transparent');
      ctx.beginPath(); ctx.arc(px, py, pr * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = glow; ctx.fill();
      // Planet
      const pGrad = ctx.createRadialGradient(px - pr * 0.3, py - pr * 0.3, 0, px, py, pr);
      pGrad.addColorStop(0, lightenColor(p.color, 40));
      pGrad.addColorStop(0.7, p.color);
      pGrad.addColorStop(1, darkenColor(p.color, 40));
      ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2);
      ctx.fillStyle = pGrad; ctx.fill();
      // Saturn rings
      if (p.id === 'saturn') {
        ctx.beginPath(); ctx.ellipse(px, py, pr * 2, pr * 0.5, -0.3, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(240,214,138,0.5)'; ctx.lineWidth = 2 * this.scale; ctx.stroke();
      }
      // Label
      if (this.scale > 0.5) {
        ctx.fillStyle = 'rgba(200,210,255,0.7)';
        ctx.font = `${Math.max(8, 9 * this.scale)}px "Space Grotesk"`;
        ctx.textAlign = 'center';
        ctx.fillText(p.name, px, py + pr + 12 * this.scale);
      }
    }
    requestAnimationFrame(() => this.animate());
  }
}

// ============ NAVIGATION ============
class Navigation {
  constructor() {
    this.navItems = document.querySelectorAll('.nav-item');
    this.pages = document.querySelectorAll('.page');
    this.currentPage = 'home';
    this.navItems.forEach(item => {
      item.addEventListener('click', () => this.goTo(item.dataset.page));
    });
    document.querySelectorAll('.see-all-btn').forEach(btn => {
      btn.addEventListener('click', () => this.goTo(btn.dataset.page));
    });
    document.getElementById('btn-start-explore')?.addEventListener('click', () => this.goTo('solarsystem'));
  }
  goTo(page) {
    if (page === this.currentPage) return;
    this.currentPage = page;
    this.navItems.forEach(n => n.classList.toggle('active', n.dataset.page === page));
    this.pages.forEach(p => {
      const isTarget = p.id === `page-${page}`;
      if (isTarget) {
        p.classList.add('active');
        p.querySelector('.page-scroll')?.scrollTo(0, 0);
      } else {
        p.classList.remove('active');
      }
    });
  }
}

// ============ AI CHAT ============
class AIChat {
  constructor() {
    this.panel = document.getElementById('ai-chat-panel');
    this.messages = document.getElementById('chat-messages');
    this.input = document.getElementById('chat-input');
    this.sendBtn = document.getElementById('chat-send');
    this.openBtn = document.getElementById('ai-chat-btn');
    this.closeBtn = document.getElementById('close-chat');
    this.isOpen = false;
    this.openBtn.addEventListener('click', () => this.toggle());
    this.closeBtn.addEventListener('click', () => this.toggle());
    this.sendBtn.addEventListener('click', () => this.send());
    this.input.addEventListener('keydown', (e) => { if (e.key === 'Enter') this.send(); });
    // Welcome message
    const greeting = AI_RESPONSES.greetings[Math.floor(Math.random() * AI_RESPONSES.greetings.length)];
    this.addMessage(greeting, 'bot');
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.panel.classList.toggle('hidden', !this.isOpen);
    this.openBtn.style.display = this.isOpen ? 'none' : 'flex';
    if (this.isOpen) this.input.focus();
  }
  send() {
    const text = this.input.value.trim();
    if (!text) return;
    this.addMessage(text, 'user');
    this.input.value = '';
    setTimeout(() => {
      const response = this.getResponse(text);
      this.addMessage(response, 'bot');
    }, 600 + Math.random() * 800);
  }
  getResponse(text) {
    const lower = text.toLowerCase();
    for (const [key, val] of Object.entries(AI_RESPONSES.responses)) {
      if (key !== 'default' && lower.includes(key)) return val;
    }
    // Check planet names
    for (const p of PLANETS) {
      if (lower.includes(p.name.toLowerCase()) || lower.includes(p.englishName.toLowerCase())) {
        return `${p.name} (${p.englishName}) - ${p.description} Çapı: ${p.details.diameter}, Sıcaklık: ${p.details.temperature}. 🪐`;
      }
    }
    return AI_RESPONSES.responses.default;
  }
  addMessage(text, type) {
    const div = document.createElement('div');
    div.className = `chat-msg ${type}`;
    div.textContent = text;
    this.messages.appendChild(div);
    this.messages.scrollTop = this.messages.scrollHeight;
  }
}

// ============ PLANET DETAIL ============
function showPlanetDetail(planet) {
  const overlay = document.getElementById('planet-info-overlay');
  const content = document.getElementById('planet-detail-content');
  const labels = { diameter: 'Çap', temperature: 'Sıcaklık', moons: 'Uydu', gravity: 'Yerçekimi', distanceFromSun: 'Güneşe Uzaklık', dayLength: 'Gün Uzunluğu', yearLength: 'Yıl Süresi' };
  
  content.innerHTML = `
    <div class="planet-detail-hero">
      <div class="planet-detail-sphere" style="background: radial-gradient(circle at 35% 35%, ${lightenColor(planet.color, 30)}, ${planet.color}, ${darkenColor(planet.color, 50)}); --glow: ${planet.glowColor};">
        <div class="planet-atmo" style="--glow: ${planet.glowColor};"></div>
      </div>
      <h2 class="planet-detail-name">${planet.name}</h2>
      <p class="planet-detail-english">${planet.englishName}</p>
      <p class="planet-detail-desc">${planet.description}</p>
      <div class="planet-detail-fun">💡 ${planet.funFact}</div>
    </div>
    <div class="detail-cards">
      ${Object.entries(labels).map(([key, label]) => `
        <div class="detail-card glass-card">
          <div class="detail-card-label">${label}</div>
          <div class="detail-card-value">${planet.details[key]}</div>
        </div>
      `).join('')}
    </div>
  `;
  overlay.classList.remove('hidden');
  document.getElementById('close-planet-detail').onclick = () => overlay.classList.add('hidden');
}

// ============ RENDERERS ============
function renderPlanetCarousel() {
  const container = document.getElementById('planet-carousel');
  container.innerHTML = PLANETS.map(p => `
    <div class="planet-card glass-card" data-planet="${p.id}" style="--planet-glow: ${p.glowColor}">
      <div class="planet-sphere" style="background: radial-gradient(circle at 35% 35%, ${lightenColor(p.color, 30)}, ${p.color}, ${darkenColor(p.color, 50)}); --planet-glow: ${p.glowColor};"></div>
      <div class="planet-card-name">${p.name}</div>
      <div class="planet-card-sub">${p.details.type}</div>
    </div>
  `).join('');
  container.querySelectorAll('.planet-card').forEach(card => {
    card.addEventListener('click', () => {
      const planet = PLANETS.find(p => p.id === card.dataset.planet);
      if (planet) showPlanetDetail(planet);
    });
  });
}

function renderPlanetGrid() {
  const container = document.getElementById('planet-list-grid');
  container.innerHTML = PLANETS.map(p => `
    <div class="planet-grid-item glass-card" data-planet="${p.id}">
      <div class="planet-grid-sphere" style="background: radial-gradient(circle at 35% 35%, ${lightenColor(p.color, 30)}, ${p.color}, ${darkenColor(p.color, 50)}); --glow: ${p.glowColor};"></div>
      <div class="planet-grid-name">${p.name}</div>
      <div class="planet-grid-type">${p.details.type}</div>
    </div>
  `).join('');
  container.querySelectorAll('.planet-grid-item').forEach(item => {
    item.addEventListener('click', () => {
      const planet = PLANETS.find(p => p.id === item.dataset.planet);
      if (planet) showPlanetDetail(planet);
    });
  });
}

function renderMeteors() {
  const container = document.getElementById('meteor-list');
  container.innerHTML = METEOR_SHOWERS.map(m => {
    let cls = '';
    if (m.intensity === 'Yüksek') cls = 'high';
    if (m.intensity === 'Çok Yüksek') cls = 'very-high';
    return `
    <div class="meteor-item">
      <div class="meteor-left">
        <span class="meteor-name">☄️ ${m.name}</span>
        <span class="meteor-date">${m.date}</span>
      </div>
      <div class="meteor-right">
        <span class="meteor-rate">${m.perHour}/saat</span>
        <span class="meteor-intensity ${cls}">${m.intensity}</span>
      </div>
    </div>`;
  }).join('');
}

function renderNews() {
  const colors = { nebula: '#6c3483', rocket: '#e74c3c', planet: '#27ae60', asteroid: '#d4a574', station: '#3498db' };
  const slider = document.getElementById('news-slider');
  const fullList = document.getElementById('news-full-list');
  
  slider.innerHTML = SPACE_NEWS.map(n => `
    <div class="news-card glass-card">
      <div class="news-image" style="background: linear-gradient(135deg, ${colors[n.image]}22, ${colors[n.image]}66);">
        <span class="news-cat">${n.category}</span>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:3rem;opacity:0.5;">🔭</div>
      </div>
      <div class="news-body">
        <h4>${n.title}</h4>
        <p>${n.summary}</p>
        <div class="news-date">${n.date}</div>
      </div>
    </div>
  `).join('');

  fullList.innerHTML = SPACE_NEWS.map(n => `
    <div class="news-full-card">
      <div class="news-full-thumb" style="background: linear-gradient(135deg, ${colors[n.image]}44, ${colors[n.image]}88);">
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:1.5rem;">🔭</div>
      </div>
      <div class="news-full-info">
        <h4>${n.title}</h4>
        <p>${n.summary}</p>
        <div class="news-date">${n.date}</div>
      </div>
    </div>
  `).join('');
}

function renderAPOD() {
  document.getElementById('apod-title').textContent = APOD_DATA.title;
  document.getElementById('apod-desc').textContent = APOD_DATA.description;
  document.getElementById('apod-credit').textContent = `📷 ${APOD_DATA.credit} • ${APOD_DATA.date}`;
}

function renderExplore() {
  const grid = document.getElementById('explore-grid');
  const detail = document.getElementById('explore-detail');
  
  grid.innerHTML = EXPLORE_CATEGORIES.map(c => `
    <div class="explore-card" data-cat="${c.id}">
      <div class="explore-card-bg" style="background: ${c.gradient};"></div>
      <div class="explore-card-content">
        <div class="explore-card-icon">${c.icon}</div>
        <div class="explore-card-title">${c.name}</div>
        <div class="explore-card-desc">${c.description}</div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.explore-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = EXPLORE_CATEGORIES.find(c => c.id === card.dataset.cat);
      if (!cat) return;
      const statEntries = Object.entries(cat.stats);
      const statLabels = { discovered: 'Keşfedilen', largest: 'En Büyüğü', nearest: 'En Yakını', perYear: 'Sıklık', brightness: 'Parlaklık', duration: 'Süre', inUniverse: 'Evrende', starCount: 'Yıldız Sayısı', age: 'Yaş', habitable: 'Yaşanabilir', official: 'Resmi', zodiac: 'Burç', oldest: 'En Eski' };
      detail.classList.remove('hidden');
      detail.innerHTML = `
        <h3>${cat.icon} ${cat.name}</h3>
        ${cat.facts.map(f => `<div class="explore-fact">${f}</div>`).join('')}
        <div class="explore-stats">
          ${statEntries.map(([k, v]) => `
            <div class="explore-stat-item">
              <div class="explore-stat-val">${v}</div>
              <div class="explore-stat-label">${statLabels[k] || k}</div>
            </div>
          `).join('')}
        </div>
      `;
      detail.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Toggle settings
function initToggles() {
  document.querySelectorAll('.toggle').forEach(t => {
    t.addEventListener('click', () => t.classList.toggle('on'));
  });
}

// ============ UTILITIES ============
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function lightenColor(hex, amt) {
  let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  r = Math.min(255, r + amt); g = Math.min(255, g + amt); b = Math.min(255, b + amt);
  return `rgb(${r},${g},${b})`;
}
function darkenColor(hex, amt) {
  let r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  r = Math.max(0, r - amt); g = Math.max(0, g - amt); b = Math.max(0, b - amt);
  return `rgb(${r},${g},${b})`;
}

// ============ INIT ============
async function init() {
  const loader = new LoadingScreen();
  await loader.animate();
  new StarField();
  renderPlanetCarousel();
  renderPlanetGrid();
  renderMeteors();
  renderNews();
  renderAPOD();
  renderExplore();
  new Navigation();
  new SolarSystemCanvas();
  new AIChat();
  initToggles();
}

init();
