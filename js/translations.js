/**
 * MuhafizAI — Bilingual Translations Dictionary
 * (English, Roman Urdu, Native Urdu)
 * Blending the clean human-centered phrasing from MuhafizAI Redesign.html
 * with rich multi-modal cybersecurity terms.
 */

window.MUHAFIZ_TRANSLATIONS = {
  en: {
    lang_name: "English",
    app_title: "MuhafizAI",
    tagline: "Scam message & voice-note checker",
    radar_active: "Threat Radar: Active",
    hero_tag: "Specialized for Pakistani Mobile Wallets & Banking",
    hero_title: "Got a strange message about money? Check it here first.",
    hero_subtitle: "Paste an SMS or WhatsApp message, upload a voice note, or drop a screenshot. We instantly tell you if it looks like a scam and what to do next.",
    
    // Tabs
    tab_text: "Message text",
    tab_voice: "Voice note",
    tab_ocr: "Screenshot",
    
    // Inputs & Buttons
    input_placeholder: "Paste the SMS, WhatsApp message, or suspect link here...",
    paste_btn: "Paste",
    clear_btn: "Clear",
    check_btn: "Check Message",
    checking_btn: "Analyzing Message...",
    
    // Dropzones
    d_voice_title: "Choose or Drop an Audio File",
    d_voice_sub: "Supports .mp3, .wav, .ogg, .m4a (Tap to browse)",
    d_voice_play: "Play Sample Audio",
    d_voice_pause: "Pause Audio",
    d_voice_record: "Record Live Voice Note",
    d_voice_stop: "Stop Recording",
    d_voice_transcript: "Transcribed Speech (Roman Urdu):",
    
    d_ocr_title: "Drop payment slip or chat screenshot",
    d_ocr_sub: "Upload custom image to trigger optical scanning",
    
    // Quick Demo Scenarios
    try_example: "Or try a live example (Click to test):",
    s1_title: "Roman Urdu OTP Request",
    s1_desc: "JazzCash head office se bol raha hoon, account block hone wala hai. 4-digit OTP batayein...",
    s2_title: "Fake BISP Lottery Call",
    s2_desc: "Mubarak ho! BISP mein 25 hazar rupay nikla hai, 1500 registration fee bhejein...",
    s3_title: "Fake Bank Biometric Alert",
    s3_desc: "HBL ATM card suspended. Update biometric immediately at http://hbl-verify-pk-login.com",
    s4_title: "Genuine SBP Raast SMS",
    s4_desc: "8558: You have received Rs. 4,500.00 from ALI RAZA via Raast ID. New Balance: 18,240.",
    
    // Results
    empty_title: "Nothing checked yet",
    empty_body: "Pick an example above or paste a message, then press Check message.",
    
    risk_high: "Likely a scam",
    risk_mid: "Looks suspicious",
    risk_low: "Looks safe",
    
    sub_high: "Do not reply, share codes or click links.",
    sub_mid: "Be careful before you reply or pay.",
    sub_low: "We found no common scam signs.",
    
    yours_label: "The message with flagged triggers",
    why_label: "Why we think so",
    none_found: "No warning signs found.",
    
    next_heading: "What to do:",
    next_high: "Do not share any code or PIN. Block the sender and report it to FIA on 1991 or to your bank's official helpline.",
    next_mid: "Verify with the company using an official number you already trust before you act.",
    next_low: "This appears genuine. Still, never share your PIN or OTP with anyone over the phone.",
    
    // Actions
    tts_play: "Play Audio Warning (TTS)",
    tts_speaking: "Speaking Warning...",
    btn_fia: "Generate FIA Report",
    btn_wa: "Share Alert on WhatsApp",
    
    // How It Works
    how1_title: "Understands how people write",
    how1_desc: "Reads English and Roman Urdu naturally, including informal phrasing, colloquialisms, and code-mixed messages.",
    how2_title: "Shows what looks wrong",
    how2_desc: "Highlights the exact words and phrases that raise concern, providing clear and plain reasons for each flag.",
    how3_title: "Tells you what to do",
    how3_desc: "Gives concrete, actionable guidance on protecting your money, plus direct escalation routes to FIA Cybercrime (1991).",
    
    // Community Radar
    metrics_blocked: "Scams Blocked Today",
    metrics_top: "Top Active Threat Vector",
    metrics_saved: "Estimated Money Protected",
    radar_title: "Live Pakistani Community Scam Radar",
    radar_sub: "Real-time anonymized fraud alerts intercepted across cities (Karachi, Lahore, Islamabad, Rawalpindi, Attock)",
    filter_all: "All Alerts",
    filter_wallet: "Mobile Wallets",
    filter_otp: "OTP & PIN Theft",
    filter_phishing: "Phishing Links",
    report_btn: "+ Report New Threat",
    footer_text: "MuhafizAI gives automated guidance, not a legal guarantee. When in doubt, call your bank on its verified helpline."
  },

  rn: {
    lang_name: "Roman Urdu",
    app_title: "MuhafizAI",
    tagline: "Scam message aur voice-note checker",
    radar_active: "Threat Radar: Fa'aal Hai",
    hero_tag: "Pakistani Mobile Wallets aur Banking ke liye Khas",
    hero_title: "Paison ke bare mein ajeeb message aaya? Pehle yahan check karein.",
    hero_subtitle: "SMS ya WhatsApp message paste karein, voice note upload karein, ya screenshot lagayein. Hum batayenge ke scam lagta hai ya nahi, aur aage kya karna hai.",
    
    // Tabs
    tab_text: "Message ka text",
    tab_voice: "Voice note",
    tab_ocr: "Screenshot",
    
    // Inputs & Buttons
    input_placeholder: "SMS, WhatsApp message ya mashkook link yahan paste karein...",
    paste_btn: "Paste Karein",
    clear_btn: "Saaf Karein",
    check_btn: "Message Check Karein",
    checking_btn: "Jaiza Liya ja raha hai...",
    
    // Dropzones
    d_voice_title: "Voice Note Chunein ya Yahan Daalein",
    d_voice_sub: ".mp3, .wav, .ogg, .m4a files chal sakti hain (Tap karein)",
    d_voice_play: "Sample Audio Suniye",
    d_voice_pause: "Audio Rokein",
    d_voice_record: "Live Voice Note Record Karein",
    d_voice_stop: "Recording Rokein",
    d_voice_transcript: "Awaaz se Likhi Gayi Baat (Roman Urdu):",
    
    d_ocr_title: "Payment slip ya chat ka screenshot yahan daalein",
    d_ocr_sub: "Scan shuru karne ke liye tasveer upload karein",
    
    // Quick Demo Scenarios
    try_example: "Ya koi misaal try karein (Click karein):",
    s1_title: "OTP ki Darkhwast (Scam)",
    s1_desc: "JazzCash head office se bol raha hoon, account block hone wala hai. 4-digit OTP batayein...",
    s2_title: "BISP ka Jali Inam (Voice Note)",
    s2_desc: "Mubarak ho! BISP mein 25 hazar rupay nikla hai, 1500 registration fee bhejein...",
    s3_title: "Bank ka Jali Biometric Link",
    s3_desc: "HBL ATM card suspended. Update biometric immediately at http://hbl-verify-pk-login.com",
    s4_title: "Asli Raast SBP Message",
    s4_desc: "8558: You have received Rs. 4,500.00 from ALI RAZA via Raast ID. New Balance: 18,240.",
    
    // Results
    empty_title: "Abhi kuch check nahi hua",
    empty_body: "Misaal chunein ya message paste karein, phir Message check karein dabayein.",
    
    risk_high: "Ghaliban scam hai",
    risk_mid: "Mashkook lagta hai",
    risk_low: "Mehfooz lagta hai",
    
    sub_high: "Jawab na dein, code share na karein, link par click na karein.",
    sub_mid: "Jawab dene ya payment se pehle ehtiyat karein.",
    sub_low: "Koi aam scam nishani nahi mili.",
    
    yours_label: "Aapka message (shak wale alfaz ke sath)",
    why_label: "Hum aisa kyun samajhte hain",
    none_found: "Koi khatre ki nishani nahi mili.",
    
    next_heading: "Ab kya karein:",
    next_high: "Koi code ya PIN share na karein. Sender ko block karein aur FIA 1991 ya bank ki official helpline par report karein.",
    next_mid: "Kuch karne se pehle company ko apne bharose ke number par call karke tasdeeq karein.",
    next_low: "Ye message theek lagta hai. Phir bhi, apna PIN ya OTP kisi ko phone par na batayein.",
    
    // Actions
    tts_play: "Awaaz mein Suniye (TTS)",
    tts_speaking: "Hidayat Sunai ja rahi hai...",
    btn_fia: "FIA Report Banayein",
    btn_wa: "WhatsApp par Bhejein",
    
    // How It Works
    how1_title: "Aap ke likhne ka andaaz samajhta hai",
    how1_desc: "English aur Roman Urdu dono parhta hai, mix messages aur aam guftagu bhi.",
    how2_title: "Dikhata hai kya ghalat hai",
    how2_desc: "Shak wale alfaaz highlight karta hai, saaf wajah aur wazahat ke saath.",
    how3_title: "Batata hai ke kya karna hai",
    how3_desc: "Saaf hidayat deta hai, aur Pakistan mein kahan report karna hai (FIA 1991).",
    
    // Community Radar
    metrics_blocked: "Aaj Rokay Gaye Scams",
    metrics_top: "Sab se Bara Scam",
    metrics_saved: "Bachi Hui Raqam",
    radar_title: "Pakistani Shehron ka Live Scam Radar",
    radar_sub: "Mukhtalif shehron se anay wali taza tareen reports (Karachi, Lahore, Islamabad, Rawalpindi, Attock)",
    filter_all: "Tamam Alerts",
    filter_wallet: "Mobile Wallets",
    filter_otp: "OTP aur PIN Chori",
    filter_phishing: "Phishing Links",
    report_btn: "+ Naya Scam Report Karein",
    footer_text: "MuhafizAI rehnumai deta hai, guarantee nahi. Shak ho to bank ko uske official number par call karein."
  },

  ur: {
    lang_name: "اردو",
    app_title: "محافظ AI",
    tagline: "اسکیم میسج اور وائس نوٹ چیکر",
    radar_active: "تھریٹ ریڈار: فعال ہے",
    hero_tag: "پاکستانی موبائل والٹس اور بینکنگ کے لیے خصوصی",
    hero_title: "پیسوں کے بارے میں عجیب میسج آیا؟ پہلے یہاں چیک کریں۔",
    hero_subtitle: "ایس ایم ایس یا واٹس ایپ میسج پیسٹ کریں، وائس نوٹ اپلوڈ کریں یا اسکرین شاٹ لگائیں۔ ہم بتائیں گے کہ یہ اسکیم لگتا ہے یا نہیں اور آگے کیا کرنا ہے۔",
    
    // Tabs
    tab_text: "میسج کا متن",
    tab_voice: "وائس نوٹ",
    tab_ocr: "اسکرین شاٹ",
    
    // Inputs & Buttons
    input_placeholder: "ایس ایم ایس، واٹس ایپ میسج یا مشکوک لنک یہاں پیسٹ کریں...",
    paste_btn: "پیسٹ کریں",
    clear_btn: "صاف کریں",
    check_btn: "میسج چیک کریں",
    checking_btn: "تجزیہ جاری ہے...",
    
    // Dropzones
    d_voice_title: "وائس نوٹ منتخب کریں یا فائل ڈراپ کریں",
    d_voice_sub: ".mp3, .wav, .ogg فارمیٹس سپورٹڈ ہیں (ٹیپ کریں)",
    d_voice_play: "آڈیو سنیں",
    d_voice_pause: "آڈیو روکیں",
    d_voice_record: "لائیو وائس نوٹ ریکارڈ کریں",
    d_voice_stop: "ریکارڈنگ روکیں",
    d_voice_transcript: "آواز سے حاصل شدہ تحریر (رومن اردو):",
    
    d_ocr_title: "رسید یا چیٹ کا اسکرین شاٹ یہاں ڈراپ کریں",
    d_ocr_sub: "او سی آر اسکیننگ شروع کرنے کے لیے تصویر اپلوڈ کریں",
    
    // Quick Demo Scenarios
    try_example: "یا کوئی مثال آزمائیں (کلک کریں):",
    s1_title: "او ٹی پی کی جعلی درخواست",
    s1_desc: "جاز کیش ہیڈ آفس سے بول رہا ہوں، اکاؤنٹ بلاک ہونے والا ہے۔ 4 ہندسوں کا کوڈ بتائیں...",
    s2_title: "بے نظیر انکم سپورٹ جعلی کال",
    s2_desc: "مبارک ہو! بی آئی ایس پی میں 25 ہزار روپے انعام نکلا ہے، 1500 فیس بھیجیں...",
    s3_title: "بینک کا مشکوک ویب لنک",
    s3_desc: "حبیب بینک اے ٹی ایم کارڈ معطل۔ فوری تصدیق کریں: http://hbl-verify-pk-login.com",
    s4_title: "محفوظ اسٹیٹ بینک راست میسج",
    s4_desc: "8558: آپ کو علی رضا سے راست کے ذریعے 4500 روپے موصول ہوئے ہیں۔ نیا بیلنس: 18240۔",
    
    // Results
    empty_title: "ابھی کچھ چیک نہیں ہوا",
    empty_body: "اوپر سے کوئی مثال منتخب کریں یا میسج پیسٹ کریں، پھر میسج چیک کریں دبائیں۔",
    
    risk_high: "غالباً اسکیم ہے",
    risk_mid: "مشکوک لگتا ہے",
    risk_low: "محفوظ لگتا ہے",
    
    sub_high: "جواب نہ دیں، کوڈ شیئر نہ کریں، لنک پر کلک نہ کریں۔",
    sub_mid: "جواب یا ادائیگی سے پہلے احتیاط کریں۔",
    sub_low: "کوئی عام اسکیم کی نشانی نہیں ملی۔",
    
    yours_label: "آپ کا میسج (نمایاں خطرات کے ساتھ)",
    why_label: "ہم ایسا کیوں سمجھتے ہیں",
    none_found: "خطرے کی کوئی نشانی نہیں ملی۔",
    
    next_heading: "اب کیا کریں:",
    next_high: "کوئی کوڈ یا پن شیئر نہ کریں۔ بھیجنے والے کو بلاک کریں اور ایف آئی اے 1991 پر رپورٹ کریں۔",
    next_mid: "کچھ کرنے سے پہلے کمپنی کو اپنے معتبر نمبر پر کال کر کے تصدیق کریں۔",
    next_low: "یہ محفوظ معلوم ہوتا ہے۔ پھر بھی فون پر اپنا پن یا پاس ورڈ کسی کو نہ بتائیں۔",
    
    // Actions
    tts_play: "آڈیو میں ہدایت سنیں (TTS)",
    tts_speaking: "آڈیو سنائی جا رہی ہے...",
    btn_fia: "ایف آئی اے رپورٹ بنائیں",
    btn_wa: "واٹس ایپ پر شیئر کریں",
    
    // How It Works
    how1_title: "آپ کے لکھنے کا انداز سمجھتا ہے",
    how1_desc: "انگریزی اور رومن اردو دونوں پڑھتا ہے، بشمول غیر رسمی گفتگو اور ملے جلے پیغامات۔",
    how2_title: "دکھاتا ہے کیا غلط ہے",
    how2_desc: "شک والے الفاظ اور فقرے نمایاں کرتا ہے، ساتھ ہی سادہ اور واضح وجہ بتاتا ہے۔",
    how3_title: "بتاتا ہے کیا کرنا ہے",
    how3_desc: "رقم کے تحفظ کے لیے واضح ہدایات اور ایف آئی اے سائبر کرائم 1991 پر کارروائی کا طریقہ۔",
    
    // Community Radar
    metrics_blocked: "آج روکے گئے فراڈ",
    metrics_top: "سب سے بڑا خطرہ",
    metrics_saved: "شہریوں کی بچائی گئی رقم",
    radar_title: "لائیو پاکستانی کمیونٹی اسکیم ریڈار",
    radar_sub: "مختلف شہروں سے موصول ہونے والی تازہ ترین رپورٹس (کراچی، لاہور، اسلام آباد، راولپنڈی، اٹک)",
    filter_all: "تمام الرٹس",
    filter_wallet: "موبائل والٹس",
    filter_otp: "او ٹی پی اور پن چوری",
    filter_phishing: "فشنگ لنکس",
    report_btn: "+ نیا خطرہ رپورٹ کریں",
    footer_text: "محافظ اے آئی خودکار رہنمائی دیتا ہے، قانونی ضمانت نہیں۔ شک ہو تو بینک کے سرکاری نمبر پر کال کریں۔"
  }
};
