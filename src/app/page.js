import Header from "./components/Header";
import Banner from "./components/Banner";
import Explore from "./components/Explore";
import CallToAction from "./components/CallToAction";
import CoffeeCatalogue from "./components/CoffeeCatalogue";
import InstantCoffee from "./components/InstantCoffee";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Explore />
      <CallToAction />
      <CoffeeCatalogue />
      <InstantCoffee />
      <Testimonial />
      <Footer />
    </main>
  );
}
