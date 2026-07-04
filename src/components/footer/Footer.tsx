import { Leaf, Phone, Youtube, Facebook, Instagram, LinkedinIcon } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {};

const Footer = (_props: FooterProps) => {
  const quickLinks = [
    { name: "हमारी समाधान", href: "/solutions" },
    { name: "कृषि तैयारी", href: "/krishi-taiyari" },
    { name: "चरणबद्ध प्रक्रिया", href: "/charanbaddh-prakriya" },
    { name: "अग्निहोत्र", href: "/agnihotra" },
    { name: "ऊर्जा विज्ञान", href: "/urja-vigyan" },
    { name: "भूमि उपचार", href: "/bhoomi-upchar" },
    { name: "पंचमहाभूत", href: "/panchmahabhoot" },
  ];

  const resources = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "About Plants", href: "/vrikshayurveda" },
    { name: "Tarachand Belji", href: "/about-tarachand-belji" },
    { name: "Success Stories", href: "/success-stories" },
    { name: "TCBT Science", href: "/tcbt-science" },
    { name: "TCBT Farming Methodology", href: "/farming-methodology" },
    { name: "Gallery & Field Impact", href: "/gallery-field-impact" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://www.facebook.com/taracanda.belaji/?rdid=tUkRDnMmio3g5Ho7", icon: Facebook },
    { name: "YouTube", href: "https://www.youtube.com/@TarachandBelji", icon: Youtube },
    { name: "Instagram", href: "https://www.instagram.com/jaivikkisaan/?igsh=MTZqcjFmYnFnaXUycw%3D%3D#", icon: Instagram },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/112077141/admin/dashboard/", icon: LinkedinIcon },
    { name: "WhatsApp", href: "https://wa.me/919039007835", icon: WhatsAppIcon },
  ];

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-emerald-100 via-green-50 to-stone-100">
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-emerald-200/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          <section className="rounded-3xl bg-emerald-900 text-white p-8 shadow-xl border border-emerald-800/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0">
                <Image
                  src="/logo.webp"
                  alt="TCBT Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-bold text-white">TCBT Jaivik Kisan</h2>
                <p className="text-emerald-100 text-sm">ताराचंद बेलजी तकनीक</p>

                <p className="mt-4 text-emerald-50 text-sm leading-relaxed">
                  <span className="block text-lg font-semibold text-white">पंचमहाभूत कृषि मूल प्राकृतिक खेती</span>
                  <span className="block mt-1">ऊर्जा विज्ञान एवं वृष्यार्वेद के सिद्ध प्रयोग</span>
                </p>

                <div className="mt-6">
                  <p className="text-emerald-200 text-xs font-semibold mb-3 uppercase tracking-wide">
                    Connect With Us
                  </p>
                  <div className="flex gap-3 flex-wrap">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;

                      return (
                        <Link
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors group"
                  >
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800">Resources</h3>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors group"
                  >
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm group-hover:translate-x-1 transition-transform">
                      {resource.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
            </div>

            <div className="space-y-5 text-gray-700">
              <div>
                <p className="text-xs text-green-600 font-semibold mb-1 uppercase">Phone / WhatsApp</p>
                <a href="tel:+919039007835" className="text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors">
                  +91 90390 07835
                </a>
                <p className="text-xs text-gray-500 mt-0.5">24 x 7 Available</p>
              </div>

              <div>
                <p className="text-xs text-green-600 font-semibold mb-1 uppercase">Email</p>
                <a href="mailto:info@tcbtjaivikkisan.com" className="text-sm font-semibold text-gray-800 hover:text-green-600 transition-colors break-all">
                  info@tcbtjaivikkisan.com
                </a>
                <p className="text-xs text-gray-500 mt-0.5">Reply within 24 hours</p>
              </div>

              <div>
                <p className="text-xs text-green-600 font-semibold mb-1 uppercase">Our Location</p>
                <p className="text-sm font-semibold text-gray-800">Village Kanai, Pt. Chandna Paraswada, Balaghat, MP 481566</p>
                <p className="text-xs text-gray-500 mt-0.5">Manufacturing Office</p>
              </div>

              <div>
                <p className="text-xs text-green-600 font-semibold mb-1 uppercase">Head Office</p>
                <p className="text-sm font-semibold text-gray-800">
                  Office No. 10, 3rd Floor, Mekalsuta Co-Working Space, Wright Town Stadium, Jabalpur, Madhya Pradesh - 482002
                </p>
                <p className="text-xs text-gray-500 mt-0.5">Mon-Sat, 10 AM - 8 PM</p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 mt-6 border-t border-emerald-200">
          <p className="text-sm text-gray-700 text-center md:text-left">
            © 2026 TCBT Jaivik Kishan | Powered by Tarachand Belji Technique | All Rights Reserved
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
