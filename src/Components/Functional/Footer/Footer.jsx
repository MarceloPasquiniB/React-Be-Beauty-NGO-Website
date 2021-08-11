import React from "react";
import { FooterDiv, IconWrapper } from "./style";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <FooterDiv>
      <IconWrapper>
        <FaInstagram onClick={() => window.open("https://www.instagram.com/")} size={35} />
      </IconWrapper>
      <IconWrapper>
        <FaTwitter onClick={() => window.open("https://twitter.com/")} size={35}/>
      </IconWrapper>
      <IconWrapper>
        <FaFacebookSquare onClick={() => window.open("https://www.facebook.com/")} size={35}/>
      </IconWrapper>
    </FooterDiv>
  );
}
