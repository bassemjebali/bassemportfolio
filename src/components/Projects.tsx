import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Bloom & Co.",
    category: "E-Commerce",
    description: "Full redesign and development for a local flower shop, resulting in 3x online orders.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    title: "TrueNorth Fitness",
    category: "Business Website",
    description: "Modern website with booking integration for a local gym, increasing memberships by 40%.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Mesa Legal Group",
    category: "Landing Page",
    description: "High-converting landing page for a law firm, generating 60+ qualified leads monthly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">Projects</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            Recent work that<br />delivered results
          </h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group grid md:grid-cols-2 gap-8 items-center p-6 md:p-8 rounded-2xl border border-border/30 hover:border-primary/20 transition-all duration-500"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-primary text-sm font-display tracking-wide">{project.category}</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <span className="inline-flex items-center gap-2 text-primary font-display text-sm font-medium group-hover:gap-3 transition-all cursor-pointer">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
