import logo from './logo.svg';
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
import {
  BrowserRouter as Router,
Switch,Route
} from "react-router-dom";

function App() {
  return (
    <Router>
<Switch>
<Route path='/home'><Home/></Route>
<Route path='/profile/:friend'><FriendProfile/></Route>
<Route path='/giveSuggestion'><GiveSuggestion/></Route>
<Route path='/notification'><Notification/></Route>
<Route path='/option'><Option/></Route>

<Route path='/planner/:idplanner'><Planner/></Route>
<Route path='/planner'><Planner/></Route>

<Route path='/archive/:idarchive'><Archive/></Route>
<Route path='/archive'><ListArchive/></Route>
<Route path='/friendlist'><FriendList/></Route>
<Route path='/'><LoginPage/></Route>
</Switch>
    </Router>
  );
}

export default App;
