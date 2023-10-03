import Cta from "@/app/(home)/Cta";
import Facts from "@/app/(home)/Facts";
import Faq from "@/app/(home)/Faq";
import Features from "@/app/(home)/Features";
import Footer from "@/app/(home)/Footer";
import Hero from "@/app/(home)/Hero";
import HowItWorks from "@/app/(home)/HowItWorks";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      <Features />
      <Facts />
      <HowItWorks />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
