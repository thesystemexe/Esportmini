import React, { useState } from "react";
import "./styles.css";
import { data } from "../tournamentdata";
import Header from "../Components/Common/Header";


function TournamentPage() {
  const [tour] = useState(data);
  return (
    <>
      <Header />

      <h1 className="tour-head">Welcome to the Tournament</h1>
      <div className="tour-container">
        {tour.map((item, index) => (
          // const { img, gameName, orgName } = item;

          <div className="tour-item" key={index}>
            <img className="tour-img" src={item.img} />
            <div className="tour-text-btn">
              <div className="tour-text">
                <h4>
                  <p className="org-name-p">
                    <span className="org-name">{item.gameName}</span> Tournament
                    by
                    <span className="org-name2">{item.orgName}</span>
                  </p>
                </h4>

                <p className="tour-date">
                  <span className="org-date">{item.date}</span>
                </p>
              </div>

              <div className="tour-btn-div">
                <p className="tour-parti">
                  <span>{item.numOfParticipant} Participants</span>
                </p>
                <button className="tour-btn">Participate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TournamentPage;
