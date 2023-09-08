import Menu from './Menu';
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="flex lg:flex-col flex-row justify-between p-4 lg:h-screen lg:pt-2.94 lg:pr-4.16 lg:pl-3.53 lg:space-y-28 w-full">
      <nav className="flex flex-col space-y-2 text-nav-default font-medium text-sm lg:space-y-8  lg:flex relative w-full">
        <Logo />
        <Menu />
      </nav>
    </div>
  );
};

export default Navbar;
