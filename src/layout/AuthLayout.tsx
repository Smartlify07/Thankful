import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <main className="flex justify-center bg-white items-center h-screen font-poppins overflow-hidden">
      <aside className="w-full md:w-7/12 lg:w-8/12 h-screen  flex items-center justify-center">
        <Outlet />
      </aside>
    </main>
  );
};

export default AuthLayout;
