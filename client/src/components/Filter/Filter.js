import React, { useState, useEffect } from "react";
import Filter from "react-tinder-card";
import "../Cards/Cards.css";
import API from "../../utils/API";

function Filters(props) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  function loadUsers() {
    const gender = window.location.href.split("/").pop();


    API.getGender(gender)
      .then((res) => {

        setPeople(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="Cards">
        <div className="Cards_cardContainer">
          {people.map((person) => (
            <Filter
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              ></div>
              <h3 className="userInfo"><b>{person.name} | {person.age} | {person.email}</b></h3>
            </Filter>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
