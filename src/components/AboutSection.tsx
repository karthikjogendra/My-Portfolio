import { motion, useInView } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
import profilePhoto from "@/assets/kartake.jpg";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"} ref={ref}>
          <motion.div variants={item} className="text-center mb-12">
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
            <p className="section-subtitle">Get to know me better</p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <motion.div variants={item} className="shrink-0 group">
              <motion.div
                className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/10 relative"
                style={{ boxShadow: "var(--shadow-card)" }}
                whileHover={{ rotate: 2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={profilePhoto} alt="Karthik Buddala" className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
            <motion.div variants={item}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Karthik Buddala is a passionate data enthusiast currently pursuing B.Tech in Computer Science Engineering at Lovely Professional University (2023–2027). He has strong foundations in programming and data analysis with skills in Power BI, Excel, Big Data technologies, and multiple programming languages including C, C++, Java, and Python. He enjoys solving complex problems using data-driven techniques and continuously improving his analytical and technical skills.
              </p>
              <motion.div
                className="card-portfolio flex items-start gap-4 group cursor-default"
                whileHover={{ x: 8, borderColor: "hsl(24, 95%, 53%)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary-light flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:rotate-12 transition-all duration-300">
                  <GraduationCap className="text-primary group-hover:text-primary-foreground transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">B.Tech in Computer Science Engineering</h3>
                  <p className="text-muted-foreground text-sm flex items-center gap-1 mt-1">
                    <MapPin size={14} /> Lovely Professional University, Punjab
                  </p>
                  <p className="text-primary text-sm font-medium mt-1 flex items-center gap-1">
                    <Calendar size={14} /> 2023 – 2027 (3rd Year)
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
