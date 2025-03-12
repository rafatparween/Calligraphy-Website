import Image from "next/image";
import LandingPage from "./Components/LandingPage";
import FontsSection from "./Components/FontsSection";
import SvgCraftsSection from "./Components/SvgCraftSection";

export default function Home() {
  return (
    <>
     
      <LandingPage/>
      <SvgCraftsSection/>
      <FontsSection/>

    </>
  );
}
