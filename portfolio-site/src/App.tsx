import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar links={[
                    { Text: "Test Link 1", Href: "/" },
                    { Text: "Test Link 2", Href: "/" },
                    { Text: "Test Link 3", Href: "/" },
                ]}/>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
