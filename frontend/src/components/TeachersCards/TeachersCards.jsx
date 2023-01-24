import React from 'react'
import "./style.scss"

function TeachersCards() {
  return (
    <section>
      <div className="container">
        <div className="teachers">
          <div className="teacher">
            <div className="teacher_image">
              <img src="	https://preview.colorlib.com/theme/oneschool/images/person_1.jpg" alt="person1" />
            </div>
            <div className="teacher_info">
              <h3>Benjamin Stone</h3>
              <span>Physics Teacher</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
            </div>
          </div>
          <div className="teacher">
            <div className="teacher_image">
              <img src="	https://preview.colorlib.com/theme/oneschool/images/person_2.jpg" alt="person2" />
            </div>
            <div className="teacher_info">
              <h3>Katleen Stone
              </h3>
              <span>Physics Teacher</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
            </div>
          </div><div className="teacher">
            <div className="teacher_image">
              <img src="	https://preview.colorlib.com/theme/oneschool/images/person_3.jpg" alt="person3" />
            </div>
            <div className="teacher_info">
              <h3>Sadie White
              </h3>
              <span>Physics Teacher</span>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eius suscipit delectus enim iusto tempora, adipisci at provident.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeachersCards