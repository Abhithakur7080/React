import MovieCard from "./Moviecard";
// import React from "react";

// class MovieList extends React.Component{
    function MovieList(props){
    
    // render(){
        // const {title, plot, price, rating, star, fav, cart} = this.state.movies;
        const {movies, addstars, removestars, togglefavourite, toggleCart} = props;
        console.log(props)
        return(
            <>
            {/* <MovieCard /> */}
            {/* <MovieCard
                title= {title}
                plot= {plot}
                price= {price}
                rating= {rating}
                star= {star}
                fav= {fav}
                cart= {cart}
            /> */}
            {movies.map((movie, id) => 
                    (<MovieCard 
                        movies= {movie}
                        key={id}
                        addstars={addstars}
                        removestars={removestars}
                        togglefavourite={togglefavourite}
                        toggleCart={toggleCart}
                    />))}
            
            </>
        )
    // }
}

export default MovieList;