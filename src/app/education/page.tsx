import type { Metadata } from "next";
import EducationClient from "@/components/education/EducationClient";

export const metadata: Metadata = {
  title: "TCBT शिक्षा एवं प्रशिक्षण पोर्टल | Learn Natural Farming & Vedic Agriculture",
  description:
    "ताराचंद बेलजी तकनीक द्वारा संचालित प्राकृतिक खेती, वृक्षायुर्वेद विज्ञान, टेरेस फार्मिंग और ऊर्जा विज्ञान के आधिकारिक प्रशिक्षण कोर्सेज, कार्यशालाएं एवं निःशुल्क अध्ययन सामग्री।",
  openGraph: {
    title: "TCBT Education & Training Portal",
    description:
      "Master natural farming, vrikshayurveda science, and terrace gardening with certified TCBT training programs.",
  },
};

export default function EducationPage() {
  return <EducationClient />;
}
