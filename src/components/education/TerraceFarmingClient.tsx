"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Sprout,
  CheckCircle2,
  Clock,
  Video,
  Award,
  Users,
  ShieldCheck,
  Droplets,
  Sun,
  Layers,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  ArrowRight,
  Heart,
  HelpCircle,
  Home,
  Check,
} from "lucide-react";

interface CurriculumModule {
  number: string;
  titleHi: string;
  titleEn: string;
  duration: string;
  summary: string;
  topics: string[];
}

const MODULES: CurriculumModule[] = [
  {
    number: "01",
    titleHi: "छत का विश्लेषण — भार, धूप, वाटरप्रूफिंग एवं ड्रेनेज",
    titleEn: "Space, Sunlight, Weight & Waterproofing",
    duration: "45 मिनट",
    summary:
      "छत पर खेती शुरू करने से पहले संरचनात्मक सुरक्षा, धूप की दिशा और पानी के निकास का सही प्रबंधन सीखें ताकि छत पर 0% सीपेज रहे।",
    topics: [
      "छत की भार वहन क्षमता (Load Bearing Capacity) का सुरक्षित आकलन",
      "वाटरप्रूफिंग और ड्रेनेज मैट्स (Drainage Cell Mats) का सही प्रयोग",
      "दिशा एवं धूप (Sunlight Mapping) के अनुसार पौधों का सटीक स्थान चयन",
      "हवा के तेज बहाव (Wind Protection) से पौधों की सुरक्षा की तकनीक",
    ],
  },
  {
    number: "02",
    titleHi: "जादुई जैविक मिट्टी — सुपर पॉटिंग मिक्स निर्माण",
    titleEn: "Super Potting Mix & Soil Science",
    duration: "60 मिनट",
    summary:
      "पारंपरिक मिट्टी भारी होती है। सीखें 70% हल्की, अत्यधिक उपजाऊ और स्पंजी सुपर जैविक मिट्टी बनाना जो वर्षों तक उपजाऊ रहे।",
    topics: [
      "कोकोपीट (Cocopeat) का शोधन एवं EC/pH संतुलन विधि",
      "वर्मीकम्पोस्ट, गोबर खाद और पत्तों की खाद का सही अनुपात",
      "TCBT जीवामृत और सूक्ष्मजीवों का मिश्रण कर मिट्टी को जाग्रत करना",
      "नीम खली, करंज खली और रॉक फॉस्फेट का प्राकृतिक पोषण संतुलन",
    ],
  },
  {
    number: "03",
    titleHi: "ग्रो-बैग्स, गमले और कंटेनर प्रबंधन",
    titleEn: "Pots, Grow Bags & Container Selection",
    duration: "40 मिनट",
    summary:
      "किस सब्जी या पौधे के लिए कौन से आकार का ग्रो-बैग चाहिए? सही कंटेनर चयन से उत्पादन 2 गुना तक बढ़ जाता है।",
    topics: [
      "एचडीपीई (HDPE) बनाम जियोफैब्रिक (Geo Fabric) ग्रो-बैग्स की तुलना",
      "सब्जी-वार ग्रो-बैग साइज गाइड (12x12, 15x15, 24x12 इत्यादि)",
      "ड्रेनेज होल्स और रूट बाउंड (Root Bound) से बचाव के नियम",
      "रीसाइकल प्लास्टिक ड्रम, क्रेट्स और ग्रो बेड्स का किफायती उपयोग",
    ],
  },
  {
    number: "04",
    titleHi: "12 महीने का फसल कैलेंडर एवं बीज चयन",
    titleEn: "12-Month Crop Calendar & Seed Sowing",
    duration: "75 मिनट",
    summary:
      "ऋतु के अनुसार सही समय पर बुवाई का संपूर्ण विज्ञान। देसी बीजों का चयन, अंकुरण और पौधशाला (Nursery) तैयार करना।",
    topics: [
      "गर्मी, बारिश और सर्दी की फसलों का 365-दिवसीय कैलेंडर",
      "देसी (Open Pollinated) बनाम हाइब्रिड बीजों का फर्क और बीज संस्कार",
      "टमाटर, मिर्च, बैंगन, शिमला मिर्च की स्वस्थ पौध तैयार करना",
      "बेलदार सब्जियां: तोरई, लौकी, खीरा, करेला और कद्दू की सफल खेती",
      "हरी पत्तेदार सब्जियां: पालक, धनिया, मेथी, लाल भाजी का निरंतर उत्पादन",
    ],
  },
  {
    number: "05",
    titleHi: "वर्टिकल गार्डनिंग — कम जगह में 3 गुना उत्पादन",
    titleEn: "Vertical Gardening & Trellis Systems",
    duration: "50 मिनट",
    summary:
      "यदि छत या बालकनी छोटी है, तो ऊपर की हवा का इस्तेमाल करें। दीवार, ग्रिल और बांस के मचान द्वारा वर्टिकल सेटअप बनाना।",
    topics: [
      "दीवारों और बालकनी की रेलिंग पर प्लांटर्स स्थापित करना",
      "बेलदार सब्जियों के लिए ट्रेलिस (Trellis) और नायलॉन नेटिंग",
      "हैंगिंग बास्केट्स में स्ट्रॉबेरी, पुदीना और चेरी टमाटर उगाना",
      "सीमित जगह में अधिकतम प्रकाश और वायु संचार सुनिश्चित करना",
    ],
  },
  {
    number: "06",
    titleHi: "सिंचाई एवं ड्रिप सिस्टम — छुट्टी पर भी पौधे हरे रहेंगे",
    titleEn: "Smart Watering & Drip Irrigation",
    duration: "45 मिनट",
    summary:
      "छत पर अधिक पानी देना पौधों की मृत्यु का सबसे बड़ा कारण है। सही सिंचाई नियम और ऑटोमैटिक ड्रिप किट इंस्टॉलेशन।",
    topics: [
      "मौसम के अनुसार पानी की आवश्यकता को पहचानना (Under vs Over-watering)",
      "किफायती ग्रेविटी-बेस्ड ड्रिप इरिगेशन किट लगाना",
      "मल्चिंग (Mulching) द्वारा नमी संरक्षण और पानी की 60% बचत",
      "जब आप 5-7 दिन बाहर जाएं, तब के लिए सेल्फ-वाटरिंग व्यवस्था",
    ],
  },
  {
    number: "07",
    titleHi: "100% प्राकृतिक कीट व रोग सुरक्षा कवच",
    titleEn: "Natural Pest & Disease Management",
    duration: "60 मिनट",
    summary:
      "बिना किसी जहरीले रासायनिक कीटनाशक के माहू (Aphids), सफेद मक्खी, मिलीबग, कैटरपिलर और फंगस का घर पर अचूक समाधान।",
    topics: [
      "TCBT नीमास्त्र, अग्निअस्त्र और ब्रह्मास्त्र घर पर बनाना",
      "खट्टी छाछ (Sour Buttermilk) और हींग का फंगस-रोधी स्प्रे",
      "येलो/ब्लू स्टिकी ट्रैप्स और फेरोमोन ट्रैप का उपयोग",
      "कंपेनियन प्लांटिंग: गेंदा, तुलसी और लहसुन द्वारा प्राकृतिक सुरक्षा",
    ],
  },
  {
    number: "08",
    titleHi: "रसोई के कचरे से सोना — होम कम्पोस्टिंग एवं जीवामृत",
    titleEn: "Kitchen Waste Composting & Bio-Enzymes",
    duration: "55 मिनट",
    summary:
      "किचन के छिलकों और सूखे पत्तों से बिना दुर्गंध और बिना कीड़े वाली सुपर खाद और लिक्विड बायो-फर्टिलाइजर बनाना।",
    topics: [
      "दुर्गंध-मुक्त एरोबिक कम्पोस्ट बिन तैयार करने की विधि",
      "बायो-एंजाइम (Bio-Enzymes) और लिक्विड कचरा-अमृत निर्माण",
      "TCBT ऊर्जा जल और अणु जल का छत पर नियमित छिड़काव",
      "सब्जियों के स्वाद, सुगंध और मिठास में वृद्धि के प्राकृतिक तरीके",
    ],
  },
  {
    number: "09",
    titleHi: "कटाई, बीज संरक्षण एवं पौधों का लंबा जीवन",
    titleEn: "Harvesting, Seed Saving & Perennials",
    duration: "40 मिनट",
    summary:
      "सही समय पर सब्जियों की तुड़ाई और अगले साल के लिए अपने ही पौधों से शुद्ध बीज संरक्षित करने का तरीका।",
    topics: [
      "फलों और पत्तों की सही तुड़ाई तकनीक ताकि पौधे बार-बार फल दें",
      "देसी बीजों का चुनाव, सुखाना और सुरक्षित भंडारण",
      "फलदार पौधे: अमरूद, नींबू, चीकू, अनार को गमलों में फलवाना",
      "औषधीय पौधे: अश्वगंधा, गिलोय, तुलसी, कालमेघ और एलोवेरा की देखभाल",
    ],
  },
  {
    number: "10",
    titleHi: "छत की उपज बेचना व कंसल्टिंग से आमदनी",
    titleEn: "Monetizing & Terrace Farm Consulting",
    duration: "50 मिनट",
    summary:
      "अतिरिक्त उपज से साइड-इनकम कमाना, माइक्रोग्रीन्स का छोटा व्यवसाय और दूसरों की छतों पर गार्डन सेटअप कंसल्टेंसी देना।",
    topics: [
      "प्रीमियम ऑर्गेनिक माइक्रोग्रीन्स (Microgreens) का हाई-प्रॉफिट मॉडल",
      "अपार्टमेंट सोसाइटी में ताजी ऑर्गेनिक सब्जियों की बिक्री",
      "छत बागवानी सलाहकार (Terrace Garden Consultant) कैसे बनें",
      "सर्विस चार्ज, प्रोजेक्ट कॉस्टिंग और क्लाइंट मैनेजमेंट",
    ],
  },
];

const SINGLE_COURSE_OFFER = {
  id: "terrace-farming-complete",
  name: "TCBT Terrace Farming Complete Mastercourse",
  nameHi: "🏡 TCBT टेरेस फार्मिंग संपूर्ण मास्टरकोर्स",
  price: "₹3,000",
  originalPrice: "₹5,999",
  discount: "50% विशेष छूट (Limited Time Offer)",
  tagline: "शुरुआती से लेकर उन्नत स्तर तक — 4 सप्ताह लाइव सेशंस, मेंटरशिप व आधिकारिक सर्टिफिकेशन",
  features: [
    "4 सप्ताह लाइव सेशंस (10 संपूर्ण प्रैक्टिकल मॉड्यूल्स)",
    "लाइव डाउट सॉल्विंग व Q&A सेशंस (ताराचंद बेलजी विशेषज्ञ टीम के साथ)",
    "व्हाट्सएप मेंटर ग्रुप एवं एक्सपर्ट सपोर्ट",
    "छत पर पौधों में कीट या बीमारी होने पर फोटो भेजकर तुरंत समाधान",
    "50+ पेज की डिजिटल ई-बुक, पॉटिंग मिक्स रेसिपी व 365-दिवसीय सब्जी कैलेंडर (PDF)",
    "TCBT Jaivik Kisan आधिकारिक डिजिटल सर्टिफिकेट (Verified Certificate)",
  ],
  bonusFeatures: [
    "🎁 बोनस 1: किचन वेस्ट से सुपर-कम्पोस्ट बनाने की प्रैक्टिकल गाइड",
    "🎁 बोनस 2: बालकनी व रेलिंग वर्टिकल गार्डनिंग लेआउट रेसिपी",
    "🎁 बोनस 3: प्राकृतिक नीमास्त्र व जीवामृत निर्माण फॉर्मूला बुक",
  ],
  ctaText: "अभी ₹3,000 में Enroll करें (Get Instant Access)",
  gradient: "from-emerald-600 via-green-600 to-teal-700",
};

const FAQS = [
  {
    q: "क्या मेरी छत पर पानी का रिसाव (Seepage) होगा?",
    a: "बिल्कुल नहीं! हमारे पहले ही मॉड्यूल में हम ड्रेनेज सेल मैट्स (Drainage Mats), स्टैंड्स और सही वाटरप्रूफिंग लेयरिंग सिखाते हैं। गमले या ग्रो-बैग्स कभी भी सीधे फर्श पर नहीं रखे जाते, जिससे पानी आसानी से ड्रेन पाइप की तरफ बह जाता है और छत 100% सुरक्षित रहती है।",
  },
  {
    q: "क्या मेरी छत पौधों और मिट्टी का भारी वजन संभाल पाएगी?",
    a: "हाँ! इस कोर्स में हम साधारण भारी खेत की मिट्टी का उपयोग नहीं करते। हम कोकोपीट, वर्मीकम्पोस्ट और राइस हस्क (धान की भूसी) पर आधारित 'सुपर पॉटिंग मिक्स' बनाना सिखाते हैं, जो सामान्य मिट्टी से 70% हल्की होती है और छत पर न्यूनतम वजन डालती है।",
  },
  {
    q: "मुझे रोज़ छत पर कितना समय देना होगा?",
    a: "एक बार सेटअप हो जाने के बाद, आपको रोज़ाना केवल 15 से 20 मिनट का समय देना होता है — सिर्फ हल्का निरीक्षण और पानी देना। हमारे ड्रिप और मल्चिंग सिस्टम से यह काम और भी आसान हो जाता है।",
  },
  {
    q: "मेरे पास छत नहीं है, सिर्फ 5x10 फीट की बालकनी है। क्या मैं सीख सकता हूँ?",
    a: "हाँ, बिल्कुल! हमारा मॉड्यूल 5 विशेष रूप से 'बालकनी एवं वर्टिकल गार्डनिंग' के लिए तैयार किया गया है। कम जगह में दीवार, रेलिंग और हैंगिंग पॉट्स का उपयोग करके आप ताजी हरी मिर्च, टमाटर, धनिया और पालक आसानी से उगा सकते हैं।",
  },
  {
    q: "क्या कोर्स के बाद पौधों में रोग लगने पर मुझे मदद मिलेगी?",
    a: "हाँ! 'ग्रीन ग्रोवर' और 'फार्म मास्टर' छात्रों को 1 साल के विशेष व्हाट्सएप सपोर्ट ग्रुप में जोड़ा जाता है। जब भी आपके पौधे में कोई कीट या पीलापन दिखे, आप बस फोटो भेजें — हमारे कृषि विशेषज्ञ आपको घरेलू जैविक काढ़ा या उपाय तुरंत बताएंगे।",
  },
  {
    q: "कोर्स की भाषा क्या है और कक्षाएं कब होंगी?",
    a: "कोर्स की भाषा अत्यंत सरल हिंदी है। वीडियो लेक्चर्स आप अपनी सुविधानुसार कभी भी देख सकते हैं। लाइव वीकेंड डाउट सेशंस शनिवार या रविवार शाम को आयोजित किए जाते हैं, जिनकी रिकॉर्डिंग भी हमेशा उपलब्ध रहती है।",
  },
];

export default function TerraceFarmingClient() {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    spaceType: "छत (Terrace)",
    tier: "TCBT टेरेस फार्मिंग संपूर्ण कोर्स (₹3,000)",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const getWhatsAppEnrollUrl = () => {
    const message = encodeURIComponent(
      `नमस्ते TCBT टीम, मैं TCBT Terrace Farming Complete Mastercourse (₹3,000) में एडमिशन लेना चाहता/चाहती हूँ। कृपया मुझे आगे की प्रक्रिया और पेमेंट विवरण साझा करें।`
    );
    return `https://wa.me/919039007835?text=${message}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const message = encodeURIComponent(
      `नमस्ते TCBT टीम,\nमैंने Terrace Farming Course के लिए वेबसाइट पर फॉर्म भरा है:\n- नाम: ${formData.fullName}\n- फोन: ${formData.phone}\n- शहर: ${formData.city}\n- स्थान: ${formData.spaceType}\n- पैकेज: ${formData.tier}\nकृपया मुझे एडमिशन की पुष्टि भेजें।`
    );
    window.open(`https://wa.me/919039007835?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-linear-to-b from-stone-50 via-emerald-50/20 to-white text-gray-900 overflow-hidden">
      {/* Breadcrumb Navigation */}
      <div className="bg-emerald-950 text-emerald-200 text-xs py-3 px-6 md:px-12 border-b border-emerald-900/60">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>होम</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-emerald-500" />
          <Link href="/education" className="hover:text-white transition-colors">
            शिक्षा पोर्टल (Education)
          </Link>
          <ChevronRight className="w-3 h-3 text-emerald-500" />
          <span className="text-white font-semibold">Terrace Farming Course</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-linear-to-br from-emerald-900 via-green-900 to-teal-950 text-white overflow-hidden">
        {/* Glow Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 right-10 w-96 h-96 bg-lime-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-lime-300 shadow-inner">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>TCBT प्रमाणित ऑनलाइन कार्यशाला • Urban Organic Farming</span>
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                अपनी छत और बालकनी को बनाएं{" "}
                <span className="bg-linear-to-r from-lime-300 via-emerald-200 to-teal-200 bg-clip-text text-transparent">
                  हरा-भरा जैविक बगीचा
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-emerald-100 leading-relaxed font-normal">
                ताराचंद बेलजी तकनीक से सीखें बिना किसी रासायनिक स्प्रे के गमलों व ग्रो-बैग्स में
                ताजी, स्वादिष्ट व 100% जहरमुक्त सब्जियाँ, फल व औषधीय पौधे उगाना।
              </p>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start pt-2">
                {[
                  "शून्य छत रिसाव (0% Seepage)",
                  "70% हल्की जैविक मिट्टी",
                  "दैनिक सिर्फ 15 मिनट समय",
                  "आजीवन व्हाट्सएप गाइडेंस",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md rounded-xl px-3 py-1.5 text-xs text-white border border-white/15"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-lime-300 shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#pricing-tiers"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-lime-400 to-emerald-400 text-green-950 font-extrabold text-base shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-green-950" />
                  <span>अभी एडमिशन लें (Enroll Now)</span>
                </a>

                <a
                  href="#curriculum-section"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-base transition-all"
                >
                  <span>10 मॉड्यूल सिलेबस देखें</span>
                  <ChevronDown className="w-4 h-4 text-lime-300" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Summary Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl text-white">
                <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-lime-300 font-bold">
                      COURSE DETAILS
                    </span>
                    <h3 className="text-xl font-bold mt-0.5">मास्टरकोर्स विवरण</h3>
                  </div>
                  <span className="text-4xl">🏡</span>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-emerald-200 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-lime-300" /> अवधि (Duration):
                    </span>
                    <span className="font-semibold">4 सप्ताह</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-emerald-200 flex items-center gap-2">
                      <Video className="w-4 h-4 text-lime-300" /> माध्यम (Format):
                    </span>
                    <span className="font-semibold">लाइव सेशंस</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-emerald-200 flex items-center gap-2">
                      <Award className="w-4 h-4 text-lime-300" /> प्रमाणपत्र:
                    </span>
                    <span className="font-semibold">TCBT अधिकृत सर्टिफिकेशन</span>
                  </div>

                  <div className="flex items-center justify-between py-2 border-b border-white/10">
                    <span className="text-emerald-200 flex items-center gap-2">
                      <Users className="w-4 h-4 text-lime-300" /> सपोर्ट:
                    </span>
                    <span className="font-semibold">व्हाट्सएप मेंटर ग्रुप</span>
                  </div>


                  <div className="flex items-center justify-between py-2">
                    <span className="text-emerald-200 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-yellow-300" /> संपूर्ण कोर्स फीस:
                    </span>
                    <div className="text-right">
                      <span className="font-extrabold text-lime-300 text-lg">₹3,000</span>
                      <span className="text-xs text-white/60 line-through ml-2">₹5,999</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/15 text-center">
                  <p className="text-xs text-emerald-200 mb-3">
                    सीटें सीमित हैं • अगला बैच इस शनिवार से शुरू हो रहा है
                  </p>
                  <a
                    href="#quick-form"
                    className="block w-full text-center py-3.5 rounded-xl bg-white text-emerald-950 font-bold hover:bg-lime-300 transition-colors shadow-md"
                  >
                    एडमिशन इंक्वायरी फॉर्म भरें
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Transformation Outcomes */}
      <section className="py-16 md:py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              COURSE BENEFITS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
              इस कोर्स से आपके जीवन में क्या बदलाव आएगा?
            </h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              सिर्फ गार्डनिंग नहीं, बल्कि आपके परिवार के स्वास्थ्य और घर की खुशहाली की नई शुरुआत।
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🍅",
                title: "100% जहरमुक्त आहार",
                desc: "बाजार की रासायनिक कीटनाशक युक्त सब्जियों से मुक्ति। अपनी छत से रोज ताजी, खुशबूदार और पोषण से भरपूर सब्जियां पाएं।",
              },
              {
                icon: "💰",
                title: "हर महीने ₹3,000–₹5,000 की बचत",
                desc: "टमाटर, मिर्च, धनिया, पालक, तोरई, नींबू जैसी रोजमर्रा की सब्जियों का बाजार खर्च हमेशा के लिए 70% तक कम हो जाएगा।",
              },
              {
                icon: "🧘‍♂️",
                title: "मानसिक शांति व तनावमुक्ति",
                desc: "हरियाली और मिट्टी से जुड़ने से कोर्टिसोल (तनाव हार्मोन) कम होता है। पूरे परिवार के लिए एक आनंददायक व स्वस्थ शौक।",
              },
              {
                icon: "❄️",
                title: "घर का तापमान 3-5°C ठंडा",
                desc: "छत पर पौधों का हरा आवरण प्राकृतिक थर्मल इंसुलेटर का काम करता है, जिससे गर्मियों में एसी और बिजली का बिल कम आता है।",
              },
            ].map((b, i) => (
              <div
                key={i}
                className="bg-stone-50 hover:bg-emerald-50/50 rounded-3xl p-6 border border-stone-200 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10-Module Detailed Curriculum */}
      <section id="curriculum-section" className="py-20 md:py-28 bg-stone-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-100/70 px-4 py-1.5 rounded-full border border-emerald-200">
              STEP-BY-STEP SYLLABUS
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              10 मॉड्यूल संपूर्ण पाठ्यक्रम
            </h2>
            <p className="text-gray-600 mt-3 text-base md:text-lg">
              शुरुआती स्तर से लेकर एडवांस्ड टेरेस फार्मिंग तक — हर विषय का गहराई से व्यावहारिक ज्ञान।
            </p>
          </div>

          <div className="space-y-4">
            {MODULES.map((mod, i) => {
              const isOpen = openModule === i;
              return (
                <div
                  key={i}
                  className="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 p-5 md:p-6 text-left hover:bg-emerald-50/30 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 font-black text-sm shrink-0">
                        {mod.number}
                      </span>
                      <div>
                        <span className="text-xs font-semibold text-emerald-700 tracking-wider uppercase">
                          Module {mod.number} • {mod.duration}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mt-0.5">
                          {mod.titleHi}
                        </h3>
                        <p className="text-xs text-gray-500 font-medium">{mod.titleEn}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 mt-2 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden border-t border-gray-100 bg-stone-50/50"
                      >
                        <div className="p-5 md:p-6 space-y-4 text-sm text-gray-700">
                          <p className="leading-relaxed font-medium text-gray-800 bg-emerald-50/60 p-3.5 rounded-2xl border border-emerald-100">
                            {mod.summary}
                          </p>

                          <div>
                            <h4 className="font-bold text-gray-900 text-xs uppercase tracking-wider text-emerald-900 mb-2.5">
                              इस मॉड्यूल में आप क्या सीखेंगे:
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2">
                              {mod.topics.map((t, idx) => (
                                <div key={idx} className="flex items-start gap-2 text-xs md:text-sm">
                                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  <span>{t}</span>
                                </div>
                              ))}
                            </div>
                          </div>
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

      {/* Pricing / Enrollment Section - Single Offer of ₹3,000 */}
      <section id="pricing-tiers" className="py-20 md:py-28 bg-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              OFFICIAL ALL-IN-ONE OFFER
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 leading-tight">
              TCBT टेरेस फार्मिंग संपूर्ण मास्टरकोर्स
            </h2>
            <p className="text-gray-600 mt-3 text-base md:text-lg">
              4 सप्ताह लाइव सेशंस, मेंटरशिप और एक्सपर्ट गाइडेंस — सब कुछ एक ही विशेष फीस में।
            </p>
          </div>

          {/* Single Focused Pricing Card */}
          <div className="relative rounded-3xl bg-linear-to-b from-emerald-900 via-green-900 to-teal-950 text-white shadow-2xl p-8 md:p-12 border-2 border-lime-400 overflow-hidden">
            {/* Top Recommended Ribbon */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/15">
              <div>
                <span className="inline-block bg-linear-to-r from-lime-400 to-emerald-400 text-green-950 font-black text-xs uppercase tracking-wider px-4 py-1 rounded-full shadow-md mb-2">
                  ⭐️ संपूर्ण ऑल-इन-वन मास्टरकोर्स (All-In-One Package)
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                  {SINGLE_COURSE_OFFER.nameHi}
                </h3>
                <p className="text-xs md:text-sm text-emerald-200 mt-1 font-medium">
                  {SINGLE_COURSE_OFFER.tagline}
                </p>
              </div>

              <div className="text-left md:text-right bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20">
                <span className="text-xs uppercase tracking-wider text-lime-300 font-bold block">
                  विशेष ऑफर फीस (Special Fee)
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl md:text-5xl font-black text-white">
                    {SINGLE_COURSE_OFFER.price}
                  </span>
                  <span className="text-base text-emerald-300 line-through">
                    {SINGLE_COURSE_OFFER.originalPrice}
                  </span>
                </div>
                <span className="text-[11px] text-lime-300 font-semibold">
                  {SINGLE_COURSE_OFFER.discount}
                </span>
              </div>
            </div>

            {/* Features Grid */}
            <div className="py-8 grid md:grid-cols-2 gap-4">
              {SINGLE_COURSE_OFFER.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-emerald-100">
                  <CheckCircle2 className="w-5 h-5 text-lime-300 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>

            {/* Bonus Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-lime-300 mb-2.5">
                मुफ्त बोनस सामग्री (Included Free):
              </h4>
              <div className="grid sm:grid-cols-3 gap-2 text-xs text-white/90">
                {SINGLE_COURSE_OFFER.bonusFeatures.map((b, i) => (
                  <div key={i} className="bg-black/20 rounded-xl p-2.5 font-medium">
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/15">
              <div className="text-xs text-emerald-200 text-center sm:text-left">
                🔒 100% सुरक्षित एडमिशन • तुरंत एक्सेस • आजीवन वीडियो वैलिडिटी
              </div>

              <a
                href={getWhatsAppEnrollUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-linear-to-r from-lime-400 to-emerald-400 text-green-950 font-black text-base shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 text-green-950" />
                <span>अभी ₹3,000 में Enroll करें (Get Instant Access)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Inquiry / Enrollment Form */}
      <section id="quick-form" className="py-20 bg-stone-100 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-stone-200">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
                QUICK ENROLLMENT INQUIRY
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-3">
                एडमिशन एवं परामर्श फॉर्म
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                अपना विवरण भरें — हमारी एडमिशन टीम आपको व्हाट्सएप और कॉल पर तुरंत सहायता करेगी।
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    पूरा नाम (Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="उदा. राहुल शर्मा"
                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    व्हाट्सएप नंबर (WhatsApp No.) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="उदा. 9876543210"
                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    शहर एवं राज्य (City, State) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="उदा. इंदौर, मध्य प्रदेश"
                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                    आपके पास उपलब्ध जगह (Space Type)
                  </label>
                  <select
                    value={formData.spaceType}
                    onChange={(e) => setFormData({ ...formData, spaceType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none text-sm bg-white cursor-pointer"
                  >
                    <option value="छत (Terrace / Rooftop)">छत (Terrace / Rooftop)</option>
                    <option value="बालकनी (Apartment Balcony)">बालकनी (Apartment Balcony)</option>
                    <option value="फार्म हाउस / छोटा बैकयार्ड">फार्म हाउस / बैकयार्ड</option>
                    <option value="अभी जगह तय नहीं है">अभी योजना बना रहा/रही हूँ</option>
                  </select>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                    कोर्स पैकेज (Selected Package):
                  </span>
                  <p className="text-sm font-bold text-emerald-950 mt-0.5">
                    TCBT टेरेस फार्मिंग संपूर्ण मास्टरकोर्स (All-In-One Course)
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0 bg-white/80 px-4 py-2 rounded-xl border border-emerald-100">
                  <span className="text-[11px] text-gray-500 block">कोर्स फीस (Fee):</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-emerald-800">₹3,000</span>
                    <span className="text-xs text-gray-400 line-through">₹5,999</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-linear-to-r from-emerald-600 via-green-600 to-teal-700 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>सबमिट करें और व्हाट्सएप पर जानकारी पाएं</span>
              </button>

              <p className="text-center text-xs text-gray-500">
                🔒 आपकी जानकारी 100% गोपनीय रखी जाती है। कोई स्पैम नहीं।
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200">
              COMMON QUERIES
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 leading-tight">
              टेरेस फार्मिंग से जुड़े अक्सर पूछे जाने वाले सवाल
            </h2>
            <p className="text-gray-600 mt-2">
              क्या आपके मन में भी ये सवाल हैं? जानिए सटीक वैज्ञानिक समाधान।
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl bg-stone-50 border border-stone-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left font-bold text-gray-900 hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span className="text-base md:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-emerald-600" : ""
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
                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-stone-200 pt-4">
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

      {/* SEO Topics & Search Keywords */}
      <section className="py-12 bg-stone-100 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-emerald-800 mb-4">
            लोकप्रिय विषय व खोजें (Popular Topics & Searches)
          </h3>
          <div className="flex flex-wrap justify-center gap-2 md:gap-2.5">
            {[
              "छत पर सब्जियां उगाने का तरीका",
              "टेरेस गार्डनिंग कोर्स",
              "घर पर सब्जियां उगाना सीखें",
              "किचन गार्डन ट्रेनिंग",
              "छत पर बागवानी कैसे करें",
              "गमले में सब्जियां उगाना",
              "घर पर जैविक सब्जियां उगाना",
              "टेरेस गार्डन बनाना सीखें",
              "Terrace Gardening Course",
              "Terrace Vegetable Gardening",
              "How to Grow Vegetables on Terrace",
              "Kitchen Garden Training",
              "Home Gardening Course",
              "Rooftop Gardening",
              "Organic Terrace Gardening",
              "Vegetable Gardening at Home",
              "Terrace Garden Training",
              "Balcony Vegetable Gardening",
            ].map((keyword, i) => (
              <span
                key={i}
                className="inline-block text-xs bg-white text-gray-700 px-3.5 py-1.5 rounded-full border border-stone-200 shadow-2xs hover:border-emerald-500 hover:text-emerald-700 transition-colors"
              >
                #{keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 bg-linear-to-br from-emerald-900 via-green-900 to-teal-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Sparkles className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            आज ही अपनी छत को एक जीवंत खेत में बदलें!
          </h2>
          <p className="text-base md:text-lg text-emerald-100 max-w-2xl mx-auto mb-8">
            स्वास्थ्य, स्वाद और आत्मसंतुष्टि — अपने हाथों से उगाई 100% जहरमुक्त जैविक सब्जियों का आनंद लें।
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/919039007835?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20TCBT%20%E0%A4%9F%E0%A5%80%E0%A4%AE%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20Terrace%20Farming%20Course%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%8F%E0%A4%A1%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A4%A8%20%E0%A4%95%E0%A5%80%20%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-green-950 font-bold px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp पर एडमिशन टीम से बात करें</span>
            </a>

            <a
              href="tel:+919039007835"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-4 rounded-2xl transition-all text-base"
            >
              <Phone className="w-4 h-4 text-lime-300" />
              <span>कॉल करें: +91 90390 07835</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
