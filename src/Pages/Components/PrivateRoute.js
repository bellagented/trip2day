import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import  Loading  from "./loading";

// export default function PrivateRoute({ children, ...rest }) {
//   const {isAuth} = useContext(UserContext);
//   return (
//     <Route
//     {...rest}
//     render={({ location }) =>
//       isAuth ? (
//         children
//       ) : (
//         <Redirect
//           to={{
//             pathname: "/",
//             state: { from: location }
//           }}
//         />
//       )
//     }
//   />
// );
// }
const PrivateRoute = ({ component, ...args }) => {
  return (
    <Route
    component={withAuthenticationRequired(component, {onRedirecting: () => <Loading/>
    })}
    {...args}
    />
  );
};

export default PrivateRoute;