import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showUser } from "../features/userDetailSlice";

const Read = () => {
  // const users = useSelector((state) => state.app.users);
  // console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h2 style={{}}>All Data</h2>
      <div className="card w-50 mx-auto" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Card subtitle
          </h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card&apos;s content.
          </p>
          <Link href="Link" className="card-link">
            Card link
          </Link>
          <Link href="Link" className="card-link">
            Another link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
