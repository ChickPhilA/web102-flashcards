import { useState } from 'react'
import '../App.css'

const Flashcard = ({question, answer}) => {

    const [isFlippedToBack, setFlippedToBack] = useState(false) // all cards will always start off on the front by default

    return(
        <div className="card" onClick={() => setFlippedToBack(!isFlippedToBack)}>
            <div className={`inner ${isFlippedToBack ? "flipped" : ""}`}>

                <div className="front">
                    {question}
                </div>
                <div className="back">
                    {answer}
                </div>
            </div>
        </div>
    )
}

export default Flashcard