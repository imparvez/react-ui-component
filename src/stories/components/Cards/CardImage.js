import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default class CardImage extends Component {

    createClassName() {
      return [
        styles.cardImage,
        this.props.className,
      ].join(' ').trim();
    }
  
    render() {
      return (
        <CardImageComponent className={this.createClassName()}>
          {this.props.children}
        </CardImageComponent>
      );
    }
}

const CardImageComponent = styled.div`
  display: block;
  position: relative;
`

