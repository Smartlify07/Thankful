import ImagesProvider from '@/context/ImagesProvider';
import { Outlet } from 'react-router';

const LibraryLayout = () => {
  return (
    <main>
      <ImagesProvider>
        <Outlet />
      </ImagesProvider>
    </main>
  );
};

export default LibraryLayout;
