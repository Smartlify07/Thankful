import { Outlet } from 'react-router';
import authVid from '/public/videos/authvid-2.mp4';

const AuthLayout = () => {
  return (
    <main className="flex items-stretch h-screen font-poppins overflow-hidden">
      <aside className="h-screen bg-orange-500 w-4/12 flex items-center relative overflow-hidden">
        <h1 className="text-white text-5xl -rotate-[30deg] z-10 top-14 left-5 font-playfair italic absolute font-medium">
          Thankful
        </h1>
        <video
          preload="auto"
          className="h-full w-full object-cover relative"
          autoPlay
          loop
          muted
        >
          <source src={authVid} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </aside>

      <aside className="w-8/12 h-screen  flex items-center justify-center">
        <Outlet />
      </aside>
    </main>
  );
};

export default AuthLayout;
