import { Logo } from '@/components/logo';
import { PredictiveSearch } from './predictive-search';
import { Button } from './ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroImage?.imageUrl}
        className="absolute inset-0 w-full h-full object-cover brightness-[.8]"
      >
        <source
          src="https://weqsdvabryueorchngln.supabase.co/storage/v1/object/public/Modern%20Agent%20Website/Drone%20View%20of%20Luxury%20Homes%20by%20the%20Sea.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="p-8 md:p-12 bg-black/30 rounded-xl border border-white/10 shadow-2xl">
            <div className="mb-8">
              <Logo isHero={true} />
            </div>
            <h1 className="font-headline text-4xl md:text-6xl text-white mb-4 leading-tight">
              Your Vision, Realized.
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-xl">
              Experience the pinnacle of luxury real estate with unparalleled
              service and expertise. Find not just a house, but a lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PredictiveSearch />
              <Button size="lg" className="shrink-0">
                Explore Now
              </Button>
            </div>
          </div>
          <div>{/* Right side is empty, showing the video */}</div>
        </div>
      </div>
    </section>
  );
}
