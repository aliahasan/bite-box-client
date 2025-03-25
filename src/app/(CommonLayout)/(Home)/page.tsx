import Banner from "@/components/modules/Home/Banner";
import Category from "@/components/modules/Home/Category";
import CustomerSection from "@/components/modules/Home/customerSection/CustomerSection";
import FeaturedMeals from "@/components/modules/Home/FeaturedMeals";
import FlashSaleSection from "@/components/modules/Home/FlashSale";
import Hero from "@/components/modules/Home/Hero";
import Newsletter from "@/components/modules/Home/NewsLattter";
import ProviderSection from "@/components/modules/Home/ProvidersSection/ProviderSection";
import Reviews from "@/components/modules/Home/Review";

const HomePage = async () => {
  return (
    <div>
      <Banner />
      <Category />
      <FeaturedMeals />
      <FlashSaleSection />
      <CustomerSection />
      <ProviderSection />
      <Reviews />
      <Hero />
      <Newsletter />
    </div>
  );
};

export default HomePage;
