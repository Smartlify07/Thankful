import { Outlet } from 'react-router';
import Navbar from '../ui/navbar';

const RootLayout = () => {
  return (
    <main className="font-inter   flex flex-col  bg-white overflow-x-hidden h-screen">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
