import React from "react";
import Javascripts from "../assets/Javascript.png";
import CSS from "../assets/CSS.png";
import Problem_Solving from "../assets/Problem_Solving.png";
import SQL from "../assets/SQL.png";
import react from "../assets/React.png";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Javascript",
      description: "Mempelajari dasar pemrograman web yaitu JavaScript.",
      imageUrl: Javascripts,
      credentialUrl: "https://www.hackerrank.com/certificates/f78f4cbc0ec5",
    },
    {
      id: 2,
      title: "CSS",
      description:
        "Mempelajari CSS untuk memaksimalkan tampilan website agar lebih menarik.",
      imageUrl: CSS,
      credentialUrl: "https://www.hackerrank.com/certificates/4ef9eef29ac2",
    },
    {
      id: 3,
      title: "SQL",
      description: "Mempelajari basic SQL.",
      imageUrl: SQL,
      credentialUrl: "https://www.hackerrank.com/certificates/26f61f6d8280",
    },
    {
      id: 4,
      title: "Problem Solving",
      description: "Menyelesaikan materi problem solving.",
      imageUrl: Problem_Solving,
      credentialUrl: "https://www.hackerrank.com/certificates/05172fb58707",
    },
    {
      id: 5,
      title: "React",
      description: "Mempelajari basic React.",
      imageUrl: react,
      credentialUrl: "https://www.hackerrank.com/certificates/595d10ea8259",
    },
    // Add more certificates as needed
  ];

  return (
    <section id="certificates" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-dark-blue mb-4">SERTIFIKAT</h2>
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Sertifikat Pelatihan
        </h3>
        <p className="text-gray-700 mb-12">
          Sertifikat kompetensi yang telah saya dapatkan selama masa Bootcamp di
          Hacktiv8.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={cert.imageUrl}
                alt={cert.title}
                className="w-full mb-4 rounded transition-all duration-300"
              />
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {cert.title}
              </h4>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-dark-blue text-white px-4 py-2 rounded font-semibold hover:bg-blue-800 transition-colors duration-300"
              >
                Lihat Kredensial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
