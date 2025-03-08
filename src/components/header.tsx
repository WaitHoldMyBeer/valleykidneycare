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
            <Link href="/about-us" className="text-black font-medium hover:text-primary transition-colors duration-300">
              About us
            </Link>
            <Link href="/services" className="text-black font-medium hover:text-primary transition-colors duration-300">
              Services
            </Link>
            <Link href="/doctors" className="text-black font-medium hover:text-primary transition-colors duration-300">
              Doctors
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