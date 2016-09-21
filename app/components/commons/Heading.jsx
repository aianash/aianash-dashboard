import React, {PropTypes, Component} from 'react'
import styles from 'css/main'

const cx = require('classnames/bind').bind(styles)

export default class Heading extends Component {
  static defaultProps = {
    highlight: true,
    centered: true
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    highlight: PropTypes.bool,
    centered: PropTypes.bool
  }

  render() {
    const {title, highlight, centered, ...others} = this.props
    return (
      <div className={cx('hd-cont', {'hd-center': centered})} {...others}>
        <span className={cx('md-hd', {'hd-hg': highlight})}>{title}</span>
      </div>
    )
  }
}