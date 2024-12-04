import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center space-y-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:text-gray-400 transition">
            Linkdin Link 
          </a>
          <p className="hover:text-gray-400 transition">
            created by ~ Abdullah Eren
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
