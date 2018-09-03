import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default class CardHeader extends Component{
	createClassName() {
		return [
			styles.cardHeader,
			this.props.className,
		].join(' ').trim();
	}

	render(){
		return(
			<CardHeaderComponent className={this.createClassName()} >
				{this.props.children}
			</CardHeaderComponent>
		)
	}
}

const CardHeaderComponent = styled.header`
	-webkit-box-align: stretch;
	-webkit-align-items: stretch;
		-ms-flex-align: stretch;
			align-items: stretch;
	box-shadow: 0 1px 2px rgba(17, 17, 17, 0.1);
	display: -webkit-box;
	display: -webkit-flex;
	display: -ms-flexbox;
	display: flex;
	min-height: 40px;
`