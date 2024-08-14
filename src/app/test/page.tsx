import { Check, ChevronRight, Linkedin, Twitter } from "lucide-react";

const Hero = () => (
  <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative">
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
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300 inline-flex items-center ring ring-2 ring-blue-700"
        >
          Get Started <ChevronRight className="ml-2" />
        </a>
      </div>
      <div className="md:w-1/2">
        <img
          src="/api/placeholder/600/400"
          alt="Hero image"
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { name: 'John Doe', role: 'CEO', image: '/api/placeholder/200/200?text=John' },
          { name: 'Jane Smith', role: 'COO', image: '/api/placeholder/200/200?text=Jane' },
          { name: 'Mike Johnson', role: 'Lead Engineer', image: '/api/placeholder/200/200?text=Mike' },
          { name: 'Sarah Brown', role: 'Customer Relations', image: '/api/placeholder/200/200?text=Sarah' },
        ].map((member) => (
          <div key={member.name} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition duration-300">
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover hover:opacity-90 transition duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition duration-300 rounded-full"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 mb-4">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600 transition">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            name: "Cleaning Services",
            icon: "https://cdn-icons-png.flaticon.com/512/3364/3364008.png",
          },
          {
            name: "Construction",
            icon: "https://cdn-icons-png.flaticon.com/512/1995/1995570.png",
          },
          {
            name: "Safety & Maintenance",
            icon: "https://cdn-icons-png.flaticon.com/512/1040/1040232.png",
          },
          {
            name: "Furniture Solutions",
            icon: "https://cdn-icons-png.flaticon.com/512/2452/2452402.png",
          },
        ].map((service) => (
          <div
            key={service.name}
            className="bg-white p-6 rounded-lg shadow-md text-center hover:scale-105 hover:bg-blue-50 transition-transform duration-300"
          >
            <img
              src={service.icon}
              alt={service.name}
              className="w-16 h-16 mx-auto mb-4"
            />
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
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
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

const TestimonialSection = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            name: "John Doe",
            role: "Business Owner",
            content: "Exceptional service! They transformed our office space.",
          },
          {
            name: "Jane Smith",
            role: "Homeowner",
            content:
              "Professional, punctual, and thorough. Highly recommended!",
          },
          {
            name: "Mike Johnson",
            role: "Project Manager",
            content:
              "Their expertise in construction is unmatched. Great team!",
          },
        ].map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
            <div className="flex items-center">
              <img
                src={`/api/placeholder/50/50?text=${testimonial.name[0]}`}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (

    <section className="bg-blue-600 text-white py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg md:text-xl mb-8">
          Contact us today for a free consultation
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-100 hover:shadow-xl transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
  const LandingPage = () => (
  
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <FeaturesSection />
        <TeamSection />
        <TestimonialSection />
        <CTASection />
      </main>
    </div>
  );
  export default LandingPage;