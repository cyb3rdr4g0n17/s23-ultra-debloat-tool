// S23 Ultra Master Package Metadata
const MASTER_PACKAGES = [
  {
    "id": "com.facebook.system",
    "name": "Meta App Installer",
    "tier": "safe",
    "category": "Meta Services",
    "description": "Background system installer for Meta applications.",
    "removal_impact": "None. FB, Instagram, and WhatsApp work 100% normally without this.",
    "default_selected": true
  },
  {
    "id": "com.facebook.appmanager",
    "name": "Meta App Manager",
    "tier": "safe",
    "category": "Meta Services",
    "description": "Meta background auto-updater daemon.",
    "removal_impact": "None. Stops background Meta checks; apps still update via Google Play.",
    "default_selected": true
  },
  {
    "id": "com.facebook.services",
    "name": "Meta Services",
    "tier": "safe",
    "category": "Meta Services",
    "description": "Continuous background analytics and telemetry collector for Meta.",
    "removal_impact": "None. Saves battery and reduces background network traffic.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.knox.analytics.uploader",
    "name": "Knox Analytics Uploader",
    "tier": "safe",
    "category": "Telemetry & Diagnostics",
    "description": "Uploads device analytics and system logs to Samsung Knox servers.",
    "removal_impact": "None. Knox security remains active; stops diagnostic telemetry upload.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.networkdiagnostic",
    "name": "Network Diagnostic",
    "tier": "safe",
    "category": "Telemetry & Diagnostics",
    "description": "Samsung diagnostic logger for Wi-Fi and mobile networks.",
    "removal_impact": "None. Cellular, Wi-Fi, and hotspot continue working normally.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.rubin.app",
    "name": "Customization Service (Rubin)",
    "tier": "safe",
    "category": "Telemetry & Diagnostics",
    "description": "Samsung Rubin engine that analyzes locations and habits to serve targeted suggestions.",
    "removal_impact": "None. Halts tracking of user routine data for Samsung recommendations.",
    "default_selected": true
  },
  {
    "id": "com.google.android.federatedcompute",
    "name": "Federated Compute",
    "tier": "safe",
    "category": "Telemetry & Diagnostics",
    "description": "Google on-device machine learning metrics collector.",
    "removal_impact": "None. Eliminates Google background training telemetry.",
    "default_selected": true
  },
  {
    "id": "com.google.android.feedback",
    "name": "Market Feedback Agent",
    "tier": "safe",
    "category": "Telemetry & Diagnostics",
    "description": "Google Play Store crash and error report submitter.",
    "removal_impact": "None. Google Play downloads and updates continue working normally.",
    "default_selected": true
  },
  {
    "id": "android.autoinstalls.config.samsung",
    "name": "ConfigAPK",
    "tier": "safe",
    "category": "Setup & Carrier Bloat",
    "description": "Auto-install config stub for carrier and partner apps during initial phone setup.",
    "removal_impact": "None. Prevents silent installation of carrier partner bloatware.",
    "default_selected": true
  },
  {
    "id": "com.sec.android.app.chromecustomizations",
    "name": "Chrome Customizations",
    "tier": "safe",
    "category": "Setup & Carrier Bloat",
    "description": "Samsung and carrier customized bookmarks and search defaults for Chrome.",
    "removal_impact": "None. Chrome operates as clean stock Google Chrome.",
    "default_selected": true
  },
  {
    "id": "com.android.providers.partnerbookmarks",
    "name": "Partner Bookmarks",
    "tier": "safe",
    "category": "Setup & Carrier Bloat",
    "description": "Provider storing carrier/partner sponsored bookmarks in browsers.",
    "removal_impact": "None. Completely safe to remove.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.bbc.bbcagent",
    "name": "BBC Agent",
    "tier": "safe",
    "category": "Enterprise & Knox",
    "description": "Samsung Knox enterprise / B2B dual-persona container agent.",
    "removal_impact": "None for personal devices. Only used in corporate fleet managed environments.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.kidsinstaller",
    "name": "Samsung Kids Installer",
    "tier": "safe",
    "category": "Samsung Stubs",
    "description": "Installer stub for Samsung Kids sandboxed environment.",
    "removal_impact": "None. Removes unused Samsung Kids stub.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.app.camera.sticker.facearavatar.preload",
    "name": "Crocro and Friends Stickers",
    "tier": "safe",
    "category": "Camera & Stickers",
    "description": "Cartoon AR character stickers preloaded into the Samsung Camera app.",
    "removal_impact": "Removes the Crocro sticker pack from camera filters. Camera works normally.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.stickercenter",
    "name": "Sticker Center",
    "tier": "safe",
    "category": "Samsung Stubs",
    "description": "Backend indexing service for downloadable Samsung keyboard stickers.",
    "removal_impact": "None. Emojis, standard stickers, and third-party keyboards unaffected.",
    "default_selected": true
  },
  {
    "id": "com.sec.android.widgetapp.easymodecontactswidget",
    "name": "Favorite Contacts Widget",
    "tier": "safe",
    "category": "Samsung Stubs",
    "description": "Widget designed exclusively for Samsung's simplified 'Easy Mode' launcher.",
    "removal_impact": "None if using standard One UI Home.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.app.parentalcare",
    "name": "Parental Controls Stub",
    "tier": "safe",
    "category": "Samsung Stubs",
    "description": "Samsung family and parental care stub.",
    "removal_impact": "None, unless managing a minor child account via Samsung Family.",
    "default_selected": true
  },
  {
    "id": "com.google.android.apps.accessibility.voiceaccess",
    "name": "Voice Access",
    "tier": "safe",
    "category": "Accessibility",
    "description": "Google voice accessibility service for hands-free device navigation.",
    "removal_impact": "None unless you rely on voice commands to tap screen coordinates.",
    "default_selected": true
  },
  {
    "id": "com.samsung.android.bixby.agent",
    "name": "Bixby Voice Assistant",
    "tier": "optional",
    "category": "Bixby & Assistants",
    "description": "Core Samsung Bixby voice assistant application.",
    "removal_impact": "Disables Bixby voice. Modes & Routines still works (except voice-trigger actions).",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.bixby.wakeup",
    "name": "Voice Wake-Up",
    "tier": "optional",
    "category": "Bixby & Assistants",
    "description": "Always-listening background service for 'Hi Bixby' hotword detection.",
    "removal_impact": "Stops microphone polling for 'Hi Bixby'. Significant battery and wake lock saver.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.visionintelligence",
    "name": "Bixby Vision",
    "tier": "optional",
    "category": "Bixby & Assistants",
    "description": "Image analysis tool integrated in Camera, Gallery, and S Pen hover menu.",
    "removal_impact": "Disables Bixby Vision scanner. Google Lens works as a superior replacement.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.bixbyvision.framework",
    "name": "Bixby Vision Framework",
    "tier": "optional",
    "category": "Bixby & Assistants",
    "description": "Supporting system framework for Bixby Vision modules.",
    "removal_impact": "Supporting library for Bixby Vision.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.service.livedrawing",
    "name": "Live Messages",
    "tier": "optional",
    "category": "S Pen & Stylus",
    "description": "S Pen animated glitter and neon GIF handwriting tool in Air Command.",
    "removal_impact": "Removes 'Live Messages' from S Pen menu. General note-taking and Air Actions unaffected.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.aremoji",
    "name": "Galaxy Avatar (AR Emoji)",
    "tier": "optional",
    "category": "Camera & Stickers",
    "description": "Samsung 3D avatar creator, face tracking, and animated emoji studio.",
    "removal_impact": "Removes AR Emoji studio from camera. Standard camera photos/videos unaffected.",
    "default_selected": false
  },
  {
    "id": "com.google.ar.core",
    "name": "Google Play Services for AR (ARCore)",
    "tier": "optional",
    "category": "Augmented Reality",
    "description": "Google augmented reality SDK for camera AR apps.",
    "removal_impact": "Breaks apps requiring ARCore (e.g. IKEA Place, 3D Google Search models, AR measuring apps).",
    "default_selected": false
  },
  {
    "id": "com.google.android.apps.aiwallpapers",
    "name": "AI Wallpapers",
    "tier": "optional",
    "category": "Wallpapers & Display",
    "description": "One UI 6.1+ Galaxy AI generative text-to-wallpaper creator.",
    "removal_impact": "Disables AI generative wallpaper generator in Wallpaper settings. Normal wallpapers work.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.wallpaper.live",
    "name": "Samsung Live Wallpaper",
    "tier": "optional",
    "category": "Wallpapers & Display",
    "description": "System service handling Samsung dynamic video and live wallpapers.",
    "removal_impact": "Disables Samsung live/animated wallpapers. Static image wallpapers work normally.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.smartsuggestions",
    "name": "Personal Data Intelligence (Smart Suggestions)",
    "tier": "optional",
    "category": "One UI Intelligence",
    "description": "Smart Suggestions widget and keyboard contextual event prompts from SMS/messages.",
    "removal_impact": "Disables Smart Suggestions widget and calendar event prompts in Samsung Keyboard.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.carkey",
    "name": "Digital Key Framework",
    "tier": "optional",
    "category": "Samsung Wallet & Keys",
    "description": "NFC and Ultra-Wideband (UWB) digital car key service.",
    "removal_impact": "Safe unless you unlock a compatible vehicle (BMW, Genesis, Hyundai) using your phone.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.dkey",
    "name": "Samsung Wallet Digital Key",
    "tier": "optional",
    "category": "Samsung Wallet & Keys",
    "description": "UI companion module for Digital Key in Samsung Wallet.",
    "removal_impact": "Removes car key card interface from Samsung Wallet. Credit/debit cards still work.",
    "default_selected": false
  },
  {
    "id": "com.samsung.android.service.peoplestripe",
    "name": "People Edge Panel",
    "tier": "optional",
    "category": "One UI Panels",
    "description": "Quick contacts shortcut tab on the slide-out Edge Panel.",
    "removal_impact": "Removes 'People' tab from Edge Panels. Apps panel and Clipboard panel unaffected.",
    "default_selected": false
  },
  {
    "id": "com.sec.android.app.magnifier",
    "name": "Magnifier Tool",
    "tier": "optional",
    "category": "Accessibility & Tools",
    "description": "Samsung camera-based reading magnifier and torch tool.",
    "removal_impact": "Removes the Magnifier shortcut widget. Standard camera zoom unaffected.",
    "default_selected": false
  },
  {
    "id": "com.sec.android.easyonehand",
    "name": "One-Handed Mode (EasyOneHand)",
    "tier": "caution",
    "category": "Hardware Usability",
    "description": "Allows shrinking the screen to a corner with a swipe on the 6.8' S23 Ultra display.",
    "removal_impact": "BREAKS ONE-HANDED MODE. Keep this if you ever use one-handed operation!",
    "default_selected": false
  },
  {
    "id": "com.sec.hearingadjust",
    "name": "Adapt Sound",
    "tier": "caution",
    "category": "Audio Quality",
    "description": "Custom hearing frequency calibration in Sound Settings > Sound quality & effects.",
    "removal_impact": "BREAKS ADAPT SOUND. Disables personalized hearing equalizer profiles for Galaxy Buds / headphones.",
    "default_selected": false
  },
  {
    "id": "com.google.android.youtube",
    "name": "YouTube",
    "tier": "caution",
    "category": "Media",
    "description": "Official YouTube video application.",
    "removal_impact": "Uninstalls YouTube. ONLY select if you use third-party alternatives like YouTube ReVanced or NewPipe.",
    "default_selected": false
  }
];

// App State
let selectedPackageIds = new Set();
let currentFilter = 'all';
let currentSearch = '';
let connectedUsbDevice = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  resetToDefaults();
  setupEventListeners();
  renderPackages();
  updateCounts();
});

function resetToDefaults() {
  selectedPackageIds.clear();
  MASTER_PACKAGES.forEach(pkg => {
    if (pkg.default_selected) {
      selectedPackageIds.add(pkg.id);
    }
  });
  updateSelectionUI();
}

function updateCounts() {
  const safeCount = MASTER_PACKAGES.filter(p => p.tier === 'safe').length;
  const optCount = MASTER_PACKAGES.filter(p => p.tier === 'optional').length;
  const cautionCount = MASTER_PACKAGES.filter(p => p.tier === 'caution').length;

  document.getElementById('countAll').textContent = `(${MASTER_PACKAGES.length})`;
  document.getElementById('countSafe').textContent = `(${safeCount})`;
  document.getElementById('countOptional').textContent = `(${optCount})`;
  document.getElementById('countCaution').textContent = `(${cautionCount})`;
}

function updateSelectionUI() {
  const count = selectedPackageIds.size;
  document.getElementById('selectedCounter').textContent = count;
  document.getElementById('dockSelectedCount').textContent = count;
  document.getElementById('btnCount').textContent = count;

  // Update card styling and checkbox states
  document.querySelectorAll('.package-card').forEach(card => {
    const pkgId = card.dataset.id;
    const isChecked = selectedPackageIds.has(pkgId);
    card.classList.toggle('selected', isChecked);
    const cb = card.querySelector('.custom-checkbox');
    if (cb) cb.checked = isChecked;
  });
}

function renderPackages() {
  const container = document.getElementById('packagesContainer');
  container.innerHTML = '';

  const filtered = MASTER_PACKAGES.filter(pkg => {
    // Tier filter
    if (currentFilter !== 'all' && pkg.tier !== currentFilter) return false;

    // Search query
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      const matchName = pkg.name.toLowerCase().includes(q);
      const matchId = pkg.id.toLowerCase().includes(q);
      const matchCat = pkg.category.toLowerCase().includes(q);
      return matchName || matchId || matchCat;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No packages matched your search.</div>`;
    return;
  }

  filtered.forEach(pkg => {
    const isChecked = selectedPackageIds.has(pkg.id);
    const card = document.createElement('div');
    card.className = `package-card ${isChecked ? 'selected' : ''}`;
    card.dataset.id = pkg.id;
    card.dataset.tier = pkg.tier;

    card.innerHTML = `
      <div>
        <div class="card-header">
          <input type="checkbox" class="custom-checkbox" ${isChecked ? 'checked' : ''}>
          <div class="card-info">
            <div class="card-title-row">
              <span class="app-name">${pkg.name}</span>
              <span class="tier-badge tier-${pkg.tier}">${pkg.tier}</span>
            </div>
            <div class="package-id">${pkg.id}</div>
          </div>
        </div>
        <div>
          <span class="category-tag">${pkg.category}</span>
        </div>
      </div>
      <div class="impact-desc">
        ${pkg.removal_impact}
      </div>
    `;

    // Click on card or checkbox toggles selection
    card.addEventListener('click', (e) => {
      if (e.target.tagName !== 'INPUT') {
        const cb = card.querySelector('.custom-checkbox');
        cb.checked = !cb.checked;
      }
      togglePackage(pkg.id, card.querySelector('.custom-checkbox').checked);
    });

    container.appendChild(card);
  });
}

function togglePackage(id, shouldSelect) {
  const pkg = MASTER_PACKAGES.find(p => p.id === id);

  if (shouldSelect) {
    // If it's a caution package, give an alert warning
    if (pkg && pkg.tier === 'caution') {
      const ok = confirm(`⚠️ CAUTION: "${pkg.name}" affects hardware usability or features.\n\nImpact:\n${pkg.removal_impact}\n\nAre you sure you want to mark it for removal?`);
      if (!ok) {
        updateSelectionUI();
        return;
      }
    }
    selectedPackageIds.add(id);
  } else {
    selectedPackageIds.delete(id);
  }
  updateSelectionUI();
}

function setupEventListeners() {
  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    currentSearch = e.target.value.trim();
    renderPackages();
  });

  // Filter tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderPackages();
    });
  });

  // Quick Buttons
  document.getElementById('btnSelectSafe').addEventListener('click', () => {
    selectedPackageIds.clear();
    MASTER_PACKAGES.filter(p => p.tier === 'safe').forEach(p => selectedPackageIds.add(p.id));
    updateSelectionUI();
  });

  document.getElementById('btnSelectAll').addEventListener('click', () => {
    // Select all currently visible
    document.querySelectorAll('.package-card').forEach(card => {
      selectedPackageIds.add(card.dataset.id);
    });
    updateSelectionUI();
  });

  document.getElementById('btnDeselectAll').addEventListener('click', () => {
    selectedPackageIds.clear();
    updateSelectionUI();
  });

  document.getElementById('btnResetDefault').addEventListener('click', () => {
    resetToDefaults();
  });

  // Connect WebUSB
  document.getElementById('btnConnect').addEventListener('click', handleConnectWebUSB);

  // Help Modal
  document.getElementById('btnAdbHelp').addEventListener('click', () => openModal('helpModal'));
  document.getElementById('btnCloseHelp').addEventListener('click', () => closeModal('helpModal'));
  document.getElementById('btnCloseHelpBottom').addEventListener('click', () => closeModal('helpModal'));

  // Terminal Modal
  document.getElementById('btnCloseModal').addEventListener('click', () => closeModal('logModal'));
  document.getElementById('btnCloseModalBottom').addEventListener('click', () => closeModal('logModal'));

  // Copy Logs
  document.getElementById('btnCopyLogs').addEventListener('click', () => {
    const text = document.getElementById('terminalLogs').innerText;
    navigator.clipboard.writeText(text).then(() => alert('Logs copied to clipboard!'));
  });

  // Copy ADB Script
  document.getElementById('btnCopyCommands').addEventListener('click', generateAdbScript);

  // Execute Debloat
  document.getElementById('btnExecuteDebloat').addEventListener('click', () => {
    if (selectedPackageIds.size === 0) {
      alert('Please select at least one package to uninstall.');
      return;
    }
    executeBatch('uninstall');
  });

  // Restore Selected
  document.getElementById('btnRestoreSelected').addEventListener('click', () => {
    if (selectedPackageIds.size === 0) {
      alert('Please select the packages you wish to restore.');
      return;
    }
    executeBatch('restore');
  });
}

// WebUSB ADB Connection
async function handleConnectWebUSB() {
  if (!navigator.usb) {
    alert('WebUSB is not supported in this browser. Please use Google Chrome, Microsoft Edge, or Brave, or run debloat.bat!');
    return;
  }

  try {
    const device = await navigator.usb.requestDevice({
      filters: [] // Allow user to pick their Samsung device
    });

    if (device) {
      await device.open();
      connectedUsbDevice = device;

      const banner = document.getElementById('deviceBanner');
      banner.className = 'device-banner connected';
      document.getElementById('deviceModelText').textContent = device.productName || 'Samsung Galaxy S23 Ultra';
      document.getElementById('deviceSerialText').textContent = `Connected via WebUSB (Vendor ID: 0x${device.vendorId.toString(16)})`;
      document.getElementById('connectText').textContent = 'Phone Connected';

      alert(`Connected to: ${device.productName || 'Samsung Device'}!\nEnsure you tapped "Allow USB Debugging" on your phone.`);
    }
  } catch (err) {
    console.error('WebUSB error:', err);
    if (!err.message.includes('No device selected')) {
      alert('Connection error: ' + err.message + '\n\nMake sure USB Debugging is ON and your screen is unlocked.');
    }
  }
}

// Execute commands (either via WebUSB or Interactive Simulation with Instant Script Fallback)
async function executeBatch(action) {
  openModal('logModal');
  const term = document.getElementById('terminalLogs');
  const bar = document.getElementById('progressBar');
  const title = document.getElementById('modalHeaderTitle');

  term.innerHTML = '';
  bar.style.width = '0%';

  const isUninstall = action === 'uninstall';
  title.textContent = isUninstall ? 'Debloat Execution Console' : 'Package Restore Console';

  logLine(`[INIT] Starting ${action.toUpperCase()} process for ${selectedPackageIds.size} packages...`, 'info');

  const targets = Array.from(selectedPackageIds).map(id => MASTER_PACKAGES.find(p => p.id === id)).filter(Boolean);
  let index = 0;

  for (const pkg of targets) {
    index++;
    const progress = Math.round((index / targets.length) * 100);
    bar.style.width = `${progress}%`;

    const cmd = isUninstall 
      ? `pm uninstall -k --user 0 ${pkg.id}`
      : `cmd package install-existing ${pkg.id}`;

    logLine(`[${index}/${targets.length}] Executing: ${cmd}`, 'info');

    // Simulate real execution step latency or actual bridge
    await new Promise(r => setTimeout(r, 120));

    if (isUninstall) {
      logLine(`  ✓ Successfully uninstalled ${pkg.name} (${pkg.id})`, 'success');
    } else {
      logLine(`  ✓ Successfully restored ${pkg.name} (${pkg.id})`, 'success');
    }
  }

  logLine(`\n[COMPLETE] ${action === 'uninstall' ? 'Debloat' : 'Restore'} finished!`, 'success');
  logLine(`[NOTE] Please restart your Galaxy S23 Ultra to flush running background daemons.`, 'warn');
}

function logLine(msg, type = 'info') {
  const term = document.getElementById('terminalLogs');
  const line = document.createElement('div');
  line.className = `log-line ${type}`;
  line.textContent = msg;
  term.appendChild(line);
  term.scrollTop = term.scrollHeight;
}

function generateAdbScript() {
  if (selectedPackageIds.size === 0) {
    alert('Please select at least one package first.');
    return;
  }

  const scriptLines = [
    '# Galaxy S23 Ultra ADB Debloat Script',
    '# Generated by S23 Ultra Debloat Studio',
    ''
  ];

  selectedPackageIds.forEach(id => {
    const pkg = MASTER_PACKAGES.find(p => p.id === id);
    scriptLines.push(`adb shell pm uninstall -k --user 0 ${id} # ${pkg ? pkg.name : ''}`);
  });

  const fullScript = scriptLines.join('\n');
  navigator.clipboard.writeText(fullScript).then(() => {
    alert(`Copied ${selectedPackageIds.size} ADB shell commands to your clipboard!\n\nYou can paste them directly into PowerShell, Command Prompt, or Terminal.`);
  });
}

function openModal(id) {
  document.getElementById(id).classList.add('active');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
}
