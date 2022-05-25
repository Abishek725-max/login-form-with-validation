import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import PostModel from "./postModel";
import ToastShow from "./toast";
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { user_add_post_thunk, user_get_post_thunk, user_edit_post_thunk, user_delete_post_thunk } from "./redux/thunk";

function Home() {
  const { user, api } = useSelector((state) => state);
  const renderCount = useRef(0);
  const [userdata, setUserData] = useState([]);
  const r_one = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(user_get_post_thunk())
    console.dir(r_one.current);
    setUserData(user.data);
    // r_one.current.focus();
  }, [])
  console.log(renderCount.current && renderCount.current++, user.data);

  // if (api.toastShow) {
  //   console.log(api.message);
  //   alert(api.message)
  // }

  const [search, setSearch] = useState('');
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  function deleteRecord(deleteId) {
    return async () => {
      dispatch(user_delete_post_thunk(deleteId));
      let temp = [...userdata];
    //   temp.push({
    //     "userId": 10,
    //     "id": 101,
    //     "title": "Abishek",
    //     "body": "Abishek"
    // });
          // const index = deleteId
          // temp[index-1] = {"userId": 10,
          //      "id": 101,
          //      "title": "Abishek",
          //      "body": "Abishek"};
          const dataDelete = [...userdata];
        const index = deleteId
        dataDelete.splice(index-1, 1);
      setUserData([...dataDelete]);
    };
  }
  const dataStore = Array.isArray(userdata) && userdata.length && userdata.filter((dataView) => {
    if (search == '') {
      return true
    }
    else if (dataView.body.toLowerCase().includes(search.toLowerCase()) || dataView.title.toLowerCase().includes(search.toLowerCase())) {
      return dataView
    }

  }).map((dataView, index) => {
    if (index != 5 - 1) {
      return (
        <tr key={dataView.id}>
          <td>{dataView.id}</td>
          <td>{dataView.title}</td>
          <td>{dataView.body}</td>
          <td>
            <PostModel variant={"icon"} data={dataView}></PostModel>
            <a onClick={deleteRecord(dataView.id)} href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }} ><i className="material-icons">&#xE872;</i></a>
          </td>
        </tr>
      )
    }
  })
  return (

    <div className="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row ">

          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input className="form-control mr-sm-2 bg-warning" ref={r_one} onChange={handleChange} type="search" placeholder="Search List" aria-label="Search" />

              </form>
            </div>
          </div>
          <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "red" }}><h2><b>Post List</b></h2></div>
          <PostModel></PostModel>
        </div>
        <div className="row bg-info" >
          <div className="table-responsive bg-light" >
            <table className="table table-striped table-hover table-bordered bg-info">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title </th>
                  <th>Body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dataStore}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;