const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-foreground">
          alex<span className="text-primary">.</span>rivera
        </span>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Alex Rivera. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
