import React from 'react'
import AboutPic from './About.jpg';
import About1 from './About1.jpg';
import Shipment from './Shipment.jpg';
import Flexibility from './Flexibility.jpg';
import RealTimeAccess from './Access.jpg';
import Automation from './Automation.jpg';
import Security from './Security.jpg';
import Finance from './Finance.jpg';
import Information from './Information.png';

function About() {
    return (
        <div>
            <div className="container">
                <div className="row About" id="About">
                    <h3 style={{ marginBottom: '50px' }}>About</h3>
                    <h5 className="col-sm-8" style={{ textAlign: 'justify' }}>
                        The implementation of ERP in Textile saves man power and increases more yield in less time. The benifits of ERP are Information Integration, On Time Shipment, Increased Flexibility, Real-time access & visibility, Automation, Finance & Accounting and security.
                        <br />
                        <br />
                        The data regarding the industry can be maintained effectively with high security.
                        The flow of work can be updated daily and it shows us the work progress. The old methods like writing the each and every details in a book will be difficult, ERP comes handy and solve many real time problems easily. The main moto of using ERP in Textile Industry is to make more yield in less time with less effort. By using the ERP in Textile making will reduces the cost and increases the productivity.                        
                    </h5>
                    <img className="col-sm-4 AboutPic" src={About1} alt="About Pic" />
                </div>
            </div>
            <div className="container-fluid" style={{ background: '#e2e7fb', marginTop: '50px', marginBottom: '100px' }}>
                <div className="container" style={{ paddingTop: '100px', paddingBottom: '130px' }}>
                    <div className="row About" id="About">
                        <img className="col-sm-8 AboutPic" src={AboutPic} alt="About Pic" style={{ borderRadius: '10%' }} />
                        <div className="col-sm-12">
                            <h3 style={{ textAlign: 'right', marginBottom: '50px' }}>Moto of ERP</h3>
                            <h5 style={{ textAlign: 'justify' }}>
                                Using ERP in textile making changes many things in the industry. Most of the man power is used in industries to get the output but, it is very difficult to make some things better using man power. while in the same time when we use ERP in industries most of the man power is saved and the industry can run in an organized way. Using ERP the most of the things can be done in less time. The main moto of using ERP in Textile Industry is to make more yield in less time with less effort. The machines can work effectively and  accurately
                                when compared to the man. The computers can store large data, for example it is very difficult to store the workers details in a book, but using the computers makes this task easier.
                                <br />
                                <br />
                                When the record book is lost it is difficult to bring back but in computers we can retrieve the data easily and we can restore it back.
                            </h5>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ paddingBottom: '130px' }}>
                <div className="row About" id="About">
                    <h3 style={{ marginBottom: '50px' }}>Information Integration </h3>
                    <h5 className="col-sm-8" style={{ textAlign: 'justify' }}>
                        The most important benefit of intergrating the components in any system is
                        that has the ability to update and share data between related business functions.
                        <br />
                        <br />
                        <br />
                        <br />
                        Operational, business, and financial data are integrated on a single platform
                        for easier management and greater visibility.
                    </h5>
                    <img className="col-sm-3 AboutPic offset-1" src={Information} alt="About Pic" style={{ borderRadius: '10%' }} />
                </div>
            </div>
            <div className="container-fluid" style={{ background: '#e2e7fb', marginTop: '50px', marginBottom: '100px' }}>
                <div className="container" style={{ paddingTop: '100px', paddingBottom: '130px' }}>
                    <div className="row About" id="About">
                        <img className="col-sm-4 AboutPic" src={Shipment} alt="About Pic" style={{ borderRadius: '10%' }} />
                        <div className="col-sm-8">
                            <h3 style={{ color: '#ea3838', textAlign: 'right', marginBottom: '50px' }}>On Time Shipment</h3>
                            <h5 style={{ textAlign: 'justify' }}>
                                The most important benefit of intergrating the components in any system is
                                that has the ability to update and share data between related business functions.
                                Operational, business, and financial data are integrated on a single platform
                                for easier management and greater visibility.
                            </h5>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '130px' }}>
                <div className="row About" id="About">
                    <div className="col-sm-8">
                        <h3 style={{ color: '#2e69dd', marginBottom: '50px' }}>Increased Flexibility</h3>
                        <h5 style={{ textAlign: 'justify' }}>
                            Product flexibility is type of ability of the operation
                            to efficiently produce highly customized and unique products.
                            <br />
                            <br />
                            ERP system not only improve flexibility of manufacturing operations,
                            but is also improve flexibility of organization.
                            <br />
                            <br />
                            Reporting capabilities provide data-driven, actionable insights are used to improve flexibility.
                        </h5>

                    </div>
                    <img className="col-sm-4 AboutPic" src={Flexibility} alt="About Pic" style={{ borderRadius: '10%' }} />
                </div>
            </div>
            <div className="container-fluid" style={{ background: '#e2e7fb', marginTop: '50px', marginBottom: '100px' }}>
                <div className="container" style={{ paddingTop: '100px', paddingBottom: '130px' }}>
                    <div className="row About" id="About">
                        <img className="col-sm-3 AboutPic" src={RealTimeAccess} alt="About Pic" style={{ borderRadius: '10%' }} />
                        <div className="col-sm-8 offset-1">
                            <h3 style={{ color: '#ea3838', textAlign: 'right', marginBottom: '50px' }}>Real-time access & visibility</h3>
                            <h5 style={{ textAlign: 'justify' }}>
                                Easily view business operations and instantly access domestic or global supply chains all in one place.
                                <br />
                                <br />
                                One can access them any where and at any time.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={{ margin: '3rem auto', marginBottom: '130px' }}>
                <div className="row" style={{ justifyContent: 'space-evenly' }}>
                    <div className="col-sm-5" style={{ border: '2px solid green', padding: '20px', borderRadius: '5%' }}>
                        <img src={Finance} alt="About Pic" style={{ width: '100%' }} />
                        <h1 style={{ color: '#009c86' }}>Finance & Accounting</h1>
                        <h5>Financial data is tracked, stored, and managed all in one place.</h5>
                    </div>
                    <div className="col-sm-5" style={{ border: '2px solid #d7e9ff', background: '#d7e9ff', padding: '20px', borderRadius: '5%' }}>
                        <img src={Security} alt="About Pic" style={{ borderRadius: '100%', width: '100%' }} />
                        <h1>Security</h1>
                        <h5>Data is held securely and in keeping with your industry’s compliance requirements.</h5>
                    </div>
                </div>
            </div>

            <div className="container" style={{ paddingTop: '100px', paddingBottom: '130px' }}>
                <div className="row About" id="About">
                    <img className="col-sm-4 AboutPic" src={Automation} alt="About Pic" style={{ borderRadius: '10%' }} />
                    <div className="col-sm-8">
                        <h3 style={{ color: '#af226d', textAlign: 'right', marginBottom: '50px' }}>Automation</h3>
                        <h5 style={{ textAlign: 'justify' }}>
                            Formerly redundant or manual tasks like invoicing or reporting are produced
                            automatically and streamlined based on parameters you set up in the system.
                        </h5>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <div className="row">
                    <div class="col">
                        
                    </div>
                </div>
            </div> */}
        </div >
    )
}

export default About
