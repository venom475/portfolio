import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = ({ compact }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_8rjie5s",
        "template_htjnpcq",
        formData,
        "V5mmf4JVpK4Jc8NS_"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  if (compact) {
    return (
      <section id="contact" className="mb-16 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={sendEmail} className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-1 border border-gray-300 rounded text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-1 border border-gray-300 rounded text-sm"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-1 border border-gray-300 rounded h-20 text-sm"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition text-sm"
          >
            Send
          </button>
        </form>
        {status && <p className="mt-2 text-center text-sm">{status}</p>}
      </section>
    );
  }

  return (
    <section id="contact" className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <form onSubmit={sendEmail} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded h-32"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </section>
  );
};

export default ContactMe;
