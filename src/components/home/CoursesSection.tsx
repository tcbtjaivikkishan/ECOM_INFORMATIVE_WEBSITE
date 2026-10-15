"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

interface Course {
  id: string;
  titleHi: string;
  titleEn: string;
  description: string;
  highlights: string[];
  icon: string;
  gradient: string;
  accentColor: string;
  enrollLink: string;
  badge: string;
}

const COURSES: Course[] = [
  {
    id: "vrikshayurveda",
    titleHi: "TCBT वृक्षायुर्वेद विज्ञान",
    titleEn: "TCBT Vrikshayurveda Science",
    description:
      "प्राचीन भारतीय वृक्षायुर्वेद और TCBT तकनीक का अद्वितीय संगम — पौधों की प्रकृति, उनके रोग, पोषक तत्वों की कमी और उनका प्राकृतिक समाधान सीखें। पंचमहाभूत सिद्धांत पर आधारित यह कोर्स आपको वनस्पति विज्ञान की गहराई से जोड़ेगा।",
    highlights: [
      "पोषक तत्वों की पहचान एवं समाधान",
      "पंचमहाभूत आधारित उपचार विधि",
      "मिट्टी-पौधा-जल का संतुलन",
      "प्राकृतिक रोग प्रबंधन",
    ],
    icon: "🌿",
    gradient: "from-emerald-600 via-green-600 to-teal-700",
    accentColor: "emerald",
    enrollLink: "https://wa.me/919039007835?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20TCBT%20%E0%A4%9F%E0%A5%80%E0%A4%AE%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20TCBT%20%E0%A4%B5%E0%A5%83%E0%A4%95%E0%A5%8D%E0%A4%B7%E0%A4%BE%E0%A4%AF%E0%A5%81%E0%A4%B0%E0%A5%8D%E0%A4%B5%E0%A5%87%E0%A4%A6%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%B8%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%8F%E0%A4%A8%E0%A4%B0%E0%A5%8B%E0%A4%B2%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88",
    badge: "वृक्षायुर्वेद",
  },
  {
    id: "terrace-farming",
    titleHi: "TCBT Terrace Farming Course",
    titleEn: "TCBT Terrace Farming",
    description:
      "अपनी छत को एक हरे-भरे उत्पादक बगीचे में बदलें! TCBT तकनीक के साथ छत पर जैविक खेती सीखें — सब्जियाँ, फल, औषधीय पौधे और फूलों की खेती। शहरी किसानों और गृहिणियों के लिए विशेष रूप से तैयार किया गया यह कोर्स।",
    highlights: [
      "छत पर मिट्टी तैयारी एवं कंटेनर सेटअप",
      "मौसम अनुसार फसल चयन",
      "TCBT ऊर्जा जल व जीवाणु जल का उपयोग",
      "कम्पोस्ट और जैविक खाद निर्माण",
    ],
    icon: "🏡",
    gradient: "from-lime-600 via-green-600 to-emerald-700",
    accentColor: "lime",
    enrollLink: "https://wa.me/919039007835?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20TCBT%20%E0%A4%9F%E0%A5%80%E0%A4%AE%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20TCBT%20%E0%A4%9F%E0%A5%87%E0%A4%B0%E0%A5%87%E0%A4%B8%20%E0%A4%AB%E0%A4%BE%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%BF%E0%A4%82%E0%A4%97%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%B8%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%8F%E0%A4%A8%E0%A4%B0%E0%A5%8B%E0%A4%B2%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88",
    badge: "Terrace Farming",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const highlightVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="courses-section"
      className="relative overflow-hidden py-20 md:py-28 bg-linear-to-br from-stone-50 via-emerald-50/30 to-green-50 scroll-mt-24"
    >
      <div id="courses" className="absolute -top-24 pointer-events-none" />
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 -right-40 w-[500px] h-[500px] bg-emerald-200/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-40 w-[600px] h-[600px] bg-green-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-100/10 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #059669 1px, transparent 0)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-linear-to-r from-transparent to-emerald-600" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-600">
              हमारे कोर्सेज
            </span>
            <div className="h-[2px] w-12 bg-linear-to-l from-transparent to-emerald-600" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            TCBT{" "}
            <span className="bg-linear-to-br from-emerald-700 via-green-600 to-teal-700 bg-clip-text text-transparent">
              प्रशिक्षण कोर्स
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            प्रकृति की शक्ति को समझें और जैविक खेती में महारत हासिल करें —
            TCBT तकनीक के विशेषज्ञ प्रशिक्षण के साथ
          </p>
        </motion.div>

        {/* Course Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </motion.div>

        {/* Link to Standalone Education Portal */}
        <div className="mt-12 text-center">
          <a
            href="/education"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-emerald-800 font-bold border border-emerald-300 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
          >
            <span>सभी कोर्सेज, मास्टरक्लास व शिक्षा पोर्टल देखें (TCBT Education)</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function CourseCard({ course }: { course: Course }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Top gradient banner */}
      <div
        className={`relative bg-linear-to-r ${course.gradient} px-6 py-8 md:px-8 md:py-10 text-white overflow-hidden`}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        {/* Floating glow */}
        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="inline-block bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90 mb-3">
                {course.badge}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                {course.titleHi}
              </h3>
              <p className="text-sm text-white/70 mt-1 font-medium">
                {course.titleEn}
              </p>
            </div>
            <span className="text-4xl md:text-5xl shrink-0 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
              {course.icon}
            </span>
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 px-6 py-6 md:px-8 md:py-8">
        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Highlights */}
        <div className="space-y-3 mb-8 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            आप क्या सीखेंगे
          </p>
          {course.highlights.map((highlight, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={highlightVariants}
              className="flex items-start gap-3"
            >
              <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-700 leading-relaxed">
                {highlight}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-emerald-200 to-transparent mb-6" />

        {/* CTA Button */}
        <a
          href={course.enrollLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/btn relative inline-flex items-center justify-center gap-2 w-full bg-linear-to-r ${course.gradient} text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />

          <span className="relative z-10">अभी Enroll करें</span>
          <ExternalLink className="relative z-10 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
        </a>

        {course.id === "terrace-farming" && (
          <a
            href="/education/terracefarming"
            className="mt-3 inline-flex items-center justify-center gap-1.5 w-full text-xs font-bold text-emerald-800 hover:text-emerald-950 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-colors border border-emerald-200"
          >
            <span>संपूर्ण टेरेस फार्मिंग कोर्स देखें (फीस: ₹3,000)</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </motion.div>
  );
}
