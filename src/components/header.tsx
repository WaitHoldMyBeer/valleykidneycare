import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/mainLogo.png?height=60&width=180"
            alt="Valley Kidney Care Logo"
            width={180}
            height={60}
            className="h-14 w-auto"
          />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link href="/" className="text-black font-medium hover:text-primary transition-colors duration-300">
          Home
        </Link>
        <div className="relative group">
          <Link
            href="/about-us"
            className="text-black font-medium hover:text-primary transition-colors duration-300 flex items-center"
          >
            About us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            <div className="py-1">
              <Link href="/about-us" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                About Us
              </Link>
              <Link href="/testimonials" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Testimonials
              </Link>
              <Link href="/doctors" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Doctors
              </Link>
            </div>
          </div>
        </div>
        <Link href="/services" className="text-black font-medium hover:text-primary transition-colors duration-300">
          Services
        </Link>
        <Link
          href="/contact-us"
          className="text-black font-medium hover:text-primary transition-colors duration-300"
        >
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
          className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition-colors duration-300"
        >
          Contact Us <ChevronRight className="inline-block h-4 w-4" />
        </Link>
      </div>
    </div>
  </header>

  )
}