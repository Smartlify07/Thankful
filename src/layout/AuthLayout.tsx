import { Outlet } from 'react-router';
import authImage from '/public/images/auth-bg.jpg';

const AuthLayout = () => {
  return (
    <main className="flex items-stretch h-screen font-poppins overflow-hidden">
      <aside className="h-screen bg-lime hidden items-center relative overflow-hidden md:w-6/12 md:flex">
        <div className="inset-0 absolute  self-start h-full w-full bg-black bg-opacity-30"></div>

        <h1 className="text-lime absolute top-20 left-6 text-5xl font-medium font-playfair-display z-[1000] italic italice tracking-tight">
          Thankful
        </h1>
        <h1 className="text-white text-5xl leading-[1.1] z-10 bottom-20 left-7 w-11/12 font-inter tracking-tight absolute font-medium">
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
