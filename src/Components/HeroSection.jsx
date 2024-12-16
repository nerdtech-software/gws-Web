
const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-500 to-purple-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            A Digital <span className="text-green-400">Product</span> <br /> Design Agency
          </h1>
          <p className="text-lg max-w-md">
            Designer Agency is a full-service agency, busy designing and building beautiful digital products.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <button className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600">
              Get Started
            </button>
            <button className="text-yellow-400 underline hover:text-yellow-300">
              Watch The Video
            </button>
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          {/* Add an image here */}
          <img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?t=st=1734348170~exp=1734351770~hmac=915b9d77070bb997d609f867d52fd5fa62d8913793a844dfd64dae22e3457a78&w=996" alt="Hero" className="rounded-lg shadow-lg w-96" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
