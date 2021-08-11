import React from "react";
import {
  DesktopWrapper,
  Face,
  FaceText,
  TestimonialsWrapper,
} from "./style";
import face1 from "../../../img/Woman1.jpg";
import face2 from "../../../img/Woman2.jpg";
import face3 from "../../../img/Woman3.jpg";


export default function TestimonialsDesktop() {
  return (
    <>
    <DesktopWrapper>
      <TestimonialsWrapper>
        <Face src={face1}></Face>
        <FaceText>
          "Be Beauty helped me feel more confident, even in a time of financial
          crisis."
          <br />
          <br />
          <span>Paula T.</span>
        </FaceText>
      </TestimonialsWrapper>
      <TestimonialsWrapper>
        <Face src={face2}></Face>
        <FaceText>
          "Contributing to Be Beauty makes me sure that I'm making other women
          happy."
          <br />
          <br />
          <span>Laura M.</span>
        </FaceText>
      </TestimonialsWrapper>
      <TestimonialsWrapper>
        <Face src={face3}></Face>
        <FaceText>
          "I am a Be Beauty activist, I know that with my help more women will
          be able to access our NGO."
          <br />
          <br />
          <span>Joan C.</span>
        </FaceText>
      </TestimonialsWrapper>
      </DesktopWrapper>
    </>
  );
}
