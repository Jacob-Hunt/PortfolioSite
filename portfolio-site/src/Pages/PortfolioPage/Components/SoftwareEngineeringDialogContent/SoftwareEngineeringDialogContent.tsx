// Documentation: https://reactjs.org/
import React from "react";

// Stylesheet
import styles from "./SoftwareEngineeringDialogContent.module.scss";

export default class SoftwareEngineeringDialogContent extends React.Component<
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
                    As part of my academic journey, I had the opportunity to lead a team of
                    three student developers in the creation of a console-based <a
                        href="https://dotnet.microsoft.com/en-us/languages/csharp"
                        target="_blank"
                        rel="noreferrer"
                    >
                        C#
                    </a> application with an integrated <a
                        href="https://www.microsoft.com/en-us/sql-server/sql-server-2022"
                        target="_blank"
                        rel="noreferrer"
                    >
                        SQL Server
                    </a> database to simulate a hotel
                    reservation system. This project served as a practical demonstration of
                    our software development skills and ability to tackle complex problems.
                </p>
                <p>
                    In my role as the project lead, I organized and facilitated weekly
                    meetings and established a <a
                        href="https://www.atlassian.com/agile/kanban"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Kanban
                    </a> board and <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a> repository to manage project tasks effectively. This approach allowed
                    us to stay organized, prioritize tasks, and ensure smooth collaboration
                    among team members. Throughout the development cycle, I guided the team in
                    gathering requirements, generating use cases with associated user stories,
                    and documenting the software architecture in a series of comprehensive
                    design documents. To maintain code quality, I conducted thorough code
                    reviews using GitHub, with each pull request requiring review and approval
                    from the remaining two team members. This enabled us to identify and address
                    any issues promptly, ensuring the delivery of high-quality and maintainable
                    code.
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
            </div>
        )
    };
}