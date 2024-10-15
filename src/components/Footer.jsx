import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"; // Import the icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r  from-stone-950 via-stone-800 to-slate-900 text-gray-400 hover:text-gray-200 border-t-2 shadow-gray-800 p-6 mt-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and description */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-400  mb-4">Logo</h2>
          <p className="text-base text-gray-400 ">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100  mb-4">
            Useful Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Content
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Create
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Terms & Services
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100  mb-4">
            Community
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Suggestions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Newsletters
              </a>
            </li>
          </ul>
        </div>

        {/* Partner */}
        <div>
          <h3 className="text-lg font-semibold text-gray-100  mb-4">Partner</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Our Partner
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-gray-200 text-sm">
                Become a Partner
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xl drop-shadow-xl text-gray-400 italic font-medium">
            Developed By Hamed Mahjoobi{" "}
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            {/* Social Media Icons using React Icons */}
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
