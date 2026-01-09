import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  ArrowRight, Music, Scissors, Megaphone, Coffee, Bot, GraduationCap, Cog, Heart, BookOpen, Palette, Filter, X,
  // Technology icons
  Globe, Code2, Music2, Mail, ShoppingCart, Calendar, FileText, BarChart3, Blocks, Video, Search, MessageCircle,
  Users, BookMarked, Atom, Stethoscope, CreditCard, LayoutDashboard, RefreshCw, Newspaper, Briefcase, Sparkles, PenTool,
  type LucideIcon
} from "lucide-react";

// Technology icon mapping
const technologyIcons: Record<string, LucideIcon> = {
  "WordPress": Globe,
  "PHP": Code2,
  "Spotify API": Music2,
  "Newsletter": Mail,
  "WooCommerce": ShoppingCart,
  "LMS": GraduationCap,
  "MercadoPago": CreditCard,
  "Calendly": Calendar,
  "Forms": FileText,
  "Analytics": BarChart3,
  "Elementor": Blocks,
  "Video": Video,
  "SEO": Search,
  "WhatsApp": MessageCircle,
  "Membresía": Users,
  "Ebooks": BookMarked,
  "React": Atom,
  "Telemedicina": Stethoscope,
  "Pagos": CreditCard,
  "Dashboard": LayoutDashboard,
  "Suscripción": RefreshCw,
  "Revistas": Newspaper,
  "Portfolio": Briefcase,
  "Animaciones": Sparkles,
  "Diseño": PenTool,
};

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
  alejandroLerner: { icon: Music, image: alejandroLernerImg, technologies: ["WordPress", "PHP", "Spotify API", "Newsletter"], featured: true, categoryKey: "entertainment" },
  vecka: { icon: Scissors, image: veckaImg, technologies: ["WooCommerce", "LMS", "MercadoPago", "WordPress"], featured: true, categoryKey: "ecommerce" },
  growwingGroup: { icon: Megaphone, image: growwingGroupImg, technologies: ["WordPress", "Elementor", "Video", "SEO"], featured: true, categoryKey: "marketing" },
  coachingCafe: { icon: Coffee, image: coachingCafeImg, technologies: ["WordPress", "Calendly", "Forms", "Analytics"], featured: false, categoryKey: "coaching" },
  eari: { icon: Bot, image: eariImg, technologies: ["WooCommerce", "LMS", "WordPress", "Pagos"], featured: false, categoryKey: "education" },
  mtEscuela: { icon: GraduationCap, image: mtEscuelaImg, technologies: ["WooCommerce", "Membresía", "LMS", "Ebooks"], featured: false, categoryKey: "education" },
  roboticaIndustrial: { icon: Cog, image: roboticaIndustrialImg, technologies: ["WordPress", "SEO", "WhatsApp", "Forms"], featured: false, categoryKey: "industrial" },
  salud24: { icon: Heart, image: salud24Img, technologies: ["React", "Telemedicina", "Pagos", "Dashboard"], featured: false, categoryKey: "health" },
  siempreVital: { icon: BookOpen, image: siempreVitalImg, technologies: ["WordPress", "Suscripción", "Revistas", "Pagos"], featured: false, categoryKey: "media" },
  theBornId: { icon: Palette, image: theBornIdImg, technologies: ["WordPress", "Portfolio", "Animaciones", "Diseño"], featured: false, categoryKey: "design" },
};

type ProjectKey = keyof typeof projectConfig;

const projectKeys: ProjectKey[] = [
  "alejandroLerner", "vecka", "growwingGroup", "coachingCafe", "eari",
  "mtEscuela", "roboticaIndustrial", "salud24", "siempreVital", "theBornId"
];

// Get unique technologies across all projects
const allTechnologies = [...new Set(
  Object.values(projectConfig).flatMap(p => p.technologies)
)].sort();

// Category mapping for filters
const categoryKeys = [...new Set(Object.values(projectConfig).map(p => p.categoryKey))];

export default function Proyectos() {
  const { t } = useLanguage();
  const p = t.projectsPage;

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get categories with translated names
  const categories = useMemo(() => {
    return categoryKeys.map(key => {
      const projectKey = Object.entries(projectConfig).find(([_, config]) => config.categoryKey === key)?.[0] as ProjectKey;
      return {
        key,
        name: projectKey ? p.projects[projectKey]?.category || key : key
      };
    });
  }, [p.projects]);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = [...projectKeys];
    
    if (selectedCategory) {
      filtered = filtered.filter(key => projectConfig[key].categoryKey === selectedCategory);
    }
    
    if (selectedTech) {
      filtered = filtered.filter(key => projectConfig[key].technologies.includes(selectedTech));
    }
    
    // Featured projects first
    return filtered.sort((a, b) => {
      const aFeatured = projectConfig[a].featured ? 1 : 0;
      const bFeatured = projectConfig[b].featured ? 1 : 0;
      return bFeatured - aFeatured;
    });
  }, [selectedCategory, selectedTech]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTech(null);
  };

  const hasActiveFilters = selectedCategory || selectedTech;

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

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Filter Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter size={18} />
                <span className="text-sm font-medium">{p.filterLabel || "Filtrar proyectos"}</span>
              </div>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground gap-1"
                >
                  <X size={14} />
                  {p.clearFilters || "Limpiar filtros"}
                </Button>
              )}
            </div>

            {/* Category Filters */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {p.categoryLabel || "Categoría"}
              </span>
              <div className="flex flex-wrap gap-2">
                {categories.map(({ key, name }) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(selectedCategory === key ? null : key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === key
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Technology Filters */}
            <div className="space-y-2">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {p.technologyLabel || "Tecnología"}
              </span>
              <div className="flex flex-wrap gap-2">
                {allTechnologies.map((tech) => {
                  const TechIcon = technologyIcons[tech] || Code2;
                  return (
                    <button
                      key={tech}
                      onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        selectedTech === tech
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      <TechIcon size={14} />
                      {tech}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results count */}
            <div className="text-sm text-muted-foreground">
              {filteredProjects.length} {filteredProjects.length === 1 ? (p.projectSingular || "proyecto") : (p.projectPlural || "proyectos")}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">{p.noResults || "No se encontraron proyectos con los filtros seleccionados."}</p>
                <Button variant="outline" onClick={clearFilters} className="mt-4">
                  {p.clearFilters || "Limpiar filtros"}
                </Button>
              </div>
            ) : (
              filteredProjects.map((key) => {
                const config = projectConfig[key];
                const data = p.projects[key];
                const Icon = config.icon;
                
                return (
                  <motion.article
                    key={key}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    layout
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
              })
            )}
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
