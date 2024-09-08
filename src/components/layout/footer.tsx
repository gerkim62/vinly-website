import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400">
            We provide top-notch services in cleaning, construction, and more.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white hover:underline transition duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">P.O Box 4742-00200</p>
          <p className="text-gray-400">Phone: 0721567833/0792176004</p>
          <p className="text-gray-400">Email: forwardbridge.v@gmail.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-white hover:scale-110 transition duration-300"
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        Designed by GeriSam Technologies.{" "}
        <a
          href="https://wa.me/254704383654?text=Hello%2C%20I%27d%20like%20more%20information%20about%20your%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white font-semibold underline hover:no-underline transition-colors duration-300"
        >
          Contact us
        </a>{" "}
        for more information.
      </div>
    </div>
  </footer>
);

export default Footer;
