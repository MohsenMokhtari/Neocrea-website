import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import iphone from '../src/assets/iphone.jpg'
import macbookpro from '../src/assets/macbookpro.jpeg'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: 50,
        marginTop: -40,
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

        height: 25,
        paddingBottom: 400,
    },
    container: {
        display: "flex",
        alignItems: "stretch",
    },
    cover: {
        width: 250,

    },

}));

export default function FullWidthGrid() {
    const classes = useStyles();

    return (
        <Fragment>
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid item xs={8}>
                        <ul className={classes.ul}>
                        </ul>
                        <ListItem>
                            <ListItemText>Fast and Responsive</ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>User friendly User Interface</ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>Clean Design</ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText>Developed with privacy in mind</ListItemText>
                        </ListItem>

                    </Grid>

                    <Grid item xs={4}>
                        <Card className={classes.cover}>
                            <CardMedia
                                className={classes.media}
                                image={iphone}
                                title="iphone"
                            />
                        </Card>
                    </Grid>
                </Paper>
            </div >

            <div className={classes.root}>
                <Grid container spacing={2} elevation={10} style={{ padding: '1.5em' }}>

                    <Grid item xs={12} sm={6} container direction='row' spacing={2} alignItems="stretch">
                        <Paper className={classes.paper} style={{ height: '80%', width: '80%' }}>
                            <ul className={classes.ul}>

                            </ul>
                            <ListItem>
                                <ListItemText>Stunning UI on computers</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText>Fast and fluid</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText>Clean Design</ListItemText>
                            </ListItem>

                            <ListItem>
                                <ListItemText>Privacy driven</ListItemText>
                            </ListItem>

                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} container direction='row' spacing={2} alignItems="stretch">
                        <Paper className={classes.paper} style={{ height: '80%', width: '80%' }}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={macbookpro}
                                    title="macbookpro"
                                />
                            </Card>
                        </Paper>
                    </Grid>

                </Grid>
            </div >
        </Fragment>
    );
}
