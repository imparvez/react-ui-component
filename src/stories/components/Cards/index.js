import React, { Component } from 'react';
import styles from '../styles';
import styled from 'styled-components';

export default class Cards extends Component {

    createClassName() {
      return [
        styles.card,
        this.props.isFullwidth ? styles.isFullwidth : '',
        this.props.className,
      ].join(' ').trim();
    }
  
    render() {
      return (
        <CardComponent className={this.createClassName()}>
          {this.props.children}
        </CardComponent>
      );
    }
}

const CardComponent = styled.div`
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);
    color: #69707a;
    max-width: 100%;
    position: relative;
    width: 300px;
`