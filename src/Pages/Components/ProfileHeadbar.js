import React from "react";

//headbar con immagine e informazioni profilo

export default function ProfileHeader(props) {
  const { name, img, age, from } = props.profile;
  return (
    <>
      <img className="profileimg" href={img} alt="profile" />
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{from}</h2>
    </>
  );
}
