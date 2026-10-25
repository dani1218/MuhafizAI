# MuhafizAI (محافظ AI) — Bilingual Financial Scam & Voice-Note Detector

**MuhafizAI** is a production-grade, bilingual cybersecurity and consumer fintech web application engineered to protect Pakistani families, small business owners, and mobile wallet users from organized financial fraud, voice-note impersonation, and OTP credential theft.

---

## 🛡️ Core Capabilities

1. **Multi-Modal Threat Detection Hub**:
   - **Text / SMS Analyzer**: Paste forwarded WhatsApp alerts, phishing URLs, or SMS messages. Automatically identifies Roman Urdu, Urdu, and English scripts.
   - **Voice-Note Scanner**: Ingests `.mp3`, `.wav`, `.ogg` audio files and features a live **"Record Voice Note"** button with an interactive HTML5 canvas waveform visualizer and speech-to-text transcript analysis.
   - **Screenshot OCR Scanner**: Upload or test screenshots of fake payment slips (e.g. Easypaisa / JazzCash) or WhatsApp conversations. Features a real-time glowing laser scanning animation and token extraction.

2. **Quick Demo Scenarios Bar ("Try Live Sample")**:
   - 🔴 **Sample 1 (Roman Urdu OTP Scam)**: JazzCash head office impersonation demanding a 4-digit OTP under threat of a PKR 50,000 fine.
   - 🔴 **Sample 2 (Fake BISP Voice Note)**: 14-second audio note claiming a 25,000 PKR prize in the Benazir Income Support Program and demanding an upfront registration fee.
   - 🟡 **Sample 3 (Phishing Bank Link)**: Lookalike domain imitating Habib Bank Limited (`http://hbl-verify-pk-login.com`).
   - 🟢 **Sample 4 (Safe Raast Transfer SMS)**: Official State Bank of Pakistan instant payment alert (Shortcode 8558).

3. **Real-Time Threat Intelligence Dashboard**:
   - **Dynamic Radial SVG Threat Gauge**: Animates between 0% and 100% with color-coded risk levels (Critical Crimson, Suspicious Amber, Verified Emerald).
   - **Highlighted Linguistic Triggers**: Pinpoints coercive and fraudulent phrases with clickable pills that reveal the underlying threat mechanism (Urgency, Credential Harvesting, Advance Fee Fraud, Spoofed Domains).
   - **Audio Timeline Threat Flagging**: Visual scrubber with timestamped risk pins (e.g., `0:02 Impersonation`, `0:06 Fake Prize`, `0:10 Fee Extortion`).
   - **Bilingual Action Cards**: Plain-language safety instructions in English, Roman Urdu, and Native Urdu.
   - **Web Speech API Audio Warnings (TTS)**: Reads safety advisories aloud for elderly or non-literate users.
   - **FIA NR3C Digital Evidence Dossier**: Formats a formal complaint under the Prevention of Electronic Crimes Act (PECA 2016) with SHA-256 evidence digests and copy/download capabilities.
   - **WhatsApp Alert Sharing**: One-click emergency alert generation for family groups.

4. **Live Community Scam Radar**:
   - Real-time telemetry tracking blocked scams today (`1,428+`), top threat vector (`Fake BISP / Wallet OTP`), and money saved (`PKR 4.2M+`).
   - Anonymized live feed of scam incidents across Pakistani cities (Karachi, Lahore, Islamabad, Rawalpindi, Attock, Faisalabad, Peshawar).
   - Community reporting modal for reporting new fraudulent numbers or links.

---

## 🎨 Visual Design System

- **Background**: Deep Obsidian Slate (`#090D16`) with subtle ambient glowing gradients and cyber-grid lines.
- **Glassmorphism**: Translucent panels (`rgba(18, 24, 38, 0.75)`) with `backdrop-filter: blur(18px)` and `1px solid rgba(255, 255, 255, 0.08)`.
- **Accents**:
  - Emerald Green (`#10B981`) for Safe / Verified indicators
  - Amber Gold (`#F59E0B`) for Suspicious / Caution alerts
  - Crimson Neon (`#EF4444`) for High-Risk Scam alerts
  - Electric Cyan (`#06B6D4`) for scanning radar & laser effects
- **Typography**: `Plus Jakarta Sans` for UI headings, `JetBrains Mono` for scores & telemetry, and `Noto Nastaliq Urdu` for native Urdu script.

---

## 🚀 Running Locally

The application is lightweight, self-contained, and requires no external node compilation:

```bash
# Start the local HTTP server
python3 -m http.server 3000
```

Open your browser at:
```
http://localhost:3000
```
