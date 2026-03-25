import { motion } from "framer-motion";
import { Trophy, Award, BookOpen } from "lucide-react";

const achievements = [
  {
    title: "Top 3 — NLP Workshop",
    description: "Ranked in the Top 3 teams in an NLP Workshop for building an innovative Text-to-Speech system.",
    date: "JANUARY 2026",
    icon: Award,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Research Incentive",
    description: "Received research incentive for university approved patent: 'SMART BLIND SHOE WITH INTEGRATED HAND BAND USING ARDUINO'.",
    date: "MARCH 2024",
    icon: BookOpen,
    color: "bg-primary-light text-primary",
  },
  {
    title: "Top 10 Teams - Hackathon",
    description: "Secured a position in the Top 10 teams (out of 50+) in HackWithVertos 1.0, a 24-Hour Hackathon.",
    date: "FEBRUARY 2024",
    icon: Trophy,
    color: "bg-blue-50 text-blue-600",
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="py-20 bg-background overflow-hidden border-t border-slate-100 dark:border-slate-800">
    <div className="section-container">
      {/* Custom Header with Underline and Circle */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Achievements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-slate-900/50 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-500 relative group"
          >
            <div className={`w-12 h-12 rounded-xl ${ach.color} flex items-center justify-center mb-8`}>
              <ach.icon size={24} />
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
              {ach.title}
            </h3>
            
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">
              {ach.description}
            </p>
            
            <span className="text-primary font-bold text-xs tracking-wider uppercase">
              {ach.date}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
