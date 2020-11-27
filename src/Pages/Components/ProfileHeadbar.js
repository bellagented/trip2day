import React from "react";

//headbar con immagine e informazioni profilo

export default function ProfileHeader(props) {
  const { name, img, text} = props.profile;
  return (
    <div className='ProfileHeader'>
      <img className="profileimg" src={img} alt="profile" />
      <section className="textsection">
      <h1 className="nameprofile">{name}</h1>
      <h4 className="subtextprofil">{text}</h4>
      </section>
    </div>
  );
}
