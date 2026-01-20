import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function BentoGrid() {
  const images = PlaceHolderImages.filter(img => img.id.startsWith('bento-'));

  const BentoCard = ({
    className,
    image,
  }: {
    className?: string;
    image: (typeof images)[0];
  }) => (
    <Card
      className={cn(
        'group relative overflow-hidden rounded-xl border-2 border-border shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-primary h-full',
        className
      )}
    >
      <Image
        src={image.imageUrl}
        alt={image.description}
        fill
        data-ai-hint={image.imageHint}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        priority={images.indexOf(image) < 3}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-lg font-semibold text-white capitalize">
          {image.imageHint.replace(/ /g, ' & ')}
        </h3>
        <p className="text-sm text-white/80">{image.description}</p>
      </div>
    </Card>
  );

  if (images.length < 6) {
    return null;
  }

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-headline text-center mb-12">
          Featured Lifestyles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[20rem] gap-4 lg:gap-6">
          <Link href="/properties" className="lg:col-span-2 lg:row-span-2">
            <BentoCard image={images[0]} />
          </Link>
          <Link href="/properties" className="md:col-span-2 lg:col-span-1">
            <BentoCard image={images[1]} />
          </Link>
          <Link href="/properties">
            <BentoCard image={images[2]} />
          </Link>
          <Link href="/properties">
            <BentoCard image={images[3]} />
          </Link>
          <Link href="/properties" className="lg:col-span-2">
            <BentoCard image={images[4]} />
          </Link>
          <Link href="/properties">
            <BentoCard image={images[5]} />
          </Link>
        </div>
      </div>
    </section>
  );
}
