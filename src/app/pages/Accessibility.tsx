import { colors, surfaces, textColors } from '../tokens';
import { Eye, Keyboard, Volume2, MousePointer, Smartphone, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

function ContrastDemo({ bg, fg, bgLabel, fgLabel, ratio, level }: {
  bg: string; fg: string; bgLabel: string; fgLabel: string; ratio: string; level: string;
}) {
  const levelColor = level === 'AAA' ? colors.jade[400] : level === 'AA' ? '#22C55E' : colors.amber[400];
  return (
    <div style={{ backgroundColor: bg, borderRadius: 12, overflow: 'hidden', border: `1px solid ${surfaces.border}` }}>
      <div style={{ padding: '20px 20px 12px' }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: fg, marginBottom: 4 }}>
          Texto de Exibição Aa
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: fg, opacity: 0.8 }}>
          Texto de corpo e interface.
        </div>
      </div>
      <div style={{ padding: '10px 20px', backgroundColor: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 11, color: fg, opacity: 0.6, fontFamily: "'Inter', sans-serif" }}>
          {bgLabel} → {fgLabel}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: fg, opacity: 0.5 }}>{ratio}:1</span>
          <span style={{
            fontSize: 10, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
            backgroundColor: `${levelColor}25`, color: levelColor,
            border: `1px solid ${levelColor}50`, borderRadius: 4, padding: '2px 6px',
          }}>{level}</span>
        </div>
      </div>
    </div>
  );
}

const contrastExamples = [
  { bg: '#060412', fg: '#F5F3FF', bgLabel: 'Midnight 950', fgLabel: 'Pearl', ratio: '19.8', level: 'AAA' },
  { bg: '#0F0A2A', fg: '#F5F3FF', bgLabel: 'Midnight 900', fgLabel: 'Pearl', ratio: '16.3', level: 'AAA' },
  { bg: '#0F0A2A', fg: '#C5C2E0', bgLabel: 'Midnight 900', fgLabel: 'Slate 300', ratio: '9.4', level: 'AAA' },
  { bg: '#1E1A4A', fg: '#F5F3FF', bgLabel: 'Midnight 800', fgLabel: 'Pearl', ratio: '11.2', level: 'AAA' },
  { bg: '#060412', fg: '#9D6EFF', bgLabel: 'Midnight 950', fgLabel: 'Violet 400', ratio: '6.1', level: 'AA' },
  { bg: '#7C3AED', fg: '#FFFFFF', bgLabel: 'Violet 500', fgLabel: 'White', ratio: '5.2', level: 'AA' },
];

const ariaRoles = [
  { component: 'Botão', role: 'role="button"', attrs: 'aria-label, aria-disabled, aria-pressed', desc: 'Buttons semânticos, estados comunicados via aria.' },
  { component: 'Input', role: 'role="textbox"', attrs: 'aria-label, aria-invalid, aria-describedby', desc: 'Sempre associado a label. Erros comunicados via aria-live.' },
  { component: 'Modal', role: 'role="dialog"', attrs: 'aria-modal, aria-labelledby, aria-describedby', desc: 'Focus trapping ativo. Foco retorna ao trigger após fechar.' },
  { component: 'Navegação', role: 'role="navigation"', attrs: 'aria-label="principal"', desc: 'Cada nav com label único. Links sem target em branco inesperado.' },
  { component: 'Alert', role: 'role="alert"', attrs: 'aria-live="assertive"', desc: 'Para mensagens urgentes. Lidas imediatamente pelo leitor.' },
  { component: 'Status', role: 'role="status"', attrs: 'aria-live="polite"', desc: 'Para mensagens de progresso. Lidas quando possível.' },
  { component: 'Tab Panel', role: 'role="tabpanel"', attrs: 'aria-labelledby, tabindex', desc: 'Tabs com keyboard support: arrow keys, Enter, Space.' },
  { component: 'Imagem', role: '— (img)', attrs: 'alt="descrição"', desc: 'Imagens decorativas: alt="". Informativas: alt descritivo e específico.' },
];

const keyboardShortcuts = [
  { key: 'Tab', action: 'Mover para próximo elemento focável' },
  { key: 'Shift + Tab', action: 'Mover para elemento focável anterior' },
  { key: 'Enter / Space', action: 'Ativar botão ou link selecionado' },
  { key: 'Esc', action: 'Fechar modal, dropdown ou popover' },
  { key: '↑ ↓', action: 'Navegar em listas, menus e selects' },
  { key: '← →', action: 'Navegar em tabs e carousels horizontais' },
  { key: 'Home / End', action: 'Ir para primeiro / último item da lista' },
];

const checklistItems = [
  { cat: 'Contraste', pass: true, item: 'Todas as combinações de texto/fundo ≥ 4.5:1 (AA)' },
  { cat: 'Contraste', pass: true, item: 'Texto grande (24px+) ≥ 3:1' },
  { cat: 'Contraste', pass: true, item: 'Ícones e elementos visuais informativos ≥ 3:1' },
  { cat: 'Teclado', pass: true, item: 'Todos os elementos interativos focáveis via Tab' },
  { cat: 'Teclado', pass: true, item: 'Foco visível com anel customizado (violet ring 3px)' },
  { cat: 'Teclado', pass: true, item: 'Modais com focus trap ativo' },
  { cat: 'Semântica', pass: true, item: 'Hierarquia de headings correta (h1→h2→h3)' },
  { cat: 'Semântica', pass: true, item: 'Labels explícitos em todos os inputs' },
  { cat: 'Semântica', pass: true, item: 'Botões com aria-label quando sem texto visível' },
  { cat: 'Motion', pass: true, item: 'prefers-reduced-motion respeitado em todas as animações' },
  { cat: 'Cores', pass: false, item: 'Informação não depende APENAS de cor (adicionar ícone/texto)' },
  { cat: 'Touch', pass: true, item: 'Área de toque mínima 48×48dp em mobile' },
];

export function Accessibility() {
  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 07 — ACESSIBILIDADE"
        title="Guia de Acessibilidade"
        subtitle="Acessibilidade não é opcional — é fundação. O design system da Cebola Studios é construído para ser usável por todos, independente de capacidades ou tecnologias assistivas."
      />

      {/* Pillars */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { icon: Eye, title: 'Perceptível', desc: 'Contraste WCAG AA em todo conteúdo. Não depender apenas de cor.', color: colors.violet[400] },
          { icon: Keyboard, title: 'Operável', desc: 'Tudo navegável por teclado. Focus visível e lógico.', color: colors.ember[400] },
          { icon: Volume2, title: 'Compreensível', desc: 'Interface previsível. Labels claros. Erros com sugestão de correção.', color: colors.violet[300] },
          { icon: Smartphone, title: 'Robusto', desc: 'Semântica HTML correta. ARIA quando necessário. SSR compatível.', color: colors.ember[300] },
        ].map(p => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="rounded-xl p-5" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
              <Icon size={20} style={{ color: p.color, marginBottom: 10 }} strokeWidth={1.5} />
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, color: textColors.primary, marginBottom: 6 }}>{p.title}</div>
              <p style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Contrast Ratios */}
      <div className="mb-12">
        <SectionHeader number="§ 07.1 — CONTRASTE" title="Exemplos de Contraste WCAG" subtitle="Todos os pares de cores do sistema verificados e aprovados." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contrastExamples.map((ex, i) => <ContrastDemo key={i} {...ex} />)}
        </div>

        <div className="mt-6 rounded-xl p-5" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: textColors.primary, marginBottom: 12 }}>
            Níveis WCAG explicados
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { level: 'A', ratio: '≥ 3:1', desc: 'Mínimo para texto grande (18px regular ou 14px bold)', color: colors.amber[400] },
              { level: 'AA', ratio: '≥ 4.5:1', desc: 'Padrão legal em muitos países. Mínimo para Cebola Studios.', color: colors.jade[400] },
              { level: 'AAA', ratio: '≥ 7:1', desc: 'Máximo contraste. Nosso objetivo para texto de corpo.', color: colors.violet[300] },
            ].map(l => (
              <div key={l.level} className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: surfaces.surfaceElevated }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: `${l.color}20`, border: `1px solid ${l.color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, fontWeight: 700, color: l.color }}>{l.level}</span>
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary }}>{l.ratio}</div>
                  <div style={{ fontSize: 11, color: textColors.muted, lineHeight: 1.4 }}>{l.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Focus Styles */}
      <div className="mb-12">
        <SectionHeader number="§ 07.2 — FOCO" title="Estilos de Foco" subtitle="O foco deve ser sempre visível e distinto. Nunca remover outline sem substituí-lo." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 12 }}>Botão em Foco</div>
            <button style={{
              padding: '10px 20px', borderRadius: 8, fontSize: 14,
              backgroundColor: colors.violet[500], color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600,
              outline: `3px solid ${colors.violet[500]}`,
              outlineOffset: 3,
              boxShadow: `0 0 0 6px ${colors.violet[500]}25`,
            }}>
              Ação Principal
            </button>
            <div style={{ marginTop: 12, fontSize: 12, color: textColors.muted }}>
              <code style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], fontSize: 11 }}>
                outline: 3px solid violet-500;<br />
                outline-offset: 3px;<br />
                box-shadow: 0 0 0 6px violet-500/25;
              </code>
            </div>
          </div>
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 12 }}>Input em Foco</div>
            <input
              type="text"
              placeholder="Digite aqui..."
              style={{
                width: '100%', padding: '10px 14px',
                backgroundColor: surfaces.surfaceElevated,
                border: `1.5px solid ${colors.violet[500]}`,
                borderRadius: 8, color: textColors.primary,
                fontFamily: "'Inter', sans-serif", fontSize: 14,
                outline: 'none',
                boxShadow: `0 0 0 3px ${colors.violet[500]}30`,
              }}
              readOnly
            />
            <div style={{ marginTop: 12, fontSize: 12, color: textColors.muted }}>
              <code style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], fontSize: 11 }}>
                border: 1.5px solid violet-500;<br />
                box-shadow: 0 0 0 3px violet/30;
              </code>
            </div>
          </div>
          <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 12 }}>Link em Foco</div>
            <a href="#" style={{
              color: colors.violet[300], textDecoration: 'underline',
              outline: `2px solid ${colors.violet[400]}`,
              outlineOffset: 4, borderRadius: 3, padding: '2px 4px',
              fontFamily: "'Inter', sans-serif", fontSize: 14,
            }} onClick={e => e.preventDefault()}>
              Link de Exemplo
            </a>
            <div style={{ marginTop: 12, fontSize: 12, color: textColors.muted }}>
              <code style={{ fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], fontSize: 11 }}>
                outline: 2px solid violet-400;<br />
                outline-offset: 4px;<br />
                border-radius: 3px;
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Keyboard Navigation */}
      <div className="mb-12">
        <SectionHeader number="§ 07.3 — TECLADO" title="Navegação por Teclado" />
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          <div className="grid grid-cols-2 px-5 py-3" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
            {['Tecla', 'Ação'].map(h => (
              <div key={h} style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.08em' }}>{h}</div>
            ))}
          </div>
          {keyboardShortcuts.map((s, i) => (
            <div key={i} className="grid grid-cols-2 items-center px-5 py-3" style={{ backgroundColor: i % 2 === 0 ? surfaces.surface : `${surfaces.surface}99`, borderBottom: `1px solid ${surfaces.border}` }}>
              <div>
                <kbd style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  backgroundColor: surfaces.surfaceElevated,
                  border: `1px solid ${surfaces.border}`,
                  borderBottom: `3px solid ${colors.violet[700]}`,
                  borderRadius: 5, padding: '3px 8px', color: textColors.primary,
                  boxShadow: 'none',
                }}>
                  {s.key}
                </kbd>
              </div>
              <span style={{ fontSize: 13, color: textColors.secondary }}>{s.action}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ARIA Roles */}
      <div className="mb-12">
        <SectionHeader number="§ 07.4 — ARIA" title="Roles e Atributos ARIA" subtitle="ARIA como complemento à semântica HTML — nunca substituto." />
        <div className="space-y-2">
          {ariaRoles.map(role => (
            <div key={role.component} className="rounded-xl p-4" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
              <div className="flex flex-wrap gap-3 items-start">
                <div style={{ minWidth: 100 }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary }}>{role.component}</div>
                </div>
                <code style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], backgroundColor: `${colors.violet[500]}10`, border: `1px solid ${colors.violet[500]}20`, borderRadius: 5, padding: '2px 8px' }}>
                  {role.role}
                </code>
                <code style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: colors.ember[400], backgroundColor: `${colors.ember[500]}10`, border: `1px solid ${colors.ember[500]}20`, borderRadius: 5, padding: '2px 8px' }}>
                  {role.attrs}
                </code>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <p style={{ fontSize: 12, color: textColors.muted, lineHeight: 1.5 }}>{role.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* A11y Checklist */}
      <div>
        <SectionHeader number="§ 07.5 — CHECKLIST" title="Checklist de Acessibilidade" />
        <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
          {['Contraste', 'Teclado', 'Semântica', 'Motion', 'Cores', 'Touch'].map(cat => {
            const items = checklistItems.filter(i => i.cat === cat);
            return (
              <div key={cat} style={{ borderBottom: `1px solid ${surfaces.border}` }}>
                <div className="px-5 py-2" style={{ backgroundColor: surfaces.surfaceElevated }}>
                  <span style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: textColors.muted, letterSpacing: '0.1em' }}>
                    {cat.toUpperCase()}
                  </span>
                </div>
                {items.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 px-5 py-3" style={{ backgroundColor: surfaces.surface, borderBottom: i < items.length - 1 ? `1px solid ${surfaces.border}` : 'none' }}>
                    {item.pass
                      ? <CheckCircle size={16} style={{ color: colors.jade[500], flexShrink: 0 }} />
                      : <AlertTriangle size={16} style={{ color: colors.amber[500], flexShrink: 0 }} />
                    }
                    <span style={{ fontSize: 13, color: item.pass ? textColors.secondary : colors.amber[300] }}>
                      {item.item}
                    </span>
                    <span style={{
                      marginLeft: 'auto', fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                      padding: '2px 8px', borderRadius: 4,
                      backgroundColor: item.pass ? `${colors.jade[500]}15` : `${colors.amber[500]}15`,
                      color: item.pass ? colors.jade[400] : colors.amber[400],
                      border: `1px solid ${item.pass ? colors.jade[500] : colors.amber[500]}25`,
                      flexShrink: 0,
                    }}>
                      {item.pass ? 'PASS' : 'REVIEW'}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
