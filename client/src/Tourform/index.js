import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import Header from "../Components/Common/Header";

const TourForm = () => {
  const [image, setImage] = useState(null);
  const [org, setOrg] = useState("");
  const [game, setGame] = useState("");
  const [date, setDate] = useState("");
  const [tournaments, setTournaments] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("org", org);
    formData.append("game", game);
    formData.append("date", date);

    try {
      const response = await axios.post(
        "http://localhost:4666/uploadDetails",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchTournaments = async () => {
    try {
      const response = await axios.get("http://localhost:4666/showDetails");
      setTournaments(response.data);

      console.log(tournaments);
      // console.log(tournaments);
    } catch (err) {
      console.log("Error fetching", err);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="Tourform">
        <h3>Tour form</h3>
        <ul>
          <li>
            <input
              type="file"
              placeholder=""
              onChange={(e) => setImage(e.target.files[0])}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Enter the org"
              value={org}
              onChange={(e) => setOrg(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Enter the game"
              value={game}
              onChange={(e) => setGame(e.target.value)}
            />
          </li>
          <li>
            <input
              type="text"
              placeholder="Enter the date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </li>
        </ul>
        <button className="tourBtn" onClick={handleUpload}>
          Submit
        </button>
      </div>
    </>
  );
};

export default TourForm;
