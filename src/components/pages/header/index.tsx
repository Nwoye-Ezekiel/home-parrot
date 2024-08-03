import { ReactComponent as Logo } from 'assets/images/logo.svg';

const navigationLinks = [
  {
    name: 'about',
  },
  {
    name: 'listings',
  },
];

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center space-x-5 px-20 absolute top-0 left-0 w-full h-20 z-20">
      <div className="grid grid-cols-10 items-center w-full">
        <Logo className="w-10" />
        <div className="col-span-8 text-center space-x-5">
          {navigationLinks.map((link, index) => (
            <button key={index} onClick={() => scrollToSection(link.name)}>
              <span className="capitalize font-clash font-semibold text-lg text-secondary">
                {link.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
