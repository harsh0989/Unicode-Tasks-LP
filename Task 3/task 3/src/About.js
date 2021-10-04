import React from 'react'
import { Link } from 'react-router-dom'
const style = {
    fontSize: '50px',
    color: 'white',
    marginTop: ''
}
const explore = {
    fontSize: '75px',
    borderRadius: '23px',
    textDecoration: 'none',
    color: '#246fe0',
    border: '4px solid #246fe0'
}
const content = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}
const About = () => {
    return (
        <div style={content}>
            <div>
                <h3 className='text-center' style={style}>So how do we work? <br /><br /></h3>
                <br />

                <h3 className='text-center' style={style}>We recommend you players that <br />would match your playing style <br />and that have a rank similar to that of yours </h3><br />
            </div>
            <br />
            <br />
            <Link style={explore} to='/sign-up'>Sign Up now</Link>
        </div>
    )
}

export default About
