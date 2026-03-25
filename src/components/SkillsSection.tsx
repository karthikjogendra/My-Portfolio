import { motion } from "framer-motion";

const categories = [
  {
    title: "LANGUAGES",
    skills: [
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
      { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
      { name: "Streamlit", icon: "https://www.vectorlogo.zone/logos/streamlit/streamlit-icon.svg" },
      { name: "Tailwind", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    ],
  },
  {
    title: "DATABASES & ANALYTICS",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Power BI", icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
      { name: "MS Excel", icon: "https://www.vectorlogo.zone/logos/microsoft_excel/microsoft_excel-icon.svg" },
    ],
  },
  {
    title: "TOOLS & PLATFORMS",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
      { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "Anaconda", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/anaconda/anaconda-original.svg" },
    ],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-background overflow-hidden border-t border-slate-100 dark:border-slate-800">
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Technical Skills</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {categories.map((cat, catIndex) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-white dark:bg-slate-900/50 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:shadow-md"
          >
            <h3 className="text-primary font-bold text-sm tracking-[0.2em] mb-10 opacity-80 uppercase">
              {cat.title}
            </h3>
            
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-y-8 gap-x-2">
              {cat.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center gap-2 group"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 border border-slate-50 dark:border-slate-700 relative overflow-hidden">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-7 h-7 md:w-8 md:h-8 object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                    />
                  </div>
                  <span className="text-[9px] md:text-[10px] font-semibold text-slate-500 dark:text-slate-400 text-center truncate w-full group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
