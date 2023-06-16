// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from "Pages/AboutPage/AboutPage.module.scss";

// Components
import Card from 'SharedComponents/Card/Card';

export default class AboutPage extends React.Component<
    // Declare props
    {
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <div className={ styles.aboutContainer }>
                <Card className={ styles.aboutBody }>
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
                        <li>
                            <span className="bold">Programming Languages: </span>
                            JavaScript, TypeScript, Python, Java, C, C++, C#, x86 Assembly, ARM Assembly
                        </li>
                        <li>
                            <span className="bold">Web Development: </span>
                            React, Vue, HTML, CSS, SASS, Node.js, Express.js, .NET, Leaflet.js, jQuery, Bootstrap
                        </li>
                        <li>
                            <span className="bold">PLC Programming: </span>
                            Ladder Logic, Structured Text, Function Block Diagram, Modicon, Unity Pro
                        </li>
                        <li>
                            <span className="bold">Databases: </span>
                            PostgreSQL, Microsoft SQL Server, Oracle, Snowflake
                        </li>
                        <li>
                            <span className="bold">Version Control: </span>
                            Git, GitHub
                        </li>
                        <li>
                            <span className="bold">Soft Skills: </span>
                            Agile Development, Team Leadership, Written and Oral Communication, Code Review
                        </li>
                    </ul>
                </Card>
            </div>
        )
    };
}