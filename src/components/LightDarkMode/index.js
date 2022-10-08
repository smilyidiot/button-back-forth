// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {status: true}

  onClickButton = () => {
    const {status} = this.state
    this.setState({status: !status})
  }

  render() {
    const {status} = this.state
    const mode = status ? 'blackCard' : 'lightCard'
    const buttonMode = status ? 'darkCardBton' : 'lightCardBton'
    const buttonText = status ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-cont">
        <div className={mode}>
          <h1>Click To Change Mode</h1>
          <button
            type="button"
            className={buttonMode}
            // onClick={this.onClickButton}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
