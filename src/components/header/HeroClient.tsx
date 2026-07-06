'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { ArrowRight, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

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

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY, [0, 300], [1, 1.1])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

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
    <div className="relative overflow-hidden bg-linear-to-b from-emerald-50 to-white sm:h-[56vh] lg:h-[80vh]">
      { }
      <motion.div className="block sm:hidden" style={{ scale }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={images[current]}
            alt="TCBT Hero Banner"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.2 }}
            className="w-full h-auto block"
          />
        </AnimatePresence>
      </motion.div>

      <motion.div
        className="absolute inset-0 hidden sm:block"
        style={{ scale }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[current]})`,
            }}
          >
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/20" />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      { }
      <div className="hidden lg:block absolute inset-0 opacity-30 pointer-events-none">
        <ThreeJsBackground />
      </div>

      { }
      <motion.div
        className="absolute inset-x-0 bottom-3 sm:bottom-6 z-10 flex justify-center px-3 sm:px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex w-full justify-center"
        >
          <Button
            size="lg"
            onClick={scrollToNext}
            className="w-[92%] max-w-[340px] sm:w-auto bg-green-600 hover:bg-green-700 rounded-full px-5 sm:px-8 py-3 sm:py-6 text-base sm:text-lg font-bold shadow-lg"
            asChild
          >
            <Link href="https://products.tcbtjaivikkisan.com">
              <span className="flex items-center">
                <ArrowRight className="mr-2" />
                उत्पाद के लिए क्लिक करें
              </span>
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
