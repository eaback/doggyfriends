import React from 'react'
import './Home.css'
import Header from '../components/Header'

const Home = () => {

    return (
        <div className='home'>
            <Header/>
            <div className='info'>
                <h1>Welcome!</h1>
                <br/>
                <p>In the sidebar to your left you can visit<br/>
                the dog currently in our care<br/>
                <br/>
                </p>
                <p>If there are any questions<br/>
                don't hesitate to contact us<br/>
                </p>
            </div>
        </div>
    )
}

export default Home