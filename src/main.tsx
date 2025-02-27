import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Theme, ThemePanel } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './styles/index.css';
import App from './App.tsx';
import { COLOR_ACCENT } from './lib/constants.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor={COLOR_ACCENT}>
      <App />
      {import.meta.env.DEV && <ThemePanel />}
    </Theme>
  </StrictMode>,
);
