import React, { useState, useEffect } from 'react';

// import css
import './TinderCards.css';

// import tinder card
import TinderCard from 'react-tinder-card';

// import axios instance that we havwe created
import axios from 'axios';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('http://localhost:5000/tinder/cards');

            setPeople(req.data)
        };
        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!")
    }
    return (
        <div className="tinderCards" >
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        preventSwipe={["up", "down"]}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            className="card"
                            style={{ backgroundImage: `url(${person.imgUrl})` }}
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;