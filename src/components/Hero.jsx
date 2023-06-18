import '../scss/common.scss'
import { motion } from 'framer-motion'
import HeroCanvas from './HeroCanvas'

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto text-white">
      <div className="flex flex-row pt-20">
        <div className='flex flex-col items-center w-5 sm:ml-20 ml-12'>
          <div className="w-3 h-3 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 violet-gradient" />
        </div>
        <div className="ml-3">
          <h1 className="text-3xl">
            <span className='font-light'>HI, I&apos;M </span>
            <span className='font-bold'>AASHISH</span>
          </h1>
          <p className='font-extralight'>Graphics Designer, VFX, Animator</p>
        </div>
      </div>

      <HeroCanvas />

      <div className='absolute bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className="w-[28px] h-[54px] rounded-3xl border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repearType: 'loop',
              }}
              className="rounded-full w-2 h-2 bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero