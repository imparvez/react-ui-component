import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';
import styled from 'styled-components';

const TitleComponent = styled.p`
    &.title,
    &.subtitle {
    margin: 0 0 20px;
    padding: 0;
    font-weight: 300;
    word-break: break-word;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }
    &.title {
    &.is-1 {
        font-size: 48px;
    }
    &.is-2 {
        font-size: 40px;
    }
    &.is-3 {
        font-size: 28px;
    }
    &.is-4 {
        font-size: 24px;
    }
    &.is-5 {
        font-size: 18px;
    }
    &.is-6 {
        font-size: 14px;
    }
    }
`;

export default class Title extends Component{

	createClassName() {
	    return [
	      styles.title,
	      styles[this.props.size],
	      this.props.className,
	    ].join(' ').trim();
	}


	render(){
		return(
            <TitleComponent {...this.props} className={this.createClassName()}>
                {this.props.children}
            </TitleComponent>
		)
	}
};

Title.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    size: PropTypes.oneOf([
      'is1',
      'is2',
      'is3',
      'is4',
      'is5',
      'is6',
    ]),
};
