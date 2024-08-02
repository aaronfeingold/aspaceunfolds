import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-4 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/ines-yupanqui7a5a4a16/"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">LinkedIn</span>
            <img
              src="/path/to/linkedin.png"
              alt="LinkedIn"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
