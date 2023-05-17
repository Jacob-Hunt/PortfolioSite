// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from "./PortfolioPage.module.scss";

// Components
import Card from "../Card/Card";

// Constants
import { ImageCDNBaseURL } from '../../constants';

export default class PortfolioPage extends React.Component<
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
            <div className={ styles.portfolioContainer }>
                <Card className={ styles.portfolioHeader }>
                    <h1>Portfolio</h1>
                </Card>
                <div className={ styles.portfolioItems }>

                </div>
            </div>
        )
    };
}