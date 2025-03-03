import Image from "next/image";
import appDownloadImage from "../../../assets/appDownload.png";
import landingImage from "../../../assets/landing.png";
import SearchBar from "./SearchBar";
const Hero = () => {
  return (
    <div className="flex flex-col gap-12 container mx-auto px-2 md:px-0">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-10">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <div className="px-2 md:px-0">
          <SearchBar />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <Image src={landingImage} alt="landing-image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the BiteBox App for faster ordering and personalised
            recommendations
          </span>
          <Image src={appDownloadImage} alt="appDownloadImage" />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
