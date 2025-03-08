"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin } from "lucide-react"
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
      staggerChildren: 0.1,
    },
  },
}


// Insurance data
const insurancePlans = [
  { name: "Medicare", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Medicaid", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Aetna", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Alliant Health Plan", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Aspirus Health Plan", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Blue Cross and Blue Shield", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "CMS Medicare", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Delta Dental", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Elevance", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "HCSC", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "LA Care", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Regence Health Plans", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "SelectHealth", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "United Healthcare", plans: ["EPO", "HMO", "POS", "PPO"] },
  { name: "Wellmark Health Plan", plans: ["EPO", "HMO", "POS", "PPO"] },
]

export default function Insurance() {
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
            <h1 className="text-4xl font-bold mb-4">Accepted Insurance Plans</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Below are the insurance plans we accept. To ensure that we can provide the care you deserve, please
              double-check that your plan is covered before scheduling your visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insurance Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-gray-700">
                At Valley Kidney Care, we work with a wide range of insurance providers to ensure our patients receive
                the care they need. If you don't see your insurance provider listed or have questions about coverage,
                please contact our office at (818) 488-1840.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {insurancePlans.map((insurance, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-gray-50 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold mb-3">{insurance.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {insurance.plans.map((plan, planIndex) => (
                    <span
                      key={planIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {plan}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection className="max-w-4xl mx-auto mt-12 text-center">
            <p className="text-gray-700 mb-6">
              For more information about Dr. Patel's accepted insurance plans, you can also visit:
            </p>
            <a
              href="https://health.usnews.com/doctors/kalpesh-patel-648214#patient-experience"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              US News Health - Dr. Kalpesh Patel
              <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

