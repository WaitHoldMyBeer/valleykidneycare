"use client"

import { ReactNode, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin, Mail } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import Header from "@/components/header"
import AnimatedSection from "@/components/animatedsection"
import Footer from "@/components/footer"

// Animation variants


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}


// Service data
const services = [
  {
    title: "Comprehensive Renal Evaluation & Monitoring",
    description:
      "Early diagnosis and ongoing assessment for conditions like AKI, CKD, diabetic nephropathy, and other kidney disorders.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Personalized Dialysis Management",
    description: "Tailored hemodialysis and peritoneal dialysis programs to meet each patient's unique needs.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Kidney Transplant Care",
    description:
      "Coordinated evaluation, surgical referral, and post-transplant management to enhance long-term kidney function.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Advanced Nephropathy Treatment",
    description:
      "Delivering an approach including immunosuppressive regimens, specific anti-inflammatory therapies, and metabolic control—such as blood sugar and blood pressure management—to precisely address glomerulonephritis, nephrotic syndrome, and diabetic kidney disease.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Interventional Nephrology Services",
    description:
      "Minimally invasive procedures for conditions such as renal artery stenosis and targeted treatments including plasmapheresis.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Innovative Clinical Research & Therapeutic Access",
    description:
      "Patients seeking clinical trial options will be referred to Valiance Clinical Research to access novel therapies, particularly for complex conditions like polycystic kidney disease (PKD).",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Services() {
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
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive kidney care services, from diagnosis to treatment and long-term management of
              kidney conditions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <AnimatedSection key={index}>
                <div className="bg-gray-50 rounded-lg shadow-md h-full overflow-hidden group">
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-center px-6">{service.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Kidney Care Services"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </AnimatedSection>

            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Comprehensive Kidney Care</h2>
              <p className="text-gray-700 mb-6">
                At Valley Kidney Care, we provide a full spectrum of nephrology services to address all your kidney
                health needs. Our team is dedicated to delivering personalized care using the latest medical
                advancements and treatment options.
              </p>
              <p className="text-gray-700 mb-6">
                Whether you're dealing with early-stage kidney disease or require ongoing dialysis management, our
                experienced specialists will work with you to develop a treatment plan tailored to your specific
                condition and lifestyle.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors duration-300"
              >
                Schedule a Consultation
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

