import { Drawer } from '@mui/material';
import Navigation from 'components/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import { Close, KeyboardDoubleArrowDown } from '@mui/icons-material';

export default function Layout({ children }: { children: ReactNode }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [styleNav, setStyleNav] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [styleHeader, setStyleHeader] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const hasScrolled = scrollY > 0;
    const passedViewportHeight = scrollY >= window.innerHeight;

    setStyleHeader(hasScrolled);
    setShowButton(passedViewportHeight);
    setStyleNav(passedViewportHeight);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className={`flex justify-center items-center space-x-5 px-10 md:px-16 lg:px-20 fixed top-0 left-0 w-full h-20 z-[100] bg-transparent ${
          styleHeader ? 'duration-150 backdrop-blur-[2.25rem]' : 'duration-0 backdrop-blur-0'
        }`}
      >
        <div className="z-50 flex justify-between items-center lg:justify-start lg:space-x-14 w-full">
          <Logo className="w-10 md:w-11 lg:w-12" />
          <div className="hidden lg:block">
            <Navigation styleNav={styleNav} />
          </div>
          <div className="lg:hidden" onClick={() => setOpenMenu(true)}>
            <div className="flex flex-col space-y-0.5 w-5">
              <span
                className={`w-1/2 h-[3px] rounded-full mr-auto ${
                  styleNav ? 'bg-black' : 'bg-white'
                }`}
              ></span>
              <span
                className={`w-full h-[3px] rounded-full ${styleNav ? 'bg-black' : 'bg-white'}`}
              ></span>
              <span
                className={`w-1/2 h-[3px] rounded-full ml-auto ${
                  styleNav ? 'bg-black' : 'bg-white'
                }`}
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col">{children}</div>
      <div
        className={`fixed bottom-0 right-0 p-4 lg:p-5 z-30 transition-opacity duration-500 ${
          showButton ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="bg-primary p-2 rounded-full shadow-md hover:shadow-lg duration-150 cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <KeyboardDoubleArrowDown className="text-black text-2xl rotate-180" />
        </div>
      </div>
      <Drawer
        className="lg:hidden"
        open={openMenu}
        anchor="left"
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          className: 'p-8 gap-10 flex flex-col w-full max-w-[300px] bg-primary',
        }}
      >
        <div className="flex justify-end">
          <Close
            className="bg-black text-white rounded-full p-1"
            onClick={() => setOpenMenu(false)}
          />
        </div>
        <Navigation closeMenu={() => setOpenMenu(false)} />
      </Drawer>
    </div>
  );
}
