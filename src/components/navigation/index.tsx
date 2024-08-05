import { useMediaQuery } from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';
import AnimateOnScroll from 'components/animate-on-scroll';

export default function Navigation({
  styleNav,
  closeMenu,
}: {
  styleNav?: boolean;
  closeMenu?: () => void;
}) {
  const navigationLinks = ['home', 'about', 'listings'];
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    closeMenu?.();
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-center gap-5 lg:gap-8">
      {navigationLinks.map((link, index) => (
        <AnimateOnScroll key={index} refIndex={isDesktop ? index : index++}>
          <button
            className="flex justify-between items-center w-full bg-black/[.1] p-3 py-2.5 pr-1 rounded lg:bg-transparent lg:p-0"
            onClick={() => scrollToSection(link)}
          >
            <span
              className={`capitalize font-clash font-semibold text-lg hover:text-primary duration-150 text-black ${
                !styleNav ? 'lg:text-white' : ''
              }`}
            >
              {link}
            </span>
            <KeyboardArrowRight className="lg:hidden" />
          </button>
        </AnimateOnScroll>
      ))}
    </div>
  );
}
