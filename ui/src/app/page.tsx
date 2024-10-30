import { Banner } from "@/components/BannerHero";
import { HeroCard } from "@/components/HeroCard";
import { MainContent } from "@/components/MainContent";
import { FooterCard } from "@/components/FooterCard";

const Home = () => {
  return (
    <div>
      <Banner />
      <HeroCard />
      <MainContent />
      <FooterCard />
    </div>
  );
};
export default Home;
