import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs, faReact, faNodeJs, faHtml5, faCss3, faGithub, faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer, faTools } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skillCategories = {
    Language: [
      { name: "JavaScript", icon: faJs },
      { name: "TypeScript", icon: faJs },
    ],
    FrontEnd: [
      { name: "HTML", icon: faHtml5 },
      { name: "CSS", icon: faCss3 },
      { name: "React", icon: faReact },
      { name: "Redux", icon: faReact },
      { name: "Axios", icon: faReact },
      { name: "React Native", icon: faReact },
      { name: "Expo", icon: faReact },
      { name: "Apollo Client", icon: faReact },
      { name: "Apollo GraphQL", icon: faReact },
    ],
    BackEnd: [
      { name: "Node.js", icon: faNodeJs },
      { name: "Express", icon: faServer },
      { name: "Sequelize", icon: faDatabase },
      { name: "PostgreSQL", icon: faDatabase },
      { name: "Next.js", icon: faReact },
      { name: "MongoDB", icon: faDatabase },
      { name: "Postman", icon: faTools },
      { name: "Apollo Server", icon: faServer },
    ],
    Environment: [
      { name: "GitHub", icon: faGithub },
      { name: "Visual Studio Code", icon: faTools },
    ],
    Testing: [
      { name: "Jest", icon: faTools },
      { name: "White-Box(Unit Testing)", icon: faTools },
      { name: "UAT", icon: faTools },
      { name: "winAMS", icon: faTools },
    ],
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Language":
        return "bg-gray-200";
      case "FrontEnd":
        return "bg-gray-200";
      case "BackEnd":
        return "bg-gray-200";
      case "Environment":
        return "bg-gray-200";
      case "Testing":
        return "bg-gray-200";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <section id="skills" className="my-8 p-6 bg-gray-100 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Skills</h2>
      {Object.keys(skillCategories).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">{category}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skillCategories[category].map((skill) => (
              <li
                key={skill.name}
                className={`${getCategoryColor(category)} p-4 rounded-lg text-center text-gray-700 font-semibold flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <FontAwesomeIcon icon={skill.icon} className="text-3xl mb-2" />
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
