import Hero from '@/components/header/hero'
import Statistics from '@/components/home/Statistics/Statistics'
import { Badge } from '@/components/ui/badge'
import Testimonials from '@/components/home/testimonials/Testimonials'
import Image from 'next/image'
import PanchMahabhut from '@/components/home/PanchMahabhut'
import { HelpWidget } from "@/components/common/HelpWidget";

export default async function Home() {


  return (
    <main>
      <Hero />
      <section className="relative py-20 md:py-28 bg-linear-to-br from-emerald-50 via-white to-green-50 overflow-hidden">

        <div className="absolute -top-32 -left-32 w-100 h-100 bg-emerald-200/40 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-32 -right-32 w-100 h-100 bg-green-200/40 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-16">
            <Badge className="mb-6 text-green-700 bg-green-100 px-5 py-2 text-sm tracking-wide">
              प्रकृति पंच महाभूत
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              भारतीय परंपरा और आधुनिक विज्ञान का संगम
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
              प्रकृति 5 महाभूतों से बनी है। यदि इन पंच महाभूतों को खेती की मिट्टी, बीज और पानी में संतुलित किया जाए,
              तो प्रकृति की{" "}
              <span className="text-green-700 font-semibold">
                स्वयंपोषी, स्वयंविकासी और स्वयंपूर्ण व्यवस्था
              </span>{" "}
              स्वतः सक्रिय हो जाती है।
            </p>

            <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-green-100">
              पंचमहाभूत अर्थात पांच महाजीव (भूमि गगन वायु अग्नि नीर) जिन्होंने इस धरती में जीवन की विशाल रचना खड़ी की जिसे हम आज प्रकृति कहते हैं।
              प्रकृति निर्माण की रचना में -
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="relative group">
              <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl">
              <Image
  src="/Tarachand-Belji/with_Ranbir_sir.webp"
  alt="Panch Mahabhut Nature"
  fill
  priority
  fetchPriority="high"
  sizes="(max-width: 1024px) 100vw, 50vw"
  className="object-cover group-hover:scale-105 transition-transform duration-700"
/>
              </div>

              <div className="absolute inset-0 rounded-3xl border-4 border-emerald-400/30 group-hover:border-emerald-500/60 transition-all duration-500"></div>
            </div>

            <div className="space-y-6">
              {[
                { icon: "🌍", title: "भूमि", desc: "बीज को उगाती है" },
                { icon: "🌌", title: "गगन", desc: "बीज निर्माण करता है" },
                { icon: "🌬️", title: "वायु", desc: "जीवन देता है" },
                { icon: "🔥", title: "अग्नि", desc: "ऊर्जा प्रदान करती है" },
                { icon: "💧", title: "नीर", desc: "जीवन पूर्ण करता है" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:shadow-xl px-6 py-4 border border-green-100 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PanchMahabhut />

      <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-green-50 via-lime-50 to-emerald-100">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-300 rounded-full blur-3xl opacity-30"></div>

        <div className="relative max-w-6xl mx-auto px-4">

          <div className="text-center mb-12 md:mb-16">
            <p className="text-xs tracking-[0.35em] uppercase font-semibold text-green-600">
              HOW IT WORKS
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mt-3">
              🌾 TCBT प्राकृतिक खेती – 4 चरणों में
            </h2>
            <p className="max-w-2xl mx-auto text-sm md:text-lg text-slate-700 mt-4">
              खेत की वर्तमान स्थिति से शुरू करते हुए, चरणबद्ध तरीके से TCBT तकनीक
              अपनाई जाती है ताकि किसान को हर कदम पर स्पष्ट मार्गदर्शन मिले।
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-green-400 to-emerald-600 rounded-full"></div>
            <div className="space-y-12">
              <div className="relative md:flex md:items-center md:justify-between">
                <div className="md:w-5/12 bg-white shadow-xl rounded-2xl p-6 border border-green-100 hover:shadow-2xl transition">
                  <p className="text-xs uppercase tracking-[0.3em] text-green-600 font-semibold mb-2">
                    चरण 1
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                    🌱 मिट्टी और फसल का आकलन
                  </h3>
                  <p className="text-sm text-slate-600">
                    खेत की मिट्टी, फसल, जल उपलब्धता और पिछले रसायन उपयोग का
                    संक्षिप्त विश्लेषण किया जाता है। इसी आधार पर TCBT पैकेज चुना
                    जाता है।
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg z-10 text-lg font-bold">
                  1
                </div>

                <div className="md:w-5/12"></div>
              </div>

              <div className="relative md:flex md:items-center md:justify-between">
                <div className="md:w-5/12"></div>

                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg z-10 text-lg font-bold">
                  2
                </div>

                <div className="md:w-5/12 bg-white shadow-xl rounded-2xl p-6 border border-green-100 hover:shadow-2xl transition">
                  <p className="text-xs uppercase tracking-[0.3em] text-green-600 font-semibold mb-2">
                    चरण 2
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                    🌾 मिट्टी और बीज का उपचार
                  </h3>
                  <p className="text-sm text-slate-600">
                    पंचमहाभूत सिद्धांत के अनुसार मिट्टी, बीज और जल का जैविक
                    उपचार किया जाता है ताकि फसल की शुरुआत से ही मजबूत आधार बने।
                  </p>
                </div>
              </div>

              <div className="relative md:flex md:items-center md:justify-between">
                <div className="md:w-5/12 bg-white shadow-xl rounded-2xl p-6 border border-green-100 hover:shadow-2xl transition">
                  <p className="text-xs uppercase tracking-[0.3em] text-green-600 font-semibold mb-2">
                    चरण 3
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                    🌿 फसल वृद्धि और रोग प्रबंधन
                  </h3>
                  <p className="text-sm text-slate-600">
                    फसल के विकास चरण के अनुसार TCBT ऊर्जा जल, अणु जल, जीवाणु जल जैसी
                    विधियाँ अपनाई जाती हैं, जिससे रोग-प्रतिरोधक क्षमता बढ़ती है।
                  </p>
                </div>

                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg z-10 text-lg font-bold">
                  3
                </div>

                <div className="md:w-5/12"></div>
              </div>

              <div className="relative md:flex md:items-center md:justify-between">
                <div className="md:w-5/12"></div>

                <div className="hidden md:flex items-center justify-center w-14 h-14 bg-green-600 text-white rounded-full shadow-lg z-10 text-lg font-bold">
                  4
                </div>

                <div className="md:w-5/12 bg-white shadow-xl rounded-2xl p-6 border border-green-100 hover:shadow-2xl transition">
                  <p className="text-xs uppercase tracking-[0.3em] text-green-600 font-semibold mb-2">
                    चरण 4
                  </p>
                  <h3 className="text-lg md:text-xl font-bold text-green-800 mb-2">
                    🌻 कटाई, विश्लेषण और अगला सीजन
                  </h3>
                  <p className="text-sm text-slate-600">
                    फसल कटाई के बाद उत्पादन, गुणवत्ता और लागत का आकलन किया जाता
                    है। इसके आधार पर अगले सीजन के लिए और भी बेहतर योजना बनाई
                    जाती है।
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Statistics />
      <Testimonials />
      <HelpWidget />
    </main>
  )
}