import { Component } from 'react'
import travelImage from '../../assets/travel-image.svg'
import './Counter.css'

class Counter extends Component {
  state = {
    timeSpentAbroad: 0,
    timeSpentInHometown: 0,
    numberOfTimeTravelled: 0,
  }

  onClickVisitedAbroad = () => {
    this.setState(prevState => ({
      timeSpentAbroad: prevState.timeSpentAbroad + 1,
    }))
  }

  onClickVisitedHomeTown = () => {
    this.setState(prevState => ({
      timeSpentInHometown: prevState.timeSpentInHometown + 1,
    }))
  }

  onClickTotal = () => {
    this.setState(prevState => ({
      numberOfTimeTravelled:
        prevState.timeSpentAbroad + prevState.timeSpentInHometown,
    }))
  }

  render() {
    const {
      timeSpentAbroad,
      timeSpentInHometown,
      numberOfTimeTravelled,
    } = this.state

    return (
      <div className="app-container">
        <h1 className="heading">Travel Tracking</h1>

        <img
          src={travelImage}
          alt="travel-image"
          className="travel-image"
        />

        <div className="counters-container">
          <p className="counter-text">
            Time spent abroad: <span>{timeSpentAbroad}</span>
          </p>

          <p className="counter-text">
            Time spent in hometown: <span>{timeSpentInHometown}</span>
          </p>

          <p className="counter-text">
            Number of Time Travelled: <span>{numberOfTimeTravelled}</span>
          </p>
        </div>

        <div className="buttons-container">
          <button
            type="button"
            className="button green-btn"
            onClick={this.onClickVisitedAbroad}
          >
            Visited Abroad
          </button>

          <button
            type="button"
            className="button green-btn"
            onClick={this.onClickVisitedHomeTown}
          >
            Visited Home Town
          </button>

          <button
            type="button"
            className="button blue-btn"
            onClick={this.onClickTotal}
          >
            Total
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
