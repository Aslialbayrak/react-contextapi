import React, { useState } from 'react';
import  Moviecontext from './Moviecontext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useState(Moviecontext);


    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, { name: name, price: price }]);

    };

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>SUBMIT</button>
        </form>
    )
}
export default AddMovie;