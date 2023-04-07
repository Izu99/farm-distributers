import React, { useState } from "react";
import "../Styles/ProfileFarmer.css";
import profileImg from "../images/profile-img.png";
import DeleteConfirmation from "./DeleteConfirmation";
import Header from "./NavBar";

function ProfileFarmer() {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDeleteClick = () => {
    setShowDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    // handle delete logic here
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="ProfileFarmer">
      <Header />
      <form action="">
        <div className="top">
          <img src={profileImg} alt="" />
          <h2>Name</h2>
          <p>Farmer</p>
        </div>
        <div className="bottom">
          <div className="basic-details">
            <label htmlFor="">User Name</label>
            <input type="text" required />
          </div>
          <div className="basic-details">
            <label htmlFor="">First Name</label>
            <input type="text" required />
          </div>
          <div className="basic-details">
            <label htmlFor="">Last Namee</label>
            <input type="text" required />
          </div>
          <div className="basic-details">
            <label htmlFor="">DOB</label>
            <input type="date" required />
          </div>
          <div className="basic-details">
            <label htmlFor="">Mobile Number</label>
            <input type="text" required />
          </div>
          <div className="basic-details">
            <label htmlFor="">Email</label>
            <input type="text" required />
          </div>
        </div>
        <button type="submit">Edit User</button>
        <button type="submit" onClick={handleDeleteClick}>
          Delete User
        </button>
        {showDeleteConfirmation && (
          <DeleteConfirmation
            onCancel={handleCancelDelete}
            onConfirm={handleConfirmDelete}
          />
        )}
      </form>
    </div>
  );
}

export default ProfileFarmer;
