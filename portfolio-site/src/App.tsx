import React from 'react';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Card from './Components/Card/Card';

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
                            a passion for collaborative agile development, building intuitive user
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
            </Jumbotron>
            <Jumbotron
                id="pg3"
                backgroundUrl={ imageCDNBaseURL + "v1499200671/railway_qz0yku.jpg" }
            >
            </Jumbotron>
            <Jumbotron
                id="pg4"
                backgroundUrl={ imageCDNBaseURL + "v1499201445/inkwell_xhyvy6.jpg" }
            >
            </Jumbotron>
        </div>
    );
}

export default App;
