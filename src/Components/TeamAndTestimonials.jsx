import React from "react";

const teamMembers = [
  {
    name: "Kasey Waters",
    position: "CFO, Founder",
    image:
      "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174401.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid",
  },
  {
    name: "Hope Sanders",
    position: "Chief Marketing Officer, Airtable",
    image:
      "https://img.freepik.com/free-vector/smiling-redhaired-cartoon-boy_1308-174709.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid",
  },
  {
    name: "Kole Bostock",
    position: "Former President and CFO, Autodesk",
    image:
      "https://img.freepik.com/free-vector/young-man-with-blue-eyes_1308-174369.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid",
  },
  {
    name: "Raheem Hawkins",
    position: "Former VP of Engineering",
    image:
      "https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-171058.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid",
  },
  {
    name: "Milla Bone",
    position: "Executive Director of Products",
    image:
      "https://img.freepik.com/free-vector/smiling-young-man-glasses_1308-174702.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid",
  },
  {
    name: "Ashleigh Heaton",
    position: "Executive Vice President",
    image:
      "https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-175857.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid",
  },
];

const testimonial = {
  name: "David Watson",
  location: "Parkstreet L.A. - 1234, USA",
  feedback:
    "Leading an organization is incredibly rewarding and equally humbling. Confidence and humility. Every success is built on lessons from mistakes made. My overall experience was very good with Designart.",
};

const TeamMemberCard = ({ image, name, position }) => (
  <div className="bg-white rounded-lg shadow-md text-center p-4 hover:shadow-lg transition duration-300">
    <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full mb-4" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-500 text-sm mt-1">{position}</p>
  </div>
);

const TestimonialCard = ({ name, location, feedback }) => (
  <div className="text-center max-w-2xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">What Are The Clients Saying About Us</h2>
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      {/* Image First */}
      <img
        src="https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-175857.jpg?ga=GA1.1.68365576.1734348154&semt=ais_hybrid"
        alt={name}
        className="w-16 h-16 rounded-full mb-4"
      />
      {/* Name and Content */}
      <h3 className="text-xl font-medium text-blue-600 mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-4">{location}</p>
      <p className="text-gray-600 text-sm">{feedback}</p>
    </div>
  </div>
)

const TeamAndTestimonials = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center mb-6">
          Meet With Our Team
        </h2>
        <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
          We have 700 plus official workers and thousands of remote workers.
          They do work dedicatedly and they are experts in their fields.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols- gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              image={member.image}
              name={member.name}
              position={member.position}
            />
          ))}
        </div>

        {/* Client Testimonial */}
        <TestimonialCard
          name={testimonial.name}
          location={testimonial.location}
          feedback={testimonial.feedback}
        />
      </div>
    </section>
  );
};

export default TeamAndTestimonials;
