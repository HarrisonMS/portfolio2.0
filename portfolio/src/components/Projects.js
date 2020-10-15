import React from "react";
import Microlink from "@microlink/react";
import Me from "../img/tab_thurs.PNG";

function Projects() {
  return (
    <div className="project-container">
      <div className="item">
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category">Design</p>
            <h2 className="item-text-title">Great Gradients</h2>
          </div>
        </div>

        <Microlink
          className="mic_link"
          url="https://pokeeman.vercel.app/"
          size="large"
        />
      </div>
      <div className="item">
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category">Design</p>
            <h2 className="item-text-title">Great Gradients</h2>
          </div>
        </div>

        <Microlink
          className="mic_link"
          url="https://harrisonseaborn.now.sh/"
          size="large"
        />
      </div>
      <div className="item">
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category">Design</p>
            <h2 className="item-text-title">Great Gradients</h2>
          </div>
        </div>
        <Microlink
          className="mic_link"
          url="https://tabthursfe.vercel.app/"
          size="large"
        />
      </div>
      <div className="item">
        <div className="item-text">
          <div className="item-text-wrap">
            <p className="item-text-category">Design</p>
            <h2 className="item-text-title">Great Gradients</h2>
          </div>
        </div>

        <Microlink
          className="mic_link"
          url="https://techstuff.netlify.app/"
          size="large"
        />
      </div>
    </div>
  );
}
export default Projects;
