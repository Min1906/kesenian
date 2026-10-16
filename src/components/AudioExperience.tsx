import React, { useState, useEffect, useRef } from 'react';
import { soundEngine } from '../services/soundEngine';
import { Play, Square, Volume2, Sliders, Disc, Radio } from 'lucide-react';

interface InstrumentPad {
  id: string;
  name: string;
  role: string;
  key: string;
  color: string;
  action: () => void;
  description: string;
}

export const AudioExperience: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentPattern, setCurrentPattern] = useState<'rampak' | 'gendruwo' | 'kuda-lumping'>('rampak');
  const [tempo, setTempo] = useState<number>(118);
  const [volume, setVolume] = useState<number>(0.85);
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [activePad, setActivePad] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const pads: InstrumentPad[] = [
    {
      id: 'kendang-dhadhu',
      name: 'Kendang Dhadhu',
      role: 'Pengendali Dinamika & Hentakan "Dah"',
      key: 'D',
      color: '#8B1E1E',
      description: 'Tabuhan kulit lembu purba beresonansi berat penentu solah Singo Barong.',
      action: () => {
        soundEngine.playKendangDhadhu();
        triggerPadVisual('kendang-dhadhu');
      }
    },
    {
      id: 'kendang-tak',
      name: 'Ketipung Tak',
      role: 'Ketukan Kering Cepat "Tak"',
      key: 'T',
      color: '#C56222',
      description: 'Sabetan telapak tangan pada selaput ketipung pengiring lari penari.',
      action: () => {
        soundEngine.playKendangTak();
        triggerPadVisual('kendang-tak');
      }
    },
    {
      id: 'kendang-tung',
      name: 'Kendang Tung',
      role: 'Nada Melingkar "Tung"',
      key: 'U',
      color: '#D49432',
      description: 'Suara melingkar yang mempermanis transisi birama gendhing kuna.',
      action: () => {
        soundEngine.playKendangTung();
        triggerPadVisual('kendang-tung');
      }
    },
    {
      id: 'kentrung',
      name: 'Kentrung Blora',
      role: 'Detak Kayu Khas Blora',
      key: 'K',
      color: '#9C6F2A',
      description: 'Tabuhan perkusi kayu berongga pengiring kidung sastra rakyat Blora.',
      action: () => {
        soundEngine.playKentrung();
        triggerPadVisual('kentrung');
      }
    },
    {
      id: 'gong-ageng',
      name: 'Gong Ageng Perunggu',
      role: 'Dentuman Sakral 60Hz',
      key: 'G',
      color: '#C59B48',
      description: 'Gong perunggu kuno penutup gongan dengan gema berombak panjang.',
      action: () => {
        soundEngine.playGongAgeng();
        triggerPadVisual('gong-ageng');
      }
    },
    {
      id: 'kempul',
      name: 'Kempul Kuningan',
      role: 'Aksen Birama Tengah',
      key: 'P',
      color: '#2A7A56',
      description: 'Gong gantung berlaras madya penanda tengah siklus gending.',
      action: () => {
        soundEngine.playKempul();
        triggerPadVisual('kempul');
      }
    },
    {
      id: 'bonang',
      name: 'Bonang / Saron',
      role: 'Melodi Laras Slendro',
      key: 'B',
      color: '#466699',
      description: 'Sentuhan nada bilah perunggu penuntun irama gending Barongan.',
      action: () => {
        soundEngine.playBonang(Math.floor(Math.random() * 5) + 1);
        triggerPadVisual('bonang');
      }
    },
    {
      id: 'selompret',
      name: 'Selompret Terompet',
      role: 'Melodi Mistik Barongan',
      key: 'S',
      color: '#A04368',
      description: 'Tiupan terompet lidah ganda berfrekuensi tinggi pengundang roh pertunjukan.',
      action: () => {
        soundEngine.playSelompretPhrase();
        triggerPadVisual('selompret');
      }
    },
    {
      id: 'pecut',
      name: 'Pecut Samandiman',
      role: 'Lecutan Penjinak',
      key: 'W',
      color: '#6E4595',
      description: 'Suara lecutan cemeti Raden Panji yang membelah keheningan arena.',
      action: () => {
        soundEngine.playPecutCrack();
        triggerPadVisual('pecut');
      }
    }
  ];

  const triggerPadVisual = (id: string) => {
    setActivePad(id);
    setTimeout(() => {
      setActivePad((curr) => (curr === id ? null : curr));
    }, 180);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }
      const matched = pads.find((p) => p.key.toLowerCase() === e.key.toLowerCase());
      if (matched) {
        e.preventDefault();
        matched.action();
      } else if (e.code === 'Space') {
        e.preventDefault();
        toggleLoop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying, currentPattern]);

  const toggleLoop = () => {
    if (isPlaying) {
      soundEngine.stopRhythmLoop();
      setIsPlaying(false);
      setActiveStep(-1);
    } else {
      soundEngine.setTempo(tempo);
      soundEngine.startRhythmLoop(currentPattern, (step) => {
        setActiveStep(step);
      });
      setIsPlaying(true);
    }
  };

  const handlePatternChange = (pattern: 'rampak' | 'gendruwo' | 'kuda-lumping') => {
    setCurrentPattern(pattern);
    if (isPlaying) {
      soundEngine.startRhythmLoop(pattern, (step) => {
        setActiveStep(step);
      });
    }
  };

  const handleTempoChange = (newTempo: number) => {
    setTempo(newTempo);
    soundEngine.setTempo(newTempo);
    if (isPlaying) {
      soundEngine.startRhythmLoop(currentPattern, (step) => {
        setActiveStep(step);
      });
    }
  };

  const handleVolumeChange = (newVol: number) => {
    setVolume(newVol);
    soundEngine.setVolume(newVol);
  };

  // Real-time canvas audio visualizer in warm sepia/amber glow
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const analyser = soundEngine.getAnalyser();

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      if (analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barWidth = (width / bufferLength) * 2.2;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * height * 0.9;

          const grad = ctx.createLinearGradient(0, height, 0, height - barHeight);
          grad.addColorStop(0, '#781B1B');
          grad.addColorStop(0.6, '#C59B48');
          grad.addColorStop(1, '#FCE8B3');

          ctx.fillStyle = grad;
          ctx.fillRect(x, height - barHeight, barWidth - 2, barHeight);

          x += barWidth;
        }
      } else {
        ctx.strokeStyle = '#38281B';
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <section id="gamelan" className="relative w-full py-24 bg-[#140E0A] border-t border-[#C59B48]/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-cinzel text-[#C59B48] font-bold mb-2">
              <span>Babak II</span>
              <span aria-hidden="true" className="text-[#8C7A65]">·</span>
              <span>Koleksi Akustik Tabuhan Gamelan</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-[#FAF3E5] tracking-wide text-balance">
              Laboratorium Tabuhan & Soundboard Klasik
            </h2>
            <div className="w-24 h-0.5 bg-[#C59B48]/60 my-3" />
            <p className="text-[#D3C2A7] font-garamond text-base sm:text-lg leading-relaxed">
              Memperdengarkan dentuman otentik instrumen Barongan Blora yang digerakkan oleh Web Audio API. Mainkan setiap instrumen melalui sentuhan tuts antik atau putar iringan irama gendhing pakeliran otomatis.
            </p>
          </div>

          {/* Master Transport Action Button */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={toggleLoop}
              className={`flex items-center gap-2 px-6 py-3 rounded-sm text-xs font-cinzel font-bold uppercase tracking-wider cursor-pointer transition-all shadow-md ${
                isPlaying
                  ? 'bg-[#C59B48] hover:bg-[#D4AC59] text-[#1A120B] border border-[#FDE6B4]'
                  : 'bg-[#781B1B] hover:bg-[#922222] text-[#FDE7BA] border border-[#C59B48]/60 shadow-black/60'
              }`}
            >
              {isPlaying ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlaying ? 'Hentikan Iringan' : 'Putar Iringan Ritme'}</span>
            </button>
          </div>
        </div>

        {/* Vintage Analog Console Cabinet */}
        <div className="p-6 rounded-sm bg-[#1E160F] border border-[#C59B48]/40 space-y-6 mb-8 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Rhythm Selector Buttons */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs uppercase tracking-wider font-cinzel text-[#C59B48] font-bold block flex items-center gap-1.5">
                <Disc className="w-3.5 h-3.5 text-[#C59B48]" />
                <span>Pola Ritmis Gendhing Kuno</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => handlePatternChange('rampak')}
                  className={`px-3 py-2 text-xs font-cinzel font-semibold rounded-sm text-center transition-all cursor-pointer ${
                    currentPattern === 'rampak'
                      ? 'bg-[#781B1B] border border-[#C59B48] text-[#FDE6B4] shadow-inner'
                      : 'bg-[#150F0A] border border-[#C59B48]/25 text-[#B8A78D] hover:text-[#F3E5C2]'
                  }`}
                >
                  Rampak Barongan
                </button>
                <button
                  onClick={() => handlePatternChange('gendruwo')}
                  className={`px-3 py-2 text-xs font-cinzel font-semibold rounded-sm text-center transition-all cursor-pointer ${
                    currentPattern === 'gendruwo'
                      ? 'bg-[#781B1B] border border-[#C59B48] text-[#FDE6B4] shadow-inner'
                      : 'bg-[#150F0A] border border-[#C59B48]/25 text-[#B8A78D] hover:text-[#F3E5C2]'
                  }`}
                >
                  Iringan Buto
                </button>
                <button
                  onClick={() => handlePatternChange('kuda-lumping')}
                  className={`px-3 py-2 text-xs font-cinzel font-semibold rounded-sm text-center transition-all cursor-pointer ${
                    currentPattern === 'kuda-lumping'
                      ? 'bg-[#781B1B] border border-[#C59B48] text-[#FDE6B4] shadow-inner'
                      : 'bg-[#150F0A] border border-[#C59B48]/25 text-[#B8A78D] hover:text-[#F3E5C2]'
                  }`}
                >
                  Kuda Lumping
                </button>
              </div>
            </div>

            {/* Tempo Slider */}
            <div className="md:col-span-4 space-y-2">
              <div className="flex justify-between text-xs font-cinzel">
                <span className="text-[#C8B89E] uppercase tracking-wider">Tempo Tabuhan</span>
                <span className="text-[#F3D382] tabular-nums font-mono font-bold">{tempo} BPM</span>
              </div>
              <input
                type="range"
                min="70"
                max="160"
                value={tempo}
                onChange={(e) => handleTempoChange(Number(e.target.value))}
                className="w-full accent-[#781B1B] bg-[#120D08] h-2 rounded-none appearance-none cursor-pointer border border-[#C59B48]/30"
              />
            </div>

            {/* Volume Slider */}
            <div className="md:col-span-3 space-y-2">
              <div className="flex justify-between text-xs font-cinzel">
                <span className="text-[#C8B89E] uppercase tracking-wider flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-[#C59B48]" />
                  <span>Volume Induk</span>
                </span>
                <span className="text-[#F3D382] tabular-nums font-mono font-bold">
                  {Math.round(volume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={(e) => handleVolumeChange(Number(e.target.value))}
                className="w-full accent-[#C59B48] bg-[#120D08] h-2 rounded-none appearance-none cursor-pointer border border-[#C59B48]/30"
              />
            </div>
          </div>

          {/* 16-Step Birama Metronome Counter */}
          <div className="pt-4 border-t border-[#C59B48]/25">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] uppercase tracking-wider font-cinzel text-[#C59B48] font-bold">
                Indikator Birama Gendhing (16 Ketukan)
              </span>
              <span className="text-[11px] font-garamond italic text-[#B8A78D]">
                Pintasan Keyboard: Tekan tombol huruf yang tertera
              </span>
            </div>
            <div className="grid grid-cols-16 gap-1 sm:gap-1.5">
              {Array.from({ length: 16 }).map((_, stepIdx) => {
                const isCurrent = activeStep === stepIdx;
                const isGongStep = stepIdx === 0;
                const isKempulStep = stepIdx === 8;

                return (
                  <div
                    key={stepIdx}
                    className={`h-5 sm:h-6 rounded-none transition-all duration-75 flex items-center justify-center text-[10px] font-mono tabular-nums border ${
                      isCurrent
                        ? 'bg-[#E5B865] text-[#1A120B] font-bold scale-110 shadow-lg border-[#FDE6B4]'
                        : isGongStep
                        ? 'bg-[#5C1010] border-[#9E2A2A] text-[#FDE6B4]'
                        : isKempulStep
                        ? 'bg-[#3A2A1A] border-[#C59B48]/60 text-[#E5B865]'
                        : 'bg-[#150F0A] border-[#3D2C1E] text-[#8C7A65]'
                    }`}
                  >
                    {stepIdx + 1}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Realtime Canvas Audio Visualizer */}
          <div className="pt-2">
            <canvas
              ref={canvasRef}
              width={800}
              height={50}
              className="w-full h-12 bg-[#0F0B07] rounded-none border border-[#C59B48]/30"
            />
          </div>
        </div>

        {/* 9 Interactive Instrument Soundboard Pads with Vintage Wood & Brass Aesthetic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pads.map((pad) => {
            const isPulsing = activePad === pad.id;

            return (
              <button
                key={pad.id}
                onClick={pad.action}
                className={`relative p-5 rounded-sm border text-left transition-all cursor-pointer group overflow-hidden ${
                  isPulsing
                    ? 'scale-[0.98] ring-2 ring-[#C59B48] bg-[#2C1F15] shadow-2xl'
                    : 'bg-[#1C150E] border-[#C59B48]/30 hover:border-[#C59B48]/60 hover:bg-[#241B12]'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-cinzel text-[#C59B48] font-bold block">
                      {pad.role}
                    </span>
                    <h3 className="text-lg font-bold font-playfair text-[#F9F3E5] group-hover:text-[#FDE6B4] transition-colors mt-0.5">
                      {pad.name}
                    </h3>
                  </div>

                  {/* Keyboard Shortcut Key Indicator in Vintage Brass Frame */}
                  <div className="w-8 h-8 rounded-none border border-[#C59B48] bg-[#140E0A] flex items-center justify-center font-mono font-bold text-xs text-[#E5B865] shadow-inner shrink-0">
                    {pad.key}
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-[#C8B89E] font-garamond leading-relaxed">
                  {pad.description}
                </p>

                <div className="mt-4 pt-3 border-t border-[#C59B48]/20 flex items-center justify-between text-[11px] font-cinzel text-[#9E8B72]">
                  <span className="group-hover:text-[#E5B865] transition-colors">Sentuh untuk memukul</span>
                  <span className="font-mono text-[10px] text-[#806D56]">Sintesis Akustik</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
