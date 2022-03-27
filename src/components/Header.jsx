import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiMenuAlt3 } from 'react-icons/hi';

const Header = () => {
  return (
    <header className='bg-white flex items-center justify-between h-20 px-5'>
      <Link to='/'>
        <img src={logo} alt='logo' className='cursor-pointer w-12 md:w-14' />
      </Link>
      <HiMenuAlt3 className='cursor-pointer text-3xl' />
    </header>
  );
};
export default Header;
