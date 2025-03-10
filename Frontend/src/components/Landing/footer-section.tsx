"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-[#1E1E1E] py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to us using the information below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#2A2A2A] rounded-full p-3 mb-3">
              <MapPin className="text-purple-500" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Address</h3>
            <p className="text-gray-400">123 Learning Lane</p>
            <p className="text-gray-400">EduCity, State 12345</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#2A2A2A] rounded-full p-3 mb-3">
              <Mail className="text-orange-500" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-400">support@eduplay.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="bg-[#2A2A2A] rounded-full p-3 mb-3">
              <Phone className="text-teal-500" size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-gray-500">&copy; {new Date().getFullYear()} EduPlay. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

