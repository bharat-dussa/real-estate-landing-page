import styled from "styled-components";

export const Footer = styled("footer")`
  padding: 28px 20px 0px 6px;
  line-height: 14px;
  display: flex;
  flex-wrap: wrap;
  background-color: #182a34;
  color: white;
  font-family: "Montserrat", sans-serif;
  margin-top: 100px;
  .footer-links-mg{
    font-weight:lighter;
  }
  .footer-main-links {
    line-height: 1.8rem;
    margin-right: 0px;
  }
  ul li {
    list-style: none;
    font-weight: 400;
    letter-spacing: 0.6px;
    cursor: pointer;
  }
  .mr-t {
    margin-top: 10px;
  }
  ul li a {
    list-style: none;
    text-decoration: none;
    color: white;
    font-weight: 600;
    cursor: pointer;
  }
  ul {
    line-height: 1.4rem;
  }
  .col {
    display: flex;
  }
  .col div {
    flex: 1;
  }
  .about-trezo {
    display: flex;
    flex-direction: column;
  }
  .about-trezo p {
    font-size: 10px;
    letter-spacing: 0px;
    line-height: 1rem;
  }
  .footer-links {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .footer-links a {
    margin: 0px 14px 0px 0px;
  }
  .footer-links-mg {
    margin-left: 40px;
  }
  div .mg-r img {
    padding-right: 14px;
  }
  #desktop-linkedin {
    display: none;
  }
  #mobile-linkedin {
    margin-left: 0px;
    margin-bottom: 20px;
  }
  .love-container a {
    text-decoration: none;
    color: white;
    font-size: 10px;
    text-align: center;
    font-weight:normal;
  }
  .flex{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    margin-top:40px;
    margin-bottom:0%;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 40px 0px 40px;
    justify-content: space-between;
    #mobile-linkedin {
      display: none;
    }
    #desktop-linkedin {
      display: flex;
    }
    div .mg-r > ul:nth-child(1) {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    .about-trezo p {
      font-size: 12px;
      letter-spacing: 0px;
      line-height: 1rem;
    }
    .footer-main-links {
      line-height: 1.8rem;
      margin-right: -100px;
    }
    .col div {
    }
  }
  @media screen and (min-width: 280px) and (max-width: 371px) {
    div .mg-r img {
      width: 21px;
      padding-right: 5px;
    }
    div.mg-r > ul:nth-child(1) {
      padding-left: 0px;
    }
    .footer-main-links,
    .col .mg-r {
      padding-left: 10px;
    }
    .about-trezo {
      padding-left: 10px;
    }
    .about-trezo ul {
      padding-left: 0px;
    }
  }
  @media screen and (min-width:768px) and (max-width:1260px){
    justify-content:space-between !important;
  }
`;
