import React, { useState, useEffect } from "react";
import Me from "../img/me.jpg";

const Home = () => {
  const [quote, setquote] = useState([]);
  const [loading, setloading] = useState(false);
  async function getQuote() {
    const proxyUrl = "https://whispering-tor-04671.herokuapp.com/";
    const apiUrl =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      console.log("data", data);
      setquote(data);
    } catch (error) {
      getQuote();
    }
  }
  useEffect(() => {
    getQuote();
  }, [quote]);
  return (
    <div className="home-container">
      <div className="home-left-cont">
        <h1 className="home-h1">{quote.quoteText}</h1>
      </div>
      <div className="home-right-cont">
        <img className="me-img" src={Me} alt="young harrison" />
        <h4 className="home-h4">
          I'm a Full Stack Web Developer, from Spokane, WA
        </h4>
      </div>
    </div>
  );
};

export default Home;
