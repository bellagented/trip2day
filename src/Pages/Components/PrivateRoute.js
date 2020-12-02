import {useContext} from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "./UserContext";

export default function PrivateRoute({ children, ...rest }) {
  const {isAuth} = useContext(UserContext);
  return (
    <Route
    {...rest}
    render={({ location }) =>
      isAuth ? (
        children
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location }
          }}
        />
      )
    }
  />
);
}