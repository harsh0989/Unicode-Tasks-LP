import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    const style = {
        color: 'white'
    }
    const explore = {
        fontSize: '75px',
        borderRadius: '23px',
        textDecoration:'none',
        color:'#246fe0',
        border:'4px solid #246fe0'
    }
    const content={
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }

    
    return (
        <div style={content}>
            <h1 className='text-center my-5' style={style}>Welcome to this site</h1>
            <div>
                <h3 className='text-center' style={style}>Tired of toxic and bad teammates in multiplayers? <br /><br /> Dont worry we have got your back </h3>
                <br />

                <h3 className='text-center' style={style}>Here you can find yourself a teammate <br />that has a playing style similar to that of yours</h3><br />
            </div>
            <br />
            <br />
            <Link style={explore} to='/about'>Explore</Link>
        </div>
    )
}

export default Home
