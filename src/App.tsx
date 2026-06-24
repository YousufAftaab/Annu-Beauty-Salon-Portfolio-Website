import ReactLenis from 'lenis/react';
import { Analytics } from '@vercel/analytics/react';
import { Home } from './pages/Home';

export function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      <Home />
      <Analytics />
    </ReactLenis>
  );
}