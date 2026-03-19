import { motion } from "framer-motion";
import { BarChart3, FileSpreadsheet, Database, Code2, Cpu, Coffee, Binary, BrainCircuit, LineChart, Lightbulb } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const categories = [
  {
    title: "Frontend / Tools",
    skills: [
      { name: "Power BI", icon: BarChart3 },
      { name: "Excel", icon: FileSpreadsheet },
      { name: "Big Data", icon: Database },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: Code2 },
      { name: "C++", icon: Cpu },
      { name: "Java", icon: Coffee },
      { name: "Python", icon: Binary },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", icon: BrainCircuit },
      { name: "Data Analytics", icon: LineChart },
      { name: "Problem Solving", icon: Lightbulb },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.title}
            variants={item}
            whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
            className="card-portfolio"
          >
            <h3 className="font-semibold text-foreground mb-6 text-lg">{cat.title}</h3>
            <div className="space-y-4">
              {cat.skills.map((s, si) => (
                <motion.div
                  key={s.name}
                  className="flex items-center gap-3 group cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors duration-300"
                    whileHover={{ rotate: 15, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <s.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </motion.div>
                  <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
