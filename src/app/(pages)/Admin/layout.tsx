import { SidebarProvider } from '@/components/ui/sidebar'
import Admin_SideBar from '@/components/user/Asmin_SideBar'
import React from 'react'

const layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
   <SidebarProvider className='w-screen flex'>
    <div className="Left w-[30%]">
        <Admin_SideBar />
    </div>
    <div className="Right w-[70%] bg-red-300">
     {children}

    </div>
   </SidebarProvider>
  )
}

export default layout