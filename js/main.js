/* ==========================================================================
   THE INFINITY KNOWLEDGE LIBRARY — MAIN SCRIPT
   ========================================================================== */
(function(){
  "use strict";

  const D = LIBRARY_DATA;
  const topicById = id => D.topics.find(t => t.id === id);

  /* ---------------------------------------------------------------------
     THEME TOGGLE
     --------------------------------------------------------------------- */
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  function setTheme(theme){
    body.setAttribute('data-theme', theme);
    themeToggle.innerHTML = theme === 'dark'
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
  }
  themeToggle.addEventListener('click', () => {
    setTheme(body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });

  /* ---------------------------------------------------------------------
     NAV TOGGLE (mobile)
     --------------------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
  }));

  /* ---------------------------------------------------------------------
     CONSTELLATION CANVAS (lightweight ambient background)
     --------------------------------------------------------------------- */
  (function constellation(){
    const canvas = document.getElementById('constellation');
    const ctx = canvas.getContext('2d');
    let w, h, points;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = Math.max(window.innerHeight, document.body.scrollHeight * 0.4);
      const count = Math.min(70, Math.floor((w * h) / 26000));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15, vy: (Math.random() - 0.5) * 0.15
      }));
    }

    function tick(){
      ctx.clearRect(0,0,w,h);
      const isDark = body.getAttribute('data-theme') === 'dark';
      ctx.fillStyle = isDark ? 'rgba(167,139,250,0.7)' : 'rgba(122,102,204,0.35)';
      ctx.strokeStyle = isDark ? 'rgba(167,139,250,0.12)' : 'rgba(122,102,204,0.10)';

      points.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > w) p.vx *= -1;
        if(p.y < 0 || p.y > h) p.vy *= -1;
      });

      for(let i=0;i<points.length;i++){
        for(let j=i+1;j<points.length;j++){
          const dx = points[i].x - points[j].x, dy = points[i].y - points[j].y;
          const dist = Math.sqrt(dx*dx+dy*dy);
          if(dist < 140){
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 1.6, 0, Math.PI*2);
        ctx.fill();
      }
      if(!reduced) requestAnimationFrame(tick);
    }

    window.addEventListener('resize', resize);
    resize();
    tick();
  })();

  /* ---------------------------------------------------------------------
     HERO TYPED EFFECT (self-contained, no external dependency)
     --------------------------------------------------------------------- */
  (function typedEffect(){
    const el = document.getElementById('typedTarget');
    const words = D.meta.typedStrings;
    let wIndex = 0, cIndex = 0, deleting = false;

    function step(){
      const word = words[wIndex];
      if(!deleting){
        cIndex++;
        el.textContent = word.slice(0, cIndex);
        if(cIndex === word.length){ deleting = true; setTimeout(step, 1400); return; }
      } else {
        cIndex--;
        el.textContent = word.slice(0, cIndex);
        if(cIndex === 0){ deleting = false; wIndex = (wIndex+1) % words.length; }
      }
      setTimeout(step, deleting ? 45 : 85);
    }
    step();
  })();

  /* ---------------------------------------------------------------------
     REPOSITORY STATISTICS — animated counters
     --------------------------------------------------------------------- */
  (function renderStats(){
    const grid = document.getElementById('statsGrid');
    grid.innerHTML = D.stats.map((s,i) => `
      <div class="stat-item" data-reveal style="transition-delay:${i*80}ms">
        <div class="stat-value" data-target="${s.value}" data-suffix="${s.suffix}">0${s.suffix}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');

    const counters = grid.querySelectorAll('.stat-value');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          animateCount(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => observer.observe(c));

    function animateCount(el){
      const target = parseInt(el.dataset.target, 10);
      const suffix = el.dataset.suffix;
      const duration = 1400;
      const start = performance.now();
      function frame(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target) + suffix;
        if(progress < 1) requestAnimationFrame(frame);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(frame);
    }
  })();

  /* ---------------------------------------------------------------------
     EVOLUTION TRACK
     --------------------------------------------------------------------- */
  (function renderEvolution(){
    const track = document.getElementById('evolutionTrack');
    track.innerHTML = D.evolutionChain.map((id, i) => {
      const t = topicById(id);
      return `
        <div class="evo-node" data-reveal style="transition-delay:${i*60}ms" data-id="${t.id}">
          <div class="evo-node-index">${String(i+1).padStart(2,'0')} / ${t.code}</div>
          <div class="evo-node-title">${t.title}</div>
          <div class="evo-node-tag">${t.analogy}</div>
        </div>
      `;
    }).join('');
    track.querySelectorAll('.evo-node').forEach(node => {
      node.addEventListener('click', () => openArtifact(node.dataset.id));
    });
  })();

  /* ---------------------------------------------------------------------
     KNOWLEDGE ARTIFACT CHAMBERS
     --------------------------------------------------------------------- */
  function vectorPreview(topic){
    // decorative one-hot-style strip that visually nods to the topic's own concept
    const idx = D.topics.indexOf(topic);
    return D.topics.map((_, i) => `<span class="${i === idx ? 'is-hot' : ''}">${i === idx ? '1' : '0'}</span>`).join('');
  }

  function renderChambers(filter){
    const grid = document.getElementById('chambersGrid');
    const list = filter && filter !== 'all' ? D.topics.filter(t => t.section === filter) : D.topics;
    grid.innerHTML = list.map((t, i) => `
      <article class="capsule" data-reveal style="transition-delay:${(i%4)*70}ms" data-id="${t.id}">
        <div class="capsule-icon"><i class="fa-solid ${t.icon}"></i></div>
        <div class="capsule-code">${t.code} · ${t.section}</div>
        <h3 class="capsule-title">${t.title}</h3>
        <p class="capsule-tag">${t.cardLabel}</p>
        <div class="capsule-vector">${vectorPreview(t)}</div>
        <span class="capsule-open">Open Artifact <i class="fa-solid fa-arrow-right"></i></span>
      </article>
    `).join('');
    grid.querySelectorAll('.capsule').forEach(card => {
      card.addEventListener('click', () => openArtifact(card.dataset.id));
    });
    initReveal();
  }
  renderChambers('all');

  document.getElementById('chambersTabs').addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if(!chip) return;
    document.querySelectorAll('#chambersTabs .chip').forEach(c => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    renderChambers(chip.dataset.filter);
  });

  /* ---------------------------------------------------------------------
     ARTIFACT VIEWER MODAL
     --------------------------------------------------------------------- */
  const modalOverlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('modalBody');

  function openArtifact(id){
    const t = topicById(id);
    if(!t) return;

    modalBody.innerHTML = `
      <p class="modal-eyebrow">${t.code} · ${t.section}</p>
      <h3 class="modal-title">${t.title}</h3>
      <p class="modal-tag">${t.cardLabel}</p>

      <div class="modal-block">
        <h4><i class="fa-solid fa-book-open"></i> Definition</h4>
        <p>${t.definition}</p>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-scroll"></i> Library Story</h4>
        <p>${t.story}</p>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-bullseye"></i> Purpose</h4>
        <ul>${t.purpose.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-gears"></i> Working Principle</h4>
        <div class="modal-steps">
          ${t.working.map((s,i) => `
            <div class="modal-step">
              <div class="modal-step-title">${i+1}. ${s.title}</div>
              <div>${s.content}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-globe"></i> Real-World Example</h4>
        <p>${t.example}</p>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-eye"></i> Behind the Scenes</h4>
        <p>${t.behindScenes}</p>
      </div>

      ${t.libraryComparison ? `
      <div class="modal-block">
        <h4><i class="fa-solid fa-table"></i> Library Comparison</h4>
        <table class="modal-lib-table">
          ${t.libraryComparison.map(row => `<tr><td>${row[0]}</td><td>${row[1]}</td></tr>`).join('')}
        </table>
      </div>` : ''}

      <div class="modal-two-col">
        <div class="modal-block">
          <h4><i class="fa-solid fa-circle-check"></i> Advantages</h4>
          <ul>${t.advantages.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
        <div class="modal-block">
          <h4><i class="fa-solid fa-circle-xmark"></i> Limitations</h4>
          <ul>${t.limitations.map(a => `<li>${a}</li>`).join('')}</ul>
        </div>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-briefcase"></i> Applications</h4>
        <ul>${t.applications.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>

      <div class="modal-block">
        <h4><i class="fa-solid fa-triangle-exclamation"></i> When Not to Use It</h4>
        <p>${t.whenNotToUse}</p>
      </div>

      <div class="modal-takeaway">&ldquo;${t.takeaway}&rdquo;</div>
    `;

    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(){
    modalOverlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeModal(); });

  /* ---------------------------------------------------------------------
     NLP GALAXY MAP
     --------------------------------------------------------------------- */
  (function renderGalaxy(){
    const stage = document.getElementById('galaxyStage');
    const isMobile = window.innerWidth < 640;
    const radius = isMobile ? 230 : 240;

    let html = `
      <div class="galaxy-ring" style="width:${radius*2}px;height:${radius*2}px;"></div>
      <div class="galaxy-center">Natural Language<br>Processing</div>
    `;

    const n = D.galaxy.length;
    D.galaxy.forEach((node, i) => {
      const angle = (i / n) * 2 * Math.PI - Math.PI/2;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      html += `
        <div class="galaxy-node" style="left: calc(50% + ${x}px); top: calc(50% + ${y}px);" data-target="${node.target}">
          ${node.label}
          <div class="galaxy-node-desc">${node.desc}</div>
        </div>
      `;
    });

    stage.innerHTML = html;
    stage.querySelectorAll('.galaxy-node').forEach(el => {
      el.addEventListener('click', () => {
        document.querySelector(el.dataset.target)?.scrollIntoView({ behavior:'smooth' });
      });
    });
  })();

  /* ---------------------------------------------------------------------
     COMPARISON ARENA
     --------------------------------------------------------------------- */
  (function renderArena(){
    const tabsEl = document.getElementById('arenaTabs');
    const stage = document.getElementById('arenaStage');

    tabsEl.innerHTML = D.comparisons.map((c,i) => {
      const l = topicById(c.left), r = topicById(c.right);
      return `<button class="chip ${i===0 ? 'is-active':''}" data-id="${c.id}">${l.title} vs ${r.title}</button>`;
    }).join('');

    stage.innerHTML = D.comparisons.map((c,i) => {
      const l = topicById(c.left), r = topicById(c.right);
      return `
        <div class="duel-card ${i===0 ? 'is-active':''}" data-id="${c.id}">
          <div class="duel-heading">
            <span class="duel-side left">${l.title}</span>
            <span class="duel-vs">VS</span>
            <span class="duel-side right">${r.title}</span>
          </div>
          ${c.metrics.map(m => `
            <div class="duel-metric">
              <div class="duel-metric-label">${m.label}</div>
              <div class="duel-bars">
                <div class="duel-bar-track left"><div class="duel-bar-fill" data-pct="${m.left/2*100}"></div></div>
                <div class="duel-bar-track right"><div class="duel-bar-fill" data-pct="${m.right/2*100}"></div></div>
              </div>
            </div>
          `).join('')}
        </div>
      `;
    }).join('');

    function activate(id){
      tabsEl.querySelectorAll('.chip').forEach(c => c.classList.toggle('is-active', c.dataset.id === id));
      stage.querySelectorAll('.duel-card').forEach(c => {
        const active = c.dataset.id === id;
        c.classList.toggle('is-active', active);
        if(active){
          requestAnimationFrame(() => {
            c.querySelectorAll('.duel-bar-fill').forEach(f => { f.style.width = f.dataset.pct + '%'; });
          });
        }
      });
    }

    tabsEl.addEventListener('click', (e) => {
      const chip = e.target.closest('.chip');
      if(!chip) return;
      activate(chip.dataset.id);
    });

    // Show comparison details table when clicking a duel card
    stage.addEventListener('click', (e) => {
      const card = e.target.closest('.duel-card');
      if(!card) return;
      const id = card.dataset.id;
      openComparisonModal(id);
    });

    // trigger initial bar animation once visible
    const firstObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          activate(D.comparisons[0].id);
          firstObserver.disconnect();
        }
      });
    }, { threshold: 0.3 });
    firstObserver.observe(stage);
  })();

  /* ---------------------------------------------------------------------
     COMPARISON DETAILS MODAL
     --------------------------------------------------------------------- */
  function openComparisonModal(id){
    const detail = D.comparisonDetails && D.comparisonDetails[id];
    if(!detail) return;
    modalBody.innerHTML = `
      <p class="modal-eyebrow">Comparison</p>
      <h3 class="modal-title">${detail.title}</h3>
      <div class="modal-block">
        <h4><i class="fa-solid fa-table"></i> Feature Comparison</h4>
        <div class="application-table-wrap">
          <table class="modal-lib-table">
            <thead><tr>${detail.rows && detail.rows.length? detail.rows[0].map(h=>`<th>${h}</th>`).join('') : ''}</tr></thead>
            <tbody>
              ${detail.rows && detail.rows.length>1 ? detail.rows.slice(1).map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('') : ''}
            </tbody>
          </table>
        </div>
      </div>
      ${detail.conclusion ? `<div class="modal-block"><h4>Key Difference</h4><p>${detail.conclusion}</p></div>` : ''}
    `;
    modalOverlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  /* ---------------------------------------------------------------------
     WORKFLOW OBSERVATORY — coded dashboard
     --------------------------------------------------------------------- */
  (function renderPipeline(){
    const el = document.getElementById('observatoryBoard');
    if(!el) return;

    el.innerHTML = D.observatoryBoard.map((column, colIndex) => `
      <div class="board-column board-column--${column.variant}" data-reveal style="transition-delay:${colIndex * 90}ms">
        <div class="board-column-header">
          <div class="board-column-icon"><i class="fa-solid ${column.icon}"></i></div>
          <div>
            <div class="board-column-eyebrow">${column.eyebrow}</div>
            <h3 class="board-column-title">${column.title}</h3>
          </div>
        </div>
        <div class="board-steps">
            ${column.steps.map((step, i) => `
            <div class="board-step">
              <div class="step-badge"><i class="fa-solid ${step.icon}"></i></div>
              <div>
                <div class="step-label">${step.label}</div>
                <div class="step-desc">${step.desc}</div>
              </div>
            </div>
            ${i < column.steps.length - 1 ? '<div class="step-arrow"><i class="fa-solid fa-chevron-down"></i></div>' : ''}
          `).join('')}
        </div>
      </div>
    `).join('');
    initReveal();
  })();

  /* ---------------------------------------------------------------------
     RESEARCH TIMELINE
     --------------------------------------------------------------------- */
  (function renderTimeline(){
    const el = document.getElementById('timelineList');
    el.innerHTML = D.timeline.map((item,i) => `
      <div class="timeline-item" data-reveal style="transition-delay:${i*60}ms">
        <div class="timeline-dot"></div>
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-label">${item.label}</div>
        <p class="timeline-desc">${item.desc}</p>
      </div>
    `).join('');
  })();

  /* ---------------------------------------------------------------------
     IMPACT / NLP FOR SOCIETY
     --------------------------------------------------------------------- */
  (function renderImpact(){
    const el = document.getElementById('impactGrid');
    el.innerHTML = D.impact.map((item,i) => `
      <div class="impact-card" data-reveal style="transition-delay:${(i%3)*70}ms">
        <div class="impact-icon"><i class="fa-solid ${item.icon}"></i></div>
        <div class="impact-label">${item.label}</div>
        <div class="impact-desc">${item.desc}</div>
      </div>
    `).join('');
  })();

  /* ---------------------------------------------------------------------
     CONTRIBUTORS HALL
     --------------------------------------------------------------------- */
  (function renderContributors(){
    const el = document.getElementById('contributorsGrid');
    const R = 40, C = 2 * Math.PI * R;

    el.innerHTML = D.contributors.map((c,i) => `
      <div class="contributor-card" data-reveal style="transition-delay:${i*90}ms">
        <div class="progress-ring">
          <svg width="96" height="96" viewBox="0 0 96 96">
            <defs>
              <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#A78BFA"/>
                <stop offset="100%" stop-color="#06B6D4"/>
              </linearGradient>
            </defs>
            <circle class="progress-ring-bg" cx="48" cy="48" r="${R}"></circle>
            <circle class="progress-ring-fill" cx="48" cy="48" r="${R}"
              stroke-dasharray="${C}" stroke-dashoffset="${C}" data-offset="${C - (c.percent/100)*C}"></circle>
          </svg>
          <div class="progress-ring-value">${c.percent}%</div>
        </div>
        <div>
          <h3 class="contributor-name">${c.name}</h3>
          <ul class="contributor-roles">${c.roles.map(r => `<li>${r}</li>`).join('')}</ul>
        </div>
      </div>
    `).join('');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.querySelectorAll('.progress-ring-fill').forEach(ring => {
            ring.style.strokeDashoffset = ring.dataset.offset;
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    el.querySelectorAll('.contributor-card').forEach(c => observer.observe(c));

    // Contribution matrix
    const matrix = document.getElementById('contributionMatrix');
    const m = D.contributionMatrix;
    let mHtml = `<div class="matrix-row"><div class="matrix-cell head"></div>${m.cols.map(c => `<div class="matrix-cell head">${c}</div>`).join('')}</div>`;
    m.rows.forEach((row, ri) => {
      mHtml += `<div class="matrix-row"><div class="matrix-cell row-label">${row}</div>`;
      m.values[ri].forEach(v => {
        mHtml += `<div class="matrix-cell matrix-heat heat-${v}">${'●'.repeat(v) || '—'}</div>`;
      });
      mHtml += `</div>`;
    });
    matrix.innerHTML = mHtml;
  })();

  /* ---------------------------------------------------------------------
     AI ARCHIVIST ASSISTANT
     --------------------------------------------------------------------- */
  (function archivist(){
    const fab = document.getElementById('archivistFab');
    const panel = document.getElementById('archivistPanel');
    const closeBtn = document.getElementById('archivistClose');
    const messages = document.getElementById('archivistMessages');
    const form = document.getElementById('archivistForm');
    const input = document.getElementById('archivistInput');
    const suggestionsEl = document.getElementById('archivistSuggestions');

    let greeted = false;

    function addMessage(text, who){
      const div = document.createElement('div');
      div.className = `msg ${who}`;
      div.textContent = text;
      messages.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    function answer(query){
      const q = query.toLowerCase();
      const hit = D.archivistKB.find(entry => entry.keywords.some(k => q.includes(k)));
      return hit ? hit.answer : "The Archivist doesn't have a record for that exact phrase yet — try asking about One-Hot Encoding, Word Embeddings, Word2Vec, FastText, Contextual Embeddings, Statistical or Neural Language Models, or Transformers.";
    }

    function open(){
      panel.classList.add('is-open');
      if(!greeted){
        addMessage("Welcome to the Infinity Knowledge Library. I'm the Archivist — ask me about any NLP concept in this repository.", 'bot');
        greeted = true;
      }
    }
    fab.addEventListener('click', () => panel.classList.contains('is-open') ? panel.classList.remove('is-open') : open());
    closeBtn.addEventListener('click', () => panel.classList.remove('is-open'));

    suggestionsEl.innerHTML = D.archivistSuggestions.map(s => `<button type="button">${s}</button>`).join('');
    suggestionsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if(!btn) return;
      addMessage(btn.textContent, 'user');
      setTimeout(() => addMessage(answer(btn.textContent), 'bot'), 300);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if(!val) return;
      addMessage(val, 'user');
      input.value = '';
      setTimeout(() => addMessage(answer(val), 'bot'), 300);
    });
  })();

  /* ---------------------------------------------------------------------
     SCROLL REVEAL (lightweight AOS replacement)
     --------------------------------------------------------------------- */
  function initReveal(){
    const items = document.querySelectorAll('[data-reveal]:not(.is-visible)');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach(item => observer.observe(item));
  }
  initReveal();

  /* ---------------------------------------------------------------------
     NAVBAR SCROLL STYLE
     --------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.style.boxShadow = window.scrollY > 40 ? '0 8px 30px rgba(0,0,0,.25)' : 'none';
  });

})();
