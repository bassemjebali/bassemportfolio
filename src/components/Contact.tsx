import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Instagram, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "Email service not configured",
        description:
          "Please add your EmailJS service/template/public key to your environment variables.",
        variant: "destructive",
      });
      return;
    }

    if (!formRef.current) {
      return;
    }

    setIsSending(true);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out — I’ll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error", error);
      toast({
        title: "Something went wrong",
        description: "Unable to send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

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
            <form ref={formRef} className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
                  required
                />
                <input
                  name="reply_to"
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
                  required
                />
              </div>
              <input
                name="business"
                type="text"
                placeholder="Your Business Name"
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors font-body"
              />
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows={4}
                className="w-full px-5 py-3.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none font-body"
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-semibold text-base hover:brightness-110 transition-all duration-300 group disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSending ? "Sending…" : "Send Message"}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-border/30 flex flex-col items-center gap-2 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Or email directly: jebalibassem2@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a
                  href="https://www.instagram.com/bassem_jebali_1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @bassem_jebali1
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="https://wa.me/58864050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  WhatsApp: 58864050
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
