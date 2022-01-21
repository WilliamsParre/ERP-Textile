import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Home from './Components/HomePage/Home';
import LoginHome from './Components/Home/LoginHome';
import ContactUs from './Components/ContactUs/ContactUs';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import ReSetPass from './Components/ResetPassword/ReSetPass';

function App() {

  const [ user, setLoginUser ] = useState({})

  return (
    <div className="App">
      <Router>
        {user && user._id ? null : <NavBar/>}
        <Switch>
          <Route path='/' exact>
            {
              user && user._id ?  <LoginHome setLoginUser={setLoginUser}/> : <Home setLoginUser={setLoginUser} />
              // <LoginHome setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path='/contactus' exact component={ContactUs}/>
          <Route path='/signup' exact component={SignUp}/>
          <Route path="/login" exact><Login setLoginUser={setLoginUser}/></Route>
          <Route path='/ReSetPass' exact component={ReSetPass}/>
        </Switch>
        {user && user._id ? null : <Footer />}
      </Router>
    </div>
  );
}

export default App;
