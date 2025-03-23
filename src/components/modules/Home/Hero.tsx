import Image from "next/image";
import appDownloadImage from "../../../assets/appDownload.png";
import landingImage from "../../../assets/landing.png";
const Hero = () => {
  return (
    <div className="my-24">
      <div className="flex flex-col gap-12 container mx-auto px-2 md:px-0">
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
      </div>
    </div>
  );
};

export default Hero;
