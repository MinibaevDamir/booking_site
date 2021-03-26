import {Route} from "react-router-dom";
import React from "react";
import MainMenu from "./Components/MainMenu";
import LogIn from "./Components/Login/LogIn";
import SignUp from "./Components/Login/SignUp";
import Box from "@material-ui/core/Box";
import OffersContainer from "./Containers/OffersContainer";
import HotelContainer from "./Containers/HotelContainer";

const RouteController = props => {
    return (
        <Box>
            <Route exact path={'/'} render={() => <MainMenu/>}/>
            <Route path={'/offers'} render={() => <OffersContainer/>}/>
            <Route path={'/login'} render={() => <LogIn/>}/>
            <Route path={'/signup'} render={() => <SignUp/>}/>
            <Route path={'/Hotel/:id'} render={() => <HotelContainer/>}/>
        </Box>
    )
}

export default RouteController;