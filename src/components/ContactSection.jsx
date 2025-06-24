import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const SERVICE_ID = "service_5ekxrks";
  const TEMPLATE_ID = "template_z1rcmrr";
  const PUBLIC_KEY = "YXVMYZs-JF0crupDY";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }).catch(() => {
      alert("Error sending message.");
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    });

    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-secondary/30 min-h-screen flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-base sm:text-lg text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
          Have a project in mind or want to collaborate? Let’s talk. I’m always open to meaningful work and creative challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-xl space-y-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center">Contact Information</h3>

            <div className="space-y-8">
              {[{
                Icon: Mail,
                label: "Email",
                value: "bhanuka.lakmal29@gmail.com",
                href: "mailto:bhanuka.lakmal29@gmail.com"
              }, {
                Icon: Phone,
                label: "Phone",
                value: "(+94) 711 941 955",
                href: "tel:+94711941955"
              }, {
                Icon: MapPin,
                label: "Location",
                value: "Rajagiriya, Colombo, Sri Lanka",
                href: null
              }].map(({ Icon, label, value, href }, i) => (
                <div key={i} className="flex items-start space-x-4 hover:scale-105 transition-transform">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{label}</h4>
                    {href ? (
                      <a href={href} className="text-base text-muted-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-base text-muted-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg sm:text-xl font-semibold text-center mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-4">
                {[
                  { href: "https://www.linkedin.com/in/bhanuka-rajasinghe-207046230", Icon: Linkedin },
                  { href: "https://www.threads.net/@bhanu_verse", Icon: Twitter },
                  { href: "https://www.instagram.com/bhanu_verse", Icon: Instagram },
                  { href: "https://github.com/Bhanu2001829/", Icon: Github },
                ].map(({ href, Icon }, idx) => (
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                { id: "name", label: "Your Name", type: "text", value: formData.name, placeholder: "e.g. Bhanuka Lakmal" },
                { id: "email", label: "Your Email", type: "email", value: formData.email, placeholder: "e.g. bhanuka@gmail.com" }
              ].map(({ id, label, type, value, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-base font-semibold mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    required
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                    className="w-full px-4 py-3 text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-base font-semibold mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  placeholder="Hello, I’d like to talk about..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 text-base rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full text-base sm:text-lg flex items-center justify-center gap-3 py-3 hover:scale-105 active:scale-95 transition-transform")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
