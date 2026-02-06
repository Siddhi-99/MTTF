import React from 'react';
import { Link } from 'react-router-dom';

function MTTFContact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-600 py-16 px-4 relative overflow-hidden mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Contact Page</h2>
          <p className="text-purple-100 text-lg mb-8">
            This page is linked from the MTTF About section. For the full contact experience, please visit our main contact page.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Go to Contact Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MTTFContact;
