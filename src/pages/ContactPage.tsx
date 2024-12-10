import Navbar from '../components/Navbar';
import Header from '../components/Header';
import catImage from '../components/images/jee.jpg';
import ProfileCard from '../components/ProfileCard';
import phoneiconIMG from '../components/images/phoneicon.png';
import mailiconImg from '../components/images/mailicon.png';


const ContactPage = () => {
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
        <div className="w-full lg:w-2/3 mt-20">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-poppins text-3xl mb-6">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="bg-orange-100 p-2 rounded-lg shadow-md">
                <div className="flex items-center mb-2">
                  <img
                    src={phoneiconIMG}
                    alt="Phone Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <h3 className="text-lg font-bold text-gray-800">Phone:</h3>
                </div>
                <p className="text-gray-600">+91-6363570322</p>
                <p className="text-gray-600">+91-9731792875</p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={mailiconImg}
                    alt="Email Icon"
                    className="w-8 h-8 mr-2"
                  />
                  <h3 className="text-lg font-bold text-gray-800">Email:</h3>
                </div>
                <p className="text-gray-600">jeevankumarj25@gmail.com</p>
              </div>
            </div>
            <div className="bg-[#f7fbfc] p-2 rounded-lg shadow-md">
              <p className="text-gray-800 mb-6">
                I am always open to discussing <span className="font-semibold">new projects</span>,{" "}
                <span className="font-semibold">opportunities in the tech world</span>,{" "}
                <span className="font-semibold">partnerships</span>, and more so{" "}
                <span className="font-semibold">mentorship</span>.
              </p>
              <form className="space-y-3">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your message"
                    rows={1}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className=" border-transparent bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] bg-clip-border text-black px-4 py-2 rounded-md shadow-md hover:bg-gradient-to-r hover:from-[#FF9C1A] hover:to-[#EC1B09] hover:text-white transition"


                >
                  Submit
                </button>
              </form>
            </div>
      </div>
    </div>


      </section>
    </div>
  );
};

export default ContactPage;
