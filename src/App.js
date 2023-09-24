import './App.css';
import './index.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminHome from './components/AdminBars';
import Home from "./components/home";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/adminDash" component={Home}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
