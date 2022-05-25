import { Button, Modal, Input } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from 'react';
import { user_add_post_thunk, user_get_post_thunk, user_edit_post_thunk, user_delete_post_thunk } from "./redux/thunk";
import api_reducer from './redux/api_reducer';


function PostModel({
    variant = "button",
    data = null }) {
    const { user, api } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [createId, setId] = useState(data?.id || "")
    const [createTitle, setTitle] = useState(data?.title || "")
    const [createBody, setBody] = useState(data?.body || "")
    const [show, setShow] = useState(false);
    if (variant === Button) {
        setId("");
        setTitle("");
        setBody("");
    }
    const handleClose = () => {
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const postRecord = (event) => {
        let formData = new URLSearchParams();
        formData.append('userId', createId);
        formData.append('title', createTitle);
        formData.append('body', createBody);
        if (createId === "") return alert("Enter the UserId");
        if (createTitle === "") return alert("Enter the Title");
        if (createBody === "") return alert("Enter the Body");
        console.log(event.target.innerText);
        if (event.target.innerText === "Add Post") {
            dispatch(user_add_post_thunk(formData))
            if (api.toastShow) handleClose();
        }
        else {
            dispatch(user_edit_post_thunk(createId, formData));
            if (api.toastShow) handleClose();
        }
    }

    return (
        <>
            {(variant === "button") ? (<>
                <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred ">
                    <Button variant="primary" onClick={handleShow}>
                        Add New Post 
                    </Button>
                </div>
            </>) :
                (<>
                    <a onClick={handleShow} href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a></>)
            }
            <div className="model_box">
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="form-group mt-3">
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Id"
                                    value={createId}
                                    onChange={e => setId(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Title"
                                    value={createTitle}
                                    onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className="form-group mt-3">
                                <input type="name" className="form-control" id="exampleInputPassword1" placeholder="Enter Body"
                                    value={createBody}
                                    onChange={e => setBody(e.target.value)} />
                            </div>
                            <Button onClick={postRecord} variant="secondary" className="btn btn-success mt-4" >{(variant === "button") ? (<>Add Post</>) : (<>Edit Post</>)}</Button>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}

export default PostModel