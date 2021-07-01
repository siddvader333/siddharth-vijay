import React from "react";
import Layout from "../layout/layout";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkSection from "../sections/WorkSection";
import ProjectSection from "../sections/ProjectSection";
import HeroWaveBackground from "../components/backgrounds/HeroWaveBackground";

function IndexPage() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ProjectSection />
    </Layout>
  );
}

export default IndexPage;
