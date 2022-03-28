import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center text-2xl lg:text-3xl gap-2'>
      <div className='font-bold tracking-widest'>404 {' | '} Page Not Found</div>
      <Link to="/" className='underline text-xl'>Go to Homepage</Link>
    </div>
  );
};
export default NotFound;
