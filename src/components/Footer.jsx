const Footer = () => {
  return (
    <div className='justify-self-end mt-[5rem] shadow-2xl flex items-center justify-center w-full bg-white h-14 text-xs font-medium flex-col sm:flex-row gap-y-1'>
      &copy; 2022 | All rights reserved{' '}
      <div className='hidden sm:inline-block sm:pl-1'>|</div>
      <div className='sm:pl-1'>
        Developed with{' '}
        <i
          className='em em-hearts'
          aria-label='BLACK HEART SUIT'
        ></i>{' '}
        by
        <span className='text-blue-500 underline pl-1'>iamfortunate</span>
      </div>
    </div>
  );
};
export default Footer;
