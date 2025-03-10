import nodata from "@/assets/nodata.png";
import Image from "next/image";
const NoData = ({ message }: { message: string }) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Image
        src={nodata}
        alt="No Data"
        className="w-64 md:w-72 lg:w-80"
        width={100}
        height={100}
      />

      <p className="text-gray-500 text-sm md:text-base text-center px-4 md:px-8">
        {message}
      </p>
    </div>
  );
};

export default NoData;
