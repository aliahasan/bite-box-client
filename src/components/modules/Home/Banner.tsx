import Image from "next/image";
import banner from "../../../assets/hero.png";
import SearchBar from "./SearchBar";
const Banner = () => {
  return (
    <div className="bg-[#F5F5F5]  md:px-0">
      <Image
        className="w-full max-h-[600px] object-cover"
        src={banner}
        alt="banner"
      />
      <div className="px-2">
        <div className="md:px-32 container relative mx-auto bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center ">
          <h1 className="text-5xl font-bold tracking-tight text-orange-600">
            Tuck into a takeway today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
          <div className="px-2 md:px-0">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
