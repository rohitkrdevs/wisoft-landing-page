import React, { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const headerRef = useRef(null); // Reference to entire header

  // Handle scroll for sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // If mobile menu closes, also close dropdowns
  useEffect(() => {
    if (!menuOpen) {
      setActiveDropdown(null);
    }
  }, [menuOpen]);

  // Click outside → close everything
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // ESC key → close everything
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Clicking another dropdown closes the previous one
  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={`${isScrolled || activeDropdown ? 'pt-[94px]' : ''}`}>
      <header
        ref={headerRef}
        className={`w-full pt-[2px] pb-[2px] px-4 sm:px-6 lg:px-[58px] ${
          isScrolled || activeDropdown
            ? 'fixed top-0 z-50 bg-global-3 shadow-md transition-all duration-300'
            : 'relative bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="relative flex justify-between items-center w-full">
            {/* Left - Phone Info */}
            <div className="hidden lg:flex flex-row gap-[4px] sm:gap-[8px] justify-center items-start w-auto">
              <img src="/images/img_vector.svg" className="w-[14px] h-[14px]" alt="phone" />
              <span className="text-[10px] sm:text-[14px] font-montserrat font-semibold leading-[14px] sm:leading-[18px] text-left uppercase text-global-6 self-center w-auto">
                042 - 123456
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block lg:hidden p-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="block w-5 h-0.5 bg-global-6 mb-1"></span>
                <span className="block w-5 h-0.5 bg-global-6 mb-1"></span>
                <span className="block w-5 h-0.5 bg-global-6"></span>
              </div>
            </button>

            {/* Navigation */}
            <nav
              className={`${menuOpen ? 'block' : 'hidden'} lg:flex absolute lg:relative top-full lg:top-auto left-0 lg:left-auto w-full lg:w-auto bg-global-3 lg:bg-transparent z-50 lg:z-auto`}
            >
              <div className="ml-4 lg:ml-20 flex flex-col lg:flex-row gap-4 lg:gap-[48px] justify-start lg:justify-center items-start lg:items-center w-full lg:w-auto px-4 sm:px-6 lg:px-[58px] py-4 lg:py-0">
                {/* LEFT MENU ITEMS */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[34px] justify-start items-start w-full lg:w-auto">
                  <button className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200">
                    Home
                  </button>

                  {/* About Dropdown */}
                  <div className="w-full lg:w-auto relative">
                    <button
                      onClick={() => toggleDropdown('about')}
                      className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200"
                    >
                      <span className="flex items-center">
                        About
                        <svg
                          className={`w-3 h-3 ml-1 block lg:hidden transition-transform duration-300 ${
                            activeDropdown === 'about' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {activeDropdown === 'about' && (
                      <div className="flex flex-col bg-[#121212] z-50 min-w-[200px] py-2 whitespace-nowrap lg:absolute lg:left-0 lg:top-full lg:mt-[32px]">
                        <button className="px-4 py-2 text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200 text-left">
                          Our Team
                        </button>
                        <button className="px-4 py-2 text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200 text-left">
                          Our Companies
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Services Dropdown */}
                  <div className="w-full lg:w-auto relative">
                    <button
                      onClick={() => toggleDropdown('services')}
                      className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200"
                    >
                      <span className="flex items-center">
                        Our Services
                        <svg
                          className={`w-3 h-3 ml-1 block lg:hidden transition-transform duration-300 ${
                            activeDropdown === 'services' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {activeDropdown === 'services' && (
                      <div className="flex flex-col bg-[#121212] z-50 min-w-[200px] py-2 whitespace-nowrap lg:absolute lg:left-0 lg:top-full lg:mt-[32px]">
                        {[
                          'Staff Accommodation',
                          'Property Brokerage',
                          'Property Marketing',
                          'Property Services',
                          'Property Appraisal',
                          'Property Investment',
                        ].map((item, i) => (
                          <button
                            key={i}
                            className="px-4 py-2 text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200 text-left"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* LOGO CENTER */}
                <div className="hidden lg:flex justify-center items-center my-4 lg:my-0">
                  <img
                    src="/images/img_logo_square_with_padding.png"
                    className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] lg:w-[90px] lg:h-[90px]"
                    alt="logo"
                  />
                </div>

                {/* RIGHT MENU ITEMS */}
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-[36px] justify-start items-start w-full lg:w-auto">
                  {/* Properties Dropdown */}
                  <div className="w-full lg:w-auto relative">
                    <button
                      onClick={() => toggleDropdown('properties')}
                      className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200"
                    >
                      <span className="flex items-center">
                        Properties
                        <svg
                          className={`w-3 h-3 ml-1 block lg:hidden transition-transform duration-300 ${
                            activeDropdown === 'properties' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {activeDropdown === 'properties' && (
                      <div className="flex flex-col bg-[#121212] z-50 min-w-[200px] py-2 whitespace-nowrap lg:absolute lg:left-0 lg:top-full lg:mt-[32px]">
                        <button className="px-4 py-2 text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200 text-left">
                          Labour Camps
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Resources Dropdown */}
                  <div className="w-full lg:w-auto relative">
                    <button
                      onClick={() => toggleDropdown('resources')}
                      className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200"
                    >
                      <span className="flex items-center">
                        Resources
                        <svg
                          className={`w-3 h-3 ml-1 block lg:hidden transition-transform duration-300 ${
                            activeDropdown === 'resources' ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </button>
                    {activeDropdown === 'resources' && (
                      <div className="flex flex-col bg-[#121212] z-50 min-w-[200px] py-2 whitespace-nowrap lg:absolute lg:left-0 lg:top-full lg:mt-[32px]">
                        {['News', 'FAQ', 'Infographics'].map((item, i) => (
                          <button
                            key={i}
                            className="px-4 py-2 text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200 text-left"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <button className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 hover:text-global-5 hover:underline transition-all duration-200">
                    Blog
                  </button>
                </div>
              </div>
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:block">
              <Button
                variant="gradient"
                size="medium"
                className="text-[12px] sm:text-[14px] font-montserrat font-semibold uppercase text-global-6 pt-[12px] pb-[12px] px-[24px] sm:pt-[16px] sm:pb-[16px] sm:px-[34px] 
              bg-[linear-gradient(151deg,#b8943e_0%,_#976621_100%)] 
              hover:bg-[linear-gradient(151deg,#976621_0%,_#b8943e_100%)] 
              rounded-[4px] transition-all duration-500 ease-in-out"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
