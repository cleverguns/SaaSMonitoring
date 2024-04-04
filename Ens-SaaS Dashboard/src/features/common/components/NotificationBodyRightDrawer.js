function NotificationBodyRightDrawer(){
    return(
        <>
             {
                [...Array(15)].map((_, i) => {
                    return <div key={i} className={"grid mt-3 card bg-base-200 rounded-box p-3" + (i < 5 ? " bg-blue-100" : "")}>
                            {i % 2 === 0 ? `drawer style` : `You have 3 upcoming renewals `}
                        </div> 
                })
            }
        </>
    )
}

export default NotificationBodyRightDrawer