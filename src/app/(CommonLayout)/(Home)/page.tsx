import Banner from "@/components/modules/Home/Banner";
import CustomerSection from "@/components/modules/Home/customerSection/CustomerSection";
import Hero from "@/components/modules/Home/Hero";
import ProviderSection from "@/components/modules/Home/ProvidersSection/ProviderSection";
import { getCurrentUser } from "@/services/authService";

const HomePage = async () => {
  console.log(await getCurrentUser());
  return (
    <div>
      <Banner />
      <CustomerSection />
      <ProviderSection />
      <div className="my-10 md:my-12 lg:my-16">
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
