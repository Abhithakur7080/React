// import React, { Component } from "react";

// class MovieCard extends React.Component{

// }

import { Component } from "react";

import './index.css'

class MovieCard extends Component{
    render(){
       return (
       <div className="main">
        <div className="movie-card">
            <div className="left">
                <img src="https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg" alt="poster"/>
            </div>
            <div className="right">
                <div className="title">The Avengers</div>
                <div className="plot">Super Natural power showing in the movie</div>
                <div className="price">Rs. 199</div>

                <div className="footer">
                    <div className="rating">8.9</div>
                    <div className="star-dis">
                             <img 
                            alt="minus" 
                            src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
                            className="str-btn"/>
                            <img 
                            alt="star" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                            className="stars"/>
                            <img 
                            alt="plus" 
                            src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                            className="str-btn"/>
                            0
                    </div>
                    <button className="favourite-btn">
                        <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/9284/9284424.png"
                        className="logo-btn"/>
                        Buy now</button>
                    <button className="cart-btn">
                    <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                        className="logo-btn"/>
                        Add to Cart</button>
                </div>
            </div>
        </div>
       </div>
       )
    }
}

export default MovieCard;