// ═══════════════════════════════════════════════════════════════════
// CEBOLA STUDIOS — DESIGN TOKENS v1.0
// ═══════════════════════════════════════════════════════════════════

export const colors = {
  // ─── Cebola Violet (Primary Brand) ───────────────────────────────
  violet: {
    50:  '#F5F0FF',
    100: '#EDE5FF',
    200: '#D8C8FF',
    300: '#BD9EFF',
    400: '#9D6EFF',
    500: '#7C3AED',
    600: '#6020D4',
    700: '#4A10B0',
    800: '#350A8A',
    900: '#220660',
    950: '#110330',
  },
  // ─── Cebola Midnight (Dark Surfaces) ─────────────────────────────
  midnight: {
    50:  '#F0EDF8',
    100: '#DDD8F0',
    200: '#BEB6E0',
    300: '#9A90CA',
    400: '#7A6EB4',
    500: '#5E549E',
    600: '#473D84',
    700: '#332C6A',
    800: '#1E1A4A',
    900: '#0F0A2A',
    950: '#060412',
  },
  // ─── Cebola Ember (Accent — Magenta/Pink) ────────────────────────
  ember: {
    50:  '#FDF2FA',
    100: '#FCE7F8',
    200: '#FACFF2',
    300: '#F5A8E8',
    400: '#EC73D5',
    500: '#E040C0',
    600: '#CA25A3',
    700: '#A51882',
    800: '#851562',
    900: '#5C1045',
    950: '#360825',
  },
  // ─── Cebola Slate (Neutral Gray-Purple) ──────────────────────────
  slate: {
    50:  '#F8F7FC',
    100: '#F0EFF8',
    200: '#E2E0F0',
    300: '#C5C2E0',
    400: '#A09CC8',
    500: '#7E7AAF',
    600: '#625E95',
    700: '#4A4778',
    800: '#333058',
    900: '#1E1C38',
    950: '#0F0E1C',
  },
  // ─── Cebola Jade (Success) ────────────────────────────────────────
  jade: {
    50:  '#F0FDF4',
    300: '#86EFAC',
    500: '#22C55E',
    700: '#15803D',
    900: '#14532D',
  },
  // ─── Cebola Crimson (Error) ───────────────────────────────────────
  crimson: {
    50:  '#FEF2F2',
    300: '#FCA5A5',
    500: '#EF4444',
    700: '#B91C1C',
    900: '#7F1D1D',
  },
  // ─── Cebola Amber (Warning) ───────────────────────────────────────
  amber: {
    50:  '#FFFBEB',
    300: '#FCD34D',
    500: '#F59E0B',
    700: '#B45309',
    900: '#78350F',
  },
  // ─── Cebola Ocean (Info) ──────────────────────────────────────────
  ocean: {
    50:  '#EFF6FF',
    300: '#93C5FD',
    500: '#3B82F6',
    700: '#1D4ED8',
    900: '#1E3A8A',
  },
  // ─── Cebola Pearl (Light/White) ───────────────────────────────────
  pearl: {
    DEFAULT: '#F5F3FF',
    pure:    '#FFFFFF',
    muted:   '#E2E0F0',
  },
};

export const typography = {
  fonts: {
    display: "'Space Grotesk', sans-serif",
    body:    "'Inter', sans-serif",
    mono:    "'JetBrains Mono', monospace",
  },
  scale: {
    xs:   { size: '12px', lineHeight: '1.5',  letterSpacing: '0.02em' },
    sm:   { size: '14px', lineHeight: '1.5',  letterSpacing: '0.01em' },
    md:   { size: '16px', lineHeight: '1.6',  letterSpacing: '0'      },
    lg:   { size: '18px', lineHeight: '1.6',  letterSpacing: '-0.01em'},
    xl:   { size: '20px', lineHeight: '1.5',  letterSpacing: '-0.01em'},
    '2xl':{ size: '24px', lineHeight: '1.4',  letterSpacing: '-0.02em'},
    '3xl':{ size: '30px', lineHeight: '1.35', letterSpacing: '-0.02em'},
    '4xl':{ size: '40px', lineHeight: '1.2',  letterSpacing: '-0.03em'},
    '5xl':{ size: '56px', lineHeight: '1.1',  letterSpacing: '-0.04em'},
  },
  weights: {
    light:    300,
    regular:  400,
    medium:   500,
    semibold: 600,
    bold:     700,
  },
};

export const spacing = {
  '1':  '4px',
  '2':  '8px',
  '3':  '12px',
  '4':  '16px',
  '6':  '24px',
  '8':  '32px',
  '10': '40px',
  '12': '48px',
  '16': '64px',
  '20': '80px',
  '24': '96px',
  '32': '128px',
};

export const radii = {
  none:  '0',
  xs:    '4px',
  sm:    '6px',
  md:    '8px',
  lg:    '12px',
  xl:    '16px',
  '2xl': '24px',
  full:  '9999px',
};

export const shadows = {
  sm:     '0 1px 3px rgba(6,4,18,0.4), 0 0 0 1px rgba(124,58,237,0.05)',
  md:     '0 4px 12px rgba(6,4,18,0.5), 0 0 0 1px rgba(124,58,237,0.08)',
  lg:     '0 8px 28px rgba(6,4,18,0.6), 0 0 0 1px rgba(124,58,237,0.1)',
  xl:     '0 16px 48px rgba(6,4,18,0.7), 0 0 0 1px rgba(124,58,237,0.12)',
  violet: '0 0 24px rgba(124,58,237,0.4)',
  ember:  '0 0 24px rgba(224,64,192,0.4)',
  inset:  'inset 0 1px 0 rgba(255,255,255,0.05)',
};

export const motion = {
  durations: {
    instant:    '0ms',
    micro:      '100ms',
    fast:       '150ms',
    normal:     '250ms',
    slow:       '350ms',
    enter:      '400ms',
    exit:       '200ms',
    page:       '500ms',
  },
  easings: {
    linear:         'linear',
    easeIn:         'cubic-bezier(0.4, 0, 1, 1)',
    easeOut:        'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut:      'cubic-bezier(0.4, 0, 0.2, 1)',
    spring:         'cubic-bezier(0.34, 1.56, 0.64, 1)',
    springSnappy:   'cubic-bezier(0.22, 1, 0.36, 1)',
    elegant:        'cubic-bezier(0.16, 1, 0.3, 1)',
    bounce:         'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
};

export const breakpoints = {
  xs:   '360px',
  sm:   '390px',
  md:   '412px',
  tablet: '768px',
  tabletLg: '1024px',
  desktop: '1280px',
  desktopLg: '1440px',
  wide: '1920px',
};

export const iconography = {
  library: 'Lucide Icons',
  style:   'outline',
  sizes: {
    xs:  12,
    sm:  16,
    md:  20,
    lg:  24,
    xl:  32,
    '2xl': 48,
  },
  strokeWidth: 1.5,
  minTouchTarget: 48,
};

// Dark theme surface tokens
export const surfaces = {
  bg:       colors.midnight[950],  // #060412
  surface:  colors.midnight[900],  // #0F0A2A
  surfaceElevated: colors.midnight[800], // #1E1A4A
  surfaceOverlay:  colors.midnight[700], // #332C6A
  border:   'rgba(124, 58, 237, 0.15)',
  borderStrong: 'rgba(124, 58, 237, 0.3)',
};

export const textColors = {
  primary:  colors.pearl.DEFAULT,  // #F5F3FF
  secondary: colors.slate[300],     // #C5C2E0
  muted:    colors.slate[500],      // #7E7AAF
  disabled: colors.slate[600],      // #625E95
  inverse:  colors.midnight[950],   // #060412
  brand:    colors.violet[400],     // #9D6EFF
  accent:   colors.ember[400],      // #EC73D5
};
