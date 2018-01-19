import React from 'react';
import PropTypes from 'prop-types';
import Media from './media.js';
import './playlist.css';

function Playlist(props) {
	const playlist = props.data.categories[0].playlist;
	return (
		<div className='Playlist'>
			{
				playlist.map((item) => {
					return <Media key={item.id} {...item} />
				})
			}
		</div>
	)
}

export default Playlist;