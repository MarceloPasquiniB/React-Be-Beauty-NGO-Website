import React, {useContext} from "react";
import { ViewPortContext } from "../Context/ViewPortContext";
import { TitleWrapper, TitlePage } from "../Components/Styled/TitlePage";
import MiniForm from "../Components/Functional/MiniForm/MiniForm";
import {
  DescriptionDiv,
  DescriptionCard,
  CardText,
  FormCard,
  FormCardText,
} from "../Components/Styled/Card";
import "./base.css";

export default function Subscribe() {
  const { sent } = useContext(ViewPortContext);
  function HandleSent() {
    return sent === true ? <FormCardText>Thanks for Join us!</FormCardText> : <MiniForm/>;
  }

  return (
    <>
      <TitleWrapper>
        <TitlePage> Where to Find us </TitlePage>
      </TitleWrapper>
      <DescriptionDiv>
        <DescriptionCard>
          <CardText>
            {" "}
            We are located in a privileged location in Lisbon, capital of
            Portugal. Our address is Avenida da Liberdade number XX. The fastest
            way to get to our office is to take the subway and get off at the
            station Marquês de Pombal. We are open Monday through Saturday, 9am
            to 5pm.
          </CardText>
        </DescriptionCard>
        <FormCard>
          {HandleSent()}
        </FormCard>
      </DescriptionDiv>
    </>
  );
}
