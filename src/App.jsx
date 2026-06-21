import { useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import './App.css'

const cards = [
  {question: "Made from a brewer and a filter. The simple and traditional way", answer: "Coffee (black)"},
  {question: "Pulled under intense pressure of hot water through a puck-shape of coffee grounds", answer: "Espresso"},
  {question: "Espresso + steamed milk + crema foam", answer: "Latte"},
  {question: "Chocolate sauce + espresso + steamed milk + crema foam", answer: "Mocha"},
  {question: "Shot(s) of espresso diluted with a body of steamed water", answer: "Americano"},
  {question: "Coffee grounds brewed immediately over ice", answer: "Iced Coffee"},
  {question: "Concentrated coffee grounds brewed in cold water for around 16-20 hours, without direct sunlight", answer: "Cold Brew"},
  {question: "An upside-down vanilla latte, where vanilla is layered with steamed milk, foam, espresso shots, and a caramel crosshatch drizzle.", answer: "Caramel Macchiato"},
  {question: "Double ristretto espresso shots + steamed whole milk, and a thin microfoam layer on top", answer: "Flat White"}
]

// these will be used to track which cards we already went through
const visited = new Set()

const generateRandomIndex = () => {
  // Edge case: if the Set is full
  if(visited.size == cards.length) {
    visited.clear()
  }

  let num = Math.floor(Math.random() * cards.length)

  // the while loop continuously searches for a number NOT in the set
  while(true) {
    // If this randomized index does not exist in the set...
    if(!visited.has(num)) {
      visited.add(num) // ...we add it to our set 
      break;
    }
    else {
      num = Math.floor(Math.random() * cards.length)
    }
  }

  return num
}

  let startingPoint = Math.floor(Math.random() * cards.length) // the starting index of the flashcard it'll be randomized to
  visited.add(startingPoint) // mark the beginning index

function App() {

  const [currentIndex, setCurrentIndex] = useState(startingPoint)

  return (
    <div>
      <h1 className="title"> Coffee-Break Study</h1>
      <h3> Think you're a coffee expert? Test yourself against these flashcards and these
        build of coffee drinks. </h3>
      <h4> Total number of cards: {cards.length} </h4>

      <Flashcard question={cards[currentIndex].question} answer={cards[currentIndex].answer} />

      <input type="input" value="currentGuess"onChange={(e) => setCurrentInput(e.target.value)} />
      <button> Previous Card </button>
      <button onClick={() => setCurrentIndex(generateRandomIndex())}> Next Card </button>
    </div>
  )
}

export default App
