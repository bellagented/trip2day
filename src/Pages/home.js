import React from "react";
import ProfileHeadbar from "./Components/ProfileHeadbar";
import PreviewPlanner from "./Home component/PreviewPlanner";
import PreviewFriendRequest from "./Home component/PreviewFriendRequest";
import PreviewFriend from "./Home component/PreviewFriend";
let profile={img:'',name:'GIANGIANNI',age:'millemila',from:'acquario di cattolica'};
export default function Home() {
  return (
    <>
      <ProfileHeadbar profile={profile} />
      <PreviewPlanner />
      <PreviewFriendRequest />
      <PreviewFriend />
    </>
  );
}


