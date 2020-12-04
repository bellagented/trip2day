import {useState} from "react";
import './App.css';
import Home from './Pages/home' ;
import LoginPage from './Pages/LoginPage';
import FriendProfile from './Pages/FriendProfile';
import GiveSuggestion from './Pages/GiveSuggestion';
import Notification from './Pages/Notification';
import Option from './Pages/Option';
import ListPlanner from './Pages/ListPlanner';
import Planner from './Pages/Planner';
import ListArchive from './Pages/ListArchive';
import Archive from './Pages/Archive';
import FriendList from './Pages/FriendList';
import Navbar from './Pages/Navbar';
import Signup from './Pages/signup';
import {
  BrowserRouter as Router,
Switch,
Route
} from "react-router-dom";
import UserContext from "./Pages/Components/UserContext";
import PrivateRoute from "./Pages/Components/PrivateRoute";

function App() {
  const [isAuth, setIsAuth] = useState(true);
  return (
    <UserContext.Provider value={{isAuth, setIsAuth}}>
    <Router>
    <Navbar/>
<Switch>
<PrivateRoute path='/home'><Home/></PrivateRoute>
<PrivateRoute path='/profile/:friend'><FriendProfile/></PrivateRoute>
<PrivateRoute path='/giveSuggestion/:id/:towho/:forwhere'><GiveSuggestion/></PrivateRoute>
<PrivateRoute path='/notification'><Notification/></PrivateRoute>
<PrivateRoute path='/option'><Option/></PrivateRoute>


<PrivateRoute path='/planner/:idplanner'><Planner/></PrivateRoute>
<PrivateRoute path='/planner'><ListPlanner/></PrivateRoute>


<PrivateRoute path='/archive/:idarchive'><Archive/></PrivateRoute>
<PrivateRoute path='/archive'><ListArchive/></PrivateRoute>
<PrivateRoute path='/friendlist'><FriendList/></PrivateRoute>
<Route path='/'><LoginPage/></Route>
<Route path='/signup'><Signup/></Route>
</Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
