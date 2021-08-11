import React, { useContext } from "react";
import {
  BannerImage,
  BannerText,
  WhiteDiv,
  CounterWrapper,
  NumberWrapper,
  FacesDiv,
  DescriptionText,
  SubscriptionWrapper,
  SubscriptionText,
} from "../Components/Styled/HomePage";
import TestimonialsMobile from "../Components/Functional/Testimonials/TestimonialsMobile";
import TestimonialsDesktop from "../Components/Functional/Testimonials/TestimonialsDesktop";
import CountUp from "react-countup";
import { ViewPortContext } from "../Context/ViewPortContext";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

export default function Home() {
  const { width } = useContext(ViewPortContext);
  const ScreenSize = 961;
  
  function ChangeTestimonials(){
    return width < ScreenSize ? <TestimonialsMobile/> : <TestimonialsDesktop/> 
  }

  return (
    <>
      <BannerImage>
        <BannerText> Empowering Woman.</BannerText>
        <BannerText> Transforming the World.</BannerText>
      </BannerImage>
      <WhiteDiv>
        <CounterWrapper>
          <NumberWrapper>
            <CountUp separator="." start={40000} end={52426} duration={8} />
          </NumberWrapper>
          <p>Empowered</p>
          <p>Woman</p>
        </CounterWrapper>
        <DescriptionText>
          <span>Be Beauty </span>is an NGO made by women and dedicated to women.
          <br />
          Through donations from partner companies, as well as donations from
          women who support the cause, we transform the self-esteem of all women
          in our country.
          <br />
          In our office, all women who apply to our NGO can buy, every three
          months, any piece of makeup in our stock for just two euros. Together
          we are prettier, happier and stronger.
        </DescriptionText>
      </WhiteDiv>
      <FacesDiv>
        {ChangeTestimonials()}
      </FacesDiv>
      <SubscriptionWrapper>
        <SubscriptionText>
          Be one of us! <br />
          Fill the Form <br />
          and Join us <span>Today!</span>
        </SubscriptionText>
        <Link to="/Subscribe" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="secondary">
            Subscribe
          </Button>
        </Link>
      </SubscriptionWrapper>
    </>
  );
}
