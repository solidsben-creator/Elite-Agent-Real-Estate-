import { Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type LogoProps = {
  isHero?: boolean;
};

export function Logo({ isHero = false }: LogoProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="p-2 bg-primary rounded-md">
        <Building2 className="h-6 w-6 text-primary-foreground" />
      </div>
      <span
        className={cn(
          'text-2xl font-semibold font-headline',
          isHero ? 'text-white' : 'text-foreground'
        )}
      >
        Elite Agent
      </span>
    </div>
  );
}
