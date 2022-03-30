import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-2xl lg:text-3xl gap-3 lg:gap-5'>
      <div className='font-black tracking-widest'>
        404 {' | '} Page Not Found
      </div>
      <div className='flex items-center gap-2'>
        <Link to='/' className='text-blue-500 underline text-xl lg:text-2xl'>
          Go to Homepage
        </Link>
        <BsArrowRight className='text-blue-500 text-xl lg:text-2xl' />
      </div>
    </div>
  );
};
export default NotFound;
