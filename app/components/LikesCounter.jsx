const React = require('react')
const ReactDom = require('react-dom')

class LikesCounter extends React.Component {
  render() {
    return (
      <div className="LikesCounter">
        <h3>Likes: 0</h3>
        <div className="ActionButtons">
          <ActionButton text="Like! (+1)" />
          <ActionButton text="Dislike! (-1)" />
        </div>
      </div>
    )
  }
}

class ActionButton extends React.Component {
  render() {
    return (
      <button className="ActionButton">
        <span>{this.props.text}</span>
      </button>
    )
  }
}

ReactDom.render(<LikesCounter />, document.getElementById('application'))
