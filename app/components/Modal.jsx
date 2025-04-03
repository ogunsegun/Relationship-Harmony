import { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Subscribe to Our Page</h2>
        <p className="mb-4">Stay updated with the latest MBTI personality typing insights!</p>
        <form>
          <input
            type="email"
            className="p-2 border border-gray-300 rounded mb-4"
            placeholder="Enter your email"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded ml-2">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
