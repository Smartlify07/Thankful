import { Link, useNavigate } from 'react-router';
import Button from './button';
import * as motion from 'motion/react-client';

const Navbar = () => {
  const navigate = useNavigate();
  const handleGotoSignUp = () => {
    navigate('/signup');
  };

  return (
    <nav className="flex items-center  bg-opacity-20 w-full font-inter  py-10 justify-around">
      <Link
        to="/"
        className="text-4xl tracking-tight text-charcoal-gray italic font-playfair-display"
      >
        Thankful
      </Link>

      <div className="flex items-center py-3 px-8 gap-8 text-lg font-medium bg-opacity-40 rounded-xl text-outer-space bg-lime ">
        <motion.span
          className="py-2 px-0 rounded-lg"
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

      <Button
        whileHover={{ backgroundColor: '' }}
        onClick={handleGotoSignUp}
        style={{ borderRadius: '12px', padding: '16px 16px', width: '160px' }}
        className="text-[#111] font-medium font-rubikk text-base bg-lime"
        text="Get Started"
      />
    </nav>
  );
};

export default Navbar;
