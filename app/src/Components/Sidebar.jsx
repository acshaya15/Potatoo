import React,{useState} from 'react'
import logo from "../Images/logo.png";
import {IoReorderThreeOutline} from "react-icons/io5"
import menu from './icons';
import {useNavigate} from "react-router-dom"
const Sidebar=()=> {
    const [activeTab,setActiveTab]=useState();
    const navigate=useNavigate();
    const handleTabClick=(title)=>{
        setActiveTab(title)
        if(title==="Profile")
        {
            navigate("/username")
        }
        else if(title==="Home")
        {
            navigate("/Home")
        }
    }
  return (
    <div className='sticky top-0 h-[100vh] '>
        <div className='flex flex-col justify-between h-full px-10'>
            <div>
            <div className='pt-10'>
                <img className='w-40'src={logo} alt=""/>
            </div>
            <div className='mt-10'>
                {menu.map((item)=>(
            <div onClick={()=>handleTabClick(item.title)}className='flex items-center mb-5 cursor-pointer text-lg'>
                {activeTab===item.title?item.activeIcon:item.icon}
                <p className={`${activeTab===item.tile?"font-bold":"font-semibold"}`}>{item.title}</p>
            </div>))}
            </div>
            </div>
            <div className='flex items-center cursor-pointer'>
            <IoReorderThreeOutline />
            <p className='ml-5'>More</p>
            </div>
        </div>
    </div>
  )
}
export default Sidebar;