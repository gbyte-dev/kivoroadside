import SiteHeader from "@/app/components/site-header";
import HeroSection from "@/app/components/hero-section";
import ServicesCarousel from "@/app/components/services-carousel";
import CustomerRatings from "@/app/components/customer-ratings";
import ServiceCards from "@/app/components/service-cards";
import FosterLove from "@/app/components/foster-love";
import DontWaitCta from "@/app/components/dont-wait-cta";
import Disclaimers from "@/app/components/disclaimers";
import SiteFooter from "@/app/components/site-footer";
import FeedbackButton from "@/app/components/feedback-button";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white">
        <HeroSection />
        {/* On the reference, the ratings block sits inside the same gray box */}
        <ServicesCarousel>
          <CustomerRatings />
        </ServicesCarousel>
        <ServiceCards />
      </main>
      <FosterLove />
      <DontWaitCta />
      <Disclaimers />
      <SiteFooter />
      <FeedbackButton />
    </>
  );
}