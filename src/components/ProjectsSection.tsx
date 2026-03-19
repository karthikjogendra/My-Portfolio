import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
};

const projects = [
  {
    title: "Heart Attack Prediction System",
    desc: "A machine learning-based project designed to analyze health data and predict the probability of heart attacks using predictive analytics techniques.",
    tech: ["Python", "Data Analysis", "Machine Learning"],
    link: "https://github.com/karthikjogendra/heart---attack-prediction",
    image: "https://miro.medium.com/1%2A5YWFTnPOt98Pmm4okt2QNQ.jpeg",
  },
  {
    title: "Smart Bazar Dashboard",
    desc: "A data dashboard designed to visualize business insights and analytics using modern data visualization tools.",
    tech: ["Power BI", "Excel", "Data Analytics"],
    link: "https://github.com/karthikjogendra/smartbazar_dashbord",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQEznJ-7GR8Ypg/feedshare-shrink_800/B4DZcvPfhbGkAg-/0/1748844280525?e=2147483647&t=8gaFbrGDJVoDdeB5BeTTBUewHPu_mZig4_EVgcxl6q8&v=beta",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Things I've built</p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={item}
            className="card-portfolio group relative overflow-hidden"
            whileHover={{ y: -8 }}
          >
            {/* Animated gradient overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: "linear-gradient(135deg, hsl(24 95% 53% / 0.03), hsl(16 90% 48% / 0.06))" }}
            />

            {p.image ? (
              <div className="h-48 md:h-56 rounded-lg bg-primary-light mb-5 flex items-center justify-center relative overflow-hidden border border-primary/10">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              <div className="h-40 rounded-lg bg-primary-light mb-5 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  style={{ background: "var(--gradient-primary)", opacity: 0.05 }}
                  whileHover={{ opacity: 0.15 }}
                  transition={{ duration: 0.4 }}
                />
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8 }}
                >
                  <Github size={48} className="text-primary/30 group-hover:text-primary/60 transition-colors duration-300" />
                </motion.div>
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map(t => (
                <motion.span
                  key={t}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-primary-light text-primary"
                  whileHover={{ scale: 1.1, backgroundColor: "hsl(24 95% 53%)", color: "white" }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
              whileHover={{ x: 5 }}
            >
              View on GitHub <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        ))}

      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
