
import {Typography, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Card from "@material-ui/core/Card";
import KingBedIcon from '@material-ui/icons/KingBed';

const style = theme => ({
    pluses:
        {
            marginBottom: 10,
            marginLeft: 8
        },
    price:
        {
            marginLeft: 50
        },
    numbers: {
        marginBottom: 5
    },
    numberHotel: {
        marginLeft: 10
    },
    cardHotel: {},
    mainHotel: {
        marginTop: 20,
        marginLeft: 30
    },
    images:
        {
            height: 400,
            width: 600,
        },
    textHeading:
        {
            marginLeft: 30,
            marginBottom: 10
        }
})

const Hotel = props => {
    const {classes} = props
    return (
        <div>
            <Grid item xs={12}>
                <Card className={classes.cardHotel}>
                    <Grid container direction="row">
                        <Grid item xs={6} className={classes.mainHotel} align="stretch">
                            <Grid container direction="column">
                                <Grid>
                                    <Typography variant="h5" className={classes.textHeading}>
                                        {props.hotelsPage.hotels[props.id].hotelName}
                                    </Typography>
                                </Grid>
                                <Grid>
                                    <img
                                        src={props.hotelsPage.hotels[props.id].mainUrlImg}
                                        className={classes.images}/>
                                </Grid>
                                <Grid>
                                    <Typography variant="h6">
                                        Доступні номери готелю:
                                    </Typography>
                                </Grid>
                                <Grid xs={6} className={classes.numbers}>
                                    <Card>
                                        <Grid container direction="row">
                                            <KingBedIcon></KingBedIcon>
                                            <KingBedIcon></KingBedIcon>
                                            <Typography className={classes.numberHotel}>
                                                Двухспальний номер класу Люкс
                                            </Typography>
                                            <Typography className={classes.price}>
                                                Ціна: {props.hotelsPage.hotels[props.id].price2}$
                                            </Typography>
                                        </Grid>
                                    </Card>
                                </Grid>
                                <Grid xs={6} className={classes.numbers}>
                                    <Card>
                                        <Grid container direction="row">
                                            <KingBedIcon></KingBedIcon>
                                            <Typography className={classes.numberHotel}>
                                                Односпальний номер класу Люкс
                                            </Typography>
                                            <Typography className={classes.price}>
                                                Ціна: {props.hotelsPage.hotels[props.id].price}$
                                            </Typography>
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={4}>
                            <Typography>
                                Налаштування у готелі:
                            </Typography>
                            <Grid container direction="column" className = {classes.pluses}>
                                <Typography>
                                    Кондиціонер
                                </Typography>
                                <Typography>
                                    Холодильник
                                </Typography>
                            </Grid>
                            <Typography>
                                {props.hotelsPage.hotels[props.id].description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </div>
    )
}

export default withStyles(style)(Hotel);
