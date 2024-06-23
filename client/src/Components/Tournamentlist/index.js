import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Header from "../Common/Header";

const TournamentList = () => {
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    fetchTournaments();
  });

  const fetchTournaments = async () => {
    const response = await axios.get("http://localhost:4666/showDetails");
    setTournaments(response.data);
  };
  return (
    // <>
    //   <div className="tournament-list">
    //     <h3>Tournament</h3>
    //     <ul>
    //       {tournaments.map((tournament, index) => (
    //         <li key={index}>
    //           <div className="tournaments-item">
    //             <img
    //             className="tournament-image"
    //               src={`http://localhost:4666/images/${tournament.image}`}
    //               alt=""
    //             />
    //             <div className="tournament-details">
    //               <h4>{tournament.game}</h4>
    //               <p>Organized by: {tournament.org}</p>
    //               <p>Date: {tournament.date}</p>
    //             </div>
    //           </div>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </>
    <>
      <Header />

      <h1 className="tour-head">Welcome to the Tournament</h1>
      <div className="tour-container">
        {tournaments.map((tournament, index) => (
          // const { img, gameName, orgName } = item;

          <div className="tour-item" key={index}>
            <img
              className="tour-img"
              src={`http://localhost:4666/images/${tournament.image}`}
              alt=""
            />
            <div className="tour-text-btn">
              <div className="tour-text">
                <h4>
                  <p className="org-name-p">
                    <span className="org-name">{tournament.game}</span>{" "}
                    Tournament by
                    <span className="org-name2">{tournament.org}</span>
                  </p>
                </h4>

                <p className="tour-date">
                  <span className="org-date">{tournament.date}</span>
                </p>
              </div>

              <div className="tour-btn-div">
                <p className="tour-parti">
                  <span>{tournament.numOfParticipant} Participants</span>
                </p>
                <button className="tour-btn">Participate</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TournamentList;
