import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import { formatTime } from '../../libs/utilities.js';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		currentTime: 0
	}
	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause
		})
	}
	componentDidMount() {
		this.setState({
			pause: (!this.props.autoplay)
		})
	}
	handleLoadedMetadata = event => {
		this.video = event.target;
		this.setState({
			duration: formatTime(this.video.duration),
		});
	}
	handleTimeUpdate = event => {
		this.setState({
			currentTime: formatTime(this.video.currentTime)
		});
	}
	render() {
		return (
			<VideoPlayerLayout>
				<Title
					title="Este es un titulo chido!!"
				/>
				<Video
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					autoplay={this.props.autoplay}
					pause={this.state.pause}
				/>
				<Controls>
					<PlayPause 
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer
						currentTime={this.state.currentTime}
						duration={this.state.duration}
					/>
				</Controls>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;