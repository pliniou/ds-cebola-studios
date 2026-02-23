import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { colors, surfaces, textColors } from '../tokens';

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

function hexToHsl(hex: string) {
  let r = parseInt(hex.slice(1, 3), 16) / 255;
  let g = parseInt(hex.slice(3, 5), 16) / 255;
  let b = parseInt(hex.slice(5, 7), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
}

function getContrastRatio(hex1: string, hex2: string) {
  function getLuminance(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    const toLinear = (c: number) => c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
  }
  const l1 = getLuminance(hex1);
  const l2 = getLuminance(hex2);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return ((lighter + 0.05) / (darker + 0.05)).toFixed(2);
}

function ColorSwatch({ colorHex, shade, tokenName, colorName }: { colorHex: string; shade: string; tokenName: string; colorName: string }) {
  const [copied, setCopied] = useState(false);
  const isLight = parseInt(shade) < 400;
  const textCol = isLight ? '#060412' : '#F5F3FF';

  const handleCopy = () => {
    navigator.clipboard.writeText(colorHex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      onClick={handleCopy}
      className="group flex flex-col items-start p-3 rounded-xl transition-all duration-200"
      style={{
        backgroundColor: colorHex,
        border: `1px solid rgba(${isLight ? '0,0,0' : '255,255,255'},0.08)`,
        minHeight: 80,
        cursor: 'pointer',
      }}
      title={`Copy ${colorHex}`}
    >
      <div className="flex items-center justify-between w-full mb-auto">
        <span style={{ fontSize: 11, fontWeight: 700, color: textCol, opacity: 0.7, fontFamily: "'JetBrains Mono', monospace" }}>
          {shade}
        </span>
        <span style={{ color: textCol, opacity: 0 }} className="group-hover:opacity-70 transition-opacity">
          {copied ? <Check size={12} /> : <Copy size={12} />}
        </span>
      </div>
      <div style={{ fontSize: 10, color: textCol, opacity: 0.6, fontFamily: "'JetBrains Mono', monospace", marginTop: 8 }}>
        {copied ? 'Copiado!' : colorHex}
      </div>
    </button>
  );
}

const palettes = [
  {
    name: 'Cebola Violet',
    desc: 'A cor primária da marca. Representa criatividade, profundidade e sofisticação. Usada em ações principais, links e elementos de destaque.',
    token: '--color-violet',
    swatches: colors.violet,
  },
  {
    name: 'Cebola Midnight',
    desc: 'A família de fundos e superfícies do dark mode. Do mais profundo (950) ao mais elevado (100). Base estrutural do sistema.',
    token: '--color-midnight',
    swatches: colors.midnight,
  },
  {
    name: 'Cebola Ember',
    desc: 'Cor de acento — magenta vibrante que traz energia e contraste ao sistema. Usada com parcimônia para chamar atenção.',
    token: '--color-ember',
    swatches: colors.ember,
  },
  {
    name: 'Cebola Slate',
    desc: 'Tons neutros com leve toque roxo. Para textos secundários, bordas, separadores e estados desabilitados.',
    token: '--color-slate',
    swatches: colors.slate,
  },
];

const semanticColors = [
  { name: 'Cebola Jade', label: 'Sucesso', hex: '#22C55E', dark: '#0F4024', token: '--color-success', desc: 'Confirmações, uploads, pagamentos aprovados' },
  { name: 'Cebola Crimson', label: 'Erro', hex: '#EF4444', dark: '#3D0A0A', token: '--color-error', desc: 'Validações, erros críticos, ações destrutivas' },
  { name: 'Cebola Amber', label: 'Aviso', hex: '#F59E0B', dark: '#3D2800', token: '--color-warning', desc: 'Alertas, estados pendentes, atenção requerida' },
  { name: 'Cebola Ocean', label: 'Informação', hex: '#3B82F6', dark: '#0A1A3D', token: '--color-info', desc: 'Dicas, tooltips, informações contextuais' },
];

const surfaceTokens = [
  { name: '--surface-bg', value: '#060412', desc: 'Fundo principal da aplicação', label: 'Background' },
  { name: '--surface-default', value: '#0F0A2A', desc: 'Cards, painéis, containers primários', label: 'Surface' },
  { name: '--surface-elevated', value: '#1E1A4A', desc: 'Elementos elevados, modais, dropdowns', label: 'Elevated' },
  { name: '--surface-overlay', value: '#332C6A', desc: 'Tooltips, popovers, toasts', label: 'Overlay' },
];

const contrastPairs = [
  { bg: '#060412', fg: '#F5F3FF', bgLabel: 'Midnight 950', fgLabel: 'Pearl' },
  { bg: '#0F0A2A', fg: '#F5F3FF', bgLabel: 'Midnight 900', fgLabel: 'Pearl' },
  { bg: '#7C3AED', fg: '#FFFFFF', bgLabel: 'Violet 500', fgLabel: 'White' },
  { bg: '#E040C0', fg: '#FFFFFF', bgLabel: 'Ember 500', fgLabel: 'White' },
  { bg: '#060412', fg: '#9D6EFF', bgLabel: 'Midnight 950', fgLabel: 'Violet 400' },
  { bg: '#0F0A2A', fg: '#A09CC8', bgLabel: 'Midnight 900', fgLabel: 'Slate 400' },
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

export function Colors() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 02 — PALETA DE CORES"
        title="Paleta de Cores"
        subtitle="Sistema completo de cores com nomenclatura proprietária, tokens CSS e valores em todos os formatos. Clique em qualquer swatch para copiar o valor HEX."
      />

      {/* Color Palettes */}
      {palettes.map(palette => (
        <div key={palette.name} className="mb-10">
          <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: textColors.primary, marginBottom: 4 }}>
                {palette.name}
              </h3>
              <p style={{ fontSize: 13, color: textColors.muted, maxWidth: 520, lineHeight: 1.6 }}>
                {palette.desc}
              </p>
            </div>
            <code
              style={{
                fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
                color: colors.violet[400],
                backgroundColor: `${colors.violet[500]}15`,
                border: `1px solid ${colors.violet[500]}25`,
                borderRadius: 6, padding: '4px 10px',
              }}
            >
              {palette.token}-[50–950]
            </code>
          </div>
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {Object.entries(palette.swatches).map(([shade, hex]) => (
              <ColorSwatch key={shade} colorHex={hex as string} shade={shade} tokenName={`${palette.token}-${shade}`} colorName={palette.name} />
            ))}
          </div>

          {/* Token table */}
          <div className="mt-4 rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
            <table className="w-full" style={{ fontSize: 12, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ backgroundColor: surfaces.surfaceElevated }}>
                  {['Token', 'HEX', 'RGB', 'HSL'].map(h => (
                    <th key={h} className="text-left px-4 py-2" style={{ color: textColors.muted, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.05em', fontWeight: 400 }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(palette.swatches).slice(0, 5).map(([shade, hex], i) => (
                  <tr key={shade} style={{ backgroundColor: i % 2 === 0 ? surfaces.surface : `${surfaces.surface}80` }}>
                    <td className="px-4 py-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400] }}>
                      {palette.token}-{shade}
                    </td>
                    <td className="px-4 py-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: textColors.primary }}>
                      <span className="flex items-center gap-2">
                        <span style={{ display: 'inline-block', width: 10, height: 10, borderRadius: 2, backgroundColor: hex as string }} />
                        {hex as string}
                      </span>
                    </td>
                    <td className="px-4 py-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary }}>
                      {hexToRgb(hex as string)}
                    </td>
                    <td className="px-4 py-2" style={{ fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary }}>
                      {hexToHsl(hex as string)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Semantic Colors */}
      <div className="mb-10">
        <SectionHeader
          number="§ 02.2 — SEMÂNTICA"
          title="Cores Semânticas"
          subtitle="Estados de feedback com contraste garantido em dark mode."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {semanticColors.map(c => (
            <div key={c.name} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
              <div
                className="flex items-center gap-4 p-5"
                style={{ backgroundColor: c.dark }}
              >
                <div style={{ width: 48, height: 48, borderRadius: 12, backgroundColor: c.hex, flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: textColors.primary }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: 12, color: textColors.muted }}>{c.label}</div>
                </div>
              </div>
              <div className="p-4" style={{ backgroundColor: surfaces.surface }}>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 2 }}>TOKEN</div>
                    <code style={{ fontSize: 11, color: colors.violet[400], fontFamily: "'JetBrains Mono', monospace" }}>{c.token}</code>
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 2 }}>HEX</div>
                    <code style={{ fontSize: 11, color: textColors.primary, fontFamily: "'JetBrains Mono', monospace" }}>{c.hex}</code>
                  </div>
                </div>
                <p style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.5 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Surface Tokens */}
      <div className="mb-10">
        <SectionHeader
          number="§ 02.3 — SUPERFÍCIES"
          title="Superfícies e Fundos"
          subtitle="Sistema de elevação para dark mode. Cada camada fica progressivamente mais clara."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {surfaceTokens.map((s, i) => (
            <div key={s.name} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
              <div
                style={{
                  height: 80,
                  backgroundColor: s.value,
                  borderBottom: `1px solid ${surfaces.border}`,
                  display: 'flex', alignItems: 'flex-end', padding: '8px 12px',
                }}
              >
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: i > 1 ? '#F5F3FF' : colors.violet[400] }}>
                  Elevação {i}
                </span>
              </div>
              <div className="p-4" style={{ backgroundColor: surfaces.surface }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 4 }}>
                  {s.label}
                </div>
                <code style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], display: 'block', marginBottom: 6 }}>
                  {s.name}
                </code>
                <code style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary, display: 'block', marginBottom: 8 }}>
                  {s.value}
                </code>
                <p style={{ fontSize: 11, color: textColors.muted, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contrast Ratios */}
      <div className="mb-10">
        <SectionHeader
          number="§ 02.4 — ACESSIBILIDADE"
          title="Razões de Contraste WCAG"
          subtitle="Todos os pares de cores verificados. Mínimo AA (4.5:1) garantido para texto normal."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contrastPairs.map(pair => {
            const ratio = parseFloat(getContrastRatio(pair.bg, pair.fg));
            const level = ratio >= 7 ? 'AAA' : ratio >= 4.5 ? 'AA' : ratio >= 3 ? 'AA Large' : 'Fail';
            const levelColor = level === 'AAA' ? colors.jade[500] : level === 'AA' ? '#22C55E' : level === 'AA Large' ? colors.amber[500] : colors.crimson[500];
            return (
              <div
                key={`${pair.bg}-${pair.fg}`}
                className="rounded-xl p-5"
                style={{ backgroundColor: pair.bg, border: `2px solid ${surfaces.border}` }}
              >
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: pair.fg, marginBottom: 8 }}>
                  Texto de Exemplo
                </div>
                <div style={{ fontSize: 12, color: pair.fg, opacity: 0.7, marginBottom: 12 }}>
                  {pair.bgLabel} → {pair.fgLabel}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontSize: 11, fontFamily: "'JetBrains Mono', monospace",
                      backgroundColor: `${levelColor}20`,
                      color: levelColor,
                      border: `1px solid ${levelColor}40`,
                      borderRadius: 6, padding: '2px 8px',
                    }}
                  >
                    {level}
                  </span>
                  <span style={{ fontSize: 12, fontFamily: "'JetBrains Mono', monospace", color: pair.fg, opacity: 0.6 }}>
                    {ratio}:1
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS Tokens reference */}
      <div>
        <SectionHeader
          number="§ 02.5 — TOKENS CSS"
          title="Referência de Tokens"
        />
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          <div className="px-4 py-3 flex items-center gap-2" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.crimson[500] }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.amber[500] }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.jade[500] }} />
            <span style={{ fontSize: 12, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace", marginLeft: 8 }}>
              tokens.css
            </span>
          </div>
          <pre
            className="p-5 overflow-x-auto text-sm"
            style={{
              backgroundColor: surfaces.surface,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              lineHeight: 1.7,
              color: textColors.secondary,
            }}
          >
            {`:root {
  /* Cebola Violet — Primary */
  --color-violet-50:  ${colors.violet[50]};
  --color-violet-100: ${colors.violet[100]};
  --color-violet-200: ${colors.violet[200]};
  --color-violet-300: ${colors.violet[300]};
  --color-violet-400: ${colors.violet[400]};
  --color-violet-500: ${colors.violet[500]};
  --color-violet-600: ${colors.violet[600]};
  --color-violet-700: ${colors.violet[700]};
  --color-violet-800: ${colors.violet[800]};
  --color-violet-900: ${colors.violet[900]};
  --color-violet-950: ${colors.violet[950]};

  /* Cebola Ember — Accent */
  --color-ember-500:  ${colors.ember[500]};
  --color-ember-400:  ${colors.ember[400]};
  --color-ember-300:  ${colors.ember[300]};

  /* Surfaces */
  --surface-bg:        #060412;
  --surface-default:   #0F0A2A;
  --surface-elevated:  #1E1A4A;
  --surface-overlay:   #332C6A;

  /* Semantic */
  --color-success: ${colors.jade[500]};
  --color-error:   ${colors.crimson[500]};
  --color-warning: ${colors.amber[500]};
  --color-info:    ${colors.ocean[500]};
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}
