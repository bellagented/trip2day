import React from "react";
import IconPreviewFriend from "../Components/IconPreviewFriend";
import { Link } from "react-router-dom";

//banner con preview  degli amici per la sezione home


export default function PreviewFriend(props) {
  return (
    <section className="containerPreview-youfriends"  >
      <div>
      <Link className='sectiontitle' to="/ ">
        <h2 className="title">Friends</h2></Link>
       </div>

      <div className="preview-friend">
        <IconPreviewFriend array={props.friendList} path={'/profile/'} />
      </div>

    </section>
  );
}
