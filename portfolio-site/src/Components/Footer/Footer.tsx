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
                    This website was designed and built by <a href="http://github.com/jacob-hunt/" target="_blank">Jacob Hunt</a>. | Powered by <a href="https://react.dev/" target="_blank">React</a>, <a href="https://nodejs.org/en" target="_blank">Node</a>, and <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>. | Hosted by <a href="https://render.com/" target="_blank">Render</a>
                </p>
            </div>
        )
    };
}