// Integration component
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { createSaaS, getAllSaaS, updateSaaS, deleteSaaS } from "../common/saasSlice";
import moment from "moment";
import TopSideButtons from "./components/TopSideButtons";
import EditModal from "./components/EditModal";
import Swal from "sweetalert2"; // Import SweetAlert
import DeleteModal from "./components/DeleteModal"; 




function Integration() {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteItemId, setDeleteItemId] = useState(null);
  const { saasListData } = useSelector((state) => state.saas);

  useEffect(() => {
    dispatch(getAllSaaS());
  }, [dispatch]);

  const onSave = () => {
    dispatch(
      createSaaS({
        application: "Google Workspace",
        expiration: "2027-06-19T02:43:14.300Z", 
        description: "Admin Google",
      })
    );
  };

  const onEdit = (data) => {
    console.log("Edit button clicked with data:", data);
    setEditData(data);
  };

  const onCloseModal = () => {
    setEditData(null);
  };

  const onSubmitEdit = (editedData) => {
    console.log("editedData",editedData)
    const formattedExpiration = new Date(editedData.expiration).toLocaleDateString("en-US");
    const updatedData = { ...editedData, expiration: formattedExpiration };
  
    console.log("Submitting edited data:", updatedData);
    dispatch(updateSaaS(updatedData));
    onCloseModal();
  };
  
  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33", 
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteSaaS(id));
      }
    });
  };

  const onCancelDelete = () => {
    setDeleteItemId(null);
  };

  const onConfirmDelete = () => {
    dispatch(deleteSaaS(deleteItemId));
    setDeleteItemId(null);
  };

  const filteredSaasList = saasListData.filter((saas) =>
    saas.application.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <TitleCard
        title="List of All SaaS Application"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons setSearchQuery={setSearchQuery} />}
      > 
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search SaaS Application"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SaaS Name</th>
                <th>Admin/Owner</th>
                <th>Description</th>
                <th>Mode of payment</th>
                <th>Billing Cycle</th>
                <th>Subscription Duration</th>
                <th>Number of licenses</th>
                <th>Expiration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSaasList.map(({ _id, application, expiration, description }) => {
                return (
                  <tr key={_id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          {/* <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" /> 
                          </div> TODO" AVATAR / ICON*/}
                        </div>
                        <div>
                          <div className="font-bold">{application}</div>
                        </div>
                      </div>
                    </td>
                    <td>{/* Display Admin/Owner */}</td>
                    <td>{/* Display Description */}</td>
                    <td>{/* Display Mode of payment */}</td>
                    <td>{/* Display Billing Cycle */}</td>
                    <td>{/* Display Subscription Duration */}</td>
                    <td>{/* Display Number of licenses */}</td>
                    <td>{moment(expiration).format("LL")}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          className="btn px-6 btn-sm normal-case btn-primary"
                          onClick={() => onEdit({ _id, application, expiration, description })}
                        >
                          Edit
                        </button>
                        <button
                          className="btn px-6 btn-sm normal-case btn-primary"
                          onClick={() => onDelete(_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>

      {editData && (
        <EditModal data={editData} onClose={onCloseModal} onSubmit={onSubmitEdit} />
      )}

      {deleteItemId && (
        <DeleteModal
          onDelete={onConfirmDelete}
          onCancel={onCancelDelete}
        />
      )}

      {/* Save button outside of the table */}
      {/* <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={onSave}
      >
        Save
      </button> */}
    </>
  );
}

export default Integration;
