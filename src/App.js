import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Components/StudentSide/Login';
import Electives from './Components/StudentSide/Electives';
import SignUp from './Components/StudentSide/SignUp';
import Effer from './Components/StudentSide/Effer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/enter/signup"><SignUp/></Route>
        <Route exact path="/student/enter"><Login/></Route>
        <Route exact path="/student/enter/electives"><Electives/></Route>
        <Route exact path="/student/enter/admin"><Effer/></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
