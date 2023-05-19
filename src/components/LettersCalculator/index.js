import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    textInput: '',
  }

  onUserInput = event => {
    this.setState({
      textInput: event.target.value,
    })
  }

  render() {
    const {textInput} = this.state
    return (
      <div className="bg-container">
        <form className="text-continer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input-container">
            <label htmlFor="name" className="description">
              Enter the phrase
            </label>

            <input
              id="name"
              onChange={this.onUserInput}
              placeholder="Enter the phrase"
              type="text"
              className="text"
            />
          </div>

          <div className="count-container">
            <p className="count">No.of letters: {textInput.trim().length}</p>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}

export default LettersCalculator
