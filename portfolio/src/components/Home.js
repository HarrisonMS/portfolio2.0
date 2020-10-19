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
            <p className="quote-author">-{quote.quoteAuthor}</p>
            <button className="btn-primary" onClick={getQuote}>
              new Quote
            </button>
          </div>
        )}

        <div className="home-right-cont">
          <h4 className="home-h4">
            Hello World, My name is Harrison Seaborn and this is my portfolio
            website built using{" "}
            <span class="text-react">
              <i class="fab fa-react"></i> React
            </span>{" "}
          </h4>
        </div>
      </div>
      <div className="social-wrap">
        <div className="social">
          <a href="mailto:hmseaborn@gmail.com">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://twitter.com/HarrisonSeaborn">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="https://github.com/HarrisonMS">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/harrisonmichaelseaborn/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line">
          <ol>
            <h3>Languages</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Python</p>
          </ol>
          <ol>
            <h3>Front-end</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Python</p>
          </ol>
          <ol>
            <h3>Back-end</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Python</p>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
