import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Details() {

    const movieDetails = useSelector((store) => store.movieDetails)
    console.log('movie details are: ', movieDetails)


    return (
        <>
            <h1>Details Go here!</h1>
            <p>{movieDetails}</p>
        </>
    )
}

export default Details;