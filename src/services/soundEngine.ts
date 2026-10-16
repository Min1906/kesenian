/**
 * Real Web Audio API Sound Engine for Traditional Blora Barongan Instruments
 * Produces synthesized physical modeling of Javanese Gamelan Barongan:
 * Kendang, Kentrung, Gong Ageng, Kempul, Bonang, and Selompret Horn.
 */

class BaronganSoundEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private isLoopRunning: boolean = false;
  private currentLoopId: number | null = null;
  private tempoBpm: number = 118;
  private masterVolume: number = 0.85;

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.analyser.smoothingTimeConstant = 0.8;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getAnalyser(): AnalyserNode | null {
    this.initContext();
    return this.analyser;
  }

  public setVolume(vol: number) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
  }

  public setTempo(bpm: number) {
    this.tempoBpm = Math.max(60, Math.min(180, bpm));
  }

  public getTempo(): number {
    return this.tempoBpm;
  }

  // --- INSTRUMENT SYNTHESIZERS ---

  /**
   * Kendang Dhadhu (Low resonant skin hit "Dah / Dlung")
   */
  public playKendangDhadhu() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Body Oscillator with pitch envelope
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(55, now + 0.18);

    gain.gain.setValueAtTime(0.9, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.35);

    // Initial click/skin transient
    this.playTransient(now, 280, 0.05, 0.3);
  }

  /**
   * Kendang Tak / Ketipung Slap ("Tak")
   */
  public playKendangTak() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.015));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, now);
    filter.Q.setValueAtTime(3.0, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  /**
   * Kendang Tung ("Tung")
   */
  public playKendangTung() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.15);

    gain.gain.setValueAtTime(0.65, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.28);
  }

  /**
   * Kentrung Blora (Woody hollow resonator with dual tone)
   */
  public playKentrung() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'square';
    osc1.frequency.setValueAtTime(320, now);
    osc1.frequency.exponentialRampToValueAtTime(220, now + 0.12);

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(440, now);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, now);

    gain.gain.setValueAtTime(0.6, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.22);
    osc2.stop(now + 0.22);
  }

  /**
   * Gong Ageng (Deep bronze sacred gong with 60Hz fundamental & rich metallic beating)
   */
  public playGongAgeng() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const frequencies = [58, 60, 118, 178, 235, 340];
    const gains = [0.9, 0.8, 0.45, 0.3, 0.2, 0.12];

    frequencies.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = idx === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle vibrato/beating characteristic of bronze alloy
      const lfo = this.ctx!.createOscillator();
      const lfoGain = this.ctx!.createGain();
      lfo.frequency.setValueAtTime(1.5 + idx * 0.3, now);
      lfoGain.gain.setValueAtTime(2.5, now);
      lfo.connect(osc.frequency);
      lfo.start(now);
      lfo.stop(now + 3.8);

      gain.gain.setValueAtTime(gains[idx] * 0.7, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 3.8);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + 3.8);
    });

    // Metallic wash transient
    this.playTransient(now, 850, 0.25, 0.2);
  }

  /**
   * Kempul (Higher-pitched bronze gong chime, ~175Hz)
   */
  public playKempul() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const freqs = [174, 176, 350, 520];
    freqs.forEach((f, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, now);

      gain.gain.setValueAtTime(0.45 / (i + 1), now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + 1.8);
    });
  }

  /**
   * Bonang / Saron chime (Tunable Javanese pitch 1 to 7)
   */
  public playBonang(pitchNote: number = 1) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Slendro scale relative intervals (Pelog/Slendro blend)
    const scale = [440, 480, 540, 600, 660, 720, 800];
    const baseFreq = scale[(pitchNote - 1) % scale.length];

    const osc = this.ctx.createOscillator();
    const harm = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(baseFreq, now);

    harm.type = 'triangle';
    harm.frequency.setValueAtTime(baseFreq * 2.76, now); // Bell overtone

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.9);

    osc.connect(gain);
    harm.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    harm.start(now);
    osc.stop(now + 0.9);
    harm.stop(now + 0.9);
  }

  /**
   * Selompret Barongan Horn Phrase (Characteristic high nasal reed melody)
   */
  public playSelompretPhrase() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const notes = [
      { f: 660, d: 0.25 },
      { f: 720, d: 0.2 },
      { f: 800, d: 0.35 },
      { f: 720, d: 0.2 },
      { f: 660, d: 0.4 }
    ];

    let offset = 0;
    notes.forEach((n) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      const filter = this.ctx!.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(n.f, now + offset);

      // Vibrato
      const lfo = this.ctx!.createOscillator();
      const lfoGain = this.ctx!.createGain();
      lfo.frequency.setValueAtTime(6.5, now + offset);
      lfoGain.gain.setValueAtTime(14, now + offset);
      lfo.connect(osc.frequency);
      lfo.start(now + offset);
      lfo.stop(now + offset + n.d);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now + offset);
      filter.Q.setValueAtTime(4.0, now + offset);

      gain.gain.setValueAtTime(0.35, now + offset);
      gain.gain.exponentialRampToValueAtTime(0.001, now + offset + n.d);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now + offset);
      osc.stop(now + offset + n.d);

      offset += n.d * 0.85;
    });
  }

  /**
   * Samandiman Whip Crack (Pecut Samandiman)
   */
  public playPecutCrack() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const bufferSize = this.ctx.sampleRate * 0.12;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.012));
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.85, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(gain);
    gain.connect(this.masterGain);

    noise.start(now);
  }

  private playTransient(time: number, freq: number, duration: number, vol: number) {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, time);

    gain.gain.setValueAtTime(vol, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(time);
    osc.stop(time + duration);
  }

  // --- AUTOMATED RHYTHM LOOPS ---

  public startRhythmLoop(patternType: 'rampak' | 'gendruwo' | 'kuda-lumping', onBeatCallback?: (step: number) => void) {
    this.stopRhythmLoop();
    this.initContext();
    this.isLoopRunning = true;

    let step = 0;
    const intervalMs = (60 / this.tempoBpm / 4) * 1000; // 16th notes

    this.currentLoopId = window.setInterval(() => {
      if (!this.isLoopRunning) return;

      if (patternType === 'rampak') {
        // 16-step Barongan Rampak rhythm
        // Step 0: Gong Ageng + Kendang Dah
        if (step === 0) {
          this.playGongAgeng();
          this.playKendangDhadhu();
          this.playSelompretPhrase();
        } else if (step === 8) {
          this.playKempul();
          this.playKendangDhadhu();
        }

        // Kendang rhythmic pattern
        if (step % 2 === 0 && step !== 0 && step !== 8) {
          this.playKendangTung();
        }
        if (step % 4 === 1 || step === 14 || step === 15) {
          this.playKendangTak();
        }
        if (step % 4 === 0) {
          this.playBonang((step / 4) + 1);
        }
      } else if (patternType === 'gendruwo') {
        // Heavy 4/4 syncopated stomp
        if (step === 0) {
          this.playGongAgeng();
          this.playKendangDhadhu();
        } else if (step === 8) {
          this.playKempul();
        }
        if (step === 4 || step === 12) {
          this.playKendangDhadhu();
        }
        if (step % 4 === 2) {
          this.playKendangTak();
        }
      } else if (patternType === 'kuda-lumping') {
        // Galloping syncopated kentrung rhythm
        if (step === 0) {
          this.playGongAgeng();
        }
        if (step % 4 === 0 || step % 4 === 2) {
          this.playKentrung();
        }
        if (step % 2 === 1) {
          this.playKendangTak();
        }
        if (step === 12) {
          this.playPecutCrack();
        }
        if (step % 4 === 0) {
          this.playBonang((step % 7) + 1);
        }
      }

      if (onBeatCallback) {
        onBeatCallback(step);
      }

      step = (step + 1) % 16;
    }, intervalMs);
  }

  public stopRhythmLoop() {
    this.isLoopRunning = false;
    if (this.currentLoopId !== null) {
      clearInterval(this.currentLoopId);
      this.currentLoopId = null;
    }
  }

  public isPlaying(): boolean {
    return this.isLoopRunning;
  }
}

export const soundEngine = new BaronganSoundEngine();
