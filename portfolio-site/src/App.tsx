import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar
                    links={[
                        { Text: "Jacob Hunt", Href: "#pg1" },
                        { Text: "About", Href: "#pg2" },
                        { Text: "Portfolio", Href: "#pg3" },
                        { Text: "Contact", Href: "#pg4" }
                    ]}
                />
                <div id="pg1" style={{ height: "100vh", backgroundColor: "green" }}></div>
                <div id="pg2" style={{ height: "100vh", backgroundColor: "blue" }}></div>
                <div id="pg3" style={{ height: "100vh", backgroundColor: "red" }}></div>
                <div id="pg4" style={{ height: "100vh", backgroundColor: "yellow" }}></div>
            </header>
        </div>
    );
}

export default App;
