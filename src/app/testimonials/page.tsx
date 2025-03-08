"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin, Mail, Star, Quote } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ReactNode } from "react"
import Header from "@/components/header"
import AnimatedSection from "@/components/animatedsection"
import Footer from "@/components/footer"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}


// Testimonial data
const testimonials = [
  {
    name: "Padmakshan Pallichadayath",
    review:
      "Very companionate and caring. Dr take time to explain the issues and treatment plan to manage the issues. Love to refer him to my family and friends with kidney issue.",
    source: "Healthgrades",
  },
  {
    name: "tadashi i. in northridge",
    review:
      "I'm so happy that we met dr. patel 4-5 years ago when my dad was in really bad shape. dr. patel is very knowledgeable, patient, and understanding. i truly feel he has the best interest of his patients. my dad and i completely trust him for my dad's care.",
    source: "Healthgrades",
  },
  {
    name: "Mike",
    review: "Provider goes above and beyond to care for his patients.",
    source: "Healthgrades",
  },
  {
    name: "MARLENE in NORTHRIDGE",
    review:
      "Dr. Patel is an ecellent Doctor. He helps you out in every way possible and will answer all your questions. His staff are really friendly. The office is really clean and smells good.",
    source: "Healthgrades",
  },
  {
    name: "Melissa Millan in Granada hills",
    review:
      "Yes, Staff very helpful. Dr Patel spent good amount of time with my dad. He is thorough and has good bedside manner",
    source: "Google Reviews",
  },
  {
    name: "Claudia Hall",
    review:
      "I trust him. Very caring. Detailed and has the patience of a god !! He explained to me what was going on with me and set up a plan to help me.",
    source: "Google reviews",
  },
  {
    name: "Melody simental",
    review:
      "Dr. Patel is a wonderful dr and cares deeply for his patients and their well being it was a pleasure to work such a caring and compassionate doctor 💜",
    source: "Google reviews",
  },
]

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>

      {/* Page Title */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Patient Testimonials</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Read what our patients have to say about their experiences with us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md h-full relative">
                  <div className="absolute top-4 right-4 text-primary/20">
                    <Quote className="h-12 w-12" />
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 relative z-10">"{testimonial.review}"</p>
                  <div className="mt-auto">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-primary">{testimonial.source}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Experience Our Care</h2>
              <p className="text-gray-700 mb-8">
                Join our many satisfied patients and experience the exceptional kidney care that Valley Kidney Care
                provides. Contact us today to schedule your appointment.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-primary text-white px-8 py-3 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                Schedule an Appointment
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

