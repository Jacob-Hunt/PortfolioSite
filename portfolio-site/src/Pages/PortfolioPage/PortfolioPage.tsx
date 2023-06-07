// Documentation: https://reactjs.org/
import React from "react";

// Documentation: https://mui.com/ 
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

// Stylesheet
import styles from "Pages/PortfolioPage/PortfolioPage.module.scss";

// Components
import Card from "SharedComponents/Card/Card";
import PortfolioProjectCard from "SharedComponents/PortfolioProjectCard/PortfolioProjectCard";
import PortfolioSiteDialogContent from "./Components/PortfolioSiteDialogContent/PortfolioSiteDialogContent";
import FloodMapDialogContent from "./Components/FloodMapDialogContent/FloodMapDialogContent";
import SoftwareEngineeringDialogContent from "./Components/SoftwareEngineeringDialogContent/SoftwareEngineeringDialogContent";

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
                        thumbnailURL={ ImageCDNBaseURL + "v1500522859/scripts_thumbnail_wb81kg.jpg" }
                        label="GitHub Source Code"
                        description="Publically available source code that I have written utilizing a variety of programming languages and frameworks."
                        onClick={ () => window.open("https://www.github.com/jacob-hunt", "_blank", "noreferrer")}
                    />
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
                        thumbnailURL={ ImageCDNBaseURL + "v1686082677/se-diagram_hrt2we.jpg" }
                        label="SE Term Project"
                        description={
                            `A project in which I led a small agile team in the design and
                             implementation of a console-based C# application with an integrated
                             Microsoft SQL Server database.`
                        }
                        onClick={ () => this.setState({ CurrentOpenProject: Project.SOFTWARE_ENGINEERING })}
                    />
                </div>

                <Dialog
                    open={ this.state.CurrentOpenProject === Project.PORTFOLIO_SITE }
                    onClose={ this.closeDialog }
                    scroll="paper"
                    maxWidth="xl"
                    fullWidth
                    className={ styles.portfolioItemDialog }
                >
                    <DialogTitle>
                        Portfolio Site
                    </DialogTitle>
                    <DialogContent dividers>
                        <PortfolioSiteDialogContent />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.closeDialog }>Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={ this.state.CurrentOpenProject === Project.FLOOD_MAP }
                    onClose={ this.closeDialog }
                    scroll="paper"
                    maxWidth="xl"
                    fullWidth
                    className={ styles.portfolioItemDialog }
                >
                    <DialogTitle>
                        Real-Time Flood Map
                    </DialogTitle>
                    <DialogContent dividers>
                        <FloodMapDialogContent />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.closeDialog }>Close</Button>
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={ this.state.CurrentOpenProject === Project.SOFTWARE_ENGINEERING }
                    onClose={ this.closeDialog }
                    scroll="paper"
                    maxWidth="xl"
                    fullWidth
                    className={ styles.portfolioItemDialog }
                >
                    <DialogTitle>
                        Software Engineering Term Project
                    </DialogTitle>
                    <DialogContent dividers>
                        <SoftwareEngineeringDialogContent />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.closeDialog }>Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    };
}