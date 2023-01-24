import React from 'react'
import "./style.scss"
import { BiTimeFive } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { BsChatLeftTextFill } from "react-icons/bs";

function Courses() {
    return (
        <section className='courses'>
            <div className="container">
                <h1>Courses</h1>
                <div className="wrapper">
                    <div className="container">
                        <div className="cards">
                            <div className='card'>
                                <div className='image'><img src="https://preview.colorlib.com/theme/oneschool/images/img_1.jpg" alt="img1" /></div>
                                <div className='price'>
                                    <span>$20</span>
                                </div>
                                <div className='time'>
                                    <span><BiTimeFive />4 Lessons / 12 week</span>
                                    <h3>Study Law of Physics</h3>
                                    <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.</p>

                                </div>
                                <div className='number_of_students'>
                                    <div className='number_of_students_general'>
                                        <FaUsers style={{ color: "gray" }} />
                                        <span>2,193 students</span>
                                    </div>
                                    <div className='number_of_students_comments'>
                                        <BsChatLeftTextFill style={{ color: "gray" }} />
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='image'><img src="https://preview.colorlib.com/theme/oneschool/images/img_1.jpg" alt="img1" /></div>
                                <div className='price'>
                                    <span>$99</span>
                                </div>
                                <div className='time'>
                                    <span><BiTimeFive />4 Lessons / 12 week</span>
                                    <h3>Logo Design Course</h3>
                                    <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.</p>

                                </div>
                                <div className='number_of_students'>
                                    <div className='number_of_students_general'>
                                        <FaUsers style={{ color: "gray" }} />
                                        <span>2,193 students</span>
                                    </div>
                                    <div className='number_of_students_comments'>
                                        <BsChatLeftTextFill style={{ color: "gray" }} />
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='image'><img src="https://preview.colorlib.com/theme/oneschool/images/img_1.jpg" alt="img1" /></div>
                                <div className='price'>
                                    <span>$99</span>
                                </div>
                                <div className='time'>
                                    <span><BiTimeFive />4 Lessons / 12 week</span>
                                    <h3>JS Programming Language</h3>
                                    <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.</p>

                                </div>
                                <div className='number_of_students'>
                                    <div className='number_of_students_general'>
                                        <FaUsers style={{ color: "gray" }} />
                                        <span>2,193 students</span>
                                    </div>
                                    <div className='number_of_students_comments'>
                                        <BsChatLeftTextFill style={{ color: "gray" }} />
                                        <span>2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Courses