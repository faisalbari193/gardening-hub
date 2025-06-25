import React from "react";

const Contact = () => {
  return (
    <div className="px-4 py-10 md:px-16 lg:px-24 bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Contact Gardening Hub
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-green-50 p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="bg-green-100 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
              Our Office
            </h2>
            <p>123 Green Street</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="bg-green-100 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
              Email Us
            </h2>
            <p>support@gardeninghub.com</p>
          </div>

          <div className="bg-green-100 p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2 text-green-800">
              Call Us
            </h2>
            <p>+880 1234 567 890</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
