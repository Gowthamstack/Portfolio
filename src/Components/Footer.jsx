import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          

          {/* Social Icons */}
          <div className="flex items-center gap-5 text-2xl">
            
            <a
              href="https://www.instagram.com/gowthamsamu2003?igsh=MTVoc2M0aWp3MHZ1Nw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/gowthamsamu/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="gmail.comgowthamsamu2003@gmail.com"
              className="hover:text-red-400 transition duration-300"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/Gowthamstack"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition duration-300"
            >
              <FaTwitter />
            </a>

          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Have a Fun. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;