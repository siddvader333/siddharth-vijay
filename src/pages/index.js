import React from "react";
import Layout from "../layout/layout";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
    </Layout>
  );
}

export default IndexPage;
