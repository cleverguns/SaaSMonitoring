
## Features

- **Light/dark** mode toggle
- Token based user **authentication**
- **Submenu support** in sidebar
- Store management using **redux toolkit**
- **Daisy UI** components and **Tailwind** support
- **Right and left sidebar**, Universal loader, notifications
- **Calendar**, global modal, **chart js 2**  and other components


## Installation

Go to project directory and run (make sure you have node installed first)

```bash
  npm install
  npm start
```
    
## Core Libraries Used

- [React JS v18.2.0](https://reactjs.org/)
- [React Router v6.4.3](https://reactrouter.com/en/main)
- [Tailwind CSS v3.3.6](https://tailwindcss.com/)
- [Daisy UI v4.4.19](https://daisyui.com/)
- [HeroIcons](https://heroicons.com/)
- [Redux toolkit v1.9](https://redux-toolkit.js.org/)
- [React ChartJS 2 v5](https://react-chartjs-2.js.org/)

## SaaS Dashboard Needed:

1. Applications (total SaaS Applications, optional top applications by users)
2. Users - (pag naclick yung user ano anong licenses meron sila or applications na gamit nila for example: jumpcloud GWS and zendesk)
3. Policies(may mga misconfigures ba?)
4. Spending (total costs- sub "application by spend" -> for example si GWS nakaka 30,000php, si zendesk 10,000php etc...)
5. upcoming Renewals (mga SaaS Apps na need na mag renew or malapit na )
6. Findings(optional)

# Special notes

leads = users
Integration = Applications




# tasks 4/10/2024

1. sidebar.js - configure (done)
2. Re Desing Pages with 404 (ano pa yung kulang now?)
3. Crud in Notification 
4. create Crud in Applications (API integrations - add button for adding new SaaS Apps) - corrdinate with backend

5. costing page + Application after Users (done)
6. Checking Axios method
7. To fetch this ( SaaS Notifications API Endpoints: GET::LIST: https://oguj2kgkxa.execute-api.ap-northeast-1.amazonaws.com/notifications/ POST::CREATE: https://oguj2kgkxa.execute-api.ap-northeast-1.amazonaws.com/notifications)




# tasks 4/11/2024
1. Test API payloads (𝐀𝐏𝐈𝐬: 𝐓𝐡𝐫𝐞𝐚𝐭𝐬, 𝐒𝐞𝐜𝐮𝐫𝐢𝐭𝐲 𝐚𝐧𝐝 𝐁𝐞𝐬𝐭 𝐏𝐫𝐚𝐜𝐭𝐢𝐜𝐞𝐬) 2 hrs
2. Fetch API to frontend raw data to organized
  -calendar Get axious
3. Clean code and optimization - kasi inuupload na to sa staging 

# Tasks 4/12/2024

1. Create page Add New SaaS Application - for this one pwede gayahin si "Leads" Users tapos may modal lang

Can add contracts or additional documents
Add attachments
picture-logo
billed to Varchar
mode of payment varchar   
expiration date (date)
contract renewal (date)
amount (currency)

# Tasks 4/16/2024

Notification in NAVBAR

1. nasa email

# Tasks 4/17/2024


List Down all Data i need in SaaS

for example - Zoom
Name, ussage, deployed license per emoloyee, department etc


Jump Cloud
Name, ussage, deployed license per emoloyee, department etc




# Tasks 4/17/2024


SaaS Inventory Fetching

List of all SaaS fetchings 

Simple List - Reference zendesk = https://enshored.zendesk.com/agent/filters/27338599217049

Lagay muna place holder 

for example SaaS name with icon,  expiration date etc placeholder....