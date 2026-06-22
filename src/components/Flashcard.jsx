import { useState } from 'react'
import '../App.css'

const Flashcard = ({question, answer, isFlippedToBack, setFlippedToBack}) => {

    const [currentInput, setCurrentInput] = useState('')
    const [result, setResult] = useState('')

    const validateGuess = (guess) => {
        if(guess.toLowerCase() === answer.toLowerCase()) {
            setResult("correct")
            setTimeout(() => setResult(''), 2000)
        }
        else {
            setResult("wrong")
            setTimeout(() => setResult(''), 2000)
        }
    }

    return(
        <>
            <div className="card" onClick={() => setFlippedToBack(!isFlippedToBack)}>
                <div className={`inner ${isFlippedToBack ? "flipped" : ""}  ${result ?? ''}`}> {/* Used a nullish coalescing operator for result*/}
                    <div className="front">
                        {question}
                    </div>
                    <div className="back">
                        {answer}
                    </div>
                </div>
            </div>

            <input type="text" value={currentInput} placeholder="Enter guess, then press 'Enter'" onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={(e) => { /* passing what's in the currentInput state to the guess*/
                if (e.key === 'Enter') {
                    validateGuess(currentInput)
                }
            }}/>
        </>
    )
}

export default Flashcard