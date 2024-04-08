import TitleCard from "../../../components/Cards/TitleCard";
import { userSourceData } from "./UserChannels";

export function UserChannels() {
    return (

        <TitleCard title={"User Signup Source"}>

            <TitleCard title={"Application Spend Increase (Quarter on Quarter)"}>

                {/** Table Data */}
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>

                                <th className="normal-case">Source</th>
                                <th className="normal-case">No of Users</th>
                                <th className="normal-case">Conversion</th>
                            </tr>
                        </thead>
                        <tbody>

                            <th className="normal-case">App</th>
                            <th className="normal-case">Amount</th>
                            <th className="normal-case">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>

                        {userSourceData.map((u, k) => {
                            return (
                                <tr key={k}>
                                    <th>{k + 1}</th>
                                    <td>{u.source}</td>
                                    <td>{u.count}</td>
                                    <td>{`${u.conversionPercent}%`}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </TitleCard>
    );
}
