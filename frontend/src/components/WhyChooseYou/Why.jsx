import React from 'react'
import "./style.scss"
import { FaGraduationCap } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";

function Why() {
  return (
    <section className='why_section'>
      <div className="container">
        <h1>why choose us</h1>
        <div className="why">
          <div className="feedback_of_school">
            <div className='sections'>
              <div style={{ width: "50px", textAlign: "center", borderRadius: "50%", backgroundColor: "#7971ea", padding: "10px" }} >
                <FaGraduationCap style={{ color: "white", fontSize: "20px" }} />
              </div>
              <span>22,931 Yearly Graduates</span>
            </div>
            <div className='sections'>
              <div style={{ width: "50px", textAlign: "center", borderRadius: "50%", backgroundColor: "#7971ea", padding: "10px" }} >
                <FaUniversity style={{ color: "white", fontSize: "20px" }} />
              </div>
              <span>150 Universities Worldwide
              </span>
            </div>
            <div className='sections'>
              <div style={{ width: "50px", textAlign: "center", borderRadius: "50%", backgroundColor: "#7971ea", padding: "10px" }} >
                <FaGraduationCap style={{ color: "white", fontSize: "20px" }} />
              </div>
              <span>Top Professionals in The World
              </span>
            </div>
            <div className='sections'>
              <div style={{ width: "50px", textAlign: "center", borderRadius: "50%", backgroundColor: "#7971ea", padding: "10px" }} >
                <FaUniversity style={{ color: "white", fontSize: "20px" }} />
              </div>
              <span>Expand Your Knowledge
              </span>
            </div>
            <div className='sections'>
              <div style={{ width: "50px", textAlign: "center", borderRadius: "50%", backgroundColor: "#7971ea", padding: "10px" }} >
                <FaGraduationCap style={{ color: "white", fontSize: "20px" }} />
              </div>
              <span>Best Online Teaching Assistant Courses
              </span>
            </div>
            <div className='sections'>
              <div style={{ width: "50px", textAlign: "center", borderRadius: "50%", backgroundColor: "#7971ea", padding: "10px" }} >
                <FaUniversity style={{ color: "white", fontSize: "20px" }} />
              </div>
              <span>Best Teachers
              </span>
            </div>
          </div>
          <img src="	https://preview.colorlib.com/theme/oneschool/images/person_transparent.png" alt="person" />
        </div>
      </div>
    </section>
  )
}

export default Why