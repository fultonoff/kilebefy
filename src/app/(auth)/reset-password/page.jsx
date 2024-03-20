
import AuthWrapper from '@/components/AuthWrapper'
import React from 'react'
import RecoverForm from '../_components/RecoverForm'

const ForgotPassword = () => {
  return (
    <AuthWrapper title='Enter your Email Address'>
      <RecoverForm/>
    </AuthWrapper>
  )
}

export default ForgotPassword