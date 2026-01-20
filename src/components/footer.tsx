import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import { Icons } from './icons';

export function Footer() {
  return (
    <footer className="bg-[#121212] text-white/80 border-t border-accent">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Column 1: Logo & Mission */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Logo isHero={true} />
            <p className="text-sm text-white/60 max-w-xs">
              Curating exceptional lifestyles through visionary real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:col-span-2">
            {/* Column 2: Nav Links & Contact */}
            <div className="grid grid-cols-2 gap-8">
                <div>
                    <h3 className="uppercase tracking-widest text-sm font-semibold mb-4 text-white">
                    Explore
                    </h3>
                    <ul className="space-y-2 text-sm">
                    <li><a href="/properties" className="hover:text-white transition-colors">Properties</a></li>
                    <li><a href="/#featured-lifestyles" className="hover:text-white transition-colors">Lifestyles</a></li>
                    <li><a href="/#proof-of-excellence" className="hover:text-white transition-colors">Proof of Excellence</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
                <div id="contact">
                    <h3 className="uppercase tracking-widest text-sm font-semibold mb-4 text-white">
                    Connect
                    </h3>
                    <div className="space-y-2 text-sm">
                        <p>
                            <a href="mailto:alex.sterling@eliteagent.com" className="text-primary hover:underline">
                                alex.sterling@eliteagent.com
                            </a>
                        </p>
                        <p>(310) 555-0123</p>
                    </div>
                </div>
            </div>


            {/* Column 3: Newsletter */}
            <div>
                <h3 className="uppercase tracking-widest text-sm font-semibold mb-4 text-white">
                Off-Market Newsletter
                </h3>
                <p className="text-sm text-white/60 mb-4">
                Get exclusive access to properties before they hit the market.
                </p>
                <form className="flex items-center gap-2">
                <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-white/10 border-white/20 h-11 text-white placeholder:text-white/50"
                />
                <Button type="submit" size="icon" className="h-11 w-11 shrink-0">
                    <Send />
                </Button>
                </form>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} Elite Agent. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Icons.equalHousing className="h-5 w-5" />
            <Icons.mls className="h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
