// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speedCount: 0}

  onIncrement = () => {
    const {speedCount} = this.state
    if (speedCount < 200) {
      this.setState(prevState => ({
        speedCount: prevState.speedCount + 10,
      }))
    }
  }

  onDecrement = () => {
    const {speedCount} = this.state
    if (speedCount > 0) {
      this.setState(prevState => ({
        speedCount: prevState.speedCount - 10,
      }))
    }
  }

  render() {
    const {speedCount} = this.state

    return (
      <div className="bg">
        <h1 className="mainHeading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h3 className="heading">Speed is {speedCount}mph</h3>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="btn1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="btn2" onClick={this.onDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
