import { Hero } from '@/components/home/Hero';
import { StatsSection } from '@/components/home/StatsSection';
import { BentoFeatures } from '@/components/home/BentoFeatures';
import { TargetAudience } from '@/components/home/TargetAudience';
import { MissionSection } from '@/components/home/MissionSection';
import { TrustSignals } from '@/components/home/TrustSignals';
import { CTASection } from '@/components/home/CTASection';

export default function GlobalHomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <StatsSection />
      <BentoFeatures />
      <TargetAudience />
      <MissionSection />
      <TrustSignals />
      <CTASection />
    </main>
  );
}