import { useState } from 'react';
import { Check, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { colors, surfaces, textColors } from '../tokens';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

type ChecklistItem = { id: string; text: string; priority: 'high' | 'medium' | 'low'; note?: string };
type ChecklistCategory = { id: string; label: string; icon: string; color: string; items: ChecklistItem[] };

const checklistData: ChecklistCategory[] = [
  {
    id: 'foundations',
    label: 'Fundações do Design',
    icon: '🏗️',
    color: colors.violet[400],
    items: [
      { id: 'f1', text: 'Paleta de cores importada como tokens CSS (--color-violet-*, --color-ember-*)', priority: 'high' },
      { id: 'f2', text: 'Fontes Space Grotesk, Inter e JetBrains Mono importadas do Google Fonts', priority: 'high' },
      { id: 'f3', text: 'Sistema de espaçamento baseado em múltiplos de 4px aplicado', priority: 'high' },
      { id: 'f4', text: 'Dark mode como padrão, com light mode documentado', priority: 'high' },
      { id: 'f5', text: 'Border-radius consistente usando tokens (--radius-sm/md/lg/xl)', priority: 'medium' },
      { id: 'f6', text: 'Sistema de sombras alinhado com elevação de superfície', priority: 'medium' },
    ],
  },
  {
    id: 'colors',
    label: 'Uso de Cores',
    icon: '🎨',
    color: colors.ember[400],
    items: [
      { id: 'c1', text: 'Cebola Violet 500 como cor primária de ações e CTAs', priority: 'high' },
      { id: 'c2', text: 'Cebola Ember apenas como acento — máximo 10% da interface', priority: 'high' },
      { id: 'c3', text: 'Cores semânticas corretas: jade (sucesso), crimson (erro), amber (aviso)', priority: 'high' },
      { id: 'c4', text: 'Nunca usar cor como único indicador de estado — sempre + ícone/texto', priority: 'high', note: 'WCAG 1.4.1' },
      { id: 'c5', text: 'Contraste mínimo 4.5:1 (AA) para todo texto em interface', priority: 'high', note: 'WCAG 1.4.3' },
      { id: 'c6', text: 'Gradientes apenas em elementos decorativos, nunca em texto funcional', priority: 'medium' },
      { id: 'c7', text: 'Backgrounds seguem hierarquia: 950 → 900 → 800 → 700 (dark mode)', priority: 'medium' },
    ],
  },
  {
    id: 'typography',
    label: 'Tipografia',
    icon: '🔤',
    color: colors.violet[300],
    items: [
      { id: 't1', text: 'Space Grotesk exclusivamente para H1-H4, botões e navegação', priority: 'high' },
      { id: 't2', text: 'Inter para todo o corpo de texto e conteúdo de interface', priority: 'high' },
      { id: 't3', text: 'JetBrains Mono para código, tokens, IDs e valores técnicos', priority: 'medium' },
      { id: 't4', text: 'Hierarquia de headings correta (H1 → H2 → H3, sem pular)', priority: 'high', note: 'SEO + A11y' },
      { id: 't5', text: 'Tamanho mínimo de texto: 12px (caption), 14px para interface', priority: 'high' },
      { id: 't6', text: 'Line-height de corpo ≥ 1.6 para legibilidade confortável', priority: 'medium' },
      { id: 't7', text: 'Letter-spacing negativo apenas em headings grandes (24px+)', priority: 'low' },
    ],
  },
  {
    id: 'components',
    label: 'Componentes',
    icon: '🧩',
    color: colors.ember[300],
    items: [
      { id: 'co1', text: 'Todos os botões com estados: normal, hover, focus, active, disabled, loading', priority: 'high' },
      { id: 'co2', text: 'Inputs com estados: default, focus, error (com msg), success, disabled', priority: 'high' },
      { id: 'co3', text: 'Cards com sistema de elevação (0-3) usando tokens de sombra', priority: 'medium' },
      { id: 'co4', text: 'Bottom navigation Android com mínimo 5 items, touch target 48dp', priority: 'high' },
      { id: 'co5', text: 'Modais com focus trap, Esc para fechar, aria-modal="true"', priority: 'high', note: 'WCAG 2.4.3' },
      { id: 'co6', text: 'Toasts com duração máxima 5s e opção de fechar manualmente', priority: 'medium' },
      { id: 'co7', text: 'Ícones Lucide, outline style, strokeWidth 1.5, tamanho mínimo 16px', priority: 'medium' },
      { id: 'co8', text: 'Todos os componentes responsivos — testados em 360px mínimo', priority: 'high' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Android',
    icon: '📱',
    color: colors.violet[400],
    items: [
      { id: 'm1', text: 'Touch targets mínimos de 48×48dp em todos os elementos interativos', priority: 'high', note: 'Material Design 3' },
      { id: 'm2', text: 'Tipografia em sp (scale-independent pixels), não px fixo', priority: 'high' },
      { id: 'm3', text: 'Bottom sheet com handle visual e suporte a swipe-to-dismiss', priority: 'medium' },
      { id: 'm4', text: 'Navegação com suporte a back gesture (não bloquear gesto do sistema)', priority: 'high' },
      { id: 'm5', text: 'Safe area respeitada (status bar + navigation bar)', priority: 'high' },
      { id: 'm6', text: 'Teclado virtual não sobrepõe campos ativos (adjustResize/adjustPan)', priority: 'high' },
      { id: 'm7', text: 'Cores testadas em light e dark mode no Android', priority: 'medium' },
    ],
  },
  {
    id: 'web',
    label: 'Web / Desktop',
    icon: '🖥️',
    color: colors.ember[400],
    items: [
      { id: 'w1', text: 'Breakpoints implementados: 360, 768, 1024, 1280, 1440px', priority: 'high' },
      { id: 'w2', text: 'Max-width de conteúdo: 1200px centrado em viewports maiores', priority: 'medium' },
      { id: 'w3', text: 'Hover states em todos os elementos interativos (cursor: pointer)', priority: 'high' },
      { id: 'w4', text: 'Scrollbar customizada alinhada à paleta (violet sobre midnight)', priority: 'low' },
      { id: 'w5', text: 'CSS prefers-color-scheme implementado para alternância automática', priority: 'medium' },
      { id: 'w6', text: 'Fontes com fallbacks definidos: sans-serif, monospace', priority: 'medium' },
      { id: 'w7', text: 'CSS Grid e Flexbox para layouts — não tabelas ou floats', priority: 'high' },
    ],
  },
  {
    id: 'accessibility',
    label: 'Acessibilidade',
    icon: '♿',
    color: colors.jade[500],
    items: [
      { id: 'a1', text: 'Navegação completa por teclado testada manualmente', priority: 'high' },
      { id: 'a2', text: 'Foco visível em todos os estados (não outline: none sem alternativa)', priority: 'high', note: 'WCAG 2.4.11' },
      { id: 'a3', text: 'Screen reader testado (NVDA/JAWS no Windows, VoiceOver no Mac/iOS)', priority: 'high' },
      { id: 'a4', text: 'prefers-reduced-motion reduz ou desativa todas as animações', priority: 'high', note: 'WCAG 2.3.3' },
      { id: 'a5', text: 'alt text significativo em todas as imagens informativas', priority: 'high', note: 'WCAG 1.1.1' },
      { id: 'a6', text: 'Links com texto descritivo (não "clique aqui" ou "saiba mais")', priority: 'medium', note: 'WCAG 2.4.6' },
      { id: 'a7', text: 'Erros identificados em texto (não apenas por cor)', priority: 'high', note: 'WCAG 1.3.3' },
    ],
  },
  {
    id: 'motion',
    label: 'Motion e Animação',
    icon: '⚡',
    color: colors.violet[300],
    items: [
      { id: 'mo1', text: 'Todas as animações usam transform e opacity (não width/height)', priority: 'high' },
      { id: 'mo2', text: 'Duração máxima em interações frequentes: 300ms', priority: 'medium' },
      { id: 'mo3', text: 'Easing Ease Out para entradas, Ease In para saídas', priority: 'medium' },
      { id: 'mo4', text: 'Saídas sempre mais rápidas que entradas', priority: 'medium' },
      { id: 'mo5', text: 'Skeleton loading no lugar de spinners em carregamentos de conteúdo', priority: 'low' },
      { id: 'mo6', text: 'Animações testadas em 60fps em dispositivos de médio desempenho', priority: 'high' },
    ],
  },
];

export function Checklist() {
  const totalItems = checklistData.reduce((acc, cat) => acc + cat.items.length, 0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(checklistData.map(c => [c.id, true]))
  );

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const progress = Math.round((totalChecked / totalItems) * 100);

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleCat = (id: string) => setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  const reset = () => setChecked({});

  const priorityColor = { high: colors.crimson[400], medium: colors.amber[400], low: colors.jade[400] };
  const priorityLabel = { high: 'Alta', medium: 'Média', low: 'Baixa' };

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 08 — CHECKLIST"
        title="Checklist de Consistência"
        subtitle="Use este checklist ao iniciar qualquer novo projeto ou feature dentro do ecossistema Cebola Studios."
      />

      {/* Progress */}
      <div className="rounded-2xl p-6 mb-8" style={{ background: `linear-gradient(135deg, ${colors.violet[900]}50, ${colors.midnight[800]})`, border: `1px solid ${colors.violet[500]}30` }}>
        <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 36, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em' }}>
              {totalChecked} <span style={{ fontSize: 20, color: textColors.muted }}>/ {totalItems}</span>
            </div>
            <div style={{ fontSize: 14, color: textColors.muted }}>itens verificados</div>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: progress === 100 ? colors.jade[400] : colors.violet[300] }}>
                {progress}%
              </div>
              <div style={{ fontSize: 12, color: textColors.muted }}>completo</div>
            </div>
            <button
              onClick={reset}
              style={{
                padding: '8px 16px', borderRadius: 8, fontSize: 12,
                backgroundColor: surfaces.surfaceElevated,
                color: textColors.muted, border: `1px solid ${surfaces.border}`,
                cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              <RefreshCw size={12} /> Resetar
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: 8, backgroundColor: surfaces.surfaceElevated, borderRadius: 4, overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            borderRadius: 4,
            background: progress === 100
              ? `linear-gradient(90deg, ${colors.jade[500]}, ${colors.jade[400]})`
              : `linear-gradient(90deg, ${colors.violet[600]}, ${colors.violet[400]})`,
            transition: 'width 0.4s cubic-bezier(0,0,0.2,1)',
            boxShadow: `0 0 8px ${progress === 100 ? colors.jade[500] : colors.violet[500]}60`,
          }} />
        </div>

        {progress === 100 && (
          <div style={{ marginTop: 12, fontSize: 14, color: colors.jade[300], fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
            🎉 Projeto 100% alinhado ao Design System Cebola Studios!
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {checklistData.map(cat => {
          const catChecked = cat.items.filter(item => checked[item.id]).length;
          const catTotal = cat.items.length;
          const catPct = Math.round((catChecked / catTotal) * 100);

          return (
            <div key={cat.id} className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${surfaces.border}` }}>
              {/* Category header */}
              <button
                onClick={() => toggleCat(cat.id)}
                className="w-full text-left"
                style={{ padding: '16px 20px', backgroundColor: surfaces.surface, display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', border: 'none' }}
              >
                <span style={{ fontSize: 20 }}>{cat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: cat.color }}>
                    {cat.label}
                  </div>
                  <div style={{ fontSize: 12, color: textColors.muted, marginTop: 2 }}>
                    {catChecked}/{catTotal} itens · {catPct}%
                  </div>
                </div>
                {/* Mini progress */}
                <div style={{ width: 60, height: 4, backgroundColor: surfaces.surfaceElevated, borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{
                    height: '100%', width: `${catPct}%`, borderRadius: 2,
                    backgroundColor: catPct === 100 ? colors.jade[500] : cat.color,
                    transition: 'width 0.3s ease',
                  }} />
                </div>
                {expanded[cat.id] ? <ChevronUp size={16} style={{ color: textColors.muted, flexShrink: 0 }} /> : <ChevronDown size={16} style={{ color: textColors.muted, flexShrink: 0 }} />}
              </button>

              {/* Items */}
              {expanded[cat.id] && (
                <div style={{ borderTop: `1px solid ${surfaces.border}` }}>
                  {cat.items.map((item, i) => {
                    const isChecked = !!checked[item.id];
                    return (
                      <button
                        key={item.id}
                        onClick={() => toggle(item.id)}
                        className="w-full text-left flex items-start gap-4 transition-colors duration-150"
                        style={{
                          padding: '14px 20px',
                          backgroundColor: isChecked ? `${colors.jade[500]}06` : surfaces.surface,
                          borderBottom: i < cat.items.length - 1 ? `1px solid ${surfaces.border}` : 'none',
                          border: 'none', cursor: 'pointer',
                        }}
                      >
                        {/* Checkbox */}
                        <div
                          style={{
                            width: 20, height: 20, borderRadius: 6, flexShrink: 0,
                            backgroundColor: isChecked ? colors.jade[500] : 'transparent',
                            border: `2px solid ${isChecked ? colors.jade[500] : surfaces.border}`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            transition: 'all 0.15s ease', marginTop: 1,
                          }}
                        >
                          {isChecked && <Check size={12} color="#fff" />}
                        </div>

                        {/* Text */}
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 14, color: isChecked ? textColors.muted : textColors.secondary, lineHeight: 1.5, textDecoration: isChecked ? 'line-through' : 'none', transition: 'all 0.15s ease' }}>
                            {item.text}
                          </div>
                          {item.note && (
                            <span style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: colors.violet[400], backgroundColor: `${colors.violet[500]}10`, border: `1px solid ${colors.violet[500]}20`, borderRadius: 4, padding: '1px 6px', marginTop: 4, display: 'inline-block' }}>
                              {item.note}
                            </span>
                          )}
                        </div>

                        {/* Priority badge */}
                        <span style={{
                          fontSize: 10, fontFamily: "'JetBrains Mono', monospace",
                          padding: '2px 8px', borderRadius: 4, flexShrink: 0,
                          backgroundColor: `${priorityColor[item.priority]}15`,
                          color: priorityColor[item.priority],
                          border: `1px solid ${priorityColor[item.priority]}30`,
                        }}>
                          {priorityLabel[item.priority]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-8 rounded-xl p-5" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
        <div style={{ fontSize: 12, color: textColors.muted, marginBottom: 10 }}>Legenda de Prioridade</div>
        <div className="flex gap-6 flex-wrap">
          {[
            { p: 'high' as const, desc: 'Bloqueante — não lançar sem isso' },
            { p: 'medium' as const, desc: 'Importante — implementar na primeira iteração' },
            { p: 'low' as const, desc: 'Nice-to-have — melhorias progressivas' },
          ].map(l => (
            <div key={l.p} className="flex items-center gap-2">
              <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: priorityColor[l.p], flexShrink: 0, display: 'inline-block' }} />
              <span style={{ fontSize: 12, color: textColors.secondary, fontWeight: 600 }}>{priorityLabel[l.p]}:</span>
              <span style={{ fontSize: 12, color: textColors.muted }}>{l.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
