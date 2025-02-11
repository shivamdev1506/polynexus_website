const CareersPage = () => {
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description:
        "Join our team to work on modern web applications using React, Tailwind CSS, and more.",
    },
    {
      title: "Backend Developer",
      location: "New York, NY",
      description: "Build powerful APIs and services with Node.js and AWS.",
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      description:
        "Work with cross-functional teams to bring innovative products to market.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="relative bg-blue-500 text-white py-16">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-[2.3rem]">Ready to Make an Impact?</h1>
          <p className="mt-4 text-xl">
            Apply today to be part of an innovative team changing the future of
            technology.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl mb-8 text-center">Current Openings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-blue-600">
                  {job.title}
                </h3>
                <p className="text-gray-500 mt-2">{job.location}</p>
                <p className="mt-4 text-gray-700">{job.description}</p>
                <a
                  href="#apply"
                  className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-teal-600 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Why Work With Us?</h2>
          <p className="text-lg">
            At our company, we foster a collaborative and innovative environment
            where your skills can thrive. We believe in continuous learning and
            offering career growth opportunities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
