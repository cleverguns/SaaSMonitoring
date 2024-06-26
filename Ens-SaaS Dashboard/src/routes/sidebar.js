/** Icons are imported separatly to reduce build time */
import BellIcon from '@heroicons/react/24/outline/BellIcon'
import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
import UserIcon from '@heroicons/react/24/outline/UserIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'



const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/app/dashboard',
    icon: <Squares2X2Icon className={iconClasses}/>, 
    name: 'Dashboard',
  },



  {
    path: '/app/leads', // url
    icon: <UsersIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Users', // name that appear in Sidebar

    submenu: [

      {
        path: 'leads', // url
        icon: <TableCellsIcon className={iconClasses}/>, // icon component
        name: 'Users', // name that appear in Sidebar

      },

      {
        path: 'NewRoster', // url
        icon: <DocumentTextIcon className={submenuIconClasses}/>, // icon component
        name: 'New Roster', // name that appear in Sidebar
      },
    ]
  },

  {
    path: '', //no url needed as this has submenu
    icon: <BoltIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Applications', // name that appear in Sidebar


    submenu : [

      {
        path: 'integration', // url
        icon: <BoltIcon  className={submenuIconClasses}/>, // icon component 
        name: 'Applications', // name that appear in Sidebar
      },

      {
        path: 'integration/components/',// URL path for NewSaas component
        icon: <CodeBracketSquareIcon className={submenuIconClasses} />, // Icon component
        name: 'Add New SaaS Application', // Name that appears in the sidebar
      },

    ]
   
  },
  
  {
    path: '/app/transactions', // url
    icon: <CurrencyDollarIcon className={iconClasses}/>, // icon component
    name: 'Transactions', // name that appear in Sidebar
    

  },




  {
    path: '/app/charts', // url
    icon: <ChartBarIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Analytics', // name that appear in Sidebar

    submenu : [
      {
        path: '/app/charts', // url
        icon: <ChartBarIcon className={submenuIconClasses}/>, // icon component
        name: 'Application Usages', // name that appear in Sidebar
      },
      {
        path: '/app/spending', // url routes nito nasa features lahat
        icon: <WalletIcon className={iconClasses}/>, // icon component
        name: 'Spending', // name that appear in Sidebar
      },

      {
        path: '/app/spending', // url routes nito nasa features lahat
        icon: <WalletIcon className={iconClasses}/>, // icon component
        name: 'costing', // name that appear in Sidebar
      },


              ]
  },

  {
    path: '/app/calendar', // url
    icon: <CalendarDaysIcon className={iconClasses}/>, // icon component
    name: 'Calendar (Renewals)', // name that appear in Sidebar
  },

  {
    path: '', //no url needed as this has submenu
    icon: <DocumentDuplicateIcon className={`${iconClasses} inline` }/>,  // icon component
    name: 'Pages', // name that appear in Sidebar
    submenu : [
      {
        path: '/login',
        icon: <ArrowRightOnRectangleIcon className={submenuIconClasses}/>,
        name: 'Login',
      },
      {
        path: '/register', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Register', // name that appear in Sidebar
      },
      {
        path: '/forgot-password',
        icon: <KeyIcon className={submenuIconClasses}/>,
        name: 'Forgot Password',
      },
      {
        path: '/app/blank',
        icon: <DocumentIcon className={submenuIconClasses}/>,
        name: 'Blank Page',
      },
      {
        path: '/app/404',
        icon: <ExclamationTriangleIcon className={submenuIconClasses}/>,
        name: '404',
      },
    ]
  },
  {
    path: '', //no url needed as this has submenu
    icon: <Cog6ToothIcon className={`${iconClasses} inline` }/>, // icon component
    name: 'Settings', // name that appear in Sidebar
    submenu : [
      {
        path: '/app/settings-profile', //url
        icon: <UserIcon className={submenuIconClasses}/>, // icon component
        name: 'Profile', // name that appear in Sidebar
      },
      
      {
        path: '/app/settings-team', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'Team Members', // name that appear in Sidebar
      },

      {
        path: '/app/settings-SaaSInventory', // url
        icon: <UsersIcon className={submenuIconClasses}/>, // icon component
        name: 'SaaSInventory', // name that appear in Sidebar
      },
    ]

  },
]

export default routes

