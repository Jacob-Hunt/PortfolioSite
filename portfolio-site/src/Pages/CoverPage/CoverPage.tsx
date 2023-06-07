// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from "Pages/CoverPage/CoverPage.module.scss";

// Components
import Card from "SharedComponents/Card/Card";

// Constants
import { ImageCDNBaseURL } from '../../constants';

export default class CoverPage extends React.Component<
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
            <div className={ styles.coverContainer }>
                <Card className={ styles.headerCard }>
                    <h1>Jacob Hunt</h1>
                    <hr />
                    <h4>
                        Computer Programmer, Embedded Systems Engineer, and Web Developer with
                        a passion for collaborative software development, creating intuitive user
                        experiences, and writing well-organized, readable, and maintainable code.
                    </h4>
                </Card>
                <img
                    src={ ImageCDNBaseURL + "v1499209733/portrait-cropped_e61bxi.jpg" }
                    alt="Portrait"
                    className={ styles.portrait }
                />
            </div>
        )
    };
}