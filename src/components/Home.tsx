import React from "react";
import Nav from "./Nav";

const Home: React.FC = () => {
    return (
        <header className="App-header">
        <Nav background="black" color="yellow" display={false} showServices={true}/>
        <section className="landing-section">
          <h3>dlan <span className="rec-txt-yellow">Technologies</span></h3>
          <div className="ruler"></div>
          <p>We're a computer education company focused on <span className="smaller-rec-txt">equipping clients </span>
          with modern computer knowledge</p>
          <div className="clip"></div>
        </section>
      <div className="arrow"></div>
      </header>
    );
};

export default Home;
