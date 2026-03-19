import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-10 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-4 mb-2">
          {[
            { icon: Github, href: "https://github.com/karthikjogendra" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/karthik-buddala-017194380/" },
            { icon: Mail, href: "mailto:buddalakarthik@gmail.com" },
          ].map((s, i) => (
            <motion.a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
            >
              <s.icon size={18} />
            </motion.a>
          ))}
        </div>
        <p className="text-primary-foreground/70 text-sm">© 2026 Karthik Buddala. All Rights Reserved.</p>
      </div>
    </div>
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="absolute right-6 -top-5 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
      style={{ background: "var(--gradient-primary)" }}
      whileHover={{ scale: 1.15, y: -3 }}
      whileTap={{ scale: 0.9 }}
    >
      <ArrowUp size={18} className="text-primary-foreground" />
    </motion.button>
  </footer>
);

export default Footer;
