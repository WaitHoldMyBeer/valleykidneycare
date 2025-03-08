"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin, MapPin, Mail, Clock } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import AnimatedSection from "@/components/animatedsection"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { MapProvider } from "@/providers/map-provider"
import { MapComponent } from "@/components/map"

// Animation variants



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
    name: string
    email: string
    phone: string
    subject: string
    message: string
  }

  interface FormStatus {
    submitted: boolean
    success: boolean
    message: string
  }

  interface ChangeEvent {
    target: {
      name: string
      value: string
    }
  }

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target
    setFormData((prev: FormData) => ({
      ...prev,
      [name]: value,
    }))
  }

  interface SubmitEvent {
    preventDefault: () => void
  }

  const handleSubmit = (e: SubmitEvent) => {
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
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <div className="aspect-w-16 aspect-h-9 w-full h-[400px] rounded-lg overflow-hidden">
                <MapProvider>
                  <MapComponent/>
                </MapProvider>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded-lg shadow-lg max-w-md pointer-events-auto">
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
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  )
}

