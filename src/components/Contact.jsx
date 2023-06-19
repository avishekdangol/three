import { useRef, useState } from "react"
import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { Button, TextField } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EarthCanvas from "./EarthCanvas"

const Contact = () => {
  const formRef = useRef()
  const [form, setFrom] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = () => {}

  return (
    <div id="contact" className="xl:m-12 xl-flex-row flex gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
      >
        <h1 className="text-3xl font-bold mb-2">Contact</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* Name */}
          <div className="flex items-center mb-5">
            <FontAwesomeIcon icon="fa fa-user" />
            <TextField
              required
              fullWidth
              variant="filled"
              label="Name"
              color="primary"
              sx={{ input: { color: "#e6e6e6" } }}
              InputLabelProps={{
                style: { color: '#e6e6e6' },
              }}
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div className="flex items-center mb-5">
            <FontAwesomeIcon icon="fa fa-envelope" />
            <TextField
              required
              fullWidth
              variant="filled"
              label="Email"
              sx={{ input: { color: "#e6e6e6" } }}
              InputLabelProps={{
                style: { color: '#e6e6e6' },
              }}
              placeholder="Your Email"
            />
          </div>

          {/* Message */}
          <div className="flex items-baseline mb-5">
            <FontAwesomeIcon icon="fa fa-message" className="pb-1" />
            <TextField
              required
              fullWidth
              multiline
              rows={7}
              variant="filled"
              label="Message"
              sx={{ input: { color: "#e6e6e6" } }}
              InputLabelProps={{
                style: { color: '#e6e6e6' }
              }}
              placeholder="Your message ..."
            />
          </div>

          <Button
            className="float-right"
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Sending' : 'Send'}
          </Button>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.5] xl:flex-1 p-8 rounded-2xl"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')