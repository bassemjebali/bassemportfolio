import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Café Solstice",
    category: "Coffee Shop Website",
    description: "Custom website with online ordering and menu preview that boosted foot traffic and repeat visits.",
    tags: ["React", "Ordering", "Mobile-friendly"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
  },
  {
    title: "Urban Thread Co.",
    category: "Men's Apparel Shop",
    description: "E-commerce site for a men’s clothing brand with smooth browsing and cart flow to boost conversions.",
    tags: ["React", "E‑commerce", "Checkout"],
    image: "/shop.png",
  },
  {
    title: "Portfolio Launchpad",
    category: "Portfolio Website",
    description: "Fully responsive developer portfolio with project case studies, blog, and contact workflow.",
    tags: ["Portfolio", "Case Studies", "Next.js"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
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

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group grid md:grid-cols-[1fr_1.1fr] gap-8 items-center p-6 md:p-10 rounded-2xl border border-border/30 bg-card/60 backdrop-blur-md shadow-sm hover:shadow-lg hover:border-primary/30 hover:bg-card/80 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute left-4 bottom-4 rounded-full bg-black/60 px-4 py-1 text-xs font-semibold text-white backdrop-blur">
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:brightness-110 transition"
                  >
                    Work with me
                  </a>
                  <span className="mt-2 text-xs text-muted-foreground sm:mt-0">
                    Ready to build something similar? Let’s chat.
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
