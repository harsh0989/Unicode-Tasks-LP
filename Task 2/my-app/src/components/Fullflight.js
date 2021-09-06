import React, { useEffect } from 'react'
import axios from 'axios'
import Navbarcomp from './Navbar'


const Fullflight = () => {
    const flightdetails = async (flight_number) => {
        let res = await axios.get(`https://api.spacexdata.com/v3/launches/${flight_number}`)
        console.log(res.data)
    }
    return (
        <div>
            <Navbarcomp />

        </div>
    )
}

export default Fullflight
