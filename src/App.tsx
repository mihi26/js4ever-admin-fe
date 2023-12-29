import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <Fragment>
      <ToastContainer
        newestOnTop
        autoClose={3000}
        closeOnClick
        pauseOnFocusLoss={false}
      />
      {/* {isLoading && <Loading />} */}
      <Outlet />
    </Fragment>
  )
}

export default App
