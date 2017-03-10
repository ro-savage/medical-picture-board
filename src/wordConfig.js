// Top level images
import needImage from './word-images/need.png';
import painImage from './word-images/pain2.png';
import helloImage from './word-images/hello.png';
import feelImage from './word-images/feel.png';

// Feel Images
import happyFaceImage from './word-images/feel/happy.png';
import sadFaceImage from './word-images/feel/sad.png';
import painFaceImage from './word-images/feel/pain.png';
import sickFaceImage from './word-images/feel/sick.png';


const hello = {
 hello: { id: 'hello', word: 'Hello', text: 'Hello!' },
 goodbye: { id:'goodbye', word: 'Goodbye', text: 'Bye bye' },
 good: { id: 'good', word: 'Good', text: 'Good!'  },
 bad: { id: 'bad', word: 'Bad', text: 'Bad :(' },
 how: { id: 'how', word: 'How are you', text: 'How are you?' },
}

const pain = {
 head: { id: 'head', word: 'Head', text: 'Pain in my head' },
 arm: { id: 'arm', word: 'Arm', text: 'Pain in my arm' },
 leg: { id: 'leg', word: 'Leg', text: 'Pain in my leg' },
 body: { id: 'body', word: 'Body', text: 'Pain in my stomach / body' },
}

const need = {
 food: { id: 'food', word: 'Food', text: 'I need food' },
 water: { id: 'water', word: 'Water', text: 'I need water' },
 pain: { id: 'pain', word: 'Pain Meds', text: 'I need pain medication' },
 toilet: { id: 'toilet', word: 'Toilet', text: 'I need the toilet' },
}

const feel = {
  happy: { id: 'happy',  word: 'Happy', text: 'I feel happy! :)', image: happyFaceImage },
  sad: { id: 'sad', word: 'Sad', text: 'I feel sad. :(', image: sadFaceImage },
  pain: { id: 'pain', word: 'Pain', text: 'I am in pain!', image: painFaceImage },
  sick: {id: 'sick',  word: 'Sick', text: 'I feel sick', image: sickFaceImage },
}

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
