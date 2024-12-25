import Button from '../button';

const Hero = () => {
  return (
    <section className="h-hero flex flex-col justify-center  items-stretch bg-opacity-20 font-rubikk relative">
      <header className="flex flex-col self-center gap-5 items-center   max-w-[900px]">
        <h1 className="text-7xl text-[#212427] tracking-tighter lg:leading-[1.2] font-playfair-display text-center">
          Celebrate Life's Moments With <span className="italic">Thankful</span>
        </h1>
        <h2 className="text-[#888] text-2xl font-normal font-inter ">
          Send heartfelt messages that make memories last{' '}
          <span className="text--green">forever</span>.
        </h2>

        <div className="mt-5">
          <Button
            style={{
              borderRadius: '12px',
              padding: '16px 16px',
              width: '160px',
            }}
            className="text-[#111] font-medium font-rubikk text-base bg-lime"
            text="Get Started"
          />
        </div>
      </header>
    </section>
  );
};

export default Hero;
