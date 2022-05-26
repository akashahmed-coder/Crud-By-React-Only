import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../GlobalState'

export default function Read() {
    const state = useContext(GlobalState)
    const [userData,setUserData] = state.data
    const [readUser,setReadUser] = useState({})
    const params = useParams()


    useEffect(()=>{
      if(params.id){
          userData.forEach(item =>{
              if(item.id === params.id)return setReadUser(item)
          })
 

      }
    },[params])
    if (readUser === 0) return null

  return (
    <div>
        <span>{readUser.id}</span>
        <span>{readUser.name}</span>
        <span>{readUser.email}</span>
        <span>{readUser.phone}</span>


    </div>
  )
}
