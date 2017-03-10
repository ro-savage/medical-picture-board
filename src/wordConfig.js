// Top level images
import needImage from './word-images/need.png';
import painImage from './word-images/pain2.png';
import helloImage from './word-images/hello.png';
import feelImage from './word-images/feel.png';
import questionsImage from './word-images/questions/sayagain.png';


// greeting Images
import helloHugImage from './word-images/greeting/hello.png';
import goodbyeWaveImage from './word-images/greeting/goodbye.png';
import yesImage from './word-images/greeting/yes.svg';
import noImage from './word-images/greeting/no.svg';
import howareyouImage from './word-images/greeting/howareyou.png';

// Feel Images
import happyFaceImage from './word-images/feel/happy.png';
import sadFaceImage from './word-images/feel/sad.png';
import painFaceImage from './word-images/feel/pain.png';
import sickFaceImage from './word-images/feel/sick.png';

// Need Images
import foodImage from './word-images/need/food.svg';
import drinkImage from './word-images/need/drink.svg';
import medicineImage from './word-images/need/medicine.svg';
import toiletImage from './word-images/need/toilet.svg';

// Pain Images
import painHeadImage from './word-images/pain/pain-head.png';
import painArmsImage from './word-images/pain/pain-arms.png';
import painLegsImage from './word-images/pain/pain-legs.png';
import painChestImage from './word-images/pain/pain-chest.png';

// Question Images
import understandImage from './word-images/questions/understand.png';
import dontknowImage from './word-images/questions/dontknow.png';
import yesQImage from './word-images/questions/yes.svg';
import noQImage from './word-images/questions/no.svg';
import sayAgainImage from './word-images/questions/sayagain.png';

const hello = {
 hello: { id: 'hello', word: 'Hello', text: 'Hello!', image: helloHugImage },
 goodbye: { id:'goodbye', word: 'Goodbye', text: 'Bye bye', image: goodbyeWaveImage },
 good: { id: 'good', word: 'Good', text: 'Good!', image: yesImage },
 bad: { id: 'bad', word: 'Bad', text: 'Bad :(' , image: noImage},
 how: { id: 'how', word: 'How are you', text: 'How are you?', image: howareyouImage },
}

const pain = {
 head: { id: 'head', word: 'Head', text: 'Pain in my head', image: painHeadImage },
 arm: { id: 'arm', word: 'Arm', text: 'Pain in my arm', image: painArmsImage },
 leg: { id: 'leg', word: 'Leg', text: 'Pain in my leg', image: painLegsImage },
 body: { id: 'body', word: 'Body', text: 'Pain in my stomach / body', image: painChestImage },
}

const need = {
 food: { id: 'food', word: 'Food', text: 'I need food', image: foodImage, },
 water: { id: 'water', word: 'Water', text: 'I need water', image: drinkImage },
 pain: { id: 'pain', word: 'Pain Meds', text: 'I need pain medication', image: medicineImage },
 toilet: { id: 'toilet', word: 'Toilet', text: 'I need the toilet', image: toiletImage },
}

const feel = {
  happy: { id: 'happy',  word: 'Happy', text: 'I feel happy! :)', image: happyFaceImage },
  sad: { id: 'sad', word: 'Sad', text: 'I feel sad. :(', image: sadFaceImage },
  pain: { id: 'pain', word: 'Pain', text: 'I am in pain!', image: painFaceImage },
  sick: {id: 'sick',  word: 'Sick', text: 'I feel sick', image: sickFaceImage },
}

const questions = {
  understand: { id: 'understand', word: 'I understand', text: 'I understand', image: understandImage },
  nounderstand: { id: 'nounderstand', word: 'Don\'t understand', text: 'I don\'t know', image: dontknowImage },
  yes: { id: 'yes', word: 'Yes', text: 'Yes', image: yesQImage },
  no: { id: 'no', word: 'No', text:'No', image: noQImage },
  sayagain: { id: 'sayagain', word: 'Say again', text: 'Please say again', image: sayAgainImage }
}

const words = {
  hello: { id: 'hello', word: 'Hello', text: 'Greetings',  words: hello, color: 'blue', image: helloImage },
  pain: { id: 'pain', word: 'Pain', text: 'Pain', words: pain, color: 'red', image: painImage },
  need: { id: 'need', word: 'Need', text: 'I need', words: need, color: 'purple', image: needImage },
  feel: { id: 'feel', word: 'Feel', text: 'I feel', words: feel, color: 'green', image: feelImage  },
  questions: { id: 'questions', word: 'Questions', text: 'Question', words: questions, color: 'orange', image: questionsImage  },
}

export default words
