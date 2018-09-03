import React, { Component } from 'react';
import styled from 'styled-components';
import styles from '../styles';

export default class Button extends Component {
    createClassName(){
        return [
            styles.button,
            styles[this.props.color],
            styles[this.props.size],
            styles[this.props.buttonStyle],
            styles[this.props.state],
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
            <ButtonComponent className={this.createClassName()}>
                {this.renderBody()}
            </ButtonComponent>
        )
    }
}

const ButtonComponent = styled.button`
    width: 100%;
    border-radius: 2px;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    outline: none;
    cursor: pointer;
    padding: 0;

    &.is-large {
        max-width: 343px;
        height: 50px;
    }

    &.is-half {
        max-width: 164px;
        height: 50px;
    }

    &.is-small {
        max-width: 120px;
        height: 30px;
        line-height: 30px;
    }

    &.is-primary {
        background-color: #0078FF;
        color: #FFFFFF;
        border: 1px solid #0078FF;
    }

    &.is-secondary {
        background-color: #FFFFFF;
        color: #0078FF;
        border: 1px solid #0078FF;
    }

    &.is-marketing {
        background-color: #E7374D;
        color: #FFFFFF;
        border: 1px solid #E7374D;
    }

    &.is-marketing-reverse {
        background-color: #fff;
        color: #E7374D;
    }
`