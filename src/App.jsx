import { useState } from 'react'
import Flashcard from './components/Flashcard.jsx'
import './App.css'

const cards = [
  {question: "Made from a brewer and a filter. The simple and traditional way", answer: "Coffee"},
  {question: "Pulled under intense pressure of hot water through a puck-shape of coffee grounds", answer: "Espresso"},
  {question: "Espresso + steamed milk + crema foam", answer: "Latte"},
  {question: "Chocolate sauce + espresso + steamed milk + crema foam", answer: "Mocha"},
  {question: "Shot(s) of espresso diluted with a body of steamed water", answer: "Americano"},
  {question: "Coffee grounds brewed immediately over ice", answer: "Iced Coffee"},
  {question: "Concentrated coffee grounds brewed in cold water for around 16-20 hours, without direct sunlight", answer: "Cold Brew"},
  {question: "An upside-down vanilla latte, where vanilla is layered with steamed milk, foam, espresso shots, and a caramel crosshatch drizzle.", answer: "Caramel Macchiato"},
  {question: "Double ristretto espresso shots + steamed whole milk, and a thin microfoam layer on top", answer: "Flat White"}
]

/* As of part 2, generating a random number and using a Set will not be necessary
any more. The objective is to now start in order, then shuffle the order around.
Navigation will be done by changing state by incrmenting or decrementing the index number.

// these will be used to track which cards we already went through
// const visited = new Set()

// const generateRandomIndex = () => {
//   // Edge case: if the Set is full
//   if(visited.size == cards.length) {
//     visited.clear()
//   }

//   let num = Math.floor(Math.random() * cards.length)

//   // the while loop continuously searches for a number NOT in the set
//   while(true) {
//     // If this randomized index does not exist in the set...
//     if(!visited.has(num)) {
//       visited.add(num) // ...we add it to our set 
//       break;
//     }
//     else {
//       num = Math.floor(Math.random() * cards.length)
//     }
//   }

//   return num
// }


  let startingPoint = Math.floor(Math.random() * cards.length) // the starting index of the flashcard it'll be randomized to
  visited.add(startingPoint) // mark the beginning index

*/
function App() {

  const [deck, setDeck] = useState(cards) // cards was made into a state called deck, to easier mutate shuffled cards
  const [currentIndex, setCurrentIndex] = useState(0) // will now start at 0, as of part 2
  const [isFlippedToBack, setFlippedToBack] = useState(false)

  const atStart = currentIndex === 0
  const atEnd = currentIndex === (deck.length - 1)

  const shuffleOrder = (deck) => {
    setCurrentIndex(0)
    setFlippedToBack(false)
    setDeck([...deck].sort(() => Math.random() - 0.5))
  }

  // checks whether the previous or next button cards can click or not, based on where the current index is on the card length
  const checkBoundaries = (action) => {
    const canNavigate = action === 'prev' ? currentIndex > 0 : currentIndex < deck.length - 1
    if (!canNavigate) return

    const nextIndex = action === 'prev' ? currentIndex - 1 : currentIndex + 1

    if (isFlippedToBack) {
      setFlippedToBack(false)
      setTimeout(() => setCurrentIndex(nextIndex), 150)
    } else {
      setCurrentIndex(nextIndex)
    }
  }

  return (
    <div>
      <h1 className="title"> Coffee-Break Study</h1>
      <h3> Think you're a coffee expert? Test yourself against these flashcards and these
        build of coffee drinks. </h3>
      <h4> Total number of cards: {cards.length} </h4>

      <Flashcard question={deck[currentIndex].question} answer={deck[currentIndex].answer} isFlippedToBack={isFlippedToBack} setFlippedToBack={setFlippedToBack} />

      <div className="buttons">
        <button id="prev" disabled={atStart} onClick={() => checkBoundaries('prev')}> Previous Card </button>
        <button id="next" disabled={atEnd} onClick={() => checkBoundaries('next')}> Next Card </button>

        <button onClick={() => shuffleOrder(cards)}> Shuffle Cards </button>
      </div>
    </div>
  )
}

export default App
