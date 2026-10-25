/**
 * MuhafizAI — Main Application Controller
 * Rebuilt to seamlessly support the new human-centered fintech design,
 * light/dark theme switching, bilingual text/speech, and multi-modal fraud detection.
 */

document.addEventListener("DOMContentLoaded", () => {
  // App state
  const state = {
    currentLang: "en", // 'en' | 'rn' | 'ur'
    currentTheme: "auto", // 'auto' | 'dark' | 'light'
    activeTab: "text", // 'text' | 'voice' | 'ocr'
    currentResult: null,
    isScanning: false
  };

  // DOM Elements
  const dom = {
    // Theme
    themeAuto: document.getElementById("themeAuto"),
    themeDark: document.getElementById("themeDark"),
    themeLight: document.getElementById("themeLight"),

    // Language
    langEn: document.getElementById("langEn"),
    langRoman: document.getElementById("langRoman"),
    langUr: document.getElementById("langUr"),

    // Core Text Elements
    appTagline: document.getElementById("appTagline"),
    radarStatusText: document.getElementById("radarStatusText"),
    heroBannerTag: document.getElementById("heroBannerTag"),
    heroTitle: document.getElementById("heroTitle"),
    heroSubtitle: document.getElementById("heroSubtitle"),
    demoScenariosLabel: document.getElementById("demoScenariosLabel"),

    // Samples
    btnSample1: document.getElementById("btnSample1"),
    btnSample2: document.getElementById("btnSample2"),
    btnSample3: document.getElementById("btnSample3"),
    btnSample4: document.getElementById("btnSample4"),
    s1Title: document.getElementById("s1Title"),
    s1Desc: document.getElementById("s1Desc"),
    s2Title: document.getElementById("s2Title"),
    s2Desc: document.getElementById("s2Desc"),
    s3Title: document.getElementById("s3Title"),
    s3Desc: document.getElementById("s3Desc"),
    s4Title: document.getElementById("s4Title"),
    s4Desc: document.getElementById("s4Desc"),

    // Tabs
    tabBtnText: document.getElementById("tabBtnText"),
    tabBtnVoice: document.getElementById("tabBtnVoice"),
    tabBtnOcr: document.getElementById("tabBtnOcr"),
    panelText: document.getElementById("panelText"),
    panelVoice: document.getElementById("panelVoice"),
    panelOcr: document.getElementById("panelOcr"),
    tabLabelText: document.getElementById("tabLabelText"),
    tabLabelVoice: document.getElementById("tabLabelVoice"),
    tabLabelOcr: document.getElementById("tabLabelOcr"),

    // Inputs
    threatTextInput: document.getElementById("threatTextInput"),
    btnPasteClipboard: document.getElementById("btnPasteClipboard"),
    clear: document.getElementById("clear"),
    check: document.getElementById("check"),
    checkBtnText: document.getElementById("checkBtnText"),
    detectedScriptVal: document.getElementById("detectedScriptVal"),
    charCountVal: document.getElementById("charCountVal"),

    // Voice Elements
    waveformCanvas: document.getElementById("waveformCanvas"),
    audioStatusText: document.getElementById("audioStatusText"),
    audioTimeDisplay: document.getElementById("audioTimeDisplay"),
    btnToggleAudioPlay: document.getElementById("btnToggleAudioPlay"),
    audioPlayText: document.getElementById("audioPlayText"),
    audioPlayIconSvg: document.getElementById("audioPlayIconSvg"),
    btnRecordVoice: document.getElementById("btnRecordVoice"),
    recordVoiceText: document.getElementById("recordVoiceText"),
    voiceFileInput: document.getElementById("voiceFileInput"),
    dVoiceText: document.getElementById("dVoiceText"),
    dVoiceSub: document.getElementById("dVoiceSub"),
    voiceTranscriptTitle: document.getElementById("voiceTranscriptTitle"),
    voiceTranscriptDisplay: document.getElementById("voiceTranscriptDisplay"),

    // OCR Elements
    ocrPreviewContainer: document.getElementById("ocrPreviewContainer"),
    ocrLaserBar: document.getElementById("ocrLaserBar"),
    btnPresetReceipt: document.getElementById("btnPresetReceipt"),
    btnPresetChat: document.getElementById("btnPresetChat"),
    ocrImageInput: document.getElementById("ocrImageInput"),
    ocrExtractedDisplay: document.getElementById("ocrExtractedDisplay"),

    // Scanning Loader
    scanLoader: document.getElementById("scanLoader"),
    scanBarFill: document.getElementById("scanBarFill"),
    scanStatusTitle: document.getElementById("scanStatusTitle"),
    scanStepNumber: document.getElementById("scanStepNumber"),
    scanStep1: document.getElementById("scanStep1"),
    scanStep2: document.getElementById("scanStep2"),
    scanStep3: document.getElementById("scanStep3"),

    // Results Dashboard
    resultContainer: document.getElementById("resultContainer"),
    emptyResultView: document.getElementById("emptyResultView"),
    activeResultView: document.getElementById("activeResultView"),
    emptyTitle: document.getElementById("emptyTitle"),
    emptyBody: document.getElementById("emptyBody"),
    gaugeArc: document.getElementById("gaugeArc"),
    gaugeScoreNumber: document.getElementById("gaugeScoreNumber"),
    verdictBadge: document.getElementById("verdictBadge"),
    verdictTitle: document.getElementById("verdictTitle"),
    verdictCategory: document.getElementById("verdictCategory"),
    valConfidence: document.getElementById("valConfidence"),
    valLatency: document.getElementById("valLatency"),
    yourMessageLabel: document.getElementById("yourMessageLabel"),
    analyzedMsgBox: document.getElementById("analyzedMsgBox"),
    whyWeThinkSoLabel: document.getElementById("whyWeThinkSoLabel"),
    flagsList: document.getElementById("flagsList"),

    // Voice Timeline Markers
    voiceTimelineContainer: document.getElementById("voiceTimelineContainer"),
    timelineTrack: document.getElementById("timelineTrack"),
    timelineProgressFill: document.getElementById("timelineProgressFill"),
    timelinePlayhead: document.getElementById("timelinePlayhead"),
    scrubTimeReadout: document.getElementById("scrubTimeReadout"),
    timelineTitleLabel: document.getElementById("timelineTitleLabel"),

    // Actions & Advisory
    nextActionCard: document.getElementById("nextActionCard"),
    nextCardHeading: document.getElementById("nextCardHeading"),
    nextCardText: document.getElementById("nextCardText"),
    btnPlayTTS: document.getElementById("btnPlayTTS"),
    ttsBtnText: document.getElementById("ttsBtnText"),
    ttsIconSvg: document.getElementById("ttsIconSvg"),
    btnOpenFiaModal: document.getElementById("btnOpenFiaModal"),
    fiaBtnText: document.getElementById("fiaBtnText"),
    btnShareWhatsApp: document.getElementById("btnShareWhatsApp"),
    waBtnText: document.getElementById("waBtnText"),

    // Value Props / How It Works
    how1Title: document.getElementById("how1Title"),
    how1Desc: document.getElementById("how1Desc"),
    how2Title: document.getElementById("how2Title"),
    how2Desc: document.getElementById("how2Desc"),
    how3Title: document.getElementById("how3Title"),
    how3Desc: document.getElementById("how3Desc"),

    // Community Scam Radar
    metric1Label: document.getElementById("metric1Label"),
    metric2Label: document.getElementById("metric2Label"),
    metric3Label: document.getElementById("metric3Label"),
    metricBlockedCount: document.getElementById("metricBlockedCount"),
    metricTopScam: document.getElementById("metricTopScam"),
    metricMoneySaved: document.getElementById("metricMoneySaved"),
    radarFeedTitle: document.getElementById("radarFeedTitle"),
    radarFeedSub: document.getElementById("radarFeedSub"),
    btnOpenReportModal: document.getElementById("btnOpenReportModal"),
    reportScamBtnText: document.getElementById("reportScamBtnText"),
    communityFeedTbody: document.getElementById("communityFeedTbody"),
    communitySearchInput: document.getElementById("communitySearchInput"),
    filterTabs: document.querySelectorAll(".filter-tab"),
    footerDisclaimer: document.getElementById("footerDisclaimer"),

    // Modals
    fiaModal: document.getElementById("fiaModal"),
    btnCloseFiaModal: document.getElementById("btnCloseFiaModal"),
    fiaDossierText: document.getElementById("fiaDossierText"),
    btnCopyDossier: document.getElementById("btnCopyDossier"),
    copyDossierText: document.getElementById("copyDossierText"),
    btnDownloadDossier: document.getElementById("btnDownloadDossier"),
    dossierCaseId: document.getElementById("dossierCaseId"),
    dossierHash: document.getElementById("dossierHash"),

    reportModal: document.getElementById("reportModal"),
    btnCloseReportModal: document.getElementById("btnCloseReportModal"),
    reportThreatForm: document.getElementById("reportThreatForm")
  };

  // Initialize Audio Canvas
  if (window.muhafizAudio) {
    window.muhafizAudio.init("waveformCanvas");
  }

  // Initialize OCR Default Preset
  if (window.muhafizOCR && dom.ocrPreviewContainer) {
    window.muhafizOCR.loadPreset("receipt", dom.ocrPreviewContainer);
  }

  // Initial Community Feed
  renderCommunityFeed();

  // -------------------------------------------------------------
  // THEME SWITCHER
  // -------------------------------------------------------------
  function setTheme(theme) {
    state.currentTheme = theme;
    [dom.themeAuto, dom.themeDark, dom.themeLight].forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });

    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      dom.themeDark.classList.add("active");
      dom.themeDark.setAttribute("aria-pressed", "true");
    } else if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      dom.themeLight.classList.add("active");
      dom.themeLight.setAttribute("aria-pressed", "true");
    } else {
      document.documentElement.removeAttribute("data-theme");
      dom.themeAuto.classList.add("active");
      dom.themeAuto.setAttribute("aria-pressed", "true");
    }
  }

  dom.themeAuto.addEventListener("click", () => setTheme("auto"));
  dom.themeDark.addEventListener("click", () => setTheme("dark"));
  dom.themeLight.addEventListener("click", () => setTheme("light"));

  // -------------------------------------------------------------
  // LANGUAGE SWITCHER
  // -------------------------------------------------------------
  function setLanguage(langKey) {
    state.currentLang = langKey;
    const t = window.MUHAFIZ_TRANSLATIONS[langKey] || window.MUHAFIZ_TRANSLATIONS.en;

    [dom.langEn, dom.langRoman, dom.langUr].forEach(b => {
      b.classList.remove("active");
      b.setAttribute("aria-pressed", "false");
    });

    const isUr = (langKey === "ur");
    document.documentElement.lang = isUr ? "ur" : "en";
    document.documentElement.dir = isUr ? "rtl" : "ltr";
    document.body.classList.toggle("ur", isUr);

    if (langKey === "en") {
      dom.langEn.classList.add("active");
      dom.langEn.setAttribute("aria-pressed", "true");
    } else if (langKey === "rn") {
      dom.langRoman.classList.add("active");
      dom.langRoman.setAttribute("aria-pressed", "true");
    } else if (langKey === "ur") {
      dom.langUr.classList.add("active");
      dom.langUr.setAttribute("aria-pressed", "true");
    }

    // Apply translations
    dom.appTagline.textContent = t.tagline;
    dom.radarStatusText.textContent = t.radar_active;
    dom.heroBannerTag.textContent = t.hero_tag;
    dom.heroTitle.textContent = t.hero_title;
    dom.heroSubtitle.textContent = t.hero_subtitle;

    dom.demoScenariosLabel.textContent = t.try_example;
    dom.s1Title.textContent = t.s1_title;
    dom.s1Desc.textContent = `"${t.s1_desc}"`;
    dom.s2Title.textContent = t.s2_title;
    dom.s2Desc.textContent = `"${t.s2_desc}"`;
    dom.s3Title.textContent = t.s3_title;
    dom.s3Desc.textContent = `"${t.s3_desc}"`;
    dom.s4Title.textContent = t.s4_title;
    dom.s4Desc.textContent = `"${t.s4_desc}"`;

    dom.tabLabelText.textContent = t.tab_text;
    dom.tabLabelVoice.textContent = t.tab_voice;
    dom.tabLabelOcr.textContent = t.tab_ocr;

    dom.threatTextInput.placeholder = t.input_placeholder;
    dom.checkBtnText.textContent = t.check_btn;

    dom.dVoiceText.textContent = t.d_voice_title;
    dom.dVoiceSub.textContent = t.d_voice_sub;
    dom.voiceTranscriptTitle.textContent = t.d_voice_transcript;

    dom.emptyTitle.textContent = t.empty_title;
    dom.emptyBody.textContent = t.empty_body;

    dom.yourMessageLabel.textContent = t.yours_label;
    dom.whyWeThinkSoLabel.textContent = t.why_label;
    dom.nextCardHeading.textContent = t.next_heading;

    dom.how1Title.textContent = t.how1_title;
    dom.how1Desc.textContent = t.how1_desc;
    dom.how2Title.textContent = t.how2_title;
    dom.how2Desc.textContent = t.how2_desc;
    dom.how3Title.textContent = t.how3_title;
    dom.how3Desc.textContent = t.how3_desc;

    dom.metric1Label.textContent = t.metrics_blocked;
    dom.metric2Label.textContent = t.metrics_top;
    dom.metric3Label.textContent = t.metrics_saved;
    dom.radarFeedTitle.textContent = t.radar_title;
    dom.radarFeedSub.textContent = t.radar_sub;
    dom.reportScamBtnText.textContent = t.report_btn;
    dom.footerDisclaimer.textContent = t.footer_text;

    // Re-render active result if visible
    if (state.currentResult) {
      renderActiveResult(state.currentResult);
    }
  }

  dom.langEn.addEventListener("click", () => setLanguage("en"));
  dom.langRoman.addEventListener("click", () => setLanguage("rn"));
  dom.langUr.addEventListener("click", () => setLanguage("ur"));

  // -------------------------------------------------------------
  // TAB NAVIGATION
  // -------------------------------------------------------------
  function switchTab(tabKey) {
    state.activeTab = tabKey;
    const tabs = [
      { key: "text", btn: dom.tabBtnText, panel: dom.panelText },
      { key: "voice", btn: dom.tabBtnVoice, panel: dom.panelVoice },
      { key: "ocr", btn: dom.tabBtnOcr, panel: dom.panelOcr }
    ];

    tabs.forEach(t => {
      if (t.key === tabKey) {
        t.btn.classList.add("active");
        t.btn.setAttribute("aria-selected", "true");
        t.panel.style.display = "block";
      } else {
        t.btn.classList.remove("active");
        t.btn.setAttribute("aria-selected", "false");
        t.panel.style.display = "none";
      }
    });

    if (tabKey === "voice" && window.muhafizAudio) {
      window.muhafizAudio.resizeCanvas();
    }
  }

  dom.tabBtnText.addEventListener("click", () => switchTab("text"));
  dom.tabBtnVoice.addEventListener("click", () => switchTab("voice"));
  dom.tabBtnOcr.addEventListener("click", () => switchTab("ocr"));

  // -------------------------------------------------------------
  // TEXTAREA TELEMETRY & ACTIONS
  // -------------------------------------------------------------
  function updateTelemetry() {
    const text = dom.threatTextInput.value;
    dom.charCountVal.textContent = text.length;
    dom.detectedScriptVal.textContent = window.muhafizAnalyzer ? window.muhafizAnalyzer.detectScript(text) : "English";
  }

  dom.threatTextInput.addEventListener("input", updateTelemetry);

  dom.btnPasteClipboard.addEventListener("click", async () => {
    try {
      const text = await navigator.clipboard.readText();
      dom.threatTextInput.value = text;
      updateTelemetry();
    } catch (e) {
      alert("Clipboard access not available. Please paste with Ctrl+V.");
    }
  });

  dom.clear.addEventListener("click", () => {
    dom.threatTextInput.value = "";
    updateTelemetry();
    state.currentResult = null;
    dom.emptyResultView.style.display = "block";
    dom.activeResultView.style.display = "none";
  });

  // -------------------------------------------------------------
  // QUICK DEMO SCENARIOS BAR (Hackathon Core Samples)
  // -------------------------------------------------------------
  dom.btnSample1.addEventListener("click", () => {
    switchTab("text");
    dom.threatTextInput.value = window.MUHAFIZ_SAMPLES.sample1.input;
    updateTelemetry();
    runScanPipeline(window.MUHAFIZ_SAMPLES.sample1);
  });

  dom.btnSample2.addEventListener("click", () => {
    switchTab("voice");
    dom.voiceTranscriptDisplay.textContent = `"${window.MUHAFIZ_SAMPLES.sample2.input}"`;
    runScanPipeline(window.MUHAFIZ_SAMPLES.sample2);
  });

  dom.btnSample3.addEventListener("click", () => {
    switchTab("text");
    dom.threatTextInput.value = window.MUHAFIZ_SAMPLES.sample3.input;
    updateTelemetry();
    runScanPipeline(window.MUHAFIZ_SAMPLES.sample3);
  });

  dom.btnSample4.addEventListener("click", () => {
    switchTab("text");
    dom.threatTextInput.value = window.MUHAFIZ_SAMPLES.sample4.input;
    updateTelemetry();
    runScanPipeline(window.MUHAFIZ_SAMPLES.sample4);
  });

  // Primary Check Button
  dom.check.addEventListener("click", () => {
    let rawText = "";
    const isVoice = (state.activeTab === "voice");

    if (state.activeTab === "text") {
      rawText = dom.threatTextInput.value.trim();
    } else if (state.activeTab === "voice") {
      rawText = dom.voiceTranscriptDisplay.textContent.replace(/"/g, "").trim();
    } else if (state.activeTab === "ocr") {
      rawText = dom.ocrExtractedDisplay.textContent.trim();
    }

    if (!rawText) {
      alert("Please paste a message or select an example scenario first.");
      return;
    }

    const res = window.muhafizAnalyzer.analyze(rawText, isVoice);
    runScanPipeline(res);
  });

  // -------------------------------------------------------------
  // MULTI-STEP SCANNING PIPELINE (1.5-second realistic scan)
  // -------------------------------------------------------------
  function runScanPipeline(data) {
    if (state.isScanning) return;
    state.isScanning = true;
    state.currentResult = data;

    // Stop any active TTS audio
    if (window.muhafizAudio) window.muhafizAudio.stopTTS();

    // Show scan loader
    dom.scanLoader.style.display = "flex";
    dom.scanBarFill.style.width = "30%";
    dom.scanStepNumber.textContent = "Step 1 of 3";
    dom.scanStep1.className = "scan-step active";
    dom.scanStep2.className = "scan-step";
    dom.scanStep3.className = "scan-step";

    setTimeout(() => {
      dom.scanBarFill.style.width = "65%";
      dom.scanStepNumber.textContent = "Step 2 of 3";
      dom.scanStep2.className = "scan-step active";
    }, 500);

    setTimeout(() => {
      dom.scanBarFill.style.width = "100%";
      dom.scanStepNumber.textContent = "Step 3 of 3";
      dom.scanStep3.className = "scan-step active";
    }, 1000);

    setTimeout(() => {
      dom.scanLoader.style.display = "none";
      renderActiveResult(data);
      state.isScanning = false;
    }, 1500);
  }

  // -------------------------------------------------------------
  // RENDER THREAT INTELLIGENCE RESULTS
  // -------------------------------------------------------------
  function renderActiveResult(data) {
    if (!data) return;

    dom.emptyResultView.style.display = "none";
    dom.activeResultView.style.display = "block";

    const langKey = state.currentLang;
    const t = window.MUHAFIZ_TRANSLATIONS[langKey] || window.MUHAFIZ_TRANSLATIONS.en;

    const score = data.riskScore;
    dom.gaugeScoreNumber.textContent = `${score}%`;

    // Radial SVG gauge circumference = 2 * PI * 49 ≈ 307.87
    const C = 2 * Math.PI * 49;
    const offset = C * (1 - score / 100);
    requestAnimationFrame(() => {
      dom.gaugeArc.style.strokeDashoffset = offset;
    });

    // Theme class on result view
    dom.activeResultView.className = "";
    if (data.riskLevel === "critical") {
      dom.activeResultView.classList.add("result-high");
      dom.verdictBadge.textContent = t.risk_high;
      dom.verdictTitle.textContent = t.sub_high;
      dom.nextCardText.textContent = t.next_high;
    } else if (data.riskLevel === "suspicious") {
      dom.activeResultView.classList.add("result-mid");
      dom.verdictBadge.textContent = t.risk_mid;
      dom.verdictTitle.textContent = t.sub_mid;
      dom.nextCardText.textContent = t.next_mid;
    } else {
      dom.activeResultView.classList.add("result-low");
      dom.verdictBadge.textContent = t.risk_low;
      dom.verdictTitle.textContent = t.sub_low;
      dom.nextCardText.textContent = t.next_low;
    }

    dom.verdictCategory.textContent = data.category;
    dom.valConfidence.textContent = data.confidence;
    dom.valLatency.textContent = data.latency;

    // Render Highlighted Message Box with <mark> tags
    renderHighlightedMessage(data);

    // Render "Why we think so" Flags List
    renderFlagsList(data);

    // Render Audio Timeline (if voice note or Sample 2)
    if (data.audioTimeline || data.tab === "voice") {
      dom.voiceTimelineContainer.style.display = "block";
    } else {
      dom.voiceTimelineContainer.style.display = "none";
    }

    // Update FIA Formal Complaint content
    updateFiaDossierContent(data);
  }

  // Escape HTML helper
  function escHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // Render Highlighted Message Box
  function renderHighlightedMessage(data) {
    const rawText = data.input;
    if (!data.triggers || data.triggers.length === 0) {
      dom.analyzedMsgBox.innerHTML = escHtml(rawText);
      return;
    }

    let markedText = escHtml(rawText);
    data.triggers.forEach(trig => {
      const cleanTrig = escHtml(trig.text);
      markedText = markedText.split(cleanTrig).join(`<mark>${cleanTrig}</mark>`);
    });

    dom.analyzedMsgBox.innerHTML = markedText;
  }

  // Render Flags List ("Why we think so")
  function renderFlagsList(data) {
    const langKey = state.currentLang;
    const t = window.MUHAFIZ_TRANSLATIONS[langKey] || window.MUHAFIZ_TRANSLATIONS.en;

    if (!data.triggers || data.triggers.length === 0) {
      dom.flagsList.innerHTML = `<li class="flag-item"><span>${t.none_found}</span></li>`;
      return;
    }

    dom.flagsList.innerHTML = data.triggers.map(trig => {
      const icon = trig.severity === "safe" ? "✓" : "⚠️";
      return `
        <li class="flag-item">
          <b>${icon} ${escHtml(trig.category)}</b>
          <span>${escHtml(trig.explanation)}</span>
        </li>
      `;
    }).join("");
  }

  // -------------------------------------------------------------
  // AUDIO CONTROLS (Waveform, Playback, Scrub, Record)
  // -------------------------------------------------------------
  dom.btnToggleAudioPlay.addEventListener("click", () => {
    if (!window.muhafizAudio) return;

    if (window.muhafizAudio.isPlaying) {
      window.muhafizAudio.pauseVoiceNote();
      dom.audioPlayText.textContent = "Play Sample Audio";
      dom.audioPlayIconSvg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
    } else {
      dom.audioPlayText.textContent = "Pause Audio";
      dom.audioPlayIconSvg.innerHTML = '<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>';
      
      window.muhafizAudio.playVoiceNote(
        state.currentResult?.audioTimeline,
        (current, total) => {
          const ratio = (current / total) * 100;
          dom.timelineProgressFill.style.width = `${ratio}%`;
          dom.timelinePlayhead.style.left = `${ratio}%`;
          const curSec = Math.floor(current).toString().padStart(2, "0");
          dom.audioTimeDisplay.textContent = `00:${curSec} / 00:14`;
          dom.scrubTimeReadout.textContent = `00:${curSec} / 00:14`;
        },
        () => {
          dom.audioPlayText.textContent = "Play Sample Audio";
          dom.audioPlayIconSvg.innerHTML = '<polygon points="5 3 19 12 5 21 5 3"/>';
        }
      );
    }
  });

  // Timeline track click scrubbing
  dom.timelineTrack.addEventListener("click", (e) => {
    if (!window.muhafizAudio) return;
    const rect = dom.timelineTrack.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    const targetSeconds = ratio * 14;

    window.muhafizAudio.seekTo(targetSeconds, (current, total) => {
      const p = (current / total) * 100;
      dom.timelineProgressFill.style.width = `${p}%`;
      dom.timelinePlayhead.style.left = `${p}%`;
      const curSec = Math.floor(current).toString().padStart(2, "0");
      dom.audioTimeDisplay.textContent = `00:${curSec} / 00:14`;
      dom.scrubTimeReadout.textContent = `00:${curSec} / 00:14`;
    });
  });

  // Record Voice Note
  dom.btnRecordVoice.addEventListener("click", () => {
    if (!window.muhafizAudio) return;

    if (!window.muhafizAudio.isRecording) {
      window.muhafizAudio.startRecording();
      dom.recordVoiceText.textContent = "Stop Recording";
      dom.audioStatusText.textContent = "Recording Live Audio Stream...";
    } else {
      window.muhafizAudio.stopRecording(() => {
        dom.recordVoiceText.textContent = "Record Live Voice Note";
        dom.audioStatusText.textContent = "Audio Captured — Ready to Scan";
        dom.voiceTranscriptDisplay.textContent = `"Asalam o Alaikum sir, main JazzCash head office se bol raha hoon, OTP batao warna account block hoga."`;
      });
    }
  });

  // -------------------------------------------------------------
  // OCR ENGINE CONTROLS
  // -------------------------------------------------------------
  dom.btnPresetReceipt.addEventListener("click", () => {
    if (!window.muhafizOCR) return;
    window.muhafizOCR.loadPreset("receipt", dom.ocrPreviewContainer);
    window.muhafizOCR.runLaserScan((extractedText) => {
      dom.ocrExtractedDisplay.textContent = extractedText;
      const res = window.muhafizAnalyzer.analyze(extractedText, false);
      runScanPipeline(res);
    });
  });

  dom.btnPresetChat.addEventListener("click", () => {
    if (!window.muhafizOCR) return;
    window.muhafizOCR.loadPreset("chat", dom.ocrPreviewContainer);
    window.muhafizOCR.runLaserScan((extractedText) => {
      dom.ocrExtractedDisplay.textContent = extractedText;
      const res = window.muhafizAnalyzer.analyze(extractedText, false);
      runScanPipeline(res);
    });
  });

  dom.ocrImageInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file && window.muhafizOCR) {
      window.muhafizOCR.handleUserImageUpload(file, dom.ocrPreviewContainer, (extractedText) => {
        dom.ocrExtractedDisplay.textContent = extractedText;
        const res = window.muhafizAnalyzer.analyze(extractedText, false);
        runScanPipeline(res);
      });
    }
  });

  // -------------------------------------------------------------
  // ACTION BUTTONS (TTS Warning, FIA Modal, WhatsApp Share)
  // -------------------------------------------------------------
  dom.btnPlayTTS.addEventListener("click", () => {
    if (!window.muhafizAudio) return;
    const textToSpeak = dom.nextCardText.textContent;

    window.muhafizAudio.playTTSWarning(
      textToSpeak,
      state.currentLang,
      () => {
        dom.ttsBtnText.textContent = "Speaking Advisory...";
      },
      () => {
        dom.ttsBtnText.textContent = "Play Audio Warning (TTS)";
      }
    );
  });

  dom.btnShareWhatsApp.addEventListener("click", () => {
    const category = state.currentResult?.category || "Financial Scam";
    const risk = dom.verdictBadge.textContent;
    const advisory = dom.nextCardText.textContent;

    const message = `🚨 *MUHAFIZ AI FRAUD ALERT* 🚨\n\n*Status:* ${risk}\n*Threat Vector:* ${category}\n\n*Safety Advisory:*\n${advisory}\n\n_Protect your JazzCash, Easypaisa & Bank accounts. Verified via MuhafizAI._`;
    const encoded = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?text=${encoded}`, "_blank");
  });

  // -------------------------------------------------------------
  // FIA CYBERCRIME DOSSIER MODAL
  // -------------------------------------------------------------
  function updateFiaDossierContent(data) {
    const caseId = "FIA-" + new Date().getFullYear() + "-" + Math.floor(100000 + Math.random() * 900000);
    dom.dossierCaseId.textContent = caseId;

    const sampleHash = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855".substring(0, 24) + "...";
    dom.dossierHash.textContent = sampleHash;

    const dossierBody =
`=============================================================
FEDERAL INVESTIGATION AGENCY (FIA) — NR3C CYBERCRIME DOSSIER
Statutory Framework: Prevention of Electronic Crimes Act (PECA 2016)
Section 13 (Electronic Forgery) & Section 14 (Electronic Fraud)
=============================================================

COMPLAINT ID: ${caseId}
DATE & TIMESTAMP: ${new Date().toISOString()}
INCIDENT CLASSIFICATION: ${data.category || "Unauthorized Credential Harvesting"}
THREAT SCORE: ${data.riskScore}%
SUBMISSION SYSTEM: MuhafizAI Bilingual Threat Engine v1.0

EVIDENCE EXCERPT / INTERCEPTED PAYLOAD:
-------------------------------------------------------------
"${data.input}"
-------------------------------------------------------------

DETECTED FRAUD VECTORS & LEGAL VIOLATIONS:
${data.triggers.map((t, i) => `[${i + 1}] Category: ${t.category}\n    Flagged Text: "${t.text}"\n    Analysis: ${t.explanation}`).join("\n\n")}

OFFENDER ATTRIBUTES & MODUS OPERANDI:
- Channel: WhatsApp / GSM SMS / Voice Note
- Impersonated Institution: JazzCash / Easypaisa / BISP / Commercial Bank
- Criminal Intent: Unlawful extraction of One-Time Password (OTP),
  unauthorized funds transfer, and advance-fee extortion.

RECOMMENDED ENFORCEMENT ACTIONS (FIA NR3C & PTA):
1. Issue Emergency IMEI / MSISDN blocking notice under PECA 2016 Section 13.
2. Blacklist deceptive domains with Pakistan Telecommunication Authority (PTA).
3. Freeze fraudulent beneficiary wallet accounts with State Bank of Pakistan.

EVIDENCE INTEGRITY DIGEST (SHA-256):
${sampleHash}

=============================================================
Prepared by MuhafizAI Digital Forensics Engine for Citizen Safety.
Official NR3C Reporting Portal: https://complaint.fia.gov.pk
NR3C Emergency Cyber Helpline: 1991
=============================================================`;

    dom.fiaDossierText.value = dossierBody;
  }

  dom.btnOpenFiaModal.addEventListener("click", () => {
    dom.fiaModal.style.display = "flex";
  });

  dom.btnCloseFiaModal.addEventListener("click", () => {
    dom.fiaModal.style.display = "none";
  });

  dom.btnCopyDossier.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(dom.fiaDossierText.value);
      dom.copyDossierText.textContent = "Copied!";
      setTimeout(() => {
        dom.copyDossierText.textContent = "Copy Dossier";
      }, 2000);
    } catch (e) {
      alert("Please select text inside box and copy with Ctrl+C.");
    }
  });

  dom.btnDownloadDossier.addEventListener("click", () => {
    const blob = new Blob([dom.fiaDossierText.value], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `FIA_NR3C_Report_${dom.dossierCaseId.textContent}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // -------------------------------------------------------------
  // COMMUNITY SCAM RADAR & LIVE FEED
  // -------------------------------------------------------------
  function renderCommunityFeed(filterKey = "all", searchQuery = "") {
    if (!window.muhafizCommunity) return;
    const list = window.muhafizCommunity.getFilteredFeed(filterKey, searchQuery);
    dom.metricBlockedCount.textContent = window.muhafizCommunity.blockedCount.toLocaleString();
    dom.metricMoneySaved.textContent = `PKR ${(window.muhafizCommunity.moneySaved / 1000000).toFixed(1)}M+`;

    if (list.length === 0) {
      dom.communityFeedTbody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center; padding:24px; color:var(--muted);">
            No active threat alerts matching this filter.
          </td>
        </tr>
      `;
      return;
    }

    dom.communityFeedTbody.innerHTML = list.map(item => {
      const riskCls = item.risk === "critical" ? "critical" : item.risk === "high" ? "warn" : "ok";
      return `
        <tr>
          <td>
            <b style="color:var(--ink);">${escHtml(item.city)}</b>
            <div style="font-size:11px; color:var(--muted); font-family:'JetBrains Mono',monospace;">${item.id} • ${escHtml(item.district)}</div>
          </td>
          <td>
            <span class="sample-tag ${riskCls}">${escHtml(item.category)}</span>
          </td>
          <td style="color:var(--ink); max-width:280px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;" title="${escHtml(item.snippet)}">
            "${escHtml(item.snippet)}"
          </td>
          <td style="color:var(--muted); font-family:'JetBrains Mono',monospace; font-size:12px;">
            ${item.timeAgo}
          </td>
          <td style="text-align:right;">
            <span style="display:inline-flex; align-items:center; gap:6px; color:var(--ok); font-weight:700; font-size:12px;">
              <span class="radar-dot" style="width:6px; height:6px;"></span>
              ${item.status}
            </span>
          </td>
        </tr>
      `;
    }).join("");
  }

  // Filter tabs
  dom.filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      dom.filterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filterKey = tab.getAttribute("data-filter");
      renderCommunityFeed(filterKey, dom.communitySearchInput.value);
    });
  });

  dom.communitySearchInput.addEventListener("input", (e) => {
    const activeTab = document.querySelector(".filter-tab.active");
    const filterKey = activeTab ? activeTab.getAttribute("data-filter") : "all";
    renderCommunityFeed(filterKey, e.target.value);
  });

  // Report Modal
  dom.btnOpenReportModal.addEventListener("click", () => {
    dom.reportModal.style.display = "flex";
  });

  dom.btnCloseReportModal.addEventListener("click", () => {
    dom.reportModal.style.display = "none";
  });

  dom.reportThreatForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = document.getElementById("reportCity").value;
    const type = document.getElementById("reportType").value;
    const offender = document.getElementById("reportOffender").value;
    const snippet = document.getElementById("reportSnippet").value;

    window.muhafizCommunity.addNewReport({
      city: city,
      district: "User Reported",
      type: type,
      category: `Community Flagged (${offender})`,
      risk: "critical",
      snippet: snippet
    });

    renderCommunityFeed();
    dom.reportModal.style.display = "none";
    dom.reportThreatForm.reset();
    alert("Threat submitted successfully to Muhafiz Community Radar! Live counts updated.");
  });

  // Periodic increment of blocked count
  setInterval(() => {
    if (window.muhafizCommunity) {
      window.muhafizCommunity.blockedCount += 1;
      dom.metricBlockedCount.textContent = window.muhafizCommunity.blockedCount.toLocaleString();
    }
  }, 22000);

  // Initialize with Sample 1 on initial load
  dom.btnSample1.click();
});
