import HeaderClient from '@/components/header/HeaderClient'

export default function Header() {
  const navLinks = [
    { name: 'होम', href: '/' },
    { name: 'हमारे बारे में', href: '/about' },
    {
      name: 'तकनीक',
      href: '',
      dropdown: [
        { name: "हमारी समाधान", href: "/solutions" },

        { name: "कृषि तैयारी", href: "/krishi-taiyari" },
        { name: "चरणबद्ध प्रक्रिया", href: "/charanbaddh-prakriya" },
        { name: "अग्निहोत्र", href: "/agnihotra" },

        { name: "ऊर्जा विज्ञान", href: "/urja-vigyan" },
        // { name: "फ़ॉर्मूला", href: "/formula" },

        { name: "भूमि उपचार", href: "/bhoomi-upchar" },
        { name: "पंचमहाभूत", href: "/panchmahabhoot" }
      ]
    },
    { name: 'उत्पाद', href: 'https://tcbt-ecommerce-weld.vercel.app', external: true },
    {
      name: 'अन्य जानकारी',
      href: '',
      dropdown: [
        { name: "Tarachand Belji", href: "/about-tarachand-belji" },
        { name: "About Plants", href: "/vrikshayurveda" },

        { name: "Success Stories", href: "/success-stories" },
        { name: "TCBT Science", href: "/tcbt-science" },
        { name: "TCBT Farming Methodology", href: "/farming-methodology" },
        { name: "Gallery & Field Impact", href: "/gallery-field-impact" }
      ]
    },
    { name: 'संपर्क करें', href: '/contact' },
    {
      name: 'POP',
      href: '',
      dropdown: [
        { name: 'गेहूं', href: 'https://workdrive.zohoexternal.in/file/tisic561ecaae632d424bb162f393387ea7f5', external: true },
        { name: 'मटर', href: 'https://workdrive.zohoexternal.in/file/tisic53335cb715324848a1772722183efc2c', external: true },
        { name: 'सरसों', href: 'https://workdrive.zohoexternal.in/file/tisicc455db673256428dbd3f1a5b72a11820', external: true },
      ]
    },
  ]

  return <HeaderClient navLinks={navLinks} />
}
