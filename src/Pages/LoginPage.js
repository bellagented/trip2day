import React from "react";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import BackgroundVideo from './BackgroundVideo'
import Logo from '../styles/trip2daylogo.png'
import '../styles/LogInPage.css'

export default function PreviewFriendRequest(props) {
  const { loginWithRedirect } = useAuth0();
  const history = useHistory();


  return (
    <>
    <BackgroundVideo/>
    <Router>

      <div className='viewport-header'>
     
      <img src={Logo} alt="logo" className='logo' />
      <p className='brandQuote'>Let's plan your next adventure!</p>
     
          <button className='loginButtonFB' onClick={() => history.push("/home")}>Log In with FB</button>
          <button className='loginButton' onClick={() => history.push("/home")}>Log In or Sign Up</button>
        
        
     
      </div>
     
      </Router>
    </>
  );
}
