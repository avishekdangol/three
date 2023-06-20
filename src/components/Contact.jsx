import { SectionWrapper } from "../hoc"
import { motion } from "framer-motion"
import { fadeIn } from "../utils/motion"
import { Button, TextField } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import EarthCanvas from "./EarthCanvas"
import { Formik } from "formik"

const Contact = () => {
  const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required!'
    }
    if (!values.email) {
      errors.email = 'Required!'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid Email!'
    }
    if (!values.message) {
      errors.message = 'Requried!'
    }
    return errors
  }

  return (
    <div id="contact" className="xl:m-12 xl-flex-row flex gap-10 overflow-hidden">
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] bg-black-100 p-8 rounded-2xl"
      >
        <h1 className="text-3xl font-bold mb-2">Contact</h1>

        <Formik
          initialValues={{
            name: '',
            email: '',
            message: '',
          }}

          validate={values => {
            let errors = {}
            errors = validate(values)
            return errors
          }}
          onSubmit={(values, { setSubmitting}) => {
            console.log(values)
            setTimeout(() => {
              setSubmitting(false)
            }, 500)
          }}
          onChange={e => {
            console.log(e.target.name)
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            isSubmitting,
          }) => (
            <form>
              <div>
                {/* Name */}
                <div className="flex items-center">
                  <FontAwesomeIcon icon="fa fa-user" />
                  <TextField
                    required
                    fullWidth
                    value={values.name}
                    type="text"
                    name="name"
                    variant="filled"
                    label="Name"
                    color="primary"
                    placeholder="Your Name"
                    sx={{ input: { color: "#e6e6e6" } }}
                    InputLabelProps={{
                      style: { color: '#e6e6e6' },
                    }}
                    onChange={handleChange}
                  />
                </div>
                <small className="text-red-400 mb-5 pl-4">
                  {errors.name && touched.name && errors.name}
                </small>

                {/* Email */}
                <div className="flex items-center">
                  <FontAwesomeIcon icon="fa fa-envelope" />
                  <TextField
                    required
                    fullWidth
                    value={values.email}
                    type="email"
                    name="email"
                    variant="filled"
                    label="Email"
                    placeholder="Your Email"
                    sx={{ input: { color: "#e6e6e6" } }}
                    InputLabelProps={{
                      style: { color: '#e6e6e6' },
                    }}
                    onChange={handleChange}
                  />
                </div>
                <small className="text-red-400 mb-5 pl-4">
                  {errors.email && touched.email && errors.email}
                </small>

                {/* Message */}
                <div className="flex items-baseline">
                  <FontAwesomeIcon icon="fa fa-message" className="pb-1" />
                  <TextField
                    required
                    fullWidth
                    multiline
                    value={values.message}
                    type="text"
                    name="message"
                    rows={7}
                    variant="filled"
                    label="Message"
                    placeholder="Your message ..."
                    sx={{ input: { color: "#e6e6e6" } }}
                    InputLabelProps={{
                      style: { color: '#e6e6e6' }
                    }}
                    onChange={handleChange}
                  />
                </div>
                <small className="text-red-400 mb-5 pl-4">
                  {errors.message && touched.message && errors.message}
                </small>
              </div>
              
              <Button
                className="float-right"
                variant="contained"
                onClick={handleSubmit}
              >
                {isSubmitting ? 'Sending' : 'Send'}
              </Button>
            </form>
          )}
        </Formik>
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