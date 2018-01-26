import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

import { formatTime, isFullScreen, exitFullScreen, requestFullScreen } from '../../libs/utilities.js';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0,
		durationFormatted: 0,
		currentTime: 0,
		currentTimeFormatted: 0,
		loading: false,
		volume: 0.5,
		lastVolume: 0.5,
		mute: false,
	}
	togglePlay = (event) => {
		this.setState({
			pause: !this.state.pause
		});
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
	handleVolumeChange = event => {
		this.video.volume = event.target.value;
		this.setState({
			volume: event.target.value,
		});
	}
	handleVolumeClick = event => {
		this.setState({
			mute: !this.state.mute,
			volume: (this.state.mute) ? this.state.lastVolume : 0,
			lastVolume: (this.state.mute) ? this.state.lastVolume : this.state.volume,
		});

		this.video.volume = (!this.state.mute) ? 0 : this.state.lastVolume;
	}
	handleFullScreenClick = event => {
		if(!isFullScreen()) {
			requestFullScreen(this.player);
		} else {
			exitFullScreen();
		}
	}
	setRef = element => {
		this.player = element;
	}
	render() {
		return (
			<VideoPlayerLayout
				setRef={this.setRef}
			>
				<Title
					title={this.props.title}
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
					<Volume
						volume={this.state.volume}
						handleVolumeChange={this.handleVolumeChange}
						handleVolumeClick={this.handleVolumeClick}
					/>
					<FullScreen 
						handleFullScreenClick={this.handleFullScreenClick}
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
					src={this.props.src}
					autoplay={this.props.autoplay}
					pause={this.state.pause}
				/>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;