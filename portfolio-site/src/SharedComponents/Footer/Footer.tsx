// Documentation: https://reactjs.org/
import React from 'react';

// Stylesheet
import styles from './Footer.module.scss';

export default class Footer extends React.Component<
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
            <div className={ styles.footer }>
                <p>
                    This website was designed and built by <a href="https://www.linkedin.com/in/jhweb/" target="_blank" rel="noreferrer">Jacob Hunt</a>. | Powered by <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>, <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">Node</a>, and <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a>. | Hosted by <a href="https://render.com/" target="_blank" rel="noreferrer">Render</a>
                </p>
            </div>
        )
    };
}