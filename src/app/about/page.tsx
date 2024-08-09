/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Heart, Star, Zap, Sparkles, Rainbow, Sun } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-7xl my-4 rounded mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-bold text-indigo-700 mb-2 relative inline-block">
          About Us
          <Sparkles className="absolute -top-6 -left-6 text-yellow-400 h-12 w-12 animate-pulse" />
          <Sparkles className="absolute -top-6 -right-6 text-yellow-400 h-12 w-12 animate-pulse" />
        </h1>
        <p className="text-2xl text-indigo-500 mt-4">Lyvin Forward Premier Company</p>
      </header>

      <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto border-4 border-indigo-200">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Our Story</h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          Welcome to Lyvin Forward Premier Company, a pioneering and innovative enterprise nestled in the heart of Nairobi, Kenya. As a newly registered business entity, we embark on our journey with a fresh perspective and a commitment to delivering creative solutions that cater to the ever-evolving needs of our clients.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg">
          From our inception, our driving force has been a crystal-clear vision: to redefine excellence in timely delivery of quality supplies that meets client's expectations. At Lyvin Forward Premier Company, we are dedicated to pushing boundaries, exceeding expectations, and setting new standards of excellence in the industry.
        </p>
      </section>

      <section className="bg-yellow-100 border-4 border-dashed border-yellow-300 p-8 mb-16 rounded-3xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 max-w-4xl mx-auto shadow-lg relative overflow-hidden">
        <Rainbow className="absolute -top-8 -right-8 text-pink-400 h-24 w-24 opacity-50" />
        <h2 className="text-3xl font-semibold mb-6 text-yellow-700">CEO Message</h2>
        <blockquote className="italic text-gray-700 text-xl leading-relaxed">
          "Innovation drives us forward, redefining excellence in timely delivery of quality supplies that meets client's expectations. Together, let's work together to exceed your expectations and set new industry standards. Innovation fuels our journey; excellence in timely delivery of quality supplies and services is our destination. Growing Together, Side by Side."
        </blockquote>
        <p className="mt-6 text-right text-yellow-600 font-semibold">- Kevin Masara, CEO</p>
        <Sun className="absolute -bottom-4 -left-4 text-yellow-400 h-16 w-16 opacity-50 animate-spin-slow" />
      </section>

      <div className="space-y-16 max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-10 rounded-3xl shadow-lg border-4 border-blue-200">
          <h2 className="text-3xl font-semibold mb-8 text-blue-700 flex items-center">
            <Star className="mr-4 h-10 w-10 text-yellow-400" /> Our Vision
          </h2>
          <ul className="space-y-6">
            <li className="flex items-start">
              <Zap className="mr-4 text-indigo-600 flex-shrink-0 mt-1 h-8 w-8" />
              <span className="text-gray-700 text-lg">
                <strong className="text-indigo-600">Boundaryless Solutions:</strong> We envision a future where our comprehensive supply solutions transcend geographical boundaries and limitations, becoming the trusted partner for clients worldwide.
              </span>
            </li>
            <li className="flex items-start">
              <Zap className="mr-4 text-indigo-600 flex-shrink-0 mt-1 h-8 w-8" />
              <span className="text-gray-700 text-lg">
                <strong className="text-indigo-600">Building Trust:</strong> Our vision is to cultivate trust and confidence among our clients by consistently delivering comprehensive supply solutions that exceed expectations, fostering long-term partnerships built on reliability and integrity.
              </span>
            </li>
            <li className="flex items-start">
              <Zap className="mr-4 text-indigo-600 flex-shrink-0 mt-1 h-8 w-8" />
              <span className="text-gray-700 text-lg">
                <strong className="text-indigo-600">Pioneering Excellence:</strong> We aspire to lead the industry as a trusted partner, setting new standards of excellence in comprehensive supply solutions, and inspiring others to push beyond limits.
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-pink-100 to-red-100 p-10 rounded-3xl shadow-lg border-4 border-pink-200">
          <h2 className="text-3xl font-semibold mb-8 text-pink-700 flex items-center">
            <Heart className="mr-4 h-10 w-10 text-red-500" /> Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our mission is to bridge needs with deeds, offering unparalleled solutions. Through innovation and client-centricity, we empower with personalized, impactful services. Our commitment to excellence ensures lasting connections and real-world results. We strive to redefine the supply landscape with every interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;