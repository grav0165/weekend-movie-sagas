import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Paper} from '@mui/material';
import { Box } from '@mui/material';
import { Theme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';


function MovieList() {

    //importing useHistroy to move to history page
    const history = useHistory();

    // Creating theme for MUI to use
    const theme = createTheme({
        typography:{
            fontFamily: 'Helvetica'
        }
    })

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Creating function that will lead to further details on movie
    const handleCard = (movie) => {
        console.log('Card clicked with id: ', movie.id);
        // Dispatch sending the movie ID to do a SQL query
        dispatch({ type: 'MOVIE_DETAILS', payload: movie.id})
        // history.push to go to the details page
        history.push('/details')
    }

    return (
        <div>
            <h1>Your Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        
                        <ThemeProvider theme={theme}>
                        <Card key={movie.id} elevation={7} sx={{ width: '25%', height: '30%', minWidth: 250, padding: 2, margin: 2, backgroundColor: '#050505', color: 'white'}}>
                            <CardActionArea onClick={()=>handleCard(movie)}>              
                                <CardMedia
                                    sx={{ height: 400 }}
                                    image={movie.poster}
                                    alt={movie.title}                
                                     />
                                <Typography sx={{ marginTop: 1, color: '#e8a217'}}>
                                    {movie.title}
                                </Typography>
                             </CardActionArea> 
                        </Card>
                </ThemeProvider>
                    );
                })}
            </section>
        </div>

    );
}

//                         <div key={movie.id} >
//                             <h3>{movie.title}</h3>
//                             <img src={movie.poster} alt={movie.title}/>
//                         </div>

export default MovieList;