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


function MovieList() {

    //importing useHistroy to move to history page
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // Creating function that will lead to further details on movie
    const handleCard = (movie) => {
        console.log('Card clicked with id: ', movie.id);
        dispatch({ type: 'MOVIE_DETAILS', payload: movie.id})
        history.push('/details')
    }

    return (
        <div>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card key={movie.id} sx={{ width: '25%', height: '30%', padding: 2}}>
                            <CardActionArea onClick={()=>handleCard(movie)}>              
                                <CardMedia
                                    sx={{ height: 400 }}
                                    image={movie.poster}
                                    alt={movie.title}                
                                     />
                                <Typography>
                                    {movie.title}
                                </Typography>
                             </CardActionArea>
                        </Card>

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