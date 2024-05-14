import './App.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authservice from './appwrite/auth'
import {login,logOut} from './store/authSlice'
import {Header,Footer} from  './components/index'

function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentuser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logOut())
      }
    })
    .finally( () => setLoading(false))
  },[])
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-600'>
    <div className='w-full block'>
      <Header/>
      <main>
        {/* {Outlet} */} 
      </main>
      <Footer/>
    </div>
  </div>
  ) : (null)
}

export default App
