import React, { useState } from "react";

const AddNewApp = ({ onClose, onSubmit }) => {
  const [newApplication, setNewApplication] = useState({
    saasName: "",
    adminOwner: "",
    description: "",
    modeOfPayment: "",
    billingCycle: "",
    subscriptionDuration: "",
    numLicenses: "",
    expiration: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewApplication((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newApplication);
    onClose(); // Close the modal after submitting
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add New SaaS Application</h2>
        <form onSubmit={handleSubmit}>
          {/* Input fields for each attribute */}
          {/* Example: */}
          <div className="mb-4">
            <label htmlFor="saasName" className="block font-semibold mb-2">
              SaaS Name:
            </label>
            <input
              type="text"
              id="saasName"
              name="saasName"
              value={newApplication.saasName}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          {/* Repeat similar blocks for other attributes */}
          <div className="flex justify-end">
            <button type="button" className="btn mr-2" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Add Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewApp;
