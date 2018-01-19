import React from 'react';
import PropTypes from 'prop-types';
import Media from './media.js';

import Play from '../../icons/components/play';
import Pause from '../../icons/components/pause';
import Volume from '../../icons/components/volume';
import FullScreen from '../../icons/components/fullscreen';

import './playlist.css';

function Playlist(props) {
	const playlist = props.data.categories[0].playlist;
	return (
		<div className='Playlist'>
			<Play color="red" size="30"/>
			<Volume color="green" size="30"/>
			<FullScreen color="blue" size="30" />
			<Pause color="black" size="30" />
			{
				playlist.map((item) => {
					return <Media key={item.id} {...item} />
				})
			}
		</div>
	)
}

export default Playlist;