import { colors, surfaces, textColors, spacing, breakpoints } from '../tokens';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

const spacingTokens = [
  { token: '--space-1',  value: '4px',   name: 'xs',   desc: 'Micro espaço — entre ícone e label, entre badge items' },
  { token: '--space-2',  value: '8px',   name: 'sm',   desc: 'Pequeno — padding interno de badges, gap entre elementos inline' },
  { token: '--space-3',  value: '12px',  name: 'sm+',  desc: 'Gap entre itens de lista, margin entre parágrafos próximos' },
  { token: '--space-4',  value: '16px',  name: 'md',   desc: 'Base — padding de cards, gap de grid padrão, margin padrão' },
  { token: '--space-6',  value: '24px',  name: 'lg',   desc: 'Grande — seções internas, padding de painéis' },
  { token: '--space-8',  value: '32px',  name: 'xl',   desc: 'Extra grande — separação entre seções, margin de containers' },
  { token: '--space-10', value: '40px',  name: '2xl',  desc: 'Generoso — espaçamento vertical entre blocos de conteúdo' },
  { token: '--space-12', value: '48px',  name: '3xl',  desc: 'Amplo — altura de bottom navigation, tops bars' },
  { token: '--space-16', value: '64px',  name: '4xl',  desc: 'Hero sections, separação entre grupos principais' },
  { token: '--space-20', value: '80px',  name: '5xl',  desc: 'Espaçamento de página, seções principais (mobile)' },
  { token: '--space-24', value: '96px',  name: '6xl',  desc: 'Hero padding, separação máxima em desktop' },
  { token: '--space-32', value: '128px', name: '7xl',  desc: 'Centering máximo, seções de landing page' },
];

const grids = [
  {
    label: 'Mobile Android',
    sizes: ['360px', '390px', '412px'],
    columns: 4,
    gutter: '16px',
    margin: '16px',
    color: colors.ember[400],
    use: 'Smartphones Android — Pixel, Samsung Galaxy. Layout em 4 colunas, márgem mínima de 16dp.',
  },
  {
    label: 'Tablet',
    sizes: ['768px', '1024px'],
    columns: 8,
    gutter: '24px',
    margin: '24px',
    color: colors.violet[400],
    use: 'Tablets — iPad, Galaxy Tab. Layout em 8 colunas com gutters maiores para respiração.',
  },
  {
    label: 'Desktop',
    sizes: ['1280px', '1440px', '1920px'],
    columns: 12,
    gutter: '32px',
    margin: '80px',
    color: colors.violet[300],
    use: 'Web desktop. Layout em 12 colunas. Conteúdo max-width 1200px centralizado.',
  },
];

const bps = [
  { name: 'xs',         value: '360px',  desc: 'Smartphone pequeno (Android padrão)',   device: '📱' },
  { name: 'sm',         value: '390px',  desc: 'Smartphone médio (Pixel, iPhone 14)',    device: '📱' },
  { name: 'md',         value: '412px',  desc: 'Smartphone grande (Samsung Galaxy)',     device: '📱' },
  { name: 'tablet',     value: '768px',  desc: 'Tablet portrait',                        device: '📟' },
  { name: 'tablet-lg',  value: '1024px', desc: 'Tablet landscape / Small desktop',       device: '💻' },
  { name: 'desktop',    value: '1280px', desc: 'Desktop padrão',                         device: '🖥️' },
  { name: 'desktop-lg', value: '1440px', desc: 'Desktop largo (MacBook Pro, 4K)',        device: '🖥️' },
  { name: 'wide',       value: '1920px', desc: 'Tela ultra-wide',                        device: '🖥️' },
];

export function Spacing() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 04 — ESPAÇAMENTO & GRID"
        title="Espaçamento e Grid"
        subtitle="Sistema baseado em múltiplos de 4px. Toda distância entre elementos obedece essa escala, garantindo harmonia visual e consistência entre plataformas."
      />

      {/* Spacing Scale */}
      <div className="mb-12">
        <SectionHeader number="§ 04.1 — ESCALA" title="Escala de Espaçamento" subtitle="12 passos. Base: 4px. Nomenclatura por tokens CSS." />
        <div className="space-y-2">
          {spacingTokens.map(s => (
            <div
              key={s.token}
              className="flex items-center gap-4 p-3 rounded-xl group"
              style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}
            >
              {/* Visual bar */}
              <div className="flex items-center justify-end shrink-0" style={{ width: 140 }}>
                <div
                  style={{
                    height: 20,
                    width: parseInt(s.value),
                    maxWidth: 128,
                    backgroundColor: colors.violet[500],
                    borderRadius: 4,
                    opacity: 0.7,
                    transition: 'opacity 0.2s',
                  }}
                  className="group-hover:opacity-100"
                />
              </div>
              {/* Token */}
              <div style={{ minWidth: 120 }}>
                <code style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400] }}>
                  {s.token}
                </code>
              </div>
              {/* Value */}
              <div style={{ minWidth: 48 }}>
                <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: textColors.primary, fontWeight: 600 }}>
                  {s.value}
                </span>
              </div>
              {/* Name */}
              <div style={{ minWidth: 36 }}>
                <span style={{ fontSize: 11, color: textColors.muted }}>({s.name})</span>
              </div>
              {/* Description */}
              <div className="flex-1 hidden sm:block">
                <span style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.4 }}>{s.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Systems */}
      <div className="mb-12">
        <SectionHeader number="§ 04.2 — GRID" title="Sistemas de Grid" subtitle="Grid definitions para cada plataforma." />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {grids.map(grid => (
            <div key={grid.label} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
              {/* Grid visualization */}
              <div className="p-5" style={{ backgroundColor: surfaces.surface, borderBottom: `1px solid ${surfaces.border}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: grid.color, marginBottom: 10 }}>
                  {grid.sizes.join(' · ')}
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: textColors.primary, marginBottom: 12 }}>
                  {grid.label}
                </div>
                {/* Column visualization */}
                <div
                  className="flex gap-1 rounded-lg overflow-hidden"
                  style={{ height: 60, padding: '0 8px', backgroundColor: surfaces.surfaceElevated, alignItems: 'center' }}
                >
                  {Array.from({ length: Math.min(grid.columns, 12) }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded"
                      style={{
                        height: 40,
                        backgroundColor: `${grid.color}25`,
                        border: `1px solid ${grid.color}40`,
                      }}
                    />
                  ))}
                </div>
              </div>
              {/* Specs */}
              <div className="p-5" style={{ backgroundColor: surfaces.surface }}>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 3 }}>COLS</div>
                    <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: textColors.primary }}>{grid.columns}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 3 }}>GUTTER</div>
                    <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: textColors.primary }}>{grid.gutter}</div>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 3 }}>MARGIN</div>
                    <div style={{ fontSize: 20, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", color: textColors.primary }}>{grid.margin}</div>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.6 }}>{grid.use}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile specific */}
      <div className="mb-12">
        <SectionHeader number="§ 04.3 — ANDROID" title="Especificações Android (Material Design 3)" subtitle="Unidades em dp e sp, adaptadas à identidade Cebola Studios." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Touch targets */}
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: textColors.primary, marginBottom: 12 }}>
              Touch Targets
            </div>
            {[
              { label: 'Mínimo absoluto', size: 48, unit: 'dp', color: colors.jade[500] },
              { label: 'Recomendado', size: 56, unit: 'dp', color: colors.violet[400] },
              { label: 'Confortável', size: 64, unit: 'dp', color: colors.violet[300] },
            ].map(t => (
              <div key={t.label} className="flex items-center gap-4 mb-4">
                <div
                  style={{
                    width: t.size * 1.2, height: t.size * 0.6,
                    backgroundColor: `${t.color}20`,
                    border: `1px solid ${t.color}60`,
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: t.color }}>{t.size}dp</span>
                </div>
                <span style={{ fontSize: 12, color: textColors.secondary }}>{t.label}</span>
              </div>
            ))}
          </div>

          {/* Typography in sp */}
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: textColors.primary, marginBottom: 12 }}>
              Tipografia em SP
            </div>
            {[
              { style: 'Display Large', sp: '57sp', lh: '64sp', use: 'Títulos hero, screens principais' },
              { style: 'Headline Medium', sp: '28sp', lh: '36sp', use: 'Cabeçalhos de seção' },
              { style: 'Title Large', sp: '22sp', lh: '28sp', use: 'App bar title, dialogs' },
              { style: 'Body Large', sp: '16sp', lh: '24sp', use: 'Texto de corpo padrão' },
              { style: 'Body Small', sp: '12sp', lh: '16sp', use: 'Labels, captions' },
            ].map(t => (
              <div key={t.style} className="flex items-start gap-3 mb-3 pb-3" style={{ borderBottom: `1px solid ${surfaces.border}` }}>
                <div style={{ minWidth: 40 }}>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400] }}>{t.sp}</span>
                </div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: textColors.primary }}>{t.style}</div>
                  <div style={{ fontSize: 11, color: textColors.muted }}>{t.use}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Breakpoints */}
      <div>
        <SectionHeader number="§ 04.4 — BREAKPOINTS" title="Breakpoints Nomeados" />
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          <div className="grid grid-cols-4 px-5 py-3" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
            {['', 'Breakpoint', 'Valor', 'Dispositivo'].map(h => (
              <div key={h} style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>{h}</div>
            ))}
          </div>
          {bps.map((bp, i) => (
            <div
              key={bp.name}
              className="grid grid-cols-4 items-center px-5 py-3"
              style={{ backgroundColor: i % 2 === 0 ? surfaces.surface : `${surfaces.surface}aa`, borderBottom: `1px solid ${surfaces.border}` }}
            >
              <div style={{ fontSize: 24 }}>{bp.device}</div>
              <code style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400] }}>
                {bp.name}
              </code>
              <span style={{ fontSize: 13, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600, color: textColors.primary }}>
                {bp.value}
              </span>
              <span style={{ fontSize: 12, color: textColors.muted }}>{bp.desc}</span>
            </div>
          ))}
        </div>

        {/* CSS snippet */}
        <div className="mt-6 rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
            {['#EF4444', '#F59E0B', '#22C55E'].map(c => <div key={c} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />)}
            <span style={{ fontSize: 12, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace", marginLeft: 8 }}>breakpoints.css</span>
          </div>
          <pre className="p-5 overflow-x-auto" style={{ backgroundColor: surfaces.surface, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, lineHeight: 1.7, color: textColors.secondary }}>
{`/* Cebola Studios Breakpoints */
:root {
  --bp-xs:         360px;  /* Mobile Android S   */
  --bp-sm:         390px;  /* Mobile Android M   */
  --bp-md:         412px;  /* Mobile Android L   */
  --bp-tablet:     768px;  /* Tablet portrait    */
  --bp-tablet-lg:  1024px; /* Tablet landscape   */
  --bp-desktop:    1280px; /* Desktop padrão     */
  --bp-desktop-lg: 1440px; /* Desktop largo      */
  --bp-wide:       1920px; /* Ultra-wide         */
}

/* CSS Media Queries */
@media (min-width: 360px)  { /* xs  — mobile-first base    */ }
@media (min-width: 768px)  { /* tablet — layout expandido  */ }
@media (min-width: 1024px) { /* tablet-lg — sidebar ativa  */ }
@media (min-width: 1280px) { /* desktop — 12 colunas       */ }
@media (min-width: 1440px) { /* desktop-lg — max width     */ }`}
          </pre>
        </div>
      </div>
    </div>
  );
}
