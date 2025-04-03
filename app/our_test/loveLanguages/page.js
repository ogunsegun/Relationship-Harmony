"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const loveLanguages = [
  {
    title: "Words of Affirmation",
    description:
      "Expressing love through words, compliments, and affirmations.",
    url: "https://images.pexels.com/photos/4247817/pexels-photo-4247817.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Acts of Service",
    description:
      "Showing love through helpful actions and thoughtful gestures.",
    url: "https://images.pexels.com/photos/7236513/pexels-photo-7236513.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Receiving Gifts",
    description:
      "Giving meaningful gifts to express love and appreciation.",
    url: "https://images.pexels.com/photos/6533167/pexels-photo-6533167.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Quality Time",
    description:
      "Spending undivided, meaningful time with loved ones.",
    url: "https://images.pexels.com/photos/4873547/pexels-photo-4873547.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    title: "Physical Touch",
    description:
      "Using touch, hugs, and closeness to show affection.",
    url: "https://images.pexels.com/photos/3692759/pexels-photo-3692759.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export default function LoveLanguages() {
  return (
    <div className="bg-rose-50 min-h-screen py-30">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-rose-600"
        >
          Discover Your Love Language
        </motion.h1>
        <p className="text-gray-600 mt-3 text-lg">
          Understanding your Love Language can strengthen relationships and
          improve communication.
        </p>
      </div>

      {/* Love Languages Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 px-6">
        {loveLanguages.map((language, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <img
              src={language.url}
              alt={language.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-rose-700">
                {language.title}
              </h3>
              <p className="text-gray-600 mt-2">{language.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mt-12"
      >
        <h2 className="text-2xl font-semibold text-rose-700">
          Want to know your Love Language?
        </h2>
        <p className="text-gray-600 mt-2">
          Take the Love Languages test and improve your relationships today!
        </p>
        <Link
          href="/tests/love-languages"
          className="mt-4 inline-block bg-rose-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-rose-700 transition"
        >
          Take the Test
        </Link>
      </motion.div>
    </div>
  );
}
