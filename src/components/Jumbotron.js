import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imac from '../assets/imac.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 1700,
    },
    media: {
        height: 600,
    },
});

export default function Jumbotron() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={imac}
                title="Work Space"
            />
        </Card>
    );
}

