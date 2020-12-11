import "./App.css";
import Home from "./Pages/home";
import LoginPage from "./Pages/LoginPage";
import FriendProfile from "./Pages/FriendProfile";
import GiveSuggestion from "./Pages/GiveSuggestion";
import Option from "./Pages/Option";
import ListPlanner from "./Pages/ListPlanner";
import Planner from "./Pages/Planner";
import NewPlanner from "./Pages/NewFormOr";
import ListArchive from "./Pages/ListArchive";
import Archive from "./Pages/Archive";
import FriendList from "./Pages/FriendList";
import Navbar from "./Pages/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Pages/Components/PrivateRoute";
import Loading from "./Pages/Components/loading";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/profile/:friend" component={FriendProfile} />
        <PrivateRoute
          path="/giveSuggestion/:id/:towho/:forwhere"
          component={GiveSuggestion}
        />
        <PrivateRoute path="/option" component={Option} />
        <PrivateRoute path="/newPlanner" component={NewPlanner} />
        <PrivateRoute path="/planner/:idplanner" component={Planner} />
        <PrivateRoute path="/listPlanner" component={ListPlanner} />
        <PrivateRoute path="/archive/:idarchive" component={Archive} />
        <PrivateRoute path="/archive" component={ListArchive} />
        <PrivateRoute path="/friendlist" component={FriendList} />

        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
