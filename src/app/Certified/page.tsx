import CertifiedHero from "@/components/Certified/Certified";
import CertifiedCarByBodyStyle from "@/components/Certified/CertifiedCarByBodyStyle";
import CertifiedPreOwnedSection from "@/components/Certified/CertifiedPreOwnedSection";
import NewCarReliability from "@/components/Certified/NewCarReliability";
import TipsAndAdvice from "@/components/UsedCar/TipsAndAdvice";

export default function Certified() {
  return (
    <>
      <CertifiedHero />
      <CertifiedPreOwnedSection />
      <NewCarReliability />
      <TipsAndAdvice  />
      <CertifiedCarByBodyStyle />
    </>
  );
}
