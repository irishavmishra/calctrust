import Link from 'next/link';
import { CheckCircle, Shield, Calculator, Lock, MapPin, Sparkles, TrendingUp, Users, Award, Zap, Eye, Clock, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SectionHeader } from '@/components/ui/section-header';
import { StatCard } from '@/components/ui/stat-card';
import { FeatureCard } from '@/components/ui/feature-card';
import { TextLink } from '@/components/ui/text-link';
import { ChecklistItem } from '@/components/ui/checklist-item';

export default function GlobalHomePage() {
  return (
    <main className="flex-1">
      {/* ============================================ */}
      {/* HERO SECTION - Modern Aurora Design */}
      {/* ============================================ */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20 md:pt-48 md:pb-32">
        {/* Animated Background */}
        <div className="absolute inset-0 aurora-bg -z-10" />
        <div className="absolute inset-0 dot-pattern -z-10" />

        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }} />

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            {/* Trust Badge */}
            <div className="flex justify-center reveal-up" style={{ animationDelay: '0.1s' }}>
              <Badge className="px-4 py-2 text-sm font-medium bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10">
                <Award className="h-4 w-4 mr-2" />
                Built on Official IRS & State Tax Rules
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] reveal-up" style={{ animationDelay: '0.2s' }}>
              Financial Calculators
              <br />
              <span className="gradient-text">You Can Trust</span>
            </h1>

            {/* Subheading */}
            <p className="mx-auto max-w-3xl text-lg md:text-xl text-muted-foreground leading-relaxed text-balance reveal-up" style={{ animationDelay: '0.3s' }}>
              Accurate salary, paycheck, and tax calculations powered by official U.S. federal and state tax rules.
              <span className="block mt-2 font-semibold text-foreground">No ads. No guesswork. Just math that works.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-up" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Link href="/usa">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Explore U.S. Calculators
                </Link>
              </Button>

              <TextLink href="/methodology" variant="primary" className="text-sm">
                View Methodology
              </TextLink>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 pt-8 reveal-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="h-2 w-2 rounded-full bg-foreground animate-pulse" />
                <span className="text-muted-foreground">Updated for 2025</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">IRS Data Sources</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">274+ Calculators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* ANIMATED STATS SECTION */}
      {/* ============================================ */}
      <section className="py-16 border-y border-border/50 bg-muted/30 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard iconName="Calculator" value="274+" label="Calculators" delay={0} />
            <StatCard iconName="MapPin" value="50" label="States Covered" delay={0.1} />
            <StatCard iconName="CheckCircle" value="100%" label="Accurate" delay={0.2} />
            <StatCard iconName="Shield" value="0" label="Ads or Tracking" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURES - Modern Bento Grid */}
      {/* ============================================ */}
      <section className="py-24 px-6">
        <div className="container max-w-7xl mx-auto space-y-16">
          <SectionHeader
            badge={{ icon: Zap, text: 'Why CalcTrust' }}
            heading={<>Built to <span className="text-gradient-primary">Just Work</span></>}
            subheading="Every feature designed with accuracy, privacy, and trust at its core"
          />

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 - Large Card */}
            <div className="md:col-span-2 bento-card feature-card p-8 md:p-12 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight">
                    Accurate calculations, every single time
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built on official IRS tax brackets and state-specific rules. Updated annually. Trusted by professionals who demand precision.
                  </p>
                  <TextLink href="/usa">Try a calculator</TextLink>
                </div>
                <div className="relative">
                  <div className="w-32 h-32 rounded-3xl bg-zinc-900 shadow-xl flex items-center justify-center pulse-glow">
                    <CheckCircle className="h-16 w-16 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bento-card feature-card p-8 flex flex-col justify-between bg-gradient-to-br from-accent/5 to-transparent">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Get answers in 30 seconds
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  No signup. No unnecessary steps. Just enter your numbers and get instant, accurate results.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bento-card feature-card p-8 flex flex-col justify-between bg-gradient-to-br from-secondary/5 to-transparent">
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-2xl bg-secondary/10 flex items-center justify-center">
                  <Lock className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Your data stays private
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  All calculations happen in your browser. No data stored, tracked, or shared. Ever.
                </p>
              </div>
              <TextLink href="/disclaimer" variant="secondary" className="mt-6">
                Privacy promise
              </TextLink>
            </div>

            {/* Feature 4 - Wide Card */}
            <div className="md:col-span-2 bento-card feature-card p-8 grid-pattern relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-semibold tracking-tight">
                    All 50 states covered
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Federal plus state-specific taxes. From California to New York, Texas to Florida. One platform, complete coverage.
                  </p>
                  <TextLink href="/usa">Explore by state</TextLink>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['CA', 'NY', 'TX', 'FL', 'PA', 'IL', 'OH', 'GA', 'NC'].map((state) => (
                    <div
                      key={state}
                      className="w-16 h-16 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:scale-105 transition-all flex items-center justify-center text-sm font-semibold"
                    >
                      {state}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHO IT'S FOR */}
      {/* ============================================ */}
      <section className="py-24 border-t border-border/40 mesh-gradient px-6">
        <div className="container max-w-6xl mx-auto space-y-16">
          <SectionHeader
            badge={{ icon: Users, text: 'Built For You' }}
            heading={<>Your everyday pay decisions, <span className="text-gradient-accent">simplified</span></>}
            subheading="Whether you're negotiating a raise or planning your budget, get the clarity you need"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Users}
              iconColor="primary"
              title="Employees"
              description="See your real take-home pay before you spend. Understand raises, overtime, and bonuses instantly."
              variant="glass"
            />
            <FeatureCard
              icon={TrendingUp}
              iconColor="secondary"
              title="Job Seekers"
              description="Convert job offers into actual hourly worth. Compare multiple offers with confidence."
              variant="glass"
            />
            <FeatureCard
              icon={Sparkles}
              iconColor="accent"
              title="Freelancers"
              description="Know your after-tax rates before you quote. Account for self-employment taxes accurately."
              variant="glass"
            />
            <FeatureCard
              icon={FileCheck}
              iconColor="primary"
              title="HR Teams"
              description="Run payroll scenarios without complex software. Quick, transparent, professional calculations."
              variant="glass"
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY WE EXIST */}
      {/* ============================================ */}
      <section className="py-24 border-t border-border/40 bg-card px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-foreground/5 text-foreground border-foreground/10">
                <Shield className="h-3 w-3 mr-1" />
                Our Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                Why CalcTrust exists
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Most online calculators are outdated, overloaded with ads, or unclear about their math.
              </p>
              <p className="text-lg leading-relaxed">
                We built CalcTrust as an alternative—a <span className="font-semibold text-primary">financial reference tool</span> you can actually rely on.
              </p>
              <TextLink href="/methodology" className="text-lg">
                Read our full methodology
              </TextLink>
            </div>

            <ul className="space-y-4">
              <ChecklistItem icon={FileCheck}>
                Calculations based on official IRS and state tax data
              </ChecklistItem>
              <ChecklistItem icon={Eye}>
                Transparent methodology—see exactly how we calculate
              </ChecklistItem>
              <ChecklistItem icon={Shield}>
                No accounts, no tracking, no data collection
              </ChecklistItem>
              <ChecklistItem icon={TrendingUp}>
                Updated annually when tax rules change
              </ChecklistItem>
              <ChecklistItem icon={Award}>
                Designed for clarity, not clicks or ad revenue
              </ChecklistItem>
            </ul>
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-primary/20 bg-primary/5">
            <p className="text-sm text-muted-foreground italic flex items-start gap-3">
              <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <span>
                Calculations are reviewed by a financial methodology team focused on payroll and tax accuracy. Updated for 2025 tax rules.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TRUST SIGNALS */}
      {/* ============================================ */}
      <section className="py-24 border-t border-border/40 aurora-bg px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Built with <span className="text-gradient-primary">care</span> and <span className="text-gradient-accent">precision</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Shield}
              title="Privacy-first design"
              description="No data stored or transmitted"
            />
            <FeatureCard
              icon={CheckCircle}
              title="No financial advice claims"
              description="Reference tool only"
            />
            <FeatureCard
              icon={MapPin}
              title="Jurisdiction-specific"
              description="Accurate for your state"
            />
            <FeatureCard
              icon={Calculator}
              title="Professional-grade"
              description="Built like real software"
            />
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA */}
      {/* ============================================ */}
      <section className="py-24 border-t border-border/40 px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-12 md:p-16 text-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
                Get your answer in 30 seconds
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                No signup. No ads. Just accurate calculations you can trust.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild size="lg" className="h-14 px-8 text-base font-semibold rounded-full bg-white text-zinc-900 hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  <Link href="/usa">
                    <Calculator className="h-5 w-5 mr-2" />
                    Explore U.S. Calculators
                  </Link>
                </Button>

                <TextLink href="/methodology" variant="inverted" className="text-sm">
                  View Methodology
                </TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}