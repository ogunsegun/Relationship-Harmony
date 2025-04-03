"use client";

import { useEffect, useState } from 'react';
import Modal from '../../components/Modal';

const MBTIPersonality = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Trigger the modal when the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer); 
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">MBTI Personality Typing</h1>
      <p className="text-lg mb-4">Discover your personality type and how it affects relationships, careers, and more!</p>

      {/* Content of the page */}
      <div className="text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Take the Personality Test
        </button>
      </div>

      {/* Modal for subscription */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default MBTIPersonality;
