import React from "react";
import { CardStyled } from "../../../styled/Card";
import { Button } from "../../../styled/Button";

function Card({ title, content, buttontext, link, scrollRef }) {
  return (
    <CardStyled id="card-section" ref={scrollRef}>
      <div className="section-area">
        <div className="section-details">
          <h3>{title}</h3>
          <p>{content}</p>
          {/* <button className="general-btn">See how it works</button> */}
          <a
            className={"link-btn"}
            href={link}
            rel="noreferrer"
            target="_blank"
          >
            <Button className={"desktop-btn"}>{buttontext}</Button>
          </a>
        </div>
      </div>
    </CardStyled>
  );
}
export default Card;
