import React from 'react'
import './Menu.css'
import image from '../src/logo.jpg'

const Menu = () => {
  return (
    <div>
         <div class="col-lg-3 baground-color  menu-bar">
                <img class="logo-style" src={image}/>
                <p className='manue1'>Udemy Inter.school</p>
                <hr className='hr'/>

                <div class="menu-style">
                    <p class="p-2 menu-text-style">Dashboard</p>
                    <p class="p-2 menu-text-style">Teachers</p>
                    <p class="p-2 menu-text-style">Students/Classes</p>
                    <p class="p-2 menu-text-style">Billing</p>
                    <p class="p-2 menu-text-style">Setting and Profile</p>
                    <p class="p-2 menu-text-style">Exams</p>
                </div>
                <p class="menu-last-link">Features</p>
            </div>
    </div>
  )
}

export default Menu