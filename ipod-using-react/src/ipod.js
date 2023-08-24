import {Component} from "react";
import sound from './songs/Baby(PaglaSongs).mp3';
import ZingTouch from 'zingtouch';
import styled from 'styled-components'

class Ipod extends Component{
    constructor(){
        super();
        this.state = {
            activeItem: 'NowPlaying',
            activePage: 'Home',
            enter: 0,
            play: true
        }
    }
    handleWheelRotate = ()=> {
        const containerElement = document.getElementById('inner-container');
        const activeRegion = new ZingTouch.Region(containerElement);

        let change = 0;
        let self = this;
        self.state.enter = self.state.enter + 1;

        
    }
}