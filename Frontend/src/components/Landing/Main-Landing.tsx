import { Hero } from "./Hero";
import { Footer } from "./Footer";
import { Team } from "./Team";
import { Features } from "./Features";
// import { Testimonials } from "./Testimonial";

export function MainLanding() {
  return (
    <div>
      <Hero />
      <Features />
      <Team />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}