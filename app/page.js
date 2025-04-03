'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative">
          {/* Background Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 -z-10"
          >
            <Image
              src="/bg2.jpg"
              alt="Hero Background"
              fill
              className="rounded-xl object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold gray-900 sm:text-5xl md:text-6xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Discover Your
            <span className="text-rose-400"> Perfect Harmony</span>
          </motion.h2>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Take our comprehensive relationship assessment to understand your personality dynamics
            and receive tailored advice for a stronger partnership.
          </motion.p>
          <motion.div
            className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="rounded-md shadow">
              <Link
                href="/assessment"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
              >
                Start Assessment
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-rose-100 rounded-lg p-6 inline-block">
                <svg
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">MBTI Personality Types</h3>
              <p className="mt-2 text-base text-gray-500">
                Understand how different personality types interact in relationships.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="bg-rose-100 rounded-lg p-6 inline-block">
                <svg
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Love Languages</h3>
              <p className="mt-2 text-base text-gray-500">
                Discover how you and your partner express and receive love.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="bg-rose-100 rounded-lg p-6 inline-block">
                <svg
                  className="h-8 w-8 text-rose-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Big 5 Personality Traits</h3>
              <p className="mt-2 text-base text-gray-500">
                Explore the core dimensions of your personality.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <h3 className='text-xl font-bold text-left p-9'>Testimonials</h3>
      <section className="py-16 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 items-center">
          
          {/* Image Section */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/r3.jpg"
              alt="Couple laughing together"
              width={600}
              height={400}
              className="rounded-2xl object-cover shadow-lg"
            />
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              
              <Image
                src="/r4.jpg"
                alt="User 1"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-700 italic">“This assessment helped us understand each other on a whole new level!”</p>
                <p className="text-sm text-gray-500 mt-1">— Alex & Jamie</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4">
              <Image
                src="/r4.jpg"
                alt="User 2"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <p className="text-gray-700 italic">“The insights we gained were eye-opening. Totally worth it.”</p>
                <p className="text-sm text-gray-500 mt-1">— Taylor M.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}













// 'use client';

// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
//       {/* Hero Section */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//         <div className="text-center relative">
//           {/* Background Image */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="absolute inset-0 -z-10"
//           > 
//             <Image
//               src="/bg2.jpg"
//               alt="Hero Background"
//               layout="fill"
//               objectFit="cover"
//               className="rounded-xl"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>
//           </motion.div>

//           <motion.h2
//             className="text-4xl font-bold gray-900 sm:text-5xl md:text-6xl"
//             initial={{ y: -20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             Discover Your
//             <span className="text-rose-400"> Perfect Harmony</span>
//           </motion.h2>
//           <motion.p
//             className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//           >
//             Take our comprehensive relationship assessment to understand your personality dynamics
//             and receive tailored advice for a stronger partnership.
//           </motion.p>
//           <motion.div
//             className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
//             <div className="rounded-md shadow">
//               <Link
//                 href="/assessment"
//                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 md:py-4 md:text-lg md:px-10"
//               >
//                 Start Assessment
//               </Link>
//             </div>
//             <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
//               <Link
//                 href="/about"
//                 className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="grid grid-cols-1 gap-8 md:grid-cols-3"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             {/* Feature 1 */}
//             <div className="text-center">
//               <div className="bg-rose-100 rounded-lg p-6 inline-block">
//                 <svg
//                   className="h-8 w-8 text-rose-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="mt-4 text-lg font-medium text-gray-900">MBTI Personality Types</h3>
//               <p className="mt-2 text-base text-gray-500">
//                 Understand how different personality types interact in relationships.
//               </p>
//             </div>

//             {/* Feature 2 */}
//             <div className="text-center">
//               <div className="bg-rose-100 rounded-lg p-6 inline-block">
//                 <svg
//                   className="h-8 w-8 text-rose-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="mt-4 text-lg font-medium text-gray-900">Love Languages</h3>
//               <p className="mt-2 text-base text-gray-500">
//                 Discover how you and your partner express and receive love.
//               </p>
//             </div>

//             {/* Feature 3 */}
//             <div className="text-center">
//               <div className="bg-rose-100 rounded-lg p-6 inline-block">
//                 <svg
//                   className="h-8 w-8 text-rose-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="mt-4 text-lg font-medium text-gray-900">Big 5 Personality Traits</h3>
//               <p className="mt-2 text-base text-gray-500">
//                 Explore the core dimensions of your personality.
//               </p>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </main>
//   );
// }

