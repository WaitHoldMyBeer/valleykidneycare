"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin, Mail, Clock } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  }

  interface FormStatus {
    submitted: boolean;
    success: boolean;
    message: string;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real implementation, you would send the form data to your backend
    // For now, we'll simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message. We will get back to you shortly!",
    })

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

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
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're here to help with your kidney health needs. Reach out to us with any questions or to schedule an
              appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Our Location</h3>
                      <p className="text-gray-600">
                        18350 Roscoe Blvd, Suite 512
                        <br />
                        Northridge, CA 91325
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-gray-600">(818) 488-1840</p>
                      <p className="text-gray-600">Fax: (818) 975-5446</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-600">contact@valleykidneycare.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className="bg-gray-50 p-8 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {formStatus.submitted && (
                  <div
                    className={`p-4 mb-6 rounded-lg ${formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {formStatus.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 font-medium"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 w-full h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=1200"
                  alt="Map location of Valley Kidney Care"
                  width={1200}
                  height={400}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-md">
                    <h3 className="font-bold text-lg mb-2">Valley Kidney Care</h3>
                    <p className="text-gray-600 mb-4">18350 Roscoe Blvd, Suite 512, Northridge, CA 91325</p>
                    <a
                      href="https://maps.google.com/?q=18350+Roscoe+Blvd+Suite+512+Northridge+CA+91325"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
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

