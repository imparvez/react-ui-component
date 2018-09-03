import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import styles from '../styles';
import { getCallbacks } from '../../helper';

export default class Notification extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
    closeButtonProps: PropTypes.object,
    enableCloseButton: PropTypes.bool,
    color: PropTypes.oneOf([
      'isPrimary',
      'isInfo',
      'isSuccess',
      'isWarning',
      'isDanger',
    ]),
  };

  static defaultProps = {
    enableCloseButton: false,
    style: {},
    className: '',
  };

  createClassName() {
    return [
      styles.notification,
      styles[this.props.color],
      this.props.className,
    ].join(' ').trim();
  }

  render() {
    return (
      <NotificationLayout
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.enableCloseButton
          ? <button className={styles.delete} {...this.props.closeButtonProps} />
          : null}
        {this.props.children}
      </NotificationLayout>
    );
  }
}

const NotificationLayout = styled.div`
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  color: #69707a;
  line-height: 1.428571428571429;
  font-size: 14px;
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: normal;
  vertical-align: baseline;
  background-color: #f5f7fa;
  border-radius: 3px;
  padding: 16px 20px;
  position: relative;

  &.is-info {
    background-color: #42afe3;
    color: white;
  }
  &.is-warning {
    background-color: #fce473;
    color: rgba(17, 17, 17, 0.5);
  }
  &.is-success {
    background-color: #97cd76;
    color: white;
  }
  &.is-danger {
    background-color: #ed6c63;
    color: white
  }
`