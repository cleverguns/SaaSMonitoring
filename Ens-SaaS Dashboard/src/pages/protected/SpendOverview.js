import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Dashboard from '../../features/dashboard/index'

function SpendOverview() {
    return (
      <div className="flex flex-col overflow-auto bg-white rounded shadow-md p-4">
        <div className="text-xl font-bold pb-2">Spending Overview</div>
        <div className="flex flex-col">
          <div className="text-gray-500 mb-2">Source</div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div>Discovered spend breakdown</div>
              <div className="text-right font-bold">Application spend increase - QoQ</div>
            </div>
            <div className="flex items-center justify-between font-medium">
              <div>Category</div>
              <div>Application</div>
              <div>Oct 2021-Dec 2021 (3m)</div>
            </div>
            <div className="border-t border-gray-200"></div>
            <div className="flex items-center justify-between">
              <div>Productivity</div>
              <div className="flex items-center space-x-2">
                <div>$116,158</div>
                <div className="text-green-500">Slack</div>
              </div>
              <div>$115,433</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Social</div>
              <div className="flex items-center space-x-2">
                <div>$113,375</div>
                <div className="text-green-500">Linkedin</div>
              </div>
              <div>$113,375</div>
            </div>
       
            <div className="flex items-center justify-between font-medium text-gray-500">
              <div>Authentication</div>
              <div>1Password</div>
              <div>-15%</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SpendOverview;