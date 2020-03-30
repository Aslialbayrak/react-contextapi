import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props =>{
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 2315
        },
        {
            name: 'Harry Potter-2',
            price: '$10',
            id: 2316
        },
        {
            name: 'Harry Potter-3',
            price: '$10',
            id: 2317
        }
    ]);

    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>

    );
}

export default MovieContext;