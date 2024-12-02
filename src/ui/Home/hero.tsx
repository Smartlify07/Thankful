import { BsEnvelopeHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router';

const Hero = () => {
  const navigate = useNavigate();
  const handleGotoSignUp = () => {
    navigate('/signup');
  };
  return (
    <header className="flex flex-col gap-10 font-raleway px-3  mt-24 md:mt-0 md:px-0 items-center ">
      <div className="envelope relative">
        <div className="top-[90px] absolute"></div>
      </div>
      <div className="flex flex-col  gap-2 md:gap-5  items-center">
        <h1 className="text-3xl  text-center w-full md:w-full md:text-6xl font-semibold py-1 text-transparent bg-clip-text  bg-gradient-to-r from-warmorange to-pink-500   ">
          Spread the gratitude
        </h1>
        <p className="text-base md:text-2xl w-11/12 text-neutral-500 font-normal text-center">
          Start saying thank you to those who've helped you in your tech
          journey.🛣️
        </p>

        <div className="flex items-center w-8/12 md:w-auto  gap-4 my-6 md:my-4">
          <button
            onClick={handleGotoSignUp}
            className="rounded-full py-3 w-full text-lg h-[54px] md:w-[250px] bg-warmorange text-center font-medium font-raleway text-white flex items-center justify-center gap-3"
          >
            Get Started Now{' '}
            <BsEnvelopeHeart size={24} className="text-offwhite" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
