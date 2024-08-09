/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Linkedin, Twitter, Sparkles } from "lucide-react";

const TeamMember = ({
  name,
  role,
  description,
  imageSrc,
}: {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={imageSrc} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{name}</h3>
      <p className="text-lg font-medium text-indigo-500 mb-4">{role}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex space-x-4">
        <a href="#" className="text-blue-500 hover:text-blue-700">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="#" className="text-blue-400 hover:text-blue-600">
          <Twitter className="h-6 w-6" />
        </a>
      </div>
    </div>
  </div>
);

const OurTeamPage = () => {
  const teamMembers = [
    {
      name: "Kevin Masara",
      role: "CEO & Founder",
      description:
        "Kevin leads Lyvin Forward Premier Company with a vision for innovation and excellence in supply chain solutions.",
      imageSrc: "/api/placeholder/400/400",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operations Officer",
      description:
        "Sarah ensures smooth operations across all departments, driving efficiency and quality in our services.",
      imageSrc: "/api/placeholder/400/400",
    },
    {
      name: "Michael Chen",
      role: "Head of Technology",
      description:
        "Michael spearheads our technological advancements, keeping us at the forefront of digital innovations in supply chain management.",
      imageSrc: "/api/placeholder/400/400",
    },
    {
      name: "Amina Osman",
      role: "Customer Relations Manager",
      description:
        "Amina leads our customer relations team, ensuring client satisfaction and fostering long-term partnerships.",
      imageSrc: "/api/placeholder/400/400",
    },
    {
      name: "David Muthomi",
      role: "Logistics Coordinator",
      description:
        "David oversees our complex logistics operations, ensuring timely and efficient delivery of products and services.",
      imageSrc: "/api/placeholder/400/400",
    },
    {
      name: "Lisa Wanjiru",
      role: "Marketing Director",
      description:
        "Lisa crafts and executes our marketing strategies, elevating our brand presence in the competitive market.",
      imageSrc: "/api/placeholder/400/400",
    },
  ];

  return (
    <div className="max-w-7xl my-4 rounded mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-bold text-indigo-700 mb-2 relative inline-block">
          Our Team
          <Sparkles className="absolute -top-6 -left-6 text-yellow-400 h-12 w-12 animate-pulse" />
          <Sparkles className="absolute -top-6 -right-6 text-yellow-400 h-12 w-12 animate-pulse" />
        </h1>
        <p className="text-2xl text-indigo-500 mt-4">
          Lyvin Forward Premier Company
        </p>
      </header>

      <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto border-4 border-indigo-200">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">
          Meet Our Exceptional Team
        </h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          At Lyvin Forward Premier Company, our success is driven by the
          passion, expertise, and dedication of our team. Each member brings
          unique skills and perspectives, contributing to our innovative
          solutions and commitment to excellence.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-indigo-600 font-semibold">
          Together, we're not just a team - we're a family dedicated to
          delivering exceptional value to our clients and pushing the boundaries
          of what's possible in our industry.
        </p>
      </div>
    </div>
  );
};

export default OurTeamPage;
