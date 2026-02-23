import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import '../styles/fonts.css';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.style.setProperty('--font-display', "'Space Grotesk', sans-serif");
    document.documentElement.style.setProperty('--font-body', "'Inter', sans-serif");
    document.documentElement.style.setProperty('--font-mono', "'JetBrains Mono', monospace");
  }, []);

  return <RouterProvider router={router} />;
}
