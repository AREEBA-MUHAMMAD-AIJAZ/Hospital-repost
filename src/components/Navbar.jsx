import React from 'react'
import Button from './sub-component/Button';

const Navbar = () => {
  return (
    <div>
        <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">LODGN</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Current Request</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ongoing stays</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Previous stays</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Reports</a>
                </li>
              </ul>
              <Button Text={'Log-Out'}></Button>
 
            </div>

          </div>
        </div>
       </nav>

    </div>
  )
}

export default Navbar;
