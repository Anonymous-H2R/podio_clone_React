import React from 'react';
import Logo from './image/podio-logo.png';
import './layout.css';
import Drive from './Drive';
import Colab from './Collab';


function Header(props) {
    return (
        <>
        <div>
            <nav class="navbar navbar-expand-sm p-3 bg-light text-dark fixed-top">
 
  <div class="container-fluid ">
    <a class="navbar-brand" href="#"><img className='logo' src={Logo} alt="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse text-dark" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Prices</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">UseCases</a>
        </li>  
        <li class="nav-item">
          <a class="nav-link text-dark" href="#">Request a Demo</a>
        </li>  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">More</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item text-dark" href="#">Contact us</a></li>
            <li><a class="dropdown-item text-dark" href="#">Support</a></li>
            <li><a class="dropdown-item text-dark" href="#">jobs</a></li>
            <li><a class="dropdown-item text-dark" href="#">Partner</a></li>

          </ul>
        </li>
        
      </ul>
    </div>

    <ul className='navbar-nav'>
       <li class="nav-item">
          <a class="nav-link text-dark" href="#">Login</a>
        </li> 
       </ul>
     <button class="rounded-pill text-light" type="button">Sign Up</button>
  </div>
</nav>

<div className='background-pic'>
        <div className='ba1 row '>
          <div className='f1 col-6 '>

          <h1 className="he1">Get your team working in sync</h1>
          <p className="pa1">Build powerful low-code business solutions to customize work and communication</p>
          <div >
            <form action="post">
            <input type="text" />
            <button type="submit rounded-pill text-light">Start Free</button>
            </form>
          </div>
          </div>
          </div>
          </div>

<div className='  d-flex  img-logo'>
              <div className='col-2 '>
                  <img src="https://www.podio.com/content/dam/podio/Volvo.png" alt="" />
              </div>
              <div className='col-2 '>
                  <img src="https://www.podio.com/content/dam/podio/Deloitte.png" alt="" />
              </div>
              <div className='col-2 '>
                  <img src="https://www.podio.com/content/dam/podio/NFL.png" alt="" />
              </div>
              <div className='col-2 '>
                  <img src="https://www.podio.com/content/dam/podio/SONY.png" alt="" />
              </div>
              <div className='col-2 '>
                  <img src="https://www.podio.com/content/dam/podio/images/logos/timewarnercable.png" alt="" />
              </div>
              <div className='col-2 '>
                  <img src="https://www.podio.com/content/dam/podio/images/logos/sothebys.png" alt="" />
              </div>
</div>
          <Drive/>
          <Colab/>

        
       
          
        </div>
       
        </>
    );
}

export default Header;