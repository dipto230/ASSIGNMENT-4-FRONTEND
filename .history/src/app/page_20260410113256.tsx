import Categories from "@/components/home/Categories";
import DoctorAdvice from "@/components/home/DoctorAdvice";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import HomeFeatures from "@/components/home/HomeFeatures";
import MedicalGoods from "@/components/home/MedicalGoods";
import Newsletter from "@/components/home/Newsletter";
import StaticBlogSection from "@/components/home/StaticBlogSection";
import VaccineOfferSection from "@/components/home/VaccineOfferSection";


export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <MedicalGoods />
      <FeaturedProducts />
      <VaccineOfferSection />
      <DoctorAdvice/>
      <HomeFeatures />
      <StaticBlogSection />
      <Newsletter />
      <
    </main>
  );
}
