import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import styles from '../styles';

export default class Colors extends Component {
    createClassName(){
        return [
            styles.colors,
            styles[this.props.color],
            this.props.className
        ].join(' ').trim();
    }

    renderBody(){
        return this.props.safeHtml
            ? (<span dangerouslySetInnerHTML={{ __html: this.props.safeHtml }}></span>)
            : (<span>{this.props.children}</span>);
    }

    render(){
        return(
            <ColorPallete className={this.createClassName()}>
                {this.renderBody()}
            </ColorPallete>
        )
    }
}

const ColorPallete = styled.div`
    max-width: 147px;
    width: 100%;
    height: 147px;
    display: inline-block;
    margin: 30px;

    &.colorOne {
        background-color: #000000;
    }

    &.colorTwo {
        background-color: #1F2533;
    }

    &.colorThree {
        background-color: #555555;
    }

    &.colorFour {
        background-color: #777777;
    }

    &.colorFive {
        background-color: #CCCCCC;
    }

    &.colorSix {
        background-color: #EEEEEE;
    }

    &.colorSeven {
        background-color: #F5F5F5;
    }

    &.colorEight {
        background-color: #FFFFFF;
    }

    &.colorNine {
        background-color: #0378FF;
    }

    &.colorTen {
        background-color: #F2F8FF;
    }

    &.colorEleven {
        background-color: #FFF9E3;
    }

    &.colorTwelve {
        background-color: #4ABD5D;
    }

    &.colorThirteen {
        background-color: #FFCB01;
    }

    &.colorFourteen {
        background-color: #E8135D;
    }


`