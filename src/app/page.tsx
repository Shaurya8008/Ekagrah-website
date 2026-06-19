import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Heart, ShieldCheck, TrendingUp, Users, ArrowRight, Target, Handshake } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { HeroBackground } from "@/components/ui/HeroBackground";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { programs } from "@/data/programs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex flex-col justify-center bg-[#feecee] overflow-hidden pt-24 pb-16 border-b-2 border-foreground">
        <HeroBackground />
        <Container className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <AnimateOnScroll delay={0.1}>
              <div className="inline-block px-4 py-2 bg-white border-2 border-foreground shadow-[0px_4px_0px_#141414] text-foreground font-heading font-bold text-sm uppercase tracking-wider rounded-full mb-6">
                Ekagrah Seva Foundation
              </div>
            </AnimateOnScroll>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground font-black mb-6 leading-[1.1] max-w-2xl">
              <AnimatedText text="Empowering" /> <br/>
              <AnimatedText text="Communities" /> <br/>
              <span className="text-primary bg-yellow-100 px-2 leading-tight border-2 border-foreground rotate-[-2deg] inline-block mt-2 shadow-[0px_4px_0px_#141414]">Together.</span>
            </h1>
            
            <AnimateOnScroll delay={0.3}>
              <p className="font-body text-xl md:text-2xl text-foreground-muted mb-10 max-w-xl font-medium">
                Dedicated to bridging the gap for the underserved through sustainable development, education, and immediate relief programs.
              </p>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button 
                  href="/donate" 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-4"
                >
                  Start Today
                </Button>
                <Button 
                  href="/campaigns/start" 
                  variant="secondary" 
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-4"
                >
                  Start Campaign
                </Button>
              </div>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.5} direction="left" className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full hidden md:block">
            <div className="absolute inset-0 bg-secondary rounded-[10px] border-2 border-foreground shadow-[12px_12px_0px_#141414] translate-x-4 translate-y-4"></div>
            <div className="relative w-full h-full border-2 border-foreground rounded-[10px] overflow-hidden bg-white z-10">
              <Image 
                src="/images/programs/swasthya-sathi.png" 
                alt="Medical Camp in Rural India" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Impact in Numbers */}
      <section className="bg-primary text-white border-b-2 border-foreground py-16 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <AnimateOnScroll delay={0.1} direction="up">
              <div className="text-5xl md:text-6xl font-black font-heading mb-2">
                <AnimatedCounter to={10000} suffix="+" />
              </div>
              <p className="font-bold uppercase tracking-wider text-sm opacity-90">Lives Impacted</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.2} direction="up">
              <div className="text-5xl md:text-6xl font-black font-heading mb-2">
                <AnimatedCounter to={50} suffix="+" />
              </div>
              <p className="font-bold uppercase tracking-wider text-sm opacity-90">Campaigns Funded</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.3} direction="up">
              <div className="text-5xl md:text-6xl font-black font-heading mb-2">
                <AnimatedCounter to={6} />
              </div>
              <p className="font-bold uppercase tracking-wider text-sm opacity-90">Core Programs</p>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.4} direction="up">
              <div className="text-5xl md:text-6xl font-black font-heading mb-2">
                <AnimatedCounter to={100} suffix="+" />
              </div>
              <p className="font-bold uppercase tracking-wider text-sm opacity-90">Active Volunteers</p>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Our Core Programs Highlight */}
      <section className="py-24 bg-[#ffe5b3] border-b-2 border-foreground relative">
        <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <SectionHeading
              title="Our Core Programs"
              subtitle="We focus on sustainable development across education, health, and empowerment to create lasting change."
              align="left"
              className="max-w-2xl mb-0"
            />
            <Button href="/programs" variant="outline" className="hidden md:flex bg-white hover:bg-secondary">
              View All Programs <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <AnimateOnScroll key={program.id} delay={0.1 * (index + 1)} direction="up">
                <BrutalistCard hoverEffect className="h-full flex flex-col bg-white">
                  <div className="relative h-56 border-b-2 border-foreground">
                    <Image src={program.image} alt={program.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-2xl font-black mb-3">{program.title}</h3>
                    <p className="font-medium text-foreground-muted mb-6 flex-1">{program.shortDescription}</p>
                    <Button href={`/programs/${program.slug}`} variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </BrutalistCard>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="mt-8 flex justify-center md:hidden">
            <Button href="/programs" variant="outline" className="w-full bg-white hover:bg-secondary">
              View All Programs <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-white border-b-2 border-foreground">
        <Container>
          <div className="text-center mb-16">
            <SectionHeading
              title="How We Work"
              subtitle="Our grassroots approach ensures every donation makes a direct, measurable impact."
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Step 1 */}
            <AnimateOnScroll direction="left" delay={0.1}>
              <BrutalistCard className="p-8 md:p-10 bg-[#feecee] flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-20 h-20 shrink-0 bg-primary text-white border-4 border-foreground shadow-[4px_4px_0px_#141414] rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-3xl font-black mb-3 uppercase">1. Identify the Need</h3>
                  <p className="text-lg font-medium text-foreground-muted">We conduct extensive grassroots surveying with local communities to understand their most urgent challenges, ensuring we don't just assume solutions, but actually listen.</p>
                </div>
              </BrutalistCard>
            </AnimateOnScroll>

            {/* Step 2 */}
            <AnimateOnScroll direction="right" delay={0.2}>
              <BrutalistCard className="p-8 md:p-10 bg-[#ffe5b3] flex flex-col md:flex-row-reverse gap-8 items-center md:items-start">
                <div className="w-20 h-20 shrink-0 bg-secondary text-foreground border-4 border-foreground shadow-[4px_4px_0px_#141414] rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <div className="text-center md:text-right">
                  <h3 className="font-heading text-3xl font-black mb-3 uppercase">2. Mobilize Resources</h3>
                  <p className="text-lg font-medium text-foreground-muted">We maintain 100% transparency as we rally funds and volunteers. You always know exactly where your donation is going and who it is helping.</p>
                </div>
              </BrutalistCard>
            </AnimateOnScroll>

            {/* Step 3 */}
            <AnimateOnScroll direction="left" delay={0.3}>
              <BrutalistCard className="p-8 md:p-10 bg-white flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-20 h-20 shrink-0 bg-white text-primary border-4 border-foreground shadow-[4px_4px_0px_#141414] rounded-full flex items-center justify-center">
                  <Handshake className="w-10 h-10" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="font-heading text-3xl font-black mb-3 uppercase">3. Execute & Empower</h3>
                  <p className="text-lg font-medium text-foreground-muted">We partner with local volunteers to execute the project, ensuring the community takes ownership of the solution for long-term sustainability and empowerment.</p>
                </div>
              </BrutalistCard>
            </AnimateOnScroll>
          </div>
        </Container>
      </section>

      {/* Campaigns Section */}
      <section className="py-24 bg-[#feecee] border-b-2 border-foreground relative">
        <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
        <Container className="relative z-10">
          <div className="flex justify-between items-end mb-16">
            <SectionHeading
              title="Active Campaigns"
              subtitle="Support our ongoing initiatives to bring immediate relief and long-term sustainable growth."
              align="left"
              className="max-w-2xl"
            />
            <Button href="/donate" variant="outline" className="hidden md:flex">
              View All <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Campaign 1 */}
            <AnimateOnScroll delay={0.1} direction="up">
              <BrutalistCard hoverEffect className="flex flex-col h-full">
                <div className="relative h-64 border-b-2 border-foreground">
                  <Image src="/images/programs/samudayik-vikas.png" alt="Food Distribution" fill className="object-cover" />
                  <div className="absolute top-4 right-4 bg-secondary text-foreground font-bold px-3 py-1 border-2 border-foreground rounded-full text-xs shadow-[0px_2px_0px_#141414]">
                    Urgent
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-2">Monthly Ration Kits</h3>
                  <p className="text-foreground-muted mb-6 flex-1">Provide essential groceries to families struggling with extreme poverty.</p>
                  
                  <div className="w-full bg-gray-200 h-4 rounded-full border-2 border-foreground mb-2 overflow-hidden">
                    <div className="bg-primary h-full border-r-2 border-foreground w-[65%]"></div>
                  </div>
                  <div className="flex justify-between text-sm font-bold mb-6">
                    <span>₹65,000 Raised</span>
                    <span>Goal: ₹1,00,000</span>
                  </div>

                  <Button href="/donate?type=product" variant="primary" className="w-full">
                    Donate Kit
                  </Button>
                </div>
              </BrutalistCard>
            </AnimateOnScroll>

            {/* Campaign 2 */}
            <AnimateOnScroll delay={0.2} direction="up">
              <BrutalistCard hoverEffect className="flex flex-col h-full">
                <div className="relative h-64 border-b-2 border-foreground">
                  <Image src="/images/stories/education-ravi.png" alt="Education" fill className="object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-2">Child Education Fund</h3>
                  <p className="text-foreground-muted mb-6 flex-1">Sponsor a child's education for a year including books and tuition.</p>
                  
                  <div className="w-full bg-gray-200 h-4 rounded-full border-2 border-foreground mb-2 overflow-hidden">
                    <div className="bg-secondary h-full border-r-2 border-foreground w-[40%]"></div>
                  </div>
                  <div className="flex justify-between text-sm font-bold mb-6">
                    <span>₹2,00,000 Raised</span>
                    <span>Goal: ₹5,00,000</span>
                  </div>

                  <Button href="/donate?type=monthly" variant="primary" className="w-full bg-secondary text-foreground hover:bg-[#ffb732]">
                    Subscribe Monthly
                  </Button>
                </div>
              </BrutalistCard>
            </AnimateOnScroll>

            {/* Campaign 3 */}
            <AnimateOnScroll delay={0.3} direction="up">
              <BrutalistCard hoverEffect className="flex flex-col h-full">
                <div className="relative h-64 border-b-2 border-foreground bg-gray-100 flex items-center justify-center">
                  <ShieldCheck className="w-20 h-20 text-gray-400" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-2">Women Empowerment</h3>
                  <p className="text-foreground-muted mb-6 flex-1">Skill development workshops for financial independence.</p>
                  
                  <div className="w-full bg-gray-200 h-4 rounded-full border-2 border-foreground mb-2 overflow-hidden">
                    <div className="bg-primary h-full border-r-2 border-foreground w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-sm font-bold mb-6">
                    <span>₹85,000 Raised</span>
                    <span>Goal: ₹1,00,000</span>
                  </div>

                  <Button href="/donate?type=once" variant="outline" className="w-full">
                    Donate Once
                  </Button>
                </div>
              </BrutalistCard>
            </AnimateOnScroll>
          </div>
          <div className="mt-8 flex justify-center md:hidden">
            <Button href="/donate" variant="outline" className="w-full">
              View All Campaigns <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-secondary border-b-2 border-foreground">
        <Container>
          <div className="bg-white border-4 border-foreground rounded-[20px] shadow-[16px_16px_0px_#141414] p-10 md:p-16 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-4xl md:text-5xl font-black mb-6">Start a Campaign for a Cause</h2>
                <p className="text-lg md:text-xl font-medium mb-8">
                  Do you know a community in need? You can partner with us to start a fundraising campaign and mobilize resources.
                </p>
                <ul className="space-y-4 mb-8 font-bold text-lg">
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center border-2 border-foreground shrink-0">1</div>
                    Submit the campaign details
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary text-foreground flex items-center justify-center border-2 border-foreground shrink-0">2</div>
                    Our team verifies the requirement
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white text-foreground flex items-center justify-center border-2 border-foreground shrink-0">3</div>
                    Campaign goes live for donations
                  </li>
                </ul>
                <Button href="/campaigns/start" variant="primary" size="lg">Start Now</Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <BrutalistCard className="p-6 bg-[#feecee]">
                  <TrendingUp className="w-12 h-12 text-primary mb-4" />
                  <h4 className="font-bold text-2xl mb-1">50+</h4>
                  <p className="font-medium text-sm">Campaigns Funded</p>
                </BrutalistCard>
                <BrutalistCard className="p-6 bg-[#ffe5b3] translate-y-8">
                  <Users className="w-12 h-12 text-foreground mb-4" />
                  <h4 className="font-bold text-2xl mb-1">10k+</h4>
                  <p className="font-medium text-sm">Lives Impacted</p>
                </BrutalistCard>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
