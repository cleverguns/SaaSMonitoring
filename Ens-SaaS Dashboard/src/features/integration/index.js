// Integration component
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { createSaaS, getAllSaaS, updateSaaS, deleteSaaS } from "../common/saasSlice";
import moment from "moment";
import TopSideButtons from "./components/TopSideButtons";
import EditModal from "./components/EditModal";
import Swal from "sweetalert2";
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
    const formattedExpiration = new Date(editedData.expiration).toLocaleDateString("en-US");
    const updatedData = { ...editedData, expiration: formattedExpiration };
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
                <th>Expiration</th>
                <th>Description</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSaasList.map(({ _id, application, adminOwner, description, expiration }) => {
                return (
                  <tr key={_id}>
                    <td>{application}</td>
                    <td>{adminOwner}</td>
                    <td>{description}</td>
                    <td>{moment(expiration).format("LL")}</td>
                    <td>{description}</td>
                    <td>{description}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          className="btn px-6 btn-sm normal-case btn-primary"
                          onClick={() => onEdit({ _id, application, adminOwner, description, expiration })}
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
        <EditModal
          data={editData}
          onClose={onCloseModal}
          onSubmit={onSubmitEdit}
        />
      )}


      {deleteItemId && (
        <DeleteModal
          onDelete={onConfirmDelete}
          onCancel={onCancelDelete}
        />
      )}
    </>
  );
}

export default Integration;
