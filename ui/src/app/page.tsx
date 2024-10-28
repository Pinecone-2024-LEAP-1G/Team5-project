import { Banner } from "@/components/BannerHero";
import { HeroCard } from "@/components/HeroCard";
import { MainContent } from "@/components/MainContent";
import { FooterCard } from "@/components/FooterCard";
import { useState } from "react";

const Home =() => {
  return (
   <div>
    <Banner/>
    <HeroCard/>
    <MainContent/>
    <FooterCard/>
   </div>
  );
}
export default Home

