'use client';

import { Heart, Users, BookOpen, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Understanding Hearts, Building Connections
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Relationship Harmony, we believe every relationship deserves to thrive. Our mission is to help couples understand each other deeply and build lasting connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Heart className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Personality Matching</h3>
              <p className="text-gray-600">
                Discover how different personality types interact and learn strategies to strengthen your relationship based on your unique combination.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <Users className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Love Languages</h3>
              <p className="text-gray-600">
                Understand your partner's love language and learn how to express affection in ways that resonate deeply with both of you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <BookOpen className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Relationship Guidance</h3>
              <p className="text-gray-600">
                Access detailed guides and practical advice tailored to your specific relationship dynamics and challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-rose-50 p-8 sm:p-12 rounded-3xl text-center"
          >
            <MessageCircle className="w-16 h-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're dedicated to helping couples build stronger, more fulfilling relationships through personalized insights and practical guidance. By understanding your unique personality combinations and love languages, we provide tailored strategies to help you navigate challenges and deepen your connection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Transform Your Relationship?
            </h2>
            <button className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}