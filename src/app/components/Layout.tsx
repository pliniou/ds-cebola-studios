import { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router';
import {
  Layers, Palette, Type, Grid, Puzzle, Zap,
  Accessibility, CheckSquare, Monitor, Menu, X, ChevronRight
} from 'lucide-react';
import { surfaces, textColors, colors } from '../tokens';
import logoImg from 'figma:asset/914e157821720e928160ab9afb22db4a0113cee5.png';

const navItems = [
  { path: '/',              label: 'Visão Geral',       icon: Layers,        section: '01' },
  { path: '/colors',        label: 'Paleta de Cores',   icon: Palette,       section: '02' },
  { path: '/typography',    label: 'Tipografia',         icon: Type,          section: '03' },
  { path: '/spacing',       label: 'Espaçamento & Grid', icon: Grid,          section: '04' },
  { path: '/components',    label: 'Componentes',        icon: Puzzle,        section: '05' },
  { path: '/motion',        label: 'Motion',             icon: Zap,           section: '06' },
  { path: '/accessibility', label: 'Acessibilidade',     icon: Accessibility, section: '07' },
  { path: '/checklist',     label: 'Checklist',          icon: CheckSquare,   section: '08' },
  { path: '/examples',      label: 'Exemplos',           icon: Monitor,       section: '09' },
];

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: surfaces.bg, fontFamily: "'Inter', sans-serif" }}>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: 'rgba(6,4,18,0.8)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        style={{
          width: '280px',
          backgroundColor: surfaces.surface,
          borderRight: `1px solid ${surfaces.border}`,
          flexShrink: 0,
        }}
      >
        {/* Logo area */}
        <div className="flex items-center gap-3 p-5" style={{ borderBottom: `1px solid ${surfaces.border}` }}>
          <div
            className="flex items-center justify-center rounded-xl overflow-hidden"
            style={{ width: 40, height: 40, background: `linear-gradient(135deg, ${colors.violet[600]}, ${colors.ember[600]})` }}
          >
            <img src={logoImg} alt="Cebola Studios" className="w-full h-full object-cover" />
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 14, color: textColors.primary, letterSpacing: '-0.02em' }}>
              CEBOLA STUDIOS
            </div>
            <div style={{ fontSize: 11, color: textColors.muted, fontFamily: "'JetBrains Mono', monospace" }}>
              Design System v1.0
            </div>
          </div>
          <button
            className="ml-auto lg:hidden p-1 rounded-lg"
            style={{ color: textColors.muted }}
            onClick={() => setSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3">
          <div style={{ fontSize: 10, fontFamily: "'JetBrains Mono', monospace", color: textColors.disabled, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 12px 8px' }}>
            Documentação
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.path === '/' ? location.pathname === '/' : location.pathname === item.path;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl mb-0.5 transition-all duration-200 group"
                style={{
                  backgroundColor: isActive ? `${colors.violet[500]}18` : 'transparent',
                  color: isActive ? colors.violet[300] : textColors.secondary,
                  border: isActive ? `1px solid ${colors.violet[500]}30` : '1px solid transparent',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(124,58,237,0.08)';
                }}
                onMouseLeave={e => {
                  if (!isActive) (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                <span style={{ fontSize: 9, fontFamily: "'JetBrains Mono', monospace", color: isActive ? colors.violet[400] : textColors.disabled, minWidth: 20 }}>
                  {item.section}
                </span>
                <Icon size={16} strokeWidth={isActive ? 2 : 1.5} />
                <span style={{ fontSize: 13, fontWeight: isActive ? 600 : 400, fontFamily: "'Inter', sans-serif" }}>
                  {item.label}
                </span>
                {isActive && <ChevronRight size={14} className="ml-auto" />}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4" style={{ borderTop: `1px solid ${surfaces.border}` }}>
          <div
            className="rounded-xl p-3"
            style={{ background: `linear-gradient(135deg, ${colors.violet[500]}15, ${colors.ember[500]}10)`, border: `1px solid ${colors.violet[500]}20` }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: colors.violet[300], fontFamily: "'Space Grotesk', sans-serif" }}>
              Design System
            </div>
            <div style={{ fontSize: 10, color: textColors.muted, marginTop: 2 }}>
              © 2026 Cebola Studios
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar (mobile) */}
        <header
          className="lg:hidden flex items-center gap-3 px-4 py-3"
          style={{ backgroundColor: surfaces.surface, borderBottom: `1px solid ${surfaces.border}` }}
        >
          <button
            className="p-2 rounded-lg"
            style={{ backgroundColor: surfaces.surfaceElevated, color: textColors.secondary }}
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={18} />
          </button>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 15, color: textColors.primary }}>
            Cebola Studios DS
          </span>
        </header>

        {/* Scrollable content */}
        <main
          className="flex-1 overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: `${colors.violet[700]} ${surfaces.bg}`,
          }}
        >
          <Outlet />
        </main>
      </div>

      <style>{`
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: ${surfaces.bg}; }
        ::-webkit-scrollbar-thumb { background: ${colors.violet[800]}; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: ${colors.violet[600]}; }
      `}</style>
    </div>
  );
}
