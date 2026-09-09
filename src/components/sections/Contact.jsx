import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { CONTACT } from "../../data/content";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const now = new Date().toLocaleString();

    const templateParams = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
      time: now,
      title: "Portfolio Inquiry",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatusMessage("Message sent successfully! ✅");
          form.current.reset();
          setIsSending(false);
          setTimeout(() => setStatusMessage(""), 5000);
        },
        (error) => {
          console.error(error.text);
          setStatusMessage("Failed to send. Please try again. ❌");
          setIsSending(false);
        }
      );
  };

  const contactItems = [
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: CONTACT.address,
      href: null,
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: CONTACT.phone,
      href: `tel:${CONTACT.phone}`,
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      <SectionHeading
        title="Get in"
        highlight="Touch"
        subtitle="Have a project in mind? Let's discuss it"
      />

      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact info */}
          <div className="w-full lg:w-2/5 space-y-5">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.label}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-surface transition-all duration-300">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-zinc-200 font-medium hover:text-accent transition-colors text-sm"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-zinc-200 font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Quick note */}
            <div className="p-5 rounded-xl bg-accent/5 border border-accent/10">
              <p className="text-sm text-zinc-400 leading-relaxed">
                💡 I'm always open to discussing new opportunities, 
                interesting projects, or just having a friendly chat.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-3/5"
          >
            <div className="glass-card p-6 lg:p-8">
              <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-zinc-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-zinc-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl p-4 text-white placeholder-zinc-600 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="group w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-surface font-bold py-4 rounded-xl transition-all duration-300 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <FaPaperPlane
                    size={14}
                    className={`transition-transform ${
                      isSending
                        ? "translate-x-10 opacity-0"
                        : "group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>

                {statusMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center text-sm font-medium ${
                      statusMessage.includes("successfully")
                        ? "text-emerald-400"
                        : "text-red-400"
                    }`}
                  >
                    {statusMessage}
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
