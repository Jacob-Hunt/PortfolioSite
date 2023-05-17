// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://mui.com/ 
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

// Stylesheet
import styles from "./PortfolioPage.module.scss";

// Components
import Card from "../Card/Card";
import PortfolioProjectCard from '../PortfolioProjectCard/PortfolioProjectCard';

// Constants
import { ImageCDNBaseURL } from '../../constants';

enum Project { NONE, FLOOD_MAP, PORTFOLIO_SITE, SOFTWARE_ENGINEERING }

export default class PortfolioPage extends React.Component<
    // Declare props
    {
    },
    // Declare state
    {
        CurrentOpenProject: Project
    }
> {
    constructor(props: any)
    {
        super(props);
        this.state = {
            CurrentOpenProject: Project.NONE
        };
        this.closeDialog = this.closeDialog.bind(this);
    }

    closeDialog(): void
    {
        this.setState({ CurrentOpenProject: Project.NONE });
    }

    render(): React.ReactNode 
    {
        return (
            <div className={ styles.portfolioContainer }>

                <Card className={ styles.portfolioHeader }>
                    <h1>Portfolio</h1>
                </Card>

                <div className={ styles.portfolioItems }>
                    <PortfolioProjectCard
                        thumbnailURL={ ImageCDNBaseURL + "v1684364958/portfolio-site_ucqoee.jpg" }
                        label="Portfolio Page"
                        description="Lorum ipsum dolor set amet lorum ipsum dolor set amet lorum ipsum dolor set amet lorum ipsum dolor set amet"
                        onClick={ () => this.setState({ CurrentOpenProject: Project.PORTFOLIO_SITE })}
                    />
                    <Button
                        onClick={() => this.setState({ CurrentOpenProject: Project.PORTFOLIO_SITE })}
                        variant="contained"
                    >
                        PORTFOLIO SITE
                    </Button>
                    <Button
                        onClick={() => this.setState({ CurrentOpenProject: Project.FLOOD_MAP })}
                        variant="contained"
                    >
                        REAL-TIME FLOOD MAP
                    </Button>
                    <Button
                        onClick={() => this.setState({ CurrentOpenProject: Project.SOFTWARE_ENGINEERING })}
                        variant="contained"
                    >
                        SOFTWARE ENGINEERING TERM PROJECT
                    </Button>
                </div>

                <Dialog
                    open={ this.state.CurrentOpenProject === Project.PORTFOLIO_SITE }
                    onClose={ this.closeDialog }
                    scroll="paper"
                >
                    <DialogTitle>
                        Portfolio Site
                    </DialogTitle>
                    <DialogContent dividers>
                        <p>
                        {
                            [...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')
                        }
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.closeDialog }>Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={ this.state.CurrentOpenProject === Project.FLOOD_MAP }
                    onClose={ this.closeDialog }
                    scroll="paper"
                >
                    <DialogTitle>
                        Real-Time Flood Map
                    </DialogTitle>
                    <DialogContent dividers>
                        <p>
                        {
                            [...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')
                        }
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.closeDialog }>Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={ this.state.CurrentOpenProject === Project.SOFTWARE_ENGINEERING }
                    onClose={ this.closeDialog }
                    scroll="paper"
                >
                    <DialogTitle>
                        Software Engineering Term Project
                    </DialogTitle>
                    <DialogContent dividers>
                        <p>
                        {
                            [...new Array(50)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
                                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')
                        }
                        </p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.closeDialog }>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    };
}