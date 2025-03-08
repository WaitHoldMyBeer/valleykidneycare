import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronRight, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="Valley Kidney Care Logo"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-black font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/about-us" className="text-black font-medium hover:text-primary">
              About us
            </Link>
            <Link href="/services" className="text-black font-medium hover:text-primary">
              Services
            </Link>
            <Link href="/doctors" className="text-black font-medium hover:text-primary">
              Doctors
            </Link>
            <Link href="/contact-us" className="text-black font-medium hover:text-primary">
              Contact us
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <Link
              href="/contact-us"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Book Now <ChevronRight className="inline-block h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[600px] md:h-[700px]"
        style={{ backgroundImage: "url('/placeholder.svg?height=700&width=1920')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-2xl">
            <span className="text-primary font-medium">WELCOME TO OUR CLINIC'S SITE</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black mt-4 mb-6">
              Take care
              <br />
              of your health
            </h1>
            <p className="text-gray-700 mb-8 max-w-lg">
              Specialized kidney care with experienced nephrologists. We provide comprehensive treatment for all
              kidney-related conditions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="bg-primary/75 hover:bg-primary text-white px-8 py-4 rounded transition-colors"
              >
                Book a visit
              </Link>
              <Link
                href="/about-us"
                className="bg-white/75 hover:bg-white text-black px-8 py-4 rounded transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <Image src="/placeholder.svg?height=80&width=80" alt="Online appointment" width={80} height={80} />
            </div>
            <h3 className="text-xl font-bold mb-4">Online appointment</h3>
            <p className="text-gray-600 mb-6">
              Schedule your appointment online with our easy-to-use booking system. Quick and convenient.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Make an appointment
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <Image src="/placeholder.svg?height=80&width=80" alt="Emergency Case" width={80} height={80} />
            </div>
            <h3 className="text-xl font-bold mb-4">Emergency Case</h3>
            <p className="text-gray-600 mb-2">Immediate assistance for urgent kidney care needs.</p>
            <h4 className="text-xl font-bold text-primary mb-6">
              <Phone className="inline-block mr-2 h-5 w-5 text-primary" />
              (818) 488-1840
            </h4>
            <Link
              href="/contact-us"
              className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Contact us
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-6">
              <Image src="/placeholder.svg?height=80&width=80" alt="Our Doctors" width={80} height={80} />
            </div>
            <h3 className="text-xl font-bold mb-4">Our Doctors</h3>
            <p className="text-gray-600 mb-6">
              Meet our team of experienced nephrologists dedicated to providing the highest quality kidney care.
            </p>
            <Link
              href="/doctors"
              className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
            >
              Doctors
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Specialized Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Acute Kidney Injury</li>
                <li>Chronic Kidney Disease</li>
                <li>Diabetic Nephropathy</li>
                <li>Kidney Transplant Care</li>
                <li>Hemodialysis</li>
                <li>Peritoneal Dialysis</li>
                <li>Glomerulonephritis</li>
                <li>Polycystic Kidney Disease</li>
                <li>Renal Artery Stenosis</li>
                <li>Plasmapharesis</li>
                <li>Nephrotic Syndrome</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Hospital Affiliations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Northridge Hospital Medical Center</li>
                <li>Valley Presbyterian Hospital</li>
                <li>Mission Community Hospital</li>
                <li>Providence Holy Cross Medical Center, Mission Hills</li>
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Dialysis Unit Affiliations</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Davita Dialysis Center</li>
                <li>Fresenius Dialysis Center</li>
                <li>Sylmar Dialysis Center</li>
                <li>US Renal Dialysis Center</li>
                <li>Northridge Dialysis Center</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Clinic */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <Image
                src="/placeholder.svg?height=500&width=800"
                alt="Our Clinic"
                width={800}
                height={500}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet our clinic</h2>
              <p className="text-gray-700 mb-8">
                Our state-of-the-art facility is designed to provide comprehensive kidney care in a comfortable
                environment. We use the latest technology and treatment methods to ensure the best outcomes for our
                patients.
              </p>
              <Link
                href="/about-us"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
              >
                About us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Doctors</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-6 relative mx-auto w-64 h-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Dr. Kalpesh S. Patel"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold">Kalpesh S. Patel</h4>
              <h6 className="text-primary font-medium mb-4">M.D.</h6>
              <p className="text-gray-600 mb-4">
                Board-certified nephrologist with over 15 years of experience in kidney care.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="mb-6 relative mx-auto w-64 h-64 overflow-hidden rounded-full">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Desiree Joy Que"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-xl font-bold">Desiree Joy Que</h4>
              <h6 className="text-primary font-medium mb-4">FNP-C</h6>
              <p className="text-gray-600 mb-4">
                Family Nurse Practitioner specialized in nephrology and patient education.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our services</h2>
              <p className="text-gray-700 mb-8">
                We offer comprehensive kidney care services, from diagnosis to treatment and long-term management of
                kidney conditions.
              </p>
              <Link
                href="/services"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
              >
                Our services
              </Link>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: "/placeholder.svg?height=60&width=60", title: "Nephrology" },
                  { icon: "/placeholder.svg?height=60&width=60", title: "Dialysis" },
                  { icon: "/placeholder.svg?height=60&width=60", title: "Transplant Care" },
                  { icon: "/placeholder.svg?height=60&width=60", title: "Hypertension" },
                  { icon: "/placeholder.svg?height=60&width=60", title: "Kidney Stones" },
                  { icon: "/placeholder.svg?height=60&width=60", title: "Lab Services" },
                ].map((service, index) => (
                  <div key={index} className="text-center p-6 border-r border-gray-200 last:border-r-0">
                    <div className="w-16 h-16 mx-auto mb-4">
                      <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={60} height={60} />
                    </div>
                    <h5 className="font-medium">{service.title}</h5>
                  </div>
                ))}
              </div>
            </div>
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
            <div className="bg-white/90 p-10 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Need an Emergency Help? Call Us!</h2>
              <h3 className="text-2xl font-bold text-primary mb-6">(818) 488-1840</h3>
              <p className="text-gray-700 mb-8">
                Our team is available to provide immediate assistance for urgent kidney care needs. Don't hesitate to
                call us in case of an emergency.
              </p>
              <Link
                href="/contact-us"
                className="inline-block bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <Image
                src="/placeholder.svg?height=60&width=180"
                alt="Valley Kidney Care Logo"
                width={180}
                height={60}
                className="h-14 w-auto mb-6"
              />
            </div>

            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> Services
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> Doctors
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> Patient Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-primary">
                    <span className="text-primary mr-2">→</span> Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-medium mb-2">CALL US</h6>
              <p className="text-lg mb-4">(818) 488-1840</p>

              <h6 className="font-medium mb-2">FAX</h6>
              <p className="text-lg mb-4">(818) 975-5446</p>

              <h6 className="font-medium mb-2">EMAIL</h6>
              <p className="text-lg">contact@valleykidneycare.com</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center">
            <p className="text-gray-600">© {new Date().getFullYear()} Valley Kidney Care. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

