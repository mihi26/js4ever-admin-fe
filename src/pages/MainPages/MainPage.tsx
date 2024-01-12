import { Outlet } from 'react-router-dom'
import Header from '@/components/custom/Header'
import Sidebar from '@/components/custom/Sidebar'

const MainPage = () => {
  return (
    <div className='flex relative'>
      <Sidebar />
      <div className='w-[calc(100%-219px)] h-full ml-[219px]'>
        <Header />
        <div className='p-4'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default MainPage