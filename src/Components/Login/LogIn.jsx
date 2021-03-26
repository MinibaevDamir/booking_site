
import React, {useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const style = theme => ({
    paper: {
        margin: '10px 5px',
        padding: '5px',
        color: 'Navy'
    },
    textField: {
        margin: '10px 0px',
    },
    confirmButton: {
        margin: '15px 0px',
        backgroundColor: '#4169E1',
        color: 'white',
    }
})

const LogIn = props => {
    const {classes} = props
    const [form, setForm] = useState({
        validation: {
            password: '',
            nickname: '',
        }
    })

    const handleChange = (event) => {
        const {validation} = form;
        validation[event.target.name] = event.target.value;
        setForm({validation});
    }
    return (
        <ValidatorForm >
            <Grid item xs={12}>
                <Paper elevation={5} className={classes.paper}>
                    <Typography align={"center"}
                                variant={"h4"}
                                style={{marginBottom: '5%'}}
                    >
                        Logging in
                    </Typography>
                    <Grid container justify={"center"}>

                        <Grid item xs={12} sm={8} lg={7}>
                            <Typography align={"center"} variant="overline" display="block" gutterBottom>Nickname</Typography>
                            <TextValidator variant={"outlined"}
                                           fullWidth
                                           inputProps={{style: {padding: '10px', color: 'white'}}}
                                           className={classes.textField}
                                           placeholder='Enter your nickname'
                                           value={form.validation.nickname}
                                           name={'nickname'}
                                           onChange={handleChange}
                                           validators={['minStringLength:2', 'required']}
                                           errorMessages={['Введіть мінімум 2 символи', 'Це поле обов\'язкове для заповнення']}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} lg={7}>
                            <Typography align={"center"} variant="overline" display="block" gutterBottom>Password</Typography>
                            <TextValidator variant={"outlined"}
                                           fullWidth
                                           inputProps={{
                                               style: {padding: '10px', color: 'white'},
                                               type: 'password'
                                           }}
                                           className={classes.textField}
                                           placeholder='Enter your password'
                                           value={form.validation.password}
                                           name={'password'}
                                           onChange={handleChange}
                                           validators={['minStringLength:6', 'required']}
                                           errorMessages={['Введіть мінімум 6 символів', 'Це поле обов\'язкове для заповнення']}
                            />
                        </Grid>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"}>
                        <Grid item>
                            <Button className={classes.confirmButton}
                                    variant={"contained"}
                                    type={"submit"}
                            >
                                LogIn
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify={"center"} alignItems={"center"}>
                        <Typography style={{marginBottom: '10px'}} variant="overline" display="block" gutterBottom>
                            {"Don't have an account? "}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        </ValidatorForm>
    )
}

export default withStyles(style)(LogIn);
