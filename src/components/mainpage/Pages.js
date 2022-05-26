import React from 'react'
import { Route , Routes } from 'react-router-dom'
import TableData from './TableData'
import AddUser from './AddUser'
import EditUser from './EditUser'
import Read from './Read'
export default function Pages() {
  return (

    <Routes>
        <Route path='/' element={<TableData/>}/>
        <Route path='/addUser' element={<AddUser/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        <Route path='/read/:id' element={<Read/>}/>

        
    </Routes>
  )
}
