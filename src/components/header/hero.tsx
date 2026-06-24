import AnimatedHero from '@/components/header/HeroClient'

export default function Hero() {
  const heroImages = [
    '/Home/banner1.webp',
    '/Home/banner2.webp',
    '/Home/banner3.webp',
  ]

  return <AnimatedHero images={heroImages} />
}
