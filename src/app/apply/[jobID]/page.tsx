import React from 'react';
import Link from 'next/link';

interface JobPageProps {
  params: Promise<{
    jobID: string;
  }>;
}

export default async function JobPage({ params }: JobPageProps) {
  const { jobID } = await params;

  // Mock job data - in a real app, this would come from a database
  const jobData = {
    'software-engineer': {
      title: 'Software Engineer',
      department: 'Engineering',
      location: 'Singapore / Remote',
      type: 'Full-time',
      description: 'We are looking for a talented Software Engineer to join our team...',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of experience in software development',
        'Proficiency in JavaScript, TypeScript, and React',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Participate in code reviews',
        'Contribute to technical architecture decisions'
      ]
    },
    'data-scientist': {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Singapore',
      type: 'Full-time',
      description: 'Join our data science team to build innovative AI solutions...',
      requirements: [
        'Master\'s degree in Statistics, Mathematics, or related field',
        '2+ years of experience in data science',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning frameworks',
        'Strong analytical and statistical skills'
      ],
      responsibilities: [
        'Develop machine learning models',
        'Analyze large datasets',
        'Create data visualizations',
        'Present findings to stakeholders',
        'Collaborate with engineering teams'
      ]
    }
  };

  const job = jobData[jobID as keyof typeof jobData] || {
    title: 'Position Not Found',
    department: 'N/A',
    location: 'N/A',
    type: 'N/A',
    description: 'This position is no longer available or does not exist.',
    requirements: [],
    responsibilities: []
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-8">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <div className="flex flex-wrap gap-4 text-blue-100">
              <span className="flex items-center">
                <span className="mr-2">🏢</span>
                {job.department}
              </span>
              <span className="flex items-center">
                <span className="mr-2">📍</span>
                {job.location}
              </span>
              <span className="flex items-center">
                <span className="mr-2">⏰</span>
                {job.type}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Job Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {job.description}
              </p>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Requirements
                </h2>
                <ul className="space-y-2">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Responsibilities
                </h2>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Apply Button */}
            <div className="mt-8 text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Apply for this Position
              </button>
            </div>
          </div>
        </div>

        {/* Back to Jobs */}
        <div className="mt-8 text-center">
          <Link 
            href="/apply" 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ← Back to All Positions
          </Link>
        </div>
      </div>
    </div>
  );
} 