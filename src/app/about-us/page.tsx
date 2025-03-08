"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import Tooltip from "@/components/tooltip"
import { ReactNode } from "react";
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



export default function AboutUs() {
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
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Learn more about Valley Kidney Care, our team, and our commitment to exceptional kidney health.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Us Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg">
                The Valley Kidney Care Team, led by Dr. Kalpesh Patel MD and Nurse Practitioner Desiree Joy Que,
                provides expert and compassionate kidney care for diverse medical needs. Explore below to learn about
                the conditions we treat and our affiliated hospitals and dialysis units.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeIn} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Specialized Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Tooltip content="A sudden loss of kidney function, often caused by dehydration, infections, or certain medications. It can usually be reversed with proper treatment.">
                    <span className="hover:text-primary transition-colors duration-300">Acute Kidney Injury</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="A long-term condition where the kidneys slowly lose function over time, often due to diabetes or high blood pressure. It can lead to kidney failure if not managed properly.">
                    <span className="hover:text-primary transition-colors duration-300">Chronic Kidney Disease</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Kidney damage caused by diabetes, leading to protein loss in urine and reduced kidney function over time. Managing blood sugar and blood pressure can slow its progression.">
                    <span className="hover:text-primary transition-colors duration-300">Diabetic Nephropathy</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Medical care before and after a kidney transplant to ensure a successful surgery and prevent rejection of the new kidney.">
                    <span className="hover:text-primary transition-colors duration-300">Kidney Transplant Care</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="A treatment for kidney failure where a machine filters waste and excess fluids from the blood when the kidneys can no longer do so.">
                    <span className="hover:text-primary transition-colors duration-300">Hemodialysis</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="A home-based dialysis option where a special fluid is used inside the belly to remove waste and excess fluids when the kidneys are not working properly.">
                    <span className="hover:text-primary transition-colors duration-300">Peritoneal Dialysis</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Inflammation of the kidney's filtering units, which can lead to swelling, high blood pressure, and kidney damage. It may be caused by infections, immune disorders, or other conditions.">
                    <span className="hover:text-primary transition-colors duration-300">Glomerulonephritis</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="A genetic disorder that causes fluid-filled cysts to develop in the kidneys, which can lead to kidney failure over time.">
                    <span className="hover:text-primary transition-colors duration-300">Polycystic Kidney Disease</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Narrowing of the arteries that supply blood to the kidneys, often due to high cholesterol or high blood pressure, which can reduce kidney function.">
                    <span className="hover:text-primary transition-colors duration-300">Renal Artery Stenosis</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="A procedure that filters harmful substances from the blood, often used to treat autoimmune diseases or severe kidney conditions.">
                    <span className="hover:text-primary transition-colors duration-300">Plasmapheresis</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="A kidney disorder that causes the body to lose too much protein in the urine, leading to swelling, high cholesterol, and an increased risk of infections.">
                    <span className="hover:text-primary transition-colors duration-300">Nephrotic Syndrome</span>
                  </Tooltip>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Hospital Affiliations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Tooltip
                    content="18300 Roscoe Blvd, Northridge, CA 91325"
                    link="https://www.dignityhealth.org/socal/locations/northridgehospital"
                  >
                    <span className="hover:text-primary transition-colors duration-300">
                      Northridge Hospital Medical Center
                    </span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="15107 Vanowen St, Van Nuys, CA 91405" link="https://www.valleypres.org/">
                    <span className="hover:text-primary transition-colors duration-300">
                      Valley Presbyterian Hospital
                    </span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    content="14850 Roscoe Blvd, Panorama City, CA 91402"
                    link="https://missioncommunityhospital.com/"
                  >
                    <span className="hover:text-primary transition-colors duration-300">
                      Mission Community Hospital
                    </span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    content="15031 Rinaldi St, Mission Hills, CA 91345"
                    link="https://www.providence.org/locations/holy-cross-medical-center"
                  >
                    <span className="hover:text-primary transition-colors duration-300">
                      Providence Holy Cross Medical Center, Mission Hills
                    </span>
                  </Tooltip>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Dialysis Unit Affiliations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <Tooltip content="Local dialysis center affiliated with our practice">
                    <span className="hover:text-primary transition-colors duration-300">Davita Dialysis Center</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Local dialysis center affiliated with our practice">
                    <span className="hover:text-primary transition-colors duration-300">Fresenius Dialysis Center</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Local dialysis center affiliated with our practice">
                    <span className="hover:text-primary transition-colors duration-300">Sylmar Dialysis Center</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Local dialysis center affiliated with our practice">
                    <span className="hover:text-primary transition-colors duration-300">US Renal Dialysis Center</span>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Local dialysis center affiliated with our practice">
                    <span className="hover:text-primary transition-colors duration-300">
                      Northridge Dialysis Center
                    </span>
                  </Tooltip>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      

      {/* Footer */}
      <Footer/>
    </div>
  )
}

