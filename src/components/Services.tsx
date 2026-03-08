import { motion } from "framer-motion";
import { Code, Palette, Rocket, Search } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description: "Custom designs that reflect your brand and convert visitors into customers.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Fast, responsive, and SEO-optimized websites built with modern tech that scales with you.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture leads and drive sales for your campaigns.",
  },
  {
    icon: Search,
    title: "SEO & Performance",
    description: "Get found on Google. I optimize every site for speed and search visibility from day one.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">Services</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 tracking-tight">
            What I can do<br />for your business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-border/50 bg-card/30 hover:border-primary/30 hover:bg-card/60 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
