// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from './Jumbotron.module.scss';

export default class Jumbotron extends React.Component<
    // Declare props
    {
        id: string;
        backgroundUrl: string;
        children?: React.ReactNode;
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <div
                id={ this.props.id }
                className={ styles.jumbotron }
                style={{ backgroundImage: `url("${ this.props.backgroundUrl }")`
            }} >
                { this.props.children }
            </div>
        )
    };
}