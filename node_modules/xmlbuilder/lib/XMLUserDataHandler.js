<!DOCTYPE html>
<html lang="fr" data-theme="oled">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <!-- BOUCLIER CSP STRICT : Bloque les plugins, les iframes externes, les injections d'URL et les exfiltrations -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://cdn.tailwindcss.com https://fonts.googleapis.com https://fonts.gstatic.com; connect-src 'self' https://*.firebaseio.com https://*.googleapis.com; img-src 'self' data:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com; object-src 'none'; base-uri 'none'; form-action 'none';" />
  <meta http-equiv="X-Content-Type-Options" content="nosniff" />
  <meta name="referrer" content="no-referrer" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="apple-mobile-web-app-title" content="FocusPASS" />
  <meta name="theme-color" content="#000000" />
  <title>FocusPASS — Suivi & Organisation</title>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='24' fill='%23000000'/%3E%3Crect x='4' y='4' width='92' height='92' rx='20' fill='none' stroke='%23ffffff' stroke-width='4' stroke-opacity='0.25'/%3E%3Ctext x='50' y='71' font-family='Inter, system-ui, sans-serif' font-size='62' font-weight='900' fill='%23ffffff' text-anchor='middle'%3EF%3C/text%3E%3C/svg%3E" />
  <script>
    // Protection Anti-Clickjacking (empêche l'inclusion dans un site malveillant)
    if (window.top !== window.self) {
      try { window.top.location = window.self.location; } catch (e) {}
    }
    const _w = console.warn;
    console.warn = (...a) => (typeof a[0] === 'string' && a[0].includes('cdn.tailwindcss.com')) ? null : _w.apply(console, a);
  </script>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@600;700;800&display=swap" rel="stylesheet">
  <style>
    :root, [data-theme="oled"] {
      --bg-main: #000000;
      --bg-card: #0a0a0d;
      --bg-input: #131318;
      --text-main: #ffffff;
      --text-muted: #8e8e95;
      --border-color: #22222a;
      --btn-bg: #ffffff;
      --btn-text: #000000;
      --theme-accent: #ffffff;
      --theme-accent-soft: rgba(255, 255, 255, 0.12);
      --card-shadow: 0 14px 34px -12px rgba(0, 0, 0, 0.85), inset 0 1px 0 0 rgba(255, 255, 255, 0.06);
      --ambient-glow: radial-gradient(circle at 50% -10%, rgba(59, 130, 246, 0.12), transparent 60%);
    }
    [data-theme="dark"] {
      --bg-main: #090e1a;
      --bg-card: #131c2e;
      --bg-input: #1e2942;
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --border-color: #293856;
      --btn-bg: #f8fafc;
      --btn-text: #0f172a;
      --theme-accent: #f8fafc;
      --theme-accent-soft: rgba(248, 250, 252, 0.12);
      --card-shadow: 0 14px 34px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.07);
      --ambient-glow: radial-gradient(circle at 50% -10%, rgba(99, 102, 241, 0.15), transparent 60%);
    }
    [data-theme="light"] {
      --bg-main: #f1f5f9;
      --bg-card: #ffffff;
      --bg-input: #f8fafc;
      --text-main: #0f172a;
      --text-muted: #64748b;
      --border-color: #e2e8f0;
      --btn-bg: #0f172a;
      --btn-text: #ffffff;
      --theme-accent: #0f172a;
      --theme-accent-soft: rgba(15, 23, 42, 0.08);
      --card-shadow: 0 12px 28px -10px rgba(15, 23, 42, 0.07), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
      --ambient-glow: radial-gradient(circle at 50% -10%, rgba(59, 130, 246, 0.08), transparent 60%);
    }

    * { box-sizing: border-box; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
      background-color: var(--bg-main);
      background-image: var(--ambient-glow);
      background-attachment: fixed;
      color: var(--text-main);
      transition: background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      padding-top: env(safe-area-inset-top);
      padding-bottom: calc(6.2rem + env(safe-area-inset-bottom));
      user-select: none;
      overflow-x: hidden;
    }
    @media (min-width: 768px) { body { padding-bottom: 3.5rem; } }

    .safe-bottom-nav { padding-bottom: calc(0.5rem + env(safe-area-inset-bottom)); }
    .font-mono-timer { font-family: 'JetBrains Mono', monospace; }

    /* Cartes & Surfaces Premium */
    .card {
      background-color: var(--bg-card);
      border: 1px solid var(--border-color);
      box-shadow: var(--card-shadow);
      transition: background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
    }

    .task-row {
      background-color: var(--bg-main);
      border: 1px solid var(--border-color);
      transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;
    }
    .task-row:hover {
      border-color: rgba(142, 142, 147, 0.45);
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18);
    }

    /* Cases à cocher raffinées */
    input[type="checkbox"] {
      transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    input[type="checkbox"]:active {
      transform: scale(0.85);
    }

    .input-field {
      background-color: var(--bg-input);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      user-select: text;
      transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
    }
    .input-field:focus {
      border-color: var(--text-muted);
      box-shadow: 0 0 0 3px var(--theme-accent-soft);
    }
    select option { background-color: var(--bg-card); color: var(--text-main); padding: 8px; }

    /* Boutons & Accents */
    .theme-btn-primary {
      background-color: var(--btn-bg);
      color: var(--btn-text);
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
      transition: opacity 0.2s ease, transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, color 0.25s ease, box-shadow 0.2s ease;
    }
    .theme-btn-primary:hover { opacity: 0.94; transform: translateY(-1px); box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28); }
    .theme-btn-primary:active { transform: scale(0.96); }
    .theme-accent-text { color: var(--theme-accent); }
    .theme-accent-soft-bg { background-color: var(--theme-accent-soft); }

    /* Animation fluide entre les vues */
    @keyframes viewFadeSlide {
      0% { opacity: 0; transform: translateY(8px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .view-animate {
      animation: viewFadeSlide 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    }

    /* Flip Clock Haute Définition */
    .flip-card {
      background: linear-gradient(180deg, #17171c 0%, #0e0e12 49.5%, #09090c 50.5%, #131317 100%);
      border-radius: 24px;
      position: relative;
      border: 1px solid rgba(255, 255, 255, 0.07);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.09), 0 18px 40px rgba(0,0,0,0.8);
    }
    .flip-digits {
      font-weight: 800;
      background: linear-gradient(180deg, #ffffff 0%, #e4e4e7 50%, #a1a1aa 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.04em;
      line-height: 1;
      filter: drop-shadow(0 4px 10px rgba(0,0,0,0.55));
    }
    .flip-split-line {
      position: absolute; left: 0; right: 0; top: 50%; height: 3px;
      background-color: #000000;
      box-shadow: 0 1px 0 rgba(255,255,255,0.06);
      z-index: 10; transform: translateY(-50%); pointer-events: none;
    }
    .flip-wheel {
      position: absolute; right: 7px; top: 50%; transform: translateY(-50%);
      width: 15px; height: 84px; border-radius: 8px;
      background: repeating-linear-gradient(to bottom, #636366 0px, #636366 2px, #18181b 2px, #18181b 6px);
      background-position: 0px var(--wheel-offset, 0px);
      opacity: 0.55; z-index: 30; touch-action: none;
      box-shadow: inset 0 8px 10px rgba(0,0,0,0.85), inset 0 -8px 10px rgba(0,0,0,0.85);
      transition: opacity 0.2s ease, width 0.2s ease, box-shadow 0.2s ease;
    }
    .wheel-interactive { cursor: ns-resize; opacity: 0.88; }
    .wheel-interactive:hover, .wheel-interactive:active {
      opacity: 1; width: 18px;
      box-shadow: 0 0 14px rgba(255,255,255,0.24), inset 0 8px 10px rgba(0,0,0,0.85), inset 0 -8px 10px rgba(0,0,0,0.85);
    }

    @keyframes pulseRunningBtn {
      0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.28); }
      50% { box-shadow: 0 0 24px 5px rgba(255, 255, 255, 0.16); }
    }
    .btn-commencer {
      background: linear-gradient(180deg, #525258 0%, #3a3a40 100%);
      border: 1.5px solid #8e8e93;
      color: #ffffff;
      border-radius: 16px;
      padding: 11px 38px;
      font-weight: 600;
      font-size: 0.95rem;
      letter-spacing: 0.01em;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .btn-commencer:hover { background: linear-gradient(180deg, #626268 0%, #46464c 100%); transform: translateY(-1px); }
    .btn-commencer:active { transform: scale(0.96); }
    .btn-commencer.is-running {
      background: #ffffff;
      color: #000000;
      border-color: #ffffff;
      animation: pulseRunningBtn 2.4s infinite ease-in-out;
    }

    .ios-segmented { background-color: #202024; padding: 3.5px; border-radius: 12px; display: inline-flex; border: 1px solid rgba(255,255,255,0.07); }
    .ios-seg-btn { padding: 6px 16px; border-radius: 9px; font-size: 0.8rem; font-weight: 500; color: #a1a1aa; transition: all 0.22s cubic-bezier(0.16, 1, 0.3, 1); }
    .ios-seg-btn.active { background-color: #52525b; color: #ffffff; font-weight: 600; box-shadow: 0 2px 8px rgba(0,0,0,0.45); }

    .noise-pill {
      background-color: #141417; border: 1px solid #27272a; color: #a1a1aa;
      padding: 6.5px 14px; border-radius: 9999px; font-size: 0.75rem; font-weight: 600;
      display: inline-flex; align-items: center; gap: 6px; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .noise-pill:hover { background-color: #232329; color: #f4f4f5; transform: translateY(-1px); }
    .noise-pill.active { background-color: #ffffff; border-color: #ffffff; color: #000000; box-shadow: 0 0 18px rgba(255,255,255,0.24); }

    #flipClockContainer:fullscreen,
    #flipClockContainer:-webkit-full-screen,
    #flipClockContainer.is-fullscreen {
      position: fixed !important;
      inset: 0 !important;
      z-index: 9999 !important;
      width: 100vw !important;
      height: 100vh !important;
      border-radius: 0 !important;
      border: none !important;
      padding: calc(1.5rem + env(safe-area-inset-top)) 1.5rem calc(1.5rem + env(safe-area-inset-bottom)) !important;
    }
    #flipClockContainer:fullscreen #timerAudioPanel,
    #flipClockContainer:-webkit-full-screen #timerAudioPanel,
    #flipClockContainer.is-fullscreen #timerAudioPanel,
    #flipClockContainer:fullscreen #timerHistoryScrollBtn,
    #flipClockContainer:-webkit-full-screen #timerHistoryScrollBtn,
    #flipClockContainer.is-fullscreen #timerHistoryScrollBtn {
      display: none !important;
    }

    @keyframes badgeModalPop {
      0% { opacity: 0; transform: scale(0.65) translateY(30px); }
      65% { opacity: 1; transform: scale(1.04) translateY(-4px); }
      100% { opacity: 1; transform: scale(1) translateY(0); }
    }
    @keyframes badgeIconFloat {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-7px) scale(1.1); }
    }
    @keyframes badgeGlowPulse {
      0%, 100% { box-shadow: 0 0 25px rgba(251, 191, 36, 0.25), inset 0 0 20px rgba(251, 191, 36, 0.12); }
      50% { box-shadow: 0 0 50px rgba(251, 191, 36, 0.55), inset 0 0 30px rgba(251, 191, 36, 0.25); }
    }
    .badge-pop-card {
      animation: badgeModalPop 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards, badgeGlowPulse 2.8s infinite ease-in-out;
    }
    .badge-float-icon {
      animation: badgeIconFloat 2.2s ease-in-out infinite;
    }

    #appToast {
      transition: opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);
    }

    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border-color); border-radius: 3px; }
  </style>
</head>
<body class="min-h-screen" onclick="closeCustomDropdownOutside()">

  <!-- TOAST NOTIFICATION ÉLÉGANTE -->
  <div id="appToast" class="fixed bottom-20 md:bottom-7 left-1/2 -translate-x-1/2 z-50 pointer-events-none opacity-0 translate-y-3 px-4 py-2.5 rounded-2xl border shadow-2xl flex items-center gap-2.5 text-xs font-bold backdrop-blur-xl" style="background-color: var(--bg-card); border-color: var(--border-color); color: var(--text-main);">
    <span id="appToastIcon">✨</span>
    <span id="appToastText">Action effectuée</span>
  </div>

  <header class="sticky top-0 z-30 backdrop-blur-xl bg-opacity-85 border-b" style="background-color: color-mix(in srgb, var(--bg-card) 86%, transparent); border-color: var(--border-color);">
    <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
      <div class="flex items-center gap-3 cursor-pointer group" onclick="switchTab('dashboard')">
        <div class="w-10 h-10 rounded-xl bg-black border border-white/25 flex items-center justify-center shadow-lg flex-shrink-0 transition transform group-hover:scale-105">
          <span class="text-white font-black text-xl tracking-tighter leading-none">F</span>
        </div>
        <div>
          <h1 class="font-extrabold text-lg tracking-tight leading-none">Focus<span class="font-light opacity-80">PASS</span></h1>
          <p id="currentDateDisplay" class="text-xs mt-0.5 capitalize" style="color: var(--text-muted);">Chargement...</p>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-1 p-1 rounded-xl border" style="background-color: var(--bg-main); border-color: var(--border-color);">
        <button onclick="switchTab('dashboard')" id="nav-desk-dashboard" class="px-4 py-2 rounded-lg text-sm font-semibold transition">Aujourd'hui</button>
        <button onclick="switchTab('timer')" id="nav-desk-timer" class="px-4 py-2 rounded-lg text-sm font-semibold transition">Chrono Focus</button>
        <button onclick="switchTab('stats')" id="nav-desk-stats" class="px-4 py-2 rounded-lg text-sm font-semibold transition">Bilan & Graphiques</button>
        <button onclick="switchTab('settings')" id="nav-desk-settings" class="px-4 py-2 rounded-lg text-sm font-semibold transition">Matières & Options</button>
      </nav>

      <div class="flex items-center gap-2">
        <button onclick="switchTab('settings')" id="cloudHeaderBadge" title="Protection & Synchronisation multi-appareils active" class="px-2.5 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 border hover:opacity-85 transition" style="background-color: var(--bg-input); border-color: var(--border-color);">
          <span id="cloudStatusDot" class="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span class="hidden sm:inline" id="cloudStatusLabel">Protégé & Synchro</span>
        </button>
        <button onclick="switchTab('settings')" class="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border hover:opacity-85 transition" style="background-color: var(--bg-input); border-color: var(--border-color);">
          <span>🎯 Obj:</span>
          <span id="headerGoalBadge" class="font-bold font-mono-timer">7h/j</span>
        </button>
      </div>
    </div>
  </header>

  <main class="max-w-5xl mx-auto px-4 pt-6">

    <!-- ========================================================== -->
    <!-- VUE 1 : DASHBOARD (AUJOURD'HUI, TÂCHES & OBJECTIFS)        -->
    <!-- ========================================================== -->
    <section id="view-dashboard" class="space-y-6 view-animate">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="card rounded-2xl p-5 md:col-span-2 flex flex-col justify-between">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[11px] font-bold uppercase tracking-widest" style="color: var(--text-muted);">Aperçu de ta journée</span>
              <h2 class="text-2xl font-extrabold mt-1 tracking-tight">Prêt à tout donner ?</h2>
            </div>
            <button onclick="switchTab('timer')" class="theme-btn-primary px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 flex-shrink-0">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              Lancer le Chrono
            </button>
          </div>

          <div class="mt-6">
            <div class="flex justify-between items-baseline mb-2">
              <div>
                <span id="todayHoursBig" class="text-3xl font-extrabold font-mono-timer tracking-tight">0h 00m</span>
                <span class="text-sm ml-1.5" style="color: var(--text-muted);">travaillées aujourd'hui</span>
              </div>
              <span id="todayPercentBadge" class="text-xs font-extrabold px-2.5 py-1 rounded-full theme-accent-soft-bg theme-accent-text">0%</span>
            </div>
            <div id="todaySegmentedProgress" class="w-full h-3.5 rounded-full overflow-hidden flex p-0.5 gap-0.5" style="background-color: var(--bg-input);"></div>
            <div class="flex flex-wrap justify-between items-center text-xs mt-3 gap-2" style="color: var(--text-muted);">
              <span id="remainingTimeText">Objectif quotidien : 7h00</span>
              <button onclick="openManualTimeModal(getTodayKey())" class="font-semibold underline hover:opacity-80 transition" style="color: var(--text-main);">+ Ajouter une session manuellement</button>
            </div>
          </div>
        </div>

        <div class="card rounded-2xl p-5 flex flex-col justify-between space-y-3">
          <div class="grid grid-cols-2 gap-3">
            <div class="p-3 rounded-xl border" style="background-color: var(--bg-main); border-color: var(--border-color);">
              <span class="text-[10px] font-bold uppercase tracking-wider block" style="color: var(--text-muted);">Tâches du jour</span>
              <div class="flex items-baseline gap-1.5 mt-1">
                <span id="tasksDoneCount" class="text-2xl font-extrabold font-mono-timer">0/1</span>
                <span class="text-[11px]" style="color: var(--text-muted);">faites</span>
              </div>
            </div>
            <div class="p-3 rounded-xl border" style="background-color: var(--bg-main); border-color: var(--border-color);">
              <span class="text-[10px] font-bold uppercase tracking-wider block" style="color: var(--text-muted);">Objectifs jour</span>
              <div class="flex items-baseline gap-1.5 mt-1">
                <span id="goalsDoneCount" class="text-2xl font-extrabold font-mono-timer">0/1</span>
                <span class="text-[11px]" style="color: var(--text-muted);">atteints</span>
              </div>
            </div>
          </div>
          <div class="border-t pt-3 flex items-center justify-between" style="border-color: var(--border-color);">
            <div>
              <span class="text-[11px] font-semibold uppercase tracking-wider" style="color: var(--text-muted);">Cumul semaine</span>
              <div class="flex items-baseline mt-0.5">
                <span id="weekTotalMini" class="text-xl font-extrabold font-mono-timer">0h 00m</span>
              </div>
            </div>
            <div class="text-right cursor-pointer group" onclick="switchTab('stats')" title="Voir mes badges de régularité">
              <span class="text-[11px] font-semibold uppercase tracking-wider" style="color: var(--text-muted);">Série Objectifs</span>
              <div class="flex items-baseline justify-end mt-0.5">
                <span id="streakMiniCount" class="text-xl font-extrabold text-amber-400 group-hover:scale-105 transition inline-block">🔥 0j</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- COLONNE GAUCHE (2/3) : TÂCHES AVEC CASE SPÉCIALE RETARD / PAS FAIT -->
        <div class="card rounded-2xl p-5 lg:col-span-2 flex flex-col">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-4">
            <h3 class="font-extrabold text-lg tracking-tight">Tâches</h3>
            <div id="dashboardDayPills" class="flex gap-1 p-1 rounded-xl border" style="background-color: var(--bg-main); border-color: var(--border-color);"></div>
          </div>

          <form onsubmit="addTask(event)" class="flex flex-col sm:flex-row gap-2 mb-3">
            <input type="text" id="newTaskInput" maxlength="120" autocomplete="off" placeholder="Nouvelle tâche (ex: Fiche Médiastin, 40 QCM...)" required
              class="input-field flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none" />
            <div class="flex flex-wrap sm:flex-nowrap gap-2">
              <select id="newTaskPriority" class="input-field px-3 py-2.5 rounded-xl text-sm font-semibold focus:outline-none cursor-pointer">
                <option value="urgent">Urgent</option>
                <option value="important">Important</option>
                <option value="todo" selected>À faire</option>
              </select>
              <select id="newTaskSubject" class="input-field px-3 py-2.5 rounded-xl text-sm focus:outline-none cursor-pointer"></select>
              <button type="submit" class="theme-btn-primary px-5 py-2.5 rounded-xl text-sm font-bold flex-shrink-0">Ajouter</button>
            </div>
          </form>

          <!-- Filtres par priorité + filtre Retard / Pas fait -->
          <div class="flex items-center justify-between gap-2 mb-4 pb-3 border-b flex-wrap" style="border-color: var(--border-color);">
            <div id="taskPriorityFilters" class="flex flex-wrap gap-1.5"></div>
          </div>

          <!-- CASE SPÉCIALE : EN RETARD / PAS FAIT (JOURS PRÉCÉDENTS) -->
          <div id="overdueTasksBox" class="hidden mb-4 p-4 rounded-2xl border space-y-3" style="background: linear-gradient(180deg, rgba(239, 68, 68, 0.08) 0%, rgba(239, 68, 68, 0.03) 100%); border-color: rgba(239, 68, 68, 0.35);">
            <div class="flex items-center justify-between gap-2 flex-wrap">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse"></span>
                <h4 class="text-xs font-extrabold uppercase tracking-wider text-red-400">En retard / Pas fait (jours précédents)</h4>
              </div>
              <div class="flex items-center gap-2">
                <button id="moveAllOverdueBtn" type="button" onclick="moveAllOverdueToToday()" class="hidden text-[11px] font-bold px-2.5 py-1 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-500/30 transition">
                  ↪ Tout ramener à aujourd'hui
                </button>
                <span id="overdueTasksCountBadge" class="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300">0</span>
              </div>
            </div>
            <div id="overdueTasksList" class="space-y-2"></div>
          </div>

          <div id="taskListContainer" class="space-y-2.5 flex-1"></div>
        </div>

        <!-- COLONNE DROITE (1/3) : OBJECTIFS QUOTIDIENS + MINI SEMAINE -->
        <div class="space-y-6 flex flex-col justify-between">
          <!-- RUBRIQUE OBJECTIFS QUOTIDIENS -->
          <div class="card rounded-2xl p-5 flex flex-col">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-extrabold text-lg tracking-tight">Objectifs quotidiens</h3>
              <span id="goalsSelectedDayBadge" class="text-xs font-bold px-2.5 py-0.5 rounded-full theme-accent-soft-bg theme-accent-text">Aujourd'hui</span>
            </div>
            <p id="goalsLockNotice" class="text-xs mb-3" style="color: var(--text-muted);">Coche tes habitudes atteintes chaque jour</p>

            <div id="dailyGoalsList" class="space-y-2 mb-4"></div>

            <form onsubmit="addDailyGoal(event)" class="flex gap-2 mt-auto pt-2 border-t" style="border-color: var(--border-color);">
              <input type="text" id="newGoalInput" maxlength="60" autocomplete="off" placeholder="Nouvel objectif (ex: Boire 1,5L d'eau...)" required
                class="input-field flex-1 px-3 py-2 rounded-xl text-xs focus:outline-none" />
              <button type="submit" class="theme-btn-primary px-3.5 py-2 rounded-xl text-xs font-bold flex-shrink-0">+ Créer</button>
            </form>
          </div>

          <!-- MINI GRAPHIQUE SEMAINE -->
          <div class="card rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="font-extrabold text-lg tracking-tight">Semaine en couleurs</h3>
              </div>
              <div id="miniSubjectLegend" class="flex flex-wrap gap-2 mb-3"></div>
              <div id="miniBarChart" class="h-40 flex items-end justify-between gap-2 pt-6 pb-2 px-1"></div>
            </div>

            <div class="mt-4 pt-3 border-t flex items-center justify-between text-xs" style="border-color: var(--border-color); color: var(--text-muted);">
              <span>Moyenne : <strong id="avgDayMini" style="color: var(--text-main);">0h/j</strong></span>
              <button onclick="switchTab('stats')" class="theme-accent-text font-bold hover:underline">Bilan & Semaines →</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- VUE 2 : CHRONO FLIP CLOCK & AUDIO                          -->
    <!-- ========================================================== -->
    <section id="view-timer" class="hidden space-y-6">
      <div id="flipClockContainer" class="bg-black rounded-3xl p-4 sm:p-8 border border-zinc-800/80 flex flex-col justify-between min-h-[550px] relative shadow-2xl overflow-hidden">
        <!-- Halo lumineux subtil dynamique aux couleurs de la matière active -->
        <div id="timerSubjectAmbientGlow" class="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full blur-3xl opacity-20 transition-all duration-700" style="background-color: #3b82f6;"></div>

        <div class="flex items-center justify-between gap-2 relative z-10">
          <button onclick="exitFullscreenOrBack()" class="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition" title="Retour">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>

          <div class="ios-segmented">
            <button onclick="setTimerMode('countdown')" id="seg-countdown" class="ios-seg-btn">Compte à rebours</button>
            <button onclick="setTimerMode('countup')" id="seg-countup" class="ios-seg-btn active">Compter jusqu'à</button>
          </div>

          <button onclick="toggleFullScreenTimer()" id="fullscreenToggleBtn" class="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition" title="Mode Grand Écran Focus">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
          </button>
        </div>

        <div class="my-auto py-6 flex flex-col items-center relative z-10">
          <p id="liveClockTimestamp" class="text-zinc-400 text-xs sm:text-sm font-medium tracking-wide mb-3">Chargement...</p>

          <div class="relative mb-6 z-40">
            <button type="button" onclick="toggleCustomSubjectDropdown(event)"
              class="flex items-center gap-2.5 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 px-4 py-2 rounded-full text-white text-xs font-semibold transition shadow-lg">
              <span id="timerSubjectDot" class="w-3 h-3 rounded-full inline-block shadow-sm"></span>
              <span id="timerSubjectLabel">Anatomie</span>
              <svg class="w-3.5 h-3.5 text-zinc-400 ml-1" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div id="customSubjectDropdownMenu" class="hidden absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl py-1.5 overflow-hidden"></div>
          </div>

          <div class="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-4xl px-1 sm:px-4">
            <div class="flex flex-col items-center">
              <div class="flip-card w-full aspect-[1/1.05] flex items-center justify-center relative overflow-hidden">
                <div class="flip-split-line"></div>
                <div id="wheel-h" class="flip-wheel" title="Glisser pour régler les heures"></div>
                <span id="flipHours" class="flip-digits text-5xl sm:text-8xl md:text-9xl">00</span>
              </div>
              <span class="text-zinc-500 font-extrabold text-[11px] sm:text-sm tracking-[0.2em] mt-3 uppercase">HOUR</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="flip-card w-full aspect-[1/1.05] flex items-center justify-center relative overflow-hidden">
                <div class="flip-split-line"></div>
                <div id="wheel-m" class="flip-wheel" title="Glisser pour régler les minutes"></div>
                <span id="flipMinutes" class="flip-digits text-5xl sm:text-8xl md:text-9xl">00</span>
              </div>
              <span class="text-zinc-500 font-extrabold text-[11px] sm:text-sm tracking-[0.2em] mt-3 uppercase">MIN</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="flip-card w-full aspect-[1/1.05] flex items-center justify-center relative overflow-hidden">
                <div class="flip-split-line"></div>
                <div id="wheel-s" class="flip-wheel" title="Glisser pour régler les secondes"></div>
                <span id="flipSeconds" class="flip-digits text-5xl sm:text-8xl md:text-9xl">00</span>
              </div>
              <span class="text-zinc-500 font-extrabold text-[11px] sm:text-sm tracking-[0.2em] mt-3 uppercase">SEC</span>
            </div>
          </div>
        </div>

        <!-- PANNEAU AUDIO : MASQUÉ EN MODE PLEIN ÉCRAN FOCUS -->
        <div id="timerAudioPanel" class="flex flex-col items-center gap-3 pt-3 pb-4 border-t border-zinc-900 relative z-10">
          <div class="flex flex-wrap items-center justify-center gap-2">
            <button type="button" onclick="toggleAudioSource('brown')" id="noise-btn-brown" class="noise-pill">
              <span class="w-2 h-2 rounded-full bg-amber-500"></span><span>Bruit Brun (Profond)</span>
            </button>
            <button type="button" onclick="toggleAudioSource('pink')" id="noise-btn-pink" class="noise-pill">
              <span class="w-2 h-2 rounded-full bg-pink-400"></span><span>Bruit Rose Doux (Pluie)</span>
            </button>
            <button type="button" onclick="toggleAudioSource('white')" id="noise-btn-white" class="noise-pill">
              <span class="w-2 h-2 rounded-full bg-zinc-300"></span><span>Bruit Blanc (Isolation)</span>
            </button>
            <button type="button" onclick="toggleAudioSource('binaural')" id="noise-btn-binaural" class="noise-pill">
              <span class="w-2 h-2 rounded-full bg-violet-400"></span><span>Ondes Binaurales (6 Hz - Casque)</span>
            </button>
          </div>

          <div class="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800/80">
            <svg class="w-3.5 h-3.5 text-zinc-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 6l-4 4H4v4h4l4 4V6z" />
            </svg>
            <input type="range" id="noiseVolumeSlider" min="0" max="100" value="35" oninput="updateNoiseVolume(this.value)"
              class="w-24 sm:w-32 h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-white" />
            <span id="noiseVolumeLabel" class="text-[10px] font-mono-timer text-zinc-400 w-7 text-right">35%</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 relative z-10">
          <button id="timerHistoryScrollBtn" onclick="$('timerHistoryCard').scrollIntoView({behavior: 'smooth'})" class="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition" title="Historique">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </button>

          <div class="flex items-center gap-3 mx-auto">
            <button onclick="toggleTimer()" id="timerStartBtn" class="btn-commencer">Commencer</button>
            <button onclick="finishAndSaveSession()" id="timerSaveBtn" class="hidden px-5 py-2.5 rounded-2xl font-extrabold text-sm bg-emerald-400 text-black hover:bg-emerald-300 transition shadow-lg">✓ Enregistrer</button>
          </div>

          <button onclick="resetTimer()" class="p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-900 transition" title="Réinitialiser">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </button>
        </div>
      </div>

      <div id="timerHistoryCard" class="card rounded-2xl p-5">
        <div class="flex items-center justify-between mb-3">
          <h3 class="font-extrabold text-sm tracking-tight">Sessions enregistrées aujourd'hui</h3>
          <button onclick="openManualTimeModal(getTodayKey())" class="text-xs theme-accent-text font-bold hover:underline">+ Ajouter manuellement</button>
        </div>
        <div id="todaySessionsList" class="space-y-2 text-sm"></div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- VUE 3 : BILAN, SEMAINES PRÉCÉDENTES, OBJECTIFS & BADGES    -->
    <!-- ========================================================== -->
    <section id="view-stats" class="hidden space-y-6">
      
      <!-- NAVIGATEUR DE SEMAINES -->
      <div class="card rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button onclick="changeStatsWeek(-1)" class="px-3.5 py-2 rounded-xl text-xs font-bold border hover:opacity-80 transition flex items-center gap-1.5" style="background-color: var(--bg-main); border-color: var(--border-color);">
            <span>←</span><span>Semaine précédente</span>
          </button>
          <button onclick="changeStatsWeek(1)" id="nextWeekBtn" class="px-3.5 py-2 rounded-xl text-xs font-bold border hover:opacity-80 transition flex items-center gap-1.5" style="background-color: var(--bg-main); border-color: var(--border-color);">
            <span>Semaine suivante</span><span>→</span>
          </button>
        </div>

        <div class="text-center">
          <span id="statsWeekBadge" class="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full theme-accent-soft-bg theme-accent-text">Cette semaine</span>
          <h2 id="statsWeekRangeLabel" class="font-extrabold text-sm sm:text-base mt-1">Semaine du ...</h2>
        </div>

        <button onclick="resetToCurrentWeek()" id="backToCurrentWeekBtn" class="hidden px-3.5 py-2 rounded-xl text-xs font-bold theme-btn-primary">
          Revenir à aujourd'hui
        </button>
      </div>

      <!-- CARTES RÉSUMÉ DE LA SEMAINE SÉLECTIONNÉE -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="card rounded-2xl p-4">
          <span class="text-xs font-medium" style="color: var(--text-muted);">Total Semaine</span>
          <p id="statWeekTotal" class="text-2xl font-extrabold font-mono-timer mt-1">0h 00m</p>
        </div>
        <div class="card rounded-2xl p-4">
          <span class="text-xs font-medium" style="color: var(--text-muted);">Moyenne / jour actif</span>
          <p id="statDailyAvg" class="text-2xl font-extrabold font-mono-timer mt-1">0h 00m</p>
        </div>
        <div class="card rounded-2xl p-4">
          <span class="text-xs font-medium" style="color: var(--text-muted);">Tâches accomplies</span>
          <p id="statTaskRate" class="text-2xl font-extrabold theme-accent-text mt-1">0%</p>
        </div>
        <div class="card rounded-2xl p-4">
          <span class="text-xs font-medium" style="color: var(--text-muted);">Objectifs (Semaine)</span>
          <p id="statGoalRate" class="text-2xl font-extrabold theme-accent-text mt-1">0%</p>
        </div>
      </div>

      <!-- GRAPHIQUE HEURES & MATIÈRES DE LA SEMAINE SÉLECTIONNÉE -->
      <div class="card rounded-2xl p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 class="font-extrabold text-lg tracking-tight">Heures & Matières travaillées par jour</h3>
            <p class="text-xs" style="color: var(--text-muted);">Clique sur la colonne d'un jour pour inspecter son compte rendu complet ci-dessous</p>
          </div>
          <span class="flex items-center gap-1.5 text-xs"><span class="w-4 h-0.5 border-t-2 border-dashed border-amber-400 inline-block"></span> Objectif (<span id="chartGoalLegend">7h</span>)</span>
        </div>

        <div id="mainChartLegend" class="flex flex-wrap gap-3 mb-6 pb-3 border-b" style="border-color: var(--border-color);"></div>

        <div class="relative h-64 pt-8 pb-8 px-2 sm:px-6 border-b" style="border-color: var(--border-color);">
          <div id="goalLine" class="absolute left-0 right-0 border-t-2 border-dashed border-amber-400/80 z-10 pointer-events-none flex justify-end pr-2" style="bottom: 50%;">
            <span class="text-[10px] font-bold bg-amber-400 text-black px-1.5 py-0.5 rounded -mt-2.5 shadow">Objectif</span>
          </div>
          <div id="mainBarChart" class="h-full flex items-end justify-between gap-2 sm:gap-6 relative z-0"></div>
        </div>
      </div>

      <!-- GRILLE DES OBJECTIFS ACCOMPLIS SUR TOUTE LA SEMAINE -->
      <div class="card rounded-2xl p-6 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 class="font-extrabold text-lg tracking-tight">Objectifs accomplis de toute la semaine</h3>
            <p class="text-xs" style="color: var(--text-muted);">Modifiable uniquement sur le jour J et les 2 jours précédents (🔒 verrouillé au-delà et sur les jours suivants)</p>
          </div>
          <span id="weeklyPerfectDaysBadge" class="text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 w-fit">0/7 jours à 100%</span>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse min-w-[540px]">
            <thead>
              <tr id="weeklyGoalsTableHeader" class="border-b text-xs" style="border-color: var(--border-color); color: var(--text-muted);"></tr>
            </thead>
            <tbody id="weeklyGoalsTableBody" class="divide-y text-xs" style="border-color: var(--border-color);"></tbody>
            <tfoot>
              <tr id="weeklyGoalsTableFooter" class="border-t font-bold text-xs" style="border-color: var(--border-color);"></tr>
            </tfoot>
          </table>
        </div>
      </div>

      <!-- COMPTE RENDU QUOTIDIEN DÉTAILLÉ -->
      <div class="card rounded-2xl p-6 space-y-5 border-2" style="border-color: var(--border-color);">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b" style="border-color: var(--border-color);">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider" style="color: var(--text-muted);">Bilan quotidien détaillé</span>
            <h3 class="font-extrabold text-xl mt-0.5 tracking-tight" id="inspectorDayTitle">Compte rendu</h3>
          </div>
          <div id="statsDaySelector" class="flex flex-wrap gap-1.5"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="font-bold text-sm">Matières travaillées ce jour</h4>
              <button onclick="openManualTimeModal(getSelectedDateKey())" class="text-xs theme-accent-text font-bold hover:underline">+ Ajouter du temps</button>
            </div>
            <div id="inspectorSubjectsList" class="space-y-2.5"></div>

            <div class="pt-3 border-t" style="border-color: var(--border-color);">
              <h5 class="text-xs font-semibold uppercase tracking-wider mb-2" style="color: var(--text-muted);">Détail des sessions enregistrées</h5>
              <div id="inspectorSessionsList" class="space-y-2"></div>
            </div>
          </div>

          <div class="space-y-5">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-sm">Tâches de ce jour</h4>
                <span id="inspectorTasksBadge" class="text-xs font-bold px-2.5 py-0.5 rounded-full theme-accent-soft-bg theme-accent-text">0/0 faites</span>
              </div>
              <div id="inspectorTasksList" class="space-y-2"></div>
            </div>

            <div class="pt-3 border-t space-y-3" style="border-color: var(--border-color);">
              <div class="flex items-center justify-between">
                <h4 class="font-bold text-sm">Objectifs quotidiens atteints</h4>
                <span id="inspectorGoalsBadge" class="text-xs font-bold px-2.5 py-0.5 rounded-full theme-accent-soft-bg theme-accent-text">0/0 atteints</span>
              </div>
              <div id="inspectorGoalsList" class="space-y-2"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- CUMUL DE LA SEMAINE PAR MATIÈRE -->
      <div class="card rounded-2xl p-6">
        <h3 class="font-extrabold text-lg mb-4 tracking-tight">Cumul de la semaine par matière</h3>
        <div id="subjectBreakdownList" class="space-y-3.5"></div>
      </div>

      <!-- GALERIE DES 11 BADGES DE RÉGULARITÉ -->
      <div id="badgesSectionCard" class="card rounded-2xl p-6 space-y-5">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4" style="border-color: var(--border-color);">
          <div>
            <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">Récompenses & Discipline</span>
            <h3 class="font-extrabold text-xl mt-0.5 tracking-tight">Panthéon des Badges de Régularité</h3>
            <p class="text-xs mt-0.5" style="color: var(--text-muted);">Réussis 100 % de tes objectifs quotidiens plusieurs jours d'affilée pour débloquer chaque rang (clique sur un badge débloqué pour revoir son animation).</p>
          </div>
          <div id="statsCurrentStreakBox" class="px-4 py-2.5 rounded-2xl border text-right flex-shrink-0" style="background-color: var(--bg-main); border-color: var(--border-color);"></div>
        </div>

        <div id="badgesGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"></div>
      </div>
    </section>

    <!-- ========================================================== -->
    <!-- VUE 4 : PARAMÈTRES, MATIÈRES & SYNCHRO MULTI-APPAREILS     -->
    <!-- ========================================================== -->
    <section id="view-settings" class="hidden max-w-2xl mx-auto space-y-6">
      <div class="card rounded-2xl p-6 space-y-5">
        <div>
          <h3 class="font-extrabold text-lg tracking-tight">Paramétrer mes Matières & Couleurs</h3>
          <p class="text-xs mt-0.5" style="color: var(--text-muted);">Associe une couleur à chaque matière ou renomme tes matières existantes.</p>
        </div>

        <form onsubmit="addSubject(event)" class="p-4 rounded-2xl border space-y-4" style="background-color: var(--bg-main); border-color: var(--border-color);">
          <div>
            <label class="block text-xs font-semibold mb-1.5" style="color: var(--text-muted);">Nom de la nouvelle matière</label>
            <input type="text" id="newSubjectInput" maxlength="40" autocomplete="off" placeholder="Ex: Biochimie, Biologie Cellulaire, Biophysique..." required class="input-field w-full px-3.5 py-2.5 rounded-xl text-sm focus:outline-none" />
          </div>

          <div class="flex flex-wrap items-center justify-between gap-4 pt-1">
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold" style="color: var(--text-muted);">Couleur :</span>
              <div id="subjectPresetPalette" class="flex items-center gap-2.5"></div>
              <div class="h-5 w-[1px]" style="background-color: var(--border-color);"></div>
              <label class="relative flex items-center gap-1.5 px-2.5 py-1 rounded-xl border text-xs font-semibold cursor-pointer hover:opacity-85 transition" style="border-color: var(--border-color); background-color: var(--bg-input);">
                <input type="color" id="newSubjectColorInput" value="#10b981" onchange="renderSettings()" class="w-5 h-5 rounded cursor-pointer bg-transparent border-0" />
                <span>Autre</span>
              </label>
            </div>
            <button type="submit" class="theme-btn-primary px-5 py-2.5 rounded-xl text-sm font-bold">+ Ajouter</button>
          </div>
        </form>

        <div class="space-y-2" id="subjectsListEditor"></div>
      </div>

      <!-- SYNCHRONISATION MULTI-APPAREILS (TÉLÉPHONE & TABLETTE) -->
      <div class="card rounded-2xl p-6 space-y-4">
        <div class="flex items-start justify-between gap-3">
          <div>
            <h3 class="font-extrabold text-lg tracking-tight">Synchronisation Téléphone & Tablette</h3>
            <p class="text-xs mt-0.5" style="color: var(--text-muted);">Synchronisation chiffrée via ton compte App Store (iCloud) / Play Store, ou via ta clé Cloud multi-appareils.</p>
          </div>
          <span id="settingsSyncBadge" class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex-shrink-0">🛡️ Protégé</span>
        </div>

        <div class="p-4 rounded-2xl border space-y-3" style="background-color: var(--bg-main); border-color: var(--border-color);">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-xs font-bold block">Identifiant de synchronisation Cloud</span>
              <span class="text-[11px]" style="color: var(--text-muted);">Entre ce même code sur ta tablette pour partager tes données en temps réel</span>
            </div>
            <div class="flex items-center gap-2">
              <input type="text" id="syncKeyInput" maxlength="24" autocomplete="off" spellcheck="false" placeholder="Code Synchro" class="input-field px-3 py-1.5 rounded-xl text-xs font-mono-timer font-bold w-36 text-center uppercase" />
              <button type="button" onclick="applyCustomSyncKey()" class="theme-btn-primary px-3.5 py-1.5 rounded-xl text-xs font-bold">Lier</button>
            </div>
          </div>

          <div class="pt-2 border-t flex flex-wrap items-center justify-between gap-2 text-[11px]" style="border-color: var(--border-color); color: var(--text-muted);">
            <span id="lastSyncTimestampText">Dernière sauvegarde : à l'instant</span>
            <button type="button" onclick="CloudSyncEngine.forceSyncNow()" class="font-bold underline hover:opacity-80" style="color: var(--text-main);">↻ Synchroniser maintenant</button>
          </div>
        </div>
      </div>

      <div class="card rounded-2xl p-6 space-y-4">
        <div>
          <h3 class="font-extrabold text-lg tracking-tight">Thème de l'interface</h3>
          <p class="text-xs mt-0.5" style="color: var(--text-muted);">Les contrastes s'adaptent automatiquement au thème choisi.</p>
        </div>
        <div class="grid grid-cols-3 gap-3 pt-1">
          <button onclick="setTheme('oled')" id="theme-btn-oled" class="p-3 rounded-xl border text-left transition flex flex-col gap-2 hover:scale-[1.01]">
            <div class="w-full h-8 rounded-lg bg-black border border-zinc-800 flex items-center px-2 gap-1.5"><span class="w-3 h-3 rounded-full bg-white"></span><span class="w-8 h-2 rounded bg-zinc-800"></span></div>
            <span class="text-xs font-bold">Noir Pur (OLED)</span>
          </button>
          <button onclick="setTheme('dark')" id="theme-btn-dark" class="p-3 rounded-xl border text-left transition flex flex-col gap-2 hover:scale-[1.01]">
            <div class="w-full h-8 rounded-lg bg-slate-900 border border-slate-700 flex items-center px-2 gap-1.5"><span class="w-3 h-3 rounded-full bg-slate-200"></span><span class="w-8 h-2 rounded bg-slate-700"></span></div>
            <span class="text-xs font-bold">Gris Sombre</span>
          </button>
          <button onclick="setTheme('light')" id="theme-btn-light" class="p-3 rounded-xl border text-left transition flex flex-col gap-2 hover:scale-[1.01]">
            <div class="w-full h-8 rounded-lg bg-slate-100 border border-slate-300 flex items-center px-2 gap-1.5"><span class="w-3 h-3 rounded-full bg-slate-900"></span><span class="w-8 h-2 rounded bg-slate-300"></span></div>
            <span class="text-xs font-bold">Mode Clair</span>
          </button>
        </div>
      </div>

      <div class="card rounded-2xl p-6 space-y-4">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="font-extrabold text-lg tracking-tight">Objectif d'heures quotidien</h3>
            <p class="text-xs" style="color: var(--text-muted);">Définis ton rythme cible par jour.</p>
          </div>
          <span id="goalSliderValue" class="text-xl font-extrabold theme-accent-text font-mono-timer">7h / jour</span>
        </div>
        <input type="range" id="goalRangeInput" min="1" max="14" step="0.5" value="7" oninput="updateDailyGoal(this.value)" class="w-full accent-current cursor-pointer" />
        <div class="flex justify-between text-[11px]" style="color: var(--text-muted);">
          <span>1h (Léger)</span><span>6h (Régulier)</span><span>10h (Intensif)</span><span>14h (Concours)</span>
        </div>
      </div>
    </section>

  </main>

  <!-- MODALE D'ANIMATION : DÉBLOCAGE DE BADGE + CONFETTIS -->
  <div id="badgeCelebrationModal" class="fixed inset-0 z-50 hidden bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-hidden" onclick="closeBadgeCelebrationModal()">
    <canvas id="confettiCanvas" class="fixed inset-0 pointer-events-none z-0"></canvas>
    <div class="card badge-pop-card relative z-10 rounded-3xl max-w-sm w-full p-7 text-center space-y-4 border-2 border-amber-400/80" onclick="event.stopPropagation()">
      <div class="w-20 h-20 mx-auto rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center">
        <span id="celebrationBadgeIcon" class="text-5xl badge-float-icon select-none">🔥</span>
      </div>
      <div class="space-y-1">
        <span id="celebrationBadgePill" class="text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400 text-black inline-block">Nouveau Badge Débloqué !</span>
        <h3 id="celebrationBadgeTitle" class="text-2xl font-black pt-1">Rang Apprenti</h3>
        <p id="celebrationBadgePeriod" class="text-xs font-bold text-amber-400">1 jour d'objectifs à 100 %</p>
      </div>
      <p id="celebrationBadgeMessage" class="text-sm italic leading-relaxed px-2 py-3 rounded-2xl border" style="background-color: var(--bg-main); border-color: var(--border-color); color: var(--text-main);"></p>
      <button type="button" onclick="closeBadgeCelebrationModal()" class="w-full py-3 rounded-2xl font-extrabold text-sm bg-amber-400 text-black hover:opacity-90 transition shadow-lg">
        Continuer sur ma lancée 🚀
      </button>
    </div>
  </div>

  <!-- MODALE : AJOUT MANUEL DE TEMPS -->
  <div id="manualTimeModal" class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onclick="$('manualTimeModal').classList.add('hidden')">
    <div class="card rounded-2xl max-w-md w-full p-6 space-y-4 view-animate" onclick="event.stopPropagation()">
      <div class="flex justify-between items-center">
        <h3 class="font-extrabold text-lg">Ajouter une session d'étude</h3>
        <button onclick="$('manualTimeModal').classList.add('hidden')" class="text-sm opacity-70 hover:opacity-100 p-1">✕</button>
      </div>
      <form onsubmit="submitManualTime(event)" class="space-y-4">
        <div>
          <label class="block text-xs font-semibold mb-1" style="color: var(--text-muted);">Date de la session</label>
          <input type="date" id="manualDateInput" required class="input-field w-full px-3 py-2.5 rounded-xl text-sm" />
        </div>
        <div>
          <label class="block text-xs font-semibold mb-1" style="color: var(--text-muted);">Matière</label>
          <select id="manualSubjectSelect" class="input-field w-full px-3 py-2.5 rounded-xl text-sm"></select>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-semibold mb-1" style="color: var(--text-muted);">Heures</label>
            <input type="number" id="manualHoursInput" min="0" max="15" value="1" required class="input-field w-full px-3 py-2.5 rounded-xl text-sm" />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1" style="color: var(--text-muted);">Minutes</label>
            <input type="number" id="manualMinutesInput" min="0" max="59" value="30" required class="input-field w-full px-3 py-2.5 rounded-xl text-sm" />
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" onclick="$('manualTimeModal').classList.add('hidden')" class="px-4 py-2 rounded-xl text-sm font-medium" style="color: var(--text-muted);">Annuler</button>
          <button type="submit" class="theme-btn-primary px-5 py-2 rounded-xl text-sm font-bold">Enregistrer</button>
        </div>
      </form>
    </div>
  </div>

  <!-- NAVIGATION MOBILE -->
  <nav class="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t px-2 pt-2 safe-bottom-nav flex justify-around items-center backdrop-blur-xl" style="background-color: color-mix(in srgb, var(--bg-card) 88%, transparent); border-color: var(--border-color);">
    <button onclick="switchTab('dashboard')" id="nav-mob-dashboard" class="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
      <span>Aujourd'hui</span>
    </button>
    <button onclick="switchTab('timer')" id="nav-mob-timer" class="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 7v5l3 3"/></svg>
      <span>Chrono</span>
    </button>
    <button onclick="switchTab('stats')" id="nav-mob-stats" class="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
      <span>Bilan</span>
    </button>
    <button onclick="switchTab('settings')" id="nav-mob-settings" class="flex flex-col items-center gap-1 py-1 px-3 rounded-xl text-xs font-semibold transition">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
      <span>Matières</span>
    </button>
  </nav>

  <script>
    'use strict';

    const STORAGE_KEY = 'focuspass_v4';
    const $ = id => document.getElementById(id);
    const esc = str => String(str ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

    // =========================================================================
    // BOUCLIER DE SÉCURITÉ (SECURITY GUARD) : ANTI-XSS, ANTI-INJECTION & SANITIZATION
    // =========================================================================
    const SecurityGuard = Object.freeze({
      // Supprime les caractères de contrôle, balises suspectes et limite la taille
      cleanText(val, maxLen = 120) {
        if (typeof val !== 'string') return '';
        return val
          .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
          .replace(/<[^>]*>?/gm, '')
          .trim()
          .slice(0, maxLen);
      },
      isValidHexColor(hex) {
        return typeof hex === 'string' && /^#[0-9a-fA-F]{6}$/.test(hex);
      },
      cleanHexColor(hex, fallback = '#3b82f6') {
        return this.isValidHexColor(hex) ? hex.toLowerCase() : fallback;
      },
      isValidDateKey(key) {
        return typeof key === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(key);
      },
      cleanSyncKey(key) {
        if (typeof key !== 'string') return '';
        return key.toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 24);
      },
      clampNumber(num, min, max, fallback) {
        const n = Number(num);
        if (!Number.isFinite(n)) return fallback;
        return Math.min(max, Math.max(min, n));
      },
      // Parse JSON en bloquant toute attaque par Prototype Pollution (__proto__, constructor, prototype)
      safeJsonParse(rawStr) {
        if (typeof rawStr !== 'string' || rawStr.length > 500000) return null;
        try {
          return JSON.parse(rawStr, (key, value) => {
            if (key === '__proto__' || key === 'constructor' || key === 'prototype') return undefined;
            return value;
          });
        } catch {
          return null;
        }
      }
    });

    const DAYS_SHORT = Object.freeze(['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']);
    const DAYS_FULL = Object.freeze(['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']);
    const MAIN_5_COLORS = Object.freeze(['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ec4899']);

    const PRIORITIES = Object.freeze({
      urgent:    Object.freeze({ label: 'Urgent',    bg: 'rgba(239,68,68,0.14)', border: 'rgba(239,68,68,0.35)', text: '#f87171', order: 1, next: 'important' }),
      important: Object.freeze({ label: 'Important', bg: 'rgba(245,158,11,0.14)', border: 'rgba(245,158,11,0.35)', text: '#fbbf24', order: 2, next: 'todo' }),
      todo:      Object.freeze({ label: 'À faire',   bg: 'rgba(59,130,246,0.14)', border: 'rgba(59,130,246,0.35)', text: '#60a5fa', order: 3, next: 'urgent' })
    });

    const STREAK_BADGES = Object.freeze([
      Object.freeze({ days: 1,    period: '1 jour',     title: 'Apprenti',    icon: '🌱', message: "Le plus dur, c'est de s'y mettre. Tu as fait le premier pas, c'est top !" }),
      Object.freeze({ days: 3,    period: '3 jours',    title: 'Initié',      icon: '🔥', message: "Trois jours de suite ! Tu as compris le principe, ne casse surtout pas la chaîne." }),
      Object.freeze({ days: 7,    period: '1 semaine',  title: 'Pratiquant',  icon: '⚡', message: "Une semaine complète ! Ce n'est plus un simple essai, ça commence à devenir une vraie habitude." }),
      Object.freeze({ days: 14,   period: '2 semaines', title: 'Challenger',  icon: '🚀', message: "14 jours sans flancher. T'es une vraie machine, le processus est bien enclenché !" }),
      Object.freeze({ days: 30,   period: '1 mois',     title: 'Adepte',      icon: '🏅', message: "Un mois entier ! 30 jours de discipline. Prends deux secondes pour apprécier le chemin parcouru." }),
      Object.freeze({ days: 90,   period: '3 mois',     title: 'Spécialiste', icon: '💎', message: "Un trimestre au top. La motivation c'est bien, mais là c'est ta détermination qui parle." }),
      Object.freeze({ days: 180,  period: '6 mois',     title: 'Expert',      icon: '🛡️', message: "Une demi-année ! Tu as un mental d'acier. Plus grand-chose ne peut t'arrêter maintenant." }),
      Object.freeze({ days: 365,  period: '1 an',       title: 'Maître',      icon: '👑', message: "365 jours ! C'est monumental. Tu maîtrises ton sujet à la perfection." }),
      Object.freeze({ days: 730,  period: '2 ans',      title: 'Sage',        icon: '🧙‍♂️', message: "Deux ans de régularité. À ce stade, c'est toi qui devrais donner des conseils aux autres !" }),
      Object.freeze({ days: 1825, period: '5 ans',      title: 'Oracle',      icon: '🌌', message: "Cinq ans... Tu n'as pas juste adopté une habitude, tu as carrément changé de vie. Une vraie masterclass." }),
      Object.freeze({ days: 3650, period: '10 ans',     title: 'Légende',     icon: '🏛️', message: "Une décennie complète. On n'a même plus les mots. Bienvenue au Panthéon !" })
    ]);

    let toastTimer = null;
    function showToast(text, icon = '✨') {
      const t = $('appToast');
      if (!t) return;
      $('appToastIcon').textContent = icon;
      $('appToastText').textContent = text;
      t.classList.remove('opacity-0', 'translate-y-3');
      t.classList.add('opacity-100', 'translate-y-0');
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        t.classList.remove('opacity-100', 'translate-y-0');
        t.classList.add('opacity-0', 'translate-y-3');
      }, 2400);
    }

    // =========================================================================
    // OUTILS DE DATES & VERROUILLAGE DES OBJECTIFS (FENÊTRE J-2 À JOUR J)
    // =========================================================================
    function toDateKey(d) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }

    function parseDateKey(key) {
      if (!SecurityGuard.isValidDateKey(key)) return new Date();
      const [y, m, d] = key.split('-').map(Number);
      return new Date(y, m - 1, d, 12, 0, 0);
    }

    function addDays(dateObj, n) {
      const d = new Date(dateObj.getFullYear(), dateObj.getMonth(), dateObj.getDate(), 12, 0, 0);
      d.setDate(d.getDate() + n);
      return d;
    }

    function getMondayOfWeek(weekOffset = 0) {
      const now = new Date();
      const dayIdx = (now.getDay() + 6) % 7;
      return addDays(now, -dayIdx + (weekOffset * 7));
    }

    function getWeekDates(weekOffset = 0) {
      const mon = getMondayOfWeek(weekOffset);
      return [0, 1, 2, 3, 4, 5, 6].map(i => addDays(mon, i));
    }

    function getWeekDateKeys(weekOffset = 0) {
      return getWeekDates(weekOffset).map(toDateKey);
    }

    function formatShortDate(dateObj) {
      return `${String(dateObj.getDate()).padStart(2, '0')}/${String(dateObj.getMonth() + 1).padStart(2, '0')}`;
    }

    function formatTaskOriginDate(dateKey) {
      const d = parseDateKey(dateKey);
      const dayIdx = (d.getDay() + 6) % 7;
      return `${DAYS_FULL[dayIdx]} ${formatShortDate(d)}`;
    }

    const getTodayIndex = () => (new Date().getDay() + 6) % 7;
    const getTodayKey = () => toDateKey(new Date());

    function isGoalDateEditable(dateKey) {
      const todayNoon = parseDateKey(getTodayKey());
      const targetNoon = parseDateKey(dateKey);
      const diffDays = Math.round((todayNoon - targetNoon) / 86400000);
      return diffDays >= 0 && diffDays <= 2;
    }

    let selectedDayIndex = getTodayIndex();
    let statsWeekOffset = 0;
    let currentTimerSubject = 'Anatomie';
    let currentPriorityFilter = 'all';

    function getSelectedDateKey() {
      return getWeekDateKeys(statsWeekOffset)[selectedDayIndex];
    }

    function getDashboardDateKey() {
      return getWeekDateKeys(0)[selectedDayIndex];
    }

    function getOverdueTasks() {
      const todayKey = getTodayKey();
      return sortTasksByPriority(state.tasks.filter(t => !t.done && t.date < todayKey));
    }

    // =========================================================================
    // ÉTAT PAR DÉFAUT À LA PREMIÈRE OUVERTURE :
    // 1 seule matière, 1 seule tâche non faite, 1 seul objectif non réalisé, 0h
    // =========================================================================
    function generateDefaultSyncKey() {
      const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const arr = new Uint8Array(6);
      if (window.crypto?.getRandomValues) window.crypto.getRandomValues(arr);
      else for (let i = 0; i < 6; i++) arr[i] = Math.floor(Math.random() * 256);
      let code = 'FP-';
      for (let i = 0; i < 6; i++) code += chars[arr[i] % chars.length];
      return code;
    }

    function createDefaultState() {
      const todayKey = getTodayKey();
      return {
        updatedAt: Date.now(),
        syncKey: generateDefaultSyncKey(),
        theme: 'oled',
        dailyGoalHours: 7,
        subjects: [
          { name: 'Anatomie', color: '#3b82f6' }
        ],
        tasks: [
          { id: 1, date: todayKey, title: 'Réviser mon premier cours', subject: 'Anatomie', priority: 'important', done: false }
        ],
        goals: [
          { id: 201, title: '8h de sommeil', completedDates: [] }
        ],
        sessions: []
      };
    }

    // Validation & nettoyage complet d'un état chargé (depuis localStorage ou Cloud)
    function migrateLoadedState(s) {
      if (!s || typeof s !== 'object' || !Array.isArray(s.subjects) || s.subjects.length === 0) {
        return createDefaultState();
      }
      const curWeek = getWeekDateKeys(0);
      const todayKey = getTodayKey();

      const cleanSubjects = s.subjects
        .slice(0, 30)
        .map(sub => ({
          name: SecurityGuard.cleanText(sub?.name, 40) || 'Anatomie',
          color: SecurityGuard.cleanHexColor(sub?.color, '#3b82f6')
        }));
      if (cleanSubjects.length === 0) cleanSubjects.push({ name: 'Anatomie', color: '#3b82f6' });
      const defaultSubj = cleanSubjects[0].name;

      const cleanTasks = Array.isArray(s.tasks)
        ? s.tasks.slice(0, 500).map((t, idx) => {
            const dKey = SecurityGuard.isValidDateKey(t?.date) ? t.date : (curWeek[t?.dayIndex ?? 0] || todayKey);
            const title = SecurityGuard.cleanText(t?.title, 120);
            if (!title) return null;
            return {
              id: Number(t?.id) || (Date.now() + idx),
              date: dKey,
              title,
              subject: SecurityGuard.cleanText(t?.subject, 40) || defaultSubj,
              priority: PRIORITIES[t?.priority] ? t.priority : 'todo',
              done: Boolean(t?.done)
            };
          }).filter(Boolean)
        : [];

      const cleanGoals = Array.isArray(s.goals)
        ? s.goals.slice(0, 60).map((g, idx) => {
            const title = SecurityGuard.cleanText(g?.title, 60);
            if (!title) return null;
            const rawDates = Array.isArray(g?.completedDates)
              ? g.completedDates
              : (Array.isArray(g?.completedDays) ? g.completedDays.map(i => curWeek[i]) : []);
            const validDates = [...new Set(rawDates.filter(d => SecurityGuard.isValidDateKey(d)))];
            return {
              id: Number(g?.id) || (Date.now() + idx),
              title,
              completedDates: validDates
            };
          }).filter(Boolean)
        : createDefaultState().goals;

      const cleanSessions = Array.isArray(s.sessions)
        ? s.sessions.slice(0, 1000).map((sess, idx) => {
            const dKey = SecurityGuard.isValidDateKey(sess?.date) ? sess.date : (curWeek[sess?.dayIndex ?? 0] || todayKey);
            return {
              id: Number(sess?.id) || (Date.now() + idx),
              date: dKey,
              subject: SecurityGuard.cleanText(sess?.subject, 40) || defaultSubj,
              minutes: SecurityGuard.clampNumber(sess?.minutes, 1, 1440, 30),
              time: SecurityGuard.cleanText(sess?.time, 10) || '12:00'
            };
          })
        : [];

      return {
        updatedAt: SecurityGuard.clampNumber(s.updatedAt, 0, Date.now() + 86400000, Date.now()),
        syncKey: SecurityGuard.cleanSyncKey(s.syncKey) || generateDefaultSyncKey(),
        theme: ['oled', 'dark', 'light'].includes(s.theme) ? s.theme : 'oled',
        dailyGoalHours: SecurityGuard.clampNumber(s.dailyGoalHours, 1, 14, 7),
        subjects: cleanSubjects,
        tasks: cleanTasks,
        goals: cleanGoals,
        sessions: cleanSessions
      };
    }

    let state = (() => {
      try {
        const raw = SecurityGuard.safeJsonParse(localStorage.getItem(STORAGE_KEY));
        return raw ? migrateLoadedState(raw) : createDefaultState();
      } catch { return createDefaultState(); }
    })();
    if (state.subjects.length) currentTimerSubject = state.subjects[0].name;

    // =========================================================================
    // MOTEUR DE SYNCHRONISATION SÉCURISÉ (APP STORE iCloud / PLAY STORE / CLOUD)
    // =========================================================================
    const CloudSyncEngine = {
      cloudEndpoint: null,
      broadcastChannel: ('BroadcastChannel' in window) ? new BroadcastChannel('focuspass_sync_channel') : null,
      lastPushTime: 0,

      init() {
        if (this.broadcastChannel) {
          this.broadcastChannel.onmessage = ev => {
            if (ev.data && typeof ev.data === 'object' && ev.data.updatedAt > (state.updatedAt || 0)) {
              this.applyRemoteState(ev.data, false);
            }
          };
        }

        window.addEventListener('storage', ev => {
          if (ev.key === STORAGE_KEY && ev.newValue) {
            const incoming = SecurityGuard.safeJsonParse(ev.newValue);
            if (incoming && incoming.updatedAt > (state.updatedAt || 0)) {
              this.applyRemoteState(incoming, false);
            }
          }
        });

        window.addEventListener('focuspassNativeCloudUpdate', ev => {
          const incoming = ev.detail;
          if (incoming && incoming.updatedAt > (state.updatedAt || 0)) {
            this.applyRemoteState(incoming, true);
          }
        });

        window.onNativeCloudStateReceived = jsonPayload => {
          const incoming = typeof jsonPayload === 'string' ? SecurityGuard.safeJsonParse(jsonPayload) : jsonPayload;
          if (incoming && incoming.updatedAt > (state.updatedAt || 0)) {
            this.applyRemoteState(incoming, true);
          }
        };

        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') {
            this.pullFromCloud(false);
          }
        });

        this.pullFromCloud(false);
      },

      setStatusUI(statusText, isSyncing = false) {
        const dot = $('cloudStatusDot');
        const label = $('cloudStatusLabel');
        const badge = $('settingsSyncBadge');
        const tsText = $('lastSyncTimestampText');
        if (dot) {
          dot.className = `w-2 h-2 rounded-full ${isSyncing ? 'bg-amber-400 animate-ping' : 'bg-emerald-400'}`;
        }
        if (label) label.textContent = statusText;
        if (badge) badge.textContent = isSyncing ? '↻ Synchro...' : '🛡️ Protégé & Synchro';
        if (tsText) {
          const timeStr = new Date(state.updatedAt || Date.now()).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
          tsText.textContent = `Dernière sauvegarde vérifiée : ${timeStr}`;
        }
      },

      applyRemoteState(incomingRaw, notifyUser = false) {
        state = migrateLoadedState(incomingRaw);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        applyTheme();
        renderAll();
        this.setStatusUI('Protégé & Synchro', false);
        if (notifyUser) showToast('Données synchronisées depuis ton autre appareil', '☁️');
      },

      async pushToCloud() {
        const now = Date.now();
        if (now - this.lastPushTime < 150) return; // Anti-spam / Rate-limiting
        this.lastPushTime = now;

        this.setStatusUI('Synchro...', true);
        const payloadStr = JSON.stringify(state);

        try { this.broadcastChannel?.postMessage(state); } catch {}

        try {
          if (window.webkit?.messageHandlers?.icloudSync) {
            window.webkit.messageHandlers.icloudSync.postMessage({ action: 'save', key: STORAGE_KEY, data: payloadStr });
          }
        } catch {}

        try {
          if (window.AndroidCloudSync?.saveState) {
            window.AndroidCloudSync.saveState(STORAGE_KEY, payloadStr);
          }
          if (window.Capacitor?.Plugins?.CloudSettings) {
            await window.Capacitor.Plugins.CloudSettings.set({ key: STORAGE_KEY, value: payloadStr });
          }
        } catch {}

        const safeKey = SecurityGuard.cleanSyncKey(state.syncKey);
        if (this.cloudEndpoint && safeKey.length >= 4) {
          try {
            await fetch(`${this.cloudEndpoint}/focuspass_users/${encodeURIComponent(safeKey)}.json`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: payloadStr
            });
          } catch {}
        }

        setTimeout(() => this.setStatusUI('Protégé & Synchro', false), 280);
      },

      async pullFromCloud(notify = false) {
        try {
          if (window.webkit?.messageHandlers?.icloudSync) {
            window.webkit.messageHandlers.icloudSync.postMessage({ action: 'load', key: STORAGE_KEY });
          }
          if (window.AndroidCloudSync?.loadState) {
            const nativeData = window.AndroidCloudSync.loadState(STORAGE_KEY);
            if (nativeData) window.onNativeCloudStateReceived(nativeData);
          }
          if (window.Capacitor?.Plugins?.CloudSettings) {
            const res = await window.Capacitor.Plugins.CloudSettings.get({ key: STORAGE_KEY });
            if (res?.value) window.onNativeCloudStateReceived(res.value);
          }
        } catch {}

        const safeKey = SecurityGuard.cleanSyncKey(state.syncKey);
        if (this.cloudEndpoint && safeKey.length >= 4) {
          try {
            const resp = await fetch(`${this.cloudEndpoint}/focuspass_users/${encodeURIComponent(safeKey)}.json`);
            if (resp.ok) {
              const rawText = await resp.text();
              const remote = SecurityGuard.safeJsonParse(rawText);
              if (remote && remote.updatedAt > (state.updatedAt || 0)) {
                this.applyRemoteState(remote, true);
                return;
              }
            }
          } catch {}
        }

        this.setStatusUI('Protégé & Synchro', false);
        if (notify) showToast('Appareils synchronisés et vérifiés', '🛡️');
      },

      forceSyncNow() {
        this.pushToCloud();
        this.pullFromCloud(true);
      }
    };

    function saveState() {
      state.updatedAt = Date.now();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      CloudSyncEngine.pushToCloud();
    }

    function applyCustomSyncKey() {
      const input = $('syncKeyInput');
      const val = SecurityGuard.cleanSyncKey(input?.value || '');
      if (!val || val.length < 4) {
        showToast('Entre un code alphanumérique d\'au moins 4 caractères', '⚠️');
        return;
      }
      state.syncKey = val;
      if (input) input.value = val;
      saveState();
      CloudSyncEngine.forceSyncNow();
      showToast(`Code Cloud "${val}" sécurisé et lié`, '🔗');
    }

    const getSubjectColor = name => state.subjects.find(s => s.name === name)?.color || '#3b82f6';
    const getDateTotalMinutes = dateKey => state.sessions.filter(s => s.date === dateKey).reduce((a, s) => a + s.minutes, 0);
    const formatMinutes = m => `${Math.floor(m / 60)}h ${String(Math.round(m % 60)).padStart(2, '0')}m`;

    function getDateSubjectBreakdown(dateKey) {
      return state.sessions.filter(s => s.date === dateKey).reduce((map, s) => {
        map[s.subject] = (map[s.subject] || 0) + s.minutes;
        return map;
      }, {});
    }

    function sortTasksByPriority(tasks) {
      return [...tasks].sort((a, b) => {
        if (a.done !== b.done) return a.done ? 1 : -1;
        return (PRIORITIES[a.priority]?.order || 3) - (PRIORITIES[b.priority]?.order || 3);
      });
    }

    // =========================================================================
    // CALCUL DE LA SÉRIE (STREAK) & ANIMATION CONFETTIS DE BADGE
    // =========================================================================
    function isDateAllGoalsCompleted(dateKey) {
      if (!state.goals.length) return false;
      return state.goals.every(g => Array.isArray(g.completedDates) && g.completedDates.includes(dateKey));
    }

    function calculateCurrentGoalStreak() {
      if (!state.goals.length) return 0;
      const today = new Date();
      let cursor = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12, 0, 0);

      if (!isDateAllGoalsCompleted(toDateKey(cursor))) {
        cursor = addDays(cursor, -1);
        if (!isDateAllGoalsCompleted(toDateKey(cursor))) return 0;
      }

      let streak = 0;
      while (streak < 4000 && isDateAllGoalsCompleted(toDateKey(cursor))) {
        streak++;
        cursor = addDays(cursor, -1);
      }
      return streak;
    }

    function getBadgeStatus(streak) {
      let currentBadge = null;
      let nextBadge = STREAK_BADGES[0];
      for (let i = 0; i < STREAK_BADGES.length; i++) {
        if (streak >= STREAK_BADGES[i].days) {
          currentBadge = STREAK_BADGES[i];
          nextBadge = STREAK_BADGES[i + 1] || null;
        } else {
          nextBadge = STREAK_BADGES[i];
          break;
        }
      }
      return { currentBadge, nextBadge };
    }

    let confettiAnimId = null;
    function launchConfettiCanvas() {
      const canvas = $('confettiCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ['#fbbf24', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#ffffff'];
      const pieces = Array.from({ length: 85 }, () => ({
        x: canvas.width / 2 + (Math.random() - 0.5) * 160,
        y: canvas.height / 2 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 15,
        vy: -Math.random() * 14 - 4,
        size: Math.random() * 7 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.25
      }));

      if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
      function frame() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;
        pieces.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.36;
          p.vx *= 0.99;
          p.rot += p.vRot;
          if (p.y < canvas.height + 20) active = true;
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rot);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
          ctx.restore();
        });
        if (active) confettiAnimId = requestAnimationFrame(frame);
      }
      frame();
    }

    function playCelebrationChime() {
      try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
          const osc = audioCtx.createOscillator();
          const g = audioCtx.createGain();
          osc.type = 'triangle';
          osc.frequency.value = freq;
          const start = audioCtx.currentTime + i * 0.09;
          g.gain.setValueAtTime(0.001, start);
          g.gain.linearRampToValueAtTime(0.12, start + 0.02);
          g.gain.exponentialRampToValueAtTime(0.0001, start + 0.45);
          osc.connect(g);
          g.connect(audioCtx.destination);
          osc.start(start);
          osc.stop(start + 0.46);
        });
      } catch {}
    }

    function showBadgeCelebrationModal(badge, isNewUnlock = true) {
      $('celebrationBadgeIcon').textContent = badge.icon;
      $('celebrationBadgePill').textContent = isNewUnlock ? '🎉 Nouveau Badge Débloqué !' : `Palier ${badge.period}`;
      $('celebrationBadgeTitle').textContent = `Badge ${badge.title}`;
      $('celebrationBadgePeriod').textContent = `${badge.period} (${badge.days} jour${badge.days > 1 ? 's' : ''} d'affilée à 100 %)`;
      $('celebrationBadgeMessage').textContent = `« ${badge.message} »`;
      $('badgeCelebrationModal').classList.remove('hidden');
      launchConfettiCanvas();
      playCelebrationChime();
    }

    function closeBadgeCelebrationModal() {
      $('badgeCelebrationModal').classList.add('hidden');
      if (confettiAnimId) cancelAnimationFrame(confettiAnimId);
    }

    function previewBadgeByDays(days) {
      const b = STREAK_BADGES.find(x => x.days === days);
      if (b) showBadgeCelebrationModal(b, false);
    }

    // =========================================================================
    // MOTEUR AUDIO UNIFIÉ (BRUITS COLORÉS + ONDES BINAURALES 6 Hz)
    // =========================================================================
    let audioCtx = null, activeAudioType = null, activeSourceNode = null, activeSecondSource = null, activeGainNode = null;
    let noiseVolume = 0.35;
    const cachedNoiseBuffers = {};

    function createNoiseBuffer(type) {
      if (cachedNoiseBuffers[type]) return cachedNoiseBuffers[type];
      const sr = audioCtx.sampleRate, len = sr * 10, buffer = audioCtx.createBuffer(1, len, sr), data = buffer.getChannelData(0);

      if (type === 'white') {
        for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * 0.45;
      } else if (type === 'pink') {
        let b0=0, b1=0, b2=0, b3=0, b4=0, b5=0, b6=0;
        for (let i = 0; i < len; i++) {
          const w = Math.random() * 2 - 1;
          b0 = 0.99886*b0 + w*0.0555179; b1 = 0.99332*b1 + w*0.0750759; b2 = 0.96900*b2 + w*0.1538520;
          b3 = 0.86650*b3 + w*0.3104856; b4 = 0.55000*b4 + w*0.5329522; b5 = -0.7616*b5 - w*0.0168980;
          data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + w*0.5362) * 0.08; b6 = w * 0.115926;
        }
      } else {
        let last = 0;
        for (let i = 0; i < len; i++) {
          last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02;
          data[i] = last * 2.8;
        }
      }
      const fade = Math.floor(sr * 0.05);
      for (let i = 0; i < fade; i++) {
        const f = i / fade;
        data[i] = data[i] * f + data[len - fade + i] * (1 - f);
      }
      return (cachedNoiseBuffers[type] = buffer);
    }

    function stopCurrentAudio() {
      if (activeGainNode && audioCtx) {
        const g = activeGainNode, s1 = activeSourceNode, s2 = activeSecondSource;
        try {
          g.gain.setTargetAtTime(0.0001, audioCtx.currentTime, 0.08);
          setTimeout(() => { try { s1?.stop(); s1?.disconnect(); s2?.stop(); s2?.disconnect(); } catch {} }, 220);
        } catch {}
      }
      activeSourceNode = activeSecondSource = activeGainNode = null;
    }

    function toggleAudioSource(type) {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === 'suspended') audioCtx.resume();

      if (activeAudioType === type) {
        activeAudioType = null;
        stopCurrentAudio();
      } else {
        stopCurrentAudio();
        activeAudioType = type;
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        gain.gain.setTargetAtTime(noiseVolume, audioCtx.currentTime, 0.15);

        if (type === 'binaural') {
          const merger = audioCtx.createChannelMerger(2), oscL = audioCtx.createOscillator(), oscR = audioCtx.createOscillator();
          oscL.frequency.value = 200; oscR.frequency.value = 206;
          oscL.connect(merger, 0, 0); oscR.connect(merger, 0, 1);
          merger.connect(gain); gain.connect(audioCtx.destination);
          oscL.start(); oscR.start();
          activeSourceNode = oscL; activeSecondSource = oscR;
        } else {
          const source = audioCtx.createBufferSource(), filter = audioCtx.createBiquadFilter();
          source.buffer = createNoiseBuffer(type); source.loop = true;
          filter.type = 'lowpass';
          filter.frequency.value = type === 'brown' ? 400 : type === 'pink' ? 600 : 2000;
          source.connect(filter); filter.connect(gain); gain.connect(audioCtx.destination);
          source.start();
          activeSourceNode = source;
        }
        activeGainNode = gain;
      }
      ['brown', 'pink', 'white', 'binaural'].forEach(t => $(`noise-btn-${t}`)?.classList.toggle('active', activeAudioType === t));
    }

    function updateNoiseVolume(val) {
      const cleanVal = SecurityGuard.clampNumber(val, 0, 100, 35);
      noiseVolume = cleanVal / 100;
      $('noiseVolumeLabel').textContent = `${cleanVal}%`;
      if (activeGainNode && audioCtx) activeGainNode.gain.setTargetAtTime(noiseVolume, audioCtx.currentTime, 0.05);
    }

    // =========================================================================
    // NAVIGATION, SEMAINES & THÈMES
    // =========================================================================
    function applyTheme() {
      document.documentElement.setAttribute('data-theme', state.theme || 'oled');
      ['oled', 'dark', 'light'].forEach(t => {
        const btn = $(`theme-btn-${t}`);
        if (btn) {
          btn.style.borderColor = state.theme === t ? 'var(--btn-bg)' : 'var(--border-color)';
          btn.style.borderWidth = state.theme === t ? '2px' : '1px';
        }
      });
    }

    function setTheme(themeName) {
      if (!['oled', 'dark', 'light'].includes(themeName)) return;
      state.theme = themeName;
      saveState();
      applyTheme();
      renderAll();
      showToast('Thème mis à jour', '🎨');
    }

    function updateDailyGoal(val) {
      state.dailyGoalHours = SecurityGuard.clampNumber(val, 1, 14, 7);
      saveState();
      renderAll();
    }
    function selectDay(dayIdx) { selectedDayIndex = SecurityGuard.clampNumber(dayIdx, 0, 6, 0); renderAll(); }
    function setPriorityFilter(filter) { currentPriorityFilter = filter; renderDashboardTasks(); }

    function changeStatsWeek(delta) {
      statsWeekOffset = Math.min(0, statsWeekOffset + delta);
      renderAll();
    }

    function resetToCurrentWeek() {
      statsWeekOffset = 0;
      selectedDayIndex = getTodayIndex();
      renderAll();
    }

    function switchTab(tabName) {
      ['dashboard', 'timer', 'stats', 'settings'].forEach(t => {
        const view = $(`view-${t}`);
        const isTarget = t === tabName;
        view.classList.toggle('hidden', !isTarget);
        if (isTarget) {
          view.classList.remove('view-animate');
          void view.offsetWidth;
          view.classList.add('view-animate');
        }
        const desk = $(`nav-desk-${t}`), mob = $(`nav-mob-${t}`);
        if (desk) desk.className = isTarget ? 'px-4 py-2 rounded-lg text-sm font-bold transition theme-btn-primary' : 'px-4 py-2 rounded-lg text-sm font-semibold transition opacity-70 hover:opacity-100';
        if (mob) mob.style.color = isTarget ? 'var(--text-main)' : 'var(--text-muted)';
      });
      renderAll();
    }

    function toggleCustomSubjectDropdown(e) { e.stopPropagation(); $('customSubjectDropdownMenu').classList.toggle('hidden'); }
    function closeCustomDropdownOutside() { $('customSubjectDropdownMenu')?.classList.add('hidden'); }
    function selectTimerSubjectByIndex(idx) {
      if (state.subjects[idx]) currentTimerSubject = state.subjects[idx].name;
      closeCustomDropdownOutside();
      renderSubjectSelects();
    }

    function renderSubjectSelects() {
      const opts = state.subjects.map(s => `<option value="${esc(s.name)}">${esc(s.name)}</option>`).join('');
      ['newTaskSubject', 'manualSubjectSelect'].forEach(id => {
        const el = $(id);
        if (el) {
          const prev = el.value;
          el.innerHTML = opts;
          if (state.subjects.some(s => s.name === prev)) el.value = prev;
        }
      });
      if (!state.subjects.some(s => s.name === currentTimerSubject) && state.subjects.length) {
        currentTimerSubject = state.subjects[0].name;
      }
      const activeColor = getSubjectColor(currentTimerSubject);
      $('timerSubjectLabel').textContent = currentTimerSubject;
      $('timerSubjectDot').style.backgroundColor = activeColor;
      if ($('timerSubjectAmbientGlow')) {
        $('timerSubjectAmbientGlow').style.backgroundColor = activeColor;
      }

      $('customSubjectDropdownMenu').innerHTML = state.subjects.map((s, idx) => {
        const sel = s.name === currentTimerSubject;
        return `<button type="button" onclick="selectTimerSubjectByIndex(${idx})" class="w-full px-4 py-2.5 text-left text-xs font-semibold flex items-center justify-between transition ${sel ? 'bg-zinc-800 text-white' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'}">
          <span class="flex items-center gap-2.5"><span class="w-2.5 h-2.5 rounded-full" style="background-color:${esc(s.color)};"></span><span>${esc(s.name)}</span></span>
          ${sel ? '<span class="text-white">✓</span>' : ''}
        </button>`;
      }).join('');
    }

    function buildBarChartHtml(weekDates, maxScaleMin, isMain) {
      return weekDates.map((dateObj, idx) => {
        const dKey = toDateKey(dateObj);
        const totalMin = getDateTotalMinutes(dKey);
        const heightPct = totalMin > 0 ? Math.max(isMain ? 8 : 10, Math.round((totalMin / maxScaleMin) * 100)) : 4;
        const hoursFormatted = (totalMin / 60).toFixed(1).replace('.0', '') + 'h';
        const isSel = idx === selectedDayIndex;
        const breakdown = getDateSubjectBreakdown(dKey);
        const segments = totalMin > 0
          ? Object.entries(breakdown).map(([subj, min]) => `<div style="height:${(min / totalMin) * 100}%;background-color:${esc(getSubjectColor(subj))};" class="w-full transition-all duration-300" title="${esc(subj)}: ${formatMinutes(min)}"></div>`).join('')
          : `<div class="w-full h-full ${isMain ? 'opacity-25' : ''}" style="background-color:var(--bg-input);"></div>`;

        const dateSubLabel = isMain ? `<span class="text-[10px] opacity-60 font-normal block leading-tight">${formatShortDate(dateObj)}</span>` : '';

        return `<div onclick="selectDay(${idx}); ${isMain ? '' : "statsWeekOffset=0;switchTab('stats');"}" class="flex-1 flex flex-col items-center h-full justify-end cursor-pointer group">
          <span class="${isMain ? 'text-xs font-bold mb-1.5' : 'text-[10px] mb-1'} font-mono-timer opacity-80 group-hover:opacity-100 transition">${totalMin > 0 ? hoursFormatted : (isMain ? '0h' : '')}</span>
          <div class="w-full ${isMain ? 'max-w-[52px] rounded-t-xl' : 'max-w-[28px] rounded-t-lg'} overflow-hidden flex flex-col-reverse transition-all duration-300 group-hover:brightness-110" style="height:${heightPct}%; ${isSel ? 'outline:2px solid var(--btn-bg);' : ''}">${segments}</div>
          <span class="${isMain ? 'text-xs mt-2 px-2 py-0.5 rounded-md text-center ' + (isSel ? 'theme-btn-primary' : '') : 'text-[11px] mt-2 ' + (isSel ? 'underline' : '')} font-bold transition" style="${!isSel ? 'color:var(--text-muted);' : ''}">
            ${DAYS_SHORT[idx]}${dateSubLabel}
          </span>
        </div>`;
      }).join('');
    }

    function renderAll() {
      const todayKey = getTodayKey();
      const todayMin = getDateTotalMinutes(todayKey);
      const goalMin = state.dailyGoalHours * 60;
      const pct = Math.min(100, Math.round((todayMin / goalMin) * 100));

      const curWeekDates = getWeekDates(0);
      const curWeekTotals = curWeekDates.map(d => getDateTotalMinutes(toDateKey(d)));
      const curWeekTotalMin = curWeekTotals.reduce((a, b) => a + b, 0);

      $('currentDateDisplay').textContent = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });
      $('headerGoalBadge').textContent = `${state.dailyGoalHours}h/j`;
      $('todayHoursBig').textContent = formatMinutes(todayMin);
      $('todayPercentBadge').textContent = `${pct}% de l'objectif`;

      const todayBreakdown = getDateSubjectBreakdown(todayKey);
      $('todaySegmentedProgress').innerHTML = todayMin === 0 ? '' : Object.entries(todayBreakdown).map(([subj, min]) =>
        `<div style="width:${Math.min(100, (min / Math.max(goalMin, todayMin)) * 100)}%;background-color:${esc(getSubjectColor(subj))};" class="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500" title="${esc(subj)}: ${formatMinutes(min)}"></div>`
      ).join('');

      const rem = Math.max(0, goalMin - todayMin);
      $('remainingTimeText').textContent = rem > 0 ? `Encore ${formatMinutes(rem)} pour atteindre ton objectif de ${state.dailyGoalHours}h` : `🔥 Objectif quotidien de ${state.dailyGoalHours}h atteint !`;
      $('weekTotalMini').textContent = formatMinutes(curWeekTotalMin);
      $('avgDayMini').textContent = `${(curWeekTotalMin / 420).toFixed(1)}h/j`;

      const streak = calculateCurrentGoalStreak();
      $('streakMiniCount').textContent = `🔥 ${streak}j`;

      renderSubjectSelects();
      renderDashboardTasks();
      renderDailyGoals();

      $('miniSubjectLegend').innerHTML = state.subjects.map(s => `<span class="inline-flex items-center gap-1 text-[10px] font-semibold" style="color:var(--text-muted);"><span class="w-2 h-2 rounded-full" style="background-color:${esc(s.color)};"></span>${esc(s.name)}</span>`).join('');
      $('miniBarChart').innerHTML = buildBarChartHtml(curWeekDates, Math.max(goalMin, ...curWeekTotals, 60), false);

      renderStatsView(streak);
      renderSettings();
      renderTodaySessions();
    }

    // =========================================================================
    // GESTION DES TÂCHES, PRIORITÉS & CASE SPÉCIALE "EN RETARD / PAS FAIT"
    // =========================================================================
    function renderPriorityBadge(task, clickable = true) {
      const p = PRIORITIES[task.priority] || PRIORITIES.todo;
      const safeId = Number(task.id) || 0;
      return `<button type="button" ${clickable ? `onclick="event.preventDefault(); cycleTaskPriority(${safeId})" title="Cliquer pour changer la priorité"` : ''}
        class="text-[11px] px-2.5 py-0.5 rounded-full font-bold w-fit transition hover:opacity-80"
        style="background-color:${p.bg};color:${p.text};border:1px solid ${p.border};">
        ${p.label}
      </button>`;
    }

    function renderOverdueTaskItem(t) {
      const c = esc(getSubjectColor(t.subject));
      const safeId = Number(t.id) || 0;
      return `<div class="task-row flex items-center justify-between p-3 rounded-xl gap-2" style="border-color:rgba(239,68,68,0.28);">
        <label class="flex items-center gap-3 cursor-pointer flex-1">
          <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask(${safeId})" class="w-5 h-5 rounded cursor-pointer accent-red-500 flex-shrink-0" />
          <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 flex-wrap">
            <span class="text-sm font-medium ${t.done ? 'line-through opacity-45' : ''}">${esc(t.title)}</span>
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-[10px] px-2 py-0.5 rounded-full font-extrabold bg-red-500/20 text-red-300 border border-red-500/30">
                Pas fait • ${esc(formatTaskOriginDate(t.date))}
              </span>
              ${renderPriorityBadge(t, true)}
              <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold w-fit flex items-center gap-1.5" style="background-color:${c}22;color:${c};border:1px solid ${c}44;">
                <span class="w-1.5 h-1.5 rounded-full" style="background-color:${c};"></span>${esc(t.subject)}
              </span>
            </div>
          </div>
        </label>
        <div class="flex items-center gap-1.5 flex-shrink-0">
          <button type="button" onclick="moveTaskToToday(${safeId})" class="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition" title="Déplacer cette tâche à aujourd'hui">
            ↪ Aujourd'hui
          </button>
          <button type="button" onclick="deleteTask(${safeId})" class="text-xs opacity-50 hover:opacity-100 hover:text-red-400 p-1" title="Supprimer">✕</button>
        </div>
      </div>`;
    }

    function renderDashboardTasks() {
      const todayKey = getTodayKey();
      const todayTasks = state.tasks.filter(t => t.date === todayKey);
      $('tasksDoneCount').textContent = `${todayTasks.filter(t => t.done).length}/${todayTasks.length}`;

      const curWeekDates = getWeekDates(0);
      $('dashboardDayPills').innerHTML = DAYS_SHORT.map((d, i) => `<button onclick="selectDay(${i})" class="px-2.5 py-1 rounded-lg text-xs font-bold transition ${i === selectedDayIndex ? 'theme-btn-primary' : 'opacity-60 hover:opacity-100'}">${d}</button>`).join('');

      const activeDateKey = toDateKey(curWeekDates[selectedDayIndex]);
      const allDayTasks = state.tasks.filter(t => t.date === activeDateKey);
      const overdueTasks = getOverdueTasks();

      const counts = {
        all: allDayTasks.length,
        urgent: allDayTasks.filter(t => t.priority === 'urgent').length,
        important: allDayTasks.filter(t => t.priority === 'important').length,
        todo: allDayTasks.filter(t => (t.priority || 'todo') === 'todo').length,
        overdue: overdueTasks.length
      };

      const filterBtns = [
        { id: 'all', label: `Toutes (${counts.all})` },
        { id: 'urgent', label: `Urgent (${counts.urgent})` },
        { id: 'important', label: `Important (${counts.important})` },
        { id: 'todo', label: `À faire (${counts.todo})` },
        { id: 'overdue', label: `En retard / Pas fait (${counts.overdue})`, isAlert: counts.overdue > 0 }
      ];

      $('taskPriorityFilters').innerHTML = filterBtns.map(f => {
        const isActive = currentPriorityFilter === f.id;
        const alertStyle = f.isAlert && !isActive ? 'border-color:rgba(239,68,68,0.5);color:#f87171;background-color:rgba(239,68,68,0.1);' : 'border-color:var(--border-color);';
        return `<button type="button" onclick="setPriorityFilter('${f.id}')" class="px-2.5 py-1 rounded-lg text-xs font-semibold transition ${isActive ? 'theme-btn-primary' : 'border opacity-85 hover:opacity-100'}" style="${!isActive ? alertStyle : ''}">${f.label}</button>`;
      }).join('');

      const overdueBox = $('overdueTasksBox');
      const moveAllBtn = $('moveAllOverdueBtn');
      moveAllBtn.classList.toggle('hidden', overdueTasks.length < 2);

      if (currentPriorityFilter === 'overdue') {
        overdueBox.classList.remove('hidden');
        $('overdueTasksCountBadge').textContent = `${overdueTasks.length} tâche${overdueTasks.length > 1 ? 's' : ''}`;
        $('overdueTasksList').innerHTML = overdueTasks.length === 0
          ? `<div class="text-center py-4 text-xs" style="color:var(--text-muted);">Aucune tâche en retard des jours précédents, bravo ! 🎉</div>`
          : overdueTasks.map(renderOverdueTaskItem).join('');
        $('taskListContainer').innerHTML = '';
        return;
      }

      if (activeDateKey === todayKey && currentPriorityFilter === 'all' && overdueTasks.length > 0) {
        overdueBox.classList.remove('hidden');
        $('overdueTasksCountBadge').textContent = `${overdueTasks.length} à rattraper`;
        $('overdueTasksList').innerHTML = overdueTasks.map(renderOverdueTaskItem).join('');
      } else {
        overdueBox.classList.add('hidden');
      }

      const filtered = currentPriorityFilter === 'all'
        ? allDayTasks
        : allDayTasks.filter(t => (t.priority || 'todo') === currentPriorityFilter);

      const sortedTasks = sortTasksByPriority(filtered);

      $('taskListContainer').innerHTML = sortedTasks.length === 0
        ? `<div class="text-center py-8 text-sm" style="color:var(--text-muted);">Aucune tâche dans cette catégorie pour ${DAYS_FULL[selectedDayIndex]} (${formatShortDate(curWeekDates[selectedDayIndex])}).</div>`
        : sortedTasks.map(t => {
            const c = esc(getSubjectColor(t.subject));
            const safeId = Number(t.id) || 0;
            return `<div class="task-row flex items-center justify-between p-3.5 rounded-xl gap-2">
              <label class="flex items-center gap-3 cursor-pointer flex-1">
                <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask(${safeId})" class="w-5 h-5 rounded cursor-pointer accent-current flex-shrink-0" />
                <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 flex-wrap">
                  <span class="text-sm font-medium ${t.done ? 'line-through opacity-45' : ''}">${esc(t.title)}</span>
                  <div class="flex items-center gap-1.5 flex-wrap">
                    ${renderPriorityBadge(t, true)}
                    <span class="text-[11px] px-2.5 py-0.5 rounded-full font-bold w-fit flex items-center gap-1.5" style="background-color:${c}22;color:${c};border:1px solid ${c}44;">
                      <span class="w-1.5 h-1.5 rounded-full" style="background-color:${c};"></span>${esc(t.subject)}
                    </span>
                  </div>
                </div>
              </label>
              <button onclick="deleteTask(${safeId})" class="text-xs opacity-50 hover:opacity-100 hover:text-red-400 p-1">✕</button>
            </div>`;
          }).join('');
    }

    function moveTaskToToday(id) {
      const t = state.tasks.find(x => x.id === id);
      if (t) {
        t.date = getTodayKey();
        selectedDayIndex = getTodayIndex();
        if (currentPriorityFilter === 'overdue') currentPriorityFilter = 'all';
        saveState();
        renderAll();
        showToast('Tâche déplacée à aujourd\'hui', '↪');
      }
    }

    function moveAllOverdueToToday() {
      const todayKey = getTodayKey();
      let count = 0;
      state.tasks.forEach(t => {
        if (!t.done && t.date < todayKey) {
          t.date = todayKey;
          count++;
        }
      });
      if (count > 0) {
        selectedDayIndex = getTodayIndex();
        if (currentPriorityFilter === 'overdue') currentPriorityFilter = 'all';
        saveState();
        renderAll();
        showToast(`${count} tâches ramenées à aujourd'hui`, '↪');
      }
    }

    function addTask(e) {
      e.preventDefault();
      const input = $('newTaskInput');
      const title = SecurityGuard.cleanText(input.value, 120);
      if (!title) return;
      const prio = $('newTaskPriority').value;
      state.tasks.push({
        id: Date.now(),
        date: getDashboardDateKey(),
        title,
        subject: SecurityGuard.cleanText($('newTaskSubject').value, 40) || state.subjects[0].name,
        priority: PRIORITIES[prio] ? prio : 'todo',
        done: false
      });
      input.value = '';
      saveState();
      renderAll();
      showToast('Tâche ajoutée', '✅');
    }

    function cycleTaskPriority(id) {
      const t = state.tasks.find(x => x.id === id);
      if (t) {
        const cur = PRIORITIES[t.priority] || PRIORITIES.todo;
        t.priority = cur.next;
        saveState();
        renderAll();
      }
    }

    function toggleTask(id) {
      const t = state.tasks.find(x => x.id === id);
      if (t) {
        t.done = !t.done;
        saveState();
        renderAll();
      }
    }
    function deleteTask(id) { state.tasks = state.tasks.filter(x => x.id !== id); saveState(); renderAll(); }
    function deleteSession(id) { state.sessions = state.sessions.filter(x => x.id !== id); saveState(); renderAll(); }

    // =========================================================================
    // GESTION DES OBJECTIFS QUOTIDIENS (AVEC VERROUILLAGE J-2 À JOUR J)
    // =========================================================================
    function renderDailyGoals() {
      const todayKey = getTodayKey();
      const activeDateKey = getDashboardDateKey();
      const isEditable = isGoalDateEditable(activeDateKey);

      const todayDoneGoals = state.goals.filter(g => g.completedDates?.includes(todayKey)).length;
      $('goalsDoneCount').textContent = `${todayDoneGoals}/${state.goals.length}`;

      const selectedDoneGoals = state.goals.filter(g => g.completedDates?.includes(activeDateKey)).length;
      $('goalsSelectedDayBadge').textContent = `${activeDateKey === todayKey ? "Aujourd'hui" : DAYS_FULL[selectedDayIndex]} • ${selectedDoneGoals}/${state.goals.length}`;

      $('goalsLockNotice').textContent = isEditable
        ? 'Coche tes habitudes atteintes chaque jour'
        : '🔒 Journée verrouillée (modifiable uniquement sur le jour J et les 2 jours précédents)';

      $('dailyGoalsList').innerHTML = state.goals.length === 0
        ? `<p class="text-xs py-4 text-center" style="color:var(--text-muted);">Aucun objectif quotidien défini. Ajoutes-en un ci-dessous !</p>`
        : state.goals.map(g => {
            const isChecked = Array.isArray(g.completedDates) && g.completedDates.includes(activeDateKey);
            const safeId = Number(g.id) || 0;
            return `<div class="task-row flex items-center justify-between p-3 rounded-xl transition ${isEditable ? '' : 'opacity-50'}">
              <label class="flex items-center gap-3 ${isEditable ? 'cursor-pointer' : 'cursor-not-allowed'} flex-1">
                <input type="checkbox" ${isChecked ? 'checked' : ''} ${isEditable ? '' : 'disabled'} onchange="toggleDailyGoalByDate(${safeId}, '${esc(activeDateKey)}')" class="w-4 h-4 rounded ${isEditable ? 'cursor-pointer' : 'cursor-not-allowed'} accent-emerald-500 flex-shrink-0" />
                <span class="text-xs font-semibold ${isChecked ? 'line-through opacity-50' : ''}">${esc(g.title)}</span>
              </label>
              <button onclick="deleteDailyGoal(${safeId})" class="text-xs opacity-40 hover:opacity-100 hover:text-red-400 px-1" title="Supprimer cet objectif">✕</button>
            </div>`;
          }).join('');
    }

    function addDailyGoal(e) {
      e.preventDefault();
      const input = $('newGoalInput');
      const title = SecurityGuard.cleanText(input.value, 60);
      if (!title) return;
      state.goals.push({ id: Date.now(), title, completedDates: [] });
      input.value = '';
      saveState();
      renderAll();
      showToast('Objectif quotidien créé', '🎯');
    }

    function toggleDailyGoalByDate(goalId, dateKey) {
      if (!SecurityGuard.isValidDateKey(dateKey) || !isGoalDateEditable(dateKey)) return;

      const g = state.goals.find(x => x.id === goalId);
      if (!g) return;
      if (!Array.isArray(g.completedDates)) g.completedDates = [];

      const streakBefore = calculateCurrentGoalStreak();
      const pos = g.completedDates.indexOf(dateKey);
      const isChecking = pos === -1;

      if (pos >= 0) g.completedDates.splice(pos, 1);
      else g.completedDates.push(dateKey);

      saveState();
      renderAll();

      if (isChecking && isDateAllGoalsCompleted(dateKey)) {
        const streakAfter = calculateCurrentGoalStreak();
        if (streakAfter > streakBefore) {
          const unlockedBadge = STREAK_BADGES.find(b => b.days === streakAfter);
          if (unlockedBadge) {
            showBadgeCelebrationModal(unlockedBadge, true);
            return;
          }
        }
        showToast('100 % des objectifs du jour atteints !', '🔥');
      }
    }

    function deleteDailyGoal(goalId) {
      state.goals = state.goals.filter(x => x.id !== goalId);
      saveState();
      renderAll();
    }

    // =========================================================================
    // VUE BILAN : NAVIGATION SEMAINES, TABLEAU OBJECTIFS & GALERIE BADGES
    // =========================================================================
    function renderStatsView(streak) {
      const weekDates = getWeekDates(statsWeekOffset);
      const weekDateKeys = weekDates.map(toDateKey);
      const dailyTotals = weekDateKeys.map(getDateTotalMinutes);
      const weekTotalMin = dailyTotals.reduce((a, b) => a + b, 0);

      const firstDay = weekDates[0], lastDay = weekDates[6];
      const rangeStr = `Du ${firstDay.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })} au ${lastDay.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}`;
      $('statsWeekRangeLabel').textContent = rangeStr;
      $('statsWeekBadge').textContent = statsWeekOffset === 0 ? 'Cette semaine' : statsWeekOffset === -1 ? 'Semaine dernière' : `Il y a ${Math.abs(statsWeekOffset)} semaines`;
      $('nextWeekBtn').disabled = statsWeekOffset >= 0;
      $('nextWeekBtn').classList.toggle('opacity-30', statsWeekOffset >= 0);
      $('nextWeekBtn').classList.toggle('pointer-events-none', statsWeekOffset >= 0);
      $('backToCurrentWeekBtn').classList.toggle('hidden', statsWeekOffset === 0);

      const activeDays = dailyTotals.filter(m => m > 0).length || 1;
      const weekTasks = state.tasks.filter(t => weekDateKeys.includes(t.date));
      const doneWeekTasks = weekTasks.filter(t => t.done).length;

      let weekGoalsChecks = 0;
      weekDateKeys.forEach(k => {
        state.goals.forEach(g => { if (g.completedDates?.includes(k)) weekGoalsChecks++; });
      });
      const maxWeekGoals = (state.goals.length * 7) || 1;

      $('statWeekTotal').textContent = formatMinutes(weekTotalMin);
      $('statDailyAvg').textContent = formatMinutes(Math.round(weekTotalMin / activeDays));
      $('statTaskRate').textContent = `${weekTasks.length ? Math.round((doneWeekTasks / weekTasks.length) * 100) : 0}%`;
      $('statGoalRate').textContent = `${state.goals.length ? Math.round((weekGoalsChecks / maxWeekGoals) * 100) : 0}%`;
      $('chartGoalLegend').textContent = `${state.dailyGoalHours}h`;

      $('mainChartLegend').innerHTML = state.subjects.map(s => `<span class="inline-flex items-center gap-2 text-xs font-semibold px-2.5 py-1 rounded-lg border" style="background-color:var(--bg-main);border-color:var(--border-color);"><span class="w-3 h-3 rounded-full" style="background-color:${esc(s.color)};"></span><span>${esc(s.name)}</span></span>`).join('');

      const maxScaleMin = Math.max(state.dailyGoalHours * 72, ...dailyTotals, 120);
      $('goalLine').style.bottom = `${Math.min(94, Math.round(((state.dailyGoalHours * 60) / maxScaleMin) * 100))}%`;
      $('mainBarChart').innerHTML = buildBarChartHtml(weekDates, maxScaleMin, true);

      renderWeeklyGoalsTable(weekDates, weekDateKeys);

      const selectedDateObj = weekDates[selectedDayIndex];
      const selectedDateKey = weekDateKeys[selectedDayIndex];
      const isSelectedEditable = isGoalDateEditable(selectedDateKey);
      const dayName = `${DAYS_FULL[selectedDayIndex]} ${selectedDateObj.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })}`;
      const dayTotalMin = getDateTotalMinutes(selectedDateKey);

      $('inspectorDayTitle').textContent = `Compte rendu du ${dayName} (${formatMinutes(dayTotalMin)})`;
      $('statsDaySelector').innerHTML = DAYS_SHORT.map((d, i) => `
        <button onclick="selectDay(${i})" class="px-2.5 py-1.5 rounded-xl text-xs font-bold transition ${i === selectedDayIndex ? 'theme-btn-primary' : 'border opacity-70 hover:opacity-100'}" style="border-color:var(--border-color);">
          ${d} <span class="opacity-60 font-normal">${formatShortDate(weekDates[i])}</span>
        </button>
      `).join('');

      const entries = Object.entries(getDateSubjectBreakdown(selectedDateKey));
      $('inspectorSubjectsList').innerHTML = entries.length === 0
        ? `<p class="text-xs py-3" style="color:var(--text-muted);">Aucune matière travaillée le ${dayName}.</p>`
        : entries.map(([subj, min]) => {
            const c = esc(getSubjectColor(subj)), p = Math.round((min / dayTotalMin) * 100);
            return `<div class="p-3 rounded-xl border" style="background-color:var(--bg-main);border-color:var(--border-color);">
              <div class="flex justify-between items-center text-xs font-bold mb-1.5"><span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full" style="background-color:${c};"></span>${esc(subj)}</span><span class="font-mono-timer">${formatMinutes(min)} (${p}%)</span></div>
              <div class="w-full h-2 rounded-full overflow-hidden" style="background-color:var(--bg-input);"><div class="h-full rounded-full transition-all duration-500" style="width:${p}%;background-color:${c};"></div></div>
            </div>`;
          }).join('');

      const daySessions = state.sessions.filter(s => s.date === selectedDateKey);
      $('inspectorSessionsList').innerHTML = daySessions.length === 0
        ? `<p class="text-xs" style="color:var(--text-muted);">Aucune session enregistrée ce jour.</p>`
        : daySessions.map(s => {
            const safeId = Number(s.id) || 0;
            return `<div class="flex items-center justify-between px-3 py-2 rounded-xl border text-xs" style="background-color:var(--bg-main);border-color:var(--border-color);">
              <div class="flex items-center gap-2"><span class="font-mono-timer opacity-60">${esc(s.time)}</span><span class="w-2.5 h-2.5 rounded-full" style="background-color:${esc(getSubjectColor(s.subject))};"></span><span class="font-semibold">${esc(s.subject)}</span></div>
              <div class="flex items-center gap-3"><span class="font-mono-timer font-bold">+ ${formatMinutes(s.minutes)}</span><button onclick="deleteSession(${safeId})" class="opacity-40 hover:opacity-100 hover:text-red-400">✕</button></div>
            </div>`;
          }).join('');

      const dayTasks = sortTasksByPriority(state.tasks.filter(t => t.date === selectedDateKey));
      $('inspectorTasksBadge').textContent = `${dayTasks.filter(t => t.done).length}/${dayTasks.length} faites`;
      $('inspectorTasksList').innerHTML = dayTasks.length === 0
        ? `<p class="text-xs py-3" style="color:var(--text-muted);">Aucune tâche notée pour ce jour.</p>`
        : dayTasks.map(t => {
            const c = esc(getSubjectColor(t.subject));
            const safeId = Number(t.id) || 0;
            return `<div class="flex items-center justify-between p-3 rounded-xl border gap-2" style="background-color:var(--bg-main);border-color:var(--border-color);">
              <label class="flex items-center gap-2.5 cursor-pointer flex-1"><input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTask(${safeId})" class="w-4 h-4 rounded cursor-pointer" /><span class="text-xs font-medium ${t.done ? 'line-through opacity-50' : ''}">${esc(t.title)}</span></label>
              <div class="flex items-center gap-1.5 flex-shrink-0">
                ${renderPriorityBadge(t, true)}
                <span class="text-[10px] px-2 py-0.5 rounded-full font-bold" style="background-color:${c}22;color:${c};">${esc(t.subject)}</span>
              </div>
            </div>`;
          }).join('');

      const doneDayGoals = state.goals.filter(g => g.completedDates?.includes(selectedDateKey)).length;
      $('inspectorGoalsBadge').textContent = `${doneDayGoals}/${state.goals.length} atteints`;
      $('inspectorGoalsList').innerHTML = state.goals.length === 0
        ? `<p class="text-xs py-2" style="color:var(--text-muted);">Aucun objectif quotidien configuré.</p>`
        : state.goals.map(g => {
            const isChecked = g.completedDates?.includes(selectedDateKey);
            const safeId = Number(g.id) || 0;
            return `<div class="flex items-center justify-between p-2.5 rounded-xl border ${isSelectedEditable ? '' : 'opacity-55'}" style="background-color:var(--bg-main);border-color:var(--border-color);">
              <label class="flex items-center gap-2.5 ${isSelectedEditable ? 'cursor-pointer' : 'cursor-not-allowed'} flex-1">
                <input type="checkbox" ${isChecked ? 'checked' : ''} ${isSelectedEditable ? '' : 'disabled'} onchange="toggleDailyGoalByDate(${safeId}, '${esc(selectedDateKey)}')" class="w-4 h-4 rounded ${isSelectedEditable ? 'cursor-pointer' : 'cursor-not-allowed'} accent-emerald-500" />
                <span class="text-xs font-medium ${isChecked ? 'line-through opacity-50' : ''}">${esc(g.title)}</span>
              </label>
              <span class="text-[10px] font-bold ${isChecked ? 'text-emerald-400' : 'opacity-40'}">${isChecked ? '✓ Atteint' : (isSelectedEditable ? 'Non coché' : '🔒 Verrouillé')}</span>
            </div>`;
          }).join('');

      const totals = Object.fromEntries(state.subjects.map(s => [s.name, 0]));
      state.sessions.filter(s => weekDateKeys.includes(s.date)).forEach(s => {
        totals[s.subject] = (totals[s.subject] || 0) + s.minutes;
      });
      const sumAll = Object.values(totals).reduce((a, b) => a + b, 0) || 1;
      $('subjectBreakdownList').innerHTML = Object.entries(totals).map(([subj, min]) => {
        const p = min > 0 ? Math.round((min / sumAll) * 100) : 0, c = esc(getSubjectColor(subj));
        return `<div>
          <div class="flex justify-between text-xs font-semibold mb-1.5"><span class="flex items-center gap-2"><span class="w-3 h-3 rounded-full" style="background-color:${c};"></span>${esc(subj)}</span><span class="font-mono-timer">${formatMinutes(min)} (${p}%)</span></div>
          <div class="w-full h-2.5 rounded-full overflow-hidden" style="background-color:var(--bg-input);"><div class="h-full rounded-full transition-all duration-500" style="width:${p}%;background-color:${c};"></div></div>
        </div>`;
      }).join('');

      renderBadgesGallery(streak);
    }

    function renderWeeklyGoalsTable(weekDates, weekDateKeys) {
      const todayKey = getTodayKey();
      let perfectDaysCount = 0;
      weekDateKeys.forEach(k => { if (isDateAllGoalsCompleted(k)) perfectDaysCount++; });
      $('weeklyPerfectDaysBadge').textContent = `${perfectDaysCount}/7 jours à 100%`;

      $('weeklyGoalsTableHeader').innerHTML = `
        <th class="py-2.5 pr-3 font-bold">Objectif quotidien</th>
        ${weekDates.map((d, idx) => {
          const k = weekDateKeys[idx];
          const isToday = k === todayKey;
          const editable = isGoalDateEditable(k);
          return `<th class="py-2.5 px-2 text-center font-bold ${isToday ? 'theme-accent-text underline' : ''} ${editable ? '' : 'opacity-50'}">
            <div>${DAYS_SHORT[idx]} ${editable ? '' : '<span title="Jour verrouillé">🔒</span>'}</div>
            <div class="text-[10px] font-normal opacity-70">${formatShortDate(d)}</div>
          </th>`;
        }).join('')}
        <th class="py-2.5 pl-2 text-right font-bold">Total</th>
      `;

      if (state.goals.length === 0) {
        $('weeklyGoalsTableBody').innerHTML = `<tr><td colspan="9" class="py-6 text-center" style="color:var(--text-muted);">Aucun objectif quotidien défini.</td></tr>`;
        $('weeklyGoalsTableFooter').innerHTML = '';
        return;
      }

      $('weeklyGoalsTableBody').innerHTML = state.goals.map(g => {
        let rowCount = 0;
        const safeId = Number(g.id) || 0;
        const cells = weekDateKeys.map(k => {
          const done = Array.isArray(g.completedDates) && g.completedDates.includes(k);
          const editable = isGoalDateEditable(k);
          if (done) rowCount++;

          return `<td class="py-2.5 px-2 text-center">
            <button type="button" ${editable ? `onclick="toggleDailyGoalByDate(${safeId}, '${esc(k)}')"` : 'disabled title="Verrouillé : seuls le jour J et les 2 jours précédents sont modifiables"'}
              class="w-6 h-6 rounded-lg inline-flex items-center justify-center font-bold transition ${
                done
                  ? (editable ? 'bg-emerald-500 text-black shadow-sm hover:scale-105' : 'bg-emerald-500/40 text-black/80 cursor-not-allowed')
                  : (editable ? 'border opacity-50 hover:opacity-100 hover:scale-105' : 'border opacity-20 cursor-not-allowed')
              }"
              style="${!done ? 'border-color:var(--border-color);background-color:var(--bg-main);' : ''}">
              ${done ? '✓' : ''}
            </button>
          </td>`;
        }).join('');

        return `<tr class="border-b" style="border-color:var(--border-color);">
          <td class="py-2.5 pr-3 font-semibold">${esc(g.title)}</td>
          ${cells}
          <td class="py-2.5 pl-2 text-right font-mono-timer font-bold">${rowCount}/7</td>
        </tr>`;
      }).join('');

      $('weeklyGoalsTableFooter').innerHTML = `
        <td class="pt-3 pr-3" style="color:var(--text-muted);">Journée 100 % validée</td>
        ${weekDateKeys.map(k => {
          const allDone = isDateAllGoalsCompleted(k);
          return `<td class="pt-3 px-2 text-center">${allDone ? '<span title="100% des objectifs atteints !">🔥</span>' : '<span class="opacity-25">—</span>'}</td>`;
        }).join('')}
        <td class="pt-3 pl-2 text-right text-emerald-400">${perfectDaysCount}/7</td>
      `;
    }

    function renderBadgesGallery(streak) {
      const { currentBadge } = getBadgeStatus(streak);
      $('statsCurrentStreakBox').innerHTML = `
        <div class="text-xs font-semibold" style="color:var(--text-muted);">Série active</div>
        <div class="text-xl font-extrabold text-amber-400">🔥 ${streak} jour${streak > 1 ? 's' : ''} d'affilée</div>
        <div class="text-[11px] font-bold mt-0.5">${currentBadge ? `Rang actuel : ${esc(currentBadge.title)}` : 'Aucun badge débloqué'}</div>
      `;

      $('badgesGalleryGrid').innerHTML = STREAK_BADGES.map(b => {
        const unlocked = streak >= b.days;
        const isCurrent = currentBadge && currentBadge.days === b.days;
        const pct = Math.min(100, Math.round((streak / b.days) * 100));

        return `<div ${unlocked ? `onclick="previewBadgeByDays(${b.days})" title="Cliquer pour revoir l'animation du badge"` : ''}
          class="p-4 rounded-2xl border flex flex-col justify-between transition ${unlocked ? 'cursor-pointer hover:scale-[1.015]' : 'opacity-55'}"
          style="background-color:var(--bg-main); border-color:${isCurrent ? '#fbbf24' : unlocked ? 'rgba(16,185,129,0.45)' : 'var(--border-color)'}; ${isCurrent ? 'box-shadow: 0 0 20px rgba(251,191,36,0.12);' : ''}">
          <div>
            <div class="flex items-start justify-between gap-2 mb-2">
              <div class="flex items-center gap-2.5">
                <span class="text-2xl">${b.icon}</span>
                <div>
                  <h4 class="font-extrabold text-sm">${esc(b.title)}</h4>
                  <span class="text-[11px] font-semibold" style="color:var(--text-muted);">${esc(b.period)} (${b.days}j)</span>
                </div>
              </div>
              <span class="text-[10px] font-extrabold px-2 py-0.5 rounded-full ${isCurrent ? 'bg-amber-400 text-black' : unlocked ? 'bg-emerald-500/20 text-emerald-400' : 'border opacity-60'}" style="${!unlocked ? 'border-color:var(--border-color);' : ''}">
                ${isCurrent ? 'Actif' : unlocked ? '✓ Débloqué' : 'Verrouillé'}
              </span>
            </div>
            <p class="text-xs italic leading-relaxed mt-2" style="color:${unlocked ? 'var(--text-main)' : 'var(--text-muted)'};">« ${esc(b.message)} »</p>
          </div>

          <div class="mt-3 pt-2.5 border-t" style="border-color:var(--border-color);">
            <div class="flex justify-between text-[10px] font-mono-timer mb-1" style="color:var(--text-muted);">
              <span>Progression</span>
              <span>${Math.min(streak, b.days)} / ${b.days}j (${pct}%)</span>
            </div>
            <div class="w-full h-1.5 rounded-full overflow-hidden" style="background-color:var(--bg-input);">
              <div class="h-full rounded-full transition-all duration-500" style="width:${pct}%; background-color:${unlocked ? '#10b981' : '#fbbf24'};"></div>
            </div>
          </div>
        </div>`;
      }).join('');
    }

    // =========================================================================
    // CHRONO HAUTE PRÉCISION & PLEIN ÉCRAN FOCUS SANS AUDIO UI
    // =========================================================================
    let timerInterval = null, timerRunning = false, timerMode = 'countup';
    let elapsedSeconds = 0, countdownTargetSeconds = 3600;
    let timerAnchorTimestamp = null, timerBaseElapsed = 0, wakeLockSentinel = null;
    const wheelOffsets = { h: 0, m: 0, s: 0 };

    async function requestWakeLock(enable) {
      if (!('wakeLock' in navigator)) return;
      try {
        if (enable && !wakeLockSentinel) wakeLockSentinel = await navigator.wakeLock.request('screen');
        else if (!enable && wakeLockSentinel) { await wakeLockSentinel.release(); wakeLockSentinel = null; }
      } catch {}
    }

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && timerRunning) {
        syncTimerWithRealClock();
        requestWakeLock(true);
      }
    });

    function updateLiveTimestamp() {
      const now = new Date();
      $('liveClockTimestamp').textContent = `${now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })} à ${now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`;
    }
    setInterval(updateLiveTimestamp, 1000);
    updateLiveTimestamp();

    function setTimerMode(mode) {
      if (timerRunning) toggleTimer();
      timerMode = mode === 'countdown' ? 'countdown' : 'countup';
      elapsedSeconds = 0; timerBaseElapsed = 0;
      $('seg-countdown').classList.toggle('active', timerMode === 'countdown');
      $('seg-countup').classList.toggle('active', timerMode === 'countup');
      ['h', 'm', 's'].forEach(u => $(`wheel-${u}`)?.classList.toggle('wheel-interactive', timerMode === 'countdown'));
      updateFlipClockDisplay();
    }

    function adjustCountdownByWheel(unit, stepDir) {
      if (timerRunning || timerMode !== 'countdown') return;
      let h = Math.floor(countdownTargetSeconds / 3600), m = Math.floor((countdownTargetSeconds % 3600) / 60), s = countdownTargetSeconds % 60;
      if (unit === 'h') h = Math.max(0, Math.min(23, h + stepDir));
      else if (unit === 'm') m = (m + stepDir + 60) % 60;
      else s = (s + stepDir * 5 + 60) % 60;
      countdownTargetSeconds = Math.max(60, h * 3600 + m * 60 + s);
      wheelOffsets[unit] += stepDir * 4;
      $(`wheel-${unit}`)?.style.setProperty('--wheel-offset', `${wheelOffsets[unit]}px`);
      updateFlipClockDisplay();
    }

    function initFlipWheels() {
      ['h', 'm', 's'].forEach(unit => {
        const wheel = $(`wheel-${unit}`);
        if (!wheel) return;
        wheel.addEventListener('wheel', e => {
          if (timerMode !== 'countdown' || timerRunning) return;
          e.preventDefault();
          adjustCountdownByWheel(unit, e.deltaY < 0 ? 1 : -1);
        }, { passive: false });

        let startY = null, accumY = 0, moved = false;
        wheel.addEventListener('pointerdown', e => {
          if (timerMode !== 'countdown' || timerRunning) return;
          startY = e.clientY; accumY = 0; moved = false;
          wheel.setPointerCapture(e.pointerId);
        });
        wheel.addEventListener('pointermove', e => {
          if (startY === null) return;
          accumY += startY - e.clientY; startY = e.clientY;
          if (Math.abs(accumY) >= 14) {
            const steps = Math.trunc(accumY / 14);
            adjustCountdownByWheel(unit, steps > 0 ? 1 : -1);
            accumY -= steps * 14; moved = true;
          }
        });
        wheel.addEventListener('pointerup', e => {
          if (startY === null) return;
          if (!moved) {
            const rect = wheel.getBoundingClientRect();
            adjustCountdownByWheel(unit, (e.clientY - rect.top) < rect.height / 2 ? 1 : -1);
          }
          startY = null; wheel.releasePointerCapture(e.pointerId);
        });
      });
    }

    function syncTimerWithRealClock() {
      if (!timerRunning || !timerAnchorTimestamp) return;
      elapsedSeconds = timerBaseElapsed + Math.floor((Date.now() - timerAnchorTimestamp) / 1000);
      if (timerMode === 'countdown' && elapsedSeconds >= countdownTargetSeconds) {
        elapsedSeconds = countdownTargetSeconds;
        finishAndSaveSession();
        return;
      }
      updateFlipClockDisplay();
    }

    function toggleTimer() {
      const startBtn = $('timerStartBtn');
      if (!timerRunning) {
        timerRunning = true;
        timerAnchorTimestamp = Date.now();
        startBtn.textContent = 'Pause';
        startBtn.classList.add('is-running');
        $('timerSaveBtn').classList.remove('hidden');
        requestWakeLock(true);
        timerInterval = setInterval(syncTimerWithRealClock, 500);
      } else {
        syncTimerWithRealClock();
        timerBaseElapsed = elapsedSeconds;
        timerRunning = false;
        timerAnchorTimestamp = null;
        clearInterval(timerInterval);
        requestWakeLock(false);
        startBtn.textContent = 'Reprendre';
        startBtn.classList.remove('is-running');
      }
    }

    function resetTimer() {
      timerRunning = false; timerAnchorTimestamp = null; timerBaseElapsed = 0; elapsedSeconds = 0;
      clearInterval(timerInterval);
      requestWakeLock(false);
      const startBtn = $('timerStartBtn');
      startBtn.textContent = 'Commencer';
      startBtn.classList.remove('is-running');
      $('timerSaveBtn').classList.add('hidden');
      updateFlipClockDisplay();
    }

    function updateFlipClockDisplay() {
      const sec = timerMode === 'countdown' ? Math.max(0, countdownTargetSeconds - elapsedSeconds) : elapsedSeconds;
      $('flipHours').textContent = String(Math.floor(sec / 3600)).padStart(2, '0');
      $('flipMinutes').textContent = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
      $('flipSeconds').textContent = String(sec % 60).padStart(2, '0');
    }

    function finishAndSaveSession() {
      if (timerRunning) syncTimerWithRealClock();
      if (elapsedSeconds < 10) {
        showToast("Session trop courte (< 10s). Utilise l'ajout manuel !", '⏱️');
        return;
      }
      const addedMin = SecurityGuard.clampNumber(Math.round(elapsedSeconds / 60), 1, 1440, 1);
      state.sessions.unshift({
        id: Date.now(),
        date: getTodayKey(),
        subject: currentTimerSubject,
        minutes: addedMin,
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      });
      saveState();
      resetTimer();
      renderAll();
      showToast(`Session de ${formatMinutes(addedMin)} (${currentTimerSubject}) enregistrée !`, '🔥');
    }

    function toggleFullScreenTimer() {
      const c = $('flipClockContainer');
      const isNativeFs = document.fullscreenElement || document.webkitFullscreenElement;
      if (isNativeFs) {
        (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
        c.classList.remove('is-fullscreen');
      } else if (c.classList.contains('is-fullscreen')) {
        c.classList.remove('is-fullscreen');
      } else {
        const req = c.requestFullscreen || c.webkitRequestFullscreen;
        if (req) {
          req.call(c).catch(() => c.classList.add('is-fullscreen'));
        } else {
          c.classList.add('is-fullscreen');
        }
      }
    }

    function exitFullscreenOrBack() {
      const c = $('flipClockContainer');
      const isNativeFs = document.fullscreenElement || document.webkitFullscreenElement;
      if (isNativeFs || c.classList.contains('is-fullscreen')) {
        if (isNativeFs) (document.exitFullscreen || document.webkitExitFullscreen)?.call(document);
        c.classList.remove('is-fullscreen');
      } else {
        switchTab('dashboard');
      }
    }

    function renderTodaySessions() {
      const list = state.sessions.filter(s => s.date === getTodayKey());
      $('todaySessionsList').innerHTML = list.length === 0
        ? `<p class="text-xs py-3" style="color:var(--text-muted);">Aucune session enregistrée aujourd'hui.</p>`
        : list.map(s => {
            const c = esc(getSubjectColor(s.subject));
            return `<div class="task-row flex items-center justify-between p-3 rounded-xl">
              <div class="flex items-center gap-2.5"><span class="text-xs font-mono-timer opacity-60">${esc(s.time)}</span><span class="w-2.5 h-2.5 rounded-full" style="background-color:${c};"></span><span class="font-bold text-xs" style="color:${c};">${esc(s.subject)}</span></div>
              <span class="font-mono-timer font-bold text-xs">+ ${formatMinutes(s.minutes)}</span>
            </div>`;
          }).join('');
    }

    function openManualTimeModal(dateKey) {
      $('manualDateInput').value = SecurityGuard.isValidDateKey(dateKey) ? dateKey : getTodayKey();
      $('manualTimeModal').classList.remove('hidden');
    }

    function submitManualTime(e) {
      e.preventDefault();
      const rawDate = $('manualDateInput').value;
      const dateKey = SecurityGuard.isValidDateKey(rawDate) ? rawDate : getTodayKey();
      const h = SecurityGuard.clampNumber($('manualHoursInput').value, 0, 15, 0);
      const m = SecurityGuard.clampNumber($('manualMinutesInput').value, 0, 59, 0);
      const totalMin = h * 60 + m;
      if (totalMin <= 0) return;
      const subj = SecurityGuard.cleanText($('manualSubjectSelect').value, 40) || state.subjects[0].name;
      state.sessions.unshift({
        id: Date.now(), date: dateKey, subject: subj,
        minutes: totalMin, time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      });
      saveState();
      $('manualTimeModal').classList.add('hidden');
      renderAll();
      showToast(`+ ${formatMinutes(totalMin)} ajoutées en ${subj}`, '📚');
    }

    // =========================================================================
    // PARAMÈTRES, ÉDITION DE MATIÈRES & SYNCHRO
    // =========================================================================
    function renderSettings() {
      $('goalSliderValue').textContent = `${state.dailyGoalHours}h / jour`;
      $('goalRangeInput').value = state.dailyGoalHours;
      if ($('syncKeyInput') && document.activeElement !== $('syncKeyInput')) {
        $('syncKeyInput').value = state.syncKey || '';
      }

      const curColor = SecurityGuard.cleanHexColor($('newSubjectColorInput').value, '#10b981');
      $('subjectPresetPalette').innerHTML = MAIN_5_COLORS.map(hex => `<button type="button" onclick="$('newSubjectColorInput').value='${hex}';renderSettings();" class="w-7 h-7 rounded-full transition transform hover:scale-110 ${curColor === hex ? 'scale-110 ring-2 ring-offset-2 ring-offset-black ring-white' : 'opacity-80 hover:opacity-100'}" style="background-color:${hex};"></button>`).join('');

      $('subjectsListEditor').innerHTML = state.subjects.map((s, idx) => `<div class="task-row flex items-center justify-between p-3 rounded-xl gap-2">
        <div class="flex items-center gap-3 flex-1">
          <input type="color" value="${esc(s.color)}" onchange="updateSubjectColor(${idx}, this.value)" class="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0 flex-shrink-0" />
          <input type="text" value="${esc(s.name)}" maxlength="40" onchange="renameSubject(${idx}, this.value)" class="bg-transparent text-sm font-bold focus:outline-none border-b border-transparent focus:border-zinc-500 px-1 py-0.5 w-full" title="Cliquer pour renommer la matière" />
        </div>
        ${state.subjects.length > 1 ? `<button onclick="removeSubjectByIndex(${idx})" class="text-xs px-2.5 py-1 rounded-lg opacity-60 hover:opacity-100 hover:bg-red-500/20 hover:text-red-400 transition flex-shrink-0">Supprimer</button>` : ''}
      </div>`).join('');
    }

    function renameSubject(idx, newName) {
      const trimmed = SecurityGuard.cleanText(newName, 40);
      if (!trimmed || !state.subjects[idx]) {
        renderSettings();
        return;
      }
      const oldName = state.subjects[idx].name;
      if (oldName === trimmed) return;
      state.subjects[idx].name = trimmed;
      state.tasks.forEach(t => { if (t.subject === oldName) t.subject = trimmed; });
      state.sessions.forEach(s => { if (s.subject === oldName) s.subject = trimmed; });
      if (currentTimerSubject === oldName) currentTimerSubject = trimmed;
      saveState();
      renderAll();
      showToast(`Matière renommée en "${trimmed}"`, '✏️');
    }

    function updateSubjectColor(idx, hex) {
      if (state.subjects[idx]) {
        state.subjects[idx].color = SecurityGuard.cleanHexColor(hex, state.subjects[idx].color);
        saveState();
        renderAll();
      }
    }

    function addSubject(e) {
      e.preventDefault();
      const input = $('newSubjectInput'), colorInput = $('newSubjectColorInput');
      const val = SecurityGuard.cleanText(input.value, 40);
      if (val && !state.subjects.some(s => s.name.toLowerCase() === val.toLowerCase())) {
        state.subjects.push({ name: val, color: SecurityGuard.cleanHexColor(colorInput.value, '#10b981') });
        input.value = '';
        colorInput.value = MAIN_5_COLORS[state.subjects.length % MAIN_5_COLORS.length];
        saveState();
        renderAll();
        showToast(`Matière "${val}" ajoutée`, '🎨');
      }
    }

    function removeSubjectByIndex(idx) {
      if (state.subjects.length <= 1) return;
      const removed = state.subjects[idx].name;
      state.subjects.splice(idx, 1);
      saveState();
      renderAll();
      showToast(`Matière "${removed}" supprimée`, '🗑️');
    }

    initFlipWheels();
    applyTheme();
    setTimerMode('countup');
    CloudSyncEngine.init();
    switchTab('dashboard');
  </script>
</body>
</html>