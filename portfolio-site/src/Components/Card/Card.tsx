// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from './Card.module.scss';

export default class Card extends React.Component<
    // Declare props
    {
        children?: React.ReactNode;
        id?: string;
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <div id={ this.props.id } className={ styles.card }>
                { this.props.children }
            </div>
        )
    };
}