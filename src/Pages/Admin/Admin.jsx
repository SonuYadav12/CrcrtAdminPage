import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes,Route} from "react-router-dom"
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProduct from '../../Components/ListProduct/ListProduct'
const Admin = () => {
  return (
    <div className=' flex flex-col md:flex-row w-full h-fit bg-gradient-to-b from-gray-600 via-black to-white'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<AddProduct/>}/>
        <Route path='/listproduct' element={<ListProduct/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default Admin