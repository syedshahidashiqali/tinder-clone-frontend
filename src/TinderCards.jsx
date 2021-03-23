import React, { useState } from 'react';

// import css
import './TinderCards.css';

// import tinder card
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://s3.india.com/wp-content/uploads/2020/03/Elon-Musk-AP.jpg"
        },
        {
            name: "Shakira",
            url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/738B/production/_116497592_gettyimages-971720370.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://media.wired.com/photos/6019cab23453f789506008d0/master/pass/Sec_Bezos_1036084400.jpg"
        },
        {
            name: "Dua Lipa",
            url: "https://assets.vogue.com/photos/5f48136693122510d16f0352/4:3/w_1080,h_810,c_limit/118520052_586967341971321_6121798062289952442_n.jpg"
        },
        {
            name: "Pitbull",
            url: "https://vz.cnwimg.com/wp-content/uploads/2010/03/Pitbull.jpg"
        },
        {
            name: "Ellen",
            url: "https://www.geo.tv/assets/uploads/updates/2021-03-18/340307_5260100_updates.jpg"
        },
        {
            name: "Bill Gates",
            url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_1185999101_20001333200092800_443629.jpg"
        },
        {
            name: "Taylor Swift",
            url: "https://static.onecms.io/wp-content/uploads/sites/20/2020/12/02/taylor-swift1.jpg"
        },
        {
            name: "Engin Altan",
            url: "https://www.incpak.com/wp-content/uploads/2020/09/50094085_2224186024567959_693900883193935752_n.jpg"
        },
        {
            name: "Esra Bilgic",
            url: "https://i.dawn.com/large/2021/01/6007fbceb61de.png"
        },
        
    ]);

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
                            style={{ backgroundImage: `url(${person.url})` }}
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