import Navbar from '../components/Navbar';
import Header from '../components/Header';
import catImage from '../components/images/jee.jpg';
import ProfileCard from '../components/ProfileCard';
import educationImg from '../components/images/education-icon.png';
import expImg from '../components/images/experience-icon.png';

const ResumePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <section className="container mx-auto p-4 mt-[2px] flex flex-col lg:flex-row lg:space-x-6 items-start dark:bg-gray-800">
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
        {/* Resume Section */}
        <div className="w-full lg:w-2/3 mt-20">
          <div className="bg-white p-6 rounded-tl-lg rounded-tr-lg rounded-bl-none rounded-br-none shadow-md">
            <h2 className="font-poppins text-3xl mb-6">Resume</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center ml-10 mb-6">
                <img
                  src={educationImg} // Replace this with your image path
                  alt="Education Icon"
                  className="w-8 h-8 mr-4" // Size and margin of the image
                />
                <h2 className="font-poppins text-xl">Education</h2>
              </div>
              <div className="flex items-center mb-6">
                <img
                  src={expImg} // Replace this with your image path
                  alt="Experience Icon"
                  className="w-8 h-8 mr-4 ml-10" // Size and margin of the image
                />
                <h2 className="font-poppins text-xl">Experience</h2>
              </div>
              {/*education card*/}
              <div className="border rounded-lg mb-2 mr-10 ml-10 shadow-md p-4 bg-[#ffe3be]">
                <div className="flex items-center">
                  <span className="text-gray-500 font-poppins">2014-2018</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-bold">VTU University</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-normal">Mechanical Engineering</span>
                </div>
              </div>
              {/*experience card*/}
              <div className="border rounded-lg mb-2 mr-10 ml-10 shadow-md p-4 bg-[#ffeeda]">
                <div className="flex items-center">
                  <span className="text-gray-500 font-poppins">2018-2022</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-bold">Software Testing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-normal">Avia Technologies</span>
                </div>
              </div>

              {/*education card*/}
              <div className="border rounded-lg mb-2 mr-10 ml-10 shadow-md p-4 bg-[#ffeeda]">
                <div className="flex items-center">
                  <span className="text-gray-500 font-poppins">2012-204</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-bold">PUC</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-normal">BEML Composite PU College</span>
                </div>
              </div>

              {/*experience card*/}
              <div className="border rounded-lg mb-2 mr-10 ml-10 shadow-md p-4 bg-[#ffe3be]">
                <div className="flex items-center">
                  <span className="text-gray-500 font-poppins">2023-2024</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-bold">Software Development</span>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500 font-normal">IT-Guy Technologies</span>
                </div>
              </div>
            </div>
          </div>
          {/* softskills and skills section*/}
          <div className="bg-[#f7fbfc] rounded-tl-none rounded-tr-none rounded-bl-lg rounded-br-lg">
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Skills Column */}
                <div className="ml-[68px] mr-0">
                  <h2 className="font-poppins text-xl text-gray-700 mt-2 mb-4">Work Skills</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Manual Testing</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Automation Testing</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Performance Testing</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">React</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Tailwind</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">TypeScript</span>
                  </div>
                </div>

                {/* Soft Skills Column */}
                <div className="ml-[46px] mb-[26px]" >
                  <h2 className="font-poppins text-xl mt-2 text-black mb-4">Soft Skills</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Time Management</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Mentorship</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Flexibility</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Research</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Writing</span>
                    <span className="bg-[#e1e8f0] text-gray-700 px-3 py-1 rounded-md shadow-sm">Impeccable Communication</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage;
