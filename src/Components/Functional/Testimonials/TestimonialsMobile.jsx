import React from "react";
import { Face, FaceText, TestimonialsWrapper, SwiperWrapper } from "./style";
import face1 from "../../../img/Woman1.jpg";
import face2 from "../../../img/Woman2.jpg";
import face3 from "../../../img/Woman3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default function TestimonialsMobile() {
  return (
    <SwiperWrapper>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <TestimonialsWrapper>
            <Face src={face1}></Face>
            <FaceText>
              "Be Beauty helped me feel more confident, even in a time of
              financial crisis."
              <br />
              <br />
              <span>Paula T.</span>
            </FaceText>
          </TestimonialsWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsWrapper>
            <Face src={face2}></Face>
            <FaceText>
              "Contributing to Be Beauty makes me sure that I'm making other
              women happy."
              <br />
              <br />
              <span>Laura M.</span>
            </FaceText>
          </TestimonialsWrapper>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialsWrapper>
            <Face src={face3}></Face>
            <FaceText>
              "I am a Be Beauty activist, I know that with my help more women
              will be able to access our NGO."
              <br />
              <br />
              <span>Joan C.</span>
            </FaceText>
          </TestimonialsWrapper>
        </SwiperSlide>
      </Swiper>
    </SwiperWrapper>
  );
}
