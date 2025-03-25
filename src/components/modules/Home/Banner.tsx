import Image from "next/image";
import banner from "../../../assets/hero.png";
import SearchBar from "./SearchBar";

const Banner = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <Image
        className="w-full h-[60vh] object-cover"
        src={banner}
        alt="banner"
      />
      <div className="px-2">
        <div className="md:px-32 container relative mx-auto bg-white rounded-lg shadow-sm py-8 flex flex-col gap-5 text-center w-full">
          <h1 className="text-4xl font-bold tracking-tight text-orange-600">
            Tuck into a takeaway today
          </h1>
          <span className="text-lg">Food is just a click away!</span>
          {/* SearchBar should take full width */}
          <div className="w-full px-2">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
