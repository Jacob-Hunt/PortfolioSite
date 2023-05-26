// Documentation: https://reactjs.org/
import React from 'react';

// Documentation: https://mui.com/ 
import { Dialog, DialogContent, Slide } from "@mui/material";
import { TransitionProps } from '@mui/material/transitions';

// Documentation: https://mui.com/material-ui/material-icons/
import CloseIcon from '@mui/icons-material/Close';

// Stylesheet
import styles from './Thumbnail.module.scss';

// Slide-in transition for full-sized image dialog
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default class Thumbnail extends React.Component<
    // Declare props
    {
        url: string;
        alt: string;
        className?: string;
    },
    // Declare state
    {
        isImageDisplayed: boolean;
    }
> {
    constructor(props: any)
    {
        super(props);
        this.state = {
            isImageDisplayed: false
        };
    }

    render(): React.ReactNode 
    {
        return (
            <div className={ styles.thumbnailContainer + " " + this.props.className }>
                <img
                    src={ this.props.url }
                    alt={ this.props.alt }
                    className={ styles.thumbnail }
                    onClick={ () => this.setState({ isImageDisplayed: true }) }
                />
                <Dialog
                    open={ this.state.isImageDisplayed }
                    onClose={ () => this.setState({ isImageDisplayed: false }) }
                    TransitionComponent={ Transition }
                    fullScreen
                >
                    <DialogContent>
                        <div
                            className={ styles.closeIconContainer }
                            onClick={ () => this.setState({ isImageDisplayed: false }) }
                        >
                            <CloseIcon fontSize="large" />
                        </div>
                        <div className={ styles.fullImageContainer }>
                            <img
                                src={ this.props.url }
                                alt={ this.props.alt }
                                className={ styles.fullSizeImage }
                            />
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        )
    };
}