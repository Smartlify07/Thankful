import Features from '../ui/Home/features';
import Hero from '../ui/Home/hero';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col 2xl:items-center">
      <div className="2xl:max-w-[1440px] flex flex-col">
        <Hero />
        <Features />
      </div>
    </main>
  );
};

export default Home;
