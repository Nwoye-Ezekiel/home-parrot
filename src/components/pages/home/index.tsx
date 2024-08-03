import HeroBackground from 'assets/images/hero.jpg';
import Header from '../header';
import AnimateOnScroll from 'components/animate-on-scroll';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
      className="p-5 h-screen w-full bg-no-repeat bg-center bg-cover pt-40 px-20 relative z-10"
    >
      <Header />
      <div className="-space-y-3 w-[60%]">
        <AnimateOnScroll refIndex={0}>
          <h1 className="font-backline text-[7rem] text-secondary rotate-2">Home Parrot</h1>
        </AnimateOnScroll>
        <AnimateOnScroll refIndex={1}>
          <p className="text-white text-2xl">Your Loudest Advocate for Premium Properties!</p>
        </AnimateOnScroll>
      </div>
    </div>
  );
}
