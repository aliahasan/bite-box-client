import Banner from "@/components/modules/Home/Banner";
import Hero from "@/components/modules/Home/Hero";
import { getCurrentUser } from "@/services/authService";

const HomePage = async () => {
  console.log(await getCurrentUser());
  return (
    <div>
      <Banner />
      <Hero />
    </div>
  );
};

export default HomePage;
