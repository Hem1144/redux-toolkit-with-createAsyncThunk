import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Create = () => {
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
    console.log(users);
  };

  const handleSubmit = () => {
    dispatch();
  };

  return (
    <div>
      <form className="w-50 mx-auto my-5" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="male"
            name="gender"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="form-check-label">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            value="female"
            name="gender"
            onChange={getUserData}
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Female
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
