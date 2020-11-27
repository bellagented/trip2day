import React, { useEffect } from "react";
import ProfileHeadbar from "./Components/ProfileHeadbar";
import RequestBanner from "./FriendProfile Component/RequestBanner";
import FriendArchive from "./FriendProfile Component/FriendArchive";
import "../styles/FriendProfile.css";
import { useParams } from "react-router-dom";

export default function FriendProfile() {
  let { friend } = useParams();
  const nickname = friend;
  const text = "non so fare le token di accesso, uccidetemi";
  const img =
    "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80";

  return (
    <div>
      <ProfileHeadbar profile={{ name: nickname, text: text, img: img }} />
      <RequestBanner nickname={nickname} />
      <FriendArchive />
    </div>
  );
}
