import React from 'react';

export default function ApplyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600">
            Discover exciting opportunities at Innovaas Solutions
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Current Openings
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Software Engineer
                  </h3>
                  <p className="text-gray-600">Full-time • Remote</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Data Scientist
                  </h3>
                  <p className="text-gray-600">Full-time • Hybrid</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Product Manager
                  </h3>
                  <p className="text-gray-600">Full-time • On-site</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Join Us?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Competitive salary and benefits
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Flexible work arrangements
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional development opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Collaborative and innovative culture
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              View All Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 