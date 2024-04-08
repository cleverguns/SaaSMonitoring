import { useState } from "react"
import { useDispatch } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { showNotification } from "../common/headerSlice"



const INITIAL_INTEGRATION_LIST = [
    {name : "Slack", icon : "https://cdn-icons-png.flaticon.com/512/2111/2111615.png", isActive : true, description : "slack datas"},
    
    {name : "Linkedin", icon : "https://cdn-icons-png.flaticon.com/512/174/174857.png", isActive : true, description : "LinkedIn Datas"},
    {name : "Zendesk", icon : "https://cdn.icon-icons.com/icons2/2429/PNG/512/zendesk_logo_icon_147198.png", isActive : false, description : "Zendesk Data"},
    {name : "GWS", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968534.png", isActive : false, description : "GWS data."},
    {name : "AWS", icon : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO7W4Xqb76msKl01c3Z6mIJ-IcwSV6OZPsdA&usqp=CAU", isActive : false, description : ""},
    {name : "Hubspot", icon : "https://cdn-icons-png.flaticon.com/512/5968/5968872.png", isActive : false, description : "Data."},
    {name : "Zoom", icon : "https://images.squarespace-cdn.com/content/v1/57fbdeb45016e11737b92f21/1591725241180-H5XSU3C179CO1TGYNMK3/Zoom-App-Icon-2.png", isActive : false, description : "Zoom Data"},
]

function Integration(){

    const dispatch = useDispatch()

    const [integrationList, setIntegrationList] = useState(INITIAL_INTEGRATION_LIST)


    const updateIntegrationStatus = (index) => {
        let integration = integrationList[index]
        setIntegrationList(integrationList.map((i, k) => {
            if(k===index)return {...i, isActive : !i.isActive}
            return i
        }))
        dispatch(showNotification({message : `${integration.name} ${integration.isActive ? "disabled" : "enabled"}` , status : 1}))
    }
    
    
    
    

    return(

      
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                integrationList.map((i, k) => {
                    return(
                        <TitleCard key={k} title={i.name} topMargin={"mt-2"}>
                            
                            <p className="flex">
                                <img alt="icon" src={i.icon} className="w-12 h-12 inline-block mr-4" />
                                {i.description}
                            </p>
                            <div className="mt-6 text-right">
                                <input type="checkbox" className="toggle toggle-success toggle-lg" checked={i.isActive} onChange={() => updateIntegrationStatus(k)}/>
                            </div>
                            
                        </TitleCard>
                    )
                
                })
            }
            </div>
        </>
    )
}

export default Integration