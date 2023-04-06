import React from "react";
import '../Styles/DeleteConfirmation.css'

function DeleteConfirmation(props) {
  return (
    <div className="delete-confirmation">
      <h2>Are you sure you want to delete?</h2>
      <div className="buttons">
        <button className="cancel-button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className="delete-button" onClick={props.onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
