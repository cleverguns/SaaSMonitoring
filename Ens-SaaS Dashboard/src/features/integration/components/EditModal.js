import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditModal = ({ data, onClose, onSubmit }) => {
  const [editedData, setEditedData] = useState(data);

  useEffect(() => {
    setEditedData(data);
  }, [data]);

  const handleChange = (name, value) => {
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit SaaS Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="application" className="block font-semibold mb-2">
              SaaS Name:
            </label>
            <input
              type="text"
              id="application"
              name="application"
              value={editedData.application}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="adminOwner" className="block font-semibold mb-2">
              Admin/Owner:
            </label>
            <input
              type="text"
              id="adminOwner"
              name="adminOwner"
              value={editedData.adminOwner}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-2">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={editedData.description}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiration" className="block font-semibold mb-2">
              Expiration Date:
            </label>
            <DatePicker
              id="expiration"
              name="expiration"
              selected={editedData.expiration ? new Date(editedData.expiration) : new Date().toISOString()}
              onChange={(date) => handleChange("expiration", date.toISOString())}
              dateFormat="MM/dd/yyyy"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button type="button" className="btn mr-2" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
