'use client';

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { useRouter } from 'next/navigation';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [providers, setProviders] = useState(null);
  const [isClient, setIsClient] = useState(false); // Track whether it's client-side

  const { data: session } = useSession();
  const router = useRouter(); // Initialize the router

  // Track if the component is mounted in the client-side (avoid server-side issues)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch authentication providers
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const navbarClasses = `fixed w-full top-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white/50 backdrop-blur-sm"
  }`;
  
  const handleSignIn = () => {
    router.push('/login'); // Redirect to the custom login page
  };
  // const handleSignIn = async (providerId) => {
  //   await signIn(providerId);
  //   if (isClient) {
  //     router.push('/login'); // Redirect to home page after sign-in, only on the client-side
  //   }
  // };

  const menuItems = [
        { title: "About", href: "/about" },
        { title: "Take the Test", href: "/assessment" },
      ];

  const dropdownItems = [
        { title: "MBTI Personality Typing", href:"/our_test/MBTIPersonality" },
        { title: "Love Languages", href: "/our_test/loveLanguages" },
        { title: "Big 5 Test", href: "/our_test/Big5Test" },
      ];

  return (
    <>
      {isClient && ( // Ensure that the component renders only on the client side
        <nav className={navbarClasses}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-rose-500 bg-clip-text text-transparent">
                Relationship Harmony
                </h1>
              </Link>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex md:items-center md:space-x-8">
                {session?.user && (
                  <div className="flex gap-3 md:gap-5">
                {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-rose-600 transition-colors 
                  duration-200 md:flex md:items-center"
                >
                  {item.title}
                </Link>
               ))}
               {/* top-full mt-2 */}
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative flex items-center"
                >
                <button className="text-gray-700 hover:text-rose-600 transition-colors duration-200 
                flex items-center gap-1 ">
                  Our Tests
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1"
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 
                          hover:text-rose-600 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
                    <Link href="/profile">
                      <Image
                        src={session.user.image || "/assets/images/profile.jpg"}
                        width={37}
                        height={37}
                        className="rounded-full"
                        alt="profile"
                      />
                    </Link>
                    <button
                      onClick={() => signOut()}
                      className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                )}

                {/* Providers for Sign In */}
               
                {!session?.user && providers && Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => handleSignIn(provider.id)} // Call handleSignIn instead of signIn directly
                    className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors duration-200 font-medium"
                  >
                    Sign In
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden bg-white border-t"
              >
                <div className="flex flex-col gap-4">
                  {session?.user && (
                    <>
                       {menuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-gray-700 hover:text-rose-600 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                      <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="relative"
                >
                <button className="text-gray-700 hover:text-rose-600 transition-colors duration-200 flex items-center gap-1">
                  Our Tests
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1"
                    >
                      {dropdownItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rose-50 hover:text-rose-600 transition-colors duration-200"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        className="bg-gray-700 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 font-medium"
                      >
                        Sign Out
                      </button>
                    </>
                  )}

                  {/* If not logged in, show sign-in options */}
                  {!session?.user && providers && Object.values(providers).map((provider) => (
                    <button
                      key={provider.name}
                      onClick={() => handleSignIn(provider.id)} // Call handleSignIn instead of signIn directly
                      className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-700 transition-colors duration-200 font-medium"
                    >
                      Sign In
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      )}
    </>
  );
};

export default Nav;
