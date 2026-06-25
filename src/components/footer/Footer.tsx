import { Leaf, Phone, Youtube, Facebook, Instagram, LinkedinIcon } from 'lucide-react';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import Link from "next/link";

type SocialLink = {
  name: string;
  href: string;
  // lucide icons and MUI icon components both work as React components
  icon: React.ComponentType<{ className?: string }>;
};

type NavLink = { name: string; href: string };

type QuickLink = NavLink;

type FooterProps = {};

const Footer = (_props: FooterProps) => {

  const quickLinks = [
    { "name": "हमारी समाधान", "href": "/solutions" },

    { "name": "कृषि तैयारी", "href": "/krishi-taiyari" },
    { "name": "चरणबद्ध प्रक्रिया", "href": "/charanbaddh-prakriya" },
    { "name": "अग्निहोत्र", "href": "/agnihotra" },

    { "name": "ऊर्जा विज्ञान", "href": "/urja-vigyan" },


    { "name": "भूमि उपचार", "href": "/bhoomi-upchar" },
    { "name": "पंचमहाभूत", "href": "/panchmahabhoot" }
  ];

  const resources = [
    { "name": "About Us", "href": "/about" },
    { "name": "Contact Us", "href": "/contact" },

    { "name": "About Plants", "href": "/vrikshayurveda" },
    { "name": "Tarachand Belji", "href": "/about-tarachand-belji" },

    { "name": "Success Stories", "href": "/success-stories" },
    { "name": "TCBT Science", "href": "/tcbt-science" },
    { "name": "TCBT Farming Methodology", "href": "/farming-methodology" },
    { "name": "Gallery & Field Impact", "href": "/gallery-field-impact" }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/taracanda.belaji/?rdid=tUkRDnMmio3g5Ho7",
      icon: Facebook,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@TarachandBelji",
      icon: Youtube,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/jaivikkisaan/?igsh=MTZqcjFmYnFnaXUycw%3D%3D#",
      icon: Instagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/112077141/admin/dashboard/",
      icon: LinkedinIcon,
    },
    {
      name: "whatsApp",
      href: "https://wa.me/919039007835",
      icon: WhatsAppIcon,
    },
  ];

  return (
    <footer className="relative bg-linear-to-b from-green-100 to-stone-100/30 overflow-hidden">

      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-[0.03]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M100,20 Q160,60 180,120 Q190,160 160,180 Q120,200 80,180 Q40,160 30,120 Q20,80 40,50 Q60,20 100,20 Z"
            fill="currentColor" className="text-green-600" />
        </svg>
      </div>

     <div className="relative z-10">
  { }
  <div className="max-w-7xl ...">
    { }
    <div className="grid ...">
      { }
      <div className="bg-linear-to-br ...">
        { }
              <div className="absolute top-0 right-0 w-40 h-40 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
  <Image
    src="/logo.webp"
    alt="TCBT Logo"
    width={48}
    height={48}
    className="object-contain"
    priority
  />
</div>
<div>
                    <h2 className="text-2xl font-bold">TCBT Jaivik Kisan</h2>
                    <p className="text-green-100 text-sm">ताराचंद बेलजी तकनीक</p>
                  </div>
                </div>

                <p className="text-green-50 text-sm leading-relaxed mb-6">
                  <span className="text-xl " > पंचमहाभूत कृषि
                    मूल प्राकृतिक खेती </span><br />

                  ऊर्जा विज्ञान एवं
                  वृक्षायुर्वेद के सिद्ध प्रयोग
                </p>

                <div>
                  <p className="text-green-200 text-xs font-semibold mb-3 uppercase tracking-wide">Connect With Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;

                      return (
                        <Link
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.name}
                          className="w-10 h-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all hover:scale-110"
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow mb-6">

                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Quick Links</h3>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
                      >
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">Resources</h3>
                </div>

                <ul className="grid grid-cols-2 gap-3">
                  {resources.map((resource) => (
                    <li key={resource.name}>
                      <a
                        href={resource.href}
                        className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors group"
                      >
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full group-hover:scale-150 transition-transform" />
                        <span className="text-sm group-hover:translate-x-1 transition-transform">{resource.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">Contact Us</h3>
              </div>

              <div className="space-y-5">
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
                  <p className="text-sm font-semibold text-gray-800">Village Kanai, Pt. Chandna Paraswada , Balaghat, MP 481566</p>
                  <p className="text-xs text-gray-500 mt-0.5">Manufacturing Office</p>
                </div>

                <div>
                  <p className="text-xs text-green-600 font-semibold mb-1 uppercase">Head Office</p>
                  <p className="text-sm font-semibold text-gray-800">Office No. 10, 3rd Floor, Mekalsuta Co-Working Space, Wright Town Stadium, Jabalpur, Madhya Pradesh – 482002</p>
                  <p className="text-xs text-gray-500 mt-0.5">Mon-Sat, 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center md:text-left">
              © 2026 TCBT Jaivik Kishan | Powered by Tarachand Belji Technique | All Rights Reserved
            </p>

            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Privacy Policy
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;