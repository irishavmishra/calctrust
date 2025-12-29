import Link from 'next/link';
import { Home, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
    return (
        <main className="flex-1 flex items-center justify-center px-6 py-24">
            <div className="text-center space-y-8 max-w-lg">
                {/* 404 Number */}
                <div className="space-y-2">
                    <h1 className="text-8xl md:text-9xl font-bold text-muted-foreground/20">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        Page not found
                    </h2>
                    <p className="text-muted-foreground">
                        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild size="lg" className="rounded-full">
                        <Link href="/">
                            <Home className="h-4 w-4 mr-2" />
                            Go Home
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/usa/calculators">
                            <Search className="h-4 w-4 mr-2" />
                            Browse Calculators
                        </Link>
                    </Button>
                </div>
            </div>
        </main>
    );
}
