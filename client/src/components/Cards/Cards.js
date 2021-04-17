import React, { useState, useEffect } from "react";
import UserCard from "react-tinder-card"
import "./Cards.css";
import API from "../../utils/API"
// import axios from "../../utils/axios";
// import Button from '@material-ui/core/Button';

function UserCards(props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        loadUsers()
    
      }, [])
    
      // Loads all books and sets them to books
      function loadUsers() {
        API.getUsers()
          .then(res => {
            console.log(res)  
            setPeople(res.data)
          }, 
          )
          .catch(err => console.log(err));
      };



    return (
        <div>

            <div className="Cards">
                <div className="Cards_cardContainer">
                    {people.map((person) => (
                        <UserCard
                            className="swipe"
                            key={person.name}
                            preventSwipe={["up", "down"]}
                        >
                            <div
                                style={{ backgroundImage: `url(${person.url})` }}
                                className="card">
                                <h3 className="userInfo"><b>{person.name} | {person.age} | {person.email}</b></h3>
                            </div>
                        </UserCard>
                    ))}

                </div>
            </div >
        </div >
    );
}

export default UserCards;
