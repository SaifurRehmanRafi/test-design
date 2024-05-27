import React from 'react'
import './Header.css'
import image from '../src/logo.jpg'
const Header = () => {
  return (
 
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0 my-3">
                                <li class="nav-item">
                                    <p class="me-2 my-2 nav-text-color ">Export CSV</p>
                                </li>
                                <li class="nav-item">
                                    <button class="btn btn-primary">Add Teacher</button>
                                </li>
                                <li class="nav-item">
                                    <p class="header-text-style my-1">Log out</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="row my-3">
                    <div class="col-lg-2">
                        <p class="column2-text-style">Add fillter</p>
                    </div>
                    <div class="col-lg-9 ">
                    <i class="fa-solid fa-magnifying-glass position"></i>
                        <input  class="imput-field-style"  type="text" placeholder="Kristin Watson"/>
                        
                    </div>

                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <img class="header-img" src={image} alt=""/>
                        <p class="header-small-text">Kristin Watson</p>
                        <p class="header-text2">Geology teacher</p>
                      
                    </div>
                    <div class="col-lg-6 header-sec-column">
                        <h2 class="heading">About</h2>
                        <p class="text-color">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
                            nihil
                            nulla nostrum
                            adipisci, quia, sit aliquid vitae magnam voluptatibus laboriosam numquam quibusdam saepe.
                            Culpa odit magni eius iste pariatur quos?Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Provident, voluptatum dignissimos facilis cupiditate est necessitatibus deleniti,
                            deserunt voluptatibus porro saepe sint vel cum. Veniam, sapiente earum quaerat reprehenderit
                            aliquam cumque.</p>
                        <div class="row">
                            <div class="col-lg-6">
                                <h4 class="heading3">Age</h4>
                                <p class="heading color" >34</p>
                            </div>
                            <div class="col-lg-6 " >
                                <h4>Gender</h4>
                                <p className='color'>Male</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    
  )
}

export default Header