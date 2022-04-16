import Header from "./components/Homepage/Header/header";
import Card from "./components/Homepage/Card/card";
import Footer from "./components/Homepage/Footer/footer";
import "./App.css";
import React, { useRef } from "react";

function App() {
  const content = (
    <span>
      We are working hard to build an investment product around our
      co-owners&rsquo; wants and desires. Answer a few short questions and get
      early access to our innovative, <br id={"break"} />
      trust-worthy, and legally solid tools to invest in real estate.
    </span>
  );
  const link = "https://test-form.com";
  const scrollRef = useRef();

  const scrollTo = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    }
  };

  return (
    <div>
      <Header buttontext={"GET EARLY ACCESS"} link={link} scrollTo={scrollTo}/>
      <Card
        id="down"
        title={"New relationships are fragile. Help us define boundaries."}
        content={content}
        buttontext={"GET EARLY ACCESS"}
        link={link}
        scrollRef={scrollRef}
      />
      <Footer />
    </div>
  );
}

export default App;
