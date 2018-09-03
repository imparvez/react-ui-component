import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default class Image extends Component {

    createClassName() {
      return [
        styles[this.props.size],
        this.props.className,
      ].join(' ').trim();
    }
  
    render() {
      return (
        <ImageComponent
          className={this.createClassName()}
          style={this.props.style}
        >
          <img src={this.props.src} alt={this.props.alt} />
        </ImageComponent>
      );
    }
}

const ImageComponent = styled.figure`
  margin: 0;

  & img {
    display: block;
    height: auto;
    width: 100%;
  }
  &.is-16x16 {
    height: 16px;
    width: 16px;
  }
  &.is-24x24 {
    height: 24px;
    width: 24px;
  }
  &.is-32x32 {
    height: 32px;
    width: 32px;
  }
  &.is-64x64 {
    height: 64px;
    width: 64px;
  }
  &.is-128x128 {
    height: 128px;
    width: 128px;
  }
  &.is-256x256 {
    height: 256px;
    width: 256px;
  }
  &.is-300x225 {
    height: 300px;
    width: 225px;
  }
  &.is-480x480 {
    height: 480px;
    width: 480px;
  }
  &.is-480x320 {
    height: 320px;
    width: 480px;
  }
`;