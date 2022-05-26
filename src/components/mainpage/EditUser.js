import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../GlobalState'
function EditUser() {
    const state = useContext(GlobalState)
    const [userData,setUserData] = state.data
    const params = useParams()
    const [editUser,setEditUser] = useState({})
    
   useEffect(()=>{
if(params.id){
    userData.forEach(item=>{
        if(item.id === params.id){
            setEditUser(item)
        }
    })
}
   },[params.id])
   useEffect(()=>{
    localStorage.setItem('userData',JSON.stringify(userData))
  },[userData])

   const handleChange = (e) => {
    const {name,value} = e.target
    setEditUser({...editUser,[name]:value})
  }
  const handleSubmit = async(e) => {
      e.preventDefault();
      if(params.id){
        userData.forEach((item, index)=>{
            if(item.id === params.id){
                userData.splice(index,1)
            }
            setUserData([...userData])

        })
    }
     setUserData([...userData,editUser])
     window.location.href = "/"
    
  }
  return (
    <div className='form-container'>
        <h1>Edit User</h1>
 <form onSubmit={handleSubmit}>
            <input type='text' name='id' value={editUser.id} placeholder="enter id" onChange={handleChange} />
            <input type='text' name='name' value={editUser.name} placeholder='enter name' onChange={handleChange} />
            <input type='email' name='email' value={editUser.email} placeholder='enter email' onChange={handleChange} />
            <input type='phone' name='phone' value={editUser.phone} placeholder='enter phone' onChange={handleChange} />
            <button type='submit'>Update</button>
        </form>
    </div>
  )
}

export default EditUser