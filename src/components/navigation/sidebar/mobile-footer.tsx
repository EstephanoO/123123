'use client'

import useConversation from "@/hooks/use-conversation"
import useRoutes from "@/hooks/useRoutes"
import { MobileItem } from "./mobile-item"


function MobileFooter() {
    const routes = useRoutes()
    const  { isOpen} = useConversation()

    if( isOpen) {
        return null
    }

  return (
    <div className="
    fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden
    ">
        {routes.map((route) => (
            <MobileItem
            key={route.href}
            label={route.label}
            href={route.href}
            active={route.active}
            icon={route.icon}/>
        ))}
    </div>
  )
}

export default MobileFooter