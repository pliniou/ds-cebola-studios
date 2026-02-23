import { colors, surfaces, textColors, typography } from '../tokens';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

const fontFamilies = [
  {
    name: 'Space Grotesk',
    role: 'Display / Heading',
    token: '--font-display',
    source: 'Google Fonts',
    weights: ['300 Light', '400 Regular', '500 Medium', '600 SemiBold', '700 Bold'],
    desc: 'Geométrica com personalidade. Moderna, distinta e autoritária. Usada em títulos, headings, botões e elementos de marca.',
    specimen: 'Cebola Studios',
    usageRules: [
      'H1 a H4 em toda a aplicação',
      'Botões e CTAs',
      'Labels de navegação',
      'Badges e tags de destaque',
      'Números e métricas grandes',
    ],
    dontUse: [
      'Parágrafos longos',
      'Texto de suporte pequeno',
      'Conteúdo técnico ou código',
    ],
    font: "'Space Grotesk', sans-serif",
    color: colors.violet[300],
  },
  {
    name: 'Inter',
    role: 'Body / Interface',
    token: '--font-body',
    source: 'Google Fonts',
    weights: ['300 Light', '400 Regular', '500 Medium', '600 SemiBold', '700 Bold'],
    desc: 'Projetada especificamente para telas. Legibilidade excepcional em todos os tamanhos. A voz do produto, presente em toda a interface.',
    specimen: 'Criamos experiências que marcam.',
    usageRules: [
      'Texto de corpo e parágrafos',
      'Labels e inputs de formulário',
      'Tooltips e mensagens de ajuda',
      'Conteúdo gerado pelo usuário',
      'Tabelas e listas de dados',
    ],
    dontUse: [
      'Títulos de impacto visual',
      'Código e valores técnicos',
      'Headings principais (H1)',
    ],
    font: "'Inter', sans-serif",
    color: colors.ember[300],
  },
  {
    name: 'JetBrains Mono',
    role: 'Code / Technical',
    token: '--font-mono',
    source: 'Google Fonts / JetBrains',
    weights: ['400 Regular', '500 Medium', '600 SemiBold'],
    desc: 'Projetada por programadores para programadores. Ligaduras otimizadas, altamente legível. Para código, tokens, valores técnicos e labels de sistema.',
    specimen: '--color-violet-500: #7C3AED;',
    usageRules: [
      'Snippets de código',
      'Tokens e variáveis CSS',
      'Endereços, IDs e hashes',
      'Labels técnicos (versão, build)',
      'Números de seção e índices',
    ],
    dontUse: [
      'Texto de corpo',
      'Títulos principais',
      'Botões de ação',
    ],
    font: "'JetBrains Mono', monospace",
    color: colors.violet[400],
  },
];

const typeScale = [
  { name: '5xl', size: '56px', lh: '1.1', ls: '-0.04em', weight: '700', tag: 'Display', example: 'Criatividade.' },
  { name: '4xl', size: '40px', lh: '1.2', ls: '-0.03em', weight: '700', tag: 'H1', example: 'Cebola Studios' },
  { name: '3xl', size: '30px', lh: '1.35', ls: '-0.02em', weight: '700', tag: 'H2', example: 'Design System v1.0' },
  { name: '2xl', size: '24px', lh: '1.4', ls: '-0.02em', weight: '600', tag: 'H3', example: 'Paleta de Cores' },
  { name: 'xl', size: '20px', lh: '1.5', ls: '-0.01em', weight: '600', tag: 'H4', example: 'Tipografia do Sistema' },
  { name: 'lg', size: '18px', lh: '1.6', ls: '-0.01em', weight: '500', tag: 'Lead', example: 'Texto introdutório de seções e parágrafos destacados.' },
  { name: 'md', size: '16px', lh: '1.6', ls: '0', weight: '400', tag: 'Body', example: 'Texto de corpo padrão. Legível em qualquer contexto de leitura.' },
  { name: 'sm', size: '14px', lh: '1.5', ls: '0.01em', weight: '400', tag: 'Small', example: 'Labels, captions, textos auxiliares de interface.' },
  { name: 'xs', size: '12px', lh: '1.5', ls: '0.02em', weight: '400', tag: 'Caption', example: 'Metadados, timestamps, informações secundárias.' },
];

export function Typography() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 03 — TIPOGRAFIA"
        title="Sistema Tipográfico"
        subtitle="Três famílias tipográficas open source, cada uma com função clara e regras de uso definidas. Juntas formam uma voz coesa e versátil."
      />

      {/* Font Families */}
      {fontFamilies.map(font => (
        <div key={font.name} className="mb-10 rounded-2xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          {/* Specimen */}
          <div
            className="p-8 lg:p-10"
            style={{ background: `linear-gradient(135deg, ${surfaces.surface}, ${surfaces.surfaceElevated}30)` }}
          >
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: font.color, letterSpacing: '0.1em', marginBottom: 4 }}>
                  {font.role.toUpperCase()}
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: textColors.primary }}>
                  {font.name}
                </h3>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], backgroundColor: `${colors.violet[500]}15`, border: `1px solid ${colors.violet[500]}25`, borderRadius: 6, padding: '3px 8px' }}>
                  {font.token}
                </span>
                <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: textColors.muted, backgroundColor: surfaces.surfaceElevated, border: `1px solid ${surfaces.border}`, borderRadius: 6, padding: '3px 8px' }}>
                  {font.source}
                </span>
              </div>
            </div>

            {/* Large specimen */}
            <div
              style={{
                fontFamily: font.font,
                fontSize: font.name === 'JetBrains Mono' ? 22 : 36,
                fontWeight: 700,
                color: textColors.primary,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: 16,
                wordBreak: 'break-word',
              }}
            >
              {font.specimen}
            </div>

            {/* Weights */}
            <div className="flex gap-4 flex-wrap">
              {font.weights.map(w => (
                <div key={w}>
                  <div style={{ fontFamily: font.font, fontSize: 14, fontWeight: parseInt(w), color: textColors.secondary }}>
                    {w.split(' ')[1]}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: textColors.disabled, marginTop: 2 }}>
                    {w.split(' ')[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ backgroundColor: surfaces.surface }}>
            <div className="p-5" style={{ borderTop: `1px solid ${surfaces.border}`, borderRight: `1px solid ${surfaces.border}` }}>
              <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', marginBottom: 8 }}>
                DESCRIÇÃO
              </div>
              <p style={{ fontSize: 13, color: textColors.secondary, lineHeight: 1.7 }}>{font.desc}</p>
            </div>
            <div className="p-5" style={{ borderTop: `1px solid ${surfaces.border}`, borderRight: `1px solid ${surfaces.border}` }}>
              <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', marginBottom: 8 }}>
                ✓ USE PARA
              </div>
              {font.usageRules.map(r => (
                <div key={r} className="flex items-center gap-2 mb-2">
                  <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: colors.jade[500], flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: textColors.secondary }}>{r}</span>
                </div>
              ))}
            </div>
            <div className="p-5" style={{ borderTop: `1px solid ${surfaces.border}` }}>
              <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em', marginBottom: 8 }}>
                ✕ EVITE PARA
              </div>
              {font.dontUse.map(r => (
                <div key={r} className="flex items-center gap-2 mb-2">
                  <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: colors.crimson[500], flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: textColors.muted }}>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Type Scale */}
      <div className="mb-10">
        <SectionHeader
          number="§ 03.2 — ESCALA"
          title="Escala Tipográfica"
          subtitle="9 tamanhos nomeados. Fonte de display (Space Grotesk) para títulos, Inter para corpo."
        />
        <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          <div className="grid grid-cols-5 px-5 py-2" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
            {['Token', 'px', 'Line-height', 'L-Spacing', 'Tag'].map(h => (
              <div key={h} style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.1em' }}>{h}</div>
            ))}
          </div>
          {typeScale.map((scale, i) => {
            const isHeading = ['5xl', '4xl', '3xl', '2xl', 'xl'].includes(scale.name);
            return (
              <div key={scale.name} style={{ borderBottom: `1px solid ${surfaces.border}` }}>
                {/* Visual example */}
                <div className="px-5 pt-5 pb-3" style={{ backgroundColor: i % 2 === 0 ? surfaces.surface : `${surfaces.surface}cc` }}>
                  <div
                    style={{
                      fontFamily: isHeading ? "'Space Grotesk', sans-serif" : "'Inter', sans-serif",
                      fontSize: scale.size,
                      fontWeight: parseInt(scale.weight),
                      lineHeight: scale.lh,
                      letterSpacing: scale.ls,
                      color: textColors.primary,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {scale.example}
                  </div>
                </div>
                {/* Specs row */}
                <div className="grid grid-cols-5 px-5 py-2" style={{ backgroundColor: i % 2 === 0 ? surfaces.surface : `${surfaces.surface}cc` }}>
                  <code style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400] }}>
                    --text-{scale.name}
                  </code>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary }}>{scale.size}</span>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary }}>{scale.lh}</span>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary }}>{scale.ls || '0'}</span>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: textColors.muted }}>{scale.tag}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Usage in context */}
      <div>
        <SectionHeader
          number="§ 03.3 — CONTEXTO"
          title="Tipografia em Contexto"
          subtitle="Exemplo completo de hierarquia tipográfica em uso."
        />
        <div className="rounded-2xl p-8" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: colors.ember[400], letterSpacing: '0.12em', marginBottom: 12 }}>
            ESTÚDIO CRIATIVO
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 40, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2, marginBottom: 12 }}>
            Criamos o futuro<br/>visual das marcas.
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: textColors.secondary, lineHeight: 1.7, marginBottom: 24, maxWidth: 500 }}>
            No Cebola Studios, cada projeto começa com escuta ativa e termina com execução impecável. Somos obsessionados com qualidade.
          </p>
          <div style={{ height: 1, backgroundColor: surfaces.border, marginBottom: 24 }} />
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: textColors.primary, letterSpacing: '-0.02em', marginBottom: 8 }}>
            Nosso Processo
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: textColors.secondary, lineHeight: 1.7, marginBottom: 16, maxWidth: 500 }}>
            Metodologia testada em centenas de projetos. Desde a descoberta até o entregável final, cada etapa é documentada e colaborativa.
          </p>
          <div style={{ backgroundColor: surfaces.surfaceElevated, borderRadius: 10, padding: 16, marginBottom: 16 }}>
            <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: colors.violet[300] }}>
              version: 1.0.0 · build: 2026.02.20
            </code>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: textColors.muted, lineHeight: 1.6 }}>
            Texto caption: Última atualização · Fev 2026 · Design System Cebola Studios
          </p>
        </div>
      </div>
    </div>
  );
}
