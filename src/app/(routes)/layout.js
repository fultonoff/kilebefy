import UserNav from '@/components/user/UserNav'
import React from 'react'

const layout = ({children}) => {
  return (
    <main className=''>
    
        <UserNav/>
        {children}
    </main>
  )
}

export default layout