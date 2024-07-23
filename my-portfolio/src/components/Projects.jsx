import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "FB-Clone",
      description:
        "Mobile app based on Facebook clone,  Built with React Native,  please click the link below to view the project,  use the Expo Go app to view the project.",
      link: "https://expo.dev/preview/update?message=deploy&updateRuntimeVersion=1.0.0&createdAt=2024-06-29T18%3A26%3A27.145Z&slug=exp&projectId=a6bd22b7-2d58-408a-b887-ec15c701c598&group=e23629fe-bab1-4a95-9df3-e49a1a7fc29b",
    },
    {
      name: "Chater",
      description: "A real time chatting web based app",
      link: "https://github.com/HCK71-Cola/HCK71-Cola",
    },
  ];

  return (
    <section id="projects" className="my-8 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.name} className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl mb-2 text-gray-800">{project.name}</h3>
            <p className="mb-2 text-gray-700">{project.description}</p>
            <a href={project.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
