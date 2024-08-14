const AboutUs = () => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
    <main className="flex-grow">
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
            About Us
          </h1>
          
          {/* Our Story */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Welcome to Lyvin Forward Premier Company, a pioneering and
              innovative enterprise nestled in the heart of Nairobi, Kenya. As
              a newly registered business entity, we embark on our journey with
              a fresh perspective and a commitment to delivering creative
              solutions that cater to the ever-evolving needs of our clients.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mt-4">
              From our inception, our driving force has been a crystal-clear
              vision: to redefine excellence in timely delivery of quality
              supplies that meets client's expectations. At Lyvin Forward
              Premier Company, we are dedicated to pushing boundaries, exceeding
              expectations, and setting new standards of excellence in the
              industry.
            </p>
          </div>

          {/* CEO Message */}
          <div className="mb-16 bg-yellow-100 p-8 rounded-lg shadow-lg border border-yellow-300 relative">
            <h2 className="text-3xl font-semibold mb-6">CEO Message</h2>
            <p className="text-lg italic leading-relaxed text-gray-800 mb-4">
              "Innovation drives us forward, redefining excellence in timely
              delivery of quality supplies that meets client's expectations.
              Together, let's work together to exceed your expectations and set
              new industry standards. Innovation fuels our journey; excellence
              in timely delivery of quality supplies and services is our
              destination. Growing Together, Side by Side."
            </p>
            <p className="font-semibold text-right text-gray-800">
              - Kevin Masara, CEO
            </p>
            {/* Add cute icons */}
            <div className="absolute bottom-4 left-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4V12L16 16"
                />
              </svg>
            </div>
            <div className="absolute top-4 right-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-pink-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>
          </div>

          {/* Vision */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">Our Vision</h2>
            <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-gray-700">
              <li>
                <strong>Boundaryless Solutions:</strong> We envision a future
                where our comprehensive supply solutions transcend geographical
                boundaries and limitations, becoming the trusted partner for
                clients worldwide.
              </li>
              <li>
                <strong>Building Trust:</strong> Our vision is to cultivate
                trust and confidence among our clients by consistently
                delivering comprehensive supply solutions that exceed
                expectations, fostering long-term partnerships built on
                reliability and integrity.
              </li>
              <li>
                <strong>Pioneering Excellence:</strong> We aspire to lead the
                industry as a trusted partner, setting new standards of
                excellence in comprehensive supply solutions, and inspiring
                others to push beyond limits.
              </li>
            </ul>
          </div>

          {/* Mission */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Our mission is to bridge needs with deeds, offering unparalleled
              solutions. Through innovation and client-centricity, we empower
              with personalized, impactful services. Our commitment to
              excellence ensures lasting connections and real-world results. We
              strive to redefine the supply landscape with every interaction.
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default AboutUs;
