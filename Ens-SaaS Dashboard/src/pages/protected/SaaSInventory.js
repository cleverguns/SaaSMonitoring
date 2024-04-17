import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Team from '../../features/settings/SaaSInventory'



function InternalPage(){
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title : "SaaS Lists"}))
      }, [])


    return(
        <Team/>
    )
}

export default InternalPage