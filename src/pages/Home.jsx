import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skilss from "../components/Skilss";

import AnimationScroll from "../components/AnimationScroll";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AnimationScroll>
        <Skilss />
      </AnimationScroll>
      <AnimationScroll>
        <Footer />
      </AnimationScroll>
    </>
  );
}
export default Home;
