// Documentation: https://reactjs.org/
import React from "react";

// Documentation: https://mui.com/ 
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

// Stylesheet
import styles from "Pages/PortfolioPage/PortfolioPage.module.scss";

// Components
import Card from "SharedComponents/Card/Card";
import PortfolioProjectCard from "SharedComponents/PortfolioProjectCard/PortfolioProjectCard";
import Thumbnail from "SharedComponents/Thumbnail/Thumbnail";
import PortfolioSiteDialogContent from "./Components/PortfolioSiteDialogContent/PortfolioSiteDialogContent";

// Constants
import { ImageCDNBaseURL } from '../../constants';
import FloodMapDialogContent from "./Components/FloodMapDialogContent/FloodMapDialogContent";

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
                        <p>
                            As part of my academic journey, I had the opportunity to lead a team of
                            three talented student developers in the creation of a console-based C#
                            application with an integrated SQL Server database to simulate a hotel
                            reservation system. This project served as a practical demonstration of
                            our software development skills and ability to tackle complex problems.
                        </p>
                        <p>
                            In my role as the project lead, I organized and facilitated weekly
                            meetings, established a Kanban board and GitHub repository, and
                            implemented an Agile development process to manage project tasks
                            effectively. This approach allowed us to stay organized, prioritize
                            tasks, and ensure smooth collaboration among team members. Throughout
                            the development cycle, I guided the team in gathering requirements,
                            generating use cases with associated user stories, and documenting the
                            software architecture in a series of comprehensive design documents. To
                            maintain code quality, I conducted thorough code reviews using GitHub,
                            with each pull request requiring review and approval from the remaining
                            two team members. This enabled us to identify and address any issues
                            promptly, ensuring the delivery of high-quality and maintainable code.
                        </p>
                        <p>
                            At the end of the semester, we showcased our completed application
                            through a comprehensive PowerPoint presentation. This presentation
                            highlighted the functionality, features, and overall accomplishments of
                            our hotel reservation system.
                        </p>
                        <p>
                            One of my key responsibilities was to facilitate decision-making within
                            the team. I encouraged open discussions and fostered an environment
                            where different perspectives were valued, leading to informed decisions
                            and achieving group consensus. Through this project, I demonstrated my
                            leadership skills, ability to coordinate a team, and commitment to
                            delivering a successful software application. It was a valuable
                            experience that further honed my technical expertise and project
                            management abilities.
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