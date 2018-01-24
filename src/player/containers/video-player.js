import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';

class VideoPlayer extends Component {
	render() {
		return (
			<VideoPlayerLayout>
				<Title
					title="Este es un titulo chido!!"
				/>
				<Video 
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					autoplay={true}/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;