import {connect} from "react-redux";
import Header from "../Components/DetailElements/Header";
let mapStateToProps = (state) => {
    return {
        userData: state.userDataPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;
