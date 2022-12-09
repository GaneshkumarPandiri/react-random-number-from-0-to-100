// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: '0'}

  generateNumber = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({number: randomNumber})

    // this.setState(item => ({number: randomNumber}))
  }

  render() {
    const {number} = this.state
    return (
      <div className="main-bg-container">
        <div className="card-bg-container">
          <h1 className="main-heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button-style"
            type="button"
            onClick={this.generateNumber}
          >
            Generate
          </button>
          <p className="main-heading">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
