import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom"

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const params = useParams();
    console.log(params.id)

    // find the specific car
    const car = cars.find((car) => car.id === Number(params.id))

    console.log(car)
    return (
        <>
        <h1>A specific car with ID of {params.id}</h1>
        <h1>{car.Name}</h1>
        </>
    )
}

export default Car;