

import AuthWrapper from '@/components/AuthWrapper'
import NewPasswordForm from '@/components/NewPasswordForm'



const page = () => {

  return (
    <AuthWrapper title='Create a New Password'>
        <NewPasswordForm/>
    </AuthWrapper>
  )
}

export default page