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
            url: "https://www.thenews.com.pk/assets/uploads/updates/2020-11-15/744227_1659281_dua-lipa_updates.jpg"
        },
        {
            name: "Anne Marie",
            url: "https://cdn.vox-cdn.com/thumbor/gg5VmBhJcsnFMUsMIrl7PErJHZM=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15958974/akrales_180920_2848_0016_2.jpg"
        },
        {
            name: "Bill Gates",
            url: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_1185999101_20001333200092800_443629.jpg"
        },
        {
            name: "Taylor Swift",
            url: "https://static.onecms.io/wp-content/uploads/sites/20/2020/12/02/taylor-swift1.jpg"
        }
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