// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from './PortfolioProjectCard.module.scss';

export default class PortfolioProjectCard extends React.Component<
    // Declare props
    {
        thumbnailURL: string;
        label: string;
        description: string;
        onClick: () => void;
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <div className={ styles.portfolioProjectCard } onClick={ this.props.onClick }>
                <div
                    className={ styles.thumbnailContainer }
                    style={{ backgroundImage: `url("${ this.props.thumbnailURL }")` }}
                />
                <div className={ styles.labelBanner }>
                    <h4>{ this.props.label }</h4>
                </div>
                <div className={ styles.descriptionBox }>
                    <p>{ this.props.description }</p>
                </div>
            </div>
        )
    };
}