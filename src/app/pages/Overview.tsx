import { colors, surfaces, textColors, typography } from '../tokens';
import logoImg from 'figma:asset/914e157821720e928160ab9afb22db4a0113cee5.png';
import logoRecords from 'figma:asset/8309d5c3dac6f7d5c3657890cfb480b54c9e62c4.png';
import logoCebolao from 'figma:asset/e235c9d0a0942cbfe2b6362961db22ce20ac9900.png';
import logoLoto from 'figma:asset/79b7d8d978e4d1324d3df7cc3892fe748223aacc.png';

const traits = [
  { word: 'Sofisticada', desc: 'Refinamento em cada detalhe, sem excessos', not: 'Não é fria ou distante' },
  { word: 'Criativa',    desc: 'Expressão ousada dentro de uma linguagem coerente', not: 'Não é caótica ou aleatória' },
  { word: 'Moderna',     desc: 'Linguagem visual contemporânea e progressiva', not: 'Não é datada ou nostálgica' },
  { word: 'Confiante',   desc: 'Presença marcante, sem precisar gritar', not: 'Não é arrogante ou inacessível' },
  { word: 'Profunda',    desc: 'Como camadas de uma cebola — significado além do visual', not: 'Não é superficial ou genérica' },
];

const logoVersions = [
  { name: 'Principal (Dark BG)', bg: `linear-gradient(135deg, ${colors.violet[800]}, ${colors.midnight[900]})`, img: logoImg, textColor: '#fff' },
  { name: 'Records (Monocromático)', bg: '#FFFFFF', img: logoRecords, textColor: '#333' },
  { name: 'Cebolão Generator', bg: '#FFFFFF', img: logoCebolao, textColor: '#333' },
  { name: 'Loto Generator', bg: `linear-gradient(135deg, ${colors.violet[700]}, ${colors.ocean[700]})`, img: logoLoto, textColor: '#fff' },
];

const principles = [
  {
    num: '01',
    title: 'Camadas com Propósito',
    desc: 'Assim como uma cebola tem camadas que revelam mais profundidade, nosso design system é construído em níveis — tokens, componentes, padrões — cada um com responsabilidade clara.',
    color: colors.violet[400],
  },
  {
    num: '02',
    title: 'Dark First, Light Ready',
    desc: 'Nascemos no escuro. O modo escuro é a experiência principal, refletindo a sofisticação do estúdio. O modo claro é totalmente suportado, mas a alma da marca vive na escuridão.',
    color: colors.ember[400],
  },
  {
    num: '03',
    title: 'Movimento Intencional',
    desc: 'Animações existem para comunicar, não para impressionar. Cada transição tem um propósito funcional. Sutil, elegante, nunca ornamental por si só.',
    color: colors.violet[300],
  },
  {
    num: '04',
    title: 'Acessibilidade é Fundação',
    desc: 'Contraste WCAG AA no mínimo, AAA onde possível. Navegação por teclado completa. Semântica HTML correta. Inclusão não é um add-on — é arquitetura.',
    color: colors.ember[300],
  },
];

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>
        {number}
      </div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function Overview() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">

      {/* Hero */}
      <div
        className="rounded-2xl overflow-hidden mb-12 relative"
        style={{
          background: `linear-gradient(135deg, ${colors.midnight[900]} 0%, ${colors.violet[900]} 50%, ${colors.midnight[800]} 100%)`,
          border: `1px solid ${surfaces.border}`,
          minHeight: 320,
        }}
      >
        {/* Decorative rings */}
        <div className="absolute inset-0 overflow-hidden">
          {[320, 260, 200, 140].map((size, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: size, height: size,
                border: `1px solid ${colors.violet[500]}${['10', '15', '20', '30'][i]}`,
                top: '50%', left: '60%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 p-8 lg:p-12">
          <div
            className="rounded-2xl overflow-hidden flex items-center justify-center shrink-0"
            style={{
              width: 160, height: 160,
              background: `linear-gradient(135deg, ${colors.violet[600]}, ${colors.ember[700]})`,
              boxShadow: `0 0 60px ${colors.violet[500]}50`,
            }}
          >
            <img src={logoImg} alt="Cebola Studios" className="w-full h-full object-cover" />
          </div>

          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.15em', marginBottom: 12 }}>
              DESIGN SYSTEM v1.0
            </div>
            <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 48, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 16 }}>
              Cebola Studios<br/>
              <span style={{ background: `linear-gradient(90deg, ${colors.violet[300]}, ${colors.ember[300]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Design System
              </span>
            </h1>
            <p style={{ fontSize: 16, color: textColors.secondary, lineHeight: 1.7, maxWidth: 480 }}>
              Um sistema de design completo, coeso e escalável para todos os produtos do ecossistema Cebola Studios — da identidade ao código.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              {['Dark Mode First', 'Mobile-First (Android)', 'WCAG AA', 'Open Source Fonts'].map(tag => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
                    color: colors.violet[300],
                    border: `1px solid ${colors.violet[500]}40`,
                    borderRadius: 6, padding: '4px 10px',
                    backgroundColor: `${colors.violet[500]}10`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filosofia */}
      <div className="mb-12">
        <SectionHeader
          number="§ 01 — FILOSOFIA"
          title="A Filosofia da Marca"
          subtitle="Cebola Studios é um estúdio criativo que acredita que profundidade e camadas criam identidades duradouras. Nossa linguagem visual reflete essa filosofia: sofisticada por fora, rica por dentro."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map(p => (
            <div
              key={p.num}
              className="rounded-xl p-6"
              style={{
                backgroundColor: surfaces.surface,
                border: `1px solid ${surfaces.border}`,
              }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: p.color, marginBottom: 8 }}>
                {p.num}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, fontWeight: 600, color: textColors.primary, marginBottom: 8 }}>
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: textColors.muted, lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Personalidade */}
      <div className="mb-12">
        <SectionHeader
          number="§ 01.2 — PERSONALIDADE"
          title="Personalidade Visual"
          subtitle="5 adjetivos que definem e guiam toda decisão criativa no ecossistema Cebola Studios."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {traits.map((t, i) => (
            <div
              key={t.word}
              className="rounded-xl p-5 group"
              style={{
                backgroundColor: surfaces.surface,
                border: `1px solid ${surfaces.border}`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${colors.violet[500]}08, ${colors.ember[500]}05)` }}
              />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: textColors.disabled, marginBottom: 6 }}>
                0{i + 1}
              </div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: textColors.primary, marginBottom: 6, letterSpacing: '-0.02em' }}>
                {t.word}
              </div>
              <p style={{ fontSize: 12, color: textColors.secondary, marginBottom: 10, lineHeight: 1.6 }}>
                {t.desc}
              </p>
              <div
                className="rounded-lg px-3 py-2"
                style={{ backgroundColor: `${colors.ember[500]}10`, border: `1px solid ${colors.ember[500]}20` }}
              >
                <span style={{ fontSize: 11, color: colors.ember[400], fontFamily: "'Inter', sans-serif" }}>
                  ✕ {t.not}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Versions */}
      <div className="mb-12">
        <SectionHeader
          number="§ 01.3 — IDENTIDADE"
          title="Versões do Logo"
          subtitle="O logotipo Cebola Studios existe em múltiplos formatos para garantir legibilidade em qualquer contexto."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {logoVersions.map(v => (
            <div key={v.name} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
              <div
                className="flex items-center justify-center p-6"
                style={{ background: v.bg, minHeight: 140 }}
              >
                <img src={v.img} alt={v.name} style={{ maxWidth: '100%', maxHeight: 80, objectFit: 'contain' }} />
              </div>
              <div className="p-3" style={{ backgroundColor: surfaces.surface }}>
                <div style={{ fontSize: 11, color: textColors.muted, textAlign: 'center' }}>{v.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Espaçamento Mínimo', desc: 'Sempre respeitar uma zona de proteção equivalente à altura da letra "C" ao redor do logo em todos os lados.', icon: '⬜' },
            { title: 'Tamanho Mínimo', desc: 'Digital: 120px de largura. Impresso: 20mm. Abaixo disso, usar apenas o símbolo (ícone da cebola) sem o wordmark.', icon: '📐' },
            { title: 'Fundos Permitidos', desc: 'Versão positiva: fundos escuros (Midnight 900+). Versão negativa: fundos claros. Nunca sobre fotos ou texturas complexas.', icon: '🎨' },
          ].map(r => (
            <div key={r.title} className="rounded-xl p-5" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>{r.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: textColors.primary, marginBottom: 6 }}>
                {r.title}
              </div>
              <p style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.6 }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Voice */}
      <div className="mb-12">
        <SectionHeader
          number="§ 01.4 — VOZ VISUAL"
          title="Voz e Tom Visual"
        />
        <div
          className="rounded-2xl p-8"
          style={{
            background: `linear-gradient(135deg, ${colors.violet[900]}80, ${colors.midnight[900]})`,
            border: `1px solid ${colors.violet[500]}30`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, color: colors.violet[300], marginBottom: 16, letterSpacing: '0.05em' }}>
                ✓ A MARCA É
              </div>
              {[
                'Sofisticada, não esnobe',
                'Moderna, não efêmera',
                'Criativa, não caótica',
                'Profissional, não corporativa',
                'Expressiva, não gritante',
                'Escura, não opressiva',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: colors.violet[400], flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: textColors.secondary }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, color: colors.ember[400], marginBottom: 16, letterSpacing: '0.05em' }}>
                ✕ A MARCA NÃO É
              </div>
              {[
                'Minimalista ao extremo (sem alma)',
                'Colorida em excesso (distrativa)',
                'Nostálgica ou retrô',
                'Agressiva ou confrontadora',
                'Fria ou tecnicamente fria demais',
                'Genérica ou sem personalidade',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 mb-3">
                  <div style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: colors.ember[400], flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: textColors.muted }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { num: '9', label: 'Seções', sub: 'Completamente documentadas' },
          { num: '60+', label: 'Tokens de Cor', sub: 'Paleta proprietária' },
          { num: '3', label: 'Famílias Tipográficas', sub: 'Open source' },
          { num: '15+', label: 'Componentes', sub: 'Com todos os estados' },
        ].map(s => (
          <div
            key={s.label}
            className="rounded-xl p-5 text-center"
            style={{
              background: `linear-gradient(135deg, ${colors.violet[500]}10, ${colors.ember[500]}05)`,
              border: `1px solid ${colors.violet[500]}20`,
            }}
          >
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, color: colors.violet[300], letterSpacing: '-0.03em' }}>
              {s.num}
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 2 }}>{s.label}</div>
            <div style={{ fontSize: 11, color: textColors.muted }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
