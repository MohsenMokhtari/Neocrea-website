import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import iphone from '../src/assets/iphone.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 100,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        fontSize: 20,
        padding: 50,
        color: theme.palette.text.secondary,
    },
    ul: {
        marginBottom: 30,
    },
    media: {

        height: 15,
        paddingBottom: 400,
    },

}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <ul className={classes.ul}>
                            <li>Fast</li>
                            <li>User Friendly</li>
                            <li>Clean design</li>
                            <li>Responsive</li>
                        </ul>

                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Card className={classes.root}>
                            <CardMedia
                                className={classes.media}
                                image={iphone}
                                title="iphone"
                            />
                        </Card>
                    </Paper>
                </Grid>

            </Grid>
        </div >
    );
}