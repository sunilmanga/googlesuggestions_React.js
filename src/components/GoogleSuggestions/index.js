import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

export default class GoogleSuggestions extends Component {
  state = {ip: ''}

  ch = e => {
    const {ip} = this.state
    this.setState({ip: e.target.value})
  }

  c = suggestion => {
    this.setState({ip: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {ip} = this.state

    const se = suggestionsList.filter(ec => ec.suggestion.includes(ip))

    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
        />
        <div>
          <input
            onChange={this.ch}
            type="search"
            placeholder="Search Google"
            alt="search icon"
            value={ip}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />

          <ul>
            {se.map(ech => (
              <SuggestionItem key={ech.id} ech={ech} c={this.c} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
