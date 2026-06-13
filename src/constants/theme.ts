export const Colors = {
  light: {
    background: '#F7F9FC',
    card: '#FFFFFF',
    primary: '#4F8EF7',
    primarySoft: '#EAF1FF',
    text: '#0D1B2A',
    textSecondary: '#6B7A8D',
    dot: '#CBD5E1',
    dotActive: '#4F8EF7',
    skip: '#6B7A8D',
    buttonText: '#FFFFFF',
    shadow: 'rgba(79, 142, 247, 0.18)',
  },
  dark: {
    background: '#0D1117',
    card: '#161B22',
    primary: '#5B9EFF',
    primarySoft: '#1A2540',
    text: '#E6EDF3',
    textSecondary: '#8B949E',
    dot: '#30363D',
    dotActive: '#5B9EFF',
    skip: '#8B949E',
    buttonText: '#FFFFFF',
    shadow: 'rgba(91, 158, 255, 0.22)',
  },
};

export type ColorScheme = 'light' | 'dark';
export type ThemeColors = typeof Colors.light;
