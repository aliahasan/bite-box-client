import Image from "next/image";
import banner from "../../../assets/hero.png";
const Banner = () => {
  return (
    <div>
      <Image
        className="w-full max-h-[600px] object-cover"
        src={banner}
        alt="banner"
      />
    </div>
  );
};

export default Banner;
