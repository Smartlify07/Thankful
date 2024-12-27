import { useNavigate } from 'react-router';
import Button from '../button';

const Footer = () => {
  const navigate = useNavigate();
  const handleGotoSignUp = () => {
    navigate('/signup');
  };

  return (
    <footer className="py-10 flex bg-black items-center justify-center">
      <div className="2xl:max-w-[1440px] flex flex-col items-center gap-5 md:gap-7">
        <header>
          <h1 className="text-lime text-center text-5xl font-playfair-display italic tracking-tight md:text-7xl">
            Thankful
          </h1>
        </header>
        <Button
          onClick={handleGotoSignUp}
          style={{
            borderRadius: '12px',
            padding: '16px 16px',
            width: '160px',
          }}
          className="text-[#111] font-semibold  text-base bg-lime"
          text="Get Started"
        />{' '}
      </div>
    </footer>
  );
};

export default Footer;
