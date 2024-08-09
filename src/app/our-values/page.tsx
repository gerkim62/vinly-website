import React from 'react';
import { Heart, Star, Zap, Sparkles, Rainbow, Sun, Lightbulb, Users, RefreshCcw } from 'lucide-react';

const ValuesPage = () => {
  const values = [
    {
      title: "Innovation in Service",
      icon: <Lightbulb className="text-yellow-400 h-10 w-10" />,
      description: "Embracing innovation in service means continuously seeking new and creative ways to deliver value to our clients. We are committed to staying ahead of the curve and providing unparalleled service experiences through cutting-edge technologies and innovative solutions."
    },
    {
      title: "Business Focus",
      icon: <Zap className="text-blue-500 h-10 w-10" />,
      description: "Our business focus drives us to prioritize activities and initiatives that align with our strategic objectives. We remain committed to optimizing our resources, refining our processes, and making decisions that enhance our competitive advantage and drive sustainable results."
    },
    {
      title: "Excellence",
      icon: <Star className="text-yellow-500 h-10 w-10" />,
      description: "Excellence is not just a goal; it's our standard. We are committed to delivering best-in-class products and services that consistently exceed expectations and set new benchmarks for quality and performance."
    },
    {
      title: "Client-Centric",
      icon: <Heart className="text-red-500 h-10 w-10" />,
      description: "Being client-centric means placing the needs and satisfaction of our clients at the forefront of everything we do. We strive to understand our clients' needs, tailoring our products and services to exceed their expectations and build long-lasting partnerships."
    },
    {
      title: "Accountability",
      icon: <Users className="text-indigo-500 h-10 w-10" />,
      description: "We hold ourselves accountable for our actions, decisions, and outcomes. Each member of our team takes ownership of their responsibilities and strives to deliver results with integrity and professionalism."
    },
    {
      title: "Adaptability",
      icon: <RefreshCcw className="text-green-500 h-10 w-10" />,
      description: "In a constantly evolving business landscape, adaptability is key to our success. We embrace change with agility and resilience, proactively responding to shifting market dynamics, emerging trends, and evolving client needs."
    },
    {
      title: "Diversity and Inclusion",
      icon: <Rainbow className="text-purple-500 h-10 w-10" />,
      description: "We celebrate diversity in all its forms and foster an inclusive environment where every individual feels valued, respected, and empowered to contribute their unique perspectives."
    },
  ];

  return (
    <div className="max-w-7xl my-4 rounded mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50 min-h-screen">
      <header className="mb-16 text-center">
        <h1 className="text-6xl font-bold text-indigo-700 mb-2 relative inline-block">
          Our Values
          <Sparkles className="absolute -top-6 -left-6 text-yellow-400 h-12 w-12 animate-pulse" />
          <Sparkles className="absolute -top-6 -right-6 text-yellow-400 h-12 w-12 animate-pulse" />
        </h1>
        <p className="text-2xl text-indigo-500 mt-4">Lyvin Forward Premier Company</p>
      </header>

      <section className="mb-16 bg-white rounded-3xl p-10 shadow-lg max-w-4xl mx-auto border-4 border-indigo-200">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600">Our Core Values</h2>
        <p className="mb-6 text-gray-700 leading-relaxed text-lg">
          At Lyvin Forward Premier Company, our values are the foundation of everything we do. They guide our actions, shape our culture, and define who we are as an organization. These values collectively define our ethos and guide our actions as we strive to achieve our mission and vision.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div key={index} className={`bg-gradient-to-br ${index % 2 === 0 ? 'from-blue-100 to-indigo-100' : 'from-pink-100 to-red-100'} p-8 rounded-3xl shadow-lg border-4 ${index % 2 === 0 ? 'border-blue-200' : 'border-pink-200'} transform hover:scale-105 transition-transform duration-300`}>
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              {value.icon}
              <span className={`ml-4 ${index % 2 === 0 ? 'text-blue-700' : 'text-pink-700'}`}>{value.title}</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-xl text-indigo-600 font-semibold">
          These values guide us in our mission to bridge needs with deeds, offering unparalleled solutions and redefining the supply landscape with every interaction.
        </p>
      </div>
    </div>
  );
};

export default ValuesPage;