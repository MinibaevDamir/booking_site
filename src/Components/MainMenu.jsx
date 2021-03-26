import Button from "@material-ui/core/Button";
import {Container, Typography, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import {NavLink} from "react-router-dom";


const style = theme => ({
    tables: {
        marginBottom: 100,
        marginTop: 25
    },
    cardo: {
        marginLeft: 250,
        marginRight: 150
    },
    cardt: {
        marginRight: 250,
        marginLeft: 150
    },
    img: {
        height: 600,
        width: 500
    }
})

const MainMenu = props => {
    const {classes} = props
    return (
        <div className={classes.main}>
            <Container maxWidth="sm">
                <Typography variant="h6" align="center" color="textSecondary" gutterBottom>Знайдіть місце, куди вам буде
                    комфортніше поїхати, щоб провести новорічні свята</Typography>
                <Grid container direction="row" className={classes.booking}>
                    <TextField id="outlined-basic" label="Місто для поїздки" variant="outlined"/>
                    <TextField id="outlined-basic" label="Кількість осіб" variant="outlined"/>
                    <Button color="primary" variant="contained">
                        <NavLink to="/offers" style={{textDecoration: 'none'}}>
                            Пошук
                        </NavLink>
                    </Button>
                </Grid>
            </Container>
            <div className={classes.tables}>
                <Grid container spacing={10}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardo}>
                            <Typography variant="h6" align="center" color="textSecondary">
                                Ваші рекомендації на наступні поїздки
                                <img src="https://wallpapershome.ru/images/pages/pic_v/16656.jpg"
                                     className={classes.img}/>
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.cardt}>
                            <Typography variant="h6" align="center" color="textSecondary">
                                Де ви були останнього разу?
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Vertical_Panorama_of_Facade_-_Ivan_Franko_National_University_-_Lviv_-_Ukraine_-_01_%2826594377953%29_%282%29.jpg"
                                    className={classes.img}/>
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default withStyles(style)(MainMenu);
