import React, { useState } from "react";
import "./styles.css";

const TourForm = () => {
  const [file, setFile] = useState([]);
  const [org, setOrg] = useState("");
  const [game, setGame] = useState("");
  const [date, setDate] = useState("");

  return (
    <>
      <div className="Tourform">
        <h3>Tour form</h3>
        <ul>
          <li>
            <input type="file" placeholder="" />
          </li>
          <li>
            <input type="text" placeholder="Enter the org" />
          </li>
          <li>
            <input type="text" placeholder="Enter the game" />
          </li>
          <li>
            <input type="text" placeholder="Enter the date" />
          </li>
        </ul>
        <button className="tourBtn"> Submit </button>
      </div>
    </>
  );
};

export default TourForm;
