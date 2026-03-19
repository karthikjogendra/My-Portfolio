import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/kartake.jpg";

const RESUME_URL = "https://drive.google.com/file/d/1Gz_sD3ZVQDz81fZ7sBv6edb1FTfOMNpy/view?usp=sharing";

const titles = ["Data Analyst", "Big Data Enthusiast", "Problem Solver", "Python Developer"];

const HeroSection = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < current.length) {
          setDisplayed(current.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1500);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20"
        style={{ background: "var(--gradient-primary)" }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-10"
        style={{ background: "var(--gradient-primary)" }}
        animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full opacity-5"
        style={{ background: "var(--gradient-primary)" }}
        animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container w-full relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="shrink-0 relative group"
          >
            {/* Animated ring */}
            <motion.div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute -inset-6 rounded-full border border-primary/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <div className="w-48 h-64 md:w-56 md:h-72 rounded-[2rem] overflow-hidden border-4 border-primary/20 shadow-xl relative group-hover:border-primary/50 transition-all duration-500">
              <motion.img
                src={profilePhoto}
                alt="Karthik Buddala"
                className="w-full h-full object-cover object-top"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            {/* Status badge */}
            <motion.div
              className="absolute -bottom-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring" }}
            >
              <Sparkles size={12} /> Open to Work
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center md:text-left"
          >
            <motion.p
              className="text-primary font-semibold mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Hello, I'm
            </motion.p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Karthik <span className="gradient-text">Buddala</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-2 font-medium h-8">
              Aspiring{" "}
              <span className="text-primary font-bold">{displayed}</span>
              <motion.span
                className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </p>
            <motion.p
              className="text-muted-foreground max-w-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              I am a 3rd-year B.Tech Computer Science Engineering student at Lovely Professional University with strong interest in Data Analytics, Big Data technologies, and problem-solving using programming and data-driven insights.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 30px -8px hsl(24 95% 53% / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary-gradient flex items-center gap-2"
              >
                <ArrowDown size={18} /> View My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-primary flex items-center gap-2"
              >
                <Download size={18} /> Download Resume
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-primary flex items-center gap-2"
              >
                <Mail size={18} /> Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
