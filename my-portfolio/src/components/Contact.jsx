import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="my-8 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact</h2>
      <form className="grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded bg-white text-gray-800" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input type="email" id="email" className="w-full p-2 rounded bg-white text-gray-800" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700">Message</label>
          <textarea id="message" className="w-full p-2 rounded bg-white text-gray-800" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors">Send</button>
      </form>
    </section>
  );
};

export default Contact;
