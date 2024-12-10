import { useState } from 'react';
import namelogo from '../components/images/namelogo.svg'; // Import the SVG file

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
  };

  return (
    <header className="p-4 bg-[#F2F5F9] dark:bg-gray-800 flex justify-between items-center sm:px-8 sm:py-4 px-4 py-2 max-w-full mb-4">
      {/* Logo Section */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-start mt-5 mb-2 sm:mb-0">
        <img src={namelogo} alt="Jeevan Kumar Logo" className="w-32 h-auto sm:w-40 md:w-44" />
      </div>

      {/* Theme Toggle Button */}
      <div className="w-full sm:w-auto flex justify-center sm:justify-end mt-2 sm:mt-0 items-center">
        <button
          onClick={toggleTheme}
          className={`text-2xl ${isDark ? 'text-white' : 'text-[#FF9C1A]'} hover:text-[#EC1B09] transition-colors`}
        >
          {isDark ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
