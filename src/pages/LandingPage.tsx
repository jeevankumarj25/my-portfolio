import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Card from '../components/Card';
import catImage from '../components/images/jee.jpg';
import ProfileCard from '../components/ProfileCard';
import codingImg from '../components/images/Coding icon.png';
import testImg from '../components/images/test.jpg';

const LandingPage = () => {
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
        <h2 className="font-poppins text-3xl mb-6">ABOUT ME</h2>
        <p>
        Hello there! I'm thrilled to welcome you to my portfolio. I am a passionate and versatile Front-end Developer with a keen interest in exploring the latest cutting-edge technologies. My journey in web development has been nothing short of exhilarating, and I constantly strive to enhance my skills and embrace emerging trends in the industry. Alongside my development expertise, I am well-versed in various testing methodologies, including unit testing, integration testing, functional testing, end-to-end testing, performance testing, and security testing, ensuring the applications I create are robust, user-friendly, and secure. With a strong commitment to delivering high-quality products, I seamlessly blend development and testing expertise to craft solutions that stand out. 🚀
        </p>

        <h2 className="font-poppins text-2xl mb-6 mt-6">WHAT DO I DO !</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card
            className="bg-[#ffeeda]" 
            title={
              <div className="flex items-center">
                {/* Add the code icon before the title */}
                <img
                  src={testImg}// Replace with your code icon path
                  alt="Code Icon"
                  className="w-8 h-8 mr-2" // Adjust size and margin as needed
                />
                <span className="text-xl font-bold">Quality Assurance</span> 
              </div>
            }
            description="Quality Assurance (QA) ensures software meets requirements and functions correctly. Key skills include test planning, manual and automated testing, bug tracking, and using tools like Selenium, JIRA, and Postman to ensure high-quality software."
            descriptionClass="text-md"
          />
          <Card
            className="bg-[#f2f7fb]" 
            title={
              <div className="flex items-center">
                {/* Add the code icon before the title */}
                <img
                  src={codingImg}// Replace with your code icon path
                  alt="Code Icon"
                  className="w-5 h-5 mr-2" // Adjust size and margin as needed
                />
                <span className="text-xl font-bold">Web Development</span> 
              </div>
            }
            description="As a Front-end developer, I find myself most captivated by the power and flexibility of React, Tailwind CSS, and React. I'm always eager to dive into new projects that leverage React and discover innovative ways to create fast, scalable, and user-friendly applications."
            descriptionClass="text-md"
          />
        </div>
      </div>
    </div>


      </section>
    </div>
  );
};

export default LandingPage;
