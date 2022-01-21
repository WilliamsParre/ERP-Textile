import React from 'react';
import NavBar from './NavBar/NavBar';
import './NavBar/LoginHome.css';
import Home from './SideBar/Pages/DashBoardHome/Home';
import EmployeeMain from './SideBar/Pages/Employee/EmployeeMain';
import SideNavBar from './SideBar/SideNavBar';
import AddEmployee from './SideBar/Pages/Employee/AddEmployee';
import Day from './SideBar/Pages/Accounting/Day';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function LoginHome({ setLoginUser }) {

    return (
        <div>
            <Router>
                <NavBar setLoginUser={setLoginUser} />
                <Switch>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2" style={{ background: 'rgb(246, 246, 248)' }}>
                                <SideNavBar />
                            </div>
                            <div className="col-sm-10">
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/employee">
                                    <EmployeeMain/>
                                </Route>
                                <Route exact path="/addEmployee">
                                    <AddEmployee/>
                                </Route>
                                <Route exact path="/day">
                                    <Day/>
                                </Route>
                                <Route exact path="/month">
                                    <AddEmployee/>
                                </Route>
                                <Route exact path="/year">
                                    <AddEmployee/>
                                </Route>
                            </div>
                        </div>
                    </div>
                </Switch>
            </Router>
        </div>
    )
}

export default LoginHome
