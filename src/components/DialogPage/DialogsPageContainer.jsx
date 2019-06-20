import React from 'react'
import {connect} from "react-redux";
import DialogsPage from "./DialogsPage";
import {me} from "../../redux/authReducer";
import {RedirectToLogin} from '../../hocs/RedirectToLogin';

const DialogsPageConnected = (props) => {

    return <DialogsPage login={props.login}
                        meRequest={props.meRequest}
    />

};

const mapStateToProps = (state) => {
    return {
        login: state.login,
    }
};


const DialogsPageContainer = connect(mapStateToProps, {meRequest: me})(DialogsPageConnected);

export default RedirectToLogin(DialogsPageContainer);
