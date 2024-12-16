

const ServicesSection = () => {
  const services = [
    { name: "Branding & Design", highlighted: true },
    { name: "UI/UX Design" },
    { name: "Product Design" },
    { name: "Content Strategy" },
    { name: "Design & Concept" },
    { name: "Social Media" },
    { name: "Media Planing" },
    { name: "Digital Strategy" },
    { name: "SEO Optimization" },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Heading */}
        <div className="col-span-1">
          <h2 className="text-4xl font-bold mb-4">
            See Our Services We <br /> Can Help You With
          </h2>
          <p className="text-gray-400">
            Our digital products and services bridge the gap between physical
            and digital experiences, making client ambitions a reality. We
            deliver the best value proposition.
          </p>
        </div>

        {/* Right Service Grid */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
                service.highlighted
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 transition duration-300"
              }`}
            >
              <span className="font-semibold">{service.name}</span>
              <span className="text-xl">→</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
