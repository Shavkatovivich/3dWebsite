import React, {useState, useRef} from 'react'

import { motion } from 'framer-motion'
import emaijs from "@emailjs/browser"
import { styles } from '../style'
import {EarthCanvas} from "./canvas"
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10     overflow-hidden'>
      <motion.div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        variants={slideIn("left", "tween", 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

          <form 
            className='mt-12 flex flex-col gap-8'
            ref={formRef}
            onSubmit={handleSubmit}
          > 

            <label className='flex flex-col'>
              <span className='text-white font mb-4'>Your Name</span>
              <input 
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
                type="text"
                name='name' 
                value={form.name}  
                onChange={handleChange}
                placeholder="What's your name"
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font mb-4'>Your Email</span>
              <input 
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
                type="email"
                name='email' 
                value={form.email}  
                onChange={handleChange}
                placeholder="What's your email"
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font mb-4'>Your Message</span>
              <textarea
                rows={7} 
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' 
                 name='message' 
                value={form.message}  
                onChange={handleChange}
                placeholder="What do yu want to say?"
              />
            </label>

            <button className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
      </motion.div>

      <motion.div
        className='xl:flex-1 xl:h-auto md:-[550px] h-[350px]'
        variants={slideIn("right", "tween", 0.2, 1)}
         
      >
          <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")