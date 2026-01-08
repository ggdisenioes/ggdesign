import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { Benefits } from "@/components/home/Benefits";
import { Projects } from "@/components/home/Projects";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Pillars />
      <Benefits />
      <Projects />
      <CTA />
    </Layout>
  );
};

export default Index;
