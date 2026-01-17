import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Button } from './ui/button';
import { Download, Calendar } from 'lucide-react';

export function Visionary() {
  const agentImage = PlaceHolderImages.find((img) => img.id === 'visionary-portrait');
  const wineImage = PlaceHolderImages.find((img) => img.id === 'visionary-wine');
  const architectureImage = PlaceHolderImages.find((img) => img.id === 'visionary-architecture');

  if (!agentImage || !wineImage || !architectureImage) {
    return null;
  }

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[600px] lg:h-full w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={agentImage.imageUrl}
              alt={agentImage.description}
              data-ai-hint={agentImage.imageHint}
              fill
              className="object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r" />
          </div>

          <div className="relative lg:-ml-32">
            <div className="p-8 md:p-12 bg-black/50 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl text-white">
              <h2 className="font-headline text-4xl md:text-5xl mb-4 leading-tight">
                Alex Sterling
              </h2>
              <p className="text-xs text-white/50 break-all mb-4">Placeholder URL (for your reference): {agentImage.imageUrl}</p>
              <p className="text-lg text-white/80 mb-8 max-w-xl">
                More than an agent, I am an architect of lifestyles. My vision is to curate spaces that are not just homes, but extensions of your aspirations, blending timeless design with modern innovation. Let's build your legacy together.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Curated Favorites</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="group relative rounded-lg overflow-hidden">
                    <Image
                      src={wineImage.imageUrl}
                      alt={wineImage.description}
                      data-ai-hint={wineImage.imageHint}
                      height={150}
                      width={150}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-semibold">Signature Wine</span>
                    </div>
                  </div>
                   <div className="group relative rounded-lg overflow-hidden">
                    <Image
                      src={architectureImage.imageUrl}
                      alt={architectureImage.description}
                      data-ai-hint={architectureImage.imageHint}
                      height={150}
                      width={150}
                      className="object-cover w-full h-full"
                    />
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white font-semibold text-center">Favorite Architectural Style</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
                  <Download className="mr-2" />
                  Download My Local Insider Guide
                </Button>
                <Button size="lg">
                  <Calendar className="mr-2" />
                  Schedule a Private Portfolio Review
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
