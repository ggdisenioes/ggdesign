import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Import featured project images
import alejandroLernerImg from "@/assets/projects/alejandro-lerner.webp";
import veckaImg from "@/assets/projects/vecka.webp";
import growwingGroupImg from "@/assets/projects/growwinggroup.webp";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.project1.title,
      category: t.projects.project1.category,
      description: t.projects.project1.description,
      image: alejandroLernerImg,
      tags: ["WordPress", "Spotify API", "Newsletter"],
    },
    {
      title: t.projects.project2.title,
      category: t.projects.project2.category,
      description: t.projects.project2.description,
      image: veckaImg,
      tags: ["WooCommerce", "LMS", "MercadoPago"],
    },
    {
      title: t.projects.project3.title,
      category: t.projects.project3.category,
      description: t.projects.project3.description,
      image: growwingGroupImg,
      tags: ["WordPress", "Video", "Branding"],
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-primary text-sm font-medium mb-4"
            >
              {t.projects.sectionLabel}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold"
            >
              {t.projects.title}
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="outline" asChild>
              <Link to="/proyectos" className="gap-2">
                {t.projects.viewAll}
                <ArrowRight size={16} />
              </Link>
            </Button>
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to="/proyectos" className="block">
                {/* Image */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div>
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
