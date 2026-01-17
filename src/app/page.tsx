import { BentoGrid } from '@/components/bento-grid';
import { Hero } from '@/components/hero';
import { MlsAiConcierge } from '@/components/mls-ai-concierge';
import { MobileQuickActionBar } from '@/components/mobile-quick-action-bar';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Hero />
        <BentoGrid />
        <MlsAiConcierge />
      </main>
      <MobileQuickActionBar />
    </div>
  );
}
