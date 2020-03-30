import React, { useContext }  from 'react';
import Moviecontext from './Moviecontext';

const Nav = () => {
    const [movies,setMovies] = useContext(Moviecontext);

    return (
        <div>
            <h3>Hey Asli</h3>
            <p>list of moviees: {movies.length}</p>
        </div>
    )
}
export default Nav;