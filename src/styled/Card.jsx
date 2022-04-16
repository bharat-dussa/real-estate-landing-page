import styled from 'styled-components'

export const Card = styled('section')`
  background:#eee9e8;
  /* height: 760px; */
  /* padding:0px 10px 0px 10px; */
  padding:5px;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Montserrat', sans-serif;
  margin-top:90px;
  .section-area {
    /* display:flex;
        justify-content:center;
        
        padding:100px; */
  }
  .section-details {
    max-width: 700px;
    display: flex;
    margin: 8% auto;
    flex-flow: column wrap;
    text-align: center;
    align-items: center;
    padding:20px;
    
  }
  .section-details h3 {
    font-family: 'Quattrocento', serif;
    margin-top: 80px;
    font-size:35px;
    /* margin-bottom: 40px; */
    font-weight:500;
  }
  .section-details p {
    margin-bottom:40px;
    font-size:17px;
    letter-spacing:0.5px;
    font-weight:400;
    margin:25px 20px;
    margin-bottom:40px;
  }
  @media screen and (max-width:768px){
    .section-details{
      margin:0px 50px;
    }
  }
  @media screen and (min-width: 768px) {
    background-image: url("assests/components/Card/card.svg");
    /* height: 680px; */
    margin: 2%;
    .section-details h3 {
      font-size:53px;
      /* margin-top: 5%; */
      /* margin-bottom: 55px; */
    }
    .section-details p {
        margin-bottom:55px;
        font-size:21px;
        font-weight:400;
    }
  }
  @media screen and  (min-width:280px) and (max-width:371px){
    .section-details{
      margin:0px 15px !important;
    }
    .banner-details {
      padding:10px;
    }
    .banner-details h2 {
      font-size:45px;
    }
    ul li {
      letter-spacing:0px;
    }
    /* div .mg-r */
  }
`
