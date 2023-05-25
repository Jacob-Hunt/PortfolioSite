// Documentation: https://reactjs.org/
import React from "react";

// Stylesheet
import styles from "./PortfolioSiteDialogContent.module.scss";

export default class PortfolioSiteDialogContent extends React.Component<
    // Declare props
    {
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <div className={ styles.dialogContainer }>
                <p>
                    This static site is built using ReactJS, TypeScript, and NodeJS, and
                    showcases my skills in designing and developing responsive, scrollable,
                    and engaging user interfaces for web applications. With a mobile-first
                    approach, the scrolling UI provides a seamless experience across
                    devices, ensuring comfortable navigation on mobile, tablet, and desktop
                    platforms. You can easily explore different sections either by scrolling
                    or using the intuitive navigation bar.
                </p>
                <p>
                    The source code for this project is available in the public <a
                        href="https://github.com/Jacob-Hunt/PortfolioSite"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub repository
                    </a>. I refactored major sections and UI elements into React components so as to
                    maximize code modularity and reusability. In addition, to maintain a consistent
                    and organized structure, I've employed SCSS modules for styling and tightly
                    associated them with the component templates. While developing, I incorporated
                    third-party modules like Material UI and ScrollSpy, allowing for faster
                    development without compromising the original UX design. This modular approach
                    significantly improved development efficiency and scalability while ensuring a
                    cohesive user interface.
                </p>
            </div>
        )
    };
}