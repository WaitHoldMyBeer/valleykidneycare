"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, Check, MapPin } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import Tooltip from "@/components/tooltip"

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

import { ReactNode } from "react";
import Header from "@/components/header"

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] md:h-[700px]"
        style={{ backgroundImage: "url('/placeholder.svg?height=700&width=1920')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="text-primary font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              WELCOME TO VALLEY KIDNEY CARE!
            </motion.span>
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-black mt-4 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Revolutionize
              <br />
              Your Kidney Health Today
            </motion.h1>
            <motion.p
              className="text-gray-700 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              At Valley Kidney Care, we're passionate in providing exceptional kidney care for you and your loved ones.
              Explore our services or read our blogs for lifestyle tips to improve kidney health.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Link
                href="/contact-us"
                className="bg-primary/75 hover:bg-primary text-white px-8 py-4 rounded transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/about-us"
                className="bg-white/75 hover:bg-white text-black px-8 py-4 rounded transition-colors duration-300"
              >
                Read more
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6">
                <Image src="/placeholder.svg?height=80&width=80" alt="Schedule appointment" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold mb-4">Schedule an Appointment</h3>
              <div className="text-gray-600 mb-6">
                <p className="mb-4">
                  Contact us and schedule an appointment by calling 818-488-1840 or filling out our "Get in Touch" form.
                </p>
                <ul className="text-left space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Provide your name</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Describe your medical concerns</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Share your insurance details</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Indicate preferred appointment time</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/contact-us"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6">
                <Image src="/placeholder.svg?height=80&width=80" alt="Insurance Plans" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold mb-4">Accepted Insurance Plans</h3>
              <p className="text-gray-600 mb-4">
                Below are the insurance plans we accept. Please verify your coverage before scheduling.
              </p>
              <div className="grid grid-cols-2 gap-2 text-left mb-6">
                <Tooltip content="EPO, HMO, POS, PPO plans accepted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                    <span className="text-sm">Medicare</span>
                  </div>
                </Tooltip>
                <Tooltip content="EPO, HMO, POS, PPO plans accepted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                    <span className="text-sm">Medicaid</span>
                  </div>
                </Tooltip>
                <Tooltip content="EPO, HMO, POS, PPO plans accepted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                    <span className="text-sm">Aetna</span>
                  </div>
                </Tooltip>
                <Tooltip content="EPO, HMO, POS, PPO plans accepted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                    <span className="text-sm">Blue Cross</span>
                  </div>
                </Tooltip>
                <Tooltip content="EPO, HMO, POS, PPO plans accepted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                    <span className="text-sm">United Healthcare</span>
                  </div>
                </Tooltip>
                <Tooltip content="EPO, HMO, POS, PPO plans accepted">
                  <div className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-1 flex-shrink-0" />
                    <span className="text-sm">LA Care</span>
                  </div>
                </Tooltip>
              </div>
              <Link
                href="/insurance"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                View All Plans
              </Link>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full transform transition-transform duration-300 hover:scale-105">
              <div className="w-20 h-20 mx-auto mb-6">
                <Image src="/placeholder.svg?height=80&width=80" alt="Our Doctors" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Expert Care Team</h3>
              <p className="text-gray-600 mb-6">
                Dr. Kalpesh Patel and Nurse Practitioner Desiree Joy Que bring 10+ years of internal medicine and
                nephrology care experience.
              </p>
              <p className="text-gray-600 mb-6">
                Click below to explore their expertise, medical journey, and commitment to delivering the exceptional
                kidney care you deserve.
              </p>
              <Link
                href="/doctors"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                Meet Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Meet Our Clinic */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <AnimatedSection className="md:col-span-2">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Our Clinic"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Meet our clinic</h2>
              <p className="text-gray-700 mb-8">
                Our state-of-the-art facility is designed to provide comprehensive kidney care in a comfortable
                environment. We use the latest technology and treatment methods to ensure the best outcomes for our
                patients.
              </p>
              <Link
                href="/about-us"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                About us
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Our services</h2>
              <p className="text-gray-700 mb-8">
                We offer comprehensive kidney care services, from diagnosis to treatment and long-term management of
                kidney conditions.
              </p>
              <Link
                href="/services"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                Our services
              </Link>
            </AnimatedSection>

            <AnimatedSection className="md:col-span-2">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="font-bold mb-3">Comprehensive Renal Evaluation & Monitoring</h3>
                  <p className="text-gray-600 text-sm">
                    Early diagnosis and ongoing assessment for conditions like AKI, CKD, diabetic nephropathy, and other
                    kidney disorders.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="font-bold mb-3">Personalized Dialysis Management</h3>
                  <p className="text-gray-600 text-sm">
                    Tailored hemodialysis and peritoneal dialysis programs to meet each patient's unique needs.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="font-bold mb-3">Kidney Transplant Care</h3>
                  <p className="text-gray-600 text-sm">
                    Coordinated evaluation, surgical referral, and post-transplant management to enhance long-term
                    kidney function.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn}
                  className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="font-bold mb-3">Advanced Nephropathy Treatment</h3>
                  <p className="text-gray-600 text-sm">
                    Delivering an approach including immunosuppressive regimens, specific anti-inflammatory therapies,
                    and metabolic control to precisely address glomerulonephritis, nephrotic syndrome, and diabetic
                    kidney disease.
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/placeholder.svg?height=400&width=1920')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div></div>
            <AnimatedSection>
              <div className="bg-white/90 p-10 rounded-lg transform transition-transform duration-300 hover:scale-[1.02]">
                <h2 className="text-3xl font-bold mb-4">Need an Emergency Help? Call Us!</h2>
                <h3 className="text-2xl font-bold text-primary mb-6">(818) 488-1840</h3>
                <p className="text-gray-700 mb-8">
                  Our team is available to provide immediate assistance for urgent kidney care needs. Don't hesitate to
                  call us in case of an emergency.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
                >
                  Contact us
                </Link>
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

