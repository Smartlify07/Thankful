import { Outlet } from 'react-router';
import Navbar from '../ui/navbar';

const RootLayout = () => {
  return (
    <main className="font-inter flex flex-col gap-5  bg-white overflow-x-hidden">
      <Navbar />
      <Outlet />
    </main>
  );
};

export default RootLayout;
