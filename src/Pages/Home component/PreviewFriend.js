import React from "react";
import IconPreview from "../Components/IconPreview";
import { Link } from "react-router-dom";
//banner con preview  degli amici per la sezione home


export default function PreviewFriendRequest(props) {
  return (
    <div >
      <Link className='sectiontitle' to="/ "><h1 >FRATM</h1></Link>
      <div style={{display:'flex'}}>
      <IconPreview array={props.friendList} />
      </div>
    </div>
  );
}
