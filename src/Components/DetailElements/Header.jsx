import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import React from "react";
import Box from "@material-ui/core/Box";
import {NavLink} from "react-router-dom";
import bookingsite from "../bookingsite.png";
const style = theme => ({
    name: {
      marginRight: '10px'
    },
    pap: {
        margin: '10px 5px',
        padding: '5px 15px',
        backgroundColor: '#4169E1',
        color: 'White',
    },
    image: {
        marginTop: '10px',
        height: 60,
    },
    title: {
        flexGrow: 1,
    },
    buttons: {
        marginBottom: '10px',
        marginTop: '5px'
    },
    button: {
        marginRight: '5px'
    }

})

const Header = props => {
    const {classes} = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.pap}>
                    <Grid container>
                       <NavLink to="/">
                        <img src={bookingsite} className={classes.image}/>
                       </NavLink>
                        <Typography className={classes.title}> </Typography>
                        <Box>
                            <Grid container direction="column" justify="space-around" className={classes.button}>
                                <Grid container direction="row" justify="space-around" className={classes.buttons}>
                                    <NavLink to="/signup" style={{textDecoration: 'none'}} >
                                        <Button color="primary" variant="contained">
                                            Sign up
                                        </Button>
                                    </NavLink>
                                    <NavLink to="/login" style={{textDecoration: 'none'}}>
                                        <Button color="primary" variant="contained">
                                            Log in
                                        </Button>
                                    </NavLink>
                                </Grid>
                                <Grid container direction="row" justify="center" >
                                    <Typography className={classes.name}>{props.userData.name}</Typography>
                                    <Typography>{props.userData.subname}</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Header);
