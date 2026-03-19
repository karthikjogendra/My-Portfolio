import { motion } from "framer-motion";
import { Award, ExternalLink, ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, type: "spring" } },
};

const certs = [
  {
    title: "Cloud Computing",
    platform: "NPTEL",
    link: "https://www.linkedin.com/posts/karthik-buddala-017194380_nptel-cloudtechnology-learningjourney-activity-7404070415800999936-moMe/",
  },
  {
    title: "Google Analytics Professional Certificate",
    platform: "Coursera",
    link: "https://www.coursera.org/account/accomplishments/professional-cert/2WWY00I9NUW1",
  },
];

const CertificationsSection = () => (
  <section id="certifications">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Professional certifications earned</p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto"
      >
        {certs.map((c) => (
          <motion.div
            key={c.title}
            variants={item}
            className="card-portfolio group relative overflow-hidden"
            whileHover={{ y: -6, x: 4, transition: { type: "spring", stiffness: 300 } }}
          >
            <div className="absolute top-0 left-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"
              style={{ background: "var(--gradient-primary)" }}
            />
            <motion.div
              className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              <Award size={24} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </motion.div>
            <h3 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{c.title}</h3>
            <p className="text-muted-foreground text-sm mb-4">{c.platform}</p>
            <motion.a
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
              whileHover={{ x: 5 }}
            >
              View Certificate <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default CertificationsSection;
