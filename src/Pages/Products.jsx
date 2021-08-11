import React, { useState, useEffect } from "react";
import { TitleWrapper, TitlePage } from "../Components/Styled/TitlePage";
import {
  DescriptionDiv,
  DescriptionCard,
  RadioCard,
  CardItem,
  CardsWrapper,
  CardText,
  CardImg,
  CardPostTitle,
  CardPrice,
  ItemSelector,
} from "../Components/Styled/Card";
import { api } from "../API/api";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState("CoverGirl");
  const [type, setType] = useState("Lipstick");
  const url = `?brand=${brand}&product_type=${type}`;

  function handleBrandClicked(e) {
    setBrand(e.target.value);
  }

  function handleTypeClicked(e) {
    setType(e.target.value);
  }

  useEffect(() => {
    api
      .get(url)
      .then((response) => setProducts(response.data))
      .catch((err) => console.log("An error has occurred" + err));
  }, [brand, type]);

  console.log(products);
  if (products.length === 0) {
    return (
      <TitleWrapper>
        <TitlePage> Loading </TitlePage>
      </TitleWrapper>
    );
  } else {
    return (
      <main>
        <TitleWrapper>
          <TitlePage> Our Products </TitlePage>
        </TitleWrapper>
        <DescriptionDiv>
          <DescriptionCard>
            <CardText>
              {" "}
              All our products can be seen below. They are all linked to our
              DataBase, for this reason all the products listed are available at
              our office. Feel free to choose any product from one of our
              partner companies, and remember:
            </CardText>
            <span> Everything costs 2 Euros!</span>
          </DescriptionCard>
          <RadioCard>
            <ItemSelector>
              <FormControl component="fieldset">
                <FormLabel component="legend">Brand</FormLabel>
                <RadioGroup
                  row
                  aria-label="brand"
                  name="brand"
                  value={brand}
                  onChange={handleBrandClicked}
                >
                  <FormControlLabel
                    value="CoverGirl"
                    control={<Radio color="primary" />}
                    label="CoverGirl"
                  />
                  <FormControlLabel
                    value="Maybelline"
                    control={<Radio color="primary" />}
                    label="Maybelline"
                  />
                  <FormControlLabel
                    value="Revlon"
                    control={<Radio color="primary" />}
                    label="Revlon"
                  />
                </RadioGroup>
              </FormControl>
              <FormControl component="fieldset">
                <FormLabel component="legend">Type</FormLabel>
                <RadioGroup
                  row
                  aria-label="type"
                  name="type"
                  value={type}
                  onChange={handleTypeClicked}
                >
                  <FormControlLabel
                    value="Lipstick"
                    control={<Radio color="primary" />}
                    label="Lipstick"
                  />
                  <FormControlLabel
                    value="Eyeshadow"
                    control={<Radio color="primary" />}
                    label="Eyeshadow"
                  />
                </RadioGroup>
              </FormControl>
            </ItemSelector>
          </RadioCard>
        </DescriptionDiv>
        <CardsWrapper>
          {products.slice(0, 6).map((item) => (
            <CardItem key={item.id}>
              <CardPostTitle>{item.name}</CardPostTitle>
              <CardImg src={item.image_link}></CardImg>
              <CardPrice> Regular Price € {item.price} </CardPrice>
            </CardItem>
          ))}
        </CardsWrapper>
      </main>
    );
  }
}
