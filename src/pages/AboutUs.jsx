import React from "react";

const AboutUs = () => {
  return (
    <div className="px-4 py-10 md:px-16 lg:px-24 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          About Gardening Hub
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          At Gardening Hub, we connect passionate gardeners and green
          enthusiasts to share tips, grow knowledge, and nurture nature
          together.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-green-50 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2 text-green-800">
            Our Mission
          </h2>
          <p>
            To inspire and educate every individual to grow greener by providing
            resources, expert guidance, and a vibrant community for gardeners of
            all levels.
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2 text-green-800">
            Our Vision
          </h2>
          <p>
            To become the leading digital gardening community in the world —
            where nature lovers collaborate, innovate, and make our earth more
            green and sustainable.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Arif Hossain",
              role: "Founder & Chief Gardener",
              img: "https://img.icons8.com/?size=100&id=0lg0kb05hrOz&format=png&color=000000",
            },
            {
              name: "Lamia Rahman",
              role: "Community Manager",
              img: "https://img.icons8.com/?size=100&id=C7fjuidAi51i&format=png&color=000000",
            },
            {
              name: "Tanvir Ahmed",
              role: "Botanical Expert",
              img: "https://img.icons8.com/?size=100&id=108652&format=png&color=000000",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-green-100 rounded-lg p-4 text-center shadow hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-3 border-4 border-white"
              />
              <h3 className="text-xl font-semibold text-green-800">
                {member.name}
              </h3>
              <p className="text-gray-700">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
