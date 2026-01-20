'use client';

import { useState } from 'react';
import { MessageSquare, ArrowUp, X } from 'lucide-react';
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
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative flex flex-col items-end gap-1">
        {/* Expanded menu items */}
        <div
          className={cn(
            'flex flex-col items-end gap-1 transition-all duration-300 ease-out',
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
            className="h-7 w-7 rounded-full border-2 border-primary bg-black/30 text-primary backdrop-blur-md hover:bg-primary hover:text-primary-foreground"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>

          {/* Text Alex button */}
          <Button asChild className="h-7 rounded-full bg-black/30 backdrop-blur-md border border-white/20 font-semibold text-white hover:bg-white/90 hover:text-black px-2.5 text-xs">
            <Link
              href="https://wa.me/13105550123"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="mr-1 h-3 w-3" />
              Text Alex
            </Link>
          </Button>
        </div>

        {/* Main toggle button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          size="icon"
          className="h-9 w-9 rounded-full bg-black/30 backdrop-blur-md border border-white/20 text-white shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          {isOpen ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
        </Button>
      </div>
    </div>
  );
}
