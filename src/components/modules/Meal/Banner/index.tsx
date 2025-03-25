import styles from "./banner.module.css";
const MealBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div>
      <div
        className={`${styles.banner} flex justify-center items-center relative`}
      >
        {/* Overlay */}
        <div className="bg-black/50 absolute inset-0"></div>

        {/* Text */}
        <div className="text-center text-orange-500 relative z-10">
          <h2 className="font-bold text-2xl leading-10">{title}</h2>
          <p>{path}</p>
        </div>
      </div>
    </div>
  );
};

export default MealBanner;
