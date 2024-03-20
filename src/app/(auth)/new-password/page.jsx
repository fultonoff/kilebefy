import AuthWrapper from '@/components/AuthWrapper'
import React from 'react'
import NewPasswordForm from '../_components/NewPasswordForm'

const page = () => {
  return (
    <AuthWrapper title='Create a New Password'>
        <NewPasswordForm/>
    </AuthWrapper>
  )
}

export default page