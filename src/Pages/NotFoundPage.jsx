import React from "react";
import { NotFoundImage, NotFoundText } from "../Components/Styled/NotFound";
import beauty from "../img/beauty.png";
import "./base.css";

export default function NotFoundPage() {
  return (
    <main className = "container flex flex--center flex--column ">
      <NotFoundImage src={beauty} alt="Page not found image" />
      <NotFoundText> Sorry! Page not found! </NotFoundText>
    </main>
  );
}
