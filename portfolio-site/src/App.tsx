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
                        { Text: "Test Link 2", Href: "#pg2" },
                        { Text: "Test Link 3", Href: "#pg3" },
                    ]}
                />
                <div id="pg1" style={{ height: "100vh", backgroundColor: "green" }}></div>
                <div id="pg2" style={{ height: "100vh", backgroundColor: "blue" }}></div>
                <div id="pg3" style={{ height: "100vh", backgroundColor: "red" }}></div>
            </header>
        </div>
    );
}

export default App;
