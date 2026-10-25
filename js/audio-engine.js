/**
 * MuhafizAI — Audio Engine
 * Waveform Canvas Visualizer, Live Audio Recorder, Simulated Voice-Note Playback,
 * Synchronized Timeline Flagging, and Web Speech API TTS Warnings.
 */

class MuhafizAudioEngine {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.animationId = null;
    this.isRecording = false;
    this.isPlaying = false;
    this.currentTime = 0;
    this.duration = 14;
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.threatMarkers = [];
    this.playbackTimer = null;
    this.audioContext = null;
    this.analyser = null;
    this.dataArray = null;
    this.micStream = null;
    this.ttsUtterance = null;
    this.isTtsSpeaking = false;
  }

  init(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.resizeCanvas();
    window.addEventListener("resize", () => this.resizeCanvas());
    this.startIdleVisualizer();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * (window.devicePixelRatio || 1);
    this.canvas.height = rect.height * (window.devicePixelRatio || 1);
  }

  startIdleVisualizer() {
    cancelAnimationFrame(this.animationId);
    let phase = 0;

    const draw = () => {
      if (!this.ctx || !this.canvas) return;
      const w = this.canvas.width;
      const h = this.canvas.height;
      this.ctx.clearRect(0, 0, w, h);

      // Cyber grid background subtle lines
      this.ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(0, h / 2);
      this.ctx.lineTo(w, h / 2);
      this.ctx.stroke();

      const bars = 48;
      const barWidth = w / bars - 2;
      phase += 0.05;

      for (let i = 0; i < bars; i++) {
        let barHeight;
        if (this.isRecording) {
          // Dynamic active waveform
          barHeight = Math.sin(phase + i * 0.3) * (h * 0.35) + Math.sin(phase * 1.5 + i * 0.1) * (h * 0.25) + 15;
        } else if (this.isPlaying) {
          // Playback waveform with timeline threat highlighting
          const progressRatio = this.currentTime / this.duration;
          const barRatio = i / bars;
          const isPassed = barRatio <= progressRatio;
          const isThreatZone = (barRatio >= 0.14 && barRatio <= 0.35) || (barRatio >= 0.70 && barRatio <= 0.95);

          barHeight = Math.abs(Math.sin(phase + i * 0.4)) * (h * 0.38) + 10;
          if (isThreatZone) barHeight *= 1.3;
        } else {
          // Calm resting ambient wave
          barHeight = Math.abs(Math.sin(phase * 0.6 + i * 0.15)) * (h * 0.18) + 6;
        }

        const x = i * (barWidth + 2);
        const y = (h - barHeight) / 2;

        // Gradient styling
        const grad = this.ctx.createLinearGradient(0, y, 0, y + barHeight);
        if (this.isRecording) {
          grad.addColorStop(0, "#EF4444");
          grad.addColorStop(1, "#DC2626");
        } else if (this.isPlaying) {
          const barRatio = i / bars;
          const isThreatZone = (barRatio >= 0.14 && barRatio <= 0.35) || (barRatio >= 0.70 && barRatio <= 0.95);
          if (isThreatZone) {
            grad.addColorStop(0, "#EF4444");
            grad.addColorStop(1, "#F59E0B");
          } else {
            grad.addColorStop(0, "#06B6D4");
            grad.addColorStop(1, "#3B82F6");
          }
        } else {
          grad.addColorStop(0, "#06B6D4");
          grad.addColorStop(1, "#10B981");
        }

        this.ctx.fillStyle = grad;
        this.ctx.beginPath();
        if (this.ctx.roundRect) {
          this.ctx.roundRect(x, y, barWidth, barHeight, 2);
        } else {
          this.ctx.rect(x, y, barWidth, barHeight);
        }
        this.ctx.fill();
      }

      this.animationId = requestAnimationFrame(draw);
    };

    draw();
  }

  async startRecording(onRecordedCallback) {
    this.isRecording = true;
    this.audioChunks = [];

    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        this.micStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        this.mediaRecorder = new MediaRecorder(this.micStream);
        this.mediaRecorder.ondataavailable = (e) => this.audioChunks.push(e.data);
        this.mediaRecorder.onstop = () => {
          const audioBlob = new Blob(this.audioChunks, { type: "audio/webm" });
          if (onRecordedCallback) onRecordedCallback(audioBlob);
        };
        this.mediaRecorder.start();
      } else {
        // Fallback simulated recording
        console.log("Audio recording fallback initiated");
      }
    } catch (err) {
      console.warn("Microphone access simulated or restricted:", err);
    }
  }

  stopRecording(onRecordedCallback) {
    this.isRecording = false;
    if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
      this.mediaRecorder.stop();
    }
    if (this.micStream) {
      this.micStream.getTracks().forEach(t => t.stop());
      this.micStream = null;
    }
    if (onRecordedCallback) {
      onRecordedCallback(null);
    }
  }

  // Audio Playback Simulation for Sample 2 Voice Note
  playVoiceNote(threatMarkers, onTimeUpdate, onEnded) {
    this.isPlaying = true;
    this.threatMarkers = threatMarkers || [];
    this.currentTime = 0;
    clearInterval(this.playbackTimer);

    // Audio chime tone generation via Web Audio API for immersive feedback
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        const actx = new AudioCtx();
        const osc = actx.createOscillator();
        const gain = actx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(440, actx.currentTime);
        gain.gain.setValueAtTime(0.05, actx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.3);
        osc.connect(gain);
        gain.connect(actx.destination);
        osc.start();
        osc.stop(actx.currentTime + 0.3);
      }
    } catch (e) {
      // AudioContext optional
    }

    const interval = 100; // 100ms ticks
    this.playbackTimer = setInterval(() => {
      this.currentTime += 0.1;
      if (this.currentTime >= this.duration) {
        this.pauseVoiceNote();
        this.currentTime = this.duration;
        if (onTimeUpdate) onTimeUpdate(this.currentTime, this.duration);
        if (onEnded) onEnded();
      } else {
        if (onTimeUpdate) onTimeUpdate(this.currentTime, this.duration);
      }
    }, interval);
  }

  pauseVoiceNote() {
    this.isPlaying = false;
    clearInterval(this.playbackTimer);
  }

  seekTo(timeInSeconds, onTimeUpdate) {
    this.currentTime = Math.max(0, Math.min(this.duration, timeInSeconds));
    if (onTimeUpdate) onTimeUpdate(this.currentTime, this.duration);
  }

  // Web Speech API Text-to-Speech Warning Advisory
  playTTSWarning(advisoryText, lang = "en", onStart, onEnd) {
    if (!window.speechSynthesis) {
      alert("Text-to-Speech is not supported on this browser.");
      return;
    }

    window.speechSynthesis.cancel(); // Stop any pending speech

    if (this.isTtsSpeaking) {
      this.isTtsSpeaking = false;
      if (onEnd) onEnd();
      return;
    }

    this.ttsUtterance = new SpeechSynthesisUtterance(advisoryText);
    
    // Choose optimal speech voice
    const voices = window.speechSynthesis.getVoices();
    let selectedVoice = null;

    if (lang === "ur") {
      selectedVoice = voices.find(v => v.lang.startsWith("ur") || v.lang.startsWith("ar"));
      this.ttsUtterance.lang = "ur-PK";
    } else {
      // English / Roman Urdu
      selectedVoice = voices.find(v => v.lang.includes("en-IN") || v.lang.includes("en-GB") || v.lang.includes("en-US"));
      this.ttsUtterance.lang = "en-US";
    }

    if (selectedVoice) {
      this.ttsUtterance.voice = selectedVoice;
    }

    this.ttsUtterance.rate = 0.95; // Slightly slower, clear cadence for elderly/anxious victims
    this.ttsUtterance.pitch = 1.05;

    this.ttsUtterance.onstart = () => {
      this.isTtsSpeaking = true;
      if (onStart) onStart();
    };

    this.ttsUtterance.onend = () => {
      this.isTtsSpeaking = false;
      if (onEnd) onEnd();
    };

    this.ttsUtterance.onerror = (e) => {
      console.warn("TTS playback error:", e);
      this.isTtsSpeaking = false;
      if (onEnd) onEnd();
    };

    window.speechSynthesis.speak(this.ttsUtterance);
  }

  stopTTS() {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    this.isTtsSpeaking = false;
  }
}

window.muhafizAudio = new MuhafizAudioEngine();
