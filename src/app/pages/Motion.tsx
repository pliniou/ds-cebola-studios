import { useState, useEffect, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { colors, surfaces, textColors, motion } from '../tokens';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

// Animated ball demonstrating different easings
function EasingDemo({ name, bezier, duration, color }: { name: string; bezier: string; duration: string; color: string }) {
  const [playing, setPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const play = () => {
    if (playing) return;
    setPlaying(true);
    setPosition(1);
    timerRef.current = setTimeout(() => {
      setPosition(0);
      setPlaying(false);
    }, parseInt(duration) + 200);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return (
    <div className="rounded-xl p-5" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: textColors.primary, marginBottom: 4 }}>
        {name}
      </div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: colors.violet[400], marginBottom: 12 }}>
        {bezier}
      </div>
      <div style={{ position: 'relative', height: 16, backgroundColor: surfaces.surfaceElevated, borderRadius: 8, marginBottom: 12, overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: 2, bottom: 2,
            width: 12, height: 12,
            borderRadius: '50%',
            backgroundColor: color,
            left: position === 0 ? 4 : 'calc(100% - 16px)',
            transition: playing || position === 1 ? `left ${duration} ${bezier}` : 'none',
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: textColors.muted }}>{duration}</span>
        <button
          onClick={play}
          style={{
            padding: '4px 12px', borderRadius: 6, fontSize: 11,
            backgroundColor: `${color}20`, color, border: `1px solid ${color}40`,
            cursor: playing ? 'default' : 'pointer', fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {playing ? 'running...' : '▶ play'}
        </button>
      </div>
    </div>
  );
}

const easingDemos = [
  { name: 'Ease Out', bezier: 'cubic-bezier(0,0,0.2,1)', duration: '250ms', color: colors.violet[400], desc: 'Começa rápido, termina suave. Para elementos que entram na tela.' },
  { name: 'Ease In', bezier: 'cubic-bezier(0.4,0,1,1)', duration: '200ms', color: colors.ember[400], desc: 'Começa devagar, acelera. Para elementos que saem da tela.' },
  { name: 'Ease In Out', bezier: 'cubic-bezier(0.4,0,0.2,1)', duration: '300ms', color: colors.violet[300], desc: 'Para transições entre dois estados. O mais equilibrado.' },
  { name: 'Spring Elegant', bezier: 'cubic-bezier(0.16,1,0.3,1)', duration: '400ms', color: colors.ember[300], desc: 'Overshooting sutil. Para modais, drawers e elementos interativos.' },
  { name: 'Spring Snappy', bezier: 'cubic-bezier(0.22,1,0.36,1)', duration: '350ms', color: colors.violet[200], desc: 'Mais responsivo que o Elegant. Para feedbacks de click e toques.' },
  { name: 'Bounce', bezier: 'cubic-bezier(0.34,1.56,0.64,1)', duration: '400ms', color: colors.jade[300], desc: 'Overshooting pronunciado. Usar com moderação. Badges, notificações.' },
];

const durations = [
  { name: 'instant', value: '0ms', label: 'Instantâneo', use: 'Sem transição visual. Mudanças de estado binárias (show/hide immediato).' },
  { name: 'micro', value: '100ms', label: 'Micro', use: 'Feedbacks sutis: ripple effect, hover de botão, borda de input em focus.' },
  { name: 'fast', value: '150ms', label: 'Rápido', use: 'Tooltips, dropdowns curtos, checksboxes, toggles.' },
  { name: 'normal', value: '250ms', label: 'Normal', use: 'Transições padrão de UI: cards, accordions, tabs, navegação entre estados.' },
  { name: 'slow', value: '350ms', label: 'Lento', use: 'Modais, drawers laterais, animações de conteúdo complexo.' },
  { name: 'enter', value: '400ms', label: 'Entrada', use: 'Screen transitions, hero animations, elementos que entram pela primeira vez.' },
  { name: 'exit', value: '200ms', label: 'Saída', use: 'Sempre mais rápido que a entrada. Saída de modais, toasts desaparecendo.' },
  { name: 'page', value: '500ms', label: 'Página', use: 'Transições entre rotas/páginas completas. Máximo recomendado.' },
];

const doList = [
  'Animar propriedades eficientes: transform e opacity (não disparam reflow)',
  'Usar Ease Out para entradas, Ease In para saídas',
  'Respeitar prefers-reduced-motion com @media query',
  'Manter transições de saída mais rápidas que entradas',
  'Usar spring para elementos interativos (parece mais responsivo)',
  'Encadear animações com delays progressivos (stagger: 50-80ms)',
  'Testar em dispositivos lentos — animações devem degradar graciosamente',
];

const dontList = [
  'Animar border-radius, box-shadow, width/height desnecessariamente',
  'Criar animações longas (>600ms) em interações frequentes',
  'Usar bounce/spring em navegação e fluxos críticos',
  'Travar a UI durante animações (nunca bloquear input do usuário)',
  'Animar apenas para impressionar — todo movimento deve ter propósito',
  'Usar mais de 3 tipos de easing diferentes no mesmo projeto',
  'Ignorar usuários com vestibular disorders (motion sickness)',
];

export function Motion() {
  const [loopAnim, setLoopAnim] = useState(false);
  const [shimmer, setShimmer] = useState(true);

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 06 — MOTION"
        title="Motion & Animação"
        subtitle="Movimento intencional, elegante e funcional. Cada animação existe para comunicar, guiar ou dar feedback — nunca por vaidade."
      />

      {/* Philosophy */}
      <div className="mb-12 rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${colors.violet[900]}50, ${colors.midnight[800]}80)`, border: `1px solid ${colors.violet[500]}30` }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: textColors.primary, marginBottom: 12 }}>
          Filosofia de Movimento
        </div>
        <p style={{ fontSize: 15, color: textColors.secondary, lineHeight: 1.8, maxWidth: 620 }}>
          A Cebola Studios acredita em movimento <em>purposeful</em> — cada pixel animado deve ter razão de ser. Nossas animações são <strong style={{ color: colors.violet[300] }}>sutis</strong>, <strong style={{ color: colors.violet[300] }}>elegantes</strong> e <strong style={{ color: colors.violet[300] }}>nunca distraem</strong> o usuário do objetivo principal.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {[
            { word: 'Intencional', desc: 'Toda animação serve a um propósito funcional — feedback, orientação ou hierarquia.' },
            { word: 'Eficiente', desc: 'Apenas transform e opacity. Zero janks. 60fps em qualquer dispositivo.' },
            { word: 'Inclusivo', desc: 'Suporte total a prefers-reduced-motion. Acessibilidade em movimento.' },
          ].map(p => (
            <div key={p.word} className="rounded-xl p-4" style={{ backgroundColor: `${colors.violet[500]}10`, border: `1px solid ${colors.violet[500]}20` }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: colors.violet[300], marginBottom: 6 }}>{p.word}</div>
              <p style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Easing Demos */}
      <div className="mb-12">
        <SectionHeader number="§ 06.1 — EASINGS" title="Curvas de Easing" subtitle="Clique em '▶ play' para ver cada curva em ação. Todas com valores cubic-bezier precisos." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {easingDemos.map(demo => (
            <EasingDemo key={demo.name} {...demo} />
          ))}
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
            {['#EF4444', '#F59E0B', '#22C55E'].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />)}
            <span style={{ fontSize: 12, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace", marginLeft: 8 }}>motion-tokens.css</span>
          </div>
          <pre className="p-5 overflow-x-auto" style={{ backgroundColor: surfaces.surface, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.8, color: textColors.secondary }}>
{`:root {
  /* Cebola Studios — Easing Tokens */
  --ease-linear:       linear;
  --ease-in:           cubic-bezier(0.4, 0, 1, 1);
  --ease-out:          cubic-bezier(0, 0, 0.2, 1);       /* ← padrão */
  --ease-in-out:       cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:       cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-spring-snappy: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-elegant:      cubic-bezier(0.16, 1, 0.3, 1);    /* ← preferido */
  --ease-bounce:       cubic-bezier(0.34, 1.56, 0.64, 1);
}`}
          </pre>
        </div>
      </div>

      {/* Duration Scale */}
      <div className="mb-12">
        <SectionHeader number="§ 06.2 — DURAÇÃO" title="Escala de Duração" subtitle="8 passos de duração nomeados e com casos de uso definidos." />
        <div className="space-y-2">
          {durations.map((d, i) => (
            <div
              key={d.name}
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}
            >
              <div style={{ minWidth: 80 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 14, fontWeight: 600, color: textColors.primary }}>{d.value}</div>
              </div>
              <div style={{ minWidth: 80 }}>
                <div style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400] }}>--dur-{d.name}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: textColors.secondary, marginBottom: 2 }}>{d.label}</div>
                <div style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.5 }}>{d.use}</div>
              </div>
              {/* Progress bar visualization */}
              <div style={{ width: 80, height: 4, backgroundColor: surfaces.surfaceElevated, borderRadius: 2, overflow: 'hidden', flexShrink: 0, display: 'none' }} className="hidden md:block">
                <div style={{
                  height: '100%',
                  width: `${Math.min((parseInt(d.value) / 500) * 100, 100)}%`,
                  backgroundColor: colors.violet[500],
                  borderRadius: 2,
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Demos */}
      <div className="mb-12">
        <SectionHeader number="§ 06.3 — DEMOS" title="Animações em Contexto" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Skeleton Loading */}
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
              Skeleton Loading
            </div>
            <p style={{ fontSize: 12, color: textColors.muted, marginBottom: 16, lineHeight: 1.5 }}>
              Shimmer animado: background-position 2s ease-in-out infinite
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(90deg, ${surfaces.surfaceElevated} 0%, ${surfaces.surfaceOverlay} 50%, ${surfaces.surfaceElevated} 100%)`, backgroundSize: '200% 100%', animation: 'shimmer 1.5s ease-in-out infinite' }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: 12, borderRadius: 6, background: `linear-gradient(90deg, ${surfaces.surfaceElevated} 0%, ${surfaces.surfaceOverlay} 50%, ${surfaces.surfaceElevated} 100%)`, backgroundSize: '200% 100%', animation: 'shimmer 1.5s ease-in-out infinite', marginBottom: 8 }} />
                <div style={{ height: 10, width: '60%', borderRadius: 6, background: `linear-gradient(90deg, ${surfaces.surfaceElevated} 0%, ${surfaces.surfaceOverlay} 50%, ${surfaces.surfaceElevated} 100%)`, backgroundSize: '200% 100%', animation: 'shimmer 1.5s ease-in-out infinite' }} />
              </div>
            </div>
            <div style={{ height: 80, borderRadius: 10, background: `linear-gradient(90deg, ${surfaces.surfaceElevated} 0%, ${surfaces.surfaceOverlay} 50%, ${surfaces.surfaceElevated} 100%)`, backgroundSize: '200% 100%', animation: 'shimmer 1.5s ease-in-out infinite' }} />
          </div>

          {/* Fade + Slide In */}
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
              Fade + Slide In (Cards)
            </div>
            <p style={{ fontSize: 12, color: textColors.muted, marginBottom: 16, lineHeight: 1.5 }}>
              opacity: 0→1, translateY: 12px→0, 400ms, Elegant easing, stagger 80ms
            </p>
            <div className="space-y-2">
              {[0, 1, 2].map(i => (
                <div
                  key={i}
                  style={{
                    padding: '12px 16px', borderRadius: 10,
                    backgroundColor: surfaces.surfaceElevated,
                    border: `1px solid ${surfaces.border}`,
                    animation: `fadeSlideIn 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both`,
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}
                >
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: [colors.violet[400], colors.ember[400], colors.violet[300]][i] }} />
                  <span style={{ fontSize: 13, color: textColors.secondary }}>Card item {i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
              Progress Bar
            </div>
            <p style={{ fontSize: 12, color: textColors.muted, marginBottom: 16 }}>
              width animado, 800ms, ease-out. Nunca linear.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { pct: 72, color: colors.violet[500], label: 'Design' },
                { pct: 85, color: colors.ember[500], label: 'Motion' },
                { pct: 58, color: colors.jade[500], label: 'A11y' },
              ].map(bar => (
                <div key={bar.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: textColors.secondary }}>{bar.label}</span>
                    <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: textColors.muted }}>{bar.pct}%</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, backgroundColor: surfaces.surfaceElevated }}>
                    <div style={{
                      height: '100%',
                      width: `${bar.pct}%`,
                      borderRadius: 3,
                      backgroundColor: bar.color,
                      animation: 'growWidth 0.8s cubic-bezier(0,0,0.2,1) forwards',
                      boxShadow: `0 0 6px ${bar.color}60`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pulse notification */}
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
              Pulse / Ring Animations
            </div>
            <p style={{ fontSize: 12, color: textColors.muted, marginBottom: 16 }}>
              Para notificações, status online, loading indicators
            </p>
            <div className="flex gap-8 flex-wrap">
              {/* Pulse dot */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ position: 'relative', width: 32, height: 32 }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: colors.jade[500], position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1 }} />
                  <div style={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: colors.jade[500], position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', animation: 'pulseRing 1.5s ease-out infinite' }} />
                </div>
                <span style={{ fontSize: 11, color: textColors.muted }}>Online</span>
              </div>
              {/* Spinner */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ width: 32, height: 32, borderRadius: '50%', border: `3px solid ${surfaces.surfaceElevated}`, borderTopColor: colors.violet[400], animation: 'spin 0.8s linear infinite' }} />
                <span style={{ fontSize: 11, color: textColors.muted }}>Loading</span>
              </div>
              {/* Bounce dots */}
              <div className="flex flex-col items-center gap-3">
                <div style={{ display: 'flex', gap: 4, alignItems: 'center', height: 32 }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: colors.violet[400], animation: `bounceDot 1s ease-in-out ${i * 0.15}s infinite` }} />
                  ))}
                </div>
                <span style={{ fontSize: 11, color: textColors.muted }}>Typing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do and Don't */}
      <div>
        <SectionHeader number="§ 06.4 — REGRAS" title="O que Fazer e Evitar" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${colors.jade[500]}30` }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: colors.jade[300], marginBottom: 16 }}>
              ✓ Fazer
            </div>
            {doList.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: `${colors.jade[500]}20`, border: `1px solid ${colors.jade[500]}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 8, color: colors.jade[400] }}>✓</span>
                </div>
                <span style={{ fontSize: 13, color: textColors.secondary, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${colors.crimson[500]}30` }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: colors.crimson[300], marginBottom: 16 }}>
              ✕ Evitar
            </div>
            {dontList.map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-3">
                <div style={{ width: 16, height: 16, borderRadius: '50%', backgroundColor: `${colors.crimson[500]}20`, border: `1px solid ${colors.crimson[500]}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 8, color: colors.crimson[400] }}>✕</span>
                </div>
                <span style={{ fontSize: 13, color: textColors.muted, lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes growWidth {
          from { width: 0%; }
        }
        @keyframes pulseRing {
          0% { transform: translate(-50%,-50%) scale(1); opacity: 0.7; }
          100% { transform: translate(-50%,-50%) scale(3); opacity: 0; }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes bounceDot {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.5; }
          40% { transform: scale(1); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
