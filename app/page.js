import Image from "next/image";
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import DiagnosisSection from '@/components/DiagnosisSection'
import FeaturesSection from '@/components/FeaturesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DiagnosisSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
