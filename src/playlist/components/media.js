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
						src={this.props.image}
						alt=""
						width={260}
						height={160}
						className="Media-image"
					/>
					<h3 className="Media-title">{this.props.title}</h3>
					<p className="Media-author">{this.props.author}</p>
				</div>
			</div>
		);
	}
}

export default Media;