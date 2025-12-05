import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <p>© {new Date().getFullYear()} Matías Martínez Boylston</p>
    </footer>
  );
};

export default Footer;
