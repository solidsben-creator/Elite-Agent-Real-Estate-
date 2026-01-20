import { BentoGrid } from '@/components/bento-grid';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/hero';
import { MobileQuickActionBar } from '@/components/mobile-quick-action-bar';
import { ProofOfExcellence } from '@/components/proof-of-excellence';
import { Visionary } from '@/components/visionary';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <main>
        <Hero />
        <BentoGrid />
        <Visionary />
        <ProofOfExcellence />
      </main>
      <Footer />
      <MobileQuickActionBar />
    </div>
  );
}
