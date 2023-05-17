// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://mui.com/material-ui/material-icons/
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Stylesheet
import styles from "./ContactPage.module.scss";

// Components
import Card from "../Card/Card";

// Constants
import { ImageCDNBaseURL } from '../../constants';

export default class ContactPage extends React.Component<
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
            <div className={ styles.contactContainer }>
                <Card className={ styles.contactCard }>
                    <h1>Contact</h1>
                    <hr />
                    <h4>Email: <a href="mailto:jacobhuntemail@gmail.com">jacobhuntemail@gmail.com</a></h4>
                    <h4>Phone: <a href="tel:5402233701">540-223-3701</a></h4>
                    <div className={ styles.socialLinksContainer }>
                        <a
                            href="https://www.linkedin.com/in/jhweb/"
                            className={ styles.iconLink }
                            target="_blank"
                        >
                            <LinkedInIcon fontSize="large" />
                        </a>
                        <a
                            href="https://github.com/Jacob-Hunt/"
                            className={ styles.iconLink }
                            target="_blank"
                        >
                            <GitHubIcon fontSize="large" />
                        </a>
                    </div>
                </Card>
            </div>
        )
    };
}