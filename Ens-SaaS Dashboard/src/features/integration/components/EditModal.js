import React, { useState } from "react";

const EditModal = ({ data, onClose, onSubmit }) => {
  const [editedData, setEditedData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(editedData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit SaaS Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="application" className="block font-semibold mb-2">
              Application Name:
            </label>
            <input
              type="text"
              id="application"
              name="application"
              value={editedData.application}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="expiration" className="block font-semibold mb-2">
              Expiration Date:
            </label>
            <input
              type="date"
              id="expiration"
              name="expiration"
              value={editedData.expiration}
              onChange={handleChange}
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
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="btn mr-2"
              onClick={onClose}
            >
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
