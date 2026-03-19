import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

const RESUME_URL = "https://drive.google.com/file/d/1Gz_sD3ZVQDz81fZ7sBv6edb1FTfOMNpy/view?usp=sharing";

const ResumeSection = () => (
  <section id="resume" className="bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My <span className="gradient-text">Resume</span></h2>
        <p className="section-subtitle">View my qualifications</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        whileHover={{ y: -8 }}
        className="max-w-md mx-auto card-portfolio text-center group relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: "linear-gradient(135deg, hsl(24 95% 53% / 0.03), hsl(16 90% 48% / 0.06))" }}
        />
        <motion.div
          className="w-20 h-20 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors duration-300"
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring" }}
        >
          <FileText size={36} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-2">Karthik Buddala</h3>
        <p className="text-muted-foreground text-sm mb-6">B.Tech CSE — Data Analytics & Big Data</p>
        <motion.a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary-gradient inline-flex items-center gap-2"
          whileHover={{ scale: 1.05, boxShadow: "0 8px 30px -8px hsl(24 95% 53% / 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={18} /> Download Resume
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default ResumeSection;
