// React documentation: https://reactjs.org/
import React from 'react';

import LinkDTO from '../../DTOs/LinkDTO';

// Stylesheet
import styles from './Navbar.module.scss';

export default class Navbar extends React.Component<
    // Declare props
    {
        position?: "fixed" | "static" | "absolute" | "sticky" | "relative" | undefined,
        links?: LinkDTO[]
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <nav className={ styles.navbar }>
            {
                this.props.links?.map((link: LinkDTO, index: number) =>
                    <a
                        className={ styles.button }
                        href={ link.Href }
                        key={ "navbar-link-" + index }
                    >
                        { link.Text }
                    </a>
                )
            }
            </nav>
        )
    };
}