import {connect} from "react-redux";
import Offers from "../Components/Offers";
let mapStateToProps = (state) => {
    return {
        offers: state.offersPage.offers
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const OffersContainer = connect(mapStateToProps, mapDispatchToProps)(Offers);
export default OffersContainer;
