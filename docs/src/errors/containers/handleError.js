import React, { Component } from 'react';
import RegularError from '../components/regular-error';

class HandleError extends Component {
	state = {
		handleError: false
	}
	componentDidCatch(error, info) {
		//TODO - Enviar el error a un servicio como sentry
		this.setState({
			handleError: true
		})
	}
	render() {
		if(this.state.handleError) {
			return (
				<RegularError />
			)
		}
		return this.props.children
	}
}

export default HandleError;