import React, { useState } from "react";
import Header from "./Header.js";
import "./Profile.css";
import customerImage from "../images/profile.png";
import { setUser, releaseUser } from "../redux/LoginSlice";
import { useSelector, useDispatch } from "react-redux";

function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  //const { customer, setCustomer } = useContext(Context);
  console.log(user);

  return (
    <>
      <Header></Header>
      <div className="profile-container">
        <h1>Customer Profile</h1>
        <div className="profile-details">
          <div className="profile-image">
            <img src={customerImage} alt="Customer" />
          </div>
          <div className="profile-info">
            <h2>{user.user.username}</h2>
            <p>Email:{user.user.email} </p>
            <p>Name: {user.user.fullName}</p>
            <p>Contact: {user.user.contactNumber}</p>
            <p>Address: {user.user.address}</p>
            {/* // <p>Gender: {user.user.gender}</p> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
