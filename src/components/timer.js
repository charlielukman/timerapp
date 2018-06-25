import React, { Component } from 'react'

class Timer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {countdown: 1500}
  }
  componentWillUnmount () {
    clearInterval(this.timer)
  }
  tick () {
    (this.state.countdown!==0)
    ? 
    this.setState({countdown: (this.state.countdown - 1)})
    :
    this.setState({countdown: 0})
  }
  startTimer () {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
  }
  stopTimer () {
    this.setState({countdown: 1500});
    clearInterval(this.timer)
  }
  render () {
    let minute = Math.round(Math.floor(this.state.countdown/60));
    minute = minute<9 ? `0${minute}` : minute;
    let second = this.state.countdown%60;
    second = second<9 ? `0${second}` : second;
    return (
      <div className='timers'>
        <h1>{minute}:{second}</h1>
        <div>
          <button onClick={this.startTimer.bind(this)}>Start</button>
          <button onClick={this.stopTimer.bind(this)}>Stop</button>
        </div>
      </div>
    )
  }
}

export default Timer;
