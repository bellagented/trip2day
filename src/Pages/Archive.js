import React from "react";
import '../styles/Archive.css';
const journey = {
  title: "Madrid with Bae",
  activity: [
    {
      name: "Plaza Mayor",
      description:
        "Madrid’s main square holds centuries of history in its cobbles, and has been the scene of everything from coronations to bullfights and beheadings. These days it’s a nice place in which to stroll and sample one of the city’s famed foods: bocadillo de calamares (a calamari sandwich) from one of the bars surrounding the square",
      img:
        "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2020/04/gettyimages-678934868-1.jpg",
    },
    {
      name: "Royal Palace of Madrid",
      description:
        "The official residence of Spain’s royal family is these days used for official ceremonies only (King Felipe and Queen Letizia live in the more modest Zarzuela Palace just outside Madrid). Members of the public can visit the palace and check out centuries worth of paintings, furniture and armour.",
      img:
        "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2020/04/gettyimages-497855858.jpg",
    },
    {
      name: "Retiro Park",
      description:
        "Madrid’s most beautiful park is the ideal place to spend a lazy afternoon enjoying a picnic and messing about in a rowing boat on the lake.",
      img:
        "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2020/04/gettyimages-1135388519.jpg",
    },
  ],
};

export default function Archive() {
  return (
      <div className='archivecontainer'>
    <div className="timeline">
      <h1 className="journeytitle">{journey.title}</h1>
      {journey.activity.map((place, i) => {
          let side = (i+2)%2===0? 'container left':'container right';
        return (
          <div className={side} key={place.name}>
            <div className="content">
            <img src={place.img} alt='location' className='locationimage'/>
              <h2>{place.name}</h2>
              <p>{place.description}</p>
              <button className="archivebutton">Add to your plan</button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}
