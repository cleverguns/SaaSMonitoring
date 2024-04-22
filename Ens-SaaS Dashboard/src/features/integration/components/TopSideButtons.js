import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../../common/headerSlice";
import AddNewApp from "./AddNewApp";

const TopSideButtons = () => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);

  const openAddModal = () => {
    setIsAdding(true);
  };

  const closeAddModal = () => {
    setIsAdding(false);
  };

  const handleSubmit = (newApplication) => {
    // Dispatch an action to handle the new application data
    // For now, let's just show a notification
    dispatch(
      showNotification({
        message: `Added new SaaS application: ${newApplication.saasName}`,
        status: 1
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={openAddModal}
      >
        Add New Application
      </button>
      {isAdding && (
        <AddNewApp onClose={closeAddModal} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default TopSideButtons;
