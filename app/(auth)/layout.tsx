import React from 'react'

const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='bg-[#26313c]'>
      {/* <div className='flex flex-col items-center justify-between px-6 py-8 mx-auto h-screen'> */}
            {children}
      {/* </div> */}
    </div>
  )
}

export default AuthLayout
