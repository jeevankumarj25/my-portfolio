import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Card from "../components/Card";
import catImage from "../components/images/jee.jpg";
import ProfileCard from "../components/ProfileCard";
import codingImg from "../components/images/Coding icon.png";
import testImg from "../components/images/test.jpg";
import { useState } from "react";

const WorkPage = () => {
  // Define the state for the selected category
  const [activeCategory, setActiveCategory] = useState("All");

  // Data for projects
  const projects = [
    {
      category: "App Development",
      title: "App Development Project",
      description: "Developed a scalable mobile app using React Native.",
      imageUrl: testImg,
    },
    {
      category: "Web Development",
      title: "Web Development",
      description:
        "Created responsive web applications using React and Tailwind CSS.",
      imageUrl: codingImg,
    },
    {
      category: "Testing",
      title: "Testing",
      description:
        "Conducted comprehensive manual and automated testing for enterprise apps.",
      imageUrl: testImg,
    },
    {
      category: "Design",
      title: "UI/UX Design",
      description: "Designed intuitive and visually appealing user interfaces.",
      imageUrl: catImage,
    },
    {
      category: "Testing",
      title: "Testing",
      description: "Peformed load testing on the application",
      imageUrl: codingImg,
    },
    {
      category: "Testing",
      title: "Testing",
      description: "Done all types of testing and increased product Quality.",
      imageUrl: codingImg,
    },
    {
      category: "Mentorship",
      title: "Mentorship",
      description: "Trained my junior on react and tailwind.",
      imageUrl: codingImg,
    },
  ];

  // Filter projects based on the selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div>
      <Header />
      <Navbar />
      <section className="container mx-auto p-4 mt-[2px] flex flex-col lg:flex-row lg:space-x-6 items-start">
        {/* Profile Card Section */}
        <div className="w-full lg:w-1/3">
          <ProfileCard
            name="Jeevan Kumar N"
            role="Quality Assurance Engineer"
            phone="+91 6363570322"
            email="jeevan@it-guy.tech"
            location="Bangalore, India"
            imageUrl={catImage}
          />
        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-2/3 mt-20">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="font-poppins text-3xl mb-0">Portfolio</h2>

            {/* Navigation Tabs */}
            <div className="flex justify-start space-x-2 mb-6 mt-0 overflow-x-auto sm:p-4 sm:space-x-2 flex-wrap">
              {["All", "App Development", "Web Development", "Testing", "Design", "Mentorship"].map(
                (category) => (
                  <button
                    key={category}
                    className={`px-3 py-1 rounded text-sm ${activeCategory === category
                        ? "text-[#EC1B09] font-poppins font-semibold" // Active: Orange and bold
                        : "text-black font-poppins font-normal" // Inactive: Black and normal weight
                      }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  title={
                    <div className="flex items-center">
                      <img
                        src={project.imageUrl}
                        alt="Project Icon"
                        className="w-5 h-5 mr-2"
                      />
                      <span className="text-xl font-bold">{project.title}</span>
                    </div>
                  }
                  description={project.description}
                  descriptionClass="text-md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
