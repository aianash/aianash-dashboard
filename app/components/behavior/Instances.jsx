import React, {PropTypes, Component} from 'react'
import styles from 'css/main'
import _ from 'lodash'
const cx = require('classnames/bind').bind(styles)


export default class Instances extends Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  static propTypes = {
    selected: PropTypes.number,
    instances: PropTypes.object.isRequired,
    onClick: PropTypes.func
  }

  onClick(idx, span, event) {
    this.setState({selected: span[2]})
    this.props.onClick(idx, span)
    event.preventDefault()
  }

  render() {
    const spans = this.props.instances.spans || []
    const span = spans[this.props.selected]
    const hours =
      _.range(1, 25).map((hr) => {
        const idx =
          _.findIndex(spans, (span) =>
            hr >= span[0] && hr <= span[1]
          )
        const selected = {selected: (this.props.selected == idx)}
        return (
          <div key={hr}
               className={cx(`span-${idx + 1}`, selected)}
               onClick={this.onClick.bind(null, idx, spans[idx])}>
            {hr > 12 ? `${hr - 12} PM` : `${hr} AM`}
          </div>)
      })

    return (
      <div className={cx('instances-view')}>
        {hours}
        <p>{span ? span[2]: 'Click to select'}</p>
      </div>
    )
  }
}