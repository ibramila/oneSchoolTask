import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss"

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className='footer'>
          <ul>
            <li className='footer_about'>
              <h6>ABOUT ONESCHOOL
              </h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
            </li>
            <li className='footer_contact'>
              <ul>
                <h6>Links</h6>
                <li>Home</li>
                <li>Courses</li>
                <li>Courses</li>
                <li>Programs</li>
              </ul>
            </li>
            <li className='footer_links'>
              <ul>
                <h6>Subscribe</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt incidunt iure iusto architecto? Numquam, natus?
                </p>
                <div className='subscribe'>
                  <input type="text" />
                  <button>Subscribe</button>
                </div>
              </ul>
            </li>
          </ul>
          <hr style={{ width: "100%" }} />
          <div className="copyright">
            Copyright © 2023 All rights reserved | This template is made with  by <Link>Colorlib</Link>
          </div>
        </div>
      </div >
    </footer >
  )
}

export default Footer