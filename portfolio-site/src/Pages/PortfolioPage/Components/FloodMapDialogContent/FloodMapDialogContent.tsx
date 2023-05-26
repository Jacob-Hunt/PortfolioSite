// Documentation: https://reactjs.org/
import React from "react";

// Stylesheet
import styles from "./FloodMapDialogContent.module.scss";

// Components
import Thumbnail from "SharedComponents/Thumbnail/Thumbnail";

// Constants
import { ImageCDNBaseURL } from "../../../../constants";

export default class FloodMapDialogContent extends React.Component<
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
            <div className={ styles.dialogContainer }>
                <p>
                    For my senior design project at university, I had the privilege of leading a
                    team of student developers in creating a proof-of-concept prototype for a
                    technology system that combines data from a network of solar-powered water
                    level sensors with an open-source topographic dataset in order to generate a
                    real-time weather map of floodwater levels. As the team lead, I took on
                    multiple responsibilities, including facilitating meetings, fostering
                    collaboration, and overseeing project management tools like <a
                        href="https://www.atlassian.com/agile/kanban"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kanban
                    </a> and <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a> for source control. Two figures showing high-level views of the
                    architecture for the web application and sensor modules are shown below.
                </p>
                <div className={ styles.thumbnailContainer }>
                    <Thumbnail
                        url={ ImageCDNBaseURL + "v1685045881/floodMapArchitecture_nomr9j.jpg" }
                        alt="Architecture diagram for the web application component of the system."
                    />
                    <Thumbnail
                        url={ ImageCDNBaseURL + "v1685045881/sensorArchitecture_gfl3fj.jpg" }
                        alt="Architecture diagram for the sensor module component of the system."
                    />
                </div>
                <p>
                    In addition to my duties as team lead, I was responsible for implementing
                    the web application component of the project such that other team members
                    could focus on construction of the sensor network. To achieve this, I
                    utilized a PERN stack (<a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        PostgreSQL
                    </a>, <a
                        href="https://expressjs.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Express
                    </a>, <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        React
                    </a>, and <a
                        href="https://nodejs.org/en"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Node
                    </a>) along with <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noreferrer"
                    >TypeScript</a> and <a
                        href="https://sass-lang.com/"
                        target="_blank"
                        rel="noreferrer"
                    >SASS</a>. On the front end, I utilized React to build an
                    interactive user interface, incorporating map components using <a
                        href="https://leafletjs.com/"
                        target="_blank"
                        rel="noreferrer"
                    >Leaflet.js</a> and <a
                        href="https://react-leaflet.js.org/"
                        target="_blank"
                        rel="noreferrer"
                    >React-Leaflet</a>. I also utilized <a
                        href="https://mui.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Material UI
                    </a> components to build an
                    administrator dashboard that other team members could use to register
                    sensors with the map application. The two screenshots below showcase the
                    map view and administrator dashboard for the web application.
                </p>
                <div className={ styles.thumbnailContainer }>
                    <Thumbnail
                        url={ ImageCDNBaseURL + "v1684375215/flood-map-screenshot_nb2pcd.jpg" }
                        alt="Screenshot of the map view within the Flood Map application."
                    />
                    <Thumbnail
                        url={ ImageCDNBaseURL + "v1684979594/FloodMapAdminPage_a1njc6.jpg" }
                        alt="Screenshot of the admin view within the Flood Map Application"
                    />
                </div>
                <p>
                    Emphasizing responsiveness, all frontend pages were fully optimized for mobile
                    devices using <a
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox"
                        target="_blank"
                        rel="noreferrer"
                    >CSS Flexbox</a> to dynamically adapt UI components based on screen
                    dimensions. Due to the need for separate URL routes for the map view and the
                    admin page, routing was implemented via the use of <a
                        href="https://reactrouter.com/en/main"
                        target="_blank"
                        rel="noreferrer"
                    >React Router</a>. A RESTful ExpressJS API, served as the interface between the
                    PostgreSQL database, the React front end, and the water level sensor modules.
                    This API provided seamless integration for the sensor modules to transmit water
                    level readings to the database via HTTP requests, as well as for the React server
                    to obtain these readings. Finally, to ensure cross-platform compatibility, I
                    containerized the PERN application using <a
                        href="https://www.docker.com/"
                        target="_blank"
                        rel="noreferrer"
                    >Docker</a>, thereby facilitating collaboration across various team members'
                    devices while reducing the chances of platform-specific hurdles.
                </p>
                <p>
                    I believe that this project exemplifies my ability to lead a team effectively,
                    foster collaboration, and deliver a functional and visually appealing web
                    application, and that the combination of my technical proficiency in the PERN stack,
                    React, Leaflet.js, and Material UI allowed me to create an intuitive user
                    experience. I am immensely proud of the achievement that we made as a team
                    in integrating a wide range of diverse technologies into a cohesive and
                    innovative system that, if implemented at scale, could have the ability to
                    provide life-saving flood information in a highly accessible manner.
                </p>
            </div>
        )
    };
}