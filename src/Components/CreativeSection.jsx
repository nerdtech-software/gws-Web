

const CreativeSection = () => {
  return (
    <section className="bg-white py-12 px-4 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://img.freepik.com/premium-photo/social-media-instagram-digital-marketing-concept-3d-rendering_106244-1708.jpg?w=996" // Replace with your actual image path
            alt="Creative Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
            Creative Solutions To <br />
            Expand Your Business
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are committed to making sure you achieve your goal. Our experts
            are always ready to help you with any digital services. We are here
            for you.
          </p>

          {/* Feature List */}
          <div className="space-y-6">
            {/* Pixel Perfection */}
            <div className="flex items-start">
              <div className="h-10 w-10 bg-blue-200 text-blue-600 flex items-center justify-center rounded-full">
                🖌️
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Pixel Perfection
                </h4>
                <p className="text-gray-600">
                  Pixel-perfect design. Full responsive layout saves you time.
                </p>
              </div>
            </div>

            {/* Innovative Design */}
            <div className="flex items-start">
              <div className="h-10 w-10 bg-green-200 text-green-600 flex items-center justify-center rounded-full">
                💡
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Innovative Design
                </h4>
                <p className="text-gray-600">
                  We deliver creative designs with innovative methods.
                </p>
              </div>
            </div>

            {/* Consistent Deadline */}
            <div className="flex items-start">
              <div className="h-10 w-10 bg-yellow-200 text-yellow-600 flex items-center justify-center rounded-full">
                ⏰
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  Consistent Deadline
                </h4>
                <p className="text-gray-600">
                  Work with us to prioritize and meet your project deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 bg-indigo-600 text-white py-6 px-8 rounded-lg">
        <div className="text-center">
          <h3 className="text-3xl font-bold">1200+</h3>
          <p className="text-gray-300">Projects Launched</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">90K+</h3>
          <p className="text-gray-300">Happy Clients</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold">100+</h3>
          <p className="text-gray-300">Award Winner</p>
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
