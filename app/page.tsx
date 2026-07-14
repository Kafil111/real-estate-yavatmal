"use client";

import { useState } from "react";

import Navbar from "@/components/Layout/Navbar";
import Hero from "@/components/Hero/Hero";
import SearchSection from "@/components/Home/SearchSection";
import FeaturedProperties from "@/components/Home/FeaturedProperties";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import StatsSection from "@/components/Home/StatsSection";
import ServicesSection from "@/components/Home/ServicesSection";
import CTASection from "@/components/Home/CTASection";
import Testimonials from "@/components/Home/Testimonials";
import FAQ from "@/components/Home/FAQ";
import ContactSection from "@/components/Home/ContactSection";
import FloatingButtons from "@/components/Layout/FloatingButtons";
import Footer from "@/components/Layout/Footer";

import { SearchFilters } from "@/hooks/usePropertyFilters";

export default function Home() {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    type: "",
    budget: "",
    area: "",
  });

  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <SearchSection onSearch={setFilters} />

        <FeaturedProperties filters={filters} />

        <WhyChooseUs />

        <StatsSection />

        <ServicesSection />

        <Testimonials />

        <FAQ />

        <ContactSection />

        <CTASection />

        <Footer />

      </main>

      <FloatingButtons />
    </>
  );
}