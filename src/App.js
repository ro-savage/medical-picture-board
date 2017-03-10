import React from 'react';
import './App.css'; // unique id jah17anz4

import WordButton from './components/WordButton/WordButton'

import words from './wordConfig'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedWord: {},
      text: '',
    }
    this.clickWord = this.clickWord.bind(this)
  }

  clickWord(word) {
    console.log(word)
    const selectedWord = words[word]
    this.setState({
      selectedWord: selectedWord,
      text: selectedWord.text
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.text}</h2>
        </div>
        <div className="words-jah17anz4">
          {
            Object.values(words).map( val => {
              return <WordButton
                key={val.id}
                id={val.id}
                wordObject={val}
                word={val.word}
                image={val.image}
                color={val.color}
                onClick={this.clickWord}
              />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
