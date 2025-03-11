import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center mt-40 h-screen ">
      <BeatLoader size={30} color="green" />
    </div>
  );
};

export default Loader;
