import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import MedicalGoods from "@/components/home/MedicalGoods";
import VaccineOfferSection from "@/components/home/VaccineOfferSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <MedicalGoods />
      <FeaturedProducts />
      <VaccineOfferSection/>
    </main>
  );
}
