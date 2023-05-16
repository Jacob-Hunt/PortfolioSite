// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://mui.com/material-ui/material-icons/
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

// Stylesheet
import './App.scss';

// Components
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Card from './Components/Card/Card';
import Footer from './Components/Footer/Footer';

function App() {
    const imageCDNBaseURL: string = "http://res.cloudinary.com/dct9np835/image/upload/";
    return (
        <div className="App">
            <Navbar
                id="navbar"
                links={[
                    { Text: "Jacob Hunt", Href: "#pg1" },
                    { Text: "About", Href: "#pg2" },
                    { Text: "Portfolio", Href: "#pg3" },
                    { Text: "Contact", Href: "#pg4" }
                ]}
            />
            <Jumbotron
                id="pg1"
                backgroundUrl={ imageCDNBaseURL + "v1499222722/black-and-white-waves-close-up-view-circle_ubdnpp.jpg" }
            >
                <div id="cover-container">
                    <Card id="header-card">
                        <h1>Jacob Hunt</h1>
                        <hr />
                        <h4>
                            Computer Programmer, Embedded Systems Engineer, and Web Developer with
                            a passion for collaborative agile development, creating intuitive user
                            experiences, and writing well-organized, readable, and maintainable code.
                        </h4>
                    </Card>
                    <img
                        src={ imageCDNBaseURL + "v1499209733/portrait-cropped_e61bxi.jpg" }
                        alt="Portrait"
                        id="portrait"
                    />
                </div>
            </Jumbotron>
            <Jumbotron
                id="pg2"
                backgroundUrl={ imageCDNBaseURL + "v1499223502/home_office_ky7uxc.jpg" }
            >
                <div id="about-container">
                    <Card id="about-body">
                        <h1>About</h1>
                        <hr />
                        <h2>Education</h2>
                        <ul>
                            <li>University of Toledo: BS Computer Science and Engineering (Summa Cum Laude)</li>
                            <li>Lorain County Community College: AS Science (with Honors)</li>
                        </ul>
                        <h2>Experience</h2>
                        <ul>
                            <li>Emerson Professional Tools: Software Engineering Co-Op (May 2022 - Aug. 2022)</li>
                            <li>Emerson Professional Tools: Web Development Co-Op (Aug. 2021 - Jan. 2022)</li>
                            <li>Ridge Tool Company: Software Solutions Co-Op (Aug. 2020 - Jan. 2021)</li>
                        </ul>
                        <h2>Skills</h2>
                        <ul>
                            <li>Languages: Assembly (ARM, x86), C, C++, C#, HTML/CSS/SASS, Java, JavaScript, PLC Languages (LL, ST, FBD), Python, SQL, Typescript</li>
                            <li>Frameworks: .NET, Express, Node, PostgreSQL, React, Vue</li>
                            <li>General: Agile Development, Team Leadership, Full-Stack Web Development, Relational Database Management Systems, Programmable Logic Controllers, Electronic Circuits</li>
                        </ul>
                    </Card>
                </div>
            </Jumbotron>
            <Jumbotron
                id="pg3"
                backgroundUrl={ imageCDNBaseURL + "v1499200671/railway_qz0yku.jpg" }
            >
                <div id="portfolio-container">
                    <Card id="portfolio-header">
                        <h1>Portfolio</h1>
                    </Card>
                    <div id="portfolio-items">

                    </div>
                </div>
            </Jumbotron>
            <Jumbotron
                id="pg4"
                backgroundUrl={ imageCDNBaseURL + "v1499201445/inkwell_xhyvy6.jpg" }
            >
                <div id="contact-container">
                    <Card id="contact-card">
                        <h1>Contact</h1>
                        <hr />
                        <h4>Email: <a href="mailto:jacobhuntemail@gmail.com">jacobhuntemail@gmail.com</a></h4>
                        <h4>Phone: <a href="tel:5402233701">540-223-3701</a></h4>
                        <div id="social-links-container">
                            <a
                                href="https://www.linkedin.com/in/jhweb/"
                                className="icon-link"
                                target="_blank"
                            >
                                <LinkedInIcon fontSize="large" />
                            </a>
                            <a
                                href="https://github.com/Jacob-Hunt/"
                                className="icon-link"
                                target="_blank"
                            >
                                <GitHubIcon fontSize="large" />
                            </a>
                        </div>
                    </Card>
                </div>
            </Jumbotron>
            <Footer />
        </div>
    );
}

export default App;
