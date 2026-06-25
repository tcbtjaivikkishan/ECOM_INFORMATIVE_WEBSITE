'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from "next/image";

const ThreeJsBackground = dynamic(
  () => import('@/components/three/ThreeCanvas'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 bg-linear-to-br from-green-900/10 to-emerald-900/10" />
    ),
  }
)

interface Props {
  images: string[]
}

export default function AnimatedHero({ images }: Props) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length)
    }, 5000)

    return () => clearInterval(id)
  }, [images.length])

  const scrollToNext = () => {
    document.getElementById('next-section')?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
        <motion.div
  key={current}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute inset-0"
>
 <Image
  src={images[current]}
  alt="TCBT Hero Banner"
  fill
  priority
  fetchPriority="high"
  sizes="100vw"
  quality={75}
  className="object-cover"
/>

  <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />
</motion.div>

           
       </AnimatePresence>   
       
      </div>

      {/* Three.js disabled for performance testing */}
      {/*
      <div className="hidden lg:block absolute inset-0 opacity-30 pointer-events-none">
        <ThreeJsBackground />
      </div>
      */}

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6">
          स्वागत है
          <br />
          <span className="bg-green-600 hover:bg-green-700 bg-clip-text text-transparent">
            TCBT जैविक किसान
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={scrollToNext}
            className="bg-green-600 hover:bg-green-700 rounded-full px-8 py-6 text-lg font-bold"
            asChild
          >
            <Link href="https://products.tcbtjaivikkisan.com">
              <span className="flex items-center">
                <ArrowRight className="mr-2" />
                उत्पाद के लिए क्लिक करें
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}