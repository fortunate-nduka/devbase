import logo from '../assets/logo.png';

const Loading = () => {
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white w-full flex items-center justify-center'>
      <img src={logo} alt='logo' className='w-20 lg:w-24' />
    </div>
  );
};
export default Loading;
