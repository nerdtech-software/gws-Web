const caseStudies = [
  {
    title: "CRM 3D Website Landing Page",
    description: "There are many reasons to choose us.",
    image:
      "https://cdn.dribbble.com/users/427857/screenshots/16294587/media/98a2a9f868806323675a6d0706c2ddec.png?resize=1000x750&vertical=center",
  },
  {
    title: "Isometric Website Design",
    description: "There are many reasons to choose us.",
    image: "https://img.freepik.com/premium-psd/web-development-ui-ux-design-concept-illustration-landing-page-template-business-idea-background_1375-4096.jpg?w=1060",
  },
  {
    title: "Creative Agency Website Design",
    description: "There are many reasons to choose us.",
    image: "https://cdn.dribbble.com/userupload/3153561/file/original-3b579af2e5c1bac9a8f6229225cf9823.jpg?resize=1200x900&vertical=center",
  },
  {
    title: "NFT Full Website Design",
    description: "There are many reasons to choose us we have.",
    image: "https://cdn.dribbble.com/userupload/11696614/file/original-336d7c8f69ede015727d177feb5b1456.png?resize=1200x1200&vertical=center",
  },
];

const Card = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Recent Case Studies
        </h2>
        <p className="text-gray-500 text-center mb-12">
          Our team can create amazing web and app experiences, beginning with
          deep market research, practical strategies, and professional
          execution.
        </p>
        {/* Flexbox container for 2 cards per row */}
        <div className="flex flex-wrap -mx-2">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 px-2 mb-4" // 50% width for 2 cards in a row
            >
              <Card
                title={study.title}
                description={study.description}
                image={study.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
