import { NavLink } from 'react-router-dom';
import { FaHome, FaFileAlt, FaEnvelope, FaSuitcase } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute right-0 sm:right-20 top-20 sm:top-24 p-2 pl-4 pr-4 mt-7 bg-[#F2F5F9] dark:bg-gray-700 rounded-lg shadow-xl border-2 mb-15 w-full sm:w-auto flex justify-center sm:justify-end">
      <div className="flex flex-row space-x-4 h-15 overflow-x-auto sm:overflow-visible">
        {/* Home */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white p-2 flex flex-col items-center rounded-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white p-2 flex flex-col items-center rounded-md'
          }
        >
          <FaHome className="text-2xl w-20" />
          <span className="mt-0">Home</span>
        </NavLink>

        {/* Resume */}
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white p-3 flex flex-col items-center rounded-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white p-3 flex flex-col items-center rounded-md'
          }
        >
          <FaFileAlt className="text-2xl w-20" />
          <span className="mt-0">Resume</span>
        </NavLink>

        {/* Work */}
        <NavLink
          to="/work"
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white p-3 flex flex-col items-center rounded-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white p-3 flex flex-col items-center rounded-md'
          }
        >
          <FaSuitcase className="text-2xl w-20 rounded-xl" />
          <span className="mt-0">Work</span>
        </NavLink>

        {/* Contact */}
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? 'bg-gradient-to-r from-[#FF9C1A] to-[#E80505] text-white p-3 flex flex-col items-center rounded-md'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white p-3 flex flex-col items-center rounded-md'
          }
        >
          <FaEnvelope className="text-2xl w-20" />
          <span className="mt-0">Contact</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
