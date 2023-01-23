import React from 'react'
import "./style.scss"

function Courses() {
    return (
        <section className='courses'>
            <div className="container">
                <h1>Courses</h1>
                <div className="wrapper">
                    <div className="cards">
                        <div className='card'>
                            <div><img src="https://preview.colorlib.com/theme/oneschool/images/img_1.jpg" alt="img1" /></div>
                            <div className='price'>
                                <span>$20</span>
                            </div>
                            <div>
                                <span>4 Lessons / 12 week</span>
                                <h5>Study Law of Physics</h5>
                                <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.</p>

                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='card'>
                            <div><img src="https://preview.colorlib.com/theme/oneschool/images/img_2.jpg" alt="img2" /></div>
                            <div className='price'>
                                <span>$20</span>
                            </div>
                            <div>
                                <span>4 Lessons / 12 week</span>
                                <h5>Study Law of Physics</h5>
                                <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.</p>

                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className='card'>
                            <div><img src="https://preview.colorlib.com/theme/oneschool/images/img_3.jpg" alt="img3" /></div>
                            <div className='price'>
                                <span>$20</span>
                            </div>
                            <div>
                                <span>4 Lessons / 12 week</span>
                                <h5>Study Law of Physics</h5>
                                <p>Lorem ipsum dolor sit amet ipsa nulla adipisicing elit.</p>

                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Courses