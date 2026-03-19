import { motion } from "framer-motion";
import { Database, LineChart, FileSpreadsheet } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, type: "spring" } },
};

const services = [
  { title: "Big Data Analysis", icon: Database, desc: "Processing and analyzing large-scale datasets using modern Big Data technologies and frameworks." },
  { title: "Data Analysis", icon: LineChart, desc: "Extracting insights from data using statistical methods, visualization, and analytical tools." },
  { title: "Excel Data Analysis", icon: FileSpreadsheet, desc: "Advanced Excel analysis including pivot tables, formulas, dashboards, and reporting." },
];

const ServicesSection = () => (
  <section id="services">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My <span className="gradient-text">Services</span></h2>
        <p className="section-subtitle">What I can do for you</p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="card-portfolio text-center group relative overflow-hidden"
            whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
          >
            {/* Hover gradient line at top */}
            <div className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              style={{ background: "var(--gradient-primary)" }}
            />
            <motion.div
              className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors duration-300"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <s.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </motion.div>
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
