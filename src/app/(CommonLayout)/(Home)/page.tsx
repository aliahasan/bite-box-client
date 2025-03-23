import Banner from "@/components/modules/Home/Banner";
import Category from "@/components/modules/Home/Category";
import CustomerSection from "@/components/modules/Home/customerSection/CustomerSection";
import FeaturedMeals from "@/components/modules/Home/FeaturedMeals";
import FlashSaleSection from "@/components/modules/Home/FlashSale";
import Hero from "@/components/modules/Home/Hero";
import ProviderSection from "@/components/modules/Home/ProvidersSection/ProviderSection";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedMeals />
      <FlashSaleSection />
      <CustomerSection />
      <ProviderSection />
      <Hero />
      <div></div>
    </div>
  );
};

export default HomePage;
