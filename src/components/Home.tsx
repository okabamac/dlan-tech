import React from "react";
import Hamburger from "./Hamburger";

const Home: React.FC = () => {
    return (
        <header className="App-header">
        <Hamburger color="yellow"/>
        <section className="landing-section">
          <h3>dlan <span className="rec-txt-yellow">Technologies</span></h3>
          <div className="ruler"></div>
          <p>We're a computer education company focused on <br>
          </br> <span className="smaller-rec-txt">equipping clients </span>with modern computer knowledge</p>
        </section>
      <div className="arrow"></div>
      </header>
    );
};

export default Home;
