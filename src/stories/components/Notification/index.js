import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
      <div
        {...getCallbacks(this.props)}
        className={this.createClassName()}
        style={this.props.style}
      >
        {this.props.enableCloseButton
          ? <button className={styles.delete} {...this.props.closeButtonProps} />
          : null}
        {this.props.children}
      </div>
    );
  }
}