import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/StudentSide/Login';
import Electives from './Components/StudentSide/Electives';
import SignUp from './Components/StudentSide/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/signup"><SignUp/></Route>
        <Route exact path="/student/login"><Login/></Route>
        <Route exact path="/student/login/electives"><Electives/></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
