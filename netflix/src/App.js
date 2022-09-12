import React from "react";
import {Home,SignIn, SignUp, Browse} from './pages';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTE from './constants/routes';
export default function App() {


  return (
    <>
      <Router>
        {/* <Nav /> */}
      <Switch>
          <Route exact path={ROUTE.HOME} component={Home} />
          <Route  path={ROUTE.SIGN_IN} component={SignIn} />
          <Route  path={ROUTE.SIGN_UP} component={SignUp} />
          <Route  path={ROUTE.BROWSE} component={Browse} />
      </Switch>
    </Router>
    </>
  );
}

// export default App;
