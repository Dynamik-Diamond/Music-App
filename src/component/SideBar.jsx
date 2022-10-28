import { Link } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import { CiSearch } from 'react-icons/ci';
import { logo } from '../assets';
import { navLinks } from '../assets/Constant';
import profileLinks from '../assets/constant';

console.log(profileLinks);

export const MobileNav = () => {
  return (
    <header>
      <ul className="flex w-full max-w-6xl flex-row items-center justify-between rounded-full  border-white p-6 py-3 md:hidden">
        <li className="flex items-center gap-3 ">
          <HiMenuAlt4 fontSize="1.6rem" />
          <img src={logo} alt="logo" className="h-8" />
        </li>

        <li>
          <CiSearch fontSize="1.4rem" />
        </li>
      </ul>
    </header>
  );
};

const SideBar = () => {
  return (
    <aside className="items center hidden flex-col md:flex">
      <nav>
        <img src={logo} alt="logo" />
        <ul className="mt-8 flex flex-col items-center gap-4 rounded-full bg-darkAlt py-4 shadow-md">
          {navLinks.map((links, index) => {
            return (
              <li key={links.name} className="">
                <Link to={links.to}>
                  <img src={links.icon} alt={links.name} />
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="mt-8 flex flex-col items-center gap-4 rounded-full bg-darkAlt py-4 shadow-md">
          {profileLinks.map((links, index) => {
            return (
              <li key={links.name}>
                <Link to={links.to}>
                  <img src={links.icon} alt={links.name} />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
