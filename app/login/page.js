'use client';

import { useState, useEffect } from "react";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  const handleSignIn = async (providerId) => {
      await signIn(providerId);
      if (isClient) {
        router.push('/'); // Redirect to home page after sign-in, only on the client-side
      }
    };

  useEffect(() => {  //using it for signIn with getProviders
    const setUpProviders = async () => {
      const response = await getProviders(); 

      setProviders(response);
    }
    setUpProviders();
  }, [])

  return (
    <div className="flex h-screen">
      {/* Left Side - Mission Statement */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-10 text-center">
        <Image
          src="/image.png"
          alt="Relationship Harmony"
          width={400}
          height={400}
          className="rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Relationship Harmony</h1>
        <p className="text-gray-600 max-w-md">
          Our mission is to help people navigate relationships by providing insights into how two given personalities interact.
          Learn about your <span className="font-semibold">love languages</span> and find ways to build deeper connections.
        </p>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10 bg-white shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {session?.user ? `Welcome, ${session.user.name}` : "Login to Your Account"}
        </h2>

        {!session?.user ? (
          <>
            <form className="w-full max-w-sm">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your email" />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input type="password" className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300" placeholder="Enter your password" />
              </div>
              <div className="mb-6 text-right">
                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Login</button>
            </form>

            <div className="my-4 text-gray-500">or</div>

            {/* Social Login Buttons */}
            
             {!session?.user && providers && Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => handleSignIn(provider.id)} // Call handleSignIn instead of signIn directly
                    className="w-full flex items-center justify-center border py-3 rounded-lg hover:bg-gray-100 transition mb-3"
                  >
                    <FcGoogle className="mr-2 text-xl" /> Sign in with Google
                  </button>
                ))}
            
          </>
        ) : (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition-colors duration-200 font-medium"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}
