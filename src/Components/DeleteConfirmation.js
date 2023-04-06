import React from "react";
import '../Styles/DeleteConfirmation.css'

function DeleteConfirmation(props) {
  return (
    <div className="delete-confirmation">
      <h2>Do you want to delete Farmer?</h2>
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
