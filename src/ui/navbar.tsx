import { Link, useNavigate } from 'react-router';
import Button from './button';
import * as motion from 'motion/react-client';
import { useState } from 'react';
import MobileNavbar from './mobile-navbar';
import { AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleGotoSignUp = () => {
    navigate('/signup');
  };
  const toggleNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex items-center relative bg-opacity-20 w-full font-inter py-6  md:py-10 justify-around">
      <Link
        to="/"
        className="text-3xl z-20 md:text-4xl tracking-tight text-charcoal-gray italic font-playfair-display"
      >
        Thankful
      </Link>

      <div
        className={`hidden md:flex items-center w-full py-3 font-medium bg-white rounded-b-lg shadow-md   text-outer-space backdrop:blur-xl md:shadow-none md:bg-lime md:bg-opacity-20 md:w-auto md:flex-row md:items-center md:px-8 md:gap-8 md:text-lg md:rounded-xl`}
      >
        <motion.span
          className="py-2 px-0 rounded-lg "
          whileHover={{
            backgroundColor: 'rgba(200,239,58,0.4)',
            padding: '8px 9px',
          }}
        >
          <Link className="py-4 px-2" to="#">
            About
          </Link>
        </motion.span>
        <motion.span
          className="py-2 px-0 rounded-lg"
          whileHover={{
            backgroundColor: 'rgba(200,239,58,0.4)',
            padding: '8px 9px',
          }}
        >
          <Link className="py-2 px-2" to="#features">
            Features
          </Link>
        </motion.span>
        <motion.span
          className="py-2 px-0 rounded-lg"
          whileHover={{
            backgroundColor: 'rgba(200,239,58,0.4)',
            padding: '8px 9px',
          }}
        >
          <Link className="py-2 px-2" to="#contact">
            Contact
          </Link>
        </motion.span>
      </div>

      <AnimatePresence initial={false} mode="popLayout">
        {<MobileNavbar isOpen={isOpen} />}
      </AnimatePresence>

      <Button
        onClick={handleGotoSignUp}
        style={{ borderRadius: '12px', padding: '16px 16px', width: '' }}
        className="text-[#111] hidden md:block font-semibold  text-base bg-lime w-auto md:w-[160px]"
        text="Get Started"
      />

      <Button
        onClick={toggleNav}
        className="bg-neutral-100 z-20 w-[50px] h-[50px] relative rounded-full flex flex-col items-center justify-center gap-2 md:hidden"
      >
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0, top: isOpen ? 20 : 0 }}
          className={`bg-black rounded-sm w-[30px] h-[2px] ${
            isOpen ? 'absolute' : ''
          }`}
        ></motion.span>
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0 }}
          className="bg-black rounded-sm w-[30px] h-[2px]"
        ></motion.span>
      </Button>
    </nav>
  );
};

export default Navbar;
