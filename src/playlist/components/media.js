import React, {Component} from 'react';
import './media.css';

class Media extends Component {
	render() {
		const styles = {
			container: {
				//fontSize: 18, //Lo transforma a px
				color: '#44546b',
				cursor: 'pointer',
				width: 260,
				border: '1px solid red'
			}
		}
		return (
			<div className="Media">
				<div className="Media-cover">
					<img
						src="./images/covers/bitcoin.jpg"
						alt=""
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">Why do you need learn react?</h3>
					<p className="Media-author">Carlos González</p>
				</div>
			</div>
		);
	}
}

export default Media;