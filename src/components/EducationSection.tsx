import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, School } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Lovely Professional University, Phagwara, Punjab",
    period: "August 2023 – Present",
    description: "Currently pursuing B.Tech CSE. CGPA: 7.12. Focusing on Data Analytics, Big Data, and Problem Solving.",
    icon: GraduationCap,
  },
  {
    degree: "Intermediate (MPC)",
    institution: "SASI Junior College, Tadepalligudem, Andhra Pradesh",
    period: "August 2021 – May 2023",
    description: "Specialized in Mathematics, Physics, and Chemistry. Percentage: 94.2%.",
    icon: School,
  },
  {
    degree: "SSC (10th Standard)",
    institution: "SASI EM School, Tadepalligudem, Andhra Pradesh",
    period: "August 2020 – June 2021",
    description: "Completed secondary education with an excellent score of 97%.",
    icon: School,
  },
];

const EducationSection = () => (
  <section id="education" className="bg-secondary/10">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <p className="section-subtitle">Academic background and qualifications</p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card-portfolio relative flex flex-col md:flex-row gap-6 items-start md:items-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-light flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
              <edu.icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            
            <div className="flex-grow">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {edu.degree}
                </h3>
                <span className="flex items-center gap-1 text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  <Calendar size={14} /> {edu.period}
                </span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-3">
                <MapPin size={16} />
                <span className="text-sm">{edu.institution}</span>
              </div>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {edu.description}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <GraduationCap size={80} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
