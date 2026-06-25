"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface NavLink {
  name: string;
  href: string;
  external?: boolean;
  dropdown?: { name: string; href: string }[];
}

export default function HeaderClient({ navLinks }: { navLinks: NavLink[] }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Bar - Contact Info - Desktop Only */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:block bg-linear-to-r from-green-700 via-emerald-600 to-green-700 text-white text-sm relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent animate-shimmer" />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative z-10">
              <motion.div
                className="flex items-center gap-6"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.a
                  href="tel:+919039007835"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <PhoneIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>+91 90390 07835</span>
                </motion.a>
                <motion.a
                  href="mailto:info@tcbtjaivikkisan.com"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors group"
                  whileHover={{ scale: 1.05 }}
                >
                  <EmailIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  <span>info@tcbtjaivikkisan.com</span>
                </motion.a>
              </motion.div>

              <motion.div
                className="flex items-center gap-4"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <motion.a
                  href="https://wa.me/919039007835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp</span>
                </motion.a>
                <motion.a
                  href="https://www.youtube.com/@TarachandBelji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <YouTubeIcon className="w-4 h-4" />
                  <span>YouTube</span>
                </motion.a>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link
                    href="https://products.tcbtjaivikkisan.com"
                    className="flex items-center gap-2 bg-yellow-400 text-green-900 px-4 py-1.5 rounded-full hover:bg-yellow-300 transition-all font-semibold shadow-lg"
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span>Shop Now</span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        style={{
          backgroundColor: useTransform(
            scrollY,
            [0, 100],
            ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
          ),
        }}
        className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          isScrolled ? "shadow-lg border-b border-green-100" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Responsive sizing */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
                className="relative w-10 h-10 sm:w-12 sm:h-12 overflow-hidden shadow-lg group-hover:shadow-xl group-hover:shadow-green-500/50 "
              >
                <Image
                  src="/logo.webp"
                  alt="TCBT Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />

                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-green-500"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              <div className="flex flex-col">
                <motion.span
                  className="text-xl sm:text-2xl font-black bg-linear-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  TCBT जैविक किसान
                </motion.span>
                <span className="text-xs sm:text-sm text-gray-600 font-semibold -mt-0.5 sm:-mt-1">
                  ताराचंद बेलजी तकनीक
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavItem
                    link={link}
                    pathname={pathname}
                    activeDropdown={activeDropdown}
                    setActiveDropdown={setActiveDropdown}
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile: Quick Actions + Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Quick WhatsApp Button - Mobile */}
              <motion.a
                href="https://products.tcbtjaivikkisan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCartIcon className="w-5 h-5 text-green-600" />
              </motion.a>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl hover:bg-green-50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <CloseIcon className="w-6 h-6 text-green-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                    >
                      <MenuIcon className="w-6 h-6 text-green-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Fixed positioning */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ top: "64px" }} // Fixed height
              />

              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 w-full sm:w-80 bg-white shadow-2xl lg:hidden overflow-y-auto z-50"
                style={{ 
                  top: "64px", // Fixed height
                  height: "calc(100vh - 64px)"
                }}
              >
                {/* Mobile Menu Contact Info */}
                <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white p-4 space-y-2">
                  <a
                    href="tel:+919039007835"
                    className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                  >
                    <PhoneIcon className="w-4 h-4" />
                    <span className="text-sm">+91 9039007835</span>
                  </a>
                  <a
                    href="mailto:info@tcbtjaivikkisan.com"
                    className="flex items-center gap-2 hover:text-yellow-300 transition-colors"
                  >
                    <EmailIcon className="w-4 h-4" />
                    <span className="text-sm">info@tcbtjaivikkisan.com</span>
                  </a>
                </div>

                {/* Navigation Links */}
                <div className="p-4 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <MobileNavItem
                        link={link}
                        pathname={pathname}
                        activeDropdown={activeDropdown}
                        setActiveDropdown={setActiveDropdown}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Mobile Footer Actions */}
                <div className="border-t border-gray-200 p-4 space-y-3">
                  <a
                    href="https://wa.me/919039007835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-gray-700">WhatsApp</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@TarachandBelji"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                  >
                    <YouTubeIcon className="w-5 h-5 text-red-600" />
                    <span className="font-semibold text-gray-700">YouTube</span>
                  </a>
                  <Link
                    href="https://products.tcbtjaivikkisan.com"
                    className="flex items-center justify-center gap-2 bg-yellow-400 text-green-900 px-4 py-3 rounded-lg hover:bg-yellow-300 transition-all font-semibold shadow-lg"
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    <span>Shop Now</span>
                  </Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>

      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </>
  );
}

// Desktop Nav Item Component (unchanged)
function NavItem({ link, pathname, activeDropdown, setActiveDropdown }: any) {
  const isActive = pathname === link.href;
  const hasDropdown = link.dropdown && link.dropdown.length > 0;

  if (link.external) {
    return (
      <motion.a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 text-gray-700 hover:text-green-700 font-semibold transition-colors rounded-xl hover:bg-green-50 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
      >
        {link.name}
        <ShoppingCartIcon className="w-4 h-4" />
      </motion.a>
    );
  }

  if (hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown(link.name)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className={`px-4 py-2 font-semibold transition-all rounded-xl hover:bg-green-50 flex items-center gap-1 ${
            isActive
              ? "text-green-700 bg-green-50"
              : "text-gray-700 hover:text-green-700"
          }`}
        >
          {link.name}
          <motion.div
            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
          >
            <ExpandMoreIcon className="w-4 h-4" />
          </motion.div>
        </button>

        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-100 overflow-hidden"
            >
              {link.dropdown.map((item: any, i: number) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 transition-all font-medium border-b border-green-50 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`px-4 py-2 font-semibold transition-all rounded-xl hover:bg-green-50 ${
        isActive
          ? "text-green-700 bg-green-50"
          : "text-gray-700 hover:text-green-700"
      }`}
    >
      {link.name}
    </Link>
  );
}

// Mobile Nav Item Component (unchanged)
function MobileNavItem({
  link,
  pathname,
  activeDropdown,
  setActiveDropdown,
}: any) {
  const isActive = pathname === link.href;
  const hasDropdown = link.dropdown && link.dropdown.length > 0;

  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-all font-semibold"
      >
        {link.name}
        <ShoppingCartIcon className="w-5 h-5" />
      </a>
    );
  }

  if (hasDropdown) {
    return (
      <div>
        <button
          onClick={() =>
            setActiveDropdown(activeDropdown === link.name ? null : link.name)
          }
          className={`w-full flex items-center justify-between px-4 py-3 font-semibold rounded-xl transition-all ${
            isActive
              ? "text-green-700 bg-green-50"
              : "text-gray-700 hover:bg-green-50 hover:text-green-700"
          }`}
        >
          {link.name}
          <motion.div
            animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
          >
            <ExpandMoreIcon className="w-5 h-5" />
          </motion.div>
        </button>

        <AnimatePresence>
          {activeDropdown === link.name && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-green-50/50 rounded-xl mt-2 ml-4"
            >
              {link.dropdown.map((item: any, i: number) => (
                <Link
                  key={i}
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:text-green-700 transition-colors font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={link.href}
      className={`block px-4 py-3 font-semibold rounded-xl transition-all ${
        isActive
          ? "text-green-700 bg-green-50"
          : "text-gray-700 hover:bg-green-50 hover:text-green-700"
      }`}
    >
      {link.name}
    </Link>
  );
}