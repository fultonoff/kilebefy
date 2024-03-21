import UserNav from '@/components/user/UserNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className='container mx-auto'>
    
        <UserNav/>
        {children}
    </main>
  )
}

export default layout