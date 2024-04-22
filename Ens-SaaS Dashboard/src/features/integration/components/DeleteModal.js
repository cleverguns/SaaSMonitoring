import React from "react";

const DeleteModal = ({ onDelete, onCancel }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Are you sure you want to delete?</h2>
        <div className="modal-actions">
          <button onClick={onDelete}>Delete</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
