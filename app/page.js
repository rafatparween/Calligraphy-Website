import Image from "next/image";
import LandingPage from "./Components/LandingPage";
import FontsSection from "./Components/FontsSection";
import SvgCraftsSection from "./Components/SvgCraftSection";
import WebsiteShowcase from "./Components/WebsiteShowcase";
import BannerSeection from "./Components/BannerSeection";

export default function Home() {
  return (
    <>
     
      <LandingPage/>
      <WebsiteShowcase/>
      <SvgCraftsSection/>
      <BannerSeection/>
      <FontsSection/>
      

    </>
  );
}
