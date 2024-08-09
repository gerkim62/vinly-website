/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Star,
  Zap,
  Briefcase,
  Sofa,
  HardHat,
  Smartphone,
  Users,
} from "lucide-react";

const LandingPage = () => {
  const sections = [
    {
      title: "About Us",
      icon: <Sparkles className="h-8 w-8 text-yellow-400" />,
      description:
        "Lyvin Forward Premier Company is a pioneering enterprise in Nairobi, Kenya, committed to delivering innovative solutions and exceeding client expectations.",
      linkText: "Learn Our Story",
      href: "/about",
    },
    {
      title: "Our Values",
      icon: <Heart className="h-8 w-8 text-red-500" />,
      description:
        "Our core values of innovation, excellence, and client-centricity guide every aspect of our operations and relationships.",
      linkText: "Discover Our Values",
      href : "/our-values"
    },
    {
      title: "What We Do",
      icon: <Briefcase className="h-8 w-8 text-blue-500" />,
      description:
        "From office supplies to construction materials, we offer a wide range of products and services to meet diverse client needs.",
      linkText: "Explore Our Services",
      href : "/what-we-do"
    },
    {
      title: "Our Team",
      icon: <Users className="h-8 w-8 text-green-500" />,
      description:
        "Meet the passionate professionals driving our success and commitment to excellence.",
      linkText: "Meet Our Team",
      href : "/our-team"
    },
  ];

  const services = [
    {
      name: "Office & School Supplies",
      icon: <Briefcase className="h-12 w-12 text-blue-500" />,
    },
    { name: "Furniture", icon: <Sofa className="h-12 w-12 text-green-500" /> },
    {
      name: "Construction & Building",
      icon: <HardHat className="h-12 w-12 text-yellow-500" />,
    },
    {
      name: "Electronics",
      icon: <Smartphone className="h-12 w-12 text-purple-500" />,
    },
  ];

  return (
    <div className="max-w-7xl my-4 rounded mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-bold text-indigo-700 mb-2 relative inline-block">
          Lyvin Forward Premier Company
          <Sparkles className="absolute -top-6 -left-6 text-yellow-400 h-12 w-12 animate-pulse" />
          <Sparkles className="absolute -top-6 -right-6 text-yellow-400 h-12 w-12 animate-pulse" />
        </h1>
        <p className="text-2xl text-indigo-500 mt-4">
          Innovative Solutions for Tomorrow's Challenges
        </p>
      </header>

      <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto border-4 border-indigo-200">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Welcome to Lyvin Forward
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          At Lyvin Forward Premier Company, we're dedicated to providing
          innovative solutions and exceptional service. Our commitment to
          excellence and client satisfaction drives everything we do. Discover
          how we can help your business thrive in today's dynamic marketplace.
        </p>
        <a
          href="/about"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
        >
          Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-100 transform hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-4">
              {section.icon}
              <h3 className="text-2xl font-semibold text-indigo-700 ml-4">
                {section.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4">{section.description}</p>
            <a
              href={section.href}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            >
              {section.linkText} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        ))}
      </div>

      <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto border-4 border-indigo-200">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {service.icon}
              <p className="mt-2 font-medium text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-700 mb-8">
          Let's work together to elevate your business and achieve your goals.
        </p>
        <a
          href="#"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
        >
          Contact Us Today
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
