import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Related from '../components/related';

import Categories from '../../categories/components/categories';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../errors/containers/handleError';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
	state = {
		modalVisible: false
	}
	handleCloseModal = (event) => {
		this.setState({
			modalVisible: false,
		})
	}
	handleOpenModal = (media) => {
		this.setState({
			modalVisible: true,
			media,
		});
	}
	render() {
		return (
			<HandleError>
				<HomeLayout>
					<Related />
					
					<Categories 
						categories={this.props.data.categories} 
						handleOpenModal={this.handleOpenModal}
						/>
					{
						this.state.modalVisible && 
						<ModalContainer>
							<Modal
								handleClick={this.handleCloseModal}
							>
								<VideoPlayer
									autoplay
									src={this.state.media.src}
									title={this.state.media.title}
									author={this.state.media.author}
								/>
							</Modal>
						</ModalContainer>
					}
				</HomeLayout>
			</HandleError>
		)
	}
}

export default Home;