import AuthNav from '@/components/AuthNav'
import LoginForm from '../_components/LoginForm'
import { getUser } from '@/lib/getUser';
import { redirect } from 'next/navigation';

const LoginPage = async() => {
  const user = await getUser();

  if(user){
    redirect('/dashboard')
  }
  return (
    <main className='bg-white container mx-auto'>
      <AuthNav/>
        <div className='flex justify-center p-4 items-center flex-col'>

        <h1 className='font-bold text-2xl sm:text-4xl'>Welcome back</h1>  

        <LoginForm/>         
        </div>
    </main>
  )
}

export default LoginPage