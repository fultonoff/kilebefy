import AuthNav from '@/components/AuthNav'
import LoginForm from '../_components/LoginForm'
import { getUser } from '@/lib/getUser';
import { redirect } from 'next/navigation';
import Image from 'next/image'
import logo from '../../../../public/kilebefy-black.png'
import Link from 'next/link'

const LoginPage = async() => {
  const user = await getUser();

  if(user){
    redirect('/dashboard')
  }
  return (
    <main className='bg-gradient-to-b from-destructive/10 to-primary/20 h-screen'>

      <div className='container mx-auto'>

      <AuthNav/>
        <div className='flex justify-center p-4 items-center flex-col'>
            <Link href='/' className='mt-20 mb-1 w-20 h-20 ' >
          <Image src={logo} alt='logo' className='w-12 object-contain'/>

            </Link>

        <h1 className='font-bold text-2xl sm:text-4xl'>Welcome back</h1>  

        <LoginForm/>         
        </div>

      </div>
    </main>
  )
}

export default LoginPage