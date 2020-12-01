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
import PDF from './Components/StudentSide/PDF';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/student/enter/signup"><SignUp/></Route>
        <Route exact path="/student/enter"><Login/></Route>
        <Route exact path="/student/enter/electives"><Electives/></Route>
        <Route exact path="/student/enter/admin"><Effer/></Route>
        <Route exact path="/student/enter/admin/pdf"><PDF/></Route>
        <Route path="/"><Login/></Route>
      </Switch>
    </Router>
  );
}

export default App;
