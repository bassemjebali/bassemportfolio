import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-display text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 tracking-tight">
            Ready to grow<br />your business?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's discuss your project. I'll give you a free consultation and a clear plan for how we can get results together.
          </p>

          <div className="glass rounded-2xl p-8 md:p-12 max-w-2xl mx-auto glow-border">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
                />
              </div>
              <input
                type="text"
                placeholder="Your Business / Website"
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
              />
              <textarea
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none font-body"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 transition-all duration-300 group"
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-border/30 flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <Mail className="w-4 h-4" />
              <span>Or email directly: hello@alexrivera.dev</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
