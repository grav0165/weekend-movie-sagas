import react, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Details.css'
import { useHistory } from "react-router-dom";

// importing materialUI for styling
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from "@mui/material/Box";
import { Theme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';



function Details() {

    // Since this variable will always be an array of at least 1 length, we can target 
    // movieDetails[0] for all pertinent information related to display, and 
    // iterate through the array in the genre section to pull out all genre info
    const movieDetails = useSelector((store) => store.movieDetails)
    console.log('movie details are: ', movieDetails)

    // pulling in useHistory
    const history = useHistory();

    // Creating theme for MUI to use
    const theme = createTheme({
        typography: {
            fontFamily: 'Helvetica'
        }
    })

    // using function to return to movieList page
    const handleReturn = () => {
        history.push('/')
    }


    return (
        <div className="details-page">

            <ThemeProvider theme={theme}>
                <Box sx={{ paddingTop: 10, marginLeft: 3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Card elevation={6} sx={{ width: '90%', minWidth: 240, height: 350, maxWidth: 500, display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 5, backgroundColor: '#050505' }}>
                            {/* Adding ? to all objects inside of details page, as some of the lag from requesting information
                            from the server was causing severe page breaks */}
                            <CardMedia
                                title={movieDetails[0]?.title}
                                sx={{ height: '100%', paddingTop: 3 }}>
                                <img src={movieDetails[0]?.poster} />
                            </CardMedia>
                            <Typography sx={{ paddingBottom: 2, color: '#e8a217' }}>
                                {movieDetails[0]?.title}
                            </Typography>
                        </Card>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: 10 }}>
                            <Card elevation={6} sx={{ marginBottom: 4, padding: 2, display: 'flex', flexDirection: 'column', backgroundColor: '#050505', color: '#e8a217' }}>
                                <Typography sx={{ fontSize: 14 }}>
                                    genres
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'row', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 2 }}>
                                    {
                                        movieDetails.map((item) =>
                                            <Typography sx={{ background: '#561fef', color: 'white', borderRadius: 2, paddingLeft: 1, paddingRight: 1 }}>{item.name}</Typography>
                                        )
                                    }
                                </Box>
                            </Card>
                            <Card elevation={6} sx={{ padding: 2, backgroundColor: '#050505', color: '#e8a217' }}>
                                <Typography>
                                    {movieDetails[0]?.description}
                                </Typography>
                            </Card>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ padding: 3 }}>
                    <Button elevation={6} variant="contained" size="large" sx={{ backgroundColor: '#050505', color: '#e8a217' }} onClick={handleReturn}>Return to Main</Button>
                </Box>
            </ThemeProvider>
        </div>
    )
}

export default Details;