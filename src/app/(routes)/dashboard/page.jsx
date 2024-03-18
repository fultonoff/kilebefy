import { getUser } from '@/lib/getUser';
import { redirect } from 'next/navigation';

const Dashbaord = async() => {
  const user = await getUser();

  if(!user){
    redirect('/login')
  }
  return (
    <div>Dashbaord</div>
  )
}

export default Dashbaord