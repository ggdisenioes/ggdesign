import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Hero } from "@/components/home/Hero";
import { Pillars } from "@/components/home/Pillars";
import { Benefits } from "@/components/home/Benefits";
import { Projects } from "@/components/home/Projects";
import { CTA } from "@/components/home/CTA";
import { useLanguage } from "@/i18n/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo title={t.seo.home.title} description={t.seo.home.description} />
      <Hero />
      <Pillars />
      <Benefits />
      <Projects />
      <CTA />
    </Layout>
  );
};

export default Index;
