// GrammarCraft VIP - Core Application Logic
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNavigation();
  renderTenses("all");
  renderPartsOfSpeech();
  renderActivePassive();
  renderDirectIndirect();
  renderCommonMistakes();
  initTranslator();
  initQuiz();
  initSearch();
});

/* ==========================================================================
   1. Theme Management (VIP Dark & Modern Light)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("gc_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("gc_theme", next);
      updateThemeIcon(next);
      showToast(`Switched to ${next === "dark" ? "VIP Dark" : "Clean Light"} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggle i");
  if (icon) {
    icon.className = theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
}

/* ==========================================================================
   2. Navigation & Tab Switching & Mobile Drawer
   ========================================================================== */
function initNavigation() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const navLinks = document.querySelectorAll(".nav-link[data-target]");
  const viewSections = document.querySelectorAll(".view-section");

  const hamburger = document.getElementById("hamburgerBtn");
  const drawer = document.getElementById("mobileDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  const closeDrawer = document.getElementById("closeDrawer");

  function switchTab(targetId) {
    viewSections.forEach(sec => sec.classList.remove("active"));
    tabBtns.forEach(btn => btn.classList.remove("active"));
    navLinks.forEach(link => link.classList.remove("active"));

    const activeSec = document.getElementById(targetId);
    if (activeSec) {
      activeSec.classList.add("active");
    }

    const correspondingTab = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
    if (correspondingTab) correspondingTab.classList.add("active");

    const correspondingNav = document.querySelectorAll(`.nav-link[data-target="${targetId}"]`);
    correspondingNav.forEach(nl => nl.classList.add("active"));

    // Close mobile drawer if open
    if (drawer && drawer.classList.contains("open")) {
      drawer.classList.remove("open");
      backdrop.classList.remove("active");
    }

    // Smooth scroll to top of section
    window.scrollTo({ top: 380, behavior: 'smooth' });
  }

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      if (target) switchTab(target);
    });
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = link.getAttribute("data-target");
      if (target) switchTab(target);
    });
  });

  // Mobile Drawer toggles
  if (hamburger && drawer && backdrop) {
    hamburger.addEventListener("click", () => {
      drawer.classList.add("open");
      backdrop.classList.add("active");
    });
  }

  if (closeDrawer && drawer && backdrop) {
    closeDrawer.addEventListener("click", () => {
      drawer.classList.remove("open");
      backdrop.classList.remove("active");
    });
  }

  if (backdrop && drawer) {
    backdrop.addEventListener("click", () => {
      drawer.classList.remove("open");
      backdrop.classList.remove("active");
    });
  }
}

/* ==========================================================================
   3. Speech Synthesis (Pronunciation Speaker)
   ========================================================================== */
function speakEnglishText(text) {
  if (!("speechSynthesis" in window)) {
    showToast("Text-to-speech is not supported in this browser.");
    return;
  }
  window.speechSynthesis.cancel(); // Stop any active audio
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.9; // Slightly slower for clear teaching
  window.speechSynthesis.speak(utterance);
}

/* ==========================================================================
   4. Live Translator (Urdu <-> English with Instant API)
   ========================================================================== */
let currentSourceLang = "en";
let currentTargetLang = "ur";
let translateDebounce = null;

function initTranslator() {
  const transInput = document.getElementById("transInput");
  const transOutput = document.getElementById("transOutput");
  const swapBtn = document.getElementById("swapLangBtn");
  const clearBtn = document.getElementById("clearTransBtn");
  const copyBtn = document.getElementById("copyTransBtn");
  const speakInputBtn = document.getElementById("speakInputBtn");
  const speakOutputBtn = document.getElementById("speakOutputBtn");
  const srcLangPill = document.getElementById("srcLangPill");
  const tgtLangPill = document.getElementById("tgtLangPill");
  const charCounter = document.getElementById("charCounter");
  const quickChips = document.querySelectorAll(".quick-chip");

  if (!transInput) return;

  // Character counter and auto translate
  transInput.addEventListener("input", () => {
    const text = transInput.value;
    charCounter.textContent = `${text.length} / 500`;
    clearTimeout(translateDebounce);
    if (!text.trim()) {
      transOutput.textContent = "ترجمہ یہاں نظر آئے گا...";
      return;
    }
    transOutput.innerHTML = '<span style="color:var(--text-muted);"><i class="fa-solid fa-spinner fa-spin"></i> Translating...</span>';
    translateDebounce = setTimeout(() => {
      executeTranslation(text.trim());
    }, 500);
  });

  // Swap Languages
  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      const prevSource = currentSourceLang;
      currentSourceLang = currentTargetLang;
      currentTargetLang = prevSource;

      srcLangPill.textContent = currentSourceLang === "en" ? "English" : "Urdu (اردو)";
      tgtLangPill.textContent = currentTargetLang === "ur" ? "Urdu (اردو)" : "English";

      const currentIn = transInput.value;
      const currentOut = transOutput.textContent;
      if (currentOut && !currentOut.includes("ترجمہ یہاں") && !currentOut.includes("Translating")) {
        transInput.value = currentOut;
        executeTranslation(currentOut);
      }
      showToast(`Swapped: ${srcLangPill.textContent} ➔ ${tgtLangPill.textContent}`);
    });
  }

  // Clear Button
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      transInput.value = "";
      transOutput.textContent = "ترجمہ یہاں نظر آئے گا...";
      charCounter.textContent = "0 / 500";
      transInput.focus();
    });
  }

  // Copy output
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const text = transOutput.textContent;
      if (!text || text.includes("ترجمہ یہاں")) {
        showToast("No translated text to copy!");
        return;
      }
      navigator.clipboard.writeText(text).then(() => {
        showToast("Translated text copied to clipboard! ✅");
      });
    });
  }

  // Audio Buttons
  if (speakInputBtn) {
    speakInputBtn.addEventListener("click", () => {
      const val = transInput.value.trim();
      if (val) speakEnglishText(val);
      else showToast("Please type something to pronounce.");
    });
  }

  if (speakOutputBtn) {
    speakOutputBtn.addEventListener("click", () => {
      const val = transOutput.textContent.trim();
      if (val && currentTargetLang === "en") {
        speakEnglishText(val);
      } else {
        showToast("Pronunciation is optimized for English text.");
      }
    });
  }

  // Quick Chips
  quickChips.forEach(chip => {
    chip.addEventListener("click", () => {
      const phrase = chip.getAttribute("data-phrase") || chip.textContent;
      transInput.value = phrase;
      charCounter.textContent = `${phrase.length} / 500`;
      executeTranslation(phrase);
    });
  });
}

async function executeTranslation(text) {
  const transOutput = document.getElementById("transOutput");
  try {
    const pair = `${currentSourceLang}|${currentTargetLang}`;
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${pair}`;
    const res = await fetch(url);
    const data = await res.json();

    if (data && data.responseData && data.responseData.translatedText) {
      transOutput.textContent = data.responseData.translatedText;
    } else {
      transOutput.textContent = "ترجمہ دستیاب نہیں ہو سکا۔ دوبارہ کوشش کریں۔";
    }
  } catch (err) {
    console.error("Translation API error:", err);
    // Graceful offline fallback
    transOutput.textContent = "نیٹ ورک کا مسئلہ ہے یا آف لائن ہیں۔ براہ کرم انٹرنیٹ چیک کریں۔";
  }
}

/* ==========================================================================
   5. Tenses Master Renderer
   ========================================================================== */
function renderTenses(category = "all") {
  const grid = document.getElementById("tensesGrid");
  if (!grid) return;

  const tensesToRender = category === "all"
    ? GRAMMAR_DATA.tenses
    : GRAMMAR_DATA.tenses.filter(t => t.category === category);

  grid.innerHTML = tensesToRender.map(tense => `
    <div class="tense-card" data-category="${tense.category}" data-id="${tense.id}">
      <span class="tense-badge">${tense.category.toUpperCase()}</span>
      <div class="tense-title-wrap">
        <h3 class="tense-name">${tense.name}</h3>
        <div class="tense-urdu-title">${tense.urduName}</div>
      </div>

      <div class="tense-urdu-id">
        <strong>پہچان: </strong> ${tense.urduIdentity}
      </div>

      <div class="formula-box">
        <div class="formula-item">
          <span class="formula-label">Helping Verbs:</span>
          <span class="formula-code">${tense.helpingVerbs}</span>
        </div>
        <div class="formula-item">
          <span class="formula-label">Main Verb:</span>
          <span class="formula-code">${tense.mainVerb}</span>
        </div>
        <div class="formula-item">
          <span class="formula-label">Formula (Positive):</span>
          <span class="formula-code">${tense.formulaPositive}</span>
        </div>
      </div>

      <div style="margin-bottom: 12px; font-weight:700; font-size:0.85rem; color:var(--text-sub);">
        PRACTICAL EXAMPLES (مثالیں مع آڈیو):
      </div>

      <ul class="examples-list">
        ${tense.examples.map(ex => `
          <li class="example-row">
            <div class="example-content">
              <div class="example-en">${ex.en}</div>
              <div class="example-ur">${ex.ur}</div>
            </div>
            <button class="audio-btn" onclick="speakEnglishText('${ex.en.replace(/'/g, "\\'")}')" title="Listen Pronunciation">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");

  // Category Pill Filter bindings
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const cat = pill.getAttribute("data-cat");
      renderTenses(cat);
    });
  });
}

/* ==========================================================================
   6. Parts of Speech Renderer
   ========================================================================== */
function renderPartsOfSpeech() {
  const grid = document.getElementById("posGrid");
  if (!grid) return;

  grid.innerHTML = GRAMMAR_DATA.partsOfSpeech.map(pos => `
    <div class="pos-card" style="border-top: 4px solid ${pos.color};">
      <div class="pos-icon-wrap" style="background: ${pos.color}20; color: ${pos.color};">
        <i class="${pos.icon}"></i>
      </div>
      <h3 class="pos-title">${pos.title}</h3>
      <p class="pos-def-en">${pos.definition}</p>
      <p class="pos-def-ur">${pos.urduDef}</p>

      <div class="pos-types-list">
        <div style="font-weight:700; margin-bottom:6px; color:var(--text-sub);">Important Types:</div>
        ${pos.types.map(t => `
          <div class="pos-type-item">
            <span class="pos-type-name">${t.name}:</span>
            <span style="color:var(--text-muted);"> ${t.desc}</span>
          </div>
        `).join("")}
      </div>

      <div style="font-weight:700; font-size:0.8rem; color:var(--text-sub); margin-bottom:6px;">Sample Usage:</div>
      <ul style="list-style:none; display:flex; flex-direction:column; gap:6px;">
        ${pos.examples.map(ex => `
          <li style="font-size:0.85rem; display:flex; align-items:center; justify-content:space-between; background:var(--bg-card); padding:6px 10px; border-radius:6px;">
            <span>${ex}</span>
            <button class="audio-btn" onclick="speakEnglishText('${ex.replace(/'/g, "\\'")}')" title="Listen">
              <i class="fa-solid fa-volume-high"></i>
            </button>
          </li>
        `).join("")}
      </ul>
    </div>
  `).join("");
}

/* ==========================================================================
   7. Active & Passive + Direct / Indirect Renderers
   ========================================================================== */
function renderActivePassive() {
  const tableBody = document.getElementById("activePassiveTableBody");
  if (!tableBody) return;

  tableBody.innerHTML = GRAMMAR_DATA.activePassive.tenseTable.map(item => `
    <tr>
      <td><strong>${item.tense}</strong></td>
      <td style="font-family:monospace; color:var(--primary);">${item.active}</td>
      <td style="font-family:monospace; color:var(--accent);">${item.passive}</td>
      <td>
        <div style="font-size:0.85rem; margin-bottom:3px;"><strong>Active:</strong> ${item.exampleActive}</div>
        <div style="font-size:0.85rem; color:var(--accent);"><strong>Passive:</strong> ${item.examplePassive}</div>
      </td>
    </tr>
  `).join("");
}

function renderDirectIndirect() {
  const container = document.getElementById("narrationList");
  if (!container) return;

  container.innerHTML = GRAMMAR_DATA.directIndirect.examples.map(item => `
    <div style="background:var(--bg-surface); border:1px solid var(--border-color); border-radius:var(--radius-md); padding:16px; margin-bottom:12px;">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:6px;">
        <div>
          <span style="font-size:0.75rem; background:rgba(239, 68, 68, 0.15); color:#f87171; padding:2px 8px; border-radius:4px; font-weight:700;">DIRECT</span>
          <span style="font-weight:600; margin-left:8px;">${item.direct}</span>
        </div>
        <button class="audio-btn" onclick="speakEnglishText('${item.direct.replace(/'/g, "\\'")}')"><i class="fa-solid fa-volume-high"></i></button>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:8px;">
        <div>
          <span style="font-size:0.75rem; background:rgba(16, 185, 129, 0.15); color:#34d399; padding:2px 8px; border-radius:4px; font-weight:700;">INDIRECT</span>
          <span style="font-weight:700; color:var(--accent); margin-left:8px;">${item.indirect}</span>
        </div>
        <button class="audio-btn" onclick="speakEnglishText('${item.indirect.replace(/'/g, "\\'")}')"><i class="fa-solid fa-volume-high"></i></button>
      </div>

      <div class="urdu-text" style="font-size:0.9rem; color:var(--text-muted); border-top:1px dashed var(--border-color); padding-top:6px;">
        ${item.urdu}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   8. Common Mistakes Renderer
   ========================================================================== */
function renderCommonMistakes() {
  const grid = document.getElementById("mistakesGrid");
  if (!grid) return;

  grid.innerHTML = GRAMMAR_DATA.commonMistakes.map(m => `
    <div class="mistake-card">
      <div class="sentence-compare">
        <div class="wrong-pill">
          <i class="fa-solid fa-xmark"></i>
          <span>${m.wrong}</span>
        </div>
        <div class="right-pill">
          <i class="fa-solid fa-check"></i>
          <span>${m.right}</span>
          <button class="audio-btn" style="margin-left:auto; color:var(--accent);" onclick="speakEnglishText('${m.right.replace(/'/g, "\\'")}')">
            <i class="fa-solid fa-volume-high"></i>
          </button>
        </div>
      </div>
      <div class="mistake-explanation">
        <strong>وضاحت: </strong>${m.explanation}
      </div>
      <div class="urdu-text" style="font-size:0.88rem; color:var(--text-sub);">
        ترجمہ: ${m.urdu}
      </div>
    </div>
  `).join("");
}

/* ==========================================================================
   9. Interactive Quiz Arena
   ========================================================================== */
let currentQuizIndex = 0;
let quizScore = 0;
let answered = false;

function initQuiz() {
  currentQuizIndex = 0;
  quizScore = 0;
  answered = false;
  loadQuizQuestion();

  const nextBtn = document.getElementById("quizNextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!answered) {
        showToast("Please select an answer first!");
        return;
      }
      currentQuizIndex++;
      if (currentQuizIndex < GRAMMAR_DATA.quizzes.length) {
        answered = false;
        loadQuizQuestion();
      } else {
        showQuizResults();
      }
    });
  }
}

function loadQuizQuestion() {
  const q = GRAMMAR_DATA.quizzes[currentQuizIndex];
  const qText = document.getElementById("quizQuestionText");
  const qHint = document.getElementById("quizUrduHint");
  const qCounter = document.getElementById("quizCounter");
  const progressFill = document.getElementById("quizProgressFill");
  const optionsBox = document.getElementById("quizOptions");
  const feedbackBox = document.getElementById("quizFeedback");
  const nextBtn = document.getElementById("quizNextBtn");

  if (!qText) return;

  qCounter.textContent = `Question ${currentQuizIndex + 1} of ${GRAMMAR_DATA.quizzes.length}`;
  progressFill.style.width = `${((currentQuizIndex + 1) / GRAMMAR_DATA.quizzes.length) * 100}%`;

  qText.textContent = q.question;
  qHint.textContent = q.urduHint;
  feedbackBox.style.display = "none";
  nextBtn.textContent = currentQuizIndex === GRAMMAR_DATA.quizzes.length - 1 ? "Finish Quiz 🏆" : "Next Question ➔";

  optionsBox.innerHTML = q.options.map((opt, idx) => `
    <button class="quiz-opt-btn" onclick="handleQuizAnswer(${idx})">
      <span>${String.fromCharCode(65 + idx)}. ${opt}</span>
      <i class="fa-regular fa-circle"></i>
    </button>
  `).join("");
}

function handleQuizAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = GRAMMAR_DATA.quizzes[currentQuizIndex];
  const optButtons = document.querySelectorAll(".quiz-opt-btn");
  const feedbackBox = document.getElementById("quizFeedback");

  optButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correct) {
      btn.classList.add("correct");
      btn.querySelector("i").className = "fa-solid fa-circle-check";
    }
    if (idx === selectedIndex && idx !== q.correct) {
      btn.classList.add("wrong");
      btn.querySelector("i").className = "fa-solid fa-circle-xmark";
    }
  });

  if (selectedIndex === q.correct) {
    quizScore++;
    feedbackBox.innerHTML = `
      <div style="color:var(--accent); font-weight:700; margin-bottom:4px;">
        <i class="fa-solid fa-check-circle"></i> Shabash! Correct Answer.
      </div>
      <div style="font-size:0.88rem; color:var(--text-muted);">${q.explanation}</div>
    `;
  } else {
    feedbackBox.innerHTML = `
      <div style="color:var(--danger); font-weight:700; margin-bottom:4px;">
        <i class="fa-solid fa-circle-xmark"></i> Oops! Incorrect.
      </div>
      <div style="font-size:0.88rem; color:var(--text-muted);">${q.explanation}</div>
    `;
  }
  feedbackBox.style.display = "block";
}

function showQuizResults() {
  const arena = document.getElementById("quizArenaInner");
  if (!arena) return;

  const total = GRAMMAR_DATA.quizzes.length;
  const percentage = Math.round((quizScore / total) * 100);

  arena.innerHTML = `
    <div style="text-align:center; padding:30px 10px;">
      <div style="font-size:4rem; margin-bottom:16px;">
        ${percentage >= 80 ? "🏆" : percentage >= 50 ? "🎉" : "📚"}
      </div>
      <h2 style="font-size:1.8rem; font-weight:800; margin-bottom:8px;">Quiz Completed!</h2>
      <p style="color:var(--text-muted); margin-bottom:20px;">Your Grammar Proficiency Score</p>

      <div style="font-size:3rem; font-weight:900; color:var(--primary); margin-bottom:10px;">
        ${quizScore} / ${total}
      </div>
      <div style="font-size:1.1rem; font-weight:700; color:${percentage >= 70 ? 'var(--accent)' : 'var(--accent-gold)'}; margin-bottom:30px;">
        ${percentage}% Accuracy - ${percentage >= 80 ? "VIP Master Level!" : percentage >= 50 ? "Good Progress!" : "Keep Practicing!"}
      </div>

      <button class="btn btn-primary" onclick="restartQuiz()">
        <i class="fa-solid fa-rotate-right"></i> Retake Test
      </button>
    </div>
  `;
}

function restartQuiz() {
  location.reload();
}

/* ==========================================================================
   10. Quick Global Search Engine
   ========================================================================== */
function initSearch() {
  const searchInput = document.getElementById("globalSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
      document.querySelectorAll(".tense-card, .pos-card, .mistake-card").forEach(el => el.style.display = "");
      return;
    }

    // Filter tenses
    document.querySelectorAll(".tense-card").forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });

    // Filter parts of speech
    document.querySelectorAll(".pos-card").forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });

    // Filter mistakes
    document.querySelectorAll(".mistake-card").forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? "" : "none";
    });
  });
}

/* ==========================================================================
   11. Floating Toast System
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  let toast = document.getElementById("toastMsg");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastMsg";
    toast.className = "toast-msg";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-bell" style="color:var(--primary);"></i> ${message}`;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
