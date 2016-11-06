import React from 'react'
import { connect } from 'react-redux'

let Slider = props =>
  <input
    type="range"
    min={props.min}
    max={props.max}
    defaultValue={props.value}
    style={props.style}
    onChange={event => props.dispatch({ type: props.action, value: event.target.value })}
  />

export default connect()(Slider)