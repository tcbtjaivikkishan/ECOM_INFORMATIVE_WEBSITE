"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  FileText,
  Video,
  Award,
  Users,
  Sprout,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface CourseItem {
  id: string;
  category: "online" | "urban";
  titleHi: string;
  titleEn: string;
  badge: string;
  duration: string;
  mode: string;
  language: string;
  icon: string;
  gradient: string;
  accent: string;
  tagline: string;
  description: string;
  highlights: string[];
  syllabus: string[];
  targetAudience: string;
}

const COURSES_DATA: CourseItem[] = [
  {
    id: "vrikshayurveda",
    category: "online",
    titleHi: "TCBT वृक्षायुर्वेद विज्ञान",
    titleEn: "TCBT Vrikshayurveda Science",
    badge: "वृक्षायुर्वेद • Flagship",
    duration: "6 Months",
    mode: "लाइव + रिकॉर्डेड वीडियो",
    language: "हिंदी",
    icon: "🌿",
    gradient: "from-emerald-600 via-green-600 to-teal-700",
    accent: "emerald",
    tagline: "पौधों की भाषा समझें और प्राकृतिक उपचार में विशेषज्ञता हासिल करें",
    description:
      "प्राचीन भारतीय वृक्षायुर्वेद और ताराचंद बेलजी तकनीक का वैज्ञानिक समन्वय। पौधों में 16 प्रमुख पोषक तत्वों की कमी को पत्तियों, तनों और फूलों के रंग-रूप से पहचानना और 100% प्राकृतिक फार्मूलों से उपचार करना सीखें।",
    highlights: [
      "पौधे की नाड़ी परीक्षा एवं पत्तियों द्वारा सूक्ष्म पोषक तत्वों की पहचान",
      "पंचमहाभूत सिद्धांत पर आधारित जैविक उपचार विधियाँ",
      "प्राकृतिक कीट, फंगस और वायरस का बिना रासायनिक स्प्रे समाधान",
      "सजीव जल, अणु जल और जीवाणु जल का सटीक उपयोग",
    ],
    syllabus: [
      "सप्ताह 1: वृक्षायुर्वेद का मूल सिद्धांत और पंचमहाभूत संबंध",
      "सप्ताह 2: 16 पोषक तत्वों के लक्षण व प्राकृतिक विकल्प",
      "सप्ताह 3: कीट-रोग चक्र एवं TCBT जैविक काढ़ा निर्माण",
      "सप्ताह 4: केस स्टडीज, प्रश्नोत्तरी और प्रमाणन",
    ],
    targetAudience: "किसान, कृषि सलाहकार, बागवान एवं प्राकृतिक खेती के अभ्यासी",
  },
  {
    id: "terrace-farming",
    category: "urban",
    titleHi: "TCBT Terrace Farming & Kitchen Gardening",
    titleEn: "Terrace Farming Course",
    badge: "Terrace Farming • Urban",
    duration: "4 सप्ताह",
    mode: "ऑनलाइन वीडियो लेक्चर्स + व्यावहारिक गाइड",
    language: "हिंदी / English",
    icon: "🏡",
    gradient: "from-lime-600 via-emerald-600 to-green-700",
    accent: "lime",
    tagline: "अपनी छत और बालकनी को बनाएं हरा-भरा रसायनमुक्त जैविक बगीचा",
    description:
      "शहरी परिवारों, गृहणियों और बागवानी प्रेमियों के लिए विशेष कोर्स। सीमित जगह में गमलों, ग्रो-बैग्स और कंटेनरों में बिना किसी रासायनिक खाद के ताजी, पौष्टिक सब्जियां, फल और औषधीय पौधे उगाना सीखें।",
    highlights: [
      "छत के लिए हल्की और उपजाऊ जैविक मिट्टी (Potting Mix) निर्माण",
      "ऋतु अनुसार सब्जियों व फलों के बीजों का चयन एवं अंकुरण विधि",
      "रसोई के कचरे से सुपर-कम्पोस्ट व लिक्विड फर्टिलाइजर बनाना",
      "घरेलू स्तर पर ऊर्जा जल और जीवाणु जल द्वारा पौधों की सुरक्षा",
    ],
    syllabus: [
      "सत्र 1: छत पर लोड प्रबंधन, ग्रो-बैग चयन व ड्रेनेज व्यवस्था",
      "सत्र 2: जीवामृत युक्त पोंटिंग मिक्स व रूट-ज़ोन तैयारी",
      "सत्र 3: कीट निवारण के लिए प्राकृतिक नीमास्त्र व छाछ स्प्रे",
      "सत्र 4: दैनिक देखभाल कैलेंडर और अधिक उपज के गुप्त नुस्खे",
    ],
    targetAudience: "शहरी निवासी, गृहिणियां, बालकनी व छत के बागवानी प्रेमी",
  },
];

const FREE_RESOURCES = [
  {
    title: "गेहूं की TCBT पैकेज ऑफ प्रैक्टिसेज (POP)",
    desc: "बीज संस्कार से लेकर कटाई तक की चरणबद्ध प्रक्रिया एवं स्प्रे शिड्यूल।",
    link: "https://workdrive.zohoexternal.in/file/tisic561ecaae632d424bb162f393387ea7f5",
    type: "PDF Guide",
    icon: FileText,
  },
  {
    title: "मटर की जैविक खेती संपूर्ण विधि (POP)",
    desc: "मटर की फसल में फफूंद व कीट रोकथाम और उच्च उपज का TCBT मॉडल।",
    link: "https://workdrive.zohoexternal.in/file/tisic53335cb715324848a1772722183efc2c",
    type: "PDF Guide",
    icon: FileText,
  },
  {
    title: "सरसों की वैज्ञानिक प्राकृतिक खेती (POP)",
    desc: "कम पानी में तेल की मात्रा और दाने का वजन बढ़ाने की जैविक तकनीकी।",
    link: "https://workdrive.zohoexternal.in/file/tisicc455db673256428dbd3f1a5b72a11820",
    type: "PDF Guide",
    icon: FileText,
  },
  {
    title: "ताराचंद बेलजी वीडियो व्याख्यान श्रृंखला",
    desc: "500+ वीडियो लेक्चर्स — खेत की समस्याओं के लाइव समाधान यूट्यूब पर।",
    link: "https://www.youtube.com/@TarachandBelji",
    type: "Video Series",
    icon: Video,
  },
];

const FAQS = [
  {
    q: "क्या इन कोर्सेज में कोई भी सामान्य व्यक्ति या किसान भाग ले सकता है?",
    a: "हाँ, TCBT के सभी कोर्सेज बहुत ही सरल, व्यावहारिक और हिंदी भाषा में तैयार किए गए हैं। चाहे आप पारंपरिक किसान हों, नए बागवान हों या शहरी गृहिणी, आप बिना किसी पूर्व वैज्ञानिक पृष्ठभूमि के इन कोर्सेज को आसानी से समझ और लागू कर सकते हैं।",
  },
  {
    q: "कोर्स पूरा होने के बाद क्या प्रमाण पत्र (Certificate) मिलता है?",
    a: "हाँ, हमारे सभी औपचारिक ऑनलाइन कोर्सेज और मास्टरक्लास को सफलतापूर्वक पूरा करने और असाइनमेंट सबमिट करने पर TCBT Jaivik Kisan द्वारा सत्यापित डिजिटल प्रमाण पत्र प्रदान किया जाता है।",
  },
  {
    q: "क्या लाइव क्लास छूट जाने पर रिकॉर्डिंग मिलेगी?",
    a: "बिल्कुल! सभी लाइव सत्रों की एचडी वीडियो रिकॉर्डिंग, पीपीटी प्रेजेंटेशन और अध्ययन सामग्री छात्रों को उपलब्ध कराई जाती है जिसे आप अपनी सुविधानुसार कभी भी देख सकते हैं।",
  },
  {
    q: "कोर्स के दौरान या बाद में सवाल पूछने की क्या सुविधा है?",
    a: "सभी विद्यार्थियों को विशेष TCBT लर्नर्स कम्युनिटी व व्हाट्सएप ग्रुप में जोड़ा जाता है जहाँ आप सीधे विशेषज्ञों और ताराचंद बेलजी जी की टीम से अपने खेत या पौधों की तस्वीरें भेजकर मार्गदर्शन प्राप्त कर सकते हैं।",
  },
  {
    q: "नामांकन (Enrollment) कैसे करें?",
    a: "आप नीचे दिए गए 'अभी Enroll करें' या व्हाट्सएप बटन पर क्लिक करके सीधे हमारी एडमिशन टीम से संपर्क कर सकते हैं और अपनी सीट सुरक्षित कर सकते हैं।",
  },
];

export default function EducationClient() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedCourse, setSelectedCourse] = useState<CourseItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filter courses based on active tab
  const filteredCourses =
    activeTab === "all"
      ? COURSES_DATA
      : COURSES_DATA.filter((c) => c.category === activeTab);

  const getWhatsAppLink = (courseTitle: string) => {
    const text = encodeURIComponent(
      `नमस्ते TCBT टीम, मैं "${courseTitle}" कोर्स में प्रवेश (Enrollment) लेना चाहता/चाहती हूँ। कृपया मुझे फीस, समय और रजिस्ट्रेशन की विस्तृत जानकारी प्रदान करें।`
    );
    return `https://wa.me/919039007835?text=${text}`;
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-stone-50 via-emerald-50/20 to-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-emerald-900 via-green-900 to-teal-950 text-white">
        {/* Decorative background glows */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-lime-400 rounded-full blur-3xl" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-emerald-200 mb-6 shadow-inner"
          >
            <GraduationCap className="w-4 h-4 text-emerald-300" />
            <span>TCBT आधिकारिक शिक्षा एवं प्रशिक्षण केंद्र</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight"
          >
            प्राकृतिक खेती और वैदिक{" "}
            <span className="bg-linear-to-r from-emerald-300 via-lime-200 to-teal-200 bg-clip-text text-transparent">
              कृषि विज्ञान सीखें
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            ताराचंद बेलजी तकनीक द्वारा प्रमाणित प्रशिक्षण — किसानों, शहरी बागवानों
            और कृषि प्रेमियों के लिए विशेष रूप से तैयार किए गए वैज्ञानिक पाठ्यक्रम
            और संपूर्ण मार्गदर्शन।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#courses-catalog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-emerald-500 to-teal-500 text-white font-bold shadow-lg shadow-emerald-900/40 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <span>कोर्सेज देखें (Browse Courses)</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#free-resources"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold transition-all duration-300"
            >
              <BookOpen className="w-5 h-5 text-emerald-300" />
              <span>निःशुल्क अध्ययन सामग्री (Free POP)</span>
            </a>
          </motion.div>

          {/* Quick Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto text-left"
          >
            {[
              { num: "2,00,000+", label: "प्रशिक्षित किसान" },
              { num: "15+ वर्ष", label: "वैज्ञानिक अनुसंधान" },
              { num: "100%", label: "रसायन-मुक्त तकनीक" },
              { num: "आजीवन", label: "मार्गदर्शन व कम्युनिटी" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-5 border border-white/15"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-lime-300">
                  {stat.num}
                </div>
                <div className="text-xs md:text-sm text-emerald-100 font-medium mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars of TCBT Education */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              WHY TCBT EDUCATION?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
              TCBT शिक्षा के 4 प्रमुख आधार
            </h2>
            <p className="text-gray-600 mt-3 text-base md:text-lg">
              हम सिर्फ जानकारी नहीं देते, बल्कि प्रकृति के नियमों के आधार पर
              खेत को आत्मनिर्भर बनाने की शक्ति सिखाते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🔬",
                title: "वैदिक एवं व्यावहारिक विज्ञान",
                desc: "पंचमहाभूत और वृक्षायुर्वेद के प्राचीन सिद्धांतों का आधुनिक विज्ञान से समन्वय।",
              },
              {
                icon: "🌿",
                title: "100% शून्य रसायन",
                desc: "बिना किसी जहरीले रासायनिक कीटनाशक व यूरिया/डीएपी के उच्च गुणवत्ता उत्पादन।",
              },
              {
                icon: "💰",
                title: "लागत में 80% तक कमी",
                desc: "खेत और घर पर ही प्राकृतिक खाद, ऊर्जा जल और कीटनाशक काढ़ा तैयार करना।",
              },
              {
                icon: "🤝",
                title: "आजीवन कम्युनिटी सपोर्ट",
                desc: "सीखने के बाद भी ताराचंद बेलजी जी की विशेषज्ञ टीम द्वारा नियमित मार्गदर्शन।",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-stone-50 hover:bg-emerald-50/50 rounded-3xl p-6 border border-stone-200 hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Catalog Section */}
      <section
        id="courses-catalog"
        className="py-20 md:py-28 bg-linear-to-b from-stone-50 via-emerald-50/20 to-stone-50 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-100/70 px-4 py-1.5 rounded-full border border-emerald-200">
              OUR COURSES & MASTERCLASSES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              उपलब्ध प्रशिक्षण कार्यक्रम
            </h2>
            <p className="text-gray-600 mt-3 text-base md:text-lg">
              अपनी रुचि और आवश्यकतानुसार कोर्स चुनें और आज ही प्राकृतिक खेती के
              विशेषज्ञ बनें।
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: "all", label: "सभी कोर्सेज (All)" },
              { id: "online", label: "वृक्षायुर्वेद (Vrikshayurveda)" },
              { id: "urban", label: "छत पर बागवानी (Terrace)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-emerald-700 text-white shadow-md scale-105"
                    : "bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Course Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Card Header Banner */}
                <div
                  className={`relative bg-linear-to-r ${course.gradient} px-6 py-8 md:px-8 md:py-10 text-white overflow-hidden`}
                >
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white mb-3">
                        {course.badge}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                        {course.titleHi}
                      </h3>
                      <p className="text-sm text-white/80 mt-1 font-medium">
                        {course.titleEn}
                      </p>
                    </div>
                    <span className="text-4xl md:text-5xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </span>
                  </div>

                  {/* Metadata Chips */}
                  <div className="relative z-10 flex flex-wrap gap-2 mt-6 text-xs text-white/90">
                    <span className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <Video className="w-3.5 h-3.5" />
                      {course.mode}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-black/20 backdrop-blur-sm rounded-xl px-3 py-1.5">
                      <Award className="w-3.5 h-3.5" />
                      प्रमाणित (Certificate)
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6 font-medium">
                    {course.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-3 mb-6 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      प्रमुख विषय एवं लाभ:
                    </p>
                    {course.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                        <span className="text-sm text-gray-700">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Target Audience */}
                  <div className="bg-stone-50 rounded-2xl p-4 mb-6 border border-stone-200">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                      किसके लिए उपयुक्त:
                    </p>
                    <p className="text-xs md:text-sm text-gray-800 font-medium mt-1">
                      {course.targetAudience}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2.5 pt-2">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <button
                        onClick={() => setSelectedCourse(course)}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm transition-colors cursor-pointer border border-emerald-200"
                      >
                        <span>पाठ्यक्रम विवरण (Syllabus)</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <a
                        href={getWhatsAppLink(course.titleHi)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-linear-to-r ${course.gradient} text-white font-semibold text-sm shadow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>अभी Enroll करें</span>
                      </a>
                    </div>

                    {course.id === "terrace-farming" && (
                      <Link
                        href="/education/terracefarming"
                        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-lime-50 hover:bg-lime-100 border border-lime-300 text-emerald-950 font-bold text-xs transition-colors"
                      >
                        <span>संपूर्ण टेरेस फार्मिंग कोर्स देखें (फीस: ₹3,000)</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Educational Resources & POP Section */}
      <section id="free-resources" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              FREE STUDY MATERIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
              निःशुल्क अध्ययन सामग्री व POP गाइड
            </h2>
            <p className="text-gray-600 mt-3 text-base md:text-lg">
              किसानों की सुविधा के लिए फसलों की प्रामाणिक मार्गदर्शिकाएँ और
              व्याख्यान बिल्कुल मुफ्त उपलब्ध हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FREE_RESOURCES.map((res, i) => {
              const Icon = res.icon;
              return (
                <a
                  key={i}
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col p-6 rounded-3xl bg-stone-50 hover:bg-emerald-50/70 border border-stone-200 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                    {res.type}
                  </span>
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-emerald-800 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed flex-1">
                    {res.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between text-xs font-semibold text-emerald-700 group-hover:text-emerald-800">
                    <span>डाउनलोड / देखें</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-100/60 px-4 py-1.5 rounded-full border border-emerald-200">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 leading-tight">
              अक्सर पूछे जाने वाले सवाल
            </h2>
            <p className="text-gray-600 mt-2">
              कोर्सेज और प्रशिक्षण से जुड़े आपके सभी सवालों के जवाब
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-white border border-gray-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left font-bold text-gray-900 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-90 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment & Direct Support CTA */}
      <section className="py-20 bg-linear-to-br from-emerald-800 to-green-900 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Sparkles className="w-10 h-10 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            प्राकृतिक खेती सीखने के लिए तैयार हैं?
          </h2>
          <p className="text-base md:text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            हमारी टीम से सीधे बात करें और जानें कि आपकी आवश्यकताओं के अनुसार कौन सा कोर्स सबसे उपयुक्त रहेगा।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919039007835?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20TCBT%20%E0%A4%9F%E0%A5%80%E0%A4%AE%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20TCBT%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B6%E0%A4%BF%E0%A4%95%E0%A5%8D%E0%A4%97%E0%A4%A3%20%E0%A4%95%E0%A5%8B%E0%A4%B0%E0%A5%8D%E0%A4%B8%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%B5%E0%A5%87%E0%A4%B6%20%E0%A4%95%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A4%A4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-950 font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 text-green-950" />
              <span>WhatsApp पर एडमिशन टीम से संपर्क करें</span>
            </a>

            <a
              href="tel:+919039007835"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-4 rounded-2xl transition-all"
            >
              <span>कॉल करें: +91 90390 07835</span>
            </a>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div
                className={`bg-linear-to-r ${selectedCourse.gradient} p-6 text-white`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-semibold uppercase mb-2">
                      {selectedCourse.badge}
                    </span>
                    <h3 className="text-2xl font-bold">
                      {selectedCourse.titleHi}
                    </h3>
                    <p className="text-xs text-white/80">
                      {selectedCourse.titleEn}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-gray-700">
                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-2">
                    विस्तृत विवरण (Overview)
                  </h4>
                  <p className="leading-relaxed">{selectedCourse.description}</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 text-base mb-3">
                    सप्ताह-वार पाठ्यक्रम (Syllabus)
                  </h4>
                  <div className="space-y-2">
                    {selectedCourse.syllabus.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-gray-800 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                  <h5 className="font-bold text-emerald-900 mb-1">
                    शामिल सुविधाएं (Inclusions):
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-xs text-emerald-800">
                    <li>लाइव कक्षाएं एवं सभी रिकॉर्डिंग्स का आजीवन एक्सेस</li>
                    <li>विस्तृत हिंदी व अंग्रेजी पीडीएफ नोट्स व फॉर्मूला बुक</li>
                    <li>TCBT आधिकारिक डिजिटल प्रमाण पत्र (Certificate)</li>
                    <li>व्हाट्सएप डिस्कशन ग्रुप में सीधा मेंटर सपोर्ट</li>
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-4 border-t border-gray-200 bg-stone-50 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  बंद करें
                </button>

                <a
                  href={getWhatsAppLink(selectedCourse.titleHi)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-linear-to-r ${selectedCourse.gradient} text-white font-bold shadow hover:shadow-lg transition-all`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>एडमिशन हेतु संपर्क करें</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
