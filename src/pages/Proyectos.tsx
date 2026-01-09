import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Music, Scissors, Megaphone, Coffee, Bot, GraduationCap, Cog, Heart, BookOpen, Palette } from "lucide-react";

// Project images
import alejandroLernerImg from "@/assets/projects/alejandro-lerner.png";
import veckaImg from "@/assets/projects/vecka.png";
import growwingGroupImg from "@/assets/projects/growwinggroup.png";
import coachingCafeImg from "@/assets/projects/coaching-cafe.png";
import eariImg from "@/assets/projects/eari.png";
import mtEscuelaImg from "@/assets/projects/mt-escuela.png";
import roboticaIndustrialImg from "@/assets/projects/robotica-industrial.png";
import salud24Img from "@/assets/projects/salud24.png";
import siempreVitalImg from "@/assets/projects/siemprevital.png";
import theBornIdImg from "@/assets/projects/thebornid.png";

const projectConfig = {
  alejandroLerner: { icon: Music, image: alejandroLernerImg, technologies: ["WordPress", "PHP", "Spotify API", "Newsletter"], featured: true },
  vecka: { icon: Scissors, image: veckaImg, technologies: ["WooCommerce", "LMS", "MercadoPago", "WordPress"], featured: true },
  growwingGroup: { icon: Megaphone, image: growwingGroupImg, technologies: ["WordPress", "Elementor", "Video", "SEO"], featured: true },
  coachingCafe: { icon: Coffee, image: coachingCafeImg, technologies: ["WordPress", "Calendly", "Forms", "Analytics"] },
  eari: { icon: Bot, image: eariImg, technologies: ["WooCommerce", "LMS", "WordPress", "Pagos"] },
  mtEscuela: { icon: GraduationCap, image: mtEscuelaImg, technologies: ["WooCommerce", "Membresía", "LMS", "Ebooks"] },
  roboticaIndustrial: { icon: Cog, image: roboticaIndustrialImg, technologies: ["WordPress", "SEO", "WhatsApp", "Forms"] },
  salud24: { icon: Heart, image: salud24Img, technologies: ["React", "Telemedicina", "Pagos", "Dashboard"] },
  siempreVital: { icon: BookOpen, image: siempreVitalImg, technologies: ["WordPress", "Suscripción", "Revistas", "Pagos"] },
  theBornId: { icon: Palette, image: theBornIdImg, technologies: ["WordPress", "Portfolio", "Animaciones", "Diseño"] },
};

type ProjectKey = keyof typeof projectConfig;

export default function Proyectos() {
  const { t } = useLanguage();
  const p = t.projectsPage;

  const projectKeys: ProjectKey[] = [
    "alejandroLerner", "vecka", "growwingGroup", "coachingCafe", "eari",
    "mtEscuela", "roboticaIndustrial", "salud24", "siempreVital", "theBornId"
  ];

  // Featured projects first
  const sortedProjects = projectKeys.sort((a, b) => {
    const aFeatured = projectConfig[a].featured ? 1 : 0;
    const bFeatured = projectConfig[b].featured ? 1 : 0;
    return bFeatured - aFeatured;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block text-primary text-sm font-medium mb-4"
            >
              {p.sectionLabel}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            >
              {p.title}{" "}
              <span className="text-gradient">{p.titleHighlight}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              {p.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {sortedProjects.map((key) => {
              const config = projectConfig[key];
              const data = p.projects[key];
              const Icon = config.icon;
              
              return (
                <motion.article
                  key={key}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`grid lg:grid-cols-5 gap-8 p-8 rounded-2xl glass card-hover ${config.featured ? 'ring-2 ring-primary/20' : ''}`}
                >
                  {/* Left Column - Image & Main Info */}
                  <div className="lg:col-span-3">
                    {/* Project Image */}
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                      <img 
                        src={config.image} 
                        alt={data.title}
                        className="w-full h-full object-cover object-top"
                      />
                      {config.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          ⭐ Destacado
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-primary text-sm font-medium">
                          {data.category}
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl font-bold">
                          {data.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6">
                      {data.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-lg bg-secondary/50">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {p.challenge}
                        </span>
                        <p className="text-foreground text-sm mt-2">{data.challenge}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/10">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {p.solution}
                        </span>
                        <p className="text-foreground text-sm mt-2">{data.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {config.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column - Results */}
                  <div className="lg:col-span-2">
                    <div className="h-full p-6 rounded-xl bg-card border border-border">
                      <h3 className="font-display font-semibold text-lg mb-4">
                        {p.results}
                      </h3>
                      <ul className="space-y-4">
                        {data.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-primary text-xs font-bold">{i + 1}</span>
                            </div>
                            <span className="text-foreground text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-6 pt-6 border-t border-border">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">
                          {p.client}
                        </span>
                        <p className="text-foreground font-medium mt-1">{data.client}</p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              {p.ctaTitle}
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              {p.ctaSubtitle}
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contacto" className="gap-2">
                {p.ctaButton}
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
