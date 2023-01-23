import React from 'react'
import "./style.scss"
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

function ProgramsPart3() {
  return (
    <section >
      <div className="container">
        <div className='programsPart3'>
          <img src="	https://preview.colorlib.com/theme/oneschool/images/undraw_teaching.svg" alt="part1" />
          <div className='programsPart3_info'>
            <h2>Education is life</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.
            </p>
            <div className='students'>
              <div style={{ borderRadius: "50%", backgroundColor: "#7971ea", padding: "3px 6px" }} >
                <FaGraduationCap style={{ color: "white" }} />
              </div>
              <h3>
                22,931 Yearly Graduates
              </h3>
            </div>
            <div className='students'>
              <div style={{ borderRadius: "50%", backgroundColor: "#7971ea", padding: "3px 6px" }} >
                <FaUniversity style={{ color: "white" }} />
              </div>
              <h3>
                150 Universities Worldwide
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProgramsPart3