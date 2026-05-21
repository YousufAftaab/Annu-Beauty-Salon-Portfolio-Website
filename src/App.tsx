import ReactLenis from 'lenis/react';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { Home } from './pages/Home';

// Initialize Vercel Speed Insights
injectSpeedInsights();

export function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.4, smoothWheel: true }}>
      <Home />
    </ReactLenis>
  );
}