import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

export default function TableData() {
    const state = useContext(GlobalState)
    const [userData,setUserData] = state.data
    
    const handleDelete = (id) =>{
      userData.forEach((item,index) => {
          if(item.id === id){
            userData.splice(index, 1)
            
            setUserData([...userData])
          }
      })
    }
    useEffect(()=>{
        window.localStorage.setItem('userData',JSON.stringify(userData))
    },[userData])
    // if(userData.length === 0) return null
  return (
    <div className='container'>
        <Link to='addUser' className="addUserButton" >Add New User</Link>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                    <td>demo</td>
                </tr>
                {
                    userData.map(item => {
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Link to={`/read/${item.id}`}>Read</Link>
                                    <Link to={`/edit/${item.id}`}>Edit</Link>
                                    <Link to='#!'onClick={()=>handleDelete(item.id)}>Delete</Link>
                                    
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
