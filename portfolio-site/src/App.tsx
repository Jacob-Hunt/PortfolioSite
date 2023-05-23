// Documentation: https://reactjs.org/
import React from "react";

// Stylesheet
import "App.scss";

// Components
import Navbar from "Components/Navbar/Navbar";
import Jumbotron from "Components/Jumbotron/Jumbotron";
import Footer from "Components/Footer/Footer";
import CoverPage from "Pages/CoverPage/CoverPage";
import AboutPage from "Pages/AboutPage/AboutPage";
import PortfolioPage from "Pages/PortfolioPage/PortfolioPage";
import ContactPage from "Pages/ContactPage/ContactPage";

// Constants
import { ImageCDNBaseURL } from "./constants";

function App() {
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
                backgroundUrl={ ImageCDNBaseURL + "v1499222722/black-and-white-waves-close-up-view-circle_ubdnpp.jpg" }
            >
                <CoverPage />
            </Jumbotron>
            <Jumbotron
                id="pg2"
                backgroundUrl={ ImageCDNBaseURL + "v1499223502/home_office_ky7uxc.jpg" }
            >
                <AboutPage />
            </Jumbotron>
            <Jumbotron
                id="pg3"
                backgroundUrl={ ImageCDNBaseURL + "v1499200671/railway_qz0yku.jpg" }
            >
                <PortfolioPage />
            </Jumbotron>
            <Jumbotron
                id="pg4"
                backgroundUrl={ ImageCDNBaseURL + "v1499201445/inkwell_xhyvy6.jpg" }
            >
                <ContactPage />
            </Jumbotron>
            <Footer />
        </div>
    );
}

export default App;
