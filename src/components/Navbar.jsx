import React, { useState, useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { useLocation } from 'react-router-dom'; // Import useLocation
import lg from '../assets/icon.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // Use useLocation hook

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`fixed w-full transition-all z-[9999999999999] duration-300 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-white'} border-gray-200`} >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center ">
            <img src={lg} className="h-8" alt="Logo" />
            <h1 className='text-lg font-bold'>GENVID</h1>
          </Link>
          <div className="flex md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
            <Link to="/login" type="button" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Get started</Link>
            <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600   " aria-controls="navbar-cta" aria-expanded="false">
              <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle " />
                <div className="drawer-content">
                  <label htmlFor="my-drawer" className="drawer-button w-full flex items-center justify-center  "><CiMenuFries className='font-bold  text-indigo-800 text-lg' /></label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu bg-indigo-950 text-base-content min-h-full w-80 p-4">
                    <Link to="/" className="flex items-center mb-20 ">
                      <img src={lg} className="h-8" alt="Logo" />
                      <h1 className='text-lg font-bold text-white '>GENVID</h1>
                    </Link>
                    <li>
                      <Link to="/" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white bg-indigo-700 md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`} aria-current="page">Home</Link>
                    </li>
                    <li>
                      <Link to="/about" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/about' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`}>About</Link>
                    </li>
                    <li>
                      <Link to="/pricing" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/pricing' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`}>Pricing</Link>
                    </li>
                    <li>
                      <Link to="/contact" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/contact' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`}>Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className={`flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${isScrolled ? 'md:bg-white' : 'md:bg-transparent'} dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}>
              <li>
                <Link to="/" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white bg-indigo-700 md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`} aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/about' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white bg-indigo-700 md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`}>About</Link>
              </li>
              <li>
                <Link to="/pricing" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/pricing' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white bg-indigo-700 md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`}>Pricing</Link>
              </li>
              <li>
                <Link to="/contact" className={`block py-2 px-3 md:p-0 rounded ${location.pathname === '/contact' ? (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white bg-indigo-700 md:bg-transparent md:text-indigo-700 md:dark:text-indigo-500') : (isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-gray-900 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700')}`}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
