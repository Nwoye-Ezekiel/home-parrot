import HeroBackground from 'assets/images/hero.jpg';
import AnimateOnScroll from 'components/animate-on-scroll';
import { KeyboardDoubleArrowDown } from '@mui/icons-material';

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
      className="h-screen w-full bg-no-repeat bg-[57.5%_50%] lg:bg-center bg-cover pt-40 lgMd:pt-48 px-10 pb-10 md:px-16 md:pb-16 lg:pb-20 lg:px-20 relative z-10"
    >
      <div className="space-y-1 lg:space-y-1.5 w-[60%]">
        <AnimateOnScroll refIndex={0}>
          <h1 className="font-backline text-7xl md:text-8xl lg:text-[7rem] text-primary rotate-2 max-w-[4ch] lg:max-w-none">
            Home Parrot
          </h1>
        </AnimateOnScroll>
        <AnimateOnScroll refIndex={2}>
          <p className="text-white md:text-xl lg:text-2xl max-w-[20ch] lg:max-w-none">
            Your Loudest Advocate for Premium Properties!
          </p>
        </AnimateOnScroll>
      </div>{' '}
      <div className="absolute bottom-0 left-0 flex justify-center items-center w-full p-4">
        <div
          onClick={() => scrollToSection('about')}
          className="bg-primary p-2 animate-bounce rounded-full shadow-md hover:shadow-lg duration-150 cursor-pointer"
        >
          <KeyboardDoubleArrowDown className="text-black text-2xl" />
        </div>
      </div>
    </div>
  );
}
