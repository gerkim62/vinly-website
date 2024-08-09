/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Briefcase, PenTool, GraduationCap, Sofa, HardHat, Smartphone, Sparkles, Trash2 } from 'lucide-react';

const WhatWeDoPage = () => {
  const services = [
    {
      title: "Office & School Supplies",
      icon: <Briefcase className="text-blue-500 h-12 w-12" />,
      description: "Elevate your workspace and learning environment with our comprehensive range of office and school supplies.",
      items: [
        "Office Supplies: Essential tools for productivity and organization",
        "Art and Craft Supplies: Vibrant materials to inspire creativity",
        "School Supplies: Empowering learners with the tools they need to excel",
        "Stationery: Quality writing instruments and paper products"
      ]
    },
    {
      title: "Furniture",
      icon: <Sofa className="text-green-500 h-12 w-12" />,
      description: "Transform your spaces with our diverse furniture collections for every setting.",
      items: [
        "Indoor Furniture: Stylish and functional pieces for every room",
        "Outdoor Furniture: Durable and charming options for outdoor living",
        "Commercial Office Furniture: Creating productive and professional workspaces",
        "Custom Furniture Designs: Bespoke pieces tailored to your unique style",
        "Furniture Installation and Assembly: Expert services for a hassle-free experience"
      ]
    },
    {
      title: "Construction & Building",
      icon: <HardHat className="text-yellow-500 h-12 w-12" />,
      description: "Comprehensive solutions for all your construction and building needs.",
      items: [
        "Construction Materials: High-quality essentials for sturdy structures",
        "Construction Tools: Efficient equipment for projects of any scale",
        "Project Management: Seamless coordination from planning to completion",
        "Contracting and Subcontracting: Professional services to bring your vision to life"
      ]
    },
    {
      title: "Electronics",
      icon: <Smartphone className="text-purple-500 h-12 w-12" />,
      description: "Stay connected and entertained with our cutting-edge electronic offerings.",
      items: [
        "Consumer Electronics: Latest gadgets and devices",
        "Audio and Video Equipment: Superior sound and picture quality",
        "Gadgets & Accessories: Innovative tech to upgrade your daily life"
      ]
    },
    {
      title: "Cleaning Services",
      icon: <Trash2 className="text-red-500 h-12 w-12" />,
      description: "Maintain pristine environments with our professional cleaning solutions.",
      items: [
        "Commercial Cleaning: Tailored services for businesses and offices",
        "Janitorial Services: Regular maintenance for a consistently clean space",
        "Residential Cleaning: Bringing freshness to homes",
        "Eco-friendly Solutions: Effective cleaning with minimal environmental impact"
      ]
    },
    {
      title: "Safety & Maintenance",
      icon: <Sparkles className="text-orange-500 h-12 w-12" />,
      description: "Ensure safety and longevity with our specialized services.",
      items: [
        "Safety Inspections & Audits: Thorough assessments for risk management",
        "Preventive Maintenance: Proactive care to avoid costly repairs",
        "Regulatory Compliance: Ensuring adherence to safety standards",
        "Customized Safety Solutions: Tailored approaches for unique operational needs"
      ]
    }
  ];

  return (
    <div className="max-w-7xl my-4 rounded mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-bold text-indigo-700 mb-2 relative inline-block">
          What We Do
          <Sparkles className="absolute -top-6 -left-6 text-yellow-400 h-12 w-12 animate-pulse" />
          <Sparkles className="absolute -top-6 -right-6 text-yellow-400 h-12 w-12 animate-pulse" />
        </h1>
        <p className="text-2xl text-indigo-500 mt-4">Lyvin Forward Premier Company</p>
      </header>

      <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto border-4 border-indigo-200">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Our Services & Products</h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          At Lyvin Forward Premier Company, we offer a wide range of products and services designed to meet the diverse needs of our clients. From office supplies to construction materials, and from furniture to cleaning services, we're your one-stop solution for quality and excellence.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className={`bg-gradient-to-br from-white to-gray-100 p-8 rounded-3xl shadow-lg border-4 border-indigo-200 transform hover:scale-105 transition-transform duration-300`}>
            <h3 className="text-2xl font-semibold mb-4 flex items-center text-indigo-700">
              {service.icon}
              <span className="ml-4">{service.title}</span>
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">{service.description}</p>
            <ul className="list-disc list-inside text-gray-600">
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mb-2">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-indigo-600 font-semibold">
          Whatever your needs, Lyvin Forward Premier Company is here to provide innovative solutions and exceptional service. Let's grow together, side by side.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoPage;