import { Outlet } from 'react-router';
import authImage from '/public/images/auth-bg.jpg';

const AuthLayout = () => {
  return (
    <main className="flex items-stretch h-screen font-poppins overflow-hidden">
      <aside className="h-screen bg-orange-500 hidden items-center relative overflow-hidden md:w-6/12 md:flex ">
        <h1 className="text-white text-5xl z-10 bottom-20 left-5 font-inter tracking-tight absolute font-medium">
          Start creating those heartfelt thank you messages today!
        </h1>
        <img
          src={authImage}
          className="h-full w-full object-cover"
          alt="Someone writing a thank you message"
        />

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </aside>

      <aside className="w-full md:w-7/12 lg:w-6/12 h-screen  flex items-center justify-center">
        <Outlet />
      </aside>
    </main>
  );
};

export default AuthLayout;
