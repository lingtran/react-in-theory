const React = require('react')
const ReactDom = require('react-dom')

class LikesCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount
    };
  }

  addToLikesCount (num) {
    this.setState({
      count: this.state.count + num
    })
  }

  render() {
    return (
      <div className="LikesCounter">
        <h3>Likes: {this.state.count}</h3>
        <div className="ActionButtons">
          <ActionButton text="Like! (+1)" handleClick={this.addToLikesCount.bind(this, 1)} />
          <ActionButton text="Dislike! (-1)" handleClick={this.addToLikesCount.bind(this, -1)} />
        </div>
      </div>
    )
  }
}

class ActionButton extends React.Component {
  render() {
    return (
      <button className="ActionButton" onClick={this.props.handleClick}>
        <span>{this.props.text}</span>
      </button>
    )
  }
}

ReactDom.render(<LikesCounter initialCount={0}/>, document.getElementById('application'))
