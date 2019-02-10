import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import MainLayout from "../layouts/MainLayout";

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingRight: 30,
        paddingLeft: 30
    },
});

class boardBuilder extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { classes } = this.props;

        return(
            <MainLayout>
                <Grid container className={classes.root}>
                    <p>Test</p>
                </Grid>
            </MainLayout>
        )
    }
}

export default withStyles(styles)(boardBuilder)