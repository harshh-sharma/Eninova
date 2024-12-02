import Image from 'next/image';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      {/* Main Container with Custom Shape at the Bottom */}
      <div className="h-[655.44px] relative overflow-hidden">
        {/* Background Image */}
        <div
          className="w-full bg-cover bg-center backdrop-blur-[4.6px]"
          style={{ backgroundImage: "url('/Rectangle 1.png')" }}
        >
          <nav className="w-full bg-cover bg-center backdrop-blur-[4.6px] top-[35px] relative">
            {/* Navigation Bar */}
            <div className="h-[171px] flex items-center px-4 justify-evenly">
              {/* Left Section */}
              <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2 text-[rgb(23,44,71)]">
                  <AiFillHome size={24} />
                  <span>Home</span>
                </Link>
                <Link href="/products" className="text-[rgb(23,44,71)]">
                  Products
                </Link>
                <Link href="/projects" className="text-[rgb(23,44,71)]">
                  Projects
                </Link>
              </div>

              {/* Center Logo */}
              <div className="flex justify-center items-center">
                <Image
                  src="/logoEninova.png"
                  alt="Logo"
                  width={283}
                  height={283}
                  className="cursor-pointer"
                />
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-6">
                <Link href="/about-us" className="text-[rgb(23,44,71)]">
                  About Us
                </Link>
                <Link href="/blog" className="text-[rgb(23,44,71)]">
                  Blog
                </Link>
                <Link href="/contact-us">
                  <button className="border-2 border-[rgb(23,44,71)] text-[rgb(23,44,71)] font-semibold py-2 px-4 rounded">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Container */}
            <div className="h-[51px] flex items-center bg-white justify-center">
              <span
                className="text-[rgb(23,44,71)] font-[400] text-[20px] leading-[32.9px] text-center"
                style={{ fontFamily: 'Noto Sans Lao, sans-serif' }}
              >
                Advertise with us
              </span>
            </div>
          </nav>
        </div>

        {/* Custom SVG Shape */}
        <div className="custom-shape-divider-bottom-1733130099">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
