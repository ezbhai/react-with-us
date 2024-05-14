import React from 'react'
import { useDispatch } from 'react-redux'
import service from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

// const authservice = new AuthService()

function LogoutBtn() {
    const dispatch = useDispatch()
    const handleLogout = () => {
        service.logout()
        .then(() => {
            dispatch(logout())
        })
        
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    ></button>
  )
}

export default LogoutBtn
