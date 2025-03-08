"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { ReactNode } from "react"
import Header from "@/components/header"

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


function AnimatedSection({ children, className = "" }: { children: ReactNode, className?: string }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeIn} className={className}>
      {children}
    </motion.div>
  )
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
      <footer className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <AnimatedSection>
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="Valley Kidney Care Logo"
                width={180}
                height={60}
                className="h-14 w-auto mb-6"
              />
              <p className="text-gray-600 mb-4">
                Providing exceptional kidney care for patients throughout the Los Angeles area since 2010.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h6 className="font-bold mb-4 text-lg">Quick Links</h6>
              <ul className="space-y-3">
                <li>
                  <Link href="/about-us" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> Services
                  </Link>
                </li>
                <li>
                  <Link href="/doctors" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> Doctors
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> Contact
                  </Link>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h6 className="font-bold mb-4 text-lg">Resources</h6>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> Patient Resources
                  </Link>
                </li>
                <li>
                  <Link href="/insurance" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-600 hover:text-primary transition-colors duration-300">
                    <span className="text-primary mr-2">→</span> Privacy Policy
                  </Link>
                </li>
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h6 className="font-bold mb-4 text-lg">Contact Information</h6>
              <div className="space-y-4">
                <div>
                  <h6 className="font-medium mb-2">CALL US</h6>
                  <p className="text-lg mb-1 flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    (818) 488-1840
                  </p>
                </div>

                <div>
                  <h6 className="font-medium mb-2">FAX</h6>
                  <p className="text-lg mb-1">(818) 975-5446</p>
                </div>

                <div>
                  <h6 className="font-medium mb-2">EMAIL</h6>
                  <p className="text-lg mb-1">contact@valleykidneycare.com</p>
                </div>

                <div>
                  <h6 className="font-medium mb-2">ADDRESS</h6>
                  <p className="text-lg mb-1 flex items-start">
                    <MapPin className="h-4 w-4 mr-2 mt-1 text-primary flex-shrink-0" />
                    <span>
                      18350 Roscoe Blvd, Suite 512
                      <br />
                      Northridge, CA 91325
                    </span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Valley Kidney Care. All Rights Reserved.</p>
            <p className="text-gray-500 text-sm mt-2">Website deadline: 3/5/2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

