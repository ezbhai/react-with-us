import React from 'react'
import {useDispatch} from 'react-redux'
import authservice from '../../appwrite/auth'
import {logOut} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authservice.logout()
        .then( () => {
            dispatch(logOut())
        })
        .finally()
    }
  return (
   <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
   onClick={logoutHandler}>logout</button>
  )
}

export default LogoutBtn
