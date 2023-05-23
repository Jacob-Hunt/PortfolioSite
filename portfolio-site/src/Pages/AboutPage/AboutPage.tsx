// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from "Pages/AboutPage/AboutPage.module.scss";

// Components
import Card from 'Components/Card/Card';

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
                        <li>Languages: Assembly (ARM, x86), C, C++, C#, HTML/CSS/SASS, Java, JavaScript, PLC Languages (LL, ST, FBD), Python, SQL, Typescript</li>
                        <li>Frameworks: .NET, Express, Node, PostgreSQL, React, Vue</li>
                        <li>General: Agile Development, Team Leadership, Full-Stack Web Development, Relational Database Management Systems, Programmable Logic Controllers, Electronic Circuits</li>
                    </ul>
                </Card>
            </div>
        )
    };
}