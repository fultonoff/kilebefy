import AuthWrapper from '@/components/AuthWrapper'
import { Label } from '@/components/ui/label'
import {MailCheck} from 'lucide-react'

const ResetLink = () => {
  return (
    <AuthWrapper title='Email Sent!'>
        <p className='mt-5 text-muted-foreground text-base'>Password reset link has been successfully sent to your Email Address</p>
        <div className='p-4 rounded-md mt-10 border-dashed w-full sm:w-[400px]  h-[200px] border border-primary flex items-center justify-center'>
        <MailCheck className='w-20 h-20 text-primary' strokeWidth={0.5}/>
       
        </div>
    </AuthWrapper>
  )
}

export default ResetLink