import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../components/Cards/TitleCard";
import { createSaaS, getAllSaaS, updateSaaS } from "../common/saasSlice"; 
import moment from "moment";
import TopSideButtons from "./components/TopSideButtons";
import EditModal from "./components/EditModal"; 

function Integration() {
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(null); 
  const [searchQuery, setSearchQuery] = useState(""); 
  const { saasListData } = useSelector((state) => state.saas);

  useEffect(() => {
    dispatch(getAllSaaS());
  }, [dispatch]);

  const onSave = () => {
    dispatch(
      createSaaS({
        application: "Google Workspace",
        expiration: "2024-04-19T02:43:14.300Z",   
        description: "Google Admin Console",
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
    dispatch(updateSaaS(editedData)); 
    onCloseModal(); 
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
        {/* Search input */}
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
              {filteredSaasList.map(({ application, expiration, description }) => {
                return (
                  <tr key={application}>
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
                          onClick={onSave}
                        >
                          Save
                        </button>
                        <button
                          className="btn px-6 btn-sm normal-case btn-primary"
                          onClick={() => onEdit({ application, expiration, description })}
                        >
                          Edit
                        </button>
                        <button className="btn px-6 btn-sm normal-case btn-primary">
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
    </>
  );
}

export default Integration;
