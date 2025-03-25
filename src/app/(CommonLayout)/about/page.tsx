import BBContainer from "@/components/core/BBContainer/BBContainer";
import AboutCTA from "@/components/modules/About/AboutCTA";
import AboutHero from "@/components/modules/About/AboutHero";
import OurStats from "@/components/modules/About/OurStats";
import OurStory from "@/components/modules/About/OurStory";
import OurValues from "@/components/modules/About/OurValues";

const AboutUsPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            We are a team dedicated to providing you with the best meal planning
            and delivery service. Our mission is to make healthy eating easy and
            convenient for everyone. With a passion for fresh ingredients and
            flavorful dishes, we aim to transform the way people experience
            food. We believe in sustainability, quality, and making every meal a
            delightful experience for our customers.
          </p>
        </div>
      </section>
      <BBContainer>
        <AboutHero />
        <OurStory />
        <OurValues />
        <OurStats />
        <AboutCTA />
      </BBContainer>
    </>
  );
};

export default AboutUsPage;
