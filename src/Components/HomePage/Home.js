import React from 'react';
import './Home.css';
// import AboutPic from './About.jpg';
import Roy from './Roy.jpeg';
import Leela from './Leela.jpeg';
import WilliamsP from './WilliamsP.jpeg';
import Card from './Card';
import About from '../About/About';
import Services from '../Services/Services';
import MainFooter from './MainFooter';
import { Link } from 'react-router-dom';
function Home() {
    return (
        <div>
            <div className="main-picture">
                {/* , marginLeft: '8rem' */}
                <h1>ERP for Textile Industry<br />Where Industry Plans</h1>
                <Link className="btn btn-primary offset-sm-2 col-sm-1" to="/signup" style={{ backgroundColor: 'purple' }}> Get Started</Link>
            </div>
            <About />
            <div className="container" style={{margin: '3rem auto', marginBottom: '130px'}}>
                <h1 style={{margin: '3rem'}}>Developers</h1>
                <div className="row" style={{justifyContent:'space-evenly'}}>
                    <div className="col-sm-3">
                        <Card profilepic={Roy} Name="Sumadhur Royal" Fav="Front End Developer" Mail="mailto:2000031170@kluniversity.in" />
                    </div>
                    <div className="col-sm-3">
                        <Card profilepic={Leela} Name="Leela Krishna" Fav="Back End Developer" Mail="mailto:2000031326@kluniversity.in" />
                    </div>
                    <div className="col-sm-3">
                        <Card profilepic={WilliamsP} Name="Williams P" Fav="Front-Back End Developer" Mail="mailto:2000031360@kluniversity.in" />
                    </div>
                </div>
            </div>
            <Services />
            {/* <div className="row">
                <div className="col-sm-12" style={{ background: 'black', padding: '0.5px' }}>
                </div>
            </div> */}
            <MainFooter />
        </div>
    )
}

export default Home;
