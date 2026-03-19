import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, type: "spring" } },
};

const contacts = [
  { icon: Mail, label: "buddalakarthik4@gmail.com", href: "mailto:buddalakarthik4@gmail.com" },
  { icon: Phone, label: "+91 8247021297", href: "tel:+918247021297" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/karthik-buddala-017194380/" },
  { icon: Github, label: "GitHub", href: "https://github.com/karthikjogendra" },
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && formRef.current) {
      setIsSubmitting(true);
      emailjs
        .sendForm(
          'service_49bnjvo', // Replace with your Service ID
          'template_np8mwfj', // Replace with your Template ID
          formRef.current,
          {
            publicKey: '5rIYuZsjFBfH9kTtk', // Replace with your Public Key
          }
        )
        .then(
          () => {
            toast.success("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
            setIsSubmitting(false);
          },
          (error) => {
            console.error('FAILED...', error);
            const errorMsg = error?.text || error?.message || "Unknown error";
            toast.error(`Failed to send message: ${errorMsg}`);
            setIsSubmitting(false);
          }
        );
    }
  };

  const inputClasses = (field: string) =>
    `w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none transition-all duration-300 ${focused === field
      ? "border-primary ring-2 ring-primary/20 shadow-md"
      : "border-border"
    }`;

  return (
    <section id="contact" className="bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
          <p className="section-subtitle">Let's connect</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {contacts.map(c => (
              <motion.a
                key={c.label}
                variants={item}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-portfolio flex items-center gap-4 !p-4 group"
                whileHover={{ x: 8, borderColor: "hsl(24, 95%, 53%)" }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300"
                  whileHover={{ rotate: 15 }}
                >
                  <c.icon size={20} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </motion.div>
                <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors duration-300">{c.label}</span>
              </motion.a>
            ))}
          </motion.div>
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {(["name", "email", "message"] as const).map(field => (
              <motion.div key={field} whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 400 }}>
                {field === "message" ? (
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`${inputClasses("message")} resize-none`}
                  />
                ) : (
                  <input
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={form[field]}
                    onFocus={() => setFocused(field)}
                    onBlur={() => setFocused(null)}
                    onChange={e => setForm({ ...form, [field]: e.target.value })}
                    className={inputClasses(field)}
                  />
                )}
                {errors[field] && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs mt-1"
                  >
                    {errors[field]}
                  </motion.p>
                )}
              </motion.div>
            ))}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary-gradient flex items-center gap-2 w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              whileHover={!isSubmitting ? { scale: 1.03, boxShadow: "0 8px 30px -8px hsl(24 95% 53% / 0.4)" } : {}}
              whileTap={!isSubmitting ? { scale: 0.97 } : {}}
            >
              {isSubmitting ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
