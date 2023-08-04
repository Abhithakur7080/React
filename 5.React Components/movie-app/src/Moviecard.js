// import React, { Component } from "react";

// class MovieCard extends React.Component{

// }

import { Component } from "react";

import './index.css'

class MovieCard extends Component{
    constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot: "Super Natural powers showing in the movie.",
            price: 199,
            rating: 8.9,
            star: 0
        }
        // type-1 to bind add here
        // this.addstars = this.addstars.bind(this);
    }
    // function
    // addstars() {
    //     console.log("this: ", this);
    // }
    // type-3 use fat arrow function
    addstars = () =>{
        //form-1
        // this.setState({
        //     star: this.state.star + 0.5,
        // });

        if(this.state.star >=  5){
            return;
        }

        //form-2
        // taking all the call like-> increase 1.5(0.5 + 0.5 + 0.5) instead of 0.5
        this.setState((prevState) => {
            return {
                star: prevState.star + 0.5
            }
        })
        // this.setState((prevState) => {
        //     return {
        //         star: prevState.star + 0.5
        //     }
        // })
        // this.setState((prevState) => {
        //     return {
        //         star: prevState.star + 0.5
        //     }
        // })
        // this.state.star += 0.5;
        // console.log("this.star: ", this.state.star);4
    }
    removestars = () => {
        if(this.state.star <=0){
            return;
        }
        // taking only last func this.setstate which is declare 0.2
        // this.setState(
        //     {
        //     star: this.state.star - 0.5,
        //     },
        //     () => {
        //         this.setState({
        //             star: this.state.star - 0.2,
        //     });
        // }
        // );
        this.setState({
            star: this.state.star - 0.5,
        });
        // this.setState({
        //     star: this.state.star - 0.2,
        // });
    }
    render(){
        const {title, plot, price, rating, star} = this.state;
       return (
       <div className="main">
        <div className="movie-card">
            <div className="left">
                <img src="https://cdn.marvel.com/content/1x/theavengers_lob_crd_03.jpg" alt="poster"/>
            </div>
            <div className="right">
                <div className="title">{this.state.title}</div>
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
                            className="str-btn" onClick={this.removestars}/>
                            <img 
                            alt="star" 
                            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                            className="stars"/>
                            <img 
                            alt="plus" 
                            src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                            className="str-btn" onClick={this.addstars}/>
                            {/* type-2 to bind this in event like this */}
                            {/* this.addstars.bind(this) */}
                            <span className="starCount">{star}</span>
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