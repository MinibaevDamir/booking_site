
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
const style = theme => ({
    paper: {
        margin: '10px 5px',
        padding: '5px 15px',
        backgroundColor: '#4169E1',
        color: 'White',
    },

})

const Footer = props => {
    const {classes} = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Grid container justify={"space-between"} style={{alignItems: 'center'}}>
                        <Typography>Copyright ©2020</Typography>
                        <Typography>developed by Damir Minibaiev</Typography>
                        <Typography> </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(style)(Footer);