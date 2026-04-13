import React from "react";
import SEOHero from "../../components/seo-services-component/SEOHero";
import SEOHighlights from "../../components/seo-services-component/SEOHighlights";
import SEOServicesTabs from "../../components/seo-services-component/SEOServicesTabs";
import SEOProcess from "../../components/seo-services-component/SEOProcess";
import WhyChooseIbraine from "../../components/seo-services-component/WhyChooseIbraine";
import CoreSEOServices from "../../components/seo-services-component/CoreSEOServices";
import FAQSection from "../../components/seo-services-component/FAQSection";
import QuoteForm from "../../components/Common component/QuoteForm"

const SearchEngineOptimization = () => {
  return (
    <main>
      <SEOHero />
      <SEOHighlights />
      <SEOServicesTabs />
      <SEOProcess />
      <WhyChooseIbraine />
      <CoreSEOServices />
      <FAQSection />
       <QuoteForm />
    </main>
  );
};

export default SearchEngineOptimization;