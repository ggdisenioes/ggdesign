import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/Seo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <Seo title={t.seo.notFound.title} description={t.seo.notFound.description} noindex />
      <section className="min-h-[60vh] flex items-center justify-center py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="font-display text-7xl sm:text-8xl font-bold text-gradient mb-6">404</p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              {t.notFound.title}
            </h1>
            <p className="text-muted-foreground text-lg mb-10">
              {t.notFound.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/">
                  <ArrowLeft size={18} className="mr-2" />
                  {t.notFound.backHome}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contacto">
                  <MessageCircle size={18} className="mr-2" />
                  {t.notFound.contact}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
