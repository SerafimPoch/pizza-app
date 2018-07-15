import React, { Fragment } from "react";
import pizza_1 from "../../img/pizza_1.png";
import pizza_2 from "../../img/pizza_2.png";
import pizza_4 from "../../img/pizza_4.png";
import Header from "../Header";
import Footer from "../Footer/";
import {
  Main,
  AddButtonWrapper,
  AddButton,
  PizzaWrapper,
  PizzaIcon,
  PizzaTextWraper,
  TextBlock
} from "./style";

export default () => {
  return (
    <Fragment>
      <Header />
      <Main>
        <AddButtonWrapper>
          <AddButton>ADD NEW PIZZA</AddButton>
        </AddButtonWrapper>
        <PizzaWrapper>
          <PizzaIcon>
            <img src={pizza_1} alt="pizza_1" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 1 min</span>
              </TextBlock>
              <TextBlock>
                <span>#1</span>
                <span>$11.20</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_2} alt="pizza_2" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 4 min</span>
              </TextBlock>
              <TextBlock>
                <span>#2</span>
                <span>$16.45</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_4} alt="pizza_3" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 3 min</span>
              </TextBlock>
              <TextBlock>
                <span>#3</span>
                <span>$12.35</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_4} alt="pizza_4" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 2 min</span>
              </TextBlock>
              <TextBlock>
                <span>#4</span>
                <span>$13.00</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_1} alt="pizza_5" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 4 min</span>
              </TextBlock>
              <TextBlock>
                <span>#5</span>
                <span>$15.00</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_2} alt="pizza_6" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 6 min</span>
              </TextBlock>
              <TextBlock>
                <span>#6</span>
                <span>$8.80</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_4} alt="pizza_7" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 1 min</span>
              </TextBlock>
              <TextBlock>
                <span>#7</span>
                <span>$10.00</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_1} alt="pizza_8" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 5 min</span>
              </TextBlock>
              <TextBlock>
                <span>#8</span>
                <span>$11.00</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
          <PizzaIcon>
            <img src={pizza_2} alt="pizza_9" className="pizza_img" />
            <PizzaTextWraper>
              <TextBlock>
                <span>XX:XX:XX</span>
                <span>ETA: 8 min</span>
              </TextBlock>
              <TextBlock>
                <span>#9</span>
                <span>$11.20</span>
              </TextBlock>
            </PizzaTextWraper>
          </PizzaIcon>
        </PizzaWrapper>
      </Main>
      <Footer />
    </Fragment>
  );
};
