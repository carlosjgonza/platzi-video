import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video.js';
import Title from '../components/title.js';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';

class VideoPlayer extends Component {
	state = {
		pause: true,
		duration: 0
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
			duration: this.video.duration,
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
						duration={this.state.duration}
					/>
				</Controls>
			</VideoPlayerLayout>
		)
	}
}

export default VideoPlayer;