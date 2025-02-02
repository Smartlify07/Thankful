import { selectUser } from '@/redux/features/auth/authSlice';
import Features from '@/ui/Home/features';
import Footer from '@/ui/Home/footer';
import Hero from '@/ui/Home/hero';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const Home = () => {
  const user = useSelector(selectUser);
  if (user) {
    return <Navigate to={'/library'} />;
  } else {
    return (
      <main className="min-h-screen flex flex-col 2xl:items-center">
        <div className="2xl:max-w-[1440px] flex flex-col">
          <Hero />
          <Features />
          <Footer />
        </div>
      </main>
    );
  }
};

export default Home;
