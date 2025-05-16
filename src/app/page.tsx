import AboutOurCar from "@/components/HomePage/AboutOurCar";
import DiscoverByBody from "@/components/HomePage/BrowseByBody";
import BuyingGuides from "@/components/HomePage/BuyingGuides";
import CarReviewsSection from "@/components/HomePage/CarReview";
import DiscoverPerfectCar from "@/components/HomePage/DiscoverPerfectCar";
import EstimateBudget from "@/components/HomePage/EstimateBudget";
import GetInstantOffer from "@/components/HomePage/GetInstantOffer";
import HomeHero from "@/components/HomePage/HomeHero";
import LookingToDo from "@/components/HomePage/LookingToDo";
import WhyChoose from "@/components/HomePage/WhyChoose";


export default function Home() {
  return (
    <>
    <HomeHero />
    <EstimateBudget /> 
    <LookingToDo />
    <DiscoverPerfectCar />
    <DiscoverByBody />
    <GetInstantOffer />
    <WhyChoose />
    <AboutOurCar />
    <CarReviewsSection />
    <BuyingGuides />
    </>
  );
}
