import {connect} from "react-redux";
import Hotel from "../Components/Hotel";
import {withRouter} from "react-router-dom";
import React, {useEffect} from "react";

const HotelContainer = (props) => {
    {
        return (
            <Hotel {...props}
                id = {props.match.params.id}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        hotelsPage: state.hotelsPage,
    }
}

export default connect(mapStateToProps, )(withRouter(HotelContainer));

