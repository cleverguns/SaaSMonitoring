import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TitleCard from "../../../components/Cards/TitleCard";
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

const TEAM_MEMBERS = [
  {
    name: "Google Work Space",
    avatar: "public/Saas Logo/aws.png",
    License: "Enterprise",
    role: "Good",
    Expiration: moment(new Date())
      .add(-5 * 1, "days")
      .format("DD MMM YYYY"),
    lastActive: "5 hr ago",
  },
  {
    name: "Slack",
    avatar: "",
    License: "Basic",
    role: "sample",
    Expiration: moment(new Date())
      .add(-5 * 2, "days")
      .format("DD MMM YYYY"),
    lastActive: "15 min ago",
  },
  {
    name: "Zoom",
    avatar: "",
    License: "Basic",
    role: "sample",
    Expiration: moment(new Date())
      .add(-5 * 3, "days")
      .format("DD MMM YYYY"),
    lastActive: "20 hr ago",
  },
  {
    name: "Hubspot",
    avatar: "",
    License: "Standard",
    role: "sample",
    Expiration: moment(new Date())
      .add(-5 * 4, "days")
      .format("DD MMM YYYY"),
    lastActive: "1 hr ago",
  },
  {
    name: "Amazon Web Services",
    avatar: "",
    License: "Basic",
    role: "sample",
    Expiration: moment(new Date())
      .add(-5 * 5, "days")
      .format("DD MMM YYYY"),
    lastActive: "40 min ago",
  },
  {
    name: "Zendesk",
    avatar: "",
    License: "Standard",
    role: "sample",
    Expiration: moment(new Date())
      .add(-5 * 7, "days")
      .format("DD MMM YYYY"),
    lastActive: "5 hr ago",
  },
];

function SaaSInv() {
  const [members, setMembers] = useState(TEAM_MEMBERS);

  const getRoleComponent = (role) => {
    if (role === "Good")
      return <div className="badge badge-secondary">{role}</div>;
    if (role === "Admin") return <div className="badge">{role}</div>;
    if (role === "sample 3")
      return <div className="badge badge-primary">{role}</div>;
    if (role === "sample 4")
      return <div className="badge badge-accent">{role}</div>;
    else return <div className="badge badge-ghost">{role}</div>;
  };

  return (
    <>
      <TitleCard
        title="List of All SaaS Application"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Team Member list in table format loaded constant */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SaaS Name</th>
                <th>Description</th>
                <th>Expiration</th>
                
                <th>Action</th>
               
              </tr>
            </thead>
            <tbody>
              {members.map((l, k) => {
                return (
                  <tr key={k}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={l.avatar} alt="Avatar" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{l.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{l.LicenseType}</td>

                    <td>{getRoleComponent(l.role)}</td>
                    <td>{l.Expiration}</td>
                    <td>{l.lastActive}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default SaaSInv;
