import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'
import '../scss/common.scss'

import { textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Chip } from "@mui/material"

import experiences from "../utils/experiences"

const Experience = () => {
  return (
    <div id="work" className="mt-10 px-10">
      <motion.div variants={textVariant()}>
        <h1 className="text-3xl font-bold">Work Experience</h1>
      </motion.div>

      <VerticalTimeline>
        {
          experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{ background: '#1d1836', color: '#f1f1f1' }}
              contentArrowStyle={{ borderRight: '7px solid #232631' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
              icon={
                <div className="drop-shadow-black w-full h-full">
                  <FontAwesomeIcon icon={`fa ${experience.icon}`} size="3x" />
                </div>
              }
            >
              <div className="flex flex-row justify-between">
                <h3 className="font-bold text-[18px]">
                  {experience.title}
                </h3>
                <Chip
                  className="drop-shadow"
                  color="primary"
                  label="May 2020 - May 2021"
                  icon={<FontAwesomeIcon icon="fa fa-calendar-days" className="pl-2" />}
                />
              </div>
              <span className="text-[14px] text-secondary">{experience.company}</span>
              <span className="mt-4 block">
                {experience.description}
              </span>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </div>
  )
}

export default SectionWrapper(Experience, 'experience')