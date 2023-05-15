import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar
                    position="static" 
                    links={[
                        { Text: "Jacob Hunt", Href: "#pg1" },
                        { Text: "Test Link 2", Href: "#pg1" },
                        { Text: "Test Link 3", Href: "#pg2" },
                    ]}
                />
                <div id="pg1"></div>
            </header>
        </div>
    );
}

export default App;
