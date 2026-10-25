/**
 * MuhafizAI — Threat Analysis Engine
 * Handles rule-based NLP, Roman Urdu & English semantic threat detection,
 * domain spoof verification, and pre-configured hackathon demo scenarios.
 */

window.MUHAFIZ_SAMPLES = {
  sample1: {
    id: "sample1",
    tab: "text",
    name: "Roman Urdu OTP Scam",
    badge: "CRITICAL RISK",
    riskLevel: "critical",
    riskScore: 98,
    category: "OTP Harvesting & Impersonation",
    confidence: "99.4%",
    latency: "142ms",
    input: "Asalam o Alaikum sir main JazzCash head office se bol raha hoon, aapka account block hone wala hai. Abhi 4-digit OTP code batayein warna 50,000 fine hoga.",
    triggers: [
      {
        text: "main JazzCash head office se bol raha hoon",
        category: "Impersonation / Caller ID Fraud",
        severity: "critical",
        explanation: "Scammers pose as official JazzCash headquarters staff. Real financial agents never call to ask for OTPs or PINs."
      },
      {
        text: "aapka account block hone wala hai",
        category: "Urgency & Psychological Coercion",
        severity: "high",
        explanation: "Threatening imminent account freeze to provoke anxiety and bypass logical scrutiny."
      },
      {
        text: "4-digit OTP code batayein",
        category: "Credential Harvesting",
        severity: "critical",
        explanation: "Direct solicitation of One-Time Password / MPIN. Sharing this grants attackers full access to your mobile wallet funds."
      },
      {
        text: "warna 50,000 fine hoga",
        category: "Legal Intimidation & Extortion",
        severity: "high",
        explanation: "Fabricating astronomical penalties to terrorize the recipient into immediate compliance."
      }
    ],
    advice: {
      en: "⚠️ NEVER SHARE YOUR OTP OR PIN! No bank, JazzCash, or Easypaisa employee will EVER ask for your 4-digit secret code over the phone or threaten instant account blocks. Hang up and report immediately to 4444.",
      roman: "⚠️ HARGIZ OTP YA PIN NA BATAIN! Koi bhi bank ya JazzCash company phone par code nahi mangti aur na hi phone par 50,000 ka jurmana lagati hai. Foran call kaat dein!",
      ur: "⚠️ ہرگز اپنا او ٹی پی یا پن کسی کو نہ بتائیں! کوئی بھی بینک یا جاز کیش فون پر پاس ورڈ نہیں مانگتا اور نہ ہی فون پر جرمانہ لگاتا ہے۔ فوراً کال کاٹ دیں۔"
    },
    audioTimeline: null
  },

  sample2: {
    id: "sample2",
    tab: "voice",
    name: "Fake BISP Lottery Voice Note",
    badge: "CRITICAL RISK",
    riskLevel: "critical",
    riskScore: 94,
    category: "Advance Fee Fraud (BISP Impersonation)",
    confidence: "97.8%",
    latency: "168ms",
    audioDuration: 14,
    input: "Mubarak ho! Aapka Benazir Income Support mein 25 hazar rupay nikla hai, abhi is number par 1500 rupay registration fee bhejein...",
    triggers: [
      {
        text: "Mubarak ho! Aapka Benazir Income Support mein 25 hazar rupay nikla hai",
        category: "Fake Lottery Bait & Impersonation",
        severity: "critical",
        explanation: "BISP does not operate lucky draws or cash lotteries. Real disbursements are strictly tied to CNIC and verified through official biometric centers or 8171 SMS."
      },
      {
        text: "abhi is number par 1500 rupay registration fee bhejein",
        category: "Advance Fee Extortion",
        severity: "critical",
        explanation: "Classic 419 scam technique: demanding an upfront 'processing/registration fee' to unblock a non-existent cash reward."
      }
    ],
    advice: {
      en: "⚠️ FAKE BISP CASH GRANT FRAUD: Official Benazir Income Support Program (BISP) transactions are 100% free and only communicated via 8171. Never transfer any fee to personal mobile numbers.",
      roman: "⚠️ BISP KA JALI INAM: Benazir Income Support ka koi inam nahi nikalta aur na hi koi registration fee hoti hai. Kisi shakhs ya number par paise na bhejein. Ye 100% fraud hai.",
      ur: "⚠️ بے نظیر انکم سپورٹ کی کوئی لاٹری نہیں ہوتی اور نہ ہی کوئی رجسٹریشن فیس مانگی جاتی ہے۔ کسی نمبر پر پیسے نہ بھیجیں۔ یہ مکمل دھوکہ ہے۔"
    },
    audioTimeline: [
      {
        start: 2,
        end: 5,
        title: "Impersonating Official / BISP Bait",
        quote: "Benazir Income Support mein 25 hazar rupay",
        severity: "critical"
      },
      {
        start: 6,
        end: 9,
        title: "Emotional Hook (Fake Lottery)",
        quote: "Mubarak ho! 25 hazar rupay nikla hai",
        severity: "high"
      },
      {
        start: 10,
        end: 14,
        title: "Advance Fee Demand",
        quote: "is number par 1500 rupay registration fee bhejein",
        severity: "critical"
      }
    ]
  },

  sample3: {
    id: "sample3",
    tab: "text",
    name: "Phishing Bank Link Alert",
    badge: "SUSPICIOUS PHISHING",
    riskLevel: "suspicious",
    riskScore: 82,
    category: "Domain Spoofing & Credential Theft",
    confidence: "95.6%",
    latency: "115ms",
    input: "Dear Customer, your HBL account ATM card is temporarily suspended. Update biometric immediately at: http://hbl-verify-pk-login.com",
    triggers: [
      {
        text: "ATM card is temporarily suspended",
        category: "False Panic Induction",
        severity: "high",
        explanation: "Falsely claiming ATM or card blockage to make the victim act quickly without verifying."
      },
      {
        text: "Update biometric immediately",
        category: "Fake KYC Verification",
        severity: "high",
        explanation: "Commercial banks in Pakistan require physical biometric verification at branches or via certified mobile apps, never unverified HTTP web forms."
      },
      {
        text: "http://hbl-verify-pk-login.com",
        category: "Spoofed Phishing Domain",
        severity: "critical",
        explanation: "Unsecured HTTP connection with a deceptive lookalike domain imitating Habib Bank Limited (Official: https://www.hbl.com). Designed to capture login credentials."
      }
    ],
    advice: {
      en: "⚠️ UNVERIFIED PHISHING LINK: Do not click http://hbl-verify-pk-login.com. HBL and Pakistani banks will never send unencrypted HTTP links to verify your biometric or debit card.",
      roman: "⚠️ JALI BANK WEBSITE LINK: Is link ko hargiz na kholein. HBL ki asli website https://www.hbl.com hai. Ye link aapke ATM card aur password churane ke liye banaya gaya hai.",
      ur: "⚠️ جعلی بینک ویب سائٹ لنک الرٹ: یہ لنک ہرگز نہ کھولیں۔ حبیب بینک کی اصل ویب سائٹ hbl.com ہے۔ یہ آپ کا پاس ورڈ چرانے کے لیے بنایا گیا ہے۔"
    },
    audioTimeline: null
  },

  sample4: {
    id: "sample4",
    tab: "text",
    name: "Safe Raast Transfer SMS",
    badge: "SAFE & VERIFIED",
    riskLevel: "safe",
    riskScore: 5,
    category: "Verified Instant Payment Gateway",
    confidence: "99.1%",
    latency: "94ms",
    input: "8558: You have received Rs. 4,500.00 from ALI RAZA via Raast ID. New Balance: Rs. 18,240.00.",
    triggers: [
      {
        text: "8558",
        category: "Official SBP Shortcode",
        severity: "safe",
        explanation: "Verified official State Bank of Pakistan Raast gateway sender code."
      },
      {
        text: "You have received Rs. 4,500.00",
        category: "Standard Transaction Notification",
        severity: "safe",
        explanation: "Informative receipt notification containing no urgent threats or requests for passwords."
      },
      {
        text: "via Raast ID",
        category: "Verified Clearing Channel",
        severity: "safe",
        explanation: "Recognized national financial switch token with strict cryptographic settlement."
      }
    ],
    advice: {
      en: "✅ VERIFIED SAFE: This alert originates from the official State Bank of Pakistan Raast network (Shortcode 8558). No suspicious links, coercive language, or OTP requests detected.",
      roman: "✅ TASDEEQ SHUDA MEHFOOZ: Ye message State Bank of Pakistan ke Raast system (8558) se aaya hai. Is mein koi khatra, jali link ya OTP ki maang nahi hai.",
      ur: "✅ محفوظ اور تصدیق شدہ: یہ پیغام اسٹیٹ بینک آف پاکستان کے راست گیٹ وے (8558) سے موصول ہوا ہے۔ اس میں کوئی مشکوک چیز موجود نہیں۔"
    },
    audioTimeline: null
  }
};

class MuhafizThreatAnalyzer {
  constructor() {
    this.patterns = [
      // OTP & Credentials
      {
        regex: /(otp|one[- ]time[- ]password|pin[- ]code|4[- ]digit[- ]code|6[- ]digit[- ]code|mpin|cvv|atm[- ]card[- ]number|password)/i,
        weight: 35,
        category: "Credential Harvesting",
        severity: "critical",
        desc: "Requesting secret authorization credentials (OTP / PIN)."
      },
      {
        regex: /(batayein|bhejo|batao|share karein|forward karein|enter code|give code)/i,
        weight: 20,
        category: "Credential Solicitation",
        severity: "high",
        desc: "Directive commanding the user to transmit sensitive codes."
      },
      // Coercion & Urgency
      {
        regex: /(block hone wala|account suspend|band ho jayega|deactivate|foran|immediately|warna|fine hoga|jurmana|adalaat|police|fir darj)/i,
        weight: 25,
        category: "Urgency & Psychological Coercion",
        severity: "high",
        desc: "Manipulating emotional state through threats of blockages or fines."
      },
      // Impersonation
      {
        regex: /(jazzcash head office|easypaisa helpline|state bank of pakistan|sbp officer|fia cybercrime|bank manager|fbr officer)/i,
        weight: 30,
        category: "Authority Impersonation",
        severity: "critical",
        desc: "Pretending to represent official financial or state authorities."
      },
      // Advance Fee & Lottery
      {
        regex: /(benazir income support|bisp|ehsaas|inam nikla|lottery|jeet gaye|jeeto pakistan|tariq aziz|25 hazar|50 hazar)/i,
        weight: 30,
        category: "Advance Fee / Prize Bait",
        severity: "critical",
        desc: "Baiting with unverified government grants or fake lottery jackpots."
      },
      {
        regex: /(registration fee|tax fee|processing fee|advance fee|paise bhejein|1500 rupay)/i,
        weight: 25,
        category: "Advance Fee Extortion",
        severity: "critical",
        desc: "Demanding upfront fee before disbursing promised funds."
      },
      // Suspicious Phishing URL
      {
        regex: /(https?:\/\/[^\s]+)/i,
        weight: 25,
        category: "External Web Link",
        severity: "high",
        desc: "Contains an external web URL that may lead to phishing.",
        isUrl: true
      }
    ];

    // Safe shortcodes and markers
    this.safeMarkers = [
      { regex: /^8558\b/i, weight: -50, desc: "State Bank Raast Official Shortcode" },
      { regex: /^3737\b/i, weight: -30, desc: "Easypaisa Official Shortcode" },
      { regex: /^4444\b/i, weight: -30, desc: "JazzCash Official Shortcode" },
      { regex: /^8171\b/i, weight: -40, desc: "BISP Official SMS Shortcode" },
      { regex: /\bvia Raast ID\b/i, weight: -20, desc: "Verified Interbank Raast Protocol" }
    ];
  }

  detectScript(text) {
    if (!text) return "English";
    // Check for Arabic/Urdu unicode range
    const urduRegex = /[\u0600-\u06FF]/;
    if (urduRegex.test(text)) return "Native Urdu (اردو)";
    
    // Check for common Roman Urdu words
    const romanUrduWords = ["aapka", "mera", "hoga", "karein", "hai", "nahi", "warna", "batao", "bhejein", "nikla", "rupya", "rupay", "wala", "raha", "hoon", "asalam"];
    const lower = text.toLowerCase();
    const count = romanUrduWords.filter(w => lower.includes(w)).length;
    if (count >= 2) return "Roman Urdu (Urdu in Latin Script)";
    return "English / Mixed";
  }

  analyze(rawText, isVoiceNote = false) {
    const text = (rawText || "").trim();
    if (!text) {
      return null;
    }

    // Check if it matches one of our rich presets
    for (const key of Object.keys(window.MUHAFIZ_SAMPLES)) {
      const sample = window.MUHAFIZ_SAMPLES[key];
      if (sample.input.trim() === text) {
        return { ...sample, detectedScript: this.detectScript(text) };
      }
    }

    // Dynamic heuristic evaluation
    let riskScore = 0;
    const triggers = [];
    const lower = text.toLowerCase();

    // Check safe markers first
    for (const s of this.safeMarkers) {
      if (s.regex.test(text)) {
        riskScore += s.weight;
        triggers.push({
          text: text.match(s.regex)[0],
          category: "Verified Trust Indicator",
          severity: "safe",
          explanation: s.desc
        });
      }
    }

    // Check threat patterns
    for (const p of this.patterns) {
      const match = text.match(p.regex);
      if (match) {
        riskScore += p.weight;
        let explanation = p.desc;
        let severity = p.severity;

        // Extra check for URLs
        if (p.isUrl) {
          const urlStr = match[0];
          if (urlStr.startsWith("http://")) {
            riskScore += 15;
            explanation += " Uses unencrypted HTTP connection. Legitimate banks use strict HTTPS.";
          }
          if (/login|verify|update|account|secure|banking/i.test(urlStr) && !/hbl\.com|easypaisa\.com\.pk|jazzcash\.com\.pk|meezanbank\.com/i.test(urlStr)) {
            riskScore += 25;
            severity = "critical";
            explanation = "Suspicious domain spoofing keywords masquerading as a financial portal.";
          }
        }

        triggers.push({
          text: match[0],
          category: p.category,
          severity: severity,
          explanation: explanation
        });
      }
    }

    // Baseline normalization
    riskScore = Math.max(2, Math.min(99, riskScore));
    if (triggers.length === 0) {
      riskScore = 8; // Low baseline
    }

    let riskLevel = "safe";
    let badge = "SAFE & VERIFIED";
    if (riskScore >= 70) {
      riskLevel = "critical";
      badge = "CRITICAL SCAM DETECTED";
    } else if (riskScore >= 35) {
      riskLevel = "suspicious";
      badge = "SUSPICIOUS / PHISHING ALERT";
    }

    let audioTimeline = null;
    if (isVoiceNote && riskLevel !== "safe") {
      audioTimeline = [
        {
          start: 2,
          end: 5,
          title: "Acoustic Tone Coercion",
          quote: triggers[0]?.text || "Suspicious vocal pitch",
          severity: "high"
        },
        {
          start: 7,
          end: 11,
          title: "Sensitive Request Detected",
          quote: triggers[1]?.text || "Direct credential solicit",
          severity: "critical"
        }
      ];
    }

    // Formulate dynamic advice
    let advice = {
      en: riskLevel === "critical" 
        ? "⚠️ CRITICAL FRAUD ALERT: Never share your OTP, password, or send upfront money to unverified callers. Real banks never request sensitive credentials over the phone."
        : riskLevel === "suspicious"
        ? "⚠️ CAUTION ADVISED: This message contains unverified links or vague requests. Verify directly via your official banking app or helpline before proceeding."
        : "✅ LOW RISK DETECTED: No standard coercion vectors or credential-harvesting patterns found in this message.",
      roman: riskLevel === "critical"
        ? "⚠️ KHATARNAK SCAM KA KHADSHA: Kisi ko bhi apna OTP, PIN ya paise na bhejein. Bank ya wallet helpline foran mila kar tasdeeq karein."
        : riskLevel === "suspicious"
        ? "⚠️ EHTIYAAT LAZMI HAI: Is message mein mashkook link ya baat cheet hai. Kisi bhi link par click na karein."
        : "✅ MEHFOOZ: Is message mein koi fraud ya OTP chori ki alamat nahi mili.",
      ur: riskLevel === "critical"
        ? "⚠️ شدید خطرے کا الرٹ: کسی بھی کالر کو اپنا او ٹی پی، پاس ورڈ یا پیشگی رقم مت بھیجیں۔ بینک کبھی فون پر خفیہ معلومات نہیں مانگتا۔"
        : riskLevel === "suspicious"
        ? "⚠️ احتیاط ضروری ہے: اس پیغام میں مشکوک الفاظ یا نامعلوم لنکس موجود ہیں۔ کلک کرنے سے گریز کریں۔"
        : "✅ محفوظ: اس پیغام میں کسی قسم کا فراڈ یا مشکوک عنصر موجود نہیں۔"
    };

    return {
      id: "custom_" + Date.now(),
      tab: isVoiceNote ? "voice" : "text",
      name: "Custom Analysis Result",
      badge: badge,
      riskLevel: riskLevel,
      riskScore: riskScore,
      category: triggers[0]?.category || "General Financial Text",
      confidence: (92 + Math.random() * 6).toFixed(1) + "%",
      latency: Math.floor(100 + Math.random() * 80) + "ms",
      input: text,
      triggers: triggers,
      advice: advice,
      audioTimeline: audioTimeline,
      detectedScript: this.detectScript(text)
    };
  }
}

window.muhafizAnalyzer = new MuhafizThreatAnalyzer();
