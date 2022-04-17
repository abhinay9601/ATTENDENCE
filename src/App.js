import "./App.css";
import Numberlogin from "./Numberlogin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Verification from './Verification';
import Profile from './Profile';

function App() {
  return (<Router>
    <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/verification">
            <Verification />
          </Route>
          <Route path="/">
            <Numberlogin />
          </Route>
        </Switch>
        </Router>
  );
}

export default App;
