// React documentation: https://reactjs.org/
import React from 'react';

// Import MUI components
// See documentation: https://mui.com/material-ui/
import { AppBar, Button } from '@mui/material';
import LinkDTO from '../../DTOs/LinkDTO';

export default class Navbar extends React.Component<
    // Declare props
    {
        position?: "fixed" | "static" | "absolute" | "sticky" | "relative" | undefined,
        links?: LinkDTO[]
    },
    // Declare state
    {
    }
> {
    render(): React.ReactNode 
    {
        return (
            <AppBar position="static">
                {
                    this.props.links?.map((link: LinkDTO, index: number) =>
                        <Button
                            variant="contained"
                            href={ link.Href }
                            key={ "navbar-link-" + index }
                        >
                            { link.Text }
                        </Button>
                    )
                }
            </AppBar>
        )
    };
}