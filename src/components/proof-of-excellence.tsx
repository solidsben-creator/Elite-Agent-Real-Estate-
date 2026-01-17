'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BadgeCheck } from 'lucide-react';
import { Card } from './ui/card';

const testimonials = [
  {
    clientName: 'The Chen Family',
    videoUrl:
      'https://weqsdvabryueorchngln.supabase.co/storage/v1/object/public/Modern%20Agent%20Website/Testimonials/testimonial-1.mp4',
    posterId: 'testimonial-video-1-poster',
    quote: 'Alex made our dream a reality. A true professional with an unmatched eye for detail.',
  },
  {
    clientName: 'Sarah Jenkins',
    videoUrl:
      'https://weqsdvabryueorchngln.supabase.co/storage/v1/object/public/Modern%20Agent%20Website/Testimonials/testimonial-2.mp4',
    posterId: 'testimonial-video-2-poster',
    quote: 'The most seamless and luxurious real estate experience I’ve ever had.',
  },
  {
    clientName: 'The Peterson Group',
    videoUrl:
      'https://weqsdvabryueorchngln.supabase.co/storage/v1/object/public/Modern%20Agent%20Website/Testimonials/testimonial-3.mp4',
    posterId: 'testimonial-video-3-poster',
    quote: 'Beyond an agent—a visionary partner who understood our legacy.',
  },
];

const socialProofItems = [
  'Just Sold: 123 Skyview Penthouse in 4 Days',
  'New Record Sale: $4.2M in Highland Park',
  'Just Listed: The Oceanfront Villa',
  'Another Happy Client in Beverly Hills',
  'Record Price Per Square Foot in Downtown',
];

export function ProofOfExcellence() {
  const background = PlaceHolderImages.find((img) => img.id === 'proof-background');
  const highImpactQuote = testimonials[1]; // Use the second testimonial for the big quote

  return (
    <section className="relative py-24 bg-secondary overflow-hidden">
      {background && (
        <Image
          src={background.imageUrl}
          alt={background.description}
          fill
          className="object-cover opacity-10"
        />
      )}
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-headline mb-4">Proof of Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our results speak for themselves. Hear from clients who have
            experienced the Elite Agent difference.
          </p>
        </div>

        {/* Cinematic Endorsements */}
        <div className="mb-24">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => {
                const poster = PlaceHolderImages.find(
                  (img) => img.id === testimonial.posterId
                );
                return (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3 flex justify-center"
                  >
                    <VideoStory
                      clientName={testimonial.clientName}
                      videoUrl={testimonial.videoUrl}
                      posterUrl={poster?.imageUrl}
                    />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="text-accent border-accent" />
            <CarouselNext className="text-accent border-accent" />
          </Carousel>
        </div>

        {/* High-Impact Quote */}
        <div className="mb-24 max-w-5xl mx-auto">
          <Card className="p-8 md:p-12 bg-black/50 backdrop-blur-xl border border-accent/50 shadow-2xl text-center">
            <p className="font-headline text-3xl md:text-5xl text-white mb-6">
              &ldquo;{highImpactQuote.quote}&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4 text-accent">
              <BadgeCheck className="w-6 h-6" />
              <span className="text-lg font-semibold tracking-wider text-white/90">
                {highImpactQuote.clientName} &mdash;{' '}
                <span className="text-accent">Verified Transaction</span>
              </span>
            </div>
          </Card>
        </div>
      </div>
      <SocialProofTicker />
    </section>
  );
}

function VideoStory({
  clientName,
  videoUrl,
  posterUrl,
}: {
  clientName: string;
  videoUrl: string;
  posterUrl?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <div
      className="relative aspect-[9/16] w-[280px] rounded-3xl overflow-hidden border-2 border-accent/50 shadow-xl group transition-all duration-300 hover:shadow-accent/20 hover:border-accent"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        poster={posterUrl}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-6 h-6 text-accent" />
          <p className="font-bold text-lg">{clientName}</p>
        </div>
        {posterUrl && <p className="text-xs break-all">Placeholder: {posterUrl}</p>}
      </div>
    </div>
  );
}

function SocialProofTicker() {
  const items = [...socialProofItems, ...socialProofItems]; // Duplicate for seamless loop

  return (
    <div className="relative w-full h-16 bg-background/50 backdrop-blur-sm border-t border-b border-border overflow-hidden">
      <div className="absolute top-0 left-0 w-max h-full flex items-center animate-ticker">
        {items.map((item, index) => (
          <span
            key={index}
            className="text-muted-foreground uppercase tracking-widest text-sm px-12 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
