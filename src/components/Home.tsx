import React from "react";
import miniLg1 from "../images/feature-icon-01.svg";
import miniLg2 from "../images/feature-icon-02.svg";
import miniLg3 from "../images/feature-icon-03.svg";
import Nav from "./Nav";

const Home: React.FC = () => {
    return (
      <main id="main-color">
        <header className="App-header" id="landing">
        <Nav background="black" color="white" display={false} showServices={true}/>
        <section className="landing-section">
          <h3>dlan <span className="rec-txt-yellow">Technologies</span></h3>
          <div className="ruler"></div>
          <p>We're a computer education company focused on <span className="smaller-rec-txt">equipping clients </span>
          with modern computer knowledge</p>
        </section>
          <a href="#about-section"><div className="arrow down-arrow"></div></a>
      </header>
        <section id="about-section">

          <div className="about-content">
            <div>
              <h3>Mission Statement <span><img src={miniLg1}/></span></h3>
              <hr/>
              <p>
                         Small office, Big office customized trainings and exam certifications
                         for individuals and organizations within Abuja and its environs.
                          Dlan Technologies is a small and fast-growing company with two
                          offices in Abuja and one online market.
                          It has a workforce of up to 10 people who work hard to improve the brand.
              </p>
            </div>
            <div>
              <h3>
                Vision <span><img src={miniLg2} /></span>
              </h3>
              <hr />
              <p>
                          Dlan Technologies desires to be recognized as a leader in the training industry
                          worldwide whereby her customers develop skills,
                          get certified, become professionals and can compete with other IT professionals globally.
              </p>
            </div>
            <div>
              <h3>Core Values <span><img src={miniLg3} /></span></h3>
              <hr />
              <p>
                <b>Customer-Centric:</b> Every employee focus is on the customers preference.
                 <br/>
                <b>Work Culture:</b> We recruit professionals who desire to impact lives through technology.
                Excellence in service delivery is our culture.
              </p>

            </div>
          </div>
          <a href="#landing"><div className="arrow up-arrow"></div></a>
        </section>
      </main>
    );
};

export default Home;
