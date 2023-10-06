import React from 'react'
import './Home.css'
import Header from '../components/Header'

const Home = () => {

    return (
        <div className='home'>
            <Header/>
            <div className='info'>
                Welcome!<br/>
                <br/>
                In the sidebar to your left you can visit<br/>
                the dog currently in our care<br/>
                <br/>
                If there are any questions<br/>
                don't hesitate to contact us<br/>
            </div>
        </div>
    )
}

export default Home