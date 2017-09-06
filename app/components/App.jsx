const React = require('react')
const ReactDom = require('react-dom')
const LikesCounter = require('./LikesCounter')

class App extends React.Component {
  render () {
    return (
      <LikesCounter initialCount={0}/>
    )
  }
}

ReactDom.render( <App />, document.getElementById('application'))
