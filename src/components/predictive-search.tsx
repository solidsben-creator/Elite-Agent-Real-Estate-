'use client';

import { Search } from 'lucide-react';
import { Input } from './ui/input';

export function PredictiveSearch() {
  return (
    <div className="relative w-full">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search by city, address, or style..."
        className="w-full h-14 pl-12 pr-4 text-base bg-background/50"
      />
    </div>
  );
}
