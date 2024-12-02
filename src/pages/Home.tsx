import Hero from '../ui/Home/hero';

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      <Hero />
      <section className="py-4 w-full flex flex-col items-center"></section>
    </main>
  );
};

export default Home;
