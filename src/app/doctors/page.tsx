"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin, ExternalLink } from "lucide-react"
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
      staggerChildren: 0.2,
    },
  },
}


interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
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

export default function Doctors() {
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
            <h1 className="text-4xl font-bold mb-4">Our Doctors</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet our team of experienced nephrologists and healthcare professionals dedicated to providing exceptional
              kidney care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center group">
                <div className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Dr. Kalpesh S. Patel"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">Kalpesh S. Patel</h4>
                <h6 className="text-primary font-medium mb-4">M.D.</h6>
                <p className="text-gray-600 mb-4">
                  Dr. Kalpesh Patel, MD, is a board-certified nephrologist in the Los Angeles region with over 15 years
                  of experience specializing in comprehensive kidney care. He earned his medical degree from B.J.
                  Medical College in Ahmedabad, India, and completed his internal medicine residency and nephrology
                  fellowship at UCLA and Cedars Sinai. In addition to his clinical practice, Dr. Patel is a principal
                  investigator at Valiance Clinical Research, keeping him at the forefront of cutting-edge kidney care
                  advancements. He combines a compassionate, patient-centered approach with the latest treatments to
                  ensure the best possible outcomes for all his patients.
                </p>
                <div className="flex justify-center space-x-4 mb-6">
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
                <a
                  href="https://health.usnews.com/doctors/kalpesh-patel-648214#patient-experience"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  View US News Health Profile <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg text-center group">
                <div className="mb-6 relative mx-auto w-48 h-48 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Desiree Joy Que"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="text-xl font-bold">Desiree Joy Que</h4>
                <h6 className="text-primary font-medium mb-4">FNP-C</h6>
                <p className="text-gray-600 mb-4">
                  Family Nurse Practitioner specialized in nephrology and patient education with over 10 years of
                  experience in internal medicine and nephrology care.
                </p>
                <div className="flex justify-center space-x-4">
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
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Credentials</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="bg-white p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-3">Education</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Medical Degree - B.J. Medical College, Ahmedabad, India</li>
                  <li>Internal Medicine Residency - UCLA</li>
                  <li>Nephrology Fellowship - Cedars Sinai</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-3">Board Certifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>American Board of Internal Medicine</li>
                  <li>Nephrology Subspecialty Certification</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-white p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-bold mb-3">Professional Memberships</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>American Society of Nephrology</li>
                  <li>National Kidney Foundation</li>
                  <li>American Medical Association</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
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

