// import React, { Component } from "react";

// class MovieCard extends React.Component{

// }

// import { Component } from "react";

import './index.css'

// class MovieCard extends Component{
    function MovieCard(props){
    // constructor(){
    //     super();
    //     this.state = {
    //         title: "The Avengers",
    //         plot: "Super Natural powers showing in the movie.",
    //         price: 199,
    //         rating: 8.9,
    //         star: 0,
    //         fav: false,
    //         cart: false
    //     }
    //     // type-1 to bind add here
    //     // this.addstars = this.addstars.bind(this);
    // }
    // function
    // addstars() {
    //     console.log("this: ", this);
    // }
    // type-3 use fat arrow function
    // addstars = () =>{
    //     //form-1
    //     // this.setState({
    //     //     star: this.state.star + 0.5,
    //     // });

    //     if(this.state.star >=  5){
    //         return;
    //     }

    //     //form-2
    //     // taking all the call like-> increase 1.5(0.5 + 0.5 + 0.5) instead of 0.5
    //     this.setState((prevState) => {
    //         return {
    //             star: prevState.star + 0.5
    //         }
    //     })
    //     // this.setState((prevState) => {
    //     //     return {
    //     //         star: prevState.star + 0.5
    //     //     }
    //     // })
    //     // this.setState((prevState) => {
    //     //     return {
    //     //         star: prevState.star + 0.5
    //     //     }
    //     // })
    //     // this.state.star += 0.5;
    //     // console.log("this.star: ", this.state.star);4
    // }
    // removestars = () => {
    //     if(this.state.star <=0){
    //         return;
    //     }
    //     // taking only last func this.setstate which is declare 0.2
    //     // this.setState(
    //     //     {
    //     //     star: this.state.star - 0.5,
    //     //     },
    //     //     () => {
    //     //         this.setState({
    //     //             star: this.state.star - 0.2,
    //     //     });
    //     // }
    //     // );
    //     this.setState({
    //         star: this.state.star - 0.5,
    //     });
    //     // this.setState({
    //     //     star: this.state.star - 0.2,
    //     // });
    // }

    // handleFav = () => {
    //     this.setState({
    //         fav: !this.state.fav
    //     })
    // }
    // handleCart = () => {
    //     this.setState({
    //         cart: !this.state.cart
    //     })
    // }
    // render(){
        const {title, plot, price, rating, star, fav, cart, poster} = props.movies;
        const {movies, addstars, removestars, togglefavourite, toggleCart} = props;
        // const {movies: data} = this.props;
        // const {title, plot, price, rating, star, fav, cart} = data;
       return (
       <div className="main">
        <div className="movie-card">
            <div className="left">
                <img src={poster} alt={title}/>
            </div>
            <div className="right">
                {/* <div className="title">{this.state.title}</div> */}
                <div className="title">{title}</div>
                <div className="plot">{plot}</div>
                <div className="price">Rs. {price}</div>

                <div className="footer">
                    <div className="rating">
                    <img 
                            alt="star" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                            className="stars"/>
                        {rating}</div>
                    <div className="star-dis">
                             <img 
                            alt="minus" 
                            src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
                            className="str-btn" onClick={() => {removestars(movies)}}/>
                            <img 
                            alt="star" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                            className="stars"/>
                            <img 
                            alt="plus" 
                            src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                            className="str-btn" onClick={() => {addstars(movies)}}/>
                            {/* type-2 to bind this in event like this */}
                            {/* this.addstars.bind(this) */}
                            <span className="starCount">{star}</span>
                    </div>
                    {fav?
                    <button className="unfavourite-btn" onClick={() => {togglefavourite(movies)}}>
                    <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/210/210545.png"
                        className="logo-btn"/>
                        Unfavourite
                    </button>
                    :
                    <button className="favourite-btn" onClick={() => {togglefavourite(movies)}}>
                        <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/210/210545.png"
                        className="logo-btn"/>
                        Favourite
                    </button>                    
                    }
                    {/* another way */}
                    {/* <button className={fav?"favourite-btn":"unfavourite-btn"} onClick={() => {togglefavourite(movies)}}>
                    <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/210/210545.png"
                        className="logo-btn"/>
                        {fav?"Favourite":"Unfavourite"}
                    </button> */}
                    { cart?
                    <button className="uncart-btn" onClick={() => {toggleCart(movies)}}>
                    <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                        className="logo-btn"/>
                        Remove from Cart</button>
                    :
                    <button className="cart-btn" onClick={() => {toggleCart(movies)}}>
                    <img 
                        alt="buy"
                        src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                        className="logo-btn"/>
                        Add to Cart</button>
                    }
                    
                </div>
            </div>
        </div>
       </div>
       )
    // }
}

export default MovieCard;