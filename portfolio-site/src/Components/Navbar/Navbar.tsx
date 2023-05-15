// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://www.npmjs.com/package/react-scrollspy-navigation
import ScrollSpy from 'react-scrollspy-navigation';

// Data transfer object
import LinkDTO from '../../DTOs/LinkDTO';


// Stylesheet
import styles from './Navbar.module.scss';

export default class Navbar extends React.Component<
    // Declare props
    {
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
                <ScrollSpy className={ styles.active }>
                {
                    this.props.links?.map((link: LinkDTO, index: number) =>
                        <a
                            className={ styles.button }
                            href={ link.Href }
                            ref={ React.createRef() }
                            key={ "navbar-link-" + index }
                        >
                            { link.Text }
                        </a>
                    )
                }
                </ScrollSpy>
            </nav>
        )
    };
}