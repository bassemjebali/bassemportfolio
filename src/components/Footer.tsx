import { Instagram, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-display font-bold text-foreground">
          Bassem<span className="text-primary">.</span>Jebali
        </span>

        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground md:items-end">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bassem_jebali_1/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Instagram className="w-4 h-4" />
              @bassem_jebali1
            </a>
            <a
              href="https://wa.me/58864050"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
          <p>© {new Date().getFullYear()} Bassem Jebali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
