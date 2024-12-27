import { useNavigate } from 'react-router';
import Button from '../button';

const Hero = () => {
  const navigate = useNavigate();
  const handleGotoSignUp = () => {
    navigate('/signup');
  };

  return (
    <section className="px-5 md:px-0 h-hero-sm  md:h-hero flex flex-col font-inter justify-center items-stretch bg-opacity-20  relative">
      <header className="flex flex-col self-center gap-5 items-center md:max-w-[900px]">
        <h1 className="text-5xl md:text-7xl text-[#212427] tracking-tighter leading-[1.3] lg:leading-[1.2] font-playfair-display text-center">
          Celebrate Life's Moments With{' '}
          <span className="italic text-lime md:text-inherit">Thankful</span>
        </h1>
        <h2 className="text-[#888] text-center text-xl md:text-2xl font-normal  ">
          Send heartfelt messages that make memories last{' '}
          <span className="text--green">forever</span>.
        </h2>

        <div className="mt-5">
          <Button
            onClick={handleGotoSignUp}
            style={{
              borderRadius: '12px',
              padding: '16px 16px',
              width: '160px',
            }}
            className="text-[#111] font-semibold  text-base bg-lime"
            text="Get Started"
          />
        </div>
      </header>
    </section>
  );
};

export default Hero;
