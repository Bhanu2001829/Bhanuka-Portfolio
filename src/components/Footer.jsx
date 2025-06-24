import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex flex-col items-center justify-center space-y-3">
      <p className="text-xs sm:text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Bhanuka Rajasinghe. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </a>
    </footer>
  );
};
