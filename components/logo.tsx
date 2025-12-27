import Image from 'next/image';
import iconSrc from '@/app/icon.svg';

export function Logo({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={iconSrc}
                alt="CalcTrust Logo"
                fill
                className="object-contain"
            />
        </div>
    );
}
