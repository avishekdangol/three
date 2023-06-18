import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import Tilt from 'react-parallax-tilt'
import { SectionWrapper } from '../hoc'
import services from "../utils/services"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import '../scss/animations.scss'

const About = () => {
  return (
    <div className="px-10">
      <div id="about">
        <h1 className="text-3xl font-bold">Introduction</h1>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 pb-4 text-[17px] max-w-3xl"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </motion.p>
      </div>

      <div className="flex flex-wrap gap-10 mt-10 pb-4">
        {services.map(service => (
          <Tilt key={service.title}>
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className="glow-card py-5 px-12 rounded xs:w-[250px] w-full min-h-[200px] flex flex-col justify-center items-center animation-box"
            >
              <FontAwesomeIcon icon={`fa ${service.icon}`} size="3x" className="drop-shadow rotate" />
              <h3 className="mt-4 text-white font-bold">{service.title}</h3>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')