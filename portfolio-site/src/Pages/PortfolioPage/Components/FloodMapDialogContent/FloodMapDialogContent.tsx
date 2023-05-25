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
                    collaboration, and overseeing project management tools like Kanban and
                    GitHub for source control. Two figures showing high-level views of the
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
                    utilized a PERN stack (PostgreSQL, Express, React, and Node) along with
                    TypeScript and SCSS. On the front end, I utilized React to build an
                    interactive user interface, incorporating map components using Leaflet.js
                    and React-Leaflet. I also utilized Material UI components to build an
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
                    devices using CSS Flexbox to dynamically adapt UI components based on screen
                    dimensions. Efficient page routing was achieved through the implementation of
                    React Router. The core of the web application was a RESTful ExpressJS API,
                    serving as the vital link between the PostgreSQL database, the React front end,
                    and the water level sensor modules. This API provided seamless integration for
                    the sensor modules to transmit water level readings to the database via HTTP
                    requests, as well as for the React server to obtain these readings. Finally,
                    to ensure cross-platform compatibility, I containerized the PERN application
                    using Docker, thereby facilitating collaboration across various team members'
                    devices while reducing the chances of platform-specific hurdles.
                </p>
                <p>
                    I believe that this project exemplifies my ability to lead a team effectively,
                    foster collaboration, and deliver a functional and visually appealing web
                    application. The combination of my technical proficiency in the PERN stack,
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