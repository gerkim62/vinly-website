/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {
  Check,
  ChevronRight,
  Linkedin,
  Twitter,
  Building,
  Shield,
  Layout,
  Briefcase,
  PenToolIcon,
  MessageSquare,
  Target,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative py-20"
  >
    <div className="absolute inset-0 bg-pattern opacity-10"></div>
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Transforming Spaces, Enhancing Lives
        </h1>
        <p className="text-xl mb-8">
          Your one-stop solution for cleaning, construction, and more.
        </p>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center ring-2 ring-blue-700"
        >
          Get Started <ChevronRight className="ml-2" />
        </a>
      </div>
      <div className="md:w-1/2">
        <img
          src="/office.webp"
          alt="Hero image"
          className="shadow-2xl rounded-lg w-full"
        />
      </div>
    </div>
  </section>
);

const AboutUsSection = () => (
  <section id="about" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        About Us
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/office.webp" alt="About Us" className="rounded-lg shadow-lg" />
        </div>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <Briefcase className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="text-gray-700">
              Welcome to Lyvin Forward Premier Company, a pioneering enterprise in Nairobi, Kenya. We deliver creative solutions that cater to the evolving needs of our clients.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            <Target className="w-12 h-12 text-blue-700 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              We envision a future where our comprehensive supply solutions transcend boundaries, becoming the trusted partner for clients worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "Cleaning Services", icon: PenToolIcon, image: "/office.webp" },
          { name: "Construction", icon: Building, image: "/office.webp" },
          { name: "Safety & Maintenance", icon: Shield, image: "/office.webp" },
          { name: "Furniture Solutions", icon: Layout, image: "/office.webp" },
        ].map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
            <div className="p-6">
              <service.icon className="text-blue-500 w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">{service.name}</h3>
              <p className="text-gray-600 text-center">
                Professional solutions tailored to your needs.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/office.webp" alt="Why Choose Us" className="rounded-lg shadow-lg" />
        </div>
        <div className="space-y-6">
          {[
            {
              title: "Expert Team",
              description: "Our professionals are highly trained and experienced.",
            },
            {
              title: "Quality Assurance",
              description: "We maintain the highest standards in all our services.",
            },
            {
              title: "24/7 Support",
              description: "Our team is always ready to assist you.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
              <div className="bg-blue-500 p-2 rounded-full mr-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: "John Doe", role: "CEO", image: "/profile.jpeg" },
          { name: "Jane Smith", role: "CTO", image: "/profile.jpeg" },
          { name: "Mike Johnson", role: "CFO", image: "/profile.jpeg" },
          { name: "Emily Davis", role: "COO", image: "/profile.jpeg" },
        ].map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-700">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
        Contact Us
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src="/office.webp" alt="Contact Us" className="rounded-lg shadow-lg" />
        </div>
        <div className="grid grid-cols-1 gap-6">
          {[
            { icon: Phone, title: "Phone", content: "+254 700 123 456" },
            { icon: Mail, title: "Email", content: "info@lyvinforward.com" },
            { icon: MapPin, title: "Location", content: "Nairobi, Kenya" },
          ].map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow-md flex items-center">
              <item.icon className="w-12 h-12 text-blue-700 mr-4" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <AboutUsSection />
        <ServicesSection />
        <FeaturesSection />
        <TeamSection />
        <ContactSection />
      </main>
    </div>
  );
}
