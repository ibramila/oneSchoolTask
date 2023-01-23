import React from 'react'
import "./style.scss"
function HeroSection() {
    return (
        <section className='heroSection'>
            <div className="container">
                <div className="hero">
                    <div className='intro'>
                        <h1 data-aos="fade-up" data-aos-delay="100">Learn From The Expert</h1>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                        <button >admission now</button>
                    </div>
                    <form className='form'>
                        <h3>Sign Up</h3>
                        <div>
                            <input type="text" class="form-control" placeholder="Email Addresss" />
                        </div>
                        <div>
                            <input type="password" class="form-control" placeholder="Password" />
                        </div>
                        <div>
                            <input type="password" class="form-control" placeholder="Re-type Password" />
                        </div>
                        <div>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default HeroSection