import React from 'react';
import './App.css'; // unique id jah17anz4

import WordButton from './components/WordButton/WordButton'

import allWords from './wordConfig'
// import speak from './speak'

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
    const words = this.state.selectedWord.words || allWords
    const selectedWord = words[word]
    this.setState({
      selectedWord: selectedWord,
      text: selectedWord.text
    })
    // speak(selectedWord.text)
  }
  render() {
    const { selectedWord } = this.state
    const words = this.state.selectedWord.words || allWords
    return (
      <div className="App">
        <div className="App-header">
          <span className="displayText-jah17anz4">{this.state.text}</span>
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
                color={selectedWord.color || val.color}
                onClick={this.clickWord}
              />
            })
          }
        </div>
      </div>
    );
  }
}

// {
//   Object.keys(words).map( key => {
//     return <WordButton
//       key={words[key].id}
//       id={words[key].id}
//       wordObject={words[key]}
//       word={words[key].word}
//       image={words[key].image}
//       color={selectedWord.color || words[key].color}
//       onClick={this.clickWord}
//     />
//   })
// }

export default App;
