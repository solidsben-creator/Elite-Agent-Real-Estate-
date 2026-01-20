import { Footer } from '@/components/footer';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PropertiesPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
       <header className="p-4 lg:p-6 border-b">
         <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <Logo />
            </Link>
            <Button asChild>
                <Link href="/">
                    Back to Home
                </Link>
            </Button>
         </div>
       </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-24 text-center">
            <h1 className="text-5xl font-headline mb-4">Our Properties</h1>
            <p className="text-xl text-muted-foreground mb-8">
                A curated collection of the finest luxury real estate.
            </p>
            <div className="border rounded-xl p-8 bg-secondary">
                <p className="text-lg">Property listings are coming soon.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
