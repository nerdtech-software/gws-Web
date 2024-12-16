import image from "../img/logo.png";

const Nav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600 flex items-center">
           <img className="w-32" src={image} alt="logo" />
            
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600">
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600">
              About
            </a>
            <a href="#service" className="text-gray-600 hover:text-indigo-600">
              Service
            </a>
            <a href="#blog" className="text-gray-600 hover:text-indigo-600">
              Blog
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600">
              Contact
            </a>
          </div>

          {/* Button */}
          <div className="hidden md:block">
            <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500">
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 focus:outline-none">
              {/* Replace with a menu icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
