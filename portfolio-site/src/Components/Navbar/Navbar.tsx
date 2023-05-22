// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://mui.com/material-ui/
import { Fade } from '@mui/material';

// Documentation: https://www.npmjs.com/package/react-scrollspy-navigation
import ScrollSpy from 'react-scrollspy-navigation';

// Documentation: https://mui.com/material-ui/material-icons/
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// Data transfer object
import LinkDTO from '../../DTOs/LinkDTO';

// Stylesheet
import styles from './Navbar.module.scss';

export default class Navbar extends React.Component<
    // Declare props
    {
        links?: LinkDTO[]
        id?: string;
    },
    // Declare state
    {
        isNavDialogOpen: boolean;
    }
> {
    constructor(props: any)
    {
        super(props);
        this.state = {
            isNavDialogOpen: false
        };
    }

    render(): React.ReactNode 
    {
        return (
            <nav id={ this.props.id } className={ styles.navbar }>
                <ScrollSpy className={ styles.active }>
                {
                    this.props.links?.map((link: LinkDTO, index: number) =>
                        <a
                            className={ styles.button + " " + styles.hideOnSmallScreens }
                            href={ link.Href }
                            ref={ React.createRef() }
                            key={ "navbar-link-" + index }
                        >
                            { link.Text }
                        </a>
                    )
                }
                </ScrollSpy>
                <span
                    className={ styles.menuIcon + " " + styles.showOnSmallScreens }
                    onClick={ () => this.setState({ isNavDialogOpen: true }) }
                >
                    <MenuIcon />
                </span>
                <Fade in={ this.state.isNavDialogOpen } timeout={0} >
                    <div className={ styles.navDialog }>
                        <div
                            className={ styles.closeIconContainer }
                            onClick={ () => this.setState({ isNavDialogOpen: false }) }
                        >
                            <CloseIcon className={ styles.closeIcon } />
                        </div>
                        <ScrollSpy className={ styles.active }>
                        {
                            this.props.links?.map((link: LinkDTO, index: number) =>
                                <a
                                    className={ styles.navDialogButton }
                                    href={ link.Href }
                                    ref={ React.createRef() }
                                    key={ "navbar-dialog-link-" + index }
                                    onClick={ () => this.setState({ isNavDialogOpen: false }) }
                                >
                                    { link.Text }
                                </a>
                            )
                        }
                        </ScrollSpy>
                    </div>
                </Fade>
            </nav>
        )
    };
}