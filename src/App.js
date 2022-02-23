import React, {Component} from 'react'
import Table from './table.js'
import Form from './Form.js'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = index => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({
      characters: [...this.state.characters, character],
    })
  }
 
  render() {
    const {characters} = this.state;
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App