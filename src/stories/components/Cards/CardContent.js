import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default class CardContent extends Component{
	createClassName() {
	    return [
	      styles.cardContent,
	      this.props.className,
	    ].join(' ').trim();
	}

	render(){
		return(
			<CardContentComponent className={this.createClassName()}>
	        {this.props.children}
	    	</CardContentComponent>
		)
	}
}

const CardContentComponent = styled.div`
	padding: 20px;
`