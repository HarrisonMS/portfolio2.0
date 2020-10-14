import React, { useState, useEffect } from "react";
import Me from "../img/1095.jpg";

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
  }, []);
  return (
    <div className="home-container">
      <div>
        <img className="me-img" src={Me} alt="My Portfolio" id="logo" />
      </div>
      <div className="home-container-main">
        <div className="home-left-cont">
          <div className="quote-cont">
            <i className="fas fa-quote-left"></i>
            <p>{quote.quoteText}</p>
            <i className="fas fa-quote-right"></i>
          </div>
          <p>-{quote.quoteAuthor}</p>
          <button className="nav-link" onClick={getQuote}>
            new Quote
          </button>
        </div>
        <div className="home-right-cont">
          <h4 className="home-h4">
            I'm a Full Stack Web Developer, from Spokane, WA
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
