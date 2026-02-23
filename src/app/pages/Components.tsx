import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Loader2, Check, X, AlertCircle, Info, Bell, Home, Search, Heart, User, Plus, ChevronDown, Star, Eye, EyeOff, Upload, Trash2, Edit } from 'lucide-react';
import { colors, surfaces, textColors, radii, shadows } from '../tokens';

function SectionHeader({ number, title, subtitle }: { number: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: colors.violet[400], letterSpacing: '0.12em', marginBottom: 8 }}>{number}</div>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: textColors.primary, letterSpacing: '-0.03em', lineHeight: 1.2 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 15, color: textColors.muted, marginTop: 8, lineHeight: 1.6, maxWidth: 600 }}>{subtitle}</p>}
    </div>
  );
}

function ComponentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-12">
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 700, color: textColors.primary, marginBottom: 16, paddingBottom: 8, borderBottom: `1px solid ${surfaces.border}` }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function ComponentCard({ title, children, code }: { title: string; children: ReactNode; code?: string }) {
  const [showCode, setShowCode] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden mb-4" style={{ border: `1px solid ${surfaces.border}` }}>
      <div className="px-4 py-2 flex items-center justify-between" style={{ backgroundColor: surfaces.surfaceElevated, borderBottom: `1px solid ${surfaces.border}` }}>
        <span style={{ fontSize: 12, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace" }}>{title}</span>
        {code && (
          <button
            onClick={() => setShowCode(!showCode)}
            style={{ fontSize: 10, color: colors.violet[400], fontFamily: "'JetBrains Mono', monospace", background: 'none', border: 'none', cursor: 'pointer' }}
          >
            {showCode ? 'ocultar' : 'ver token'}
          </button>
        )}
      </div>
      <div className="p-6 flex flex-wrap gap-4 items-center" style={{ backgroundColor: surfaces.surface }}>
        {children}
      </div>
      {showCode && code && (
        <pre className="px-5 py-3 text-xs overflow-x-auto" style={{ backgroundColor: surfaces.bg, fontFamily: "'JetBrains Mono', monospace", color: textColors.secondary, borderTop: `1px solid ${surfaces.border}`, lineHeight: 1.7 }}>
          {code}
        </pre>
      )}
    </div>
  );
}

// ── BUTTON COMPONENTS ──────────────────────────────────────────────
function Btn({ variant, size = 'md', disabled, loading, children, icon }: {
  variant: 'primary' | 'secondary' | 'ghost' | 'destructive' | 'ember';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children?: ReactNode;
  icon?: ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const styles: Record<string, CSSProperties> = {
    primary: {
      backgroundColor: disabled ? colors.violet[900] : hovered ? colors.violet[400] : pressed ? colors.violet[700] : colors.violet[500],
      color: disabled ? colors.slate[600] : '#ffffff',
      border: `1px solid ${disabled ? colors.violet[900] : colors.violet[500]}`,
    },
    secondary: {
      backgroundColor: hovered ? surfaces.surfaceElevated : surfaces.surface,
      color: disabled ? colors.slate[600] : textColors.primary,
      border: `1px solid ${disabled ? surfaces.border : hovered ? colors.violet[500] : surfaces.border}`,
    },
    ghost: {
      backgroundColor: hovered ? `${colors.violet[500]}15` : 'transparent',
      color: disabled ? colors.slate[600] : hovered ? colors.violet[300] : textColors.secondary,
      border: '1px solid transparent',
    },
    destructive: {
      backgroundColor: disabled ? `${colors.crimson[500]}20` : hovered ? '#DC2626' : colors.crimson[500],
      color: disabled ? colors.slate[600] : '#ffffff',
      border: `1px solid ${disabled ? 'transparent' : colors.crimson[500]}`,
    },
    ember: {
      backgroundColor: hovered ? colors.ember[400] : colors.ember[500],
      color: '#ffffff',
      border: `1px solid ${colors.ember[500]}`,
    },
  };

  const sizeStyles: Record<string, CSSProperties> = {
    sm: { padding: '6px 14px', fontSize: 12, borderRadius: radii.sm, height: 32 },
    md: { padding: '10px 20px', fontSize: 14, borderRadius: radii.md, height: 40 },
    lg: { padding: '14px 28px', fontSize: 16, borderRadius: radii.lg, height: 48 },
  };

  return (
    <button
      disabled={disabled || loading}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        ...styles[variant],
        ...sizeStyles[size],
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 600,
        cursor: disabled || loading ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        display: 'inline-flex', alignItems: 'center', gap: 8,
        transition: 'all 0.15s cubic-bezier(0,0,0.2,1)',
        outline: 'none',
        transform: pressed && !disabled ? 'scale(0.97)' : 'scale(1)',
        letterSpacing: '-0.01em',
      }}
    >
      {loading ? <Loader2 size={14} className="animate-spin" /> : icon}
      {children}
    </button>
  );
}

// ── INPUT COMPONENT ────────────────────────────────────────────────
function Input({ label, placeholder, state, type = 'text', hint }: {
  label: string;
  placeholder?: string;
  state?: 'default' | 'focus' | 'error' | 'success' | 'disabled';
  type?: string;
  hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [val, setVal] = useState('');
  const isError = state === 'error';
  const isSuccess = state === 'success';
  const isDisabled = state === 'disabled';

  const borderColor = isError ? colors.crimson[500] : isSuccess ? colors.jade[500] : focused ? colors.violet[500] : surfaces.border;
  const shadowStyle = focused && !isError ? `0 0 0 3px ${colors.violet[500]}25` : 'none';

  return (
    <div style={{ width: '100%', maxWidth: 300 }}>
      <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: isDisabled ? textColors.disabled : textColors.secondary, fontFamily: "'Inter', sans-serif", marginBottom: 6 }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={type}
          value={val}
          onChange={e => setVal(e.target.value)}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: '10px 14px',
            paddingRight: (isError || isSuccess) ? 36 : 14,
            backgroundColor: isDisabled ? surfaces.bg : surfaces.surfaceElevated,
            border: `1.5px solid ${borderColor}`,
            borderRadius: radii.md,
            color: isDisabled ? textColors.disabled : textColors.primary,
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            outline: 'none',
            boxShadow: shadowStyle,
            transition: 'all 0.15s ease',
            cursor: isDisabled ? 'not-allowed' : 'text',
          }}
        />
        {isError && <AlertCircle size={16} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: colors.crimson[500] }} />}
        {isSuccess && <Check size={16} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: colors.jade[500] }} />}
      </div>
      {hint && (
        <p style={{ fontSize: 12, color: isError ? colors.crimson[400] : isSuccess ? colors.jade[500] : textColors.muted, marginTop: 4, fontFamily: "'Inter', sans-serif" }}>
          {hint}
        </p>
      )}
    </div>
  );
}

// ── BADGE COMPONENT ────────────────────────────────────────────────
function Badge({ label, variant = 'default', size = 'md', dot }: {
  label: string;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'ember';
  size?: 'sm' | 'md';
  dot?: boolean;
}) {
  const styles: Record<string, { bg: string; color: string; border: string }> = {
    default:  { bg: surfaces.surfaceElevated, color: textColors.secondary, border: surfaces.border },
    primary:  { bg: `${colors.violet[500]}20`, color: colors.violet[300], border: `${colors.violet[500]}40` },
    success:  { bg: `${colors.jade[500]}20`, color: colors.jade[300], border: `${colors.jade[500]}40` },
    warning:  { bg: `${colors.amber[500]}20`, color: colors.amber[300], border: `${colors.amber[500]}40` },
    error:    { bg: `${colors.crimson[500]}20`, color: colors.crimson[300], border: `${colors.crimson[500]}40` },
    ember:    { bg: `${colors.ember[500]}20`, color: colors.ember[300], border: `${colors.ember[500]}40` },
  };
  const s = styles[variant];
  const sz = size === 'sm' ? { fontSize: 10, padding: '2px 8px', borderRadius: 4 } : { fontSize: 12, padding: '4px 10px', borderRadius: 6 };
  return (
    <span style={{ ...sz, backgroundColor: s.bg, color: s.color, border: `1px solid ${s.border}`, fontFamily: "'Inter', sans-serif", fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', backgroundColor: s.color, flexShrink: 0 }} />}
      {label}
    </span>
  );
}

// ── CARD COMPONENT ────────────────────────────────────────────────
function Card({ elevation = 0 }: { elevation?: 0 | 1 | 2 | 3 }) {
  const elevStyles: Record<number, { bg: string; shadow: string; border: string }> = {
    0: { bg: surfaces.surface, shadow: 'none', border: surfaces.border },
    1: { bg: surfaces.surface, shadow: shadows.sm, border: `${colors.violet[500]}15` },
    2: { bg: surfaces.surfaceElevated, shadow: shadows.md, border: `${colors.violet[500]}20` },
    3: { bg: surfaces.surfaceOverlay, shadow: shadows.lg, border: `${colors.violet[500]}25` },
  };
  const s = elevStyles[elevation];
  return (
    <div style={{ backgroundColor: s.bg, boxShadow: s.shadow, border: `1px solid ${s.border}`, borderRadius: radii.xl, padding: 20, width: 180 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: `linear-gradient(135deg, ${colors.violet[500]}, ${colors.ember[500]})`, marginBottom: 12 }} />
      <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: textColors.primary, marginBottom: 4 }}>Card Nível {elevation}</div>
      <div style={{ fontSize: 12, color: textColors.muted }}>Elevação {elevation} — sombra e borda progressivas</div>
    </div>
  );
}

// ── TOAST COMPONENT ────────────────────────────────────────────────
function Toast({ type }: { type: 'success' | 'error' | 'warning' | 'info' }) {
  const config = {
    success: { icon: Check, bg: `${colors.jade[500]}15`, border: `${colors.jade[500]}30`, color: colors.jade[300], label: 'Ação realizada com sucesso!' },
    error:   { icon: X, bg: `${colors.crimson[500]}15`, border: `${colors.crimson[500]}30`, color: colors.crimson[300], label: 'Erro ao processar a ação.' },
    warning: { icon: AlertCircle, bg: `${colors.amber[500]}15`, border: `${colors.amber[500]}30`, color: colors.amber[300], label: 'Atenção: verifique os dados.' },
    info:    { icon: Info, bg: `${colors.ocean[500]}15`, border: `${colors.ocean[500]}30`, color: colors.ocean[300], label: 'Nova atualização disponível.' },
  };
  const c = config[type];
  const Icon = c.icon;
  return (
    <div style={{ backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: radii.lg, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, maxWidth: 300 }}>
      <Icon size={16} color={c.color} />
      <span style={{ fontSize: 13, color: textColors.primary, fontFamily: "'Inter', sans-serif" }}>{c.label}</span>
    </div>
  );
}

// ── BOTTOM NAV ────────────────────────────────────────────────────
function BottomNav() {
  const [active, setActive] = useState(0);
  const items = [
    { icon: Home, label: 'Início' },
    { icon: Search, label: 'Buscar' },
    { icon: Heart, label: 'Favoritos' },
    { icon: Bell, label: 'Notif.' },
    { icon: User, label: 'Perfil' },
  ];
  return (
    <div style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}`, borderRadius: radii.xl, padding: '8px 0', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 360 }}>
      {items.map((item, i) => {
        const Icon = item.icon;
        const isActive = i === active;
        return (
          <button key={i} onClick={() => setActive(i)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '8px 0', background: 'none', border: 'none', cursor: 'pointer', color: isActive ? colors.violet[300] : textColors.muted, transition: 'color 0.2s' }}>
            <div style={{ position: 'relative' }}>
              {isActive && <div style={{ position: 'absolute', inset: -4, backgroundColor: `${colors.violet[500]}20`, borderRadius: 10 }} />}
              <Icon size={20} strokeWidth={isActive ? 2.5 : 1.5} style={{ position: 'relative' }} />
            </div>
            <span style={{ fontSize: 10, fontFamily: "'Inter', sans-serif", fontWeight: isActive ? 600 : 400 }}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ── SELECT COMPONENT ──────────────────────────────────────────────
function Select() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Selecione uma opção');
  const options = ['Design System', 'Motion', 'Tipografia', 'Grid & Layout'];
  return (
    <div style={{ position: 'relative', width: 220 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '10px 14px',
          backgroundColor: surfaces.surfaceElevated,
          border: `1.5px solid ${open ? colors.violet[500] : surfaces.border}`,
          borderRadius: radii.md, color: textColors.primary,
          fontFamily: "'Inter', sans-serif", fontSize: 14,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', outline: 'none',
          boxShadow: open ? `0 0 0 3px ${colors.violet[500]}25` : 'none',
          transition: 'all 0.15s ease',
        }}
      >
        {selected}
        <ChevronDown size={16} style={{ transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: '0.2s', color: textColors.muted }} />
      </button>
      {open && (
        <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, backgroundColor: surfaces.surfaceElevated, border: `1px solid ${colors.violet[500]}40`, borderRadius: radii.lg, overflow: 'hidden', zIndex: 10, boxShadow: shadows.lg }}>
          {options.map(opt => (
            <button
              key={opt}
              onClick={() => { setSelected(opt); setOpen(false); }}
              style={{ width: '100%', padding: '10px 14px', textAlign: 'left', background: 'none', border: 'none', color: textColors.secondary, fontFamily: "'Inter', sans-serif", fontSize: 14, cursor: 'pointer', display: 'block', transition: 'background 0.1s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.backgroundColor = `${colors.violet[500]}15`}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ── MAIN EXPORT ───────────────────────────────────────────────────
export function Components() {
  const [inputPwd, setInputPwd] = useState(false);
  const [checkState, setCheckState] = useState({ a: true, b: false, c: false });
  const [toggle, setToggle] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-6 lg:p-10 max-w-5xl mx-auto">
      <SectionHeader
        number="§ 05 — COMPONENTES"
        title="Biblioteca de Componentes"
        subtitle="Todos os componentes com especificações, estados e tokens. Hover nos botões para ver os estados interativos."
      />

      {/* BUTTONS */}
      <ComponentSection title="Botões">
        <ComponentCard title="Variantes" code={`/* Primary */\nbackground: var(--color-violet-500);\nborder-radius: var(--radius-md);\nheight: 40px; padding: 10px 20px;`}>
          <Btn variant="primary">Primário</Btn>
          <Btn variant="secondary">Secundário</Btn>
          <Btn variant="ghost">Ghost</Btn>
          <Btn variant="destructive">Destrutivo</Btn>
          <Btn variant="ember">Ember</Btn>
        </ComponentCard>

        <ComponentCard title="Tamanhos">
          <Btn variant="primary" size="sm">Small</Btn>
          <Btn variant="primary" size="md">Medium</Btn>
          <Btn variant="primary" size="lg">Large</Btn>
        </ComponentCard>

        <ComponentCard title="Estados">
          <Btn variant="primary">Normal</Btn>
          <Btn variant="primary" loading>Loading</Btn>
          <Btn variant="primary" disabled>Disabled</Btn>
          <Btn variant="primary" icon={<Plus size={14} />}>Com Ícone</Btn>
          <Btn variant="ghost" icon={<Trash2 size={14} />} />
          <Btn variant="ghost" icon={<Edit size={14} />} />
        </ComponentCard>

        <div className="rounded-xl p-5 mt-2" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: textColors.primary, marginBottom: 12, fontFamily: "'Space Grotesk', sans-serif" }}>Specs de Botão</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Min touch target', value: '48 × 48dp (Android)', mono: true },
              { label: 'Border radius', value: 'var(--radius-md) = 8px', mono: true },
              { label: 'Font', value: 'Space Grotesk 600', mono: false },
              { label: 'Transition', value: '150ms ease-out', mono: true },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 3 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: s.mono ? colors.violet[400] : textColors.primary, fontFamily: s.mono ? "'JetBrains Mono', monospace" : "'Inter', sans-serif" }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </ComponentSection>

      {/* INPUTS */}
      <ComponentSection title="Inputs, Selects e Textareas">
        <ComponentCard title="Estados do Input">
          <Input label="Default" placeholder="Seu nome" state="default" />
          <Input label="Com Erro" placeholder="email@exemplo.com" state="error" hint="Email inválido." />
          <Input label="Sucesso" placeholder="usuario@site.com" state="success" hint="Email verificado." />
          <Input label="Desabilitado" placeholder="Não editável" state="disabled" />
        </ComponentCard>

        <ComponentCard title="Tipos Especiais">
          <div style={{ maxWidth: 300 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: textColors.secondary, marginBottom: 6, fontFamily: "'Inter', sans-serif" }}>
              Senha
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type={inputPwd ? 'text' : 'password'}
                placeholder="••••••••"
                style={{ width: '100%', padding: '10px 40px 10px 14px', backgroundColor: surfaces.surfaceElevated, border: `1.5px solid ${surfaces.border}`, borderRadius: radii.md, color: textColors.primary, fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none' }}
              />
              <button onClick={() => setInputPwd(!inputPwd)} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: textColors.muted }}>
                {inputPwd ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
          <Select />
        </ComponentCard>

        <ComponentCard title="Textarea">
          <div style={{ width: '100%', maxWidth: 480 }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: textColors.secondary, marginBottom: 6, fontFamily: "'Inter', sans-serif" }}>Mensagem</label>
            <textarea
              placeholder="Descreva seu projeto..."
              rows={4}
              style={{ width: '100%', padding: '10px 14px', backgroundColor: surfaces.surfaceElevated, border: `1.5px solid ${surfaces.border}`, borderRadius: radii.md, color: textColors.primary, fontFamily: "'Inter', sans-serif", fontSize: 14, outline: 'none', resize: 'vertical' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
              <span style={{ fontSize: 12, color: textColors.muted }}>Mínimo 50 caracteres</span>
              <span style={{ fontSize: 12, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace" }}>0/500</span>
            </div>
          </div>
        </ComponentCard>

        {/* Checkbox & Toggle */}
        <ComponentCard title="Checkbox e Toggle">
          {['Receber novidades', 'Termos e condições', 'Newsletter'].map((label, i) => {
            const keys = ['a', 'b', 'c'] as const;
            const k = keys[i];
            return (
              <button
                key={label}
                onClick={() => setCheckState(prev => ({ ...prev, [k]: !prev[k] }))}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              >
                <div style={{
                  width: 18, height: 18, borderRadius: 4,
                  backgroundColor: checkState[k] ? colors.violet[500] : 'transparent',
                  border: `2px solid ${checkState[k] ? colors.violet[500] : surfaces.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s ease',
                }}>
                  {checkState[k] && <Check size={11} color="#fff" />}
                </div>
                <span style={{ fontSize: 14, color: textColors.secondary, fontFamily: "'Inter', sans-serif" }}>{label}</span>
              </button>
            );
          })}

          <button
            onClick={() => setToggle(!toggle)}
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <div style={{
              width: 44, height: 24, borderRadius: 12,
              backgroundColor: toggle ? colors.violet[500] : colors.slate[700],
              position: 'relative', transition: 'background 0.2s ease',
            }}>
              <div style={{
                width: 18, height: 18, borderRadius: '50%', backgroundColor: '#fff',
                position: 'absolute', top: 3, left: toggle ? 23 : 3,
                transition: 'left 0.2s ease', boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
              }} />
            </div>
            <span style={{ fontSize: 14, color: textColors.secondary, fontFamily: "'Inter', sans-serif" }}>
              Dark Mode: {toggle ? 'Ativado' : 'Desativado'}
            </span>
          </button>
        </ComponentCard>
      </ComponentSection>

      {/* CARDS */}
      <ComponentSection title="Cards e Superfícies">
        <ComponentCard title="Níveis de Elevação">
          {[0, 1, 2, 3].map(el => <Card key={el} elevation={el as 0 | 1 | 2 | 3} />)}
        </ComponentCard>

        {/* File upload */}
        <ComponentCard title="Upload Area">
          <div style={{
            border: `2px dashed ${colors.violet[500]}50`,
            borderRadius: radii.xl, padding: '32px 24px',
            textAlign: 'center', width: '100%', maxWidth: 400,
            background: `${colors.violet[500]}05`,
            cursor: 'pointer',
          }}>
            <Upload size={32} style={{ color: colors.violet[400], margin: '0 auto 12px' }} />
            <div style={{ fontSize: 14, fontWeight: 600, color: textColors.primary, marginBottom: 4, fontFamily: "'Space Grotesk', sans-serif" }}>
              Arraste arquivos ou clique
            </div>
            <div style={{ fontSize: 12, color: textColors.muted }}>SVG, PNG, JPG ou GIF (max. 10MB)</div>
          </div>
        </ComponentCard>
      </ComponentSection>

      {/* BADGES */}
      <ComponentSection title="Badges, Tags e Chips">
        <ComponentCard title="Variantes">
          <Badge label="Default" />
          <Badge label="Primary" variant="primary" />
          <Badge label="Sucesso" variant="success" />
          <Badge label="Aviso" variant="warning" />
          <Badge label="Erro" variant="error" />
          <Badge label="Ember" variant="ember" />
        </ComponentCard>
        <ComponentCard title="Com Dot e Tamanhos">
          <Badge label="Online" variant="success" dot />
          <Badge label="Pendente" variant="warning" dot />
          <Badge label="Offline" variant="error" dot />
          <Badge label="Small" size="sm" variant="primary" />
          <Badge label="Medium" size="md" variant="primary" />
          {['Design', 'Motion', 'UI Kit', 'Dark Mode', 'React', 'Figma'].map(t => (
            <span key={t} style={{ fontSize: 12, padding: '5px 12px', borderRadius: radii.full, backgroundColor: surfaces.surfaceElevated, border: `1px solid ${surfaces.border}`, color: textColors.secondary, fontFamily: "'Inter', sans-serif", cursor: 'pointer' }}>
              {t}
            </span>
          ))}
        </ComponentCard>
      </ComponentSection>

      {/* NAVIGATION */}
      <ComponentSection title="Navegação">
        {/* Tabs */}
        <ComponentCard title="Tabs">
          <div style={{ width: '100%' }}>
            <div className="flex gap-1 p-1 rounded-xl mb-4" style={{ backgroundColor: surfaces.surfaceElevated, display: 'inline-flex' }}>
              {['Visão Geral', 'Componentes', 'Tokens'].map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: '8px 16px', borderRadius: 10, fontSize: 13, fontWeight: activeTab === i ? 600 : 400,
                    backgroundColor: activeTab === i ? colors.violet[500] : 'transparent',
                    color: activeTab === i ? '#fff' : textColors.muted,
                    border: 'none', cursor: 'pointer', fontFamily: "'Space Grotesk', sans-serif",
                    transition: 'all 0.2s ease',
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div style={{ padding: 16, borderRadius: radii.lg, backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}`, fontSize: 14, color: textColors.muted }}>
              Conteúdo da aba "{['Visão Geral', 'Componentes', 'Tokens'][activeTab]}"
            </div>
          </div>
        </ComponentCard>

        {/* Bottom Nav Android */}
        <ComponentCard title="Bottom Navigation Bar (Android M3)">
          <BottomNav />
        </ComponentCard>

        {/* Top App Bar */}
        <ComponentCard title="Top App Bar (Android)">
          <div style={{ width: '100%', maxWidth: 360, backgroundColor: surfaces.surface, borderRadius: radii.xl, overflow: 'hidden', border: `1px solid ${surfaces.border}` }}>
            <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: `1px solid ${surfaces.border}` }}>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColors.secondary, padding: 4 }}>
                <ChevronDown size={20} style={{ transform: 'rotate(90deg)' }} />
              </button>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 18, fontWeight: 600, color: textColors.primary, flex: 1 }}>Cebola Studios</span>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColors.secondary, padding: 4 }}><Search size={20} /></button>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: textColors.secondary, padding: 4 }}><Bell size={20} /></button>
            </div>
            <div style={{ padding: 20, fontSize: 14, color: textColors.muted, fontFamily: "'Inter', sans-serif" }}>
              Conteúdo da tela aqui...
            </div>
          </div>
        </ComponentCard>
      </ComponentSection>

      {/* TOASTS */}
      <ComponentSection title="Toasts e Notificações">
        <ComponentCard title="Tipos de Feedback">
          <div className="flex flex-col gap-3 w-full">
            <Toast type="success" />
            <Toast type="error" />
            <Toast type="warning" />
            <Toast type="info" />
          </div>
        </ComponentCard>
      </ComponentSection>

      {/* ICONS */}
      <ComponentSection title="Iconografia">
        <div className="rounded-xl p-6" style={{ backgroundColor: surfaces.surface, border: `1px solid ${surfaces.border}` }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>BIBLIOTECA</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: textColors.primary }}>Lucide Icons</div>
              <a href="https://lucide.dev" target="_blank" style={{ fontSize: 12, color: colors.violet[400], textDecoration: 'none' }}>lucide.dev →</a>
            </div>
            <div>
              <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>ESTILO</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: textColors.primary }}>Outline (traço)</div>
              <div style={{ fontSize: 12, color: textColors.muted }}>strokeWidth: 1.5px</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace", marginBottom: 8 }}>SIZES</div>
              <div style={{ fontSize: 15, fontWeight: 600, color: textColors.primary }}>12 / 16 / 20 / 24 / 32px</div>
              <div style={{ fontSize: 12, color: textColors.muted }}>Min touch: 48×48dp</div>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap items-center">
            {[
              { icon: Home, label: '24px' },
              { icon: Search, label: '20px' },
              { icon: Bell, label: '20px' },
              { icon: User, label: '20px' },
              { icon: Heart, label: '16px' },
              { icon: Star, label: '16px' },
              { icon: Check, label: '16px' },
              { icon: X, label: '16px' },
              { icon: Upload, label: '20px' },
              { icon: Trash2, label: '16px' },
            ].map(({ icon: Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div style={{ width: 48, height: 48, borderRadius: 10, backgroundColor: surfaces.surfaceElevated, border: `1px solid ${surfaces.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={parseInt(label)} strokeWidth={1.5} style={{ color: textColors.secondary }} />
                </div>
                <span style={{ fontSize: 10, color: textColors.disabled, fontFamily: "'JetBrains Mono', monospace" }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </ComponentSection>

      {/* DIVIDERS */}
      <ComponentSection title="Divisores e Separadores">
        <ComponentCard title="Tipos">
          <div style={{ width: '100%' }}>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: textColors.muted, marginBottom: 8 }}>Default — 1px sólido</div>
              <div style={{ height: 1, backgroundColor: surfaces.border }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: textColors.muted, marginBottom: 8 }}>Gradient Violet</div>
              <div style={{ height: 1, background: `linear-gradient(90deg, transparent, ${colors.violet[500]}, transparent)` }} />
            </div>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: textColors.muted, marginBottom: 8 }}>Com Label</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ flex: 1, height: 1, backgroundColor: surfaces.border }} />
                <span style={{ fontSize: 11, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace", whiteSpace: 'nowrap' }}>OU</span>
                <div style={{ flex: 1, height: 1, backgroundColor: surfaces.border }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: textColors.muted, marginBottom: 8 }}>Ember Accent</div>
              <div style={{ height: 2, background: `linear-gradient(90deg, ${colors.ember[500]}, ${colors.violet[500]})`, borderRadius: 2 }} />
            </div>
          </div>
        </ComponentCard>
      </ComponentSection>
    </div>
  );
}