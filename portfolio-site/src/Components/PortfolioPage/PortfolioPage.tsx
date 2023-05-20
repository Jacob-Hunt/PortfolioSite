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
                        description="The website that you are currently viewing. A static site built using ReactJS, NodeJS, and TypeScript."
                        onClick={ () => this.setState({ CurrentOpenProject: Project.PORTFOLIO_SITE })}
                    />
                    <PortfolioProjectCard
                        thumbnailURL={ ImageCDNBaseURL + "v1684375215/flood-map-screenshot_nb2pcd.jpg" }
                        label="Real-Time Flood Map"
                        description={`
                            A web application that gathers real-time data from sonar-based water-level
                            sensors and integrates them with topographic map data to create a weather
                            map of water levels during flood events.
                        `}
                        onClick={ () => this.setState({ CurrentOpenProject: Project.FLOOD_MAP })}
                    />
                    <PortfolioProjectCard
                        thumbnailURL={ ImageCDNBaseURL + "v1500522859/scripts_thumbnail_wb81kg.jpg" }
                        label="Software Engineering Term Project"
                        description={
                            `A console-based C# application with an integrated Microsoft SQL
                             Server database to simulate a hotel reservation system.`
                        }
                        onClick={ () => this.setState({ CurrentOpenProject: Project.FLOOD_MAP })}
                    />
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