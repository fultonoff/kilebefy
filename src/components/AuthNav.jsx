import Image from 'next/image'
import Link from 'next/link'
import {X} from 'lucide-react'
const AuthNav = () => {
  return (
    <nav className='container mx-auto p-4 flex items-center justify-between border-b'>
        <Link href='/' className=''>
            <Image alt='logo' src='/kilebefy-black.png' width={34} height={34}/>
        </Link>
        <Link href='/' className='border rounded-md rounded-primary'>
        <X />
        </Link>
    </nav>
  )
}

export default AuthNav

