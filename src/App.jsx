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

function App() {

  let startingPoint = Math.floor(Math.random() * cards.length) // the starting index of the flashcard it'll be randomized to
  const [currentIndex, setCurrentIndex] = useState(startingPoint)

  return (
    <div>
      <h1 className="title"> Coffee-Break Study</h1>
      <h3> Think you're a coffee expert? Test yourself against these flashcards and these
        build of coffee drinks. </h3>
      <h4> Total number of cards: {cards.length} </h4>

      <Flashcard question={cards[currentIndex].question} answer={cards[currentIndex].answer} />
    </div>
  )
}

export default App
