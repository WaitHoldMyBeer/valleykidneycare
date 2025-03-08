"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import Tooltip from "@/components/tooltip"
import { ReactNode } from "react";
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

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mb-4 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Renal Evaluation" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Renal Evaluation & Monitoring</h3>
                <p className="text-gray-600">
                  Early diagnosis and ongoing assessment for conditions like AKI, CKD, diabetic nephropathy, and other
                  kidney disorders.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mb-4 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Dialysis Management" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Dialysis Management</h3>
                <p className="text-gray-600">
                  Tailored hemodialysis and peritoneal dialysis programs to meet each patient's unique needs.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mb-4 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Transplant Care" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3">Kidney Transplant Care</h3>
                <p className="text-gray-600">
                  Coordinated evaluation, surgical referral, and post-transplant management to enhance long-term kidney
                  function.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mb-4 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Nephropathy Treatment" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Nephropathy Treatment</h3>
                <p className="text-gray-600">
                  Delivering an approach including immunosuppressive regimens, specific anti-inflammatory therapies, and
                  metabolic control—such as blood sugar and blood pressure management—to precisely address
                  glomerulonephritis, nephrotic syndrome, and diabetic kidney disease.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mb-4 mx-auto md:mx-0">
                  <Image
                    src="/placeholder.svg?height=64&width=64"
                    alt="Interventional Nephrology"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Interventional Nephrology Services</h3>
                <p className="text-gray-600">
                  Minimally invasive procedures for conditions such as renal artery stenosis and targeted treatments
                  including plasmapheresis.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 mb-4 mx-auto md:mx-0">
                  <Image src="/placeholder.svg?height=64&width=64" alt="Clinical Research" width={64} height={64} />
                </div>
                <h3 className="text-xl font-bold mb-3">Innovative Clinical Research & Therapeutic Access</h3>
                <p className="text-gray-600">
                  Patients seeking clinical trial options will be referred to Valiance Clinical Research to access novel
                  therapies, particularly for complex conditions like polycystic kidney disease (PKD).
                </p>
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

