import { useDispatch } from "react-redux";
import { showNotification } from "../../common/headerSlice";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const addNewTeamMember = () => {
    dispatch(showNotification({ message: "Add New SaaS", status: 1 }));
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => addNewTeamMember()}
      >
        Add New Application
      </button>
    </div>

    
  );
};

export default TopSideButtons;
