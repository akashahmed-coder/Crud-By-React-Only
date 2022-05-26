import React, { useContext, useEffect, useState } from 'react'
import { GlobalState } from '../GlobalState'


export default function AddUser() {

    const state = useContext(GlobalState)
    const [userData,setUserData] = state.data
    const [newData ,setNewData] =useState({
        id:"",
        name:"",
        email:"",
        phone:"",
    })

    const handleChange = (e) => {
      const {name,value} = e.target
      setNewData({...newData,[name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
       setUserData([...userData,newData])
       window.location.href = "/"
      
    }
    useEffect(()=>{
      localStorage. setItem('userData',JSON.stringify(userData))
    },[userData])

  return (
    <div className='form-container'>
      <h2>Add New User</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' name='id' value={newData.id} placeholder="enter id" onChange={handleChange} />
            <input type='text' name='name' value={newData.name} placeholder='enter name' onChange={handleChange} />
            <input type='email' name='email' value={newData.email} placeholder='enter email' onChange={handleChange} />
            <input type='phone' name='phone' value={newData.phone} placeholder='enter phone' onChange={handleChange} />
            <button type='submit'>Add User</button>
        </form>
    </div>
  )
}
