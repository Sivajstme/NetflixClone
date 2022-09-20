import React from "react";
import {Home,SignIn, SignUp, Browse} from './pages';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTE from './constants/routes';
import { IsUserRedirect , ProtectedRoutes} from "./helpers/routes";

export default function App() {

  const user = null;

  return (
    <>
      <Router>
        {/* <Nav /> */}
      <Switch>
          <IsUserRedirect user={user}  loggedInPath={ROUTE.BROWSE} path={ROUTE.SIGN_IN}>
            <SignIn />
          </IsUserRedirect>
          <IsUserRedirect user={user} loggedInPath={ROUTE.BROWSE} path={ROUTE.SIGN_UP}>
            <SignUp />
          </IsUserRedirect>
          {/* <Route  path={ROUTE.SIGN_UP} component={SignUp} /> */}
          <ProtectedRoutes user={user} exact path={ROUTE.BROWSE} >
            <Browse/>
          </ProtectedRoutes>
          {/* <Route  path={ROUTE.BROWSE} component={Browse} /> */}
          <IsUserRedirect exact user= {user} loggedInPath = {ROUTE.BROWSE} path = {ROUTE.HOME} >
            <Home/>
          </IsUserRedirect>
          {/* <Route  path={ROUTE.HOME} component={Home} /> */}

      </Switch>
    </Router>
    </>
  );
}

// export default App;
