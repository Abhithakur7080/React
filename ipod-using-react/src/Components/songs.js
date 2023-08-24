import React from "react";
import styled from "styled-components";

const Songs = (props) => {
    const { songsList, handleUpdateProgress, progressRef } = props;
	const { songs, thumbnails, songIndex, name } = songsList;
	const audio = songs[songIndex];

    audio.addEventListener("timeupdate", (event) => {
		handleUpdateProgress(event);
	});
    return (
		<Player className="music-player">
			<SongInfo className="song-info">
				<ImageCont className="image">
					<img
						src={thumbnails[songIndex]}
						alt="song-thumbnail"
						style={{ height: "100%", width: "100%" }}
					/>
				</ImageCont>
				<Title>{name[songIndex]}</Title>
			</SongInfo>
			<ProgressContainer className="progress-container">
				<div className="progress" ref={progressRef}></div>
			</ProgressContainer>
		</Player>
	);
}
const Player = styled.div`
    height: "100%",
	width: "100%",
	text-transform: "capitalize",
	border-top-left-radius: "30px",
	border-top-right-radius: "30px",
	z-index: 5,
	display: "flex",
	flex-direction: "column",
	justify-content: "space-evenly",
	align-items: "center",
	overflow: "hidden",
	background-color: "black",
`
const SongInfo = styled.div`
    height: "100%",
    width: "100%",
    display: "flex",
    flex-direction: "column",
    margin-top: "-40px",
    overflow: "hidden",
    justify-content: "center",
    align-items: "center",
`
const Title = styled.div`
	text-align: "center",
	margin-top: "20px",
	width: "90%",
	color: "white",
	font-weight: "bolder",
	font-size: "30px",
	letter-spacing: "0.15rem",
` 
const ImageCont = styled.div`
    border: "2px solid white",
	height: "50%",
	width: "50%",
`
const ProgressContainer = styled.div`
    height: "7px",
	background-color: "#fff",
	width: "90%",
	border-radius: "50px",
	margin-top: "-50px",
`
export default Songs;