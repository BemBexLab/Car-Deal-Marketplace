import CarDealDifferenceSection from "@/components/NewCar/CarDealDifferenceSection";
import NewCarForSale from "@/components/NewCar/NewCarForSale";
import NewCarHero from "@/components/NewCar/NewCarHero";
import PopularHatchBacks from "@/components/NewCar/PopularHatchBacks";
import TipsAndAdvice from "@/components/UsedCar/TipsAndAdvice";

export default function Home() {
  return (
    <>
      <NewCarHero />
      <NewCarForSale />
      <CarDealDifferenceSection />
      <TipsAndAdvice  />
      <PopularHatchBacks />
    </>  
  );
}
