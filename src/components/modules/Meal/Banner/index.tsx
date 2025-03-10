import styles from "./banner.module.css";
const MealBanner = ({ title, path }: { title: string; path: string }) => {
  return (
    <div
      className={`${styles.banner} flex justify-center items-center relative`}
    >
      <div className="text-center text-white ">
        <h2 className="font-bold text-2xl leading-10">{title}</h2>
        <p>{path}</p>
      </div>
    </div>
  );
};

export default MealBanner;
