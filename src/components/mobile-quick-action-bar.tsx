import { MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

export function MobileQuickActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t md:hidden z-50">
      <Button asChild className="w-full h-14 text-lg font-bold" size="lg">
        <Link href="https://wa.me/13105550123" target="_blank" rel="noopener noreferrer">
          <MessageSquare className="mr-2 h-6 w-6" />
          Text Alex
        </Link>
      </Button>
    </div>
  );
}
