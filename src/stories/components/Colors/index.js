import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import styles from '../styles';

const colorsStyle = {
    fontSize: '24px',
    fontFamily: 'monospace',
    textTransform: 'capitalize',
    margin: '10px',
    padding: '10px',
    border: '1px dashed',
    maxWidth: '150px',
    textAlign: 'center',
    display: 'inline-block',
}
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
            <ColorPallete style={colorsStyle} className={this.createClassName()}>
                {this.renderBody()}
            </ColorPallete>
        )
    }
}

const ColorPallete = styled.div`
    &.colorOne {
        color: #000000;
    }

    &.colorTwo {
        color: #1F2533;
    }

    &.colorThree {
        color: #555555;
    }

    &.colorFour {
        color: #777777;
    }

    &.colorFive {
        color: #CCCCCC;
    }

    &.colorSix {
        color: #EEEEEE;
    }

    &.colorSeven {
        color: #F5F5F5;
    }

    &.colorEight {
        color: #FFFFFF;
    }

    &.colorNine {
        color: #0378FF;
    }

    &.colorTen {
        color: #F2F8FF;
    }

    &.colorEleven {
        color: #FFF9E3;
    }

    &.colorTwelve {
        color: #4ABD5D;
    }

    &.colorThirteen {
        color: #FFCB01;
    }

    &.colorFourteen {
        color: #E8135D;
    }


`