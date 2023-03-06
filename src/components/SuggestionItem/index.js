import './index.css'

const SuggestionItem = props => {
  const {ech, key, c} = props
  const {id, suggestion} = ech
  const ch = () => {
    c(suggestion)
  }

  return (
    <li className="li">
      <p>{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        onClick={ch}
      />
    </li>
  )
}
export default SuggestionItem
