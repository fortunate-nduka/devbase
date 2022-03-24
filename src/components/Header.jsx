import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header className='flex items-center justify-between h-20 p-2'>
      <Link to='/'>
        <img src={logo} alt='logo' className='cursor-pointer w-14' />
      </Link>
      <GiHamburgerMenu className='cursor-pointer text-3xl' />
    </header>
  );
};
export default Header;
