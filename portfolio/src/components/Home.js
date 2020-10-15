import React, { useState, useEffect } from "react";

const Home = () => {
  const [quote, setquote] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getQuote() {
    setLoading(true);
    const proxyUrl = "https://whispering-tor-04671.herokuapp.com/";
    const apiUrl =
      "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
    try {
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      if (data.quoteAuthor === "") {
        data.quoteAuthor = "Unknown";
      }
      setquote(data);
      setLoading(false);
    } catch (error) {
      getQuote();
    }
  }
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="home-container">
      <div className="home-container-main">
        {loading ? (
          <div className="home-left-cont">
            <div class="loader" id="loader"></div>
          </div>
        ) : (
          <div className="home-left-cont-quote">
            <div className="quote-cont">
              <i className="fas fa-quote-left"></i>
              <p>{quote.quoteText}</p>
              <i className="fas fa-quote-right"></i>
            </div>
            <p>-{quote.quoteAuthor}</p>
            <button className="btn-primary" onClick={getQuote}>
              new Quote
            </button>
          </div>
        )}

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
