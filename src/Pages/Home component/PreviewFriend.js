import React from "react";
import IconPreviewFriend from "../Components/IconPreviewFriend";
import { Link } from "react-router-dom";

//banner con preview  degli amici per la sezione home


export default function PreviewFriend(props) {
  return (
    <div >
      <Link className='sectiontitle' to="/ "><h1 >FRATM</h1></Link>
      <div style={{display:'flex'}}>
      <IconPreviewFriend array={props.friendList} path={'/profile/'} />
      </div>
    </div>
  );
}
