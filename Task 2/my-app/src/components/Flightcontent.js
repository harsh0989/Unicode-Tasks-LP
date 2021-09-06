import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Flight'



const Flightcontent = () => {
    const [flights, setFlights] = useState([])
    const fetchFlights = async () => {
        let res = await axios.get("https://api.spacexdata.com/v3/launches")
        console.log(res.data)
        setFlights(res.data)
    }
    useEffect(() => {
        fetchFlights();
    }, [])
    return (
        <div className="container my-3">
            <div className="row mx-5">
                {
                    flights.map((flight, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <Card data={flight} />
                            </div>
                        )
                    })
                }
        

            </div>
        </div>
    )
}

export default Flightcontent
