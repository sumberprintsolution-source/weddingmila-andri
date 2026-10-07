/**
 * Web Audio API synthesized romantic harp & acoustic piano wedding melody
 * Plays a warm, soothing bridal serenade without external network dependencies.
 */

class RomanticWeddingSynth {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private timer: number | null = null;
  private masterGain: GainNode | null = null;
  private currentNoteIndex = 0;

  // Chord progression: D - A - Bm - F#m - G - D - G - A (Canon in D romantic harp arpeggios)
  private melodyNotes: { freq: number; dur: number; type: 'harp' | 'pad' }[] = [
    // Bar 1 - D Major
    { freq: 293.66, dur: 0.8, type: 'harp' }, // D4
    { freq: 369.99, dur: 0.8, type: 'harp' }, // F#4
    { freq: 440.00, dur: 0.8, type: 'harp' }, // A4
    { freq: 587.33, dur: 1.4, type: 'harp' }, // D5
    // Bar 2 - A Major
    { freq: 220.00, dur: 0.8, type: 'harp' }, // A3
    { freq: 277.18, dur: 0.8, type: 'harp' }, // C#4
    { freq: 329.63, dur: 0.8, type: 'harp' }, // E4
    { freq: 440.00, dur: 1.4, type: 'harp' }, // A4
    // Bar 3 - B Minor
    { freq: 246.94, dur: 0.8, type: 'harp' }, // B3
    { freq: 293.66, dur: 0.8, type: 'harp' }, // D4
    { freq: 369.99, dur: 0.8, type: 'harp' }, // F#4
    { freq: 493.88, dur: 1.4, type: 'harp' }, // B4
    // Bar 4 - F# Minor
    { freq: 185.00, dur: 0.8, type: 'harp' }, // F#3
    { freq: 220.00, dur: 0.8, type: 'harp' }, // A3
    { freq: 277.18, dur: 0.8, type: 'harp' }, // C#4
    { freq: 369.99, dur: 1.4, type: 'harp' }, // F#4
    // Bar 5 - G Major
    { freq: 196.00, dur: 0.8, type: 'harp' }, // G3
    { freq: 246.94, dur: 0.8, type: 'harp' }, // B3
    { freq: 293.66, dur: 0.8, type: 'harp' }, // D4
    { freq: 392.00, dur: 1.4, type: 'harp' }, // G4
    // Bar 6 - D Major
    { freq: 220.00, dur: 0.8, type: 'harp' }, // A3
    { freq: 293.66, dur: 0.8, type: 'harp' }, // D4
    { freq: 369.99, dur: 0.8, type: 'harp' }, // F#4
    { freq: 440.00, dur: 1.4, type: 'harp' }, // A4
    // Bar 7 - G Major
    { freq: 196.00, dur: 0.8, type: 'harp' }, // G3
    { freq: 246.94, dur: 0.8, type: 'harp' }, // B3
    { freq: 392.00, dur: 0.8, type: 'harp' }, // G4
    { freq: 493.88, dur: 1.4, type: 'harp' }, // B4
    // Bar 8 - A7 Suspended & Resolved
    { freq: 220.00, dur: 0.8, type: 'harp' }, // A3
    { freq: 293.66, dur: 0.8, type: 'harp' }, // D4
    { freq: 329.63, dur: 0.8, type: 'harp' }, // E4
    { freq: 440.00, dur: 1.8, type: 'harp' }, // A4
  ];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.scheduleNextNote();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      const clamped = Math.max(0, Math.min(1, val));
      this.masterGain.gain.setTargetAtTime(clamped * 0.35, this.ctx.currentTime, 0.05);
    }
  }

  private playTone(freq: number, duration: number) {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    // Harmonic 1: Sine fundamental
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);

    // Harmonic 2: Triangle warm overtone
    const osc2 = this.ctx.createOscillator();
    const gain2 = this.ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(freq * 2, now);

    // Envelope shaping (warm harp pluck attack and long reverberant decay)
    gain1.gain.setValueAtTime(0.0001, now);
    gain1.gain.linearRampToValueAtTime(0.4, now + 0.03);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.5);

    gain2.gain.setValueAtTime(0.0001, now);
    gain2.gain.linearRampToValueAtTime(0.12, now + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration + 0.3);

    osc1.connect(gain1);
    gain1.connect(this.masterGain);

    osc2.connect(gain2);
    gain2.connect(this.masterGain);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + duration + 0.6);
    osc2.stop(now + duration + 0.4);
  }

  private scheduleNextNote() {
    if (!this.isPlaying) return;
    const current = this.melodyNotes[this.currentNoteIndex];
    this.playTone(current.freq, current.dur);

    const stepDelay = (current.dur * 0.75) * 1000;
    this.currentNoteIndex = (this.currentNoteIndex + 1) % this.melodyNotes.length;

    this.timer = window.setTimeout(() => {
      this.scheduleNextNote();
    }, stepDelay);
  }
}

export const weddingAudio = new RomanticWeddingSynth();
