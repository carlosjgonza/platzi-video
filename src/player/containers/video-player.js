import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';

import { formatTime } from '../../libs/utilities.js';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		durationFormatted: 0,
		currentTime: 0,
		currentTimeFormatted: 0,
		loading: false
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
			durationFormatted: formatTime(this.video.duration),
			duration: this.video.duration
		});
	}
	handleTimeUpdate = event => {
		this.setState({
			currentTimeFormatted: formatTime(this.video.currentTime),
			currentTime: this.video.currentTime
		});
	}
	handleProgressChange = event => {
		this.video.currentTime = event.target.value
	}
	handleSeeking = event => {
		this.setState({
			loading: true
		});
	}
	handleSeeked = event => {
		this.setState({
			loading: false
		});
	}
	render() {
		return (
			<VideoPlayerLayout>
				<Title
					title="Este es un titulo chido!!"
				/>
				<Controls>
					<PlayPause 
						pause={this.state.pause}
						handleClick={this.togglePlay}
					/>
					<Timer
						currentTime={this.state.currentTimeFormatted}
						duration={this.state.durationFormatted}
					/>
					<ProgressBar
						duration={this.state.duration}
						value={this.state.currentTime}
						handleProgressChange={this.handleProgressChange}
					/>
				</Controls>
				<Spinner 
					active={this.state.loading}
				/>
				<Video
					handleLoadedMetadata={this.handleLoadedMetadata}
					handleTimeUpdate={this.handleTimeUpdate}
					handleSeeking={this.handleSeeking}
					handleSeeked={this.handleSeeked}
					src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
					autoplay={this.props.autoplay}
					pause={this.state.pause}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;