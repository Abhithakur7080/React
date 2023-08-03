import { Component } from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";

export default class HomePage extends Component{
    render(){
        return(
            <div className="homepage">
                <Hero/>
                <Skills/>
                <About/>
            </div>
        )
    }
}