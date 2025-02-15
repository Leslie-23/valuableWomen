import React from "react";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaAward,
  FaGlobe,
  FaQuoteLeft,
  FaCalendarAlt,
} from "react-icons/fa";
import Iframe from "react-iframe";

const testimonials = [
  {
    name: "Aisha Bello",
    quote:
      "Valuable Women changed my life by helping me discover my true potential!",
    role: "Entrepreneur",
  },
  {
    name: "Nana Adwoa",
    quote: "This community gave me the confidence to start my own business!",
    role: "Small Business Owner",
  },
  {
    name: "Grace Mensah",
    quote: "The empowerment programs transformed my mindset and my future.",
    role: "Student",
  },
];

const events = [
  {
    title: "Women Leadership & Empowerment Conference",
    date: "March 15, 2025",
  },
  { title: "Business & Financial Literacy Workshop", date: "April 10, 2025" },
  { title: "Women in Tech Meetup | I.T Directors Forum", date: "May 5, 2025" },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-500 to-purple-700 text-white py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold">Valuable Women</h1>
        <p className="mt-2 text-lg md:text-2xl font-semibold">
          "Breaking Boundaries"
        </p>
        <motion.div
          className="w-24 h-1 bg-white mt-4 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Vision & Mission */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div className="p-6 border-l-4 border-purple-600 bg-purple-50 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-purple-700">
              🌟 Our Vision
            </h2>
            <p className="mt-2 text-gray-700">
              "To be the beacon of hope to the girl child, shining brightly and
              overtaking Africa and the world at large."
            </p>
          </motion.div>
          <motion.div className="p-6 border-l-4 border-purple-600 bg-purple-50 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-bold text-purple-700">
              💡 Our Mission
            </h2>
            <p className="mt-2 text-gray-700">
              "Encouraging women to discover their value, develop their
              strength, and achieve their dreams, thereby creating a positive
              impact in their lives and beyond."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-purple-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          <motion.div className="p-6 bg-white rounded-lg shadow-md">
            <FaUsers className="text-purple-600 text-4xl mx-auto" />
            <h3 className="text-2xl font-bold mt-2">10,000+</h3>
            <p className="text-gray-600">Women Empowered</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-md">
            <FaAward className="text-purple-600 text-4xl mx-auto" />
            <h3 className="text-2xl font-bold mt-2">500+</h3>
            <p className="text-gray-600">Programs Hosted</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-lg shadow-md">
            <FaGlobe className="text-purple-600 text-4xl mx-auto" />
            <h3 className="text-2xl font-bold mt-2">30+</h3>
            <p className="text-gray-600">Countries Reached</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          What Women Are Saying
        </h2>
        <motion.div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="p-6 bg-purple-50 rounded-lg shadow-md border-l-4 border-purple-600"
            >
              <FaQuoteLeft className="text-purple-500 text-3xl mx-auto" />
              <p className="mt-4 text-gray-700">{t.quote}</p>
              <h4 className="mt-2 font-bold text-purple-700">{t.name}</h4>
              <p className="text-gray-600 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Events */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
            Upcoming Events
          </h2>
          <motion.ul className="mt-6 space-y-4">
            {events.map((event, index) => (
              <motion.li
                key={index}
                className="p-4 bg-white rounded-lg shadow-md flex items-center justify-between text-left"
              >
                <FaCalendarAlt className="text-purple-500 text-md" />
                <p className="text-gray-800 font-semibold ">{event.title}</p>
                <p className="text-gray-600 text-sm">{event.date}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Social Media Embed */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Follow Us on Social Media
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <Iframe
            url="https://www.instagram.com/val_uablewomen/"
            width="100%"
            height="300px"
            className="rounded-lg shadow-md"
          />
          <Iframe
            url="https://twitter.com/val_uablewomen"
            width="100%"
            height="300px"
            className="rounded-lg shadow-md"
          />
          <Iframe
            url="https://www.facebook.com/val_uablewomen"
            width="100%"
            height="300px"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
