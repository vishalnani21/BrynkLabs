import { useContext } from "react";
import { HeadingContext } from "../context/HeadingContext";
import "./LandingPage.css"

import heroImage from '../assets/hero-image.png';
import FeaturesContainer from "./FeaturesContainer";



const LandingPage = () => {
  const { heading, loading, error } = useContext(HeadingContext);

  return (
    <>
     <section className="landing-page">
      <div className="hero-content">
        <h1 className="main-heading">
          {heading}
        </h1>
        <p className="subheading">
          Powerful AI solutions that go beyond mere data sorting and
          exploration. Use our array of AI enabled solutions that understand
          your business and recommend the optimal way forward.
        </p>
        <button className="cta-button">Get started</button>
      </div>
      <div>
     <img src={heroImage} className="heroImage"/>
      </div>
    </section>
    <div>
     <FeaturesContainer/>
    </div>
    </>
  );
};

export default LandingPage;
