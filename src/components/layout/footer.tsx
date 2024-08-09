import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              NI General Supplies
            </h3>
            <p className="mb-4">
              Your trusted partner for quality supplies and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>info@nigeneralsupplies.com</span>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>123 Business St, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          © {new Date().getFullYear()} NI General Supplies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
