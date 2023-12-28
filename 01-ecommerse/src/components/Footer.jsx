function Footer() {
  return (
    <div className='bg-gradient-to to-black from-slate-400 m-5'>
      <div className='flex w-auto  bg-black text-white text-2xl'>
        <p>
          <b>Disclaimer:</b>This project is a personal, non-commercial created
          for educational purposes and to showcase web development skills. It is
          not an official Amazon website, and it is not affiliated with or
          endorsed by Amazon.com, Inc.
        </p>
      </div>
      <footer className='bg-gray-800 text-white p-5'>
        <div className='flex justify-evenly'>
          <div title='Get to Know Us' className='text-lg'>
            <p className='  font-bold'>Get to Know Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>

          <div title='connect with us' className='text-lg'>
            <p className='  font-bold'>Connect with Us</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div title='Make Money with Us' className='text-lg'>
            <p className=' font-bold'>Make Money with Us</p>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and Build Your Brand</p>
            <p>Amazon Global Selling</p>
            <p>Become an Affiliate</p>
            <p>Fulfillment by Amazon</p>
            <p>Advertise Your Products</p>
            <p>Amazon Pay on Merchants</p>
          </div>

          <div title='Let Us Help You' className='text-lg'>
            <p className='font-bold'>Let Us Help You</p>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Returns Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </div>
        </div>

        {/* Developer Section */}
        <div className='flex flex-col items-center'>
          <img
            src='../images/amazon.png'
            className='w-[300px] h-30 mt-5'
            alt='logo'
          />
          <div className='flex flex-row space-x-7 items-center mt-4'>
            <a
              className='text-blue-400 hover:underline text-xl'
              href='https://github.com/uday-kathari'
              target='_blank'
              rel='noopener noreferrer'
            >
              Uday Kathari
            </a>
            <p className='text-lg'>&copy; 2023</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
