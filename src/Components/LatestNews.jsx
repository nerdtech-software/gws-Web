
import NewsletterBanner from "./NewsletterBanner";

const news = [
  {
    title: "How to make a website look more attractive",
    category: "Design, Illustrations, UI/UX",
    date: "2, Sept 2020",
    image: "https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?ga=GA1.1.68365576.1734348154&semt=ais_tags_boosted", // Replace with actual image URL
  },
  {
    title: "Check 8 Rules of Thumb in UI/UX Design",
    category: "Design, Illustrations, UI/UX",
    date: "2, Sept 2020",
    image: "https://img.freepik.com/free-vector/gradient-isometric-laptop-technology-background_52683-6194.jpg?ga=GA1.1.68365576.1734348154&semt=ais_tags_boosted", // Replace with actual image URL
  },
  {
    title: "How to build strong portfolio and get a Job in UI/UX",
    category: "Design, Illustrations, UI/UX",
    date: "2, Sept 2020",
    image: "https://img.freepik.com/premium-vector/cyberspace-modern-flat-concept-web-banner-design-man-vr-glasses-explores-augmented-reality_9209-8102.jpg?ga=GA1.1.68365576.1734348154&semt=ais_tags_boosted", // Replace with actual image URL
  },
];

const NewsCard = ({ title, category, date, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-gray-500 text-xs">{category}</p>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
        <p className="text-gray-400 text-xs mt-1">{date}</p>
        <a
          href="#"
          className="text-blue-600 font-medium mt-3 inline-block hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};


const LatestNews = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Newsletter Banner */}
        <NewsletterBanner/>

        {/* Latest News Section */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <NewsCard
              key={index}
              title={item.title}
              category={item.category}
              date={item.date}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
