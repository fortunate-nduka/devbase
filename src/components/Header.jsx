import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import client from '../client';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
    *[_type == "category"] | order(_createdAt desc){
      _id,
      title
    }`
      )
      .then((data) => setCategories(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className='bg-white flex items-center justify-between h-20 px-5 border-b-4 border-b-[#f3f4f6]'>
      <Link to='/'>
        <img src={logo} alt='logo' className='cursor-pointer w-12 md:w-14' />
      </Link>
      <div className='flex items-center gap-7 lg:gap-10 uppercase font-medium tracking-wider'>
        <Link to='/'>Home</Link>
        <Menu as='div' className='relative inline-block text-left'>
          <div>
            <Menu.Button className='inline-flex items-center justify-center font-medium tracking-wider hover:bg-gray-50 uppercase'>
              categories
              <BsChevronDown className='ml-1 w-3' aria-hidden='true' />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-2 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none tracking-wider'>
              {categories.map((category) => (
                <div key={category._id} className='py-2'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/category/${category.title}`}
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 font-medium uppercase'
                        )}
                      >
                        {category.title}
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
};
export default Header;
