import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Jumbotron from './Components/Jumbotron/Jumbotron';

function App() {
    const imageCDNBaseURL: string = "http://res.cloudinary.com/dct9np835/image/upload/";
    return (
        <div className="App">
            <Navbar
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
