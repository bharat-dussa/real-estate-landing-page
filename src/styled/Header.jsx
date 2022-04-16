import styled from 'styled-components'

export const Banner = styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  background: url('assests/components/banner/banner-hero-image.svg') no-repeat center;
  max-width:100%;
  height: auto;
  background-repeat: no-repeat;
  background-size: cover;
  /* box-shadow: 10px 10px 5px #ccc; */
  .link-btn{
    text-decoration:none;
  }
  .desktop-btn{
    display:none;
  }
  .mobile-btn{
    margin-top:40px;
  }
  .get-early-btn {
    text-transform: uppercase;
    font-size: 16px;
    background-color: #87351c;
    color: #f7f4f3;
    border-radius: 3px;
    padding: 16px 20px 16px 20px;
    border: none;
    box-shadow: 1px 1px 2px 2px #0f2028;
  }
  nav {
    display: flex;
    /* width: 90%; */
    margin: 0 auto;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: white;
  }
  nav ul {
    flex: 1 1 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  nav ul li {
    cursor: pointer;
    padding: 0 25px;
  }
  button {
    cursor: pointer;
  }

  li {
    text-transform: uppercase;
    font-weight: normal;
    font-family: "Montserrat", sans-serif;
    font-style: normal;
    font-weight: 399;
    font-size: 18px;
    line-height: 22px;
    text-decoration: none;
    list-style: none;
    line-height: 22px;
    letter-spacing: 0.25px;
  }
  .banner-details {
    /* max-width: 700px; */
    font-family: 'Montserrat', sans-serif;
    padding: 20px;
    display: flex;
    margin: 0% auto;
    flex-flow: column nowrap;
    align-items: center;
    text-align: center;
    align-content: center;
    margin: 0px 30px 0px 30px;
  }
  .banner-details > h2 {
    font-family: Quattrocento;
    font-weight: 300;
    display: flex;
    align-items: flex-end;
    font-size: 50px;
    margin-bottom: 65px;
    text-transform: uppercase;
    color: #f7f4f3;
    letter-spacing: -1.5px;
    margin: 5% 14%;
    margin-top:40px;
  }
  .banner-details p {
    margin-top: 35px;
    color: #f7f4f3;
    font-family: Quattrocento;
    font-size: 21px;
    font-weight: 300;
    margin-bottom: 50px;
  }
  .banner-btn {
    font-size: 2rem;
    background: transparent;
    border: none;
    color: #f7f4f3;
    transition: all 0.5s ease;
    font-weight: 200;
    cursor: pointer;
    display:none;
  }
  .banner-btn:hover {
    box-shadow: 0px 15px 20px rgba(83, 82, 82, 0.1);
    transform: scale(1.1, 1.1);
  }

  @media screen and (min-width: 769px) {
    height:120vh;
    .banner-btn{
      display:block;
    }
    #break-1 , #break-2 , #break-3 , #break-4 , #break-5{
      display:none;
    }
    nav {
    display: flex;
    width: 90%;
    margin: 0 auto;
    padding: 2rem;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    color: white;
  }
    .mobile-btn{
      display:none;
    }
    .desktop-btn{
      display:block;
    }
    .banner-details {
      margin: 0% 14%;
    }
    .banner-details > h2 {
      font-size: 60px;
    }
    .banner-details > p{
      margin-left:130px;
      margin-right:130px;
    }
  }
  @media screen and (min-width:1280px){
    height:110vh;
    .banner-details{
      margin:0% 12%;
    }
    .banner-details > h2 {
      font-size:70px;
      margin-left:0px;
      margin-right:0px;
    }
  }
  @media screen and (min-width:1486px) {
    /* height:100vh; */
    .banner-details > h2 {
      font-size:90px;
    }
  }
`

export const Navbar = styled.header`
  display: flex;
  background-color: transparent;
  min-height: 10vh;
`
