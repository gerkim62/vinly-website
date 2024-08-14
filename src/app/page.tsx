/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

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
    className="bg-gradient-to-r from-blue-600 to-blue-800 text-white relative"
  >
    <div className="absolute inset-0 bg-pattern opacity-10"></div>
    <div className="container mx-auto pl-4 flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 my-8 md:mb-0 ">
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
          className="shadow-2xl rounded-lg"
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
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <Briefcase className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
          <p className="text-gray-700 text-left">
            Welcome to Lyvin Forward Premier Company, a pioneering and
            innovative enterprise nestled in the heart of Nairobi, Kenya. As a
            newly registered business entity, we embark on our journey with a
            fresh perspective and a commitment to delivering creative solutions
            that cater to the ever-evolving needs of our clients.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <MessageSquare className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">CEO Message</h3>
          <p className="text-gray-700 italic text-left">
            "Innovation drives us forward, redefining excellence in timely
            delivery of quality supplies that meets client's expectations.
            Together, let's work together to exceed your expectations and set
            new industry standards. Growing Together, Side by Side."
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <Target className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-700 text-left">
            We envision a future where our comprehensive supply solutions
            transcend geographical boundaries and limitations, becoming the
            trusted partner for clients worldwide.
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto mt-12 bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-700 text-left">
          Our mission is to bridge needs with deeds, offering unparalleled
          solutions. Through innovation and client-centricity, we empower with
          personalized, impactful services. Our commitment to excellence ensures
          lasting connections and real-world results.
        </p>
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
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <Phone className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Phone</h3>
          <p className="text-gray-700">+254 700 123 456</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <Mail className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Email</h3>
          <p className="text-gray-700">info@lyvinforward.com</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
          <MapPin className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-4">Location</h3>
          <p className="text-gray-700">Nairobi, Kenya</p>
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
          { name: "Cleaning Services", icon: PenToolIcon },
          { name: "Construction", icon: Building },
          { name: "Safety & Maintenance", icon: Shield },
          { name: "Furniture Solutions", icon: Layout },
        ].map((service) => (
          <div
            key={service.name}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 hover:bg-blue-50 transition-transform duration-300"
          >
            <service.icon className="text-blue-500 w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">
              Professional solutions tailored to your needs.
            </p>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Expert Team",
            description:
              "Our professionals are highly trained and experienced.",
          },
          {
            title: "Quality Assurance",
            description:
              "We maintain the highest standards in all our services.",
          },
          {
            title: "24/7 Support",
            description: "Our team is always ready to assist you.",
          },
        ].map((feature, index) => (
          <div key={index} className="flex items-start">
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
            className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
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
        ))}
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
