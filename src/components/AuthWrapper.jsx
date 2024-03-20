import AuthNav from './AuthNav'
import Image from 'next/image'
import logo from '../../public/kilebefy-black.png'

const AuthWrapper = ({children, topNav, title}) => {
  return (
    <main className="bg-gradient-to-b from-[#FFC091]/40 to-primary/30 min-h-screen">
      <div className=" container mx-auto ">
        {topNav &&
        <AuthNav />
        
        }
        <div className="flex justify-center p-4 items-center flex-col">
          <div  className="mt-20 mb-1 w-20 h-20 ">
            <Image src={logo} alt="logo" className="w-12 object-contain" />
          </div>

          <h1 className="font-bold text-2xl sm:text-4xl">
            {title}
          </h1>

          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthWrapper