import needImage from './word-images/need.png';
import painImage from './word-images/pain2.png';
import helloImage from './word-images/hello.png';
import feelImage from './word-images/feel.png';


const hello = [
  { word: 'Hello' },
  { word: 'Goodbye' },
  { word: 'Good' },
  { word: 'Bad' },
]

const pain = [
  { word: 'Head' },
  { word: 'Arm' },
  { word: 'Leg' },
  { word: 'Body' },
]

const need = [
  { word: 'Food' },
  { word: 'Water' },
  { word: 'Pain Meds' },
  { word: 'Toilet' },
]

const feel = [
  { word: 'Happy' },
  { word: 'Sad' },
  { word: 'Pain' },
  { word: 'Sick' },
]

const questions = [
  { word: 'Don\'t understand' },
  { word: 'I understand' },
  { word: 'Yes' },
  { word: 'No' }
]

const words = {
  hello: { id: 'hello', word: 'Hello', text: 'Greetings',  words: hello, color: 'blue', image: helloImage },
  pain: { id: 'pain', word: 'Pain', text: 'Pain', words: pain, color: 'red', image: painImage },
  need: { id: 'need', word: 'Need', text: 'I need', words: need, color: 'purple', image: needImage },
  feel: { id: 'feel', word: 'Feel', text: 'I feel', words: feel, color: 'green', image: feelImage  },
}

export default words
