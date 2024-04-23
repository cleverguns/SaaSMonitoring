import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { createSaaS } from "../../common/saasSlice";

const TopSideButtons = () => {
  const dispatch = useDispatch();
  const [isAdding, setIsAdding] = useState(false);
  const [saasData, setSaasData] = useState({
    application: "",
    expiration: new Date(),
    description: "",
  });

  const openAddModal = () => {
    setIsAdding(true);
  };

  const closeAddModal = () => {
    setIsAdding(false);
    // Reset saasData when modal is closed
    setSaasData({
      application: "",
      expiration: new Date(),
      description: "",
    });
  };

  const handleSubmit = () => {
    dispatch(createSaaS(saasData));
    setIsAdding(false);
    // Reset saasData after submission
    setSaasData({
      application: "",
      expiration: new Date(),
      description: "",
    });
  };

  return (
    <div className="flex items-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
        onClick={openAddModal}
      >
        Add New Application
      </button>
      {isAdding && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Add New Application</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="application" className="block font-semibold mb-2">
                  SaaS Name:
                </label>
                <input
                  type="text"
                  id="application"
                  name="application"
                  value={saasData.application}
                  onChange={(e) => setSaasData({ ...saasData, application: e.target.value })}
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
                  value={saasData.description}
                  onChange={(e) => setSaasData({ ...saasData, description: e.target.value })}
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
                  selected={saasData.expiration}
                  onChange={(date) => setSaasData({ ...saasData, expiration: date })}
                  dateFormat="MM/dd/yyyy"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button type="button" className="btn mr-2" onClick={closeAddModal}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopSideButtons;
