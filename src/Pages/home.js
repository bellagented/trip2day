import React from "react";
import "../styles/Home.css";
import { useEffect, useState } from "react";
import PreviewPlanner from "./Home component/PreviewPlanner";
import PreviewFriendRequest from "./Home component/PreviewFriendRequest";
import Footer from './Footer'
// import PreviewFriend from "./Home component/PreviewFriend";
// import ArchivePreview from "./Home component/ArchivePreview";
import { useAuth0 } from "@auth0/auth0-react";
import Banner from '../styles/banner-home-2.jpg'

export default function Home() {
  const [data, setData] = useState({});
  const [profile, setProfile] = useState({});
  const [friendList, setFriendList] = useState([]);
  const [planners, setPlanners] = useState([]);
  const { user } = useAuth0();
  const { name } = user;

  async function getData(url, setValue) {
    let request = await fetch(url);
    let response = await request.json();
    setValue(response);
    return response;
  }

  const createProfile = (allinfo) => {
    return setProfile({
      name: allinfo.nickname,
      age: allinfo.age,
      from: allinfo.from,
      img: allinfo.img,
    });
  };

  const createPlanners = (planners) => {
    const plannerArray = planners.map((planner) => {
      return { name: planner.where, img: planner.img, id:planner.id };
    });
    return setPlanners(plannerArray);
  };

  const createFriendList = (friends) => {
    const friendArray = friends.map((friend) => {
      return { name: friend.nickname, img: friend.img };
    });
    return setFriendList(friendArray);
  };

  useEffect(() => {
    getData("http://localhost:3001/"+name+"/", setData).then((data) => {
      createProfile(data);
      createFriendList(data.friendList);
      createPlanners(data.planner);
    });
  }, []);

  return (

    
   <div>
    <div className='home-header-grid'>

      <div className="banner-home">
        <img src={Banner} alt="logo" className='img-banner' />
      </div>

      <header className='homecontainer'>
        <h2 className='homecontent-container' >Lorem ipsum  <br /> dolor sit amet consectetur elit.</h2>
        <h2 className='homecontent-container-account'> Welcome {name} </h2>
        {/* <ProfileHeadbar profile={profile} /> */}
      </header>
      <section className='preview-info'>
        <PreviewPlanner planners={planners} />
        <PreviewFriendRequest />
        {/* <PreviewFriend friendList={friendList} />
        <ArchivePreview /> */}
      </section>
      
    </div>
    <Footer/>
    </div>
  );
  }
