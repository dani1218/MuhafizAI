/**
 * MuhafizAI — Screenshot OCR Engine
 * Visual OCR Laser Scanner, Receipt & Chat Presets,
 * Image upload processing, and Optical Text Extraction.
 */

window.MUHAFIZ_OCR_PRESETS = {
  receipt: {
    id: "preset_receipt",
    name: "Fake Easypaisa Transfer Receipt",
    type: "receipt",
    previewText: "Easypaisa Rs. 50,000 Fake Slip",
    extractedText: "Easypaisa Transfer Successful! Transferred PKR 50,000.00 to account 0301-8729104. TxID: EP-9821481. Note: Amount will be credited after 1500 PKR tax verification fee is paid to agent.",
    riskVerdict: "critical",
    svgContent: `
      <svg viewBox="0 0 400 520" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="epGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#059669" />
            <stop offset="100%" stop-color="#047857" />
          </linearGradient>
        </defs>
        <!-- Background Card -->
        <rect width="400" height="520" rx="16" fill="#0F172A" stroke="#334155" stroke-width="2"/>
        
        <!-- Header Banner -->
        <rect x="0" y="0" width="400" height="90" rx="16" fill="url(#epGrad)"/>
        <circle cx="50" cy="45" r="24" fill="#ffffff" opacity="0.2"/>
        <text x="50" y="52" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="bold" text-anchor="middle">ep</text>
        <text x="88" y="42" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="bold">easypaisa</text>
        <text x="88" y="60" fill="#A7F3D0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Transaction Receipt (Unverified)</text>
        
        <!-- Status Icon -->
        <circle cx="200" cy="140" r="30" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-width="2"/>
        <path d="M190 140 L197 147 L212 132" fill="none" stroke="#10B981" stroke-width="3" stroke-linecap="round"/>
        <text x="200" y="190" fill="#F8FAFC" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" text-anchor="middle">Transaction Successful</text>
        
        <!-- Amount -->
        <text x="200" y="235" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="28" font-weight="bold" text-anchor="middle">PKR 50,000.00</text>
        
        <!-- Divider -->
        <line x1="40" y1="260" x2="360" y2="260" stroke="#334155" stroke-dasharray="4 4"/>
        
        <!-- Details -->
        <text x="40" y="290" fill="#94A3B8" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">Recipient Account</text>
        <text x="360" y="290" fill="#F1F5F9" font-family="'JetBrains Mono', monospace" font-size="12" text-anchor="end">0301-8729104 (Unknown)</text>
        
        <text x="40" y="325" fill="#94A3B8" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">Transaction ID</text>
        <text x="360" y="325" fill="#F1F5F9" font-family="'JetBrains Mono', monospace" font-size="12" text-anchor="end">EP-9821481902</text>
        
        <text x="40" y="360" fill="#94A3B8" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">Date &amp; Time</text>
        <text x="360" y="360" fill="#F1F5F9" font-family="'JetBrains Mono', monospace" font-size="12" text-anchor="end">15 Oct 2026, 08:42 AM</text>
        
        <!-- Red Flag Warning Note Box -->
        <rect x="30" y="390" width="340" height="70" rx="8" fill="#450A0A" stroke="#EF4444" stroke-width="1"/>
        <text x="45" y="415" fill="#F87171" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold">⚠️ SUSPICIOUS FORGED SLIP NOTE:</text>
        <text x="45" y="435" fill="#FCA5A5" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">"Amount will be credited after 1500 PKR tax fee</text>
        <text x="45" y="450" fill="#FCA5A5" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">is sent to agent." (Scam Trigger: Advance Fee)</text>
        
        <!-- Footer -->
        <text x="200" y="495" fill="#64748B" font-family="'JetBrains Mono', monospace" font-size="10" text-anchor="middle">DIGITAL EVIDENCE SCANNER • MUHAFIZ OCR</text>
      </svg>
    `
  },

  chat: {
    id: "preset_chat",
    name: "WhatsApp Impersonation Chat",
    type: "chat",
    previewText: "WhatsApp Fake Bank Alert Chat",
    extractedText: "+92 321 9840192 (JazzCash Support): Salam! Apka account block ho chuka hai. Dubara kholne k liye apna 4 digit OTP foran reply karen. Warna permanent band kr dia jaega.",
    riskVerdict: "critical",
    svgContent: `
      <svg viewBox="0 0 400 520" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <!-- WhatsApp Header -->
        <rect width="400" height="520" rx="16" fill="#0B141B"/>
        <rect x="0" y="0" width="400" height="65" fill="#1F2C34"/>
        
        <!-- Profile Avatar -->
        <circle cx="35" cy="32" r="18" fill="#EF4444"/>
        <text x="35" y="37" fill="#ffffff" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle">JC</text>
        <text x="65" y="28" fill="#E9EDEF" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">+92 321 9840192 (JazzCash Support)</text>
        <text x="65" y="44" fill="#8696A0" font-family="'Plus Jakarta Sans', sans-serif" font-size="10">online • Unverified personal SIM</text>
        
        <!-- Incoming Bubble 1 -->
        <rect x="20" y="85" width="310" height="75" rx="10" fill="#202C33"/>
        <text x="35" y="108" fill="#E9EDEF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Asalam o Alaikum,</text>
        <text x="35" y="126" fill="#E9EDEF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Main JazzCash Helpline Head Office se</text>
        <text x="35" y="144" fill="#E9EDEF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Rabta kar raha hoon.</text>
        
        <!-- Incoming Bubble 2 (Urgent Threat) -->
        <rect x="20" y="175" width="330" height="115" rx="10" fill="#202C33" stroke="#EF4444" stroke-width="1.5"/>
        <text x="35" y="198" fill="#FCA5A5" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold">🚨 ALERT: Account Block Ho Raha Hai!</text>
        <text x="35" y="220" fill="#E9EDEF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Aapka account block hone wala hai.</text>
        <text x="35" y="238" fill="#E9EDEF" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Dubara chalanay k liye 4-digit OTP</text>
        <text x="35" y="256" fill="#F87171" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="bold">foran reply karein warna fine lagega!</text>
        <text x="300" y="278" fill="#8696A0" font-family="'JetBrains Mono', monospace" font-size="9">09:14 AM</text>
        
        <!-- Warning Overlay Banner -->
        <rect x="25" y="320" width="350" height="85" rx="8" fill="rgba(239, 68, 68, 0.15)" stroke="#EF4444" stroke-width="1"/>
        <text x="40" y="345" fill="#EF4444" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="bold">🔍 OCR DETECTED THREAT INDICATORS:</text>
        <text x="40" y="365" fill="#CBD5E1" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">• Unofficial mobile number claiming Head Office</text>
        <text x="40" y="385" fill="#CBD5E1" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">• Credential harvesting: "4-digit OTP"</text>

        <!-- Mock Input bar -->
        <rect x="0" y="460" width="400" height="60" fill="#1F2C34"/>
        <rect x="15" y="472" width="310" height="36" rx="18" fill="#2A3942"/>
        <text x="35" y="495" fill="#8696A0" font-family="'Plus Jakarta Sans', sans-serif" font-size="11">Type a message...</text>
      </svg>
    `
  }
};

class MuhafizOCREngine {
  constructor() {
    this.currentPreset = "receipt";
    this.isScanning = false;
  }

  loadPreset(presetKey, containerElement) {
    const preset = window.MUHAFIZ_OCR_PRESETS[presetKey];
    if (!preset || !containerElement) return;

    this.currentPreset = presetKey;
    containerElement.innerHTML = `
      <div class="relative w-full h-[360px] flex items-center justify-center bg-[#070b12] rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl">
        <div id="ocrImageWrapper" class="w-full h-full p-2 flex items-center justify-center">
          ${preset.svgContent}
        </div>
        <!-- Laser Scanner Bar -->
        <div id="ocrLaserBar" class="ocr-laser hidden"></div>
      </div>
    `;
  }

  handleUserImageUpload(file, containerElement, onComplete) {
    if (!file || !containerElement) return;
    const reader = new FileReader();

    reader.onload = (e) => {
      containerElement.innerHTML = `
        <div class="relative w-full h-[360px] flex items-center justify-center bg-[#070b12] rounded-xl overflow-hidden border border-slate-700/60 shadow-2xl">
          <img src="${e.target.result}" alt="Uploaded Evidence" class="max-h-full max-w-full object-contain p-2" />
          <div id="ocrLaserBar" class="ocr-laser hidden"></div>
        </div>
      `;

      // Trigger automatic scan
      this.runLaserScan(onComplete, "User Uploaded Image OCR: Detected suspicious text strings: 'Urgent transfer', 'Fee required', 'Verify code'");
    };

    reader.readAsDataURL(file);
  }

  runLaserScan(onComplete, overrideText = null) {
    const laserBar = document.getElementById("ocrLaserBar");
    if (laserBar) {
      laserBar.classList.remove("hidden");
    }
    this.isScanning = true;

    // Simulate 1.5s scanning laser progression
    setTimeout(() => {
      if (laserBar) {
        laserBar.classList.add("hidden");
      }
      this.isScanning = false;
      const extractedText = overrideText || (window.MUHAFIZ_OCR_PRESETS[this.currentPreset]?.extractedText || "");
      if (onComplete) {
        onComplete(extractedText);
      }
    }, 1500);
  }
}

window.muhafizOCR = new MuhafizOCREngine();
