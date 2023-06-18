import { motion } from "framer-motion"
import { staggerContainer } from "../utils/motion"

const SectionWrapper = (Component, SectionId) => 
function HOC() {
  return (
    <motion.section>
      <Component />
    </motion.section>
  )
}

export default SectionWrapper