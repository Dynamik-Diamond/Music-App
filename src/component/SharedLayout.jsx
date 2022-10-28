import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import { MobileNav } from './SideBar';

const SharedLayout = () => {
  return (
    <main className="h-screen w-full gap-4 bg-dark  py-4 text-white md:flex">
      <MobileNav />
      <SideBar />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
