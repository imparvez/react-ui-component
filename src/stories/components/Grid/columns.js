import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';
import { getCallbacks } from '../../helper';
import styled from 'styled-components';

export default class Columns extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    responsive: PropTypes.oneOf([
      'isMobile',
      'isDesktop',
      'isTablet',
    ]),
    isMultiline: PropTypes.bool,
    isGapless: PropTypes.bool,
  };

  createClassName() {
    return [
      styles.columns,
      styles[this.props.responsive],
      this.props.isMultiline ? styles.isMultiline : '',
      this.props.isGapless ? styles.isGapless : '',
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <ColumnsLayout
        {...getCallbacks(this.props)}
        style={this.props.style}
        className={this.createClassName()}
      >
        {this.props.children}
      </ColumnsLayout>
    );
  }
}

const ColumnsLayout = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    background-color: transparent;
    margin-left: -10px;
    margin-right: -10px;
    margin-top: -10px;

    &:last-child {
        margin-bottom: -10px;
    }

    @media screen and (min-width: 769px){
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
    }

    &.is-multiline {
      -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
              flex-wrap: wrap;
    }
`