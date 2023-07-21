import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// importing materialUI for styling
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


function Details() {

    const movieDetails = useSelector((store) => store.movieDetails)
    console.log('movie details are: ', movieDetails)


    return (
        <div className="movie-genres">
            <h1>Details Go here!</h1>
            <table>
                <tablebody>
            {
            movieDetails.map( (item) => 
                   <tr>{item.name}</tr>
                )
            }
            </tablebody>
            </table>
        </div>
    )
}

export default Details;