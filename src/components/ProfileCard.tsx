import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import phoneImg from '../components/images/phone.png';
import mailImg from '../components/images/mail.png';
import locationImg from '../components/images/location.png';

interface ProfileCardProps {
  name: string;
  role: string;
  phone: string;
  email: string;
  location: string;
  imageUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  phone,
  email,
  location,
  imageUrl,
}) => {
  return (
    <div className="container mx-auto p-4 max-w-sm bg-white shadow-xl rounded-lg overflow-visible relative dark:bg-gray-800 mt-32 sm:mt-32 lg:mt-20">
      {/* Profile Image */}
      <div className="relative mx-auto">
        <img
          className="w-32 h-32 mb-0 object-cover border-4 border-white rounded-xl absolute left-1/2 transform -translate-x-1/2 -top-16"
          src={imageUrl}
          alt="Profile"
        />
      </div>

      {/* Profile Details and Button */}
      <div className="p-6 pt-20 text-center">
        <div className="space-y-2">
          <p className="text-gray-700 text-center mt-0">
            <span className="font-raleway font-bold font-black text-xl">Jeevan Kumar N</span>
          </p>
          <p className="text-gray-500 text-center">
            <span className="font-raleway text-md">Quality Assurance Engineer</span>
          </p>

          <div className="flex justify-center gap-2 mt-6">
            {/* Social Media Cards */}
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#F2F5F9] p-4 rounded-lg hover:bg-gray-400 transition duration-300">
                <FaFacebook className="text-blue text-2xl" />
              </div>
            </a>

            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#F2F5F9] p-4 rounded-lg hover:bg-gray-400 transition duration-300">
                <FaLinkedin className="text-blue text-2xl" />
              </div>
            </a>

            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#F2F5F9] p-4 rounded-lg hover:bg-gray-400 transition duration-300">
                <FaTwitter className="text-blue text-2xl" />
              </div>
            </a>

            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <div className="bg-[#F2F5F9] p-4 rounded-lg hover:bg-gray-400 transition duration-300">
                <FaGithub className="text-blue text-2xl" />
              </div>
            </a>
          </div>

          {/* Profile Details Section */}
          <div className="p-6 pt-7 text-center bg-[#F2F5F9] rounded-xl">
            {/* Phone Section */}
            <div className="flex items-center justify-start space-x-3 mb-4">
              <img src={phoneImg} alt="Phone Icon" className="w-3 h-5" />
              <div className="flex flex-col items-start text-left">
                <p className="font-semibold text-gray-700">Phone:</p>
                <p className="text-gray-800">{phone}</p>
              </div>
            </div>

            <hr className="my-4 border-t-2 border-gray-300" /> {/* Divider Line */}

            {/* Email Section */}
            <div className="flex items-center justify-start space-x-3 mb-4">
              <img src={mailImg} alt="Mail Icon" className="w-5 h-5" />
              <div className="flex flex-col items-start text-left">
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-800">{email}</p>
              </div>
            </div>

            <hr className="my-4 border-t-2 border-gray-300" /> {/* Divider Line */}

            {/* Location Section */}
            <div className="flex items-center justify-start space-x-3 mb-4">
              <img src={locationImg} alt="Location Icon" className="w-3 h-4" />
              <div className="flex flex-col items-start text-left">
                <p className="font-semibold text-gray-700">Location:</p>
                <p className="text-gray-800">{location}</p>
              </div>
            </div>

            <hr className="my-4 border-t-2 border-gray-300" /> {/* Divider Line */}

            {/* Download Resume Button */}
            <button className="w-full mt-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
