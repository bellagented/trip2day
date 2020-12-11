import React, { useEffect, useState } from "react";
import ProfileHeadbar from "./Components/ProfileHeadbar";
import RequestBanner from "./FriendProfile Component/RequestBanner";
import FriendArchive from "./FriendProfile Component/FriendArchive";
import "../styles/FriendProfile.css";
import { useParams } from "react-router-dom";

export default function FriendProfile() {
  let { friend } = useParams();
  const [profile, setProfile] = useState({ name: "loading}", request: [] });
  const nickname = friend;
  async function getData(url, setValue) {
    let request = await fetch(url);
    let response = await request.json();
    setValue(response);
    return response;
  }
  useEffect(() => {
    getData("http://localhost:3001/friendprofile/" + nickname, setProfile);
  }, []);

  return (
    <div>
      <ProfileHeadbar
        profile={{ name: nickname, text: profile.text, img: profile.img }}
      />
      <RequestBanner request={profile.request} name={nickname} />
      <FriendArchive />
    </div>
  );
}
