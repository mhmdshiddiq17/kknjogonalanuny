import {auth} from '@/auth'


const Dashboard = async() => {
    const session = await auth()

  return (
    <div className='max-w-screen-xl mx-auto py-6 p-4'>
        <h1 className='text-2xl'>Dashbaord</h1>
        <h2 className='text-2xl'>Welcome Back: <span className='font-bold'>{session?.user?.name}</span></h2>
    </div>
  )
}

export default Dashboard
