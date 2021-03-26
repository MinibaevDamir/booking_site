import {Typography, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import React from "react";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import Slider from "@material-ui/core/Slider";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Paper from "@material-ui/core/Paper";
import {NavLink} from "react-router-dom";


const style = theme => ({
    description: {
        marginLeft: 15,
        marginRight: 20
    },
    stars: {
        marginTop: 20,
        marginBottom: 20,
    },
    textkm:
        {
            marginTop: 10,
            marginLeft: 20,
            marginBottom: 20,
            marginRight: 30
        },
    textHotel:
        {
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 20,
            marginRight: 30
        },
    images:
        {
            height: 300,
            width: 400,
            marginTop: 20,
            marginLeft: 20,
            marginBottom: 20,
            marginRight: 20
        },
    hotels:
        {
            marginLeft: 10,

        },
    menuSettings:
        {

        },
    category:
        {
            marginTop: 20,
            marginLeft: 10,
            marginRight: 10
        },
    centerDistance:
        {
            marginTop: 10,
            marginLeft: 60,
            marginRight: 10
        },
    nightValue:
        {
            marginTop: 10,
            marginLeft: 80,
            marginRight: 10
        },
    slider:
        {
            marginRight: 10,
            marginLeft: 30,
            width: 200
        },
    comfort:
        {
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10
        },
    offers:
        {
            marginLeft: 5
        }
})


const Offers = props => {
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [expanded, setExpanded] = React.useState(false);

    function pathText(id){
        return "/hotel/" + id;
    }

    function valuetext(value) {
        return `${value}км`;
    }

    const {classes} = props
    return (
        <div>
            <Grid container direction="row" className={classes.offers}>
                <Grid>
                    <Grid>
                        <Card className={classes.menuSettings}>
                            <Grid className={classes.category}>
                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography> Категорії житла</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="apartments"
                                                                   color="primary"/>}
                                                label="Апартаменти/Квартири"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="hostel"
                                                                   color="primary"/>}
                                                label="Готель"

                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="hotel"
                                                                   color="primary"/>}
                                                label="Хостел"
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid className={classes.centerDistance}>
                                <Typography variant="h7" align="center" color="textPrimary">
                                    Відстань від центру
                                </Typography>
                            </Grid>
                            <Slider
                                defaultValue={10}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-custom"
                                scale={(kilometers) => kilometers + "км"}
                                step={1}
                                min={1}
                                max={20}
                                valueLabelDisplay="auto"
                                className={classes.slider}/>
                            <Grid className={classes.comfort}>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >
                                        <Typography> Зручності</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="Bathroom"
                                                                   color="primary"/>}
                                                label="Ванна"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="breakfast"
                                                                   color="primary"/>}
                                                label="Сніданок у номер"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="SPA" color="primary"/>}
                                                label="СПА"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="Conditioner"
                                                                   color="primary"/>}
                                                label="Кондиціонер"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="viewWindow"
                                                                   color="primary"/>}
                                                label="Вид з вікна"
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid className={classes.comfort}>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography>Оцінка готелю</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="star"
                                                                   color="primary"/>}
                                                label="1 зірки"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="twostars"
                                                                   color="primary"/>}
                                                label="2 зірки"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="threestars"
                                                                   color="primary"/>}
                                                label="3 зірки"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="fourstars"
                                                                   color="primary"/>}
                                                label="4 зірки"
                                            />
                                            <FormControlLabel
                                                control={<Checkbox onChange={handleChange} name="fivestars"
                                                                   color="primary"/>}
                                                label="5 зірок"
                                            />
                                        </FormGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </Grid>
                            <Grid className={classes.nightValue}>
                                <Typography variant="h7" align="center" color="textPrimary">
                                    Кошт за ніч
                                </Typography>
                            </Grid>
                            <Slider
                                defaultValue={10}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-custom"
                                scale={(dollars) => dollars + "$"}
                                step={1}
                                min={10}
                                max={200}
                                valueLabelDisplay="auto"
                                className={classes.slider}/>
                        </Card>
                    </Grid>
                </Grid>
                <Grid item xs={10}>
                    <Card className={classes.hotels}>
                        <Grid container="column" justify = "space-around" spacing = {1}>
                            <div>
                                {
                                    props.offers.map(u => <div key={u.id}>
                            <Grid item xs={9}>
                                <Paper elevation={1}>
                                    <Grid container="row">
                                        <Grid>
                                            <img
                                                src={u.mainImgUrl}
                                                className={classes.images}/>
                                        </Grid>
                                        <Grid>
                                            <Grid container="column">
                                                <NavLink to = {pathText(u.id)} style={{textDecoration: 'none'}}>
                                                    <Typography variant="h5" className={classes.textHotel}>
                                                        {u.nameHotel}
                                                    </Typography>
                                                </NavLink>
                                                <StarBorderIcon color="secondary"
                                                                className={classes.stars}></StarBorderIcon>
                                                <StarBorderIcon color="secondary"
                                                                className={classes.stars}></StarBorderIcon>
                                                <StarBorderIcon color="secondary"
                                                                className={classes.stars}></StarBorderIcon>
                                                <Typography variant="h7" className={classes.textkm}>{u.kilometersCenter} км. до центру
                                                    міста</Typography>
                                            </Grid>
                                            <Typography className={classes.description}>
                                                {u.description}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                                    </div>)
                                }
                            </div>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default withStyles(style)(Offers);
