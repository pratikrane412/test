import React from "react";
import Hero from "../../components/performance-marketing-component/Hero";
import StatsStrip from "../../components/performance-marketing-component/StatsStrip";
import CampaignTypes from "../../components/performance-marketing-component/CampaignTypes";
import GrowthCTA from "../../components/performance-marketing-component/GrowthCTA";
import HowItWorks from "../../components/performance-marketing-component/HowItWorks";
import WhyChooseIbraine from "../../components/performance-marketing-component/WhyChooseIbraine";
import QuoteForm from "../../components/Common component/QuoteForm"
import FAQSection from "../../components/performance-marketing-component/FAQSection";

const PerformanceMarketing = () => {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <CampaignTypes />
      <GrowthCTA />
      <HowItWorks />
      <WhyChooseIbraine />
      <FAQSection />
      <QuoteForm />
    </main>
  );
};

export default PerformanceMarketing;