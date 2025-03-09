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
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <Image
          src="/stock-image.jpg"
          alt="About Us Hero"
          fill
          className="object-cover absolute z-0 opacity-40"
          style={{ objectPosition: "center" }}
        />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Valley Kidney Care</h1>
          <p className="text-lg text-gray-200">Dedicated to providing exceptional kidney care.</p>
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
                the conditions we treat and our comprehensive approach to kidney health.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden mb-16">
              <div className="bg-primary/10 p-8">
                <h2 className="text-3xl font-bold text-primary">Specialized Care</h2>
                <p className="text-gray-700 mt-2">
                  Our team specializes in treating a wide range of kidney conditions with personalized care plans.
                </p>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Acute Kidney Injury</h3>
                    <p className="text-gray-700">
                      A sudden loss of kidney function, often caused by dehydration, infections, or certain medications.
                      It can usually be reversed with proper treatment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Chronic Kidney Disease</h3>
                    <p className="text-gray-700">
                      A long-term condition where the kidneys slowly lose function over time, often due to diabetes or
                      high blood pressure. It can lead to kidney failure if not managed properly.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Diabetic Nephropathy</h3>
                    <p className="text-gray-700">
                      Kidney damage caused by diabetes, leading to protein loss in urine and reduced kidney function
                      over time. Managing blood sugar and blood pressure can slow its progression.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Kidney Transplant Care</h3>
                    <p className="text-gray-700">
                      Medical care before and after a kidney transplant to ensure a successful surgery and prevent
                      rejection of the new kidney.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Hemodialysis</h3>
                    <p className="text-gray-700">
                      A treatment for kidney failure where a machine filters waste and excess fluids from the blood when
                      the kidneys can no longer do so.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Peritoneal Dialysis</h3>
                    <p className="text-gray-700">
                      A home-based dialysis option where a special fluid is used inside the belly to remove waste and
                      excess fluids when the kidneys are not working properly.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Glomerulonephritis</h3>
                    <p className="text-gray-700">
                      Inflammation of the kidney's filtering units, which can lead to swelling, high blood pressure, and
                      kidney damage. It may be caused by infections, immune disorders, or other conditions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Polycystic Kidney Disease</h3>
                    <p className="text-gray-700">
                      A genetic disorder that causes fluid-filled cysts to develop in the kidneys, which can lead to
                      kidney failure over time.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Renal Artery Stenosis</h3>
                    <p className="text-gray-700">
                      Narrowing of the arteries that supply blood to the kidneys, often due to high cholesterol or high
                      blood pressure, which can reduce kidney function.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Plasmapheresis</h3>
                    <p className="text-gray-700">
                      A procedure that filters harmful substances from the blood, often used to treat autoimmune
                      diseases or severe kidney conditions.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Image src="/placeholder.svg?height=24&width=24" alt="Kidney" width={24} height={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Nephrotic Syndrome</h3>
                    <p className="text-gray-700">
                      A kidney disorder that causes the body to lose too much protein in the urine, leading to swelling,
                      high cholesterol, and an increased risk of infections.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-primary/5 p-8 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Our Approach to Kidney Care</h3>
                <p className="text-gray-700">
                  At Valley Kidney Care, we believe in a comprehensive approach to kidney health. We work closely with
                  each patient to develop personalized treatment plans that address their specific needs and conditions.
                  Our team stays up-to-date with the latest advancements in nephrology to provide the highest quality
                  care possible.
                </p>
                <Link
                  href="/contact-us"
                  className="inline-block bg-primary text-white px-6 py-3 rounded mt-6 hover:bg-primary/90 transition-colors duration-300"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      

      {/* Footer */}
      <Footer/>
    </div>
  )
}

