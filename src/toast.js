import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Toast from 'react-bootstrap/Toast';
import React from 'react';
import { ToastContainer } from "react-bootstrap";
import { close_action } from "./redux/home_action";

function ToastShow() {
    const dispatch = useDispatch();
    const { api } = useSelector((state) => state);
    const closeAction = () => {
        dispatch(close_action())
    }
    return (
        <ToastContainer className="p-3" position={"top-start"}>
            <Toast onClose={closeAction} show={api.toastShow} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    {/* <small>11 mins ago</small> */}
                </Toast.Header>
                <Toast.Body>{api.message}</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
export default ToastShow;