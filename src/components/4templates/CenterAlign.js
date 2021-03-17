import React from 'react';

import {Grid, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: '100vh'
    }
}))

export default function CenterAlign(props) {
    const classes = useStyles()
    return (
        <Grid
            container
            justify='center'
            alignItems='center'
            spacing={0}
            className={classes.root}>
            <Grid item xs={3}>
                {props.children}
            </Grid>
        </Grid>
    )
}
