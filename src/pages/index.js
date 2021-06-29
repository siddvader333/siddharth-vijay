import React from "react";
import Layout from "../layout/layout";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkSection from "../sections/WorkSection";

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <WorkSection />
    </Layout>
  );
}

export default IndexPage;
