import Link from "next/link";
import { Scale, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-teal-500" />
              <span className="ml-2 text-xl font-bold text-white">Adiutor</span>
            </div>

            <div className="mt-6 flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/adiutor-legal-assistant/"
                className="text-gray-400 hover:text-teal-500"
                target="_blank"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="#features"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="#integrations"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-base text-gray-400 hover:text-teal-500"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Adiutor AI Legal Services. All
            rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-teal-500">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
