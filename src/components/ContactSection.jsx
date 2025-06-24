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

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then(()=>{
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }).catch(()=>{
      alert("Error sending message:", alert);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    })
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
    <section
      id="contact"
      className="py-36 px-10 bg-secondary/30 min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-[1600px] w-full">
         <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12 md:mb-16 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-3xl md:text-4xl text-muted-foreground mb-28 max-w-5xl mx-auto leading-relaxed">
          Have a project in mind or want to collaborate? Let’s talk. I’m always open to meaningful work and creative challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Contact Info Card */}
          <div className="bg-card p-16 rounded-3xl shadow-2xl space-y-14 max-w-[850px] w-full mx-auto">
            <h3 className="text-5xl font-bold text-center">Contact Information</h3>

            <div className="space-y-10">
              <div className="flex items-start space-x-8 hover:scale-105 transition-transform">
                <div className="p-5 rounded-full bg-primary/10">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h4 className="text-3xl font-semibold mb-2">Email</h4>
                  <a
                    href="mailto:bhanuka.lakmal29@gmail.com"
                    className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                  >
                    bhanuka.lakmal29@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-8 hover:scale-105 transition-transform">
                <div className="p-5 rounded-full bg-primary/10">
                  <Phone className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h4 className="text-3xl font-semibold mb-2">Phone</h4>
                  <a
                    href="tel:+94711941955"
                    className="text-2xl text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+94) 711 941 955
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-8 hover:scale-105 transition-transform">
                <div className="p-5 rounded-full bg-primary/10">
                  <MapPin className="h-10 w-10 text-primary" />
                </div>
                <div>
                  <h4 className="text-3xl font-semibold mb-2">Location</h4>
                  <p className="text-2xl text-muted-foreground">
                    Rajagiriya, Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-12">
              <h4 className="text-3xl font-semibold text-center mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/bhanuka-rajasinghe-207046230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Linkedin className="h-8 w-8" />
                </a>
                <a
                  href="https://www.threads.net/@bhanu_verse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Twitter className="h-8 w-8" />
                </a>
                <a
                  href="https://www.instagram.com/bhanu_verse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Instagram className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/Bhanu2001829/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <Github className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>

          {/* Send Message Card */}
          <div className="bg-card p-16 rounded-3xl shadow-2xl max-w-[850px] w-full mx-auto">
            <h3 className="text-5xl font-bold mb-14 text-center">Send a Message</h3>

            <form className="space-y-10" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-2xl font-bold mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-7 py-6 text-2xl rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. Bhanuka Lakmal"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-2xl font-bold mb-3">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-7 py-6 text-2xl rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g. bhanuka@gmail.com"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })  }
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-2xl font-bold mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  className="w-full px-7 py-6 text-2xl rounded-xl border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I’d like to talk about..."
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}

                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full text-2xl flex items-center justify-center gap-4 py-5 hover:scale-105 active:scale-95 transition-transform"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={28} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
