import { Header, Footer } from '@components/layout';
import CursorFollower from '@components/CursorFollower';

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Header />
      <div className="container relative flex flex-col items-center justify-between gap-10 py-10 text-center md:flex-row md:text-left md:max-lg:gap-5 landscape:flex-row landscape:text-left">
        <div className="order-1 md:order-none landscape:order-none">
          <p className="mb-3 font-medium">Hey 👋, i’m</p>
          <h1 className="-ml-1 mb-5 whitespace-nowrap font-black uppercase [font-size:clamp(3rem,calc(9vw+1px),8rem)] [line-height:0.8]">
            <span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Front</span>end
            </span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">Dev</span>
            eloper
          </h1>
          <p className="max-w-[440px] md:min-w-[440px] md:max-w-[600px]">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Hi</span>ghly innovative,{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">re</span>sourceful,{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">m</span>otivat
            <span className="bg-gradient-primary bg-clip-text text-transparent">e</span>d and qualified.
            <br />
            Balancing tech expertise, embracing holistic business understanding for mutual development.
          </p>
          <a href="/Kadchenko_CV_Frontend_position.pdf" download className="btn-primary mt-5 w-[120px] md:w-[180px]">
            Download CV
          </a>
        </div>
        <div className="relative flex aspect-square w-[30vh] min-w-[200px] max-w-[400px] scale-x-[-1] items-center justify-center md:w-full md:max-w-[500px]">
          <div className="h-full w-full rounded-full bg-gradient-primary [mask:radial-gradient(circle,rgba(255,255,255,0)_70%,rgba(63,94,251,1)_69%,rgba(255,255,255,0)_100%)]" />
          <img
            src="/photo.png"
            className="absolute h-[80%] w-[80%] rounded-full object-cover object-[0,80%] grayscale"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
