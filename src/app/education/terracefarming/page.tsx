import type { Metadata } from "next";
import TerraceFarmingClient from "@/components/education/TerraceFarmingClient";

export const metadata: Metadata = {
  title:
    "Terrace Gardening Course | छत पर सब्जियां उगाने का तरीका & ट्रेनिंग | TCBT",
  description:
    "छत पर सब्जियां उगाने का तरीका और टेरेस गार्डनिंग कोर्स। घर पर जैविक सब्जियां उगाएं, किचन गार्डन ट्रेनिंग, गमले में सब्जियां उगाना सीखें। 4 सप्ताह लाइव सेशंस व सर्टिफिकेशन — विशेष फीस ₹3,000.",
  keywords: [
    // English keywords
    "terrace gardening course",
    "terrace vegetable gardening",
    "how to grow vegetables on terrace",
    "kitchen garden training",
    "home gardening course",
    "rooftop gardening",
    "organic terrace gardening",
    "vegetable gardening at home",
    "terrace garden training",
    "balcony vegetable gardening",
    // Hindi keywords
    "छत पर सब्जियां उगाने का तरीका",
    "टेरेस गार्डनिंग कोर्स",
    "घर पर सब्जियां उगाना सीखें",
    "किचन गार्डन ट्रेनिंग",
    "छत पर बागवानी कैसे करें",
    "गमले में सब्जियां उगाना",
    "घर पर जैविक सब्जियां उगाना",
    "टेरेस गार्डन बनाना सीखें",
    // Brand keywords
    "TCBT terrace farming",
    "Tara Chand Belji terrace gardening",
    "TCBT Jaivik Kisan",
  ],
  alternates: {
    canonical: "/education/terracefarming",
  },
  openGraph: {
    title:
      "TCBT Terrace Gardening Course | घर व छत पर जैविक सब्जियां उगाना सीखें",
    description:
      "टेरेस गार्डनिंग कोर्स, किचन गार्डन ट्रेनिंग और छत पर सब्जियां उगाने का वैज्ञानिक तरीका। 4 सप्ताह लाइव सेशंस, मेंटरशिप व सर्टिफिकेशन — ₹3,000.",
    url: "/education/terracefarming",
    type: "website",
    locale: "hi_IN",
  },
};

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "TCBT Terrace Gardening & Home Vegetable Gardening Course",
  description:
    "छत पर सब्जियां उगाने का तरीका और टेरेस गार्डनिंग कोर्स। घर पर जैविक सब्जियां उगाना सीखें, किचन गार्डन ट्रेनिंग व ऑर्गेनिक रूफटॉप गार्डनिंग। 4 सप्ताह लाइव सेशंस।",
  provider: {
    "@type": "Organization",
    name: "TCBT Jaivik Kisan",
    sameAs: "https://tcbtjaivikkisan.com",
  },
  offers: {
    "@type": "Offer",
    price: "3000",
    priceCurrency: "INR",
    category: "Paid",
    availability: "https://schema.org/InStock",
  },
  educationalCredentialAwarded: "TCBT Verified Certification",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    courseWorkload: "P4W",
    instructor: {
      "@type": "Person",
      name: "Tarachand Belji Technique Certified Experts",
    },
  },
};

export default function TerraceFarmingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <TerraceFarmingClient />
    </>
  );
}
