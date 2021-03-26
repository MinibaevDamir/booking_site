
import React, {useState} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";


const style = theme => ({
        paper: {
            margin: '10px 5px',
            padding: '5px',
            color: 'Navy',
        },
        textField: {
            margin: '10px 0px',
        },
        confirmButton: {
            margin: '10px 0px',
            color: 'white',
            '&:hover': {
                backgroundColor: '#4169E1'
            }
        }
    }
)

const SignUp = props => {
    const {classes} = props
    const [form, setForm] = useState({
        validation: {
            name: '',
            sName: '',
            password: '',
            nickname: '',
            email: ''
        }
    })


    const handleChange = (event) => {
        const {validation} = form;
        validation[event.target.name] = event.target.value;
        setForm({validation});
    }
    return (
        <div>
            <ValidatorForm>
                <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>
                        <Typography align={"center"}
                                    variant={"h4"}
                                    style={{marginBottom: '5%'}}
                        >
                            Registration
                        </Typography>
                        <Grid container justify={"center"}>
                            <Grid item xs={12} sm={8} lg={7}>
                                <Typography align={"center"} variant="overline" display="block" gutterBottom>Name</Typography>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               onChange={handleChange}
                                               name={'name'}
                                               value={form.validation.name}
                                               inputProps={{style: {padding: '10px', color: 'white'}}}
                                               className={classes.textField}
                                               placeholder='Enter your name'
                                               validators={['minStringLength:2', 'required']}
                                               errorMessages={['Введіть мінімум 2 символи', 'Це поле обов\'язкове для заповнення']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} lg={7}>
                                <Typography align={"center"} variant="overline" display="block" gutterBottom>Second name</Typography>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               onChange={handleChange}
                                               name={'sName'}
                                               value={form.validation.sName}
                                               inputProps={{style: {padding: '10px', color: 'white'}}}
                                               className={classes.textField}
                                               placeholder='Enter your second name'
                                               validators={['minStringLength:2', 'required']}
                                               errorMessages={['Введіть мінімум 2 символи', 'Це поле обов\'язкове для заповнення']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} lg={7}>
                                <Typography align={"center"} variant="overline" display="block" gutterBottom>Nickname</Typography>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               onChange={handleChange}
                                               name={'nickname'}
                                               value={form.validation.nickname}
                                               inputProps={{style: {padding: '10px', color: 'white'}}}
                                               className={classes.textField}
                                               placeholder='Enter your nickname'
                                               validators={['required']}
                                               errorMessages={['Це поле обов\'язкове для заповнення']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} lg={7}>
                                <Typography align={"center"} variant="overline" display="block" gutterBottom>Password</Typography>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               onChange={handleChange}
                                               name={'password'}
                                               value={form.validation.password}
                                               inputProps={{
                                                   style: {padding: '10px', color: 'white'},
                                                   type: 'password'
                                               }}
                                               className={classes.textField}
                                               placeholder='Enter your password'
                                               validators={['minStringLength:6', 'required']}
                                               errorMessages={['Введіть мінімум 6 символів', 'Це поле обов\'язкове для заповнення']}
                                />
                            </Grid>
                            <Grid item xs={12} sm={8} lg={7}>
                                <Typography align={"center"} variant="overline" display="block" gutterBottom>Email</Typography>
                                <TextValidator variant={"outlined"}
                                               fullWidth
                                               onChange={handleChange}
                                               name={'email'}
                                               value={form.validation.email}
                                               inputProps={{
                                                   style: {padding: '10px', color: 'white'},
                                               }}
                                               className={classes.textField}
                                               placeholder='Enter your e-mail'
                                               validators={['isEmail', 'required']}
                                               errorMessages={['Це не email', 'Це поле обов\'язкове для заповнення']}
                                />
                            </Grid>
                        </Grid>
                        <Grid container justify={"center"}>
                            <Grid item>
                                <Button className={classes.confirmButton}
                                        variant={"contained"}
                                        type={"submit"}>
                                    Sign Up
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </ValidatorForm>
        </div>
    )
}

export default withStyles(style)(SignUp);
