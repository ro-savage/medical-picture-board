import React from 'react'

import './WordButton.css' // uniqueID a3bs

const WordButton = (props) => {
  const textColor = props.color === 'white' ? 'black' : 'white'
  return (
    <div
      className="wordButton-container-a3bs"
      style={{ backgroundColor: props.color }}
      onClick={() => { props.onClick(props.id) }}
    >
      <img src={props.image} className="wordButton-image-a3bs" alt="logo" />
      <span className="wordButton-text-a3bs" style={{ color: textColor}}>{props.word}</span>
    </div>
  )
}

WordButton.propTypes = {
  id: React.PropTypes.string.isRequired,
  word: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
  color: React.PropTypes.string,
  wordObject: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

WordButton.defaultProps = {
  color: 'white',
}

export default WordButton
