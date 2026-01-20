'use client';

import { useState } from 'react';
import { MessageSquare, ArrowUp, Plus } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function MobileQuickActionBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-end gap-2">
        {/* Expanded menu items */}
        <div
          className={cn(
            'flex flex-col items-end gap-2 transition-all duration-300 ease-out',
            isOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          )}
        >
          {/* Back to top button */}
          <Button
            onClick={scrollToTop}
            aria-label="Back to Top"
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-2 border-primary bg-background/50 text-primary backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>

          {/* Text Alex button */}
          <Button asChild className="h-10 rounded-full bg-background/50 backdrop-blur-md border border-white/20 font-semibold text-white hover:bg-white/90 hover:text-black px-4">
            <Link
              href="https://wa.me/13105550123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Text Alex
            </Link>
          </Button>
        </div>

        {/* Main toggle button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          size="icon"
          className="h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-2xl transition-all hover:scale-105 active:scale-95"
        >
          <Plus
            className={cn(
              'h-6 w-6 transition-transform duration-300',
              isOpen && 'rotate-45'
            )}
          />
        </Button>
      </div>
    </div>
  );
}
