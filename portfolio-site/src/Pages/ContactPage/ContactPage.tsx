// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://mui.com/material-ui/material-icons/
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// Stylesheet
import styles from "./ContactPage.module.scss";

// Components
import Card from "SharedComponents/Card/Card";

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
                    <div className={ styles.socialLinksContainer }>
                        <a
                            href="mailto:jacobhuntdevelopment@gmail.com"
                            className={ styles.iconLink }
                        >
                            <EmailIcon fontSize="large" />
                            <h4>Email</h4>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jhweb/"
                            className={ styles.iconLink }
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon fontSize="large" />
                            <h4>LinkedIn</h4>
                        </a>
                        <a
                            href="https://github.com/Jacob-Hunt/"
                            className={ styles.iconLink }
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon fontSize="large" />
                            <h4>GitHub</h4>
                        </a>
                    </div>
                </Card>
            </div>
        )
    };
}