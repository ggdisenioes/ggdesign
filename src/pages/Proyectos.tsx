import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Code, Cpu, Shield, Zap } from "lucide-react";

const projectIcons = {
  project1: Zap,
  project2: Cpu,
  project3: Shield,
  project4: Code,
};

const projectTechnologies = {
  project1: ["React", "Node.js", "PostgreSQL", "Webhooks"],
  project2: ["Next.js", "OpenAI", "Stripe", "Vercel"],
  project3: ["Next.js", "Auth0", "AWS S3", "PostgreSQL"],
  project4: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
};

export default function Proyectos() {
  const { t } = useLanguage();
  const p = t.projectsPage;

  const projects = [
    { id: "project1" as const, data: p.projects.project1 },
    { id: "project2" as const, data: p.projects.project2 },
    { id: "project3" as const, data: p.projects.project3 },
    { id: "project4" as const, data: p.projects.project4 },
  ];

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
            {projects.map((project) => {
              const Icon = projectIcons[project.id];
              const technologies = projectTechnologies[project.id];
              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-5 gap-8 p-8 rounded-2xl glass card-hover"
                >
                  {/* Left Column - Main Info */}
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <Icon size={24} className="text-primary-foreground" />
                      </div>
                      <div>
                        <span className="text-primary text-sm font-medium">
                          {project.data.category}
                        </span>
                        <h2 className="font-display text-xl sm:text-2xl font-bold">
                          {project.data.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-lg mb-6">
                      {project.data.description}
                    </p>

                    {/* Challenge & Solution */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-lg bg-secondary/50">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {p.challenge}
                        </span>
                        <p className="text-foreground text-sm mt-2">{project.data.challenge}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/10">
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">
                          {p.solution}
                        </span>
                        <p className="text-foreground text-sm mt-2">{project.data.solution}</p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
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
                        {project.data.results.map((result, i) => (
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
                        <p className="text-foreground font-medium mt-1">{project.data.client}</p>
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
