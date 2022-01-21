import React from 'react';
import './SideNavBar.css';
import { LineStyle, Timeline, TrendingUp, Today, DateRange, EventNote, Feedback } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function SideNavBar() {

    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <div className="sideBarMenu" style={{ marginTop: '20px' }}>
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sideBarList">
                        <Link to="/" className="link">
                            <li className="sideBarListItem">
                                <LineStyle className="sideBarIcon" /> Home
                            </li>
                        </Link>
                    </ul>
                    <ul className="sideBarList">
                        <Link to="/Analytics" className="link">
                            <li className="sideBarListItem">
                                <Timeline className="sideBarIcon" /> Analytics
                            </li>
                        </Link>
                    </ul>
                    <div className="sideBarMenu">
                        <h3 className="sideBarTitle" style={{ alignSelf: 'left' }}>Employees</h3>
                        <ul className="sideBarList">
                            <Link to="/employee" className="link">
                                <li className="sideBarListItem">
                                    <i className="fas fa-tasks sideBarIcon"></i> Manage
                                </li>
                            </Link>
                        </ul>
                        <ul className="sideBarList">
                            <Link to="/Analytics" className="link">
                                <li className="sideBarListItem">
                                    <Timeline className="sideBarIcon" /> Analytics
                                </li>
                            </Link>
                        </ul>
                        <ul className="sideBarList">
                            <Link to="/Analytics" className="link">
                                <li className="sideBarListItem">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-octagon sideBarIcon" viewBox="0 0 16 16">
                                        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                    </svg> Reports
                                </li>
                            </Link>
                        </ul>
                    </div>
                    {/* <ul className="sideBarList">
                        <Link to="/sales" className="link">
                            <li className="sideBarListItem">
                                <TrendingUp className="sideBarIcon" /> Sales
                            </li>
                        </Link>
                    </ul> */}

                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Accounting</h3>
                    <ul className="sideBarList">
                        <Link to="/day" className="link">
                            <li className="sideBarListItem">
                                <Today className="sideBarIcon" /> Day
                            </li>
                        </Link>
                    </ul>
                    {/* <ul className="sideBarList">
                        <Link to="/Analytics" className="link">
                            <li className="sideBarListItem">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-seam sideBarIcon" viewBox="0 0 16 16">
                                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
                                </svg>
                                Products
                            </li>
                        </Link>
                    </ul> */}
                    <ul className="sideBarList">
                        <Link to="/month" className="link">
                            <li className="sideBarListItem">
                                <DateRange className="sideBarIcon"/> Month
                            </li>
                        </Link>
                    </ul>
                    <ul className="sideBarList">
                        <Link to="/yearly" className="link">
                            <li className="sideBarListItem">
                                <EventNote className="sideBarIcon"/> Yearly
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sideBarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sideBarList">
                        <Link to="/Analytics" className="link">
                            <li className="sideBarListItem">
                                <Feedback className="sideBarIcon" /> Feedback
                            </li>
                        </Link>
                    </ul>
                    <ul className="sideBarList">
                        <Link to="/Analytics" className="link">
                            <li className="sideBarListItem">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat  sideBarIcon" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg> Messages
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideNavBar
