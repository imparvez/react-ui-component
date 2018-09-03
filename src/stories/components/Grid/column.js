import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles';
import { getCallbacks } from '../../helper';
import styled from 'styled-components';

export default class Column extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    isMultiline: PropTypes.bool,
    size: PropTypes.oneOf([
      'is1',
      'is2',
      'is3',
      'is4',
      'is5',
      'is6',
      'is7',
      'is8',
      'is9',
      'is10',
      'is11',
      'is12',
      'isThreeQuarters',
      'isTwoThirds',
      'isHalf',
      'isOneThird',
      'isOneQuarter',
      'isThreeQuartersMobile',
      'isTwoThirdsMobile',
      'isHalfMobile',
      'isOneThirdMobile',
      'isOneQuarterMobile',
      'isThreeQuartersTablet',
      'isTwoThirdsTablet',
      'isHalfTablet',
      'isOneThirdTablet',
      'isOneQuarterTablet',
      'isThreeQuartersDesktop',
      'isTwoThirdsDesktop',
      'isHalfDesktop',
      'isOneThirdDesktop',
      'isOneQuarterDesktop',
      'isThreeQuartersWidescreen',
      'isTwoThirdsWidescreen',
      'isHalfWidescreen',
      'isOneThirdWidescreen',
      'isOneQuarterWidescreen',
      'isNarrow',
      'isNarrowMobile',
      'isNarrowTablet',
      'isNarrowDesktop',
      'isNarrowWidescreen',
      'isFull',
      'isFullMobile',
      'isFullTablet',
      'isFullDesktop',
      'isFullWidescreen',
    ]),
    offset: PropTypes.oneOf([
      'isOffsetThreeQuarters',
      'isOffsetTwoThirds',
      'isOffsetHalf',
      'isOffsetOneThird',
      'isOffsetOneQuarter',
      'isOffset1',
      'isOffset2',
      'isOffset3',
      'isOffset4',
      'isOffset5',
      'isOffset6',
      'isOffset7',
      'isOffset8',
      'isOffset9',
      'isOffset10',
      'isOffset11',
      'isOffset12',
      'isOffset1Mobile',
      'isOffset2Mobile',
      'isOffset3Mobile',
      'isOffset4Mobile',
      'isOffset5Mobile',
      'isOffset6Mobile',
      'isOffset7Mobile',
      'isOffset8Mobile',
      'isOffset9Mobile',
      'isOffset10Mobile',
      'isOffset11Mobile',
      'isOffset12Mobile',
      'isOffset1Tablet',
      'isOffset2Tablet',
      'isOffset3Tablet',
      'isOffset4Tablet',
      'isOffset5Tablet',
      'isOffset6Tablet',
      'isOffset7Tablet',
      'isOffset8Tablet',
      'isOffset9Tablet',
      'isOffset10Tablet',
      'isOffset11Tablet',
      'isOffset12Tablet',
      'isOffset1Desktop',
      'isOffset2Desktop',
      'isOffset3Desktop',
      'isOffset4Desktop',
      'isOffset5Desktop',
      'isOffset6Desktop',
      'isOffset7Desktop',
      'isOffset8Desktop',
      'isOffset9Desktop',
      'isOffset10Desktop',
      'isOffset11Desktop',
      'isOffset12Desktop',
      'isOffset1Widescreen',
      'isOffset2Widescreen',
      'isOffset3Widescreen',
      'isOffset4Widescreen',
      'isOffset5Widescreen',
      'isOffset6Widescreen',
      'isOffset7Widescreen',
      'isOffset8Widescreen',
      'isOffset9Widescreen',
      'isOffset10Widescreen',
      'isOffset11Widescreen',
      'isOffset12Widescreen',
    ]),
  };

  createClassName() {
    return [
      styles.column,
      styles[this.props.size],
      styles[this.props.offset],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <ColumnLayout
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.children}
      </ColumnLayout>
    );
  }
}

const ColumnLayout = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: normal;
    vertical-align: baseline;
    background-color: transparent;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 10px;

    &.is-three-quarters,
    &.is-three-quarters-tablet {
        @media screen and (min-width: 769px){
            -webkit-box-flex: 0;
            -webkit-flex: none;
            -ms-flex: none;
            flex: none;
            width: 75%;
        }
    }

    &.is-two-thirds,
    &.is-two-thirds-tablet {
      -webkit-box-flex: 0;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      width: 66.6666%;
    }

    &.is-half,
    &.is-half-tablet {
      -webkit-box-flex: 0;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      width: 50%;
    }

    &.is-one-third,
    &.is-one-third-tablet {
      -webkit-box-flex: 0;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      width: 33.3333%;
    }

    &.is-one-quarter, 
    &.is-one-quarter-tablet {
      -webkit-box-flex: 0;
      -webkit-flex: none;
      -ms-flex: none;
      flex: none;
      width: 25%;
  }
`