import React from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const Menu = (props) => {
    const {menu} = props;

    const {
        optionIndex,
		musicIndex,
		settingsIndex,
		options,
		musicVisible,
		menuVisible,
		settingVisible
    } = menu;

    let show = "No show Available";
    let menuArray, musicArray, settingArray, value;

    if(menuVisible === true) {
        show = "menu";
        menuArray = options.map((Object) => {
            const temp = Object.keys(Object);
            return temp[0];
        })
        const val = menuArray[optionIndex];
        value = val;
    }
    if(musicVisible === true){
        show = "music";
        musicArray = optionIndex[optionIndex].music;
        const val = musicArray[musicIndex];
        value = val;
    }
    if(settingVisible === true){
        show = "settings";
        settingArray = options[optionIndex].settings;

        const val = settingArray[settingsIndex];
        value = val;
    }
    const divStyling = (item) => {
        if(value === item){
            return {backgroundColor: "cyan"};
        }
        return {};
    }
    const imgStyling = (item) => {
        if(value === item) {
            return {display: "initial"};
        }
        return {};
    }
    
    let RenderMenu = "This menu will be rendered in future";
    
    // main menu
    if(show === "menu"){
        RenderMenu = menuArray.map((item) =>  (
                <div className={item}
                style={divStyling(item)}
                id="options">
                    <p style = {styles.text}>{item}</p>
                    <FaAngleRight style={imgStyling(item)}/>
                </div>
            )
        );
    }
    // music menu
    else if(show === "music"){
        RenderMenu = musicArray.map((item) => (
            <div className={item}
            style={divStyling(item)}
            id="options">
                <p style = {styles.text}>{item}</p>
                <FaAngleRight style={imgStyling(item)}/>
            </div>
            )
        );
    }
    // settings menu
    else if(show === "settings"){
        RenderMenu = settingArray.map((item) => 
        (
            <div className={item}
            style={divStyling(item)}
            id="options">
                <p style = {styles.text}>{item}</p>
                <FaAngleRight style={imgStyling(item)}/>
            </div>
            )
        );
    }
    return (
        <div className={menuVisible === false ? "menu hide": "menu"}
        style={styles.menu}>
            <div className="ipod-title" style={styles.title}>
                    <p style={{ borderRadiusTopLeft: "10%" }}>ipod.js</p>
                </div>
                {RenderMenu}
        </div>
    )
};

const styles = {
	title: {
		fontSize: "0.5rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		textShadow: "1px 2px 0px lightgray",
		borderRadiusTopLeft: "10%",
	},
	text: {
		marginLeft: "0.5rem",
		textTransform: "capitalize",
	},
	menu: {
		backgroundColor: "lightcyan",
		borderRadiusTopLeft: "30px",
	},
};
