import { useState } from 'react';
import { Home, Search, Heart, Bell, User, Play, Star, ChevronRight, ArrowRight, Zap, Layers, Palette, Monitor, Smartphone } from 'lucide-react';
import { colors, surfaces, textColors, radii, shadows } from '../tokens';
import logoImg from 'figma:asset/914e157821720e928160ab9afb22db4a0113cee5.png';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

// ── ANDROID SCREEN MOCKUP ─────────────────────────────────────────
function AndroidMockup() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { icon: Home, label: 'Home' },
    { icon: Search, label: 'Buscar' },
    { icon: Heart, label: 'Favoritos' },
    { icon: Bell, label: 'Notif.' },
    { icon: User, label: 'Perfil' },
  ];

  const projects = [
    { name: 'Brand System', client: 'TechCorp', tag: 'Identidade', color: colors.violet[400] },
    { name: 'App Design', client: 'StartupXYZ', tag: 'UI/UX', color: colors.ember[400] },
    { name: 'Motion Kit', client: 'CreativeAG', tag: 'Motion', color: colors.violet[300] },
  ];

  return (
    <div
      style={{
        width: 360,
        maxWidth: '100%',
        backgroundColor: surfaces.bg,
        borderRadius: 36,
        overflow: 'hidden',
        border: `2px solid ${colors.violet[700]}`,
        boxShadow: `0 0 60px ${colors.violet[500]}30, 0 32px 80px rgba(6,4,18,0.8)`,
        position: 'relative',
      }}
    >
      {/* Status Bar */}
      <div style={{ height: 44, backgroundColor: surfaces.bg, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', paddingTop: 8 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: textColors.primary, fontFamily: "'Inter', sans-serif" }}>9:41</span>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {['█', '▊', '▎'].map((b, i) => <span key={i} style={{ fontSize: 10, color: textColors.primary }}>{b}</span>)}
        </div>
      </div>

      {/* Top App Bar */}
      <div style={{ padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12, backgroundColor: surfaces.bg }}>
        <div style={{ width: 32, height: 32, borderRadius: 10, overflow: 'hidden', background: `linear-gradient(135deg, ${colors.violet[600]}, ${colors.ember[700]})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logoImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, color: textColors.muted, fontFamily: "'Inter', sans-serif" }}>Bom dia,</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: textColors.primary, fontFamily: "'Space Grotesk', sans-serif" }}>Cebola Studios</div>
        </div>
        <div style={{ position: 'relative' }}>
          <Bell size={20} style={{ color: textColors.secondary }} strokeWidth={1.5} />
          <div style={{ position: 'absolute', top: -3, right: -3, width: 8, height: 8, borderRadius: '50%', backgroundColor: colors.ember[500], border: `2px solid ${surfaces.bg}` }} />
        </div>
      </div>

      {/* Hero Banner */}
      <div style={{ margin: '0 16px 16px', borderRadius: 20, overflow: 'hidden', position: 'relative', height: 160 }}>
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${colors.violet[800]}, ${colors.midnight[800]})` }} />
        <div style={{ position: 'absolute', inset: 0 }}>
          {[200, 150, 100].map((size, i) => (
            <div key={i} style={{ position: 'absolute', width: size, height: size, borderRadius: '50%', border: `1px solid ${colors.violet[500]}${['10', '20', '30'][i]}`, top: '50%', right: -40, transform: 'translateY(-50%)' }} />
          ))}
        </div>
        <div style={{ position: 'relative', padding: '20px 20px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: colors.violet[300], marginBottom: 6 }}>NOVO PROJETO</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: textColors.primary, lineHeight: 1.2 }}>
              Design System<br />Pronto para uso
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{
              padding: '8px 16px', borderRadius: 20, fontSize: 12, fontWeight: 700,
              backgroundColor: colors.violet[500], color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Explorar
            </button>
            <button style={{
              padding: '8px 16px', borderRadius: 20, fontSize: 12, fontWeight: 600,
              backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
            }}>
              Ver mais
            </button>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div style={{ padding: '0 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: textColors.primary, fontFamily: "'Space Grotesk', sans-serif" }}>Projetos Recentes</div>
        <button style={{ fontSize: 12, color: colors.violet[400], background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>Ver todos</button>
      </div>

      {/* Project Cards */}
      <div style={{ padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {projects.map(project => (
          <div key={project.name} style={{
            backgroundColor: surfaces.surface,
            borderRadius: 16,
            padding: '14px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            border: `1px solid ${surfaces.border}`,
          }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, backgroundColor: `${project.color}20`, border: `1px solid ${project.color}30`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Layers size={18} style={{ color: project.color }} strokeWidth={1.5} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: textColors.primary, fontFamily: "'Space Grotesk', sans-serif" }}>{project.name}</div>
              <div style={{ fontSize: 11, color: textColors.muted, fontFamily: "'Inter', sans-serif" }}>{project.client}</div>
            </div>
            <span style={{
              fontSize: 10, padding: '3px 8px', borderRadius: 6,
              backgroundColor: `${project.color}15`,
              color: project.color,
              border: `1px solid ${project.color}25`,
              fontFamily: "'Inter', sans-serif",
            }}>
              {project.tag}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div style={{ margin: '16px 0 0', padding: '0 0 20px', backgroundColor: surfaces.bg, borderTop: `1px solid ${surfaces.border}`, display: 'flex' }}>
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = i === activeTab;
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', color: isActive ? colors.violet[300] : textColors.disabled }}
            >
              <div style={{ position: 'relative' }}>
                {isActive && (
                  <div style={{ position: 'absolute', inset: -6, backgroundColor: `${colors.violet[500]}20`, borderRadius: 10 }} />
                )}
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} style={{ position: 'relative' }} />
              </div>
              <span style={{ fontSize: 10, fontFamily: "'Inter', sans-serif", fontWeight: isActive ? 700 : 400 }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ── WEB PAGE MOCKUP ───────────────────────────────────────────────
function WebMockup() {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCta, setHoveredCta] = useState(false);

  const services = [
    { icon: Palette, title: 'Brand Identity', desc: 'Sistemas visuais completos que resistem ao tempo.', color: colors.violet[400] },
    { icon: Layers, title: 'UI Design', desc: 'Interfaces para web e mobile com design system.', color: colors.ember[400] },
    { icon: Zap, title: 'Motion Design', desc: 'Animações que comunicam e encantam.', color: colors.violet[300] },
  ];

  const stats = [
    { num: '150+', label: 'Projetos' },
    { num: '8 anos', label: 'Experiência' },
    { num: '40+', label: 'Clientes' },
    { num: '99%', label: 'Satisfação' },
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: surfaces.bg,
      borderRadius: 16,
      overflow: 'hidden',
      border: `1px solid ${colors.violet[700]}`,
      boxShadow: `0 0 40px ${colors.violet[500]}15, 0 16px 60px rgba(6,4,18,0.7)`,
    }}>
      {/* Browser chrome */}
      <div style={{ backgroundColor: surfaces.surfaceElevated, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, borderBottom: `1px solid ${surfaces.border}` }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {[colors.crimson[500], colors.amber[500], colors.jade[500]].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: c }} />)}
        </div>
        <div style={{ flex: 1, backgroundColor: surfaces.surface, borderRadius: 8, padding: '5px 12px', fontSize: 11, color: textColors.muted, fontFamily: "'Inter', sans-serif", border: `1px solid ${surfaces.border}` }}>
          🔒 cebolaestudios.com.br
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['←', '→', '⟳'].map(a => <span key={a} style={{ fontSize: 13, color: textColors.muted, cursor: 'pointer' }}>{a}</span>)}
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ padding: '16px 48px', display: 'flex', alignItems: 'center', gap: 'auto', backgroundColor: `${surfaces.bg}CC`, backdropFilter: 'blur(8px)', borderBottom: `1px solid ${surfaces.border}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, overflow: 'hidden', background: `linear-gradient(135deg, ${colors.violet[600]}, ${colors.ember[700]})` }}>
            <img src={logoImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.02em' }}>
            CEBOLA STUDIOS
          </span>
        </div>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          {['Serviços', 'Portfólio', 'Sobre', 'Contato'].map(item => (
            <span key={item} style={{ fontSize: 13, color: textColors.muted, cursor: 'pointer', fontFamily: "'Inter', sans-serif" }}>{item}</span>
          ))}
          <button style={{
            padding: '8px 20px', borderRadius: 20, fontSize: 13, fontWeight: 600,
            backgroundColor: colors.violet[500], color: '#fff', border: 'none', cursor: 'pointer',
            fontFamily: "'Space Grotesk', sans-serif",
          }}>
            Briefing
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: '80px 48px 64px', background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${colors.violet[900]}30, transparent)`, textAlign: 'center' }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.15em', marginBottom: 16 }}>
          ESTÚDIO CRIATIVO — SÃO PAULO, BR
        </div>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 52, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20 }}>
          Criamos identidades<br />
          <span style={{ background: `linear-gradient(90deg, ${colors.violet[300]}, ${colors.ember[300]})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            que ficam na memória.
          </span>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 18, color: textColors.secondary, lineHeight: 1.7, maxWidth: 480, margin: '0 auto 36px' }}>
          Do brand identity ao design system completo. Cada projeto é uma camada a mais de significado.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onMouseEnter={() => setHoveredCta(true)}
            onMouseLeave={() => setHoveredCta(false)}
            style={{
              padding: '14px 32px', borderRadius: 14, fontSize: 16, fontWeight: 700,
              background: hoveredCta ? `linear-gradient(135deg, ${colors.violet[400]}, ${colors.ember[500]})` : `linear-gradient(135deg, ${colors.violet[600]}, ${colors.violet[400]})`,
              color: '#fff', border: 'none', cursor: 'pointer',
              fontFamily: "'Space Grotesk', sans-serif",
              display: 'flex', alignItems: 'center', gap: 8,
              boxShadow: hoveredCta ? shadows.violet : 'none',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
              transform: hoveredCta ? 'translateY(-2px)' : 'none',
            }}
          >
            Iniciar um projeto <ArrowRight size={18} />
          </button>
          <button style={{
            padding: '14px 32px', borderRadius: 14, fontSize: 16, fontWeight: 600,
            backgroundColor: 'transparent', color: textColors.secondary,
            border: `1.5px solid ${surfaces.border}`, cursor: 'pointer',
            fontFamily: "'Space Grotesk', sans-serif",
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Play size={16} /> Ver portfólio
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '32px 48px', borderTop: `1px solid ${surfaces.border}`, borderBottom: `1px solid ${surfaces.border}`, display: 'flex', justifyContent: 'center', gap: 0 }}>
        {stats.map((s, i) => (
          <div key={s.label} style={{ flex: 1, textAlign: 'center', borderRight: i < stats.length - 1 ? `1px solid ${surfaces.border}` : 'none', padding: '0 24px' }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 32, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em' }}>{s.num}</div>
            <div style={{ fontSize: 13, color: textColors.muted, fontFamily: "'Inter', sans-serif" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div style={{ padding: '48px 48px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em' }}>Serviços</h2>
          <span style={{ fontSize: 13, color: colors.violet[400], cursor: 'pointer', fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 4 }}>Ver todos <ChevronRight size={14} /></span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {services.map((s, i) => {
            const Icon = s.icon;
            const isHov = hoveredService === i;
            return (
              <div
                key={s.title}
                onMouseEnter={() => setHoveredService(i)}
                onMouseLeave={() => setHoveredService(null)}
                style={{
                  padding: 24, borderRadius: 20,
                  backgroundColor: isHov ? surfaces.surfaceElevated : surfaces.surface,
                  border: `1px solid ${isHov ? s.color + '40' : surfaces.border}`,
                  cursor: 'pointer',
                  transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
                  transform: isHov ? 'translateY(-4px)' : 'none',
                  boxShadow: isHov ? `0 8px 24px rgba(6,4,18,0.4)` : 'none',
                }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: `${s.color}15`, border: `1px solid ${s.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon size={20} style={{ color: s.color }} strokeWidth={1.5} />
                </div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 700, color: textColors.primary, marginBottom: 8 }}>{s.title}</div>
                <p style={{ fontSize: 13, color: textColors.muted, lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: s.color, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                  Saiba mais <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Testimonial strip */}
      <div style={{ padding: '40px 48px', marginTop: 48, borderTop: `1px solid ${surfaces.border}`, backgroundColor: surfaces.surface }}>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', gap: 4, marginBottom: 12 }}>
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill={colors.amber[400]} style={{ color: colors.amber[400] }} />)}
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, color: textColors.secondary, lineHeight: 1.7, fontStyle: 'italic', marginBottom: 12 }}>
              "O Design System que a Cebola entregou mudou completamente nossa velocidade de produto. Hoje lançamos features 3x mais rápido."
            </p>
            <div style={{ fontSize: 13, color: textColors.muted }}>
              <strong style={{ color: textColors.primary, fontFamily: "'Space Grotesk', sans-serif" }}>Marina Costa</strong> — CPO, TechCorp
            </div>
          </div>
          <div style={{ flexShrink: 0, width: 180, height: 100, borderRadius: 16, background: `linear-gradient(135deg, ${colors.violet[800]}, ${colors.midnight[800]})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: textColors.muted }}>TechCorp</span>
          </div>
        </div>
      </div>

      {/* Footer preview */}
      <div style={{ padding: '28px 48px', backgroundColor: surfaces.bg, borderTop: `1px solid ${surfaces.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, overflow: 'hidden', background: `linear-gradient(135deg, ${colors.violet[600]}, ${colors.ember[700]})` }}>
            <img src={logoImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, color: textColors.muted }}>CEBOLA STUDIOS</span>
        </div>
        <span style={{ fontSize: 11, color: textColors.disabled, fontFamily: "'Inter', sans-serif" }}>© 2026 Cebola Studios. Todos os direitos reservados.</span>
        <div style={{ display: 'flex', gap: 16 }}>
          {['Instagram', 'Behance', 'LinkedIn'].map(s => (
            <span key={s} style={{ fontSize: 11, color: textColors.muted, cursor: 'pointer' }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Examples() {
  const [view, setView] = useState<'both' | 'mobile' | 'web'>('both');

  return (
    <div className="p-6 lg:p-10 max-w-6xl mx-auto">
      <SectionHeader
        number="§ 09 — EXEMPLOS"
        title="Design System em Aplicação"
        subtitle="Telas completas demonstrando o sistema visual em uso real — mobile Android e web desktop, usando apenas tokens, componentes e regras do design system."
      />

      {/* View toggle */}
      <div className="flex gap-2 mb-10 p-1 rounded-xl w-fit" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
        {[
          { id: 'both', label: 'Ambos', icon: null },
          { id: 'mobile', label: 'Mobile', icon: Smartphone },
          { id: 'web', label: 'Web', icon: Monitor },
        ].map(v => {
          const Icon = v.icon;
          const isActive = view === v.id;
          return (
            <button
              key={v.id}
              onClick={() => setView(v.id as typeof view)}
              style={{
                padding: '8px 20px', borderRadius: 10, fontSize: 13, fontWeight: isActive ? 600 : 400,
                backgroundColor: isActive ? colors.violet[500] : 'transparent',
                color: isActive ? '#fff' : textColors.muted,
                border: 'none', cursor: 'pointer',
                fontFamily: "'Space Grotesk', sans-serif",
                display: 'flex', alignItems: 'center', gap: 6,
                transition: 'all 0.2s ease',
              }}
            >
              {Icon && <Icon size={14} />}
              {v.label}
            </button>
          );
        })}
      </div>

      {/* Mobile mockup */}
      {(view === 'both' || view === 'mobile') && (
        <div className="mb-16">
          <div className="flex items-start gap-4 mb-6 flex-wrap">
            <Smartphone size={20} style={{ color: colors.violet[400], marginTop: 2 }} />
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: textColors.primary }}>
                Tela Mobile — Android
              </h3>
              <p style={{ fontSize: 13, color: textColors.muted, marginTop: 4 }}>
                360dp × auto · Material Design 3 adaptado · Bottom Navigation · Dark theme nativo
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex justify-center" style={{ flex: '0 0 auto' }}>
              <AndroidMockup />
            </div>

            {/* Annotations */}
            <div className="flex-1 space-y-4">
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: colors.violet[400], letterSpacing: '0.1em', marginBottom: 4 }}>
                ESPECIFICAÇÕES
              </div>
              {[
                { label: 'Background', value: 'Midnight 950 (#060412)', color: colors.violet[400] },
                { label: 'Surface (Cards)', value: 'Midnight 900 (#0F0A2A)', color: colors.violet[300] },
                { label: 'Tipografia Display', value: 'Space Grotesk 700 · 22sp', color: colors.ember[400] },
                { label: 'Tipografia Corpo', value: 'Inter 400 · 14sp / 16sp', color: colors.ember[300] },
                { label: 'Primary Action', value: 'Violet 500 · border-radius: 20dp', color: colors.violet[400] },
                { label: 'Bottom Nav', value: '56dp height · 48dp touch target', color: colors.violet[300] },
                { label: 'Status Bar', value: 'Transparente · dark-on-dark', color: colors.ember[400] },
                { label: 'Espaçamento base', value: '16dp margins · 10dp gaps internos', color: colors.ember[300] },
                { label: 'Ícones', value: 'Lucide · outline · 20dp · strokeWidth 1.5', color: colors.violet[400] },
                { label: 'Indicador ativo (Bottom)', value: 'Violet pill container · tonal color M3', color: colors.violet[300] },
              ].map(spec => (
                <div key={spec.label} className="flex items-center gap-4 py-2" style={{ borderBottom: `1px solid ${surfaces.border}` }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: spec.color, flexShrink: 0 }} />
                  <div style={{ fontSize: 12, color: textColors.secondary, flex: 1 }}>{spec.label}</div>
                  <code style={{ fontSize: 11, fontFamily: "'JetBrains Mono', monospace", color: spec.color }}>{spec.value}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Web mockup */}
      {(view === 'both' || view === 'web') && (
        <div>
          <div className="flex items-start gap-4 mb-6 flex-wrap">
            <Monitor size={20} style={{ color: colors.ember[400], marginTop: 2 }} />
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, color: textColors.primary }}>
                Página Web — Desktop
              </h3>
              <p style={{ fontSize: 13, color: textColors.muted, marginTop: 4 }}>
                1440px · Layout 12 colunas · Hover states · Dark mode CSS · Scroll behavior
              </p>
            </div>
          </div>

          <WebMockup />

          {/* Web annotations */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: 'Layout e Grid',
                items: ['Max-width: 1200px centralizado', 'Padding horizontal: 48px', 'Gap de grid: 32px', 'Breakpoint ativo: desktop (1280px+)'],
                color: colors.violet[400],
              },
              {
                title: 'Interatividade',
                items: ['Hover em cards: translateY(-4px)', 'CTA gradient: violet→ember no hover', 'Transições: 250ms ease-elegant', 'Cursor: pointer em tudo interativo'],
                color: colors.ember[400],
              },
              {
                title: 'Tipografia Web',
                items: ['Hero H1: Space Grotesk 700 · 52px', 'Corpo: Inter 400 · 16-18px · lh 1.7', 'Nav: Inter 400 · 13px', 'CTA: Space Grotesk 700 · 16px'],
                color: colors.violet[300],
              },
            ].map(ann => (
              <div key={ann.title} className="rounded-xl p-5" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: ann.color, marginBottom: 10, fontFamily: "'Space Grotesk', sans-serif" }}>
                  {ann.title}
                </div>
                {ann.items.map(item => (
                  <div key={item} className="flex items-center gap-2 mb-2">
                    <div style={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: ann.color, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: textColors.muted }}>{item}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Final summary */}
      <div className="mt-16 rounded-2xl p-8" style={{ background: `linear-gradient(135deg, ${colors.violet[900]}60, ${colors.midnight[900]})`, border: `1px solid ${colors.violet[500]}30` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 12 }}>
          FIM DA DOCUMENTAÇÃO
        </div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', marginBottom: 12 }}>
          Design System Completo ✓
        </h2>
        <p style={{ fontSize: 15, color: textColors.secondary, lineHeight: 1.7, maxWidth: 600, marginBottom: 24 }}>
          O Design System da Cebola Studios está documentado, pronto para adoção por qualquer designer ou desenvolvedor do time. Toda decisão foi tomada com propósito, toda regra tem justificativa.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { num: '60+', label: 'Tokens de Cor', sub: 'Cebola Violet, Midnight, Ember, Slate' },
            { num: '3', label: 'Famílias de Fonte', sub: 'Space Grotesk · Inter · JetBrains Mono' },
            { num: '9', label: 'Escala Tipográfica', sub: 'xs → 5xl, documentada' },
            { num: '15+', label: 'Componentes', sub: 'Com todos os estados e tokens' },
          ].map(s => (
            <div key={s.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: `${colors.violet[500]}10`, border: `1px solid ${colors.violet[500]}20` }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: colors.violet[300], letterSpacing: '-0.03em' }}>{s.num}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: textColors.primary, marginBottom: 2 }}>{s.label}</div>
              <div style={{ fontSize: 10, color: textColors.muted }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
