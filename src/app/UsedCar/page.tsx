import BrowseCertifiedPreOwned from "@/components/UsedCar/BrowseCertifiedPreOwned";
import ByMakeAndModalSection from "@/components/UsedCar/ByMakeAndModalSection";
import FAQ from "@/components/UsedCar/FAQ";
import FindGreatDeal from "@/components/UsedCar/FindGreatDeal";
import PopularCars from "@/components/UsedCar/PopularCars";
import SellYourCarYourSelf from "@/components/UsedCar/SellYourCarYourself";
import ShoppingForUsedCar from "@/components/UsedCar/ShoppingForUsedCar";
import TipsAndAdvice from "@/components/UsedCar/TipsAndAdvice";
import UsedCarHero from "@/components/UsedCar/UsedCarHero";

export default function Home() {
  return (
    <>
      <UsedCarHero />
      <ShoppingForUsedCar />
      <ByMakeAndModalSection />
      <SellYourCarYourSelf />
      <BrowseCertifiedPreOwned />
      <FindGreatDeal />
      <TipsAndAdvice />
      <FAQ />
      <PopularCars />
    </>
  );
}
